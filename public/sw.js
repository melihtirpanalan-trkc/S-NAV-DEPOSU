const CACHE_NAME = 'sinav-havuzu-v3';

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(['./', './index.html']).catch(() => {});
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  // For static hashed assets (/assets/*), serve from cache immediately if available, and update in background
  if (url.pathname.includes('/assets/') || url.pathname.endsWith('.js') || url.pathname.endsWith('.css')) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) =>
        cache.match(event.request).then((cachedResponse) => {
          const fetchPromise = fetch(event.request)
            .then((networkResponse) => {
              if (networkResponse && networkResponse.status === 200) {
                cache.put(event.request, networkResponse.clone());
              }
              return networkResponse;
            })
            .catch(() => cachedResponse);
          return cachedResponse || fetchPromise;
        })
      )
    );
    return;
  }

  // For navigation / HTML requests: try network with a 3-second timeout (in case mobile carrier hangs), fallback to cache
  event.respondWith(
    new Promise((resolve) => {
      let settled = false;
      const timer = setTimeout(() => {
        if (!settled) {
          caches.match(event.request).then((cached) => {
            if (cached && !settled) {
              settled = true;
              resolve(cached);
            } else {
              caches.match('./index.html').then((fallback) => {
                if (fallback && !settled) {
                  settled = true;
                  resolve(fallback);
                }
              });
            }
          });
        }
      }, 3000);

      fetch(event.request)
        .then((response) => {
          clearTimeout(timer);
          if (!settled) {
            settled = true;
            if (response && response.status === 200) {
              const copy = response.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
            }
            resolve(response);
          }
        })
        .catch(() => {
          clearTimeout(timer);
          if (!settled) {
            settled = true;
            caches.match(event.request).then((cached) => {
              if (cached) {
                resolve(cached);
              } else {
                caches.match('./index.html').then((fallback) => resolve(fallback));
              }
            });
          }
        });
    })
  );
});
