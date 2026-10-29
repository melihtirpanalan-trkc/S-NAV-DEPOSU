import { ExamScenario } from '../../types/exam';

export const GRADE_6_EXAMS: ExamScenario[] = [
  // ==================== SENARYO 1 ====================
  // Senaryo 1 - Sınav 1
  {
    id: 'g6-s1-e1',
    gradeLevel: 6,
    scenarioGroup: 'senaryo-1',
    scenarioGroupTitle: 'MEB Senaryo 1',
    scenarioName: '1. Sınav (Türkçenin Kökleri ve Ulu Çınar)',
    examNumber: 1,
    title: 'Türkçenin Kökleri ve Ulu Çınar',
    theme: '1. Tema: Dilimiz ve Kültürümüz & Söz Varlığı',
    targetClass: '6. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Türkçenin Kökleri ve Ulu Çınar',
      author: 'Türkçe Ülküsü Yayınları (Özgün Kültür Metni)',
      source: '6. Sınıf Türkçe Dersi - Dilimizin Zenginlikleri',
      content: `Türkçemiz, asırlar boyunca farklı coğrafyalarda yankılanmış, her devirde yeni kelimelerle zenginleşmiş ulu bir çınar gibidir. Dede Korkut’un kopuzundan Yunus Emre’nin duru dizelerine kadar bu dil, milletimizin sevinç ve hüzünlerini bağrında taşımıştır. Büyük yazarlarımız, unutulmaya yüz tutmuş sözleri yeniden gün ışığına çıkarmak için ömürlerini vermişlerdir. Bir dili özenle derleyip milletine armağan etmek, onlar için büyük bir itibar vesilesi olmuştur.

Kütüphanelerimizdeki eski yazmalarda ve dedelerimizin masallarında yaşayan kelimeler, geçmişle bugün arasında sağlam bir köprü vazifesi görür. Eğer bu kelimeleri konuşmalarımızdan ve yazılarımızdan çıkarırsak hafızamızı da kaybederiz. Aydınlık düşünceler ancak zengin bir kelime hazinesiyle выразить edilebilir. Dilini kaybeden bir toplum, kökleri kuruyan ulu bir ağaç gibi rüzgârın önünde savrulur.`
    },
    questions: [
      {
        id: 'g6-s1-e1-q1',
        number: 1,
        outcomeCode: 'T.O.6.5',
        title: 'Bağlamdan Kelime Anlamı Tahmini ve Gerekçe',
        points: 15,
        prompt: 'Metinde koyu yazılmış "itibar" kelimesinin anlamını metnin bağlamından hareketle tahmin ediniz. Tahmininizi yazarken metindeki hangi ifadeden yararlandığınızı da belirtiniz.',
        expectedAnswer: 'Tahminim: Saygınlık, değer görme, güvenilirlik.\nMetindeki İpucu: "Bir dili özenle derleyip milletine armağan etmek" ifadesi, yazarların bu asil ve faydalı çalışma sayesinde toplumda büyük bir saygınlık kazandığını düşündürür.',
        rubric: [
          { criterion: 'Tahmini ve metindeki ipucu gerekçesini eksiksiz yazma', points: 15 },
          { criterion: 'Yalnızca tahmini doğru yazıp metin ifadesini belirtmeme', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 4
      },
      {
        id: 'g6-s1-e1-q2',
        number: 2,
        outcomeCode: 'T.O.6.6',
        title: 'Metnin Yüzey Anlamı (Metnin Konusu)',
        points: 15,
        prompt: 'Okuduğunuz metnin konusunu (yüzey anlamını) belirleyerek bir cümleyle yazınız.',
        expectedAnswer: 'Metnin konusu; Türkçenin köklü tarihi zenginliği, milletimizin hafızası oluşu ve dilin korunmasının hayati önemidir.',
        rubric: [
          { criterion: 'Metnin konusunu eksiksiz ve doğru biçimde tek cümleyle belirleme', points: 15 },
          { criterion: 'Konuyu kısmen doğru ifade etme veya eksik bırakma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g6-s1-e1-q3',
        number: 3,
        outcomeCode: 'T.O.6.6',
        title: 'Metnin Yüzey Anlamı (Sonuç Çıkarma)',
        points: 15,
        prompt: 'Metnin son cümlesine göre bir toplumun dilini kaybetmesi nasıl bir felakete yol açar? Metinden bularak açıklayınız.',
        expectedAnswer: 'Kökleri kuruyan bir ağaç gibi dayanıksız kalır, kendi kimliğini ve hafızasını yitirerek rüzgârın önünde savrulur.',
        rubric: [
          { criterion: 'Metindeki benzetme ve sonucu tam açıklama', points: 15 },
          { criterion: 'Kısmi açıklama', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g6-s1-e1-q4',
        number: 4,
        outcomeCode: 'T.O.6.21',
        title: 'Söz Varlığı Geliştirme (Söz Öbeği Anlamı ve Cümle)',
        points: 15,
        prompt: `Metinde geçen "köprü olmak" söz öbeğini inceleyiniz:
a) Bu söz öbeğinin metne kattığı anlamı açıklayınız.
b) Bu söz öbeğini anlamına uygun yeni ve özgün bir cümle içinde kullanınız.

• "Köprü olmak" söz öbeğinin anlamı: .......................................
• Kurduğum yeni cümle: .......................................`,
        expectedAnswer: 'a) Metne kattığı anlam: İki farklı dönem, nesil veya durum arasında bağ kurmak; kültürel değerlerin aktarılmasını sağlamak.\nb) Yeni Cümle: Sanat ve edebiyat, farklı milletlerin birbirini anlamasında sağlam bir köprü olur.',
        rubric: [
          { criterion: 'Söz öbeğinin metne kattığı anlamı açıklayıp uygun yeni cümle kurma', points: 15 },
          { criterion: 'Yalnızca anlamı açıklama veya yalnızca cümle kurma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 4
      },
      {
        id: 'g6-s1-e1-q5',
        number: 5,
        outcomeCode: 'T.Y.6.18',
        title: 'Söz Varlığını Zenginleştirerek Paragraf Yazma',
        points: 20,
        prompt: `Aşağıdaki söz varlığı havuzundan en az iki ifadeyi seçerek dilimizin korunmasının ve doğru konuşmanın önemini anlatan 4-5 cümlelik bilgilendirici bir paragraf yazınız:
[Söz Varlığı Havuzu: • Tatlı dil yılanı deliğinden çıkarır • Söz gümüşse sükût altındır • Sözün gücü • Kelimelerin büyüsü • Dil bayrağımız]`,
        expectedAnswer: 'Türkçemiz bizim bağımsızlığımızın ve kimliğimizin simgesi olan dil bayrağımızdır. Günlük hayatımızda kullandığımız her güzel söz, karşımızdaki insanla aramızda sevgi köprüleri kurar; atalarımızın dediği gibi tatlı dil yılanı deliğinden çıkarır. Sözün gücü, kırıcı olmadan da derdimizi en doğru biçimde anlatabilmemizde gizlidir. Bu yüzden dilimize özen göstermeli ve onu korumalıyız.',
        rubric: [
          { criterion: 'Havuzdan en az 2 ifadeyi bağlama uygun kullanarak 4-5 cümlelik tutarlı paragraf yazma', points: 20 },
          { criterion: 'Tek bir ifade kullanma veya cümle sayısı eksikliği', points: 10 },
          { criterion: 'İfadeleri bağlam dışı sıralama veya ilgisiz metin', points: 0 }
        ],
        linesNeeded: 6
      },
      {
        id: 'g6-s1-e1-q6',
        number: 6,
        outcomeCode: 'T.Y.6.21',
        title: 'Yazım Kuralları ve Virgülün Görevleri',
        points: 20,
        prompt: `a) Aşağıdaki cümlelerde yapılan yazım yanlışlarını bularak doğrularını yazınız:
1. Bizim köyde de bu gelenek hâlâ yaşatılıyormu? -> Yanlış: ................ / Doğru: ................
2. O bilirdiki dilini koruyan milletler asla yıkılmaz. -> Yanlış: ................ / Doğru: ................

b) "Evet, bizler de atalarımızın mirasına sahip çıkmalıyız." cümlesinde virgülün (,) kullanılma görevini yazınız.`,
        expectedAnswer: 'a) 1. yaşatılıyor mu? (Soru eki "mu" ayrı yazılır.)\n2. bilirdi ki ("ki" bağlacı ayrı yazılır.)\nb) Kendisinden sonraki cümleye bağlı olarak kabul, onay veya teşvik bildiren ifadeden ("Evet") sonra kullanılmıştır.',
        rubric: [
          { criterion: 'Yazım yanlışlarını ve virgülün görevini eksiksiz ve doğru açıklama', points: 20 },
          { criterion: 'Yazım yanlışlarını doğru yapıp virgülün görevini eksik yazma', points: 12 },
          { criterion: 'Yalnızca bir bölümü doğru yapma', points: 6 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 5
      }
    ]
  },

  // Senaryo 1 - Sınav 2
  {
    id: 'g6-s1-e2',
    gradeLevel: 6,
    scenarioGroup: 'senaryo-1',
    scenarioGroupTitle: 'MEB Senaryo 1',
    scenarioName: '2. Sınav (Sözcüklerin Bahçesinde Bir Gezinti)',
    examNumber: 2,
    title: 'Sözcüklerin Bahçesinde Bir Gezinti',
    theme: '1. Tema: Söz Varlığı ve Kitap Sevgisi',
    targetClass: '6. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Sözcüklerin Bahçesinde Bir Gezinti',
      author: 'Türkçe Ülküsü Yayınları (Özgün Kültür Metni)',
      source: '6. Sınıf Türkçe Dersi - Okuma Becerileri',
      content: `Kelimeler, insanların zihninde açan rengârenk çiçeklere benzer. Kitap okumak ise bu çiçekleri taze tutan can suyudur. Yaz tatilinde dedemin çalışma odasında bulduğum eski bir sözlük, benim için harikalar diyarına açılan sihirli bir kapı oldu. Sözlüğün sararmış sayfalarını çevirirken daha önce hiç duymadığım "erdem", "özveri" ve "vefa" gibi derin anlamlı kelimelerle tanıştım. 

Dedem, "Evlat," derdi, "az kelimeyle düşünen insanın dünyası dardır. Kelimelerin zenginleştikçe bakış açın genişler, kalbin aydınlanır." Gerçekten de insan bir kelimeyi öğrendiğinde yalnızca bir ses kalıbı değil, o kelimenin ardındaki bin yıllık kültürü de öğrenir. Konuşurken doğru kelimeleri seçmek, dinleyene ikram edilen en zarif hediyedir.`
    },
    questions: [
      {
        id: 'g6-s1-e2-q1',
        number: 1,
        outcomeCode: 'T.O.6.5',
        title: 'Kelime Anlamı Tahmini ve İpucu',
        points: 15,
        prompt: 'Metinde geçen "özveri" kelimesinin anlamını metnin bağlamından hareketle tahmin ediniz ve tahmini yapmanızı sağlayan ipucunu belirtiniz.',
        expectedAnswer: 'Tahminim: Bir amaç uğruna veya bir başkası yararına kendi çıkarlarından vazgeçme, fedakârlık.\nİpucu: Dedemin kelimelerin ardındaki ahlaki ve insani değerleri anlatması, erdem ve vefa ile birlikte anılması.',
        rubric: [
          { criterion: 'Tahmini ve ipucunu doğru açıklama', points: 15 },
          { criterion: 'Yalnızca tahmini yazma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g6-s1-e2-q2',
        number: 2,
        outcomeCode: 'T.O.6.6',
        title: 'Metnin Yüzey Anlamı (Metnin Konusu)',
        points: 15,
        prompt: 'Okuduğunuz metnin konusunu (yüzey anlamını) belirleyerek bir cümleyle yazınız.',
        expectedAnswer: 'Metnin konusu; kitap okumanın kelime hazinesini zenginleştirmesi, düşünce ufkunu genişletmesi ve insanı olgunlaştırmasıdır.',
        rubric: [
          { criterion: 'Metnin konusunu eksiksiz ve doğru biçimde tek cümleyle belirleme', points: 15 },
          { criterion: 'Konuyu kısmen ifade etme veya eksik bırakma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g6-s1-e2-q3',
        number: 3,
        outcomeCode: 'T.O.6.6',
        title: 'Metnin Yüzey Anlamı (Benzetme)',
        points: 15,
        prompt: 'Yazar konuşurken doğru kelimeleri seçmeyi neye benzetmiştir? Metinden hareketle açıklayınız.',
        expectedAnswer: 'Dinleyene ikram edilen en zarif hediyeye benzetmiştir.',
        rubric: [
          { criterion: 'Dinleyene ikram edilen en zarif hediye benzetmesini tam yazma', points: 15 },
          { criterion: 'Kısmi yazma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g6-s1-e2-q4',
        number: 4,
        outcomeCode: 'T.O.6.21',
        title: 'Söz Varlığı Geliştirme (Kelime Anlamı ve Cümle Kullanımı)',
        points: 15,
        prompt: `Metinde geçen "kalbin aydınlanması" söz öbeğini inceleyiniz:
a) Bu söz öbeğinin metne kattığı anlamı açıklayınız.
b) "Aydınlanmak" sözcüğünü bu anlamıyla uyumlu olacak şekilde yeni ve özgün bir cümle içinde kullanınız.`,
        expectedAnswer: 'a) Anlamı: İnsanın ruhunun huzur bulması, zihninin açılması, sevgi ve bilgiyle ferahlamasıdır.\nb) Yeni Cümle: Okuduğu her güzel şiirle genç şairin kalbi ve ufku aydınlanıyordu.',
        rubric: [
          { criterion: 'Söz öbeğinin metne kattığı anlamı açıklayıp uygun yeni cümle kurma', points: 15 },
          { criterion: 'Yalnızca anlamı açıklama veya yalnızca cümle kurma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 4
      },
      {
        id: 'g6-s1-e2-q5',
        number: 5,
        outcomeCode: 'T.Y.6.18',
        title: 'Söz Varlığıyla Paragraf Yazma',
        points: 20,
        prompt: `Aşağıdaki kalıp söz ve deyim havuzundan en az iki ifadeyi seçerek kitap okumanın önemini anlatan 4-5 cümlelik bir bilgilendirici metin yazınız:
[Havuz: • Ufkunu açmak • Yol göstermek • Göz nuru • Kitap kurdu]`,
        expectedAnswer: 'Kitaplar bir insanın zihnini besleyen en sadık rehberlerdir. Sayfaların arasında kaybolan bir kitap kurdu, hiç gitmediği diyarları tanır ve yeni fikirlerle ufkunu açar. Zor zamanlarda okunan her güzel eser, insanlara doğru kararlar alması için yol gösterir. Bu yüzden her gün düzenli kitap okumayı hayatımızın vazgeçilmez bir parçası yapmalıyız.',
        rubric: [
          { criterion: 'Havuzdan iki ifadeyi bağlama uygun kullanarak 4-5 cümlelik paragraf yazma', points: 20 },
          { criterion: 'Tek bir ifade kullanma veya cümle sayısı yetersizliği', points: 10 },
          { criterion: 'Konu dışı veya ilgisiz metin', points: 0 }
        ],
        linesNeeded: 6
      },
      {
        id: 'g6-s1-e2-q6',
        number: 6,
        outcomeCode: 'T.Y.6.21',
        title: 'Yazım Kuralları ve Noktalama',
        points: 20,
        prompt: `a) "Sözlükte ki kelimeleri inceledim ancak bazılarını bulamadım da not aldım." cümlesindeki yazım yanlışlarını bulunuz ve doğrularını yazınız.
b) "Ünlü yazar, diline sahip çıkmayan bir millet geleceğini kaybeder, dedi." cümlesindeki virgüllerin (,) kullanılma gerekçesini yazınız.`,
        expectedAnswer: 'a) 1. "Sözlükte ki" bitişik yazılmalıdır -> "Sözlükteki" (Sıfat yapan -ki ekidir).\n2. "bulamadım da" -> "bulamadım da" (Burada de bağlaçtır doğru, ancak "bulamadım da" değil "bulamadığımdan" veya bağlaç yazımı ayrıdır).\nb) Virgüller tırnak içine alınmamış alıntı cümlesini belirtmek için kullanılmıştır.',
        rubric: [
          { criterion: 'Yazım yanlışını ve tırnak dışı alıntı cümlesi gerekçesini doğru yazma', points: 20 },
          { criterion: 'Yalnızca bir bölümü doğru yapma', points: 10 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 5
      }
    ]
  },

  // ==================== SENARYO 2 ====================
  // Senaryo 2 - Sınav 1
  {
    id: 'g6-s2-e1',
    gradeLevel: 6,
    scenarioGroup: 'senaryo-2',
    scenarioGroupTitle: 'MEB Senaryo 2',
    scenarioName: '1. Sınav (Okul Kütüphanesinde Kelime Köşesi)',
    examNumber: 1,
    title: 'Okul Kütüphanesinde Kelime Köşesi',
    theme: '2. Tema: Millî Kültür & Söz Varlığımızı Zenginleştirme',
    targetClass: '6. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Okul Kütüphanesinde Kelime Köşesi',
      author: 'Türkçe Ülküsü Yayınları (Özgün Etkinlik Metni)',
      source: '6. Sınıf Türkçe Dersi - MEBİ Yazılıya Hazırlanıyorum Uyarlaması',
      content: `Okulumuzun kütüphanesinde Türkçenin zenginliğini öğrencilere tanıtmak amacıyla bir "Kelime Köşesi" hazırlandı. İlk günlerde kelime ve deyimler, anlamları ve örnek cümleleri verilmeden bir panoya yazılmıştı. Öğrenciler kelimelerin anlamlarını karıştırıyor ve bu kelimeleri cümle içinde kullanmakta zorlanıyordu. Öğretmenler bu sorunları gidermek için köşeyi yeniden düzenlediler. 

Panodaki kelime ve deyimleri tanıtmak için özel bilgilendirme kartları hazırladılar. Her kartın ön yüzüne bir kelime ya da deyim, arka yüzüne ise anlamı ve kullanıldığı bir örnek cümle yazıldı. Kelime içeren kartlar mavi dosyaya, deyim içeren kartlar ise kırmızı dosyaya konuldu. Kütüphanede bir danışma masası kurularak dosyalar masaya yerleştirildi. Öğrencilerin köşeyi nasıl kullanacağını adım adım anlatan bilgilendirici bir afiş de panoya asıldı.`
    },
    questions: [
      {
        id: 'g6-s2-e1-q1',
        number: 1,
        outcomeCode: 'T.O.6.6',
        title: 'Metnin Yüzey Anlamı (Metnin Konusu)',
        points: 15,
        prompt: 'Okuduğunuz metnin konusunu (yüzey anlamını) belirleyerek bir cümleyle yazınız.',
        expectedAnswer: 'Metnin konusu; okul kütüphanesinde öğrencilerin kelime ve deyimleri öğrenmelerini kolaylaştırmak için hazırlanan Kelime Köşesi ve yapılan düzenlemelerdir.',
        rubric: [
          { criterion: 'Metnin konusunu eksiksiz ve doğru biçimde tek cümleyle belirleme', points: 15 },
          { criterion: 'Konuyu kısmen ifade etme veya eksik bırakma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g6-s2-e1-q2',
        number: 2,
        outcomeCode: 'T.O.6.6',
        title: 'Metnin Yüzey Anlamı (Sorun Tespiti)',
        points: 15,
        prompt: 'Metindeki "bu sorunları" ifadesiyle öğrencilerin yaşadığı hangi iki sorun anlatılmaktadır?\n1. Sorun: .......................................\n2. Sorun: .......................................',
        expectedAnswer: '1. Sorun: Öğrencilerin kelimelerin ve deyimlerin anlamlarını karıştırmaları.\n2. Sorun: Bu kelimeleri cümle içinde kullanmakta zorlanmaları.',
        rubric: [
          { criterion: 'İki sorunu da metne dayalı olarak eksiksiz yazma', points: 15 },
          { criterion: 'Yalnızca bir sorunu doğru yazma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g6-s2-e1-q3',
        number: 3,
        outcomeCode: 'T.O.6.16',
        title: 'Anahtar Kelime Çözümleme',
        points: 15,
        prompt: 'Metinden hareketle metnin konusunu ve amacını yansıtan üç anahtar kelime veya kelime grubu yazınız.',
        expectedAnswer: 'Kelime Köşesi, Bilgilendirme kartları, Türkçenin zenginliği (veya Deyimler panosu).',
        rubric: [
          { criterion: 'Üç uygun anahtar kelimeyi doğru yazma', points: 15 },
          { criterion: 'İki uygun anahtar kelime yazma', points: 10 },
          { criterion: 'Bir uygun anahtar kelime yazma', points: 5 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g6-s2-e1-q4',
        number: 4,
        outcomeCode: 'T.O.6.21',
        title: 'Söz Varlığı Geliştirme (Deyim Çözümleme ve Cümle)',
        points: 15,
        prompt: `Metinde geçen "zenginlik katmak" ifadesini inceleyiniz:
a) Bu ifadenin metne kattığı anlamı açıklayınız.
b) Bu ifadeyi anlamına uygun yeni bir cümle içinde kullanınız.`,
        expectedAnswer: 'a) Metne kattığı anlam: Bir durumu veya varlığı daha değerli, etkili ve nitelikli hâle getirmek, çeşitlendirmek.\nb) Yeni Cümle: Okuduğu tarihi kitaplar, yazarın anlatımına ve diline büyük bir zenginlik katmıştı.',
        rubric: [
          { criterion: 'İfadenin anlamını açıklayıp uygun yeni cümle kurma', points: 15 },
          { criterion: 'Yalnızca anlamı açıklama veya yalnızca cümle kurma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 4
      },
      {
        id: 'g6-s2-e1-q5',
        number: 5,
        outcomeCode: 'T.Y.6.3',
        title: 'Yazıda İçerik ve Yapı Seçimi (Öneri Paragrafı)',
        points: 20,
        prompt: 'Bir arkadaşınız kütüphanedeki kitapları düzenleme görevini üstlendi ancak notlarını karıştırdığı için işini zamanında bitiremiyor. Ona tavsiyede bulunmak amacıyla seçtiğiniz türe uygun (açıklama), en az altı cümlelik bir paragraf yazınız. Paragrafınızda iki somut öneri sununuz ve her önerinin neden işe yarayacağını açıklayınız.',
        expectedAnswer: 'Kütüphanedeki kitapları düzenleme görevini zamanında bitirmek için işlerini bir plana oturtmalısın. Öncelikle kitapları masal, hikâye ve bilim gibi türlerine göre ayırmalısın; böylece aradığın kitabı kolayca bulabilirsin. İkinci olarak her gün belirli saatlerde çalışıp bir liste tutmalısın; bu liste sayesinde hangi rafı bitirdiğini ve sıradakini rahatça takip edersin. İşlerini bu iki yöntemle sıraya koyarsan dağınıklık ortadan kalkacak ve zamanını çok daha verimli kullanacaksın. Düzenli çalışmak hem görevini vaktinde bitirmeni sağlar hem de yorgunluğunu azaltır.',
        rubric: [
          { criterion: 'Açıklama türünde, iki somut öneri ve gerekçesini içeren en az altı cümlelik tutarlı paragraf yazma', points: 20 },
          { criterion: 'Önerileri yazıp gerekçelerini eksik bırakma veya 4-5 cümle yazma', points: 10 },
          { criterion: 'Konuyla ilgisiz veya yetersiz metin', points: 0 }
        ],
        linesNeeded: 7
      },
      {
        id: 'g6-s2-e1-q6',
        number: 6,
        outcomeCode: 'T.Y.6.21',
        title: 'Yazım Kuralları ve Virgülün Görevleri',
        points: 20,
        prompt: `a) Aşağıdaki cümlelerde yapılan yazım yanlışlarını bularak doğrularını yazınız:
1. Öğretmenimiz sınıftaki panoyada yeni kartlar astı. -> Yanlış: ................ / Doğru: ................
2. Kütüphane kurallarını biliyormusunuz? -> Yanlış: ................ / Doğru: ................

b) "Kartları hazırladılar, masanın üzerine koydular." cümlesinde virgülün (,) kullanılma görevini yazınız.`,
        expectedAnswer: 'a) 1. panoya da (Bağlaç olan "da" ayrı yazılır.)\n2. biliyor musunuz? (Soru eki "mu" ayrı yazılır.)\nb) Sıralı cümleleri birbirinden ayırmak için kullanılmıştır.',
        rubric: [
          { criterion: 'İki yazım yanlışını ve virgülün görevini tam açıklama', points: 20 },
          { criterion: 'Yalnızca yazım yanlışlarını veya yalnızca virgül görevini doğru yazma', points: 10 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 5
      }
    ]
  },

  // Senaryo 2 - Sınav 2
  {
    id: 'g6-s2-e2',
    gradeLevel: 6,
    scenarioGroup: 'senaryo-2',
    scenarioGroupTitle: 'MEB Senaryo 2',
    scenarioName: '2. Sınav (Geleneksel Türk Lokumu)',
    examNumber: 2,
    title: 'Geleneksel Türk Lokumu',
    theme: '2. Tema: Millî Kültür & Mutfak Mirasımız',
    targetClass: '6. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Geleneksel Türk Lokumu',
      author: 'Türkçe Ülküsü Yayınları (Özgün Kültür Metni)',
      source: '6. Sınıf Türkçe Dersi - MEBİ Hazırlık Metni Uyarlaması',
      content: `Lokum, Türk mutfağının tüm dünyada en bilinen lezzetlerinden biridir. Su, şeker ve nişastanın usta ellerde bakır kazanlarda kaynatılmasıyla yapılan lokum; yüzyıllar boyunca bayramlarda, kız isteme merasimlerinde ve misafirliklerde ikram edilmiştir. Zaman içinde sınırları aşarak tüm dünyaya yayılan bu tatlı, bugün İngiltere’den Japonya’ya kadar birçok ülkede "Turkish Delight" adıyla tanınmaktadır. 

Lokum, yalnızca bir tatlı değildir; Türk misafirperverliğinin ve köklü geleneğinin tatlı bir simgesidir. Fındıklı, fıstıklı, güllü ve damla sakızlı çeşitleriyle zenginleştirilen lokum hem çocukların hem de yetişkinlerin severek tükettiği bir yiyecektir. Lokumun bu kadar sevilmesi yalnızca damağa hitap etmesiyle sınırlı değildir; o, ikram edildiği sofraya sevgi, dostluk ve muhabbet katan kültürel bir köprüdür.`
    },
    questions: [
      {
        id: 'g6-s2-e2-q1',
        number: 1,
        outcomeCode: 'T.O.6.6',
        title: 'Metnin Yüzey Anlamı (Metnin Konusu)',
        points: 15,
        prompt: 'Okuduğunuz metnin konusunu (yüzey anlamını) belirleyerek bir cümleyle yazınız.',
        expectedAnswer: 'Metnin konusu; Türk lokumunun geleneksel lezzeti, yapımındaki ustalık ve kültürümüzdeki ikram geleneğidir.',
        rubric: [
          { criterion: 'Metnin konusunu eksiksiz ve doğru biçimde tek cümleyle belirleme', points: 15 },
          { criterion: 'Konuyu kısmen ifade etme veya eksik bırakma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g6-s2-e2-q2',
        number: 2,
        outcomeCode: 'T.O.6.6',
        title: 'Metnin Yüzey Anlamı (Kültürel Değer)',
        points: 15,
        prompt: 'Yazara göre lokumun bu kadar çok sevilmesi neden yalnızca damak tadıyla sınırlı değildir? Metinden hareketle açıklayınız.',
        expectedAnswer: 'Çünkü lokum Türk misafirperverliğinin bir simgesidir; ikram edildiği sofraya sevgi, dostluk ve muhabbet katan kültürel bir köprü vazifesi görmektedir.',
        rubric: [
          { criterion: 'Misafirperverlik ve kültürel simge olma özelliğini tam açıklama', points: 15 },
          { criterion: 'Kısmi açıklama', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g6-s2-e2-q3',
        number: 3,
        outcomeCode: 'T.O.6.16',
        title: 'Anahtar Kelime Çözümleme',
        points: 15,
        prompt: 'Okuduğunuz bilgilendirici metinden hareketle metnin konusunu ve iletisini yansıtan üç anahtar kelime belirleyiniz.',
        expectedAnswer: 'Lokum, Türk kültürü, Geleneksel lezzet (veya Misafirperverlik, Turkish Delight).',
        rubric: [
          { criterion: 'Üç uygun anahtar kelime yazma', points: 15 },
          { criterion: 'İki uygun kelime yazma', points: 10 },
          { criterion: 'Bir uygun kelime yazma', points: 5 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g6-s2-e2-q4',
        number: 4,
        outcomeCode: 'T.O.6.21',
        title: 'Söz Varlığı Geliştirme (Kalıp Söz ve Cümle Kullanımı)',
        points: 15,
        prompt: `Metinde geçen "tatlı bir simge" söz öbeğini inceleyiniz:
a) Bu söz öbeğinin metne kattığı anlamı açıklayınız.
b) "Simge" sözcüğünü anlamına uygun yeni ve özgün bir cümle içinde kullanınız.`,
        expectedAnswer: 'a) Metne kattığı anlam: İnsanların birbirine olan sevgisini, hoşgörüsünü ve sıcaklığını hissettiren sevimli, hoş ve güzel bir hatıra/işaret.\nb) Yeni Cümle: Beyaz güvercin, tüm dünyada barış ve kardeşliğin en bilinen simgesidir.',
        rubric: [
          { criterion: 'Söz öbeğinin anlamını açıklayıp "simge" sözcüğüyle uygun yeni cümle kurma', points: 15 },
          { criterion: 'Yalnızca anlamı açıklama veya yalnızca cümle kurma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 4
      },
      {
        id: 'g6-s2-e2-q5',
        number: 5,
        outcomeCode: 'T.Y.6.3',
        title: 'Yazıda İçerik ve Yapı Seçimi (Tanıtım Paragrafı)',
        points: 20,
        prompt: 'Okulunuzda yabancı öğrencilerin katıldığı bir kültür gününde Türk lokumunu hiç tatmamış bir arkadaşınıza tanıtacaksınız. Açıklama paragrafı türüne uygun, en az altı cümlelik bir tanıtım metni yazınız. Metninizde lokumun lezzetinden, çeşitlerinden ve ikram edilme geleneğinden bahsediniz.',
        expectedAnswer: 'Türk lokumu, yüzyıllardır kültürümüzde saygı ve sevginin en tatlı ikramıdır. Su, şeker ve nişastanın bakır kazanlarda kıvam bulmasıyla yapılan bu lezzet, yumuşacık dokusuyla damağınızda erir. İçine Antep fıstığı, fındık veya gül suyu katılarak hazırlanan pek çok çeşidi vardır. Bayramlarda ve misafirliklerde acı bir Türk kahvesinin yanında lokum ikram etmek köklü bir geleneğimizdir. Kahvenin sert tadı ile lokumun tatlılığı birbirini mükemmel bir şekilde dengeler. Bu eşsiz lezzeti denediğinizde Türk misafirperverliğinin sıcaklığını hissedeceksiniz.',
        rubric: [
          { criterion: 'İstenen unsurları (lezzet, çeşit, gelenek) içeren en az altı cümlelik açıklayıcı metin yazma', points: 20 },
          { criterion: 'Bazı unsurları eksik bırakma veya cümle sayısı yetersizliği', points: 10 },
          { criterion: 'Konuyla ilgisiz metin', points: 0 }
        ],
        linesNeeded: 7
      },
      {
        id: 'g6-s2-e2-q6',
        number: 6,
        outcomeCode: 'T.Y.6.21',
        title: 'Yazım Kuralları ve Virgülün Görevleri',
        points: 20,
        prompt: `a) Aşağıdaki cümlelerdeki yazım yanlışlarını bularak doğrularını yazınız:
1. Lokum ustası kazanları hazırladımı işe başlardı. -> Yanlış: ................ / Doğru: ................
2. Geleneklerimizi korumalıyız ki kültürümüz de geleceğe taşınsın. (Bu cümlede yazım yanlışı var mıdır? Açıklayınız.)

b) "Ünlü seyyah, Türk lokumu damaklarda unutulmaz bir iz bırakır, der." cümlesindeki virgüllerin kullanılma görevini yazınız.`,
        expectedAnswer: 'a) 1. hazırladı mı (Soru eki "mı" ayrı yazılır.)\n2. Bu cümlede yazım yanlışı yoktur ("ki" ve "de" bağlaçları kurala uygun ayrı yazılmıştır).\nb) Tırnak içine alınmamış alıntı cümlesini belirtmek için kullanılmıştır.',
        rubric: [
          { criterion: 'Yazım kurallarını ve virgülün görevini eksiksiz açıklama', points: 20 },
          { criterion: 'Yalnızca bir bölümü doğru yapma', points: 10 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 5
      }
    ]
  },

  // ==================== SENARYO 3 ====================
  // Senaryo 3 - Sınav 1
  {
    id: 'g6-s3-e1',
    gradeLevel: 6,
    scenarioGroup: 'senaryo-3',
    scenarioGroupTitle: 'MEB Senaryo 3',
    scenarioName: '1. Sınav (Yunus Emre ve Gönül Dili)',
    examNumber: 1,
    title: 'Yunus Emre ve Gönül Dili',
    theme: '3. Tema: Erdemler & Sevgi ve Hoşgörü',
    targetClass: '6. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Yunus Emre ve Gönül Dili',
      author: 'Türkçe Ülküsü Yayınları (Özgün Kültür Metni)',
      source: '6. Sınıf Türkçe Dersi - Tasavvuf ve Türk Dili',
      content: `Anadolu bilgelerinden Yunus Emre, asırlar boyunca insanları sevgiye, kardeşliğe ve hoşgörüye çağırmıştır. Şiirlerinde sarayların ağdalı dilini değil, halkın konuştuğu arı ve duru Türkçeyi kullanmıştır. Sözün gücünü şu eşsiz dizeyle dile getirir: "Söz ola kese savaşı, söz ola kestire başı." O bilirdi ki tatlı dille çözülemeyecek hiçbir sorun, eritilemeyecek hiçbir buz dağı yoktur. 

Günümüzde Türk Dil Kurumunun yayımladığı eserlerde de Yunus Emre’nin bu birleştirici dili övgüyle anlatılır. O, sözcükleri birer tohum gibi Anadolu toprağına serpmiş; bu tohumlardan sevgi ve barış ormanları yeşermiştir. Peki, bizler onun öğütlerine kulak veriyor muyuz? Evet, bizler de sözlerimizi tartarak konuşmalı, dilimizi bir kavga aracı değil bir gönül köprüsü kılmalıyız.`
    },
    questions: [
      {
        id: 'g6-s3-e1-q1',
        number: 1,
        outcomeCode: 'T.O.6.5',
        title: 'Kelime Anlamı Tahmini ve İpucu',
        points: 15,
        prompt: 'Metinde geçen "arı Türkçe" ifadesindeki "arı" sözcüğünün anlamını metnin bağlamından hareketle tahmin ediniz ve tahmini yapmanızı sağlayan karşıt durumu belirtiniz.',
        expectedAnswer: 'Tahminim: Yabancı etkilerden uzak, saf, temiz, katıksız, duru.\nKarşıt Durum İpucu: Metinde sarayların yabancı kelimelerle dolu "ağdalı" dilinin karşısında halkın konuştuğu temiz Türkçe olarak verilmesi.',
        rubric: [
          { criterion: 'Tahmini ve karşıtlık ipucunu eksiksiz yazma', points: 15 },
          { criterion: 'Yalnızca tahmini yazma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g6-s3-e1-q2',
        number: 2,
        outcomeCode: 'T.O.6.6',
        title: 'Metnin Yüzey Anlamı (Metnin Konusu)',
        points: 15,
        prompt: 'Okuduğunuz metnin konusunu (yüzey anlamını) belirleyerek bir cümleyle yazınız.',
        expectedAnswer: 'Metnin konusu; Yunus Emre\'nin sevgi, hoşgörü ve duru Türkçeyi temel alan gönül dili ve tatlı dilin birleştirici gücüdür.',
        rubric: [
          { criterion: 'Metnin konusunu eksiksiz ve doğru biçimde tek cümleyle belirleme', points: 15 },
          { criterion: 'Konuyu kısmen ifade etme veya eksik bırakma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g6-s3-e1-q3',
        number: 3,
        outcomeCode: 'T.O.6.16',
        title: 'Anahtar Kelime Çözümleme',
        points: 15,
        prompt: 'Metnin içeriğini yansıtan iki anahtar kelime veya kelime grubu yazınız ve metinle ilişkisini birer cümleyle belirtiniz.',
        expectedAnswer: '1. Anahtar Kelime: Yunus Emre (Metinde sevgi ve arı Türkçe savunucusu bilge şahsiyettir.)\n2. Anahtar Kelime: Tatlı dil / Hoşgörü (Metinde sorunları çözen ve insanları birleştiren temel erdemdir.)',
        rubric: [
          { criterion: 'İki anahtar kelime ve metin ilişkisini doğru yazma', points: 15 },
          { criterion: 'Yalnızca anahtar kelimeleri yazma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 4
      },
      {
        id: 'g6-s3-e1-q4',
        number: 4,
        outcomeCode: 'T.O.6.21',
        title: 'Söz Varlığı Geliştirme (Deyim Çözümleme ve Cümle)',
        points: 15,
        prompt: `Metinde geçen "sözlerini tartarak konuşmak" deyimini inceleyiniz:
a) Bu deyimin metne kattığı anlamı açıklayınız.
b) Bu deyimi anlamına uygun olacak şekilde yeni ve özgün bir cümle içinde kullanınız.`,
        expectedAnswer: 'a) Deyimin Anlamı: Bir sözü söylemeden önce iyice düşünmek, doğuracağı sonuçları hesaba katmak, kırıcı ve ölçüsüz konuşmaktan kaçınmak.\nb) Yeni Cümle: Bilge insanlar her mecliste sözlerini tartarak konuşur, kimsenin kalbini kırmazlar.',
        rubric: [
          { criterion: 'Deyimin anlamını açıklayıp anlamına uygun yeni cümle kurma', points: 15 },
          { criterion: 'Yalnızca anlamı açıklama veya yalnızca cümle kurma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 4
      },
      {
        id: 'g6-s3-e1-q5',
        number: 5,
        outcomeCode: 'T.Y.6.18',
        title: 'Söz Varlığıyla Paragraf Yazma',
        points: 20,
        prompt: `Aşağıdaki kalıp sözleri günlük yaşamdaki uygun durumlarla eşleştiriniz:
1. Yeni bir eve taşınan komşuya: .......................................
2. Yemek ikram edilen misafirin teşekkürü üzerine: .......................................
3. Uzun süredir görülmeyen tanıdıkla karşılaşınca: .......................................
(Seçenekler: Güle güle oturun! / Afiyet olsun! / Nasılsınız, iyi misiniz?)`,
        expectedAnswer: '1. Yeni bir eve taşınan komşuya: "Güle güle oturun!" (veya Hayırlı olsun!)\n2. Yemek ikram edilen misafirin teşekkürü üzerine: "Afiyet olsun!" (veya Afiyet şeker olsun!)\n3. Uzun süredir görülmeyen tanıdıkla karşılaşınca: "Nasılsınız, iyi misiniz?" (veya Ne var ne yok?)',
        rubric: [
          { criterion: 'Üç kalıp sözü de doğru durumla eşleştirme', points: 20 },
          { criterion: 'İki kalıp sözü doğru eşleştirme', points: 13 },
          { criterion: 'Bir kalıp sözü doğru eşleştirme', points: 7 },
          { criterion: 'Hatalı eşleştirme', points: 0 }
        ],
        linesNeeded: 4
      },
      {
        id: 'g6-s3-e1-q6',
        number: 6,
        outcomeCode: 'T.Y.6.21',
        title: 'Yazım ve Noktalama Kuralları',
        points: 20,
        prompt: `a) "O bilirdiki tatlı dille çözülemeyecek hiçbir sorun yoktur." cümlesindeki yazım yanlışını düzelterek yazınız.
b) "Evet (1) bizler de onun öğütlerine kulak vermeliyiz. Sözlerimizi tartarak konuşmalıyız (2) dilimiz bizim en kıymetli hazinemizdir." metninde (1) ve (2) numaralı yerlere hangi noktalama işaretleri gelmelidir ve görevleri nedir?`,
        expectedAnswer: 'a) "bilirdiki" bitişik yazılmıştır, doğrusu "bilirdi ki" şeklinde ayrı yazılmalıdır ("ki" bağlaçtır).\nb) (1) Virgül (,): Kendisinden sonraki cümleye bağlı kabul bildiren "Evet" kelimesinden sonra konmuştur.\n(2) Noktalı virgül (;) veya Virgül (,): Anlamca birbirine bağlı sıralı cümleleri ayırmak için konmuştur.',
        rubric: [
          { criterion: 'Yazım yanlışını ve noktalama işaretleri ile görevlerini eksiksiz açıklama', points: 20 },
          { criterion: 'Yalnızca yazım yanlışını veya yalnızca noktalamayı doğru yapma', points: 10 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 5
      }
    ]
  },

  // Senaryo 3 - Sınav 2
  {
    id: 'g6-s3-e2',
    gradeLevel: 6,
    scenarioGroup: 'senaryo-3',
    scenarioGroupTitle: 'MEB Senaryo 3',
    scenarioName: '2. Sınav (Komşuluk ve Paylaşma Kültürü)',
    examNumber: 2,
    title: 'Komşuluk ve Paylaşma Kültürü',
    theme: '3. Tema: Millî Kültür & Komşuluk İlişkileri',
    targetClass: '6. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Komşuluk ve Paylaşma Kültürü',
      author: 'Türkçe Ülküsü Yayınları (Özgün Kültür Metni)',
      source: '6. Sınıf Türkçe Dersi - Değerlerimiz',
      content: `Geleneksel Türk mahalle kültüründe komşuluk, kan bağından farksız güçlü bir bağdır. Evlerde pişen sıcak bir çorbanın kokusu mahalleye yayıldığında bir kâse de mutlaka yan komşuya gönderilirdi. Çünkü atalarımız, "Komşu komşunun külüne muhtaçtır." diyerek en küçük bir ihtiyacımızda bile birbirimize destek olmamız gerektiğini hatırlatmışlardır. 

Kapısı herkese açık olan cömert komşular, mahallenin emniyet supabıydı. Hastalanan birinin kapısı çalınır, çarşıdan dönerken eli kolu poşetlerle dolu yaşlı bir amca görüldüğünde el ele verilip poşetleri taşınırdı. Konu komşu bir araya geldiğinde dertler paylaşılır, sevinçler ikiye katlanırdı. Günümüzde apartman katlarında birbirini tanımayan insanların çoğalması, bu güzel yardımlaşma kültürümüzü unutturmamalıdır.`
    },
    questions: [
      {
        id: 'g6-s3-e2-q1',
        number: 1,
        outcomeCode: 'T.O.6.5',
        title: 'Kelime Anlamı Tahmini ve İpucu',
        points: 15,
        prompt: 'Metinde geçen "konu komşu" ikilemesinin anlamını metnin bağlamından hareketle tahmin ediniz.',
        expectedAnswer: 'Tahminim: Yakın çevrede oturan bütün komşular, mahalle halkı, etraftaki tanıdık kimseler.',
        rubric: [
          { criterion: 'Doğru anlam tahmininde bulunma', points: 15 },
          { criterion: 'Kısmen doğru tahmin', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g6-s3-e2-q2',
        number: 2,
        outcomeCode: 'T.O.6.6',
        title: 'Metnin Yüzey Anlamı (Metnin Konusu)',
        points: 15,
        prompt: 'Okuduğunuz metnin konusunu (yüzey anlamını) belirleyerek bir cümleyle yazınız.',
        expectedAnswer: 'Metnin konusu; geleneksel komşuluk ilişkilerinin değeri, yardımlaşma ve ortak yaşam kültürünün hayatımıza kattığı huzurdur.',
        rubric: [
          { criterion: 'Metnin konusunu eksiksiz ve doğru biçimde tek cümleyle belirleme', points: 15 },
          { criterion: 'Konuyu kısmen ifade etme veya eksik bırakma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g6-s3-e2-q3',
        number: 3,
        outcomeCode: 'T.O.6.16',
        title: 'Anahtar Kelime Çözümleme',
        points: 15,
        prompt: 'Metnin konusunu en iyi yansıtan iki anahtar kelimeyi yazınız ve metinle ilişkisini açıklayınız.',
        expectedAnswer: '1. Komşuluk (Metinde dayanışma ve ortak yaşamın merkezidir.)\n2. Yardımlaşma / Paylaşma (Komşuların birbirine destek olma ahlakıdır.)',
        rubric: [
          { criterion: 'İki anahtar kelimeyi ve metin ilişkisini doğru yazma', points: 15 },
          { criterion: 'Yalnızca kelimeleri yazma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 4
      },
      {
        id: 'g6-s3-e2-q4',
        number: 4,
        outcomeCode: 'T.O.6.21',
        title: 'Söz Varlığı Geliştirme (Deyim Çözümleme ve Cümle)',
        points: 15,
        prompt: `Metinde geçen "kapısı açık olmak" deyimini inceleyiniz:
a) Bu deyimin metne kattığı anlamı açıklayınız.
b) Bu deyimi anlamına uygun olacak şekilde yeni bir cümle içinde kullanınız.`,
        expectedAnswer: 'a) Deyimin Anlamı: Konuksever, cömert olmak; ihtiyacı olan hiç kimseyi kapıdan geri çevirmemek, herkese yardım elini uzatmak.\nb) Yeni Cümle: Köyümüzün muhtarı son derece cömert bir insandı, evinin kapısı yardıma muhtaç herkese daima açıktı.',
        rubric: [
          { criterion: 'Deyimin anlamını açıklayıp uygun yeni cümle kurma', points: 15 },
          { criterion: 'Yalnızca anlamı açıklama veya yalnızca cümle kurma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 4
      },
      {
        id: 'g6-s3-e2-q5',
        number: 5,
        outcomeCode: 'T.Y.6.18',
        title: 'Söz Varlığıyla Paragraf Yazma',
        points: 20,
        prompt: `Metinde geçen "Ev alma, komşu al." ve "El ele vermek" sözlerini kullanarak komşuluk ilişkilerini geliştirmek için neler yapılabileceğini anlatan 4-5 cümlelik bir bilgilendirici paragraf yazınız.`,
        expectedAnswer: 'İyi bir evde oturmaktan çok daha önemlisi, huzurlu ve güvenilir komşulara sahip olmaktır; bu yüzden atalarımız "Ev alma, komşu al." demişlerdir. Zor zamanlarımızda yanımızda bulabileceğimiz iyi komşular hayatımızı güzelleştirir. Mahallemizde birinin yardıma ihtiyacı olduğunda el ele vermek aramızdaki dostluk bağlarını kuvvetlendirir. Birbirimize selam vermek ve hal hatır sormak komşuluk sevgisini daima diri tutar.',
        rubric: [
          { criterion: 'Belirtilen iki sözü anlamına uygun kullanarak 4-5 cümlelik akıcı paragraf yazma', points: 20 },
          { criterion: 'İfadelerden birini eksik kullanma veya cümle sayısı yetersizliği', points: 10 },
          { criterion: 'Konu dışı yazı', points: 0 }
        ],
        linesNeeded: 6
      },
      {
        id: 'g6-s3-e2-q6',
        number: 6,
        outcomeCode: 'T.Y.6.21',
        title: 'Yazım ve Noktalama Kuralları',
        points: 20,
        prompt: `a) "Komşumuzun bahçesinde ki güller açmışmı diye baktık." cümlesindeki iki yazım yanlışını düzelterek yazınız.
b) "Komşular bir araya geldi mi içimizi büyük bir neşe kaplar." cümlesindeki "mi" ekinin görevi ve anlamı nedir?`,
        expectedAnswer: 'a) 1. "bahçesinde ki" -> "bahçesindeki" (-ki eki bitişik yazılır).\n2. "açmışmı" -> "açmış mı" (Soru eki "mı" ayrı yazılır).\nb) Cümleye zaman veya şart anlamı ("geldiği zaman / gelince") katmıştır.',
        rubric: [
          { criterion: 'Yazım yanlışlarını ve "mi"nin zaman anlamı görevini eksiksiz açıklama', points: 20 },
          { criterion: 'Yalnızca bir bölümü doğru yapma', points: 10 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 5
      }
    ]
  },

  // ==================== SENARYO 4 ====================
  // Senaryo 4 - Sınav 1
  {
    id: 'g6-s4-e1',
    gradeLevel: 6,
    scenarioGroup: 'senaryo-4',
    scenarioGroupTitle: 'MEB Senaryo 4',
    scenarioName: '1. Sınav (Doğanın Sessiz Koruyucuları)',
    examNumber: 1,
    title: 'Doğanın Sessiz Koruyucuları',
    theme: '4. Tema: Doğa ve Bilim & Çevre Bilinci',
    targetClass: '6. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Doğanın Sessiz Koruyucuları',
      author: 'Türkçe Ülküsü Yayınları (Özgün Bilim Metni)',
      source: '6. Sınıf Türkçe Dersi - Ekoloji ve Çevre',
      content: `Karasal ekosistemlerde arılar, bitkilerin tozlaşmasını sağlayarak yeryüzündeki yaşam zincirinin en hayati halkasını oluştururlar. Eğer arılar yeryüzünden silinirse tarımsal üretimin büyük bir kısmı durur ve besin zinciri çöker. Ancak son yıllarda bilinçsizce kullanılan tarım ilaçları ve betonlaşma, arı nüfusunu tehlikeli biçimde azaltmaktadır.

Biyologlar ve doğa gönüllüleri bu tehlikeye karşı şehirlerde yeşil çatı projeleri ve çiçek koridorları oluşturmaya başladılar. Parklara arıların sevdiği lavanta, ada çayı ve kekik gibi aromatik bitkiler ekiliyor. Şehir sakinleri balkonlarına saksılar koyarak küçük birer vaha yaratıyorlar. Doğayı korumak yalnızca ormanlarda değil, yaşadığımız sokaklarda da atabileceğimiz bilinçli adımlarla mümkündür.`
    },
    questions: [
      {
        id: 'g6-s4-e1-q1',
        number: 1,
        outcomeCode: 'T.O.6.6',
        title: 'Metnin Yüzey Anlamı (Metnin Konusu)',
        points: 15,
        prompt: 'Okuduğunuz metnin konusunu (yüzey anlamını) belirleyerek bir cümleyle yazınız.',
        expectedAnswer: 'Metnin konusu; arıların ekosistem ve besin zincirindeki hayati rolü ve şehirlerde arı nüfusunu korumak için geliştirilen çevre projeleridir.',
        rubric: [
          { criterion: 'Metnin konusunu eksiksiz ve doğru biçimde tek cümleyle belirleme', points: 15 },
          { criterion: 'Konuyu kısmen ifade etme veya eksik bırakma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g6-s4-e1-q2',
        number: 2,
        outcomeCode: 'T.O.6.6',
        title: 'Metnin Yüzey Anlamı (Çözüm Projeleri)',
        points: 15,
        prompt: 'Biyologlar ve doğa gönüllüleri şehirlerde arı nüfusunu korumak için hangi iki projeyi hayata geçirmişlerdir? Metinden bularak yazınız.',
        expectedAnswer: '1. Şehirlerde yeşil çatı projeleri ve çiçek koridorları oluşturmuşlardır.\n2. Parklara arıların sevdiği lavanta, ada çayı ve kekik gibi bitkiler ekmişlerdir.',
        rubric: [
          { criterion: 'İki projeyi de metne dayalı olarak eksiksiz yazma', points: 15 },
          { criterion: 'Tek projeyi yazma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g6-s4-e1-q3',
        number: 3,
        outcomeCode: 'T.O.6.21',
        title: 'Söz Varlığı Geliştirme (Söz Öbeği Anlamı ve Cümle)',
        points: 15,
        prompt: `Metinde geçen "yaşam zincirinin hayati bir halkası" söz öbeğini inceleyiniz:
a) Bu söz öbeğinin metne kattığı anlamı açıklayınız.
b) "Hayati" sözcüğünü anlamına uygun yeni ve özgün bir cümle içinde kullanınız.`,
        expectedAnswer: 'a) Söz Öbeğinin Anlamı: Doğadaki canlıların yaşamını sürdürebilmesi için vazgeçilmez, koparılamaz ve zorunlu bir parçası olmak.\nb) Yeni Cümle: Temiz içme suyuna ulaşabilmek, bütün canlıların sağlıklı yaşaması için hayati bir öneme sahiptir.',
        rubric: [
          { criterion: 'Söz öbeğinin anlamını açıklayıp "hayati" sözcüğüyle uygun yeni cümle kurma', points: 15 },
          { criterion: 'Yalnızca anlamı açıklama veya yalnızca cümle kurma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 4
      },
      {
        id: 'g6-s4-e1-q4',
        number: 4,
        outcomeCode: 'T.O.6.21',
        title: 'Söz Varlığı Geliştirme (Kavramsal Çözümleme ve İşlev)',
        points: 15,
        prompt: 'Metinde geçen "küçük birer vaha yaratmak" ifadesiyle şehir balkonlarının doğaya katkısı nasıl anlatılmıştır? Açıklayınız.',
        expectedAnswer: 'Betonlaşmış ve yeşili azalmış şehir ortamında balkonlara konan çiçekli saksıların arılar, böcekler ve kuşlar için hayat dolu, besleyici ve güvenli birer sığınak oluşturduğu anlatılmıştır.',
        rubric: [
          { criterion: 'Balkon saksılarının canlılar için besleyici güvenli sığınak olma işlevini tam açıklama', points: 15 },
          { criterion: 'Kısmi açıklama', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g6-s4-e1-q5',
        number: 5,
        outcomeCode: 'T.Y.6.3',
        title: 'Yazıda İçerik ve Yapı Seçimi (Öneri Paragrafı)',
        points: 20,
        prompt: 'Okulunuzda çevre kulübü başkanı olarak öğrencileri okul bahçesini yeşillendirmeye teşvik eden en az altı cümlelik bir açıklama paragrafı yazınız. Paragrafınızda iki somut öneri sununuz ve neden gerekli olduklarını açıklayınız.',
        expectedAnswer: 'Okul bahçemizi sadece beton bir alan olmaktan çıkarıp canlı bir doğa köşesine dönüştürmeliyiz. İlk olarak bahçenin güneş alan köşelerine polen ve nektar üreten rengârenk çiçek tohumları ekmeliyiz; bu sayede arılara ve kelebeklere güvenli bir besin alanı sağlarız. İkinci olarak her sınıf için bir bakım nöbeti çizelgesi oluşturmalıyız; böylece dikilen bitkilerin susuz kalmasını önleyerek sorumluluk bilincimizi geliştiririz. Birlikte atacağımız bu küçük adımlar okulumuzu çok daha ferah ve yaşanabilir bir yuvaya dönüştürecektir. Doğayı sevmek, ona emek vermekle başlar.',
        rubric: [
          { criterion: 'Açıklama türünde iki öneri ve gerekçelerini içeren en az altı cümlelik tutarlı metin yazma', points: 20 },
          { criterion: 'Önerileri yazıp gerekçeleri eksik bırakma veya cümle sayısı azlığı', points: 10 },
          { criterion: 'Konu dışı metin', points: 0 }
        ],
        linesNeeded: 7
      },
      {
        id: 'g6-s4-e1-q6',
        number: 6,
        outcomeCode: 'T.Y.6.21',
        title: 'Yazım Kuralları ve Noktalama',
        points: 20,
        prompt: `a) "Şehirdeki parklar da arılar için çiçek koridorları kuruldu mu çevre rahatlar." cümlesindeki yazım yanlışlarını bulunuz.
b) "Arılar (1) doğanın dengesini korur (2) onlara zarar verecek ilaçlardan kaçınmalıyız." cümlesinde (1) ve (2) numaralı yerlere hangi noktalama işaretleri gelmelidir?`,
        expectedAnswer: 'a) "parklar da" bitişik yazılmalıdır -> "parklarda" (Bulunma durumu ekidir, bağlaç değildir).\nb) (1) Virgül (,): Özneden sonra bildirme amacıyla.\n(2) Noktalı virgül (;) veya Nokta (.): Birbirine bağlı sıralı cümleleri ayırmak için.',
        rubric: [
          { criterion: 'Yazım yanlışını ve noktalama işaretlerini doğru belirleme', points: 20 },
          { criterion: 'Yalnızca bir bölümü doğru yapma', points: 10 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 5
      }
    ]
  },

  // Senaryo 4 - Sınav 2
  {
    id: 'g6-s4-e2',
    gradeLevel: 6,
    scenarioGroup: 'senaryo-4',
    scenarioGroupTitle: 'MEB Senaryo 4',
    scenarioName: '2. Sınav (Gökyüzünün Sessiz Yolcuları)',
    examNumber: 2,
    title: 'Gökyüzünün Sessiz Yolcuları',
    theme: '4. Tema: Doğa ve Hayvanlar Âlemi',
    targetClass: '6. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Gökyüzünün Sessiz Yolcuları',
      author: 'Türkçe Ülküsü Yayınları (Özgün Bilim Metni)',
      source: '6. Sınıf Türkçe Dersi - Göçmen Kuşlar',
      content: `Sonbahar rüzgârları kuzeyden serin esmeye başladığında leylekler gökyüzünde büyük "V" harfi düzeninde dizilerek binlerce kilometrelik güney yolculuklarına başlarlar. Bu uçuş düzeni rastgele seçilmiş bir şekil değildir. Öndeki lider kuş kanat çırptıkça arkasında hava akımı oluşturur; arkasındaki kuşlar bu akımdan yararlanarak çok daha az enerji harcarlar. 

Lider kuş yorulduğunda arkadaki dinlenmiş kuşlardan biri öne geçer. Böylece sürüde kusursuz bir dayanışma sağlanır. Leyleklerin yolculuğu yalnızca bir yer değiştirme değildir; doğanın mevsimsel ritmini tamamlayan ve sulak alanların korunmasına işaret eden muhteşem bir göç destanıdır.`
    },
    questions: [
      {
        id: 'g6-s4-e2-q1',
        number: 1,
        outcomeCode: 'T.O.6.6',
        title: 'Metnin Yüzey Anlamı (Metnin Konusu)',
        points: 15,
        prompt: 'Okuduğunuz metnin konusunu (yüzey anlamını) belirleyerek bir cümleyle yazınız.',
        expectedAnswer: 'Metnin konusu; leyleklerin "V" düzeninde uçarak gerçekleştirdikleri göç yolculuğu ve sürü içindeki dayanışmadır.',
        rubric: [
          { criterion: 'Metnin konusunu eksiksiz ve doğru biçimde tek cümleyle belirleme', points: 15 },
          { criterion: 'Konuyu kısmen ifade etme veya eksik bırakma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g6-s4-e2-q2',
        number: 2,
        outcomeCode: 'T.O.6.6',
        title: 'Metnin Yüzey Anlamı (Sürü Dayanışması)',
        points: 15,
        prompt: 'Lider kuş yorulduğunda sürüde nasıl bir işleyiş gerçekleşmektedir?',
        expectedAnswer: 'Öndeki lider kuş yorulunca geriye geçer ve arkadaki dinlenmiş kuşlardan biri onun yerine öne geçer.',
        rubric: [
          { criterion: 'Görev değişimini doğru açıklama', points: 15 },
          { criterion: 'Kısmi açıklama', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g6-s4-e2-q3',
        number: 3,
        outcomeCode: 'T.O.6.21',
        title: 'Söz Varlığı Geliştirme (Söz Öbeği Çözümleme)',
        points: 15,
        prompt: 'Metinde geçen "göç destanı" söz öbeğinin metne kattığı anlamı ve leyleklerin yolculuğuyla ilişkisini açıklayınız.',
        expectedAnswer: 'Büyük bir dayanışma, mücadele ve sabır gerektiren; binlerce kilometrelik uzun, görkemli ve hayranlık uyandırıcı yolculuğu ifade etmektedir.',
        rubric: [
          { criterion: 'Göç destanı ifadesinin dayanışma ve görkemli yolculuk anlamını eksiksiz açıklama', points: 15 },
          { criterion: 'Kısmi açıklama', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 4
      },
      {
        id: 'g6-s4-e2-q4',
        number: 4,
        outcomeCode: 'T.O.6.21',
        title: 'Söz Varlığı Geliştirme (Cümle Kurma)',
        points: 15,
        prompt: '"Ritim" sözcüğünü metindeki doğa anlamının dışındaki müzik veya spor bağlamında yeni bir cümlede kullanınız.',
        expectedAnswer: 'Örnek Cümle: Müzik dersinde trampetin ritmine ayak uydurarak şarkıyı hep birlikte söyledik.',
        rubric: [
          { criterion: 'Sözcüğü anlamına uygun ve farklı bağlamda kurallı kullanma', points: 15 },
          { criterion: 'Cümle kurup bağlamı zayıf bırakma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g6-s4-e2-q5',
        number: 5,
        outcomeCode: 'T.Y.6.3',
        title: 'Yazıda İçerik ve Yapı Seçimi (Açıklama Paragrafı)',
        points: 20,
        prompt: 'Leyleklerin "V" şeklindeki uçuşundan çıkarabileceğimiz ekip çalışması derslerini anlatan en az altı cümlelik bir açıklama paragrafı yazınız. İki somut öneri sununuz.',
        expectedAnswer: 'Leyleklerin gökyüzündeki muazzam uçuşu, insanlara ekip çalışmasının önemini öğreten mükemmel bir tablodur. Hiçbir başarı tek bir kişinin sırtında sonsuza kadar taşınamaz; zor işlerde liderliği ve sorumluluğu sırayla paylaşmalıyız. Takım arkadaşlarımız yorulduğunda öne çıkarak onlara destek olmalı ve yüklerini hafifletmeliyiz. Ayrıca birbirimizin gücünden güç alarak ortak bir hedef doğrultusunda uyum içinde hareket etmeliyiz. Bu iki kuralı uygulayan her grup, fırtınalara rağmen hedefine başarıyla ulaşacaktır.',
        rubric: [
          { criterion: 'Ekip çalışması derslerini iki öneriyle anlatan en az altı cümlelik tutarlı metin yazma', points: 20 },
          { criterion: 'Eksik öneri veya cümle sayısı yetersizliği', points: 10 },
          { criterion: 'Konu dışı metin', points: 0 }
        ],
        linesNeeded: 7
      },
      {
        id: 'g6-s4-e2-q6',
        number: 6,
        outcomeCode: 'T.Y.6.21',
        title: 'Yazım Kuralları ve Noktalama',
        points: 20,
        prompt: `a) "Göçmen kuşlar da güneye ulaştımı bahar müjdelenir." cümlesindeki yazım yanlışlarını bulunuz.
b) "Leylekler yoruldukça (1) dinlenir (2) gökyüzünde düzeni korurlar." cümlesinde yay ayraçla belirtilen yerlere hangi noktalama işaretleri gelmelidir?`,
        expectedAnswer: 'a) "ulaştımı" ayrı yazılmalıdır -> "ulaştı mı" (Soru eki "mı" ayrı yazılır).\nb) (1) Virgül (,): Sıralı fiilleri ayırma.\n(2) Virgül (,) veya Noktalı virgül (;): Sıralı cümleleri ayırma.',
        rubric: [
          { criterion: 'Yazım yanlışını ve noktalama işaretlerini doğru yazma', points: 20 },
          { criterion: 'Yalnızca bir bölümü doğru yapma', points: 10 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 5
      }
    ]
  },

  // ==================== SENARYO 5 ====================
  // Senaryo 5 - Sınav 1
  {
    id: 'g6-s5-e1',
    gradeLevel: 6,
    scenarioGroup: 'senaryo-5',
    scenarioGroupTitle: 'MEB Senaryo 5',
    scenarioName: '1. Sınav (Tarihi Çarşıda Bakır Sesleri)',
    examNumber: 1,
    title: 'Tarihi Çarşıda Bakır Sesleri',
    theme: '5. Tema: Millî Kültür & Geleneksel Meslekler',
    targetClass: '6. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Tarihi Çarşıda Bakır Sesleri',
      author: 'Türkçe Ülküsü Yayınları (Özgün Sanat Metni)',
      source: '6. Sınıf Türkçe Dersi - Somut Kültürel Miras',
      content: `Gaziantep’in dar sokaklı Bakırcılar Çarşısı’na adım attığınızda havayı çekiçlerin ritmik sesleri doldurur. Kazım Usta, yarım asırdır küçük tezgâhında kızıl bakır levhaları çelik kalemlerle işleyen son ustalardan biridir. Bir tencere kapağına işlediği selvi motifi, sabrın ve el emeğinin eşsiz bir abidesidir. Kazım Usta, "Bakıra vururken gönlündeki sevgiyi katmazsan çekiçten çıkan ses gürültü olur; sevgiyle vurursan musikiye dönüşür." der.

Çırağı Ömer, ustanın her vuruşunu dikkatle izler. Bakır dövülürken kızgın ateşte tavlanır, ardından soğuk suda dinlendirilir. Kazım Usta acele etmez; çekiç darbelerini milim milim hesaplayarak vurur. Günümüzde fabrikasyon alüminyum kaplar çoğalsa da bakır kapların sunduğu sağlık, dayanıklılık ve estetik değer yerini hiçbir şeye bırakmaz.`
    },
    questions: [
      {
        id: 'g6-s5-e1-q1',
        number: 1,
        outcomeCode: 'T.O.6.6',
        title: 'Metnin Yüzey Anlamı (Metnin Konusu)',
        points: 15,
        prompt: 'Okuduğunuz metnin konusunu (yüzey anlamını) belirleyerek bir cümleyle yazınız.',
        expectedAnswer: 'Metnin konusu; Gaziantep Bakırcılar Çarşısı\'ndaki geleneksel bakırcılık sanatı, Kazım Usta\'nın sabrı ve el emeğinin eşsiz değeridir.',
        rubric: [
          { criterion: 'Metnin konusunu eksiksiz ve doğru biçimde tek cümleyle belirleme', points: 15 },
          { criterion: 'Konuyu kısmen ifade etme veya eksik bırakma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g6-s5-e1-q2',
        number: 2,
        outcomeCode: 'T.O.6.6',
        title: 'Metnin Yüzey Anlamı (Üretim Aşamaları)',
        points: 15,
        prompt: 'Metne göre bakır levhalar işlenirken hangi aşamalardan geçmektedir?',
        expectedAnswer: 'Kızgın ateşte tavlanmakta, ardından soğuk suda dinlendirilmekte ve çelik kalemlerle çekiç darbeleriyle milim milim işlenmektedir.',
        rubric: [
          { criterion: 'Ateşte tavlanma, suda dinlendirilme ve çekiçle işlenme aşamalarını eksiksiz yazma', points: 15 },
          { criterion: 'Aşamalardan birini eksik yazma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g6-s5-e1-q3',
        number: 3,
        outcomeCode: 'T.O.6.16',
        title: 'Anahtar Kelime Çözümleme',
        points: 10,
        prompt: 'Metnin içeriğini yansıtan iki anahtar kelime yazınız.',
        expectedAnswer: 'Bakırcılık, El emeği (veya Bakırcılar Çarşısı, Geleneksel meslek).',
        rubric: [
          { criterion: 'İki uygun anahtar kelime yazma', points: 10 },
          { criterion: 'Tek kelime yazma', points: 5 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 2
      },
      {
        id: 'g6-s5-e1-q4',
        number: 4,
        outcomeCode: 'T.O.6.21',
        title: 'Söz Varlığı Geliştirme (Söz Öbeği Anlamı ve İşlevi)',
        points: 15,
        prompt: 'Metinde geçen "el emeğinin eşsiz bir abidesi" söz öbeğinin metne kattığı anlamı açıklayınız.',
        expectedAnswer: 'İnsanın sabırla, sevgiyle ve alın teriyle ürettiği, yıllarca değerini kaybetmeyecek, hayranlık uyandıran kalıcı ve abidevi bir sanat eseri olduğunu ifade eder.',
        rubric: [
          { criterion: 'Söz öbeğinin sabır, el emeği ve kalıcılık anlamını eksiksiz açıklama', points: 15 },
          { criterion: 'Kısmi açıklama', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g6-s5-e1-q5',
        number: 5,
        outcomeCode: 'T.O.6.21',
        title: 'Söz Varlığı Geliştirme (Cümle Kurma)',
        points: 15,
        prompt: '"Tavlamak" veya "dinlendirmek" sözcüklerinden birini metin dışındaki günlük anlamıyla yeni bir cümlede kullanınız.',
        expectedAnswer: 'Örnek Cümle: Annem yoğurduğu hamuru mayalanması için ılık bir örtü altında yarım saat dinlendirdi.',
        rubric: [
          { criterion: 'Sözcüğü anlamına uygun ve farklı bağlamda kurallı kullanma', points: 15 },
          { criterion: 'Cümle kurup bağlamı zayıf bırakma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g6-s5-e1-q6',
        number: 6,
        outcomeCode: 'T.Y.6.3',
        title: 'Yazıda İçerik ve Yapı Seçimi (Öneri Paragrafı)',
        points: 15,
        prompt: 'Geleneksel el sanatlarımızın unutulmaması ve genç nesillere aktarılması için neler yapılabileceğini anlatan en az altı cümlelik bir açıklama paragrafı yazınız. İki somut öneri sununuz.',
        expectedAnswer: 'Kültürümüzün can damarı olan geleneksel el sanatlarını yaşatmak hepimizin ortak görevidir. İlk olarak okullarda bakırcılık, çini ve ebru gibi sanatların tanıtıldığı uygulamalı atölye günleri düzenlenmelidir; bu sayede gençler ata sanatlarını yakından tanıma fırsatı bulur. İkinci olarak ustaların çırak yetiştirmesini destekleyen projeler geliştirilmeli ve el emeği ürünler sergilerle tanıtılmalıdır. Fabrikasyon ürünlerin hızına kapılmak yerine el emeğinin değerini bilmeliyiz. Sanatını kaybeden bir millet, ruhunun en renkli parçasını kaybetmiş demektir.',
        rubric: [
          { criterion: 'İki somut öneri ve gerekçelerini içeren en az altı cümlelik akıcı açıklama metni yazma', points: 15 },
          { criterion: 'Eksik öneri veya cümle sayısı yetersizliği', points: 8 },
          { criterion: 'Konu dışı metin', points: 0 }
        ],
        linesNeeded: 6
      },
      {
        id: 'g6-s5-e1-q7',
        number: 7,
        outcomeCode: 'T.Y.6.21',
        title: 'Yazım Kuralları ve Noktalama',
        points: 15,
        prompt: `a) "Bakırcılar Çarşısı'nda ki ustalar da işlerine özen gösterirdi." cümlesindeki yazım yanlışını düzeltiniz.
b) "Kazım Usta, emek sabırla yoğrulur, diyerek çekicini vurdu." cümlesindeki virgüllerin görevini yazınız.`,
        expectedAnswer: 'a) "Çarşısı\'nda ki" -> "Çarşısı\'ndaki" (-ki eki bitişik yazılır).\nb) Tırnak içinde gösterilmeyen alıntı cümlesini belirtmek için kullanılmıştır.',
        rubric: [
          { criterion: 'Yazım yanlışını ve alıntı cümlesi virgül kuralını doğru açıklama', points: 15 },
          { criterion: 'Yalnızca bir bölümü doğru yapma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 4
      }
    ]
  },

  // Senaryo 5 - Sınav 2
  {
    id: 'g6-s5-e2',
    gradeLevel: 6,
    scenarioGroup: 'senaryo-5',
    scenarioGroupTitle: 'MEB Senaryo 5',
    scenarioName: '2. Sınav (Ebrunun Suyla Dansı)',
    examNumber: 2,
    title: 'Ebrunun Suyla Dansı',
    theme: '5. Tema: Millî Kültür & Geleneksel Sanatlar',
    targetClass: '6. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Ebrunun Suyla Dansı',
      author: 'Türkçe Ülküsü Yayınları (Özgün Sanat Metni)',
      source: '6. Sınıf Türkçe Dersi - Görsel Sanatlar',
      content: `Kitreyle kıvamı artırılmış suyun bulunduğu tekne, ebru sanatçısı için hayal gücünün aynasıdır. At kılından ve gül dalından yapılmış fırçalarla doğal toprak boyalar suyun yüzeyine damlatılır. Boyalar suyun üzerinde yayılırken sanatçı "biz" adı verilen ince telle boyalara zarifçe yön verir: Kimi zaman bir lale, kimi zaman bir karanfil, kimi zaman da sonsuz dalgalar belirir. 

Ebru sanatı, acele etmeyi asla kabul etmez. Suya düşen her damla, sanatçının ruh hâlini yansıtır. Suyun üzerindeki desen özel bir kâğıdın tekneye dikkatle yatırılmasıyla kâğıda aktarılır. Kâğıt sudan çekildiği an, dünyada eşi ve benzeri bir daha asla yapılamayacak tek ve benzersiz bir sanat eseri doğmuş olur.`
    },
    questions: [
      {
        id: 'g6-s5-e2-q1',
        number: 1,
        outcomeCode: 'T.O.6.6',
        title: 'Metnin Yüzey Anlamı (Metnin Konusu)',
        points: 15,
        prompt: 'Okuduğunuz metnin konusunu (yüzey anlamını) belirleyerek bir cümleyle yazınız.',
        expectedAnswer: 'Metnin konusu; geleneksel ebru sanatının incelikleri, kullanılan doğal malzemeler ve su üzerindeki renklerin benzersizliğidir.',
        rubric: [
          { criterion: 'Metnin konusunu eksiksiz ve doğru biçimde tek cümleyle belirleme', points: 15 },
          { criterion: 'Konuyu kısmen ifade etme veya eksik bırakma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g6-s5-e2-q2',
        number: 2,
        outcomeCode: 'T.O.6.6',
        title: 'Metnin Yüzey Anlamı (Benzersizlik)',
        points: 15,
        prompt: 'Yazara göre her ebru eseri neden dünyada eşi ve benzeri bir daha yapılamayacak kadar benzersizdir?',
        expectedAnswer: 'Çünkü suyun üzerindeki boya damlalarının dağılımı ve o anki desen bir daha birebir asla tekrarlanamaz; kâğıda aktarıldığında tek bir nüsha olarak kalır.',
        rubric: [
          { criterion: 'Tekrarlanamazlık ve su üzerindeki anlık durumu tam açıklama', points: 15 },
          { criterion: 'Kısmi açıklama', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g6-s5-e2-q3',
        number: 3,
        outcomeCode: 'T.O.6.16',
        title: 'Anahtar Kelime Çözümleme',
        points: 10,
        prompt: 'Metnin içeriğini yansıtan iki anahtar kelime yazınız.',
        expectedAnswer: 'Ebru sanatı, Kitreli su (veya Geleneksel sanat, Toprak boya).',
        rubric: [
          { criterion: 'İki doğru anahtar kelime yazma', points: 10 },
          { criterion: 'Tek kelime yazma', points: 5 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 2
      },
      {
        id: 'g6-s5-e2-q4',
        number: 4,
        outcomeCode: 'T.O.6.21',
        title: 'Söz Varlığı Geliştirme (Söz Öbeği Anlamı ve İşlevi)',
        points: 15,
        prompt: 'Metinde geçen "hayal gücünün aynası" ifadesinin ebru teknesi ve sanatçıyla ilişkisini açıklayınız.',
        expectedAnswer: 'Ebru teknesinin, sanatçının iç dünyasını, duygularını, özgün hayallerini ve hislerini suyun üzerinde somut olarak görünür kılan bir vasıta olduğunu ifade eder.',
        rubric: [
          { criterion: 'İfadenin sanatçının hayallerini ve iç dünyasını yansıtma işlevini tam açıklama', points: 15 },
          { criterion: 'Kısmi açıklama', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g6-s5-e2-q5',
        number: 5,
        outcomeCode: 'T.O.6.21',
        title: 'Söz Varlığı Geliştirme (Cümle Kurma)',
        points: 15,
        prompt: '"Kıvam" sözcüğünü yemek yapımı veya günlük yaşamla ilişkili yeni bir cümlede kullanınız.',
        expectedAnswer: 'Örnek Cümle: Muhallebi tam kıvamını alıncaya kadar annem tencereyi tahta kaşıkla sürekli karıştırdı.',
        rubric: [
          { criterion: 'Sözcüğü anlamına uygun ve bağlamında kurallı kullanma', points: 15 },
          { criterion: 'Cümle kurup bağlamı zayıf tutma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g6-s5-e2-q6',
        number: 6,
        outcomeCode: 'T.Y.6.3',
        title: 'Yazıda İçerik ve Yapı Seçimi (Öneri Paragrafı)',
        points: 15,
        prompt: 'Ebru sanatını öğrenmek isteyen bir öğrenciye sabır ve dikkatin önemini anlatan en az altı cümlelik bir açıklama paragrafı yazınız. İki somut öneri sununuz.',
        expectedAnswer: 'Ebru sanatına adım atarken öncelikle sabırlı olmayı ve acele etmemeyi öğrenmelisiniz. İlk olarak boyaları suya damlatırken fırçayı sertçe sallamak yerine sakin ve ölçülü vuruşlar yapmalısınız; böylece boyaların su üstünde uyumla dağılmasını sağlarsınız. İkinci olarak kâğıdı tekneye yatırırken hava kabarcığı kalmaması için tek bir hamlede, pürüzsüzce sermelisiniz. Su gibi dingin bir zihinle çalışırsanız hayalinizdeki motifler canlanır. Unutmayın ki ebru, sadece bir resim değil, ruhun suyla buluştuğu derin bir sabır yolculuğudur.',
        rubric: [
          { criterion: 'İki somut öneri ve gerekçesini içeren en az altı cümlelik akıcı açıklama metni yazma', points: 15 },
          { criterion: 'Eksik öneri veya cümle sayısı yetersizliği', points: 8 },
          { criterion: 'Konu dışı metin', points: 0 }
        ],
        linesNeeded: 6
      },
      {
        id: 'g6-s5-e2-q7',
        number: 7,
        outcomeCode: 'T.Y.6.21',
        title: 'Yazım Kuralları ve Noktalama',
        points: 15,
        prompt: `a) "Ebru teknesinde ki boyalar da birbirine karıştı." cümlesindeki yazım yanlışını bulunuz.
b) "Sanatçı boyayı damlattı (1) şekil verdi (2) kâğıdı çekti." cümlesindeki boşluklara hangi noktalama işareti gelmelidir?`,
        expectedAnswer: 'a) "teknesinde ki" bitişik yazılmalıdır -> "teknesindeki" (Sıfat yapan -ki ekidir).\nb) (1) Virgül (,), (2) Virgül (,) [Sıralı fiilleri ayırmak için].',
        rubric: [
          { criterion: 'Yazım yanlışını ve noktalama işaretlerini doğru yazma', points: 15 },
          { criterion: 'Yalnızca bir bölümü doğru yapma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 4
      }
    ]
  },

  // ==================== SENARYO 6 ====================
  // Senaryo 6 - Sınav 1
  {
    id: 'g6-s6-e1',
    gradeLevel: 6,
    scenarioGroup: 'senaryo-6',
    scenarioGroupTitle: 'MEB Senaryo 6',
    scenarioName: '1. Sınav (Safranbolu Evlerinin Zarafeti)',
    examNumber: 1,
    title: 'Safranbolu Evlerinin Zarafeti',
    theme: '6. Tema: Mimari Miras & Ahşap Sanatı',
    targetClass: '6. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Safranbolu Evlerinin Zarafeti',
      author: 'Türkçe Ülküsü Yayınları (Özgün Kültür Metni)',
      source: '6. Sınıf Türkçe Dersi - Kültürel Mirasımız',
      content: `UNESCO Dünya Miras Listesi’nde yer alan tarihi Safranbolu evleri, Türk sivil mimarisinin en zarif örnekleridir. Bu evler inşa edilirken hiçbir ev, diğerinin güneşini ve manzarasını kapatmayacak şekilde kademeli olarak yamaca yerleştirilmiştir. Bu incelik, komşuluk hakkına ve doğaya duyulan derin saygının mimariye yansımış hâlidir.

Ahşap çatkılı, beyaz kireç badanalı ve taş temelli bu konaklar; geniş sofaları, ahşap tavan işlemeleri ve cumbalarıyla göz doldurur. Pencerelerin önündeki ahşap kafesler hem mahremiyeti sağlar hem de içeriye yumuşak bir ışık doldurur. Yüzyıllardır dimdik ayakta duran bu evler, geçmişin zarafetini günümüze taşıyan canlı birer kültür hazinesidir.`
    },
    questions: [
      {
        id: 'g6-s6-e1-q1',
        number: 1,
        outcomeCode: 'T.O.6.5',
        title: 'Kelime Anlamı Tahmini ve İpucu',
        points: 15,
        prompt: 'Metinde geçen "cumba" kelimesinin anlamını metnin bağlamından ve ön bilginizden hareketle tahmin ediniz.',
        expectedAnswer: 'Tahminim: Eski Türk evlerinde zemin katın üzerindeki odalardan sokağa doğru taşan kafesli veya pencereli ahşap çıkma, çıkıntı.',
        rubric: [
          { criterion: 'Cumba teriminin anlamını doğru tahmin etme', points: 15 },
          { criterion: 'Yalnızca pencere veya balkon deme', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g6-s6-e1-q2',
        number: 2,
        outcomeCode: 'T.O.6.6',
        title: 'Metnin Yüzey Anlamı (Metnin Konusu)',
        points: 15,
        prompt: 'Okuduğunuz metnin konusunu (yüzey anlamını) belirleyerek bir cümleyle yazınız.',
        expectedAnswer: 'Metnin konusu; UNESCO Dünya Miras Listesi\'ndeki tarihi Safranbolu evlerinin mimari zarafeti ve komşuluk hakkını gözeten yerleşim düzenidir.',
        rubric: [
          { criterion: 'Metnin konusunu eksiksiz ve doğru biçimde tek cümleyle belirleme', points: 15 },
          { criterion: 'Konuyu kısmen ifade etme veya eksik bırakma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g6-s6-e1-q3',
        number: 3,
        outcomeCode: 'T.O.6.6',
        title: 'Metnin Yüzey Anlamı (Pencere Kafesleri)',
        points: 10,
        prompt: 'Pencerelerdeki ahşap kafeslerin sağladığı iki fayda nedir?',
        expectedAnswer: '1. Mahremiyeti sağlaması.\n2. İçeriye yumuşak ve dinlendirici bir ışık doldurması.',
        rubric: [
          { criterion: 'İki faydayı da eksiksiz yazma', points: 10 },
          { criterion: 'Tek faydayı yazma', points: 5 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g6-s6-e1-q4',
        number: 4,
        outcomeCode: 'T.O.6.16',
        title: 'Anahtar Kelime Çözümleme',
        points: 15,
        prompt: 'Metnin konusunu ve temel fikrini yansıtan iki anahtar kelime yazınız ve metinle ilişkisini açıklayınız.',
        expectedAnswer: '1. Safranbolu evleri (Metinde anlatılan eşsiz mimari mirasın ana konusudur.)\n2. Komşuluk hakkı (Evlerin birbirinin ışığını kesmemesindeki ahlaki değerdir.)',
        rubric: [
          { criterion: 'İki anahtar kelimeyi ve ilişkilerini doğru yazma', points: 15 },
          { criterion: 'Yalnızca kelimeleri yazma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 4
      },
      {
        id: 'g6-s6-e1-q5',
        number: 5,
        outcomeCode: 'T.O.6.21',
        title: 'Söz Varlığı Geliştirme (Söz Öbeği Anlamı ve İşlevi)',
        points: 15,
        prompt: 'Metinde geçen "canlı birer kültür hazinesi" söz öbeğinin Safranbolu evleriyle ilişkisini ve metne kattığı anlamı açıklayınız.',
        expectedAnswer: 'Tarihi evlerin geçmişten bugüne taşınan paha biçilmez mimari birikimi, yaşam kültürünü ve estetik mirası günümüzde hâlâ yaşatan çok kıymetli değerler olduğunu ifade eder.',
        rubric: [
          { criterion: 'Söz öbeğinin kültürel miras ve değer aktarımı anlamını tam açıklama', points: 15 },
          { criterion: 'Kısmi açıklama', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g6-s6-e1-q6',
        number: 6,
        outcomeCode: 'T.Y.6.18',
        title: 'Söz Varlığını Zenginleştirerek Paragraf Yazma',
        points: 15,
        prompt: 'Tarihi evleri ve kültürel yapıları korumanın geleceğimiz için neden önemli olduğunu anlatan 4-5 cümlelik bir bilgilendirici paragraf yazınız. Paragrafınızda "kültürel miras" ve "vefa" kelimelerini kullanınız.',
        expectedAnswer: 'Tarihi konaklar ve yapılar, bir milletin geçmişte nasıl yaşadığını gösteren en somut kültürel miras örnekleridir. Bu yapılara sahip çıkmak, bize bu güzellikleri bırakan atalarımıza karşı borçlu olduğumuz bir vefa göstergesidir. Beton binaların arasında sıkışıp kalmak yerine tarihi dokuyu korumalı ve restore etmeliyiz. Geçmişini koruyamayan toplumlar, geleceğe sağlam adımlarla yürüyemezler.',
        rubric: [
          { criterion: 'Belirtilen kavramları kullanarak 4-5 cümlelik akıcı paragraf yazma', points: 15 },
          { criterion: 'Kelimelerden birini eksik kullanma veya cümle sayısı azlığı', points: 8 },
          { criterion: 'Konu dışı yazı', points: 0 }
        ],
        linesNeeded: 5
      },
      {
        id: 'g6-s6-e1-q7',
        number: 7,
        outcomeCode: 'T.Y.6.21',
        title: 'Yazım Kuralları ve Noktalama',
        points: 15,
        prompt: `a) "Safranbolu'da ki konaklar da restorasyon gördü mü turizm canlanır." cümlesindeki yazım yanlışlarını bulunuz.
b) "Safranbolu evleri taştan (1) ahşaptan (2) kerpiçten yapılmıştır." cümlesindeki boşluklara hangi noktalama işareti gelmelidir?`,
        expectedAnswer: 'a) "Safranbolu\'da ki" -> "Safranbolu\'daki" (-ki eki bitişik yazılır).\nb) (1) Virgül (,), (2) Virgül (,) [Eş görevli sözcükleri ayırma].',
        rubric: [
          { criterion: 'Yazım yanlışını ve noktalama işaretlerini doğru yazma', points: 15 },
          { criterion: 'Yalnızca bir bölümü doğru yapma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 4
      }
    ]
  },

  // Senaryo 6 - Sınav 2
  {
    id: 'g6-s6-e2',
    gradeLevel: 6,
    scenarioGroup: 'senaryo-6',
    scenarioGroupTitle: 'MEB Senaryo 6',
    scenarioName: '2. Sınav (Kuş Evlerinin Şefkati)',
    examNumber: 2,
    title: 'Kuş Evlerinin Şefkati',
    theme: '6. Tema: Millî Kültür & Merhamet Mimarisi',
    targetClass: '6. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Kuş Evlerinin Şefkati',
      author: 'Türkçe Ülküsü Yayınları (Özgün Kültür Metni)',
      source: '6. Sınıf Türkçe Dersi - Osmanlı Mimarisi ve Merhamet',
      content: `Osmanlı döneminde camilerin, medreselerin, köprülerin ve kütüphanelerin rüzgâr almayan güneşli cephelerine minik ahşap ya da taş köşkler yapılırdı. Bu zarif yapılara "kuş sarayı" veya "kuş evi" denirdi. Bu küçük evler; serçelerin, güvercinlerin ve kırlangıçların kışın dondurucu ayazından, yazın ise kavurucu sıcağından korunmasını sağlardı.

Kuş evleri rastgele yerlere kondurulmazdı. Kedilerin ve yırtıcı hayvanların ulaşamayacağı yüksekliklere, yağmur sularının girmeyeceği saçak altlarına özenle oyulurdu. Minik minareleri, pencereleri ve kubbeleriyle adeta asıl yapının minyatür bir kopyası gibiydiler. Bu mimari gelenek, ecdadımızın yalnızca insanlara değil, doğadaki en savunmasız canlılara dahi şefkat ve merhametle yaklaştığının taşa kazınmış belgesidir.`
    },
    questions: [
      {
        id: 'g6-s6-e2-q1',
        number: 1,
        outcomeCode: 'T.O.6.5',
        title: 'Kelime Anlamı Tahmini ve İpucu',
        points: 15,
        prompt: 'Metinde geçen "şefkat" kelimesinin anlamını metnin bağlamından hareketle tahmin ediniz ve tahmini yapmanızı sağlayan metin içi davranışları yazınız.',
        expectedAnswer: 'Tahminim: Savunmasız canlılara sevgiyle yaklaşma, onları koruma ve esirgeme duygusu.\nMetindeki Davranış İpucu: Kuşlar kışın soğuktan ve kedilerden zarar görmesin diye binaların saçaklarına özel minik köşkler yapılması.',
        rubric: [
          { criterion: 'Tahmini ve metin içi ipucunu doğru açıklama', points: 15 },
          { criterion: 'Yalnızca tahmini yazma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g6-s6-e2-q2',
        number: 2,
        outcomeCode: 'T.O.6.6',
        title: 'Metnin Yüzey Anlamı (Metnin Konusu)',
        points: 15,
        prompt: 'Okuduğunuz metnin konusunu (yüzey anlamını) belirleyerek bir cümleyle yazınız.',
        expectedAnswer: 'Metnin konusu; Osmanlı mimarisinde binalara yapılan kuş evleri ve ecdadımızın hayvanlara gösterdiği şefkat ve merhamettir.',
        rubric: [
          { criterion: 'Metnin konusunu eksiksiz ve doğru biçimde tek cümleyle belirleme', points: 15 },
          { criterion: 'Konuyu kısmen ifade etme veya eksik bırakma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g6-s6-e2-q3',
        number: 3,
        outcomeCode: 'T.O.6.6',
        title: 'Metnin Yüzey Anlamı (Mimarisi)',
        points: 10,
        prompt: 'Kuş evlerinin görünüşü neye benzetilmiştir? Metinden bularak yazınız.',
        expectedAnswer: 'Minik minareleri, pencereleri ve kubbeleriyle asıl yapının minyatür bir kopyasına (minik bir köşke/saraya) benzetilmiştir.',
        rubric: [
          { criterion: 'Minyatür köşk/saray benzetmesini doğru yazma', points: 10 },
          { criterion: 'Kısmi yazma', points: 5 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 2
      },
      {
        id: 'g6-s6-e2-q4',
        number: 4,
        outcomeCode: 'T.O.6.16',
        title: 'Anahtar Kelime Çözümleme',
        points: 15,
        prompt: 'Metnin konusunu ve temel iletisini yansıtan iki anahtar kelime yazınız ve metinle ilişkisini açıklayınız.',
        expectedAnswer: '1. Kuş evleri / Kuş sarayı (Metindeki tarihi mimari zarafetin ana unsurudur.)\n2. Şefkat ve merhamet (Ecdadın hayvanlara duyduğu derin koruma ahlakıdır.)',
        rubric: [
          { criterion: 'İki anahtar kelimeyi ve ilişkilerini doğru yazma', points: 15 },
          { criterion: 'Yalnızca kelimeleri yazma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 4
      },
      {
        id: 'g6-s6-e2-q5',
        number: 5,
        outcomeCode: 'T.O.6.21',
        title: 'Söz Varlığı Geliştirme (Söz Öbeği Çözümleme)',
        points: 15,
        prompt: 'Metinde geçen "şefkat ve merhametle yaklaştığının taşa kazınmış belgesi" söz öbeğinin metne kattığı anlamı açıklayınız.',
        expectedAnswer: 'Osmanlı mimarisindeki kuş evlerinin, geçmiş nesillerin canlılara duyduğu sevgi, şefkat ve koruma ahlakını asırlar sonrasına unutturmadan taşıyan kalıcı ve somut bir kanıtı olduğunu ifade eder.',
        rubric: [
          { criterion: 'Söz öbeğinin kalıcı kanıt ve merhamet mirası anlamını eksiksiz açıklama', points: 15 },
          { criterion: 'Kısmi açıklama', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g6-s6-e2-q6',
        number: 6,
        outcomeCode: 'T.Y.6.18',
        title: 'Söz Varlığını Zenginleştirerek Paragraf Yazma',
        points: 15,
        prompt: 'Hayvanlara merhamet göstermenin insan kişiliğine katkılarını anlatan 4-5 cümlelik bilgilendirici bir paragraf yazınız.',
        expectedAnswer: 'Savunmasız bir hayvana şefkat göstermek, kalbimizdeki bencillik duygusunu yok eder. Kuşlara yem vermek veya sokak hayvanlarına su bırakmak, bizi daha duyarlı ve vicdanlı bireyler yapar. Kendi ihtiyaçlarımızdan önce başka canları düşünebilmek en büyük insanlık erdemidir. Hayvanları seven ve koruyan insanlar toplumda da güvenilir, merhametli ve saygın dostlar olurlar.',
        rubric: [
          { criterion: 'Merhamet ve kişilik ilişkisini 4-5 cümlelik akıcı bir paragrafla açıklama', points: 15 },
          { criterion: 'Cümle sayısı eksik veya düşünce zayıf', points: 8 },
          { criterion: 'Konu dışı yazı', points: 0 }
        ],
        linesNeeded: 5
      },
      {
        id: 'g6-s6-e2-q7',
        number: 7,
        outcomeCode: 'T.Y.6.21',
        title: 'Yazım Kuralları ve Noktalama',
        points: 15,
        prompt: `a) "Kuş sarayları da camilerin duvarında ki yerini aldı." cümlesindeki yazım yanlışını düzeltiniz.
b) "Kuş sarayları serçeleri (1) kırlangıçları (2) güvercinleri korurdu." cümlesindeki boşluklara hangi noktalama işareti gelmelidir?`,
        expectedAnswer: 'a) "duvarında ki" bitişik yazılmalıdır -> "duvarındaki" (Sıfat yapan -ki ekidir).\nb) (1) Virgül (,), (2) Virgül (,) [Eş görevli kelimeleri ayırma].',
        rubric: [
          { criterion: 'Yazım yanlışını ve noktalama işaretlerini doğru yazma', points: 15 },
          { criterion: 'Yalnızca bir bölümü doğru yapma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 4
      }
    ]
  }
];
