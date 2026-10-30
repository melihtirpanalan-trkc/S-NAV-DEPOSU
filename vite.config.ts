import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    base: '/',
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      target: 'es2019',
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('html2pdf') || id.includes('jspdf') || id.includes('html2canvas')) {
              return 'pdf-engine';
            }
            if (id.includes('node_modules')) {
              return 'vendor';
            }
            if (id.includes('logoDataUri')) {
              return 'logo-data';
            }
            if (id.includes('grade5')) {
              return 'scenarios-g5';
            }
            if (id.includes('grade6')) {
              return 'scenarios-g6';
            }
            if (id.includes('grade8')) {
              return 'scenarios-g8';
            }
            if (id.includes('scenarios/scenario')) {
              return 'scenarios-g7';
            }
          },
        },
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
