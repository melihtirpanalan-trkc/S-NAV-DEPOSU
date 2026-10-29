import { ExamScenario } from '../../types/exam';

export const SCENARIO_2_EXAMS: ExamScenario[] = [
  {
    id: 's2-e1',
    scenarioGroup: 'senaryo-2',
    scenarioGroupTitle: 'MEB Senaryo 2',
    scenarioName: '1. Sınav (Yazının ve Kâğıdın Serüveni)',
    examNumber: 1,
    title: 'Yazının ve Kâğıdın Serüveni',
    theme: '2. Tema: Bilim ve Kültür Tarihi',
    targetClass: '7. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Yazının ve Kâğıdın Serüveni',
      author: 'Türkçe Ülküsü Yayınları (Bilgilendirici Metin)',
      source: '7. Sınıf Türkçe Dersi - Bilim ve Teknoloji',
      content: `İnsanoğlu binlerce yıl boyunca duygu, düşünce ve birikimlerini gelecek nesillere aktarmak için farklı araçlar aradı. İlk olarak Sümerler kil tabletler üzerine çivi yazısıyla kayıtlar tuttu. Ancak kil tabletlerin ağır olması, taşınmasını ve saklanmasını güçleştiriyordu. Bu sorunu çözmek amacıyla Eski Mısırlılar Nil Nehri kıyısında yetişen papirüs bitkisinden hafif yapraklar ürettiler. Ne var ki papirüs çabuk kırılıyor, neme dayanamıyordu. Bergama krallığı ise koyun ve keçi derisini işleyerek parşömeni icat etti. Parşömen son derece dayanıklıydı fakat üretimi çok pahalı ve zahmetliydi.

Uygarlık tarihinin en büyük dönüm noktası ise M.S. 105 yılında Çin’de Ts’ai Lun’un dut ağacı kabukları, kenevir ve bez parçalarını suda kaynatıp lif haline getirerek ilk modern kâğıdı üretmesiyle yaşandı. Kâğıt; hem hafif, hem katlanabilir hem de maliyeti son derece düşüktü. 8. yüzyılda Semerkant üzerinden İslam dünyasına geçen kâğıt üretimi, burada kurulan su değirmenleriyle hızla sanayileşti. Kütüphaneler binlerce cilt el yazması eserle dolup taştı. Kâğıdın yaygınlaşması, bilginin yalnızca sarayların değil, halkın da erişebileceği ortak bir hazineye dönüşmesini sağladı.`
    },
    questions: [
      {
        id: 's2-e1-q1',
        number: 1,
        outcomeCode: 'T.O.7.5',
        title: 'Metnin Yüzey Anlamı (Metnin Konusu)',
        points: 15,
        linesNeeded: 3,
        prompt: 'Okuduğunuz metnin konusunu (yüzey anlamını) belirleyerek bir cümleyle yazınız.',
        expectedAnswer: 'Metnin konusu; yazının ve bilginin kaydedilmesinde kil tabletlerden parşömene ve kâğıda uzanan tarihi serüvendir.',
        rubric: [
          { criterion: 'Metnin konusunu eksiksiz ve tek cümleyle belirleme', points: 15 },
          { criterion: 'Konuyu kısmen ifade etme', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ]
      },
      {
        id: 's2-e1-q2',
        number: 2,
        outcomeCode: 'T.O.7.7',
        title: 'Metnin Derin Anlamı (Metnin Ana Fikri / İletisi)',
        points: 15,
        linesNeeded: 5,
        prompt: 'Yazarın bu metinde okuyucuya aktarmak istediği derin anlamı (metnin ana fikrini) belirleyerek açıklayınız.',
        expectedAnswer: 'Metnin ana fikri; bilginin ucuz ve taşınabilir araçlarla (kâğıt gibi) kaydedilip yaygınlaşmasının insanlığın aydınlanması ve uygarlığın gelişmesindeki en belirleyici güç olmasıdır.',
        rubric: [
          { criterion: 'Metnin ana fikrini ve derin iletisini eksiksiz ifade etme', points: 15 },
          { criterion: 'Kısmi veya yüzeysel ifade etme', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ]
      },
      {
        id: 's2-e1-q3',
        number: 3,
        outcomeCode: 'T.O.7.14',
        title: 'Bilgilendirici Metin Yapılarını Çözümleme',
        points: 20,
        linesNeeded: 6,
        prompt: 'Okuduğunuz metinde kullanılan metin yapılarından (karşılaştırma ve problem-çözüm) ikişer somut örneği metinden bularak yazınız.',
        subQuestions: [
          {
            label: 'a. Karşılaştırma Yapısı',
            text: 'Metinde farklı yazı araçları arasında yapılan bir karşılaştırmayı yazınız:',
            expectedAnswer: 'Örnek: "Parşömen son derece dayanıklıydı fakat üretimi çok pahalı ve zahmetliydi." veya kâğıdın papirüs ve parşömene göre daha hafif, katlanabilir ve düşük maliyetli olması karşılaştırması.',
            points: 10,
            guideline: 'Karşılaştırma ögelerinin tespiti (10 Puan).'
          },
          {
            label: 'b. Problem - Çözüm Yapısı',
            text: 'Metinde yer alan bir problem ve bu probleme bulunan çözümü belirtiniz:',
            expectedAnswer: 'Problem: Kil tabletlerin taşınamayacak kadar ağır olması.\nÇözüm: Eski Mısırlıların Nil kıyısındaki papirüs bitkisinden hafif yapraklar üreterek hafif bir yazı aracı geliştirmesi.',
            points: 10,
            guideline: 'Problem ve çözümün eşleştirilmesi (10 Puan).'
          }
        ],
        expectedAnswer: 'Metindeki karşılaştırma ve problem-çözüm yapılarının eksiksiz tespiti.',
        rubric: [
          { criterion: 'Metindeki karşılaştırma yapısının doğru tespiti', points: 10 },
          { criterion: 'Problem ve çözüm ilişkisinin metne uygun yazılması', points: 10 }
        ]
      },
      {
        id: 's2-e1-q4',
        number: 4,
        outcomeCode: 'T.O.7.15',
        title: 'Bilgilendirici Metinde Anahtar Kelimeleri Belirleme',
        points: 15,
        linesNeeded: 5,
        prompt: 'Okuduğunuz metnin içeriğini ve ana düşüncesini en iyi yansıtan 3 adet anahtar kelime belirleyiniz. Bu kelimeleri neden seçtiğinizi metnin ana fikriyle ilişkilendirerek açıklayınız.',
        expectedAnswer: '• Anahtar Kelimeler: Yazı, Kâğıt, Bilgi (veya Medeniyet/Kültür)\n• Gerekçe: Metin, insanoğlunun bilgiyi saklamak ve yaymak için yazı araçları geliştirmesini ve kâğıdın icadıyla bilginin medeniyetin ortak hazinesi hâline gelmesini anlattığı için bu kelimeler metnin omurgasını oluşturur.',
        rubric: [
          { criterion: 'Metni temsil eden 3 isabetli anahtar kelimenin seçimi', points: 7 },
          { criterion: 'Anahtar kelimelerin metnin ana fikriyle mantıklı şekilde ilişkilendirilmesi', points: 8 }
        ]
      },
      {
        id: 's2-e1-q5',
        number: 5,
        outcomeCode: 'T.Y.7.3',
        title: 'İçerik ve Yapıya Yönelik Seçimleri Yönetme (Yazma)',
        points: 20,
        linesNeeded: 8,
        prompt: '"Teknolojik gelişmeler, bilginin üretimini ve paylaşımını hızlandırsa da kitap okuma alışkanlığının yerini hiçbir dijital araç tutamaz." görüşünü destekleyen, düşünceyi geliştirme yollarından (örneklendirme ve tanık gösterme) yararlanarak bir paragraf yazınız.',
        expectedAnswer: 'Örnek Metin: Dijital çağda bilgiye ulaşmak bir tık uzağımızda olsa da derinlemesine düşünme ve hayal gücünü besleme konusunda kitaplar eşsiz bir yere sahiptir. İnternet ekranlarında gezinmek insan zihnini aceleciliğe iterken bir kitabı eline alıp kokusunu duyarak okumak insanı dinginleştirir. Nitekim ünlü yazar Cemil Meriç, "Kitap bir limandı benim için, kitaplarda yaşadım ve kitaplardaki insanları sokaktakilerden daha çok sevdim." diyerek kitabın insan ruhuna sunduğu sığınağı çok güzel özetlemiştir.',
        rubric: [
          { criterion: 'Düşünceyi geliştirme yollarının (örneklendirme ve tanık gösterme) kullanımı', points: 10 },
          { criterion: 'Anlatım akışı, içerik zenginliği ve yapısal tutarlılık', points: 10 }
        ]
      },
      {
        id: 's2-e1-q6',
        number: 6,
        outcomeCode: 'T.Y.7.21',
        title: 'Noktalama İşaretleri (Üç Nokta ve Noktalı Virgül) Uygulaması',
        points: 15,
        linesNeeded: 6,
        prompt: 'Aşağıda verilen noktalama görevlerini yönergelere uygun olarak cevaplayınız.',
        subQuestions: [
          {
            label: 'a. Üç Nokta (...) ve Kullanım Amaçları',
            text: 'Aşağıdaki cümlelerde geçen üç noktanın (...) kullanım gerekçelerini altlarındaki boşluklara yazınız:\n1. "Eski kütüphanelerde saklanan deri ciltler, sararmış parşömenler, mürekkep kokulu odalar..."\n   Kullanım Gerekçesi: ........................................................................\n2. "— Ts\'ai Lun\'un hazırladığı kâğıt hamuru fırına verildi mi?\n   — Verildi usta..."\n   Kullanım Gerekçesi: ........................................................................',
            expectedAnswer: '1. Cümle: Yüklemi bulunmayan, anlatımı tamamlanmamış eksiltili cümlenin sonuna konmuştur.\n2. Cümle: Karşılıklı konuşmalarda yeterli olmayan, eksik bırakılan cevaplarda kullanılır.',
            points: 7,
            guideline: '1. gerekçe (4 Puan), 2. gerekçe (3 Puan).'
          },
          {
            label: 'b. Noktalı Virgül (;) ve Noktalama Uygulaması',
            text: 'Aşağıdaki cümlede yay ayraçla ( ) belirtilen yerlere uygun noktalama işaretlerini koyunuz ve noktalı virgülün (;) bu cümledeki görevini açıklayınız:\n"Sümerler kil tabletleri, Mısırlılar papirüsleri kullandı ( ) Çinliler ise ağaç liflerinden hafif ve ucuz kâğıt üretti ( )"\n• Noktalı virgülün (;) kullanım görevi: .....................................................................',
            expectedAnswer: '• Yay ayraçlara sırasıyla: ( ; ) ve ( . ) getirilmelidir.\n• Kullanım Görevi: Ögeleri arasında virgül bulunan sıralı cümleleri birbirinden ayırmak için noktalı virgül (;) konur.',
            points: 8,
            guideline: 'İşaretlerin yerleşimi (3 Puan), kural açıklaması (5 Puan).'
          }
        ],
        expectedAnswer: 'Üç noktanın eksiltili cümle ve konuşma kuralları ile noktalı virgülün sıralı cümleleri ayırma görevinin izahı.',
        rubric: [
          { criterion: 'Üç noktanın iki ayrı kuralının doğru belirlenmesi', points: 7 },
          { criterion: 'Noktalı virgülün kurala uygun tespiti ve gerekçelendirilmesi', points: 8 }
        ]
      }
    ]
  },
  {
    id: 's2-e2',
    scenarioGroup: 'senaryo-2',
    scenarioGroupTitle: 'MEB Senaryo 2',
    scenarioName: '2. Sınav (Mavi Gezegenin Akciğerleri)',
    examNumber: 2,
    title: 'Mavi Gezegenin Akciğerleri: Deniz Çayırları',
    theme: '2. Tema: Doğa ve Ekoloji',
    targetClass: '7. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Mavi Gezegenin Akciğerleri: Deniz Çayırları',
      author: 'Türkçe Ülküsü Yayınları (Bilgilendirici Metin)',
      source: '7. Sınıf Türkçe Dersi - Çevre ve Biyoçeşitlilik',
      content: `Pek çoğumuz Dünya\'nın en büyük oksijen kaynağının ve karbon yutaklarının Amazon yağmur ormanları olduğunu düşünürüz. Oysa denizlerin ve okyanusların sığ kıyılarında sessizce dalgalanan deniz çayırları, karadaki yağmur ormanlarından tam otuz beş kat daha hızlı karbon depolama kapasitesine sahiptir. Deniz çayırları sıradan deniz yosunları değildir; kökleri, gövdeleri ve hatta çiçekleri olan gerçek çiçekli bitkilerdir.

Bu su altı çayırları yalnızca oksijen üretmekle kalmaz; deniz kıyılarındaki kumulları kökleriyle bir ağ gibi sararak kıyı erozyonunu önler. Dalgaların gücünü kırarak fırtınalarda sahil kasabalarını korur. Ayrıca yüzlerce balık, deniz kaplumbağası ve kabuklu deniz canlısı için güvenli bir üreme ve beslenme yuvasıdır. Ne var ki bilinçsiz kıyı yapılaşması, evsel atıkların denizlere deşarj edilmesi ve kontrolsüz trol balıkçılığı bu narin çayırları yok olma tehlikesiyle karşı karşıya bırakmaktadır. Bu ekosistem yok olduğunda deniz suyu bulanıklaşmakta, oksijen seviyesi düşmekte ve balık popülasyonu hızla tükenmektedir.`
    },
    questions: [
      {
        id: 's2-e2-q1',
        number: 1,
        outcomeCode: 'T.O.7.5',
        title: 'Metnin Yüzey Anlamı (Metnin Konusu)',
        points: 15,
        linesNeeded: 3,
        prompt: 'Okuduğunuz metnin konusunu (yüzey anlamını) belirleyerek bir cümleyle yazınız.',
        expectedAnswer: 'Metnin konusu; deniz çayırlarının ekolojik önemi, karbon depolama kapasitesi ve kıyı ekosistemini korumadaki hayati rolüdür.',
        rubric: [
          { criterion: 'Metnin konusunu eksiksiz ve tek cümleyle belirleme', points: 15 },
          { criterion: 'Konuyu kısmen ifade etme', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ]
      },
      {
        id: 's2-e2-q2',
        number: 2,
        outcomeCode: 'T.O.7.7',
        title: 'Metnin Derin Anlamı (Metnin Ana Fikri / İletisi)',
        points: 15,
        linesNeeded: 5,
        prompt: 'Yazarın bu metinde deniz çayırları üzerinden okuyucuya aktarmak istediği derin anlamı (metnin ana fikrini) açıklayınız.',
        expectedAnswer: 'Metnin ana fikri; doğadaki en mütevazı canlıların bile gezegenimizin dengesi için vazgeçilmez olduğu ve denizleri korumamanın bedelini doğrudan insanoğlunun ödeyeceğidir.',
        rubric: [
          { criterion: 'Metnin ana fikrini ve derin iletisini eksiksiz ifade etme', points: 15 },
          { criterion: 'Kısmi veya yüzeysel ifade etme', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ]
      },
      {
        id: 's2-e2-q3',
        number: 3,
        outcomeCode: 'T.O.7.14',
        title: 'Bilgilendirici Metin Yapılarını Çözümleme',
        points: 20,
        linesNeeded: 6,
        prompt: 'Metinde yer alan "karşılaştırma" ve "sebep-sonuç" metin yapılarını metinden örneklerle gösteriniz.',
        subQuestions: [
          {
            label: 'a. Karşılaştırma Yapısı',
            text: 'Metinde yapılan temel karşılaştırmayı yazınız:',
            expectedAnswer: 'Deniz çayırlarının karbon depolama kapasitesi karadaki Amazon yağmur ormanları ile karşılaştırılmış ve deniz çayırlarının yağmur ormanlarından 35 kat daha hızlı karbon depoladığı belirtilmiştir.',
            points: 10,
            guideline: 'Karşılaştırmanın tespiti (10 Puan).'
          },
          {
            label: 'b. Sebep - Sonuç Yapısı',
            text: 'Metinde yer alan bir sebep-sonuç ilişkisini yazınız:',
            expectedAnswer: 'Sebep: Kıyı yapılaşması, evsel atıklar ve bilinçsiz trol balıkçılığı.\nSonuç: Deniz çayırlarının yok olması, deniz suyunun bulanıklaşması ve balık türlerinin tükenmesi.',
            points: 10,
            guideline: 'Sebep ve sonucun eşleşmesi (10 Puan).'
          }
        ],
        expectedAnswer: 'Karşılaştırma ve sebep-sonuç bağıntılarının tespiti.',
        rubric: [
          { criterion: 'Karşılaştırma yapısının doğru tespiti', points: 10 },
          { criterion: 'Sebep-sonuç ilişkisinin doğru aktarımı', points: 10 }
        ]
      },
      {
        id: 's2-e2-q4',
        number: 4,
        outcomeCode: 'T.O.7.15',
        title: 'Bilgilendirici Metinde Anahtar Kelimeleri Belirleme',
        points: 15,
        linesNeeded: 5,
        prompt: 'Metnin ana fikrini yansıtan 3 anahtar kelime belirleyiniz ve bu kelimelerin metindeki kritik rolünü bir cümleyle açıklayınız.',
        expectedAnswer: '• Anahtar Kelimeler: Deniz Çayırları, Karbon Depolama (veya Oksijen), Ekosistem (veya Biyoçeşitlilik)\n• Açıklama: Metin, deniz çayırlarının gezegenimizin oksijen dengesi ve deniz ekosisteminin devamlılığı için taşıdığı hayati önemi anlattığı için bu kavramlar temel anahtarlardır.',
        rubric: [
          { criterion: 'İsabetli 3 anahtar kelimenin seçilmesi', points: 7 },
          { criterion: 'Anahtar kelimelerin metnin ana mesajıyla tutarlı izahı', points: 8 }
        ]
      },
      {
        id: 's2-e2-q5',
        number: 5,
        outcomeCode: 'T.Y.7.3',
        title: 'İçerik ve Yapıya Yönelik Seçimleri Yönetme (Yazma)',
        points: 20,
        linesNeeded: 8,
        prompt: '"Denizleri temiz tutmak, yeryüzündeki tüm canlıların ortak yaşam hakkına saygı duymaktır." konusunu işleyen, düşünceyi geliştirme yollarından (sayısal verilerden yararlanma ve karşılaştırma) faydalanarak kısa bir bilgilendirici metin yazınız.',
        expectedAnswer: 'Örnek Metin: Dünyamızın yüzde yetmişini kaplayan denizler, yaşamımızın görünmeyen soluk borusudur. Her yıl tonlarca plastik ve atık sular denizlere karışmakta, deniz canlılarının yaşam alanları daralmaktadır. Karadaki bir ağaç yılda yaklaşık yirmi iki kilogram karbondioksit tutarken, denizlerdeki mercan ve çayırlar bu miktarın katbekat fazlasını emmektedir. Denizleri kirletmek kendi yaşam kaynağımızı kurutmaktır; bu yüzden denizlerimizi korumak insanlığın en büyük vicdani sorumluluğudur.',
        rubric: [
          { criterion: 'Düşünceyi geliştirme yollarının amaca uygun kullanımı', points: 10 },
          { criterion: 'İçerik planlaması ve akıcı anlatım', points: 10 }
        ]
      },
      {
        id: 's2-e2-q6',
        number: 6,
        outcomeCode: 'T.Y.7.21',
        title: 'Noktalama İşaretleri (Üç Nokta ve Noktalı Virgül) Uygulaması',
        points: 15,
        linesNeeded: 6,
        prompt: 'Aşağıda verilen noktalama kuralları doğrultusunda soruları cevaplayınız.',
        subQuestions: [
          {
            label: 'a. Üç Nokta (...) ve Kullanım Alanları',
            text: 'Aşağıdaki cümlelerde geçen üç noktanın (...) kullanılma sebeplerini altlarındaki boşluklara yazınız:\n1. "Sığ sularda salınan yeşil yapraklar, aralarında süzülen küçük mercanlar, renkli denizyıldızları..."\n   Kullanım Sebebi: ........................................................................\n2. "Hey kaptan!.. Ağlarını o sığ çayırlıklara bırakma sakın!"\n   Kullanım Sebebi: ........................................................................',
            expectedAnswer: '1. Cümle: Yüklemi söylenmemiş, anlatımı tamamlanmamış cümlenin sonuna konur.\n2. Cümle: Seslenmelerde ve ünlemlerde anlatımı pekiştirmek için kullanılmıştır.',
            points: 7,
            guideline: '1. kural (4 Puan), 2. kural (3 Puan).'
          },
          {
            label: 'b. Noktalı Virgül (;) ve Noktalama Uygulaması',
            text: 'Aşağıdaki cümlede yay ayraçla ( ) belirtilen yerlere uygun noktalama işaretlerini koyunuz ve noktalı virgülün (;) kullanım gerekçesini açıklayınız:\n"Deniz çayırları oksijen üretir, erozyonu önler ( ) trol ağları ise mercanları yıkar, çayırları söker ( )"\n• Noktalı virgülün (;) kullanım gerekçesi: .....................................................................',
            expectedAnswer: '• Yay ayraçlara sırasıyla: ( ; ) ve ( . ) getirilmelidir.\n• Noktalı Virgülün (;) Kullanım Gerekçesi: Ögeleri arasında virgül bulunan sıralı cümleleri birbirinden ayırmak için noktalı virgül konur.',
            points: 8,
            guideline: 'İşaretlerin yerleşimi (3 Puan), kural açıklaması (5 Puan).'
          }
        ],
        expectedAnswer: 'Üç nokta ve noktalı virgülün kurala uygun tespiti ve gerekçelendirilmesi.',
        rubric: [
          { criterion: 'Üç noktanın iki ayrı kuralının doğru belirlenmesi', points: 7 },
          { criterion: 'Noktalı virgülün kuralının eksiksiz açıklanması', points: 8 }
        ]
      }
    ]
  },
  {
    id: 's2-e3',
    scenarioGroup: 'senaryo-2',
    scenarioGroupTitle: 'MEB Senaryo 2',
    scenarioName: '3. Sınav (Müzik ve İnsan Beyni)',
    examNumber: 3,
    title: 'Dostluğun Sessiz Dili: Müzik ve İnsan Beyni',
    theme: '2. Tema: Sanat ve Sağlık Bilimi',
    targetClass: '7. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Dostluğun Sessiz Dili: Müzik ve İnsan Beyni',
      author: 'Türkçe Ülküsü Yayınları (Bilgilendirici Metin)',
      source: '7. Sınıf Türkçe Dersi - Sanat, Müzik ve Beyin Gelişimi',
      content: `Müzik, yalnızca estetik bir zevk veya eğlence aracı değildir; insan beyninin her iki yarım küresini aynı anda harekete geçiren en güçlü zihinsel egzersizlerden biridir. Nörobilim uzmanlarının yaptığı modern beyin görüntüleme çalışmaları, bir enstrüman çalarken beynin âdeta havai fişek gösterisi gibi parladığını ortaya koymuştur. Çünkü müzik icra ederken motor beceriler, işitsel algı ve görsel takip aynı saniyeler içinde mükemmel bir uyumla çalışır.

Tarihsel süreçte Türk tıbbı da müziğin iyileştirici gücünü yüzyıllar önce keşfetmiştir. Selçuklu ve Osmanlı darüşşifalarında akıl ve ruh hastalıkları su sesi ve özel Türk müziği makamlarıyla tedavi edilirdi. Örneğin rast makamı insana neşe ve huzur verirken, hicaz makamı tevazu ve dinginlik aşılardı. Günümüzde ise yapılan araştırmalar, düzenli müzik eğitimi alan çocukların problem çözme becerilerinin ve matematiksel zekâlarının müzikle ilgilenmeyen akranlarına kıyasla çok daha hızlı geliştiğini kanıtlamaktadır.`
    },
    questions: [
      {
        id: 's2-e3-q1',
        number: 1,
        outcomeCode: 'T.O.7.5',
        title: 'Metnin Yüzey Anlamı (Metnin Konusu)',
        points: 15,
        linesNeeded: 3,
        prompt: 'Okuduğunuz metnin konusunu (yüzey anlamını) belirleyerek bir cümleyle yazınız.',
        expectedAnswer: 'Metnin konusu; müziğin insan beyni ve ruh sağlığı üzerindeki olumlu etkileri ile tarihteki şifa kaynağı rolüdür.',
        rubric: [
          { criterion: 'Metnin konusunu eksiksiz ve tek cümleyle belirleme', points: 15 },
          { criterion: 'Konuyu kısmen ifade etme', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ]
      },
      {
        id: 's2-e3-q2',
        number: 2,
        outcomeCode: 'T.O.7.7',
        title: 'Metnin Derin Anlamı (Metnin Ana Fikri / İletisi)',
        points: 15,
        linesNeeded: 5,
        prompt: 'Yazarın bu metinde okuyucuya aktarmak istediği derin anlamı (metnin ana fikrini) belirleyerek açıklayınız.',
        expectedAnswer: 'Metnin ana fikri; müziğin sadece bir eğlence aracı değil, insan zihnini ve ruhunu besleyen, iyileştiren ve geliştiren evrensel bir şifa kaynağı olmasıdır.',
        rubric: [
          { criterion: 'Metnin ana fikrini ve derin iletisini eksiksiz ifade etme', points: 15 },
          { criterion: 'Kısmi veya yüzeysel ifade etme', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ]
      },
      {
        id: 's2-e3-q3',
        number: 3,
        outcomeCode: 'T.O.7.14',
        title: 'Bilgilendirici Metin Yapılarını Çözümleme',
        points: 20,
        linesNeeded: 6,
        prompt: 'Metinde kullanılan "örneklendirme" ve "karşılaştırma" metin yapılarını metinden alıntılarla gösteriniz.',
        subQuestions: [
          {
            label: 'a. Örneklendirme Yapısı',
            text: 'Metinde yer alan örneklendirmeyi yazınız:',
            expectedAnswer: 'Örnek: Darüşşifalarda kullanılan makamlara "rast makamı" ve "hicaz makamı" örnek olarak verilmiştir.',
            points: 10,
            guideline: 'Örneklerin tespiti (10 Puan).'
          },
          {
            label: 'b. Karşılaştırma Yapısı',
            text: 'Metinde yer alan karşılaştırmayı yazınız:',
            expectedAnswer: 'Düzenli müzik eğitimi alan çocukların problem çözme ve matematiksel zekâ gelişimi, müzikle ilgilenmeyen akranlarıyla karşılaştırılmıştır.',
            points: 10,
            guideline: 'Karşılaştırma ögelerinin tespiti (10 Puan).'
          }
        ],
        expectedAnswer: 'Örneklendirme ve karşılaştırma yapılarının doğru tespiti.',
        rubric: [
          { criterion: 'Örneklendirmenin doğru tespiti', points: 10 },
          { criterion: 'Karşılaştırmanın doğru tespiti', points: 10 }
        ]
      },
      {
        id: 's2-e3-q4',
        number: 4,
        outcomeCode: 'T.O.7.15',
        title: 'Bilgilendirici Metinde Anahtar Kelimeleri Belirleme',
        points: 15,
        linesNeeded: 5,
        prompt: 'Metnin ana fikrini destekleyen 3 anahtar kelime belirleyiniz ve bu kelimelerin metindeki ana düşünceyi nasıl yansıttığını açıklayınız.',
        expectedAnswer: '• Anahtar Kelimeler: Müzik, Beyin Gelişimi, Tedavi (veya Darüşşifa/Makam)\n• Açıklama: Metin, müziğin nörolojik olarak beyni geliştiren gücünü ve tarihten bugüne insan sağlığına sunduğu iyileştirici katkıyı ele aldığı için bu kavramlar anahtar niteliktedir.',
        rubric: [
          { criterion: '3 uygun anahtar kelimenin tespiti', points: 7 },
          { criterion: 'Ana fikirle mantıksal bağlantının kurulması', points: 8 }
        ]
      },
      {
        id: 's2-e3-q5',
        number: 5,
        outcomeCode: 'T.Y.7.3',
        title: 'İçerik ve Yapıya Yönelik Seçimleri Yönetme (Yazma)',
        points: 20,
        linesNeeded: 8,
        prompt: '"Güzel sanatlarla ilgilenmek insanı hem ruhen olgunlaştırır hem de zihnen üretken kılar." düşüncesini işleyen, giriş-gelişme-sonuç planına sahip bir düşünce yazısı yazınız.',
        expectedAnswer: 'Örnek Metin: Sanat, insanı kuru bir maddiyat dünyasından çekip alan en asil sığınaktır. Resim yapan, bir enstrümanın tellerine dokunan ya da bir şiir kaleme alan insan, duygularını inceltir ve dünyaya daha derin bir merhametle bakar. Sanatla uğraşmak aynı zamanda zihnin yaratıcı kanallarını açar, üretkenliği tetikler. Gazi Mustafa Kemal Atatürk\'ün de ifade ettiği gibi, "Sanatsız kalan bir milletin hayat damarlarından biri kopmuş demektir." Bu sebeple sanata yer açan bireyler ve toplumlar daima aydınlık kalır.',
        rubric: [
          { criterion: 'Giriş, gelişme ve sonuç dengesi', points: 10 },
          { criterion: 'Düşüncelerin tutarlılığı ve etkili ifade tarzı', points: 10 }
        ]
      },
      {
        id: 's2-e3-q6',
        number: 6,
        outcomeCode: 'T.Y.7.21',
        title: 'Noktalama İşaretleri (Üç Nokta ve Noktalı Virgül) Uygulaması',
        points: 15,
        linesNeeded: 6,
        prompt: 'Aşağıda verilen noktalama kuralları çerçevesinde soruları cevaplayınız.',
        subQuestions: [
          {
            label: 'a. Üç Nokta (...) ve Kullanım Alanları',
            text: 'Aşağıdaki cümlelerde geçen üç noktanın (...) hangi görevle kullanıldığını altlarındaki boşluklara yazınız:\n1. "Darüşşifada yankılanan ney sesi, suyun şırıltısı, havuzdaki nilüferler..."\n   Kullanım Görevi: ........................................................................\n2. "— Hangi makam hastanın içini ferahlatır hekimbaşı?\n   — Rast makamı..."\n   Kullanım Görevi: ........................................................................',
            expectedAnswer: '1. Cümle: Yüklemi bulunmayan, anlatımı tamamlanmamış (eksiltili) cümlenin sonuna konmuştur.\n2. Cümle: Karşılıklı konuşmalarda yeterli olmayan, eksik bırakılan cevaplarda kullanılır.',
            points: 7,
            guideline: '1. görev (4 Puan), 2. görev (3 Puan).'
          },
          {
            label: 'b. Noktalı Virgül (;) ve Noktalama Uygulaması',
            text: 'Aşağıdaki cümlede yay ayraçla ( ) gösterilen yerlere uygun noktalama işaretlerini koyunuz ve noktalı virgülün (;) kullanım gerekçesini açıklayınız:\n"Rast makamı neşe, huzur, canlılık verir ( ) hicaz makamı ise derinlik, dinginlik ve tevazu aşılar ( )"\n• Noktalı virgülün (;) kullanım gerekçesi: .....................................................................',
            expectedAnswer: '• Yay ayraçlara sırasıyla: ( ; ) ve ( . ) getirilmelidir.\n• Noktalı Virgülün (;) Kullanım Gerekçesi: Ögeleri arasında virgül bulunan sıralı cümleleri birbirinden ayırmak için noktalı virgül (;) kullanılmıştır.',
            points: 8,
            guideline: 'İşaretlerin yerleşimi (3 Puan), kural açıklaması (5 Puan).'
          }
        ],
        expectedAnswer: 'Üç nokta ve noktalı virgülün kurala uygun tespiti ve kullanımı.',
        rubric: [
          { criterion: 'Üç noktanın iki ayrı kuralının doğru belirlenmesi', points: 7 },
          { criterion: 'Noktalı virgülün gerekçesinin doğru açıklanması', points: 8 }
        ]
      }
    ]
  }
];
