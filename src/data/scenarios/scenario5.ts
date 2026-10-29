import { ExamScenario } from '../../types/exam';

export const SCENARIO_5_EXAMS: ExamScenario[] = [
  {
    id: 's5-e1',
    scenarioGroup: 'senaryo-5',
    scenarioGroupTitle: 'MEB Senaryo 5',
    scenarioName: '1. Sınav (Zeytin Ağacının Gölgesinde)',
    examNumber: 1,
    title: 'Zeytin Ağacının Gölgesinde',
    theme: '5. Tema: Doğa Bilinci, Emek ve Sabır',
    targetClass: '7. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Zeytin Ağacının Gölgesinde',
      author: 'Türkçe Ülküsü Yayınları (Özgün Edebi Metin)',
      source: '7. Sınıf Türkçe Dersi - Doğa Sevgisi ve Üretim',
      content: `Ege kıyılarında zeytin hasadı başladığında köyde tatlı bir telaş hüküm sürerdi. Sabahın ilk ışıklarıyla birlikte traktörler yola koyulur, zeytinliklerden yükselen türküler rüzgâra karışırdı. On dört yaşındaki Sinan, dedesi İbrahim Amca ile birlikte asırlık zeytin ağaçlarının altındaki örtüleri seriyordu. Ağaçların gövdeleri heykeltıraşın elinden çıkmış gibi kıvrım kıvrımdı; asırlara meydan okuyan gümüşi yeşil yaprakları güneş altında parıldıyordu.

Sinan elindeki sırıkla dallara hoyratça vurmaya başlayınca dedesi hemen elini tuttu:
— Dur oğul! Zeytin dalına sopayla vurulmaz, incitilmez. O dallar seneye de bize tane verecek. Zeytini tarakla usulca tarayacaksın; dalı kırmadan, incitmeden toplayacaksın, dedi.

Sinan dedesinin dediği gibi yaptı; küçük el tarağıyla dalları nazikçe taradı. Akşama doğru çuvallar dolusu parlak, etli zeytin taş değirmene götürüldü. Değirmendeki devasa granit taşlar döndükçe zeytinler ezildi; altın sarısı, mis kokulu zeytinyağı oluklardan süzüldü. Sinan taze ekmeği o ılık yağa banıp yerken doğaya saygı duymanın ve sabırla üretmenin ne kadar kutsal bir lezzet olduğunu anladı.`
    },
    questions: [
      {
        id: 's5-e1-q1',
        number: 1,
        outcomeCode: 'T.O.7.4',
        title: 'Bağlamdan Söz Varlığını Tahmin Etme ve Gerekçelendirme',
        points: 15,
        linesNeeded: 6,
        prompt: 'Metinde geçen altı çizili kelimelerin anlamlarını metnin bağlamından yararlanarak tahmin ediniz ve gerekçelerini yazınız.',
        subQuestions: [
          {
            label: 'a. hoyratça',
            text: 'Metindeki: "Sinan elindeki sırıkla dallara hoyratça vurmaya başlayınca..." cümlesindeki "hoyratça" kelimesi:\n• Anlam Tahmini: ........................................................................\n• Metin İçi Gerekçe: ....................................................................',
            expectedAnswer: '• Anlam Tahmini: Kaba, sert, kırıcı ve özensiz bir biçimde.\n• Metin İçi Gerekçe: Dedesinin hemen elini tutarak "Zeytin dalına sopayla vurulmaz, incitilmez." diye uyarması.',
            points: 7,
            guideline: 'Anlam tahmini (4 Puan), gerekçe (3 Puan).'
          },
          {
            label: 'b. granit',
            text: 'Metindeki: "Değirmendeki devasa granit taşlar döndükçe zeytinler ezildi..." cümlesindeki "granit" kelimesi:\n• Anlam Tahmini: ........................................................................\n• Metin İçi Gerekçe: ....................................................................',
            expectedAnswer: '• Anlam Tahmini: Çok sert, dayanıklı ve aşınmaya dirençli doğal bir taş türü.\n• Metin İçi Gerekçe: Değirmende zeytinleri ezmek için kullanılan devasa ve ağır değirmen taşı olması.',
            points: 8,
            guideline: 'Anlam tahmini (4 Puan), gerekçe (4 Puan).'
          }
        ],
        expectedAnswer: 'Hoyratça ve granit sözcüklerinin tahmini ve metin içi gerekçesi.',
        rubric: [
          { criterion: 'Her iki kelimenin anlamına dair isabetli tahmin', points: 8 },
          { criterion: 'Metinden delillerle gerekçelendirme', points: 7 }
        ]
      },
      {
        id: 's5-e1-q2',
        number: 2,
        outcomeCode: 'T.O.7.5',
        title: 'Metnin Yüzey Anlamı (Metnin Konusu)',
        points: 15,
        linesNeeded: 3,
        prompt: 'Okuduğunuz metnin konusunu (yüzey anlamını) belirleyerek bir cümleyle yazınız.',
        expectedAnswer: 'Metnin konusu; Ege\'de zeytin hasadı sırasında dedenin torununa zeytin toplamayı ve doğaya saygıyı öğretmesidir.',
        rubric: [
          { criterion: 'Metnin konusunu eksiksiz ve doğru biçimde tek cümleyle belirleme', points: 15 },
          { criterion: 'Konuyu kısmen ifade etme veya eksik bırakma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ]
      },
      {
        id: 's5-e1-q3',
        number: 3,
        outcomeCode: 'T.O.7.5',
        title: 'Metnin Yüzey Anlamı - Doğrudan Bilgi Tespiti',
        points: 15,
        linesNeeded: 4,
        prompt: 'İbrahim Amca’nın torununa zeytin toplama yöntemine dair verdiği öğüt nedir? Bu yöntemin gerekçesi metinde nasıl açıklanmıştır?',
        expectedAnswer: 'İbrahim Amca, zeytin dallarına sopayla sertçe vurulmamasını, el tarağıyla dalların nazikçe taranarak toplanmasını öğütlemiştir. Gerekçesi ise dalların kırılıp incitilmemesi ve o dalların bir sonraki yıl da ürün verebilmesidir.',
        rubric: [
          { criterion: 'Öğüdün (el tarağıyla nazikçe toplama) belirtilmesi', points: 8 },
          { criterion: 'Gerekçenin (gelecek yılın ürününü koruma) yazılması', points: 7 }
        ]
      },
      {
        id: 's5-e1-q4',
        number: 4,
        outcomeCode: 'T.O.7.21',
        title: 'Söz Varlığını Çözümleme - Benzetme ve Sebep-Sonuç',
        points: 20,
        linesNeeded: 6,
        prompt: 'Metinde geçen "heykeltıraşın elinden çıkmış gibi kıvrım kıvrım" benzetmesini açıklayınız. Ayrıca Sinan\'ın doğaya saygı duymayı öğrenmesiyle sonuçlanan sebep-sonuç ilişkisini metinden çıkararak yazınız.',
        expectedAnswer: '• Benzetmenin Anlamı: Asırlık zeytin ağaçlarının gövdelerinin sıradan bir odun gibi değil, bir sanatçının sabırla yonttuğu estetik ve büyüleyici bir heykel gibi kıvrımlı ve etkileyici olduğunu anlatmak için kullanılmıştır.\n• Sebep-Sonuç: Dedesinin uyarısıyla ağaçları incitmeden toplayıp zeytinlerin yağ oluşunu kendi gözleriyle görmesi (sebep), Sinan\'ın doğaya saygı duymanın ve emeğin değerini derinlemesine kavramasını (sonuç) sağlamıştır.',
        rubric: [
          { criterion: 'Benzetmenin edebi ve anlamsal tahlili', points: 10 },
          { criterion: 'Metindeki sebep-sonuç bağının doğru kurulması', points: 10 }
        ]
      },
      {
        id: 's5-e1-q5',
        number: 5,
        outcomeCode: 'T.Y.7.3',
        title: 'İçerik ve Yapıya Yönelik Seçimleri Yönetme (Yazma)',
        points: 20,
        linesNeeded: 8,
        prompt: '"Tarlada izi olmayanın harmanda yüzü olmaz." atasözünden hareketle; emeğin, alın terinin ve üretkenliğin önemini anlatan planlı bir düşünce yazısı yazınız.',
        expectedAnswer: 'Örnek Metin: Hayatta hiçbir değerli başarı kendiliğinden insanın önüne serilmez. İster toprakta bir başak yetiştirmek olsun ister bir sınavda başarı elde etmek; her şey zamanında dökülen alın teriyle mümkündür. Baharda tarlasına tohum atmayan, çapasını yapmayan bir çiftçinin sonbaharda bereketli bir hasat beklemesi hayaldir. İnsanlar hedeflerine ulaşmak istiyorlarsa önce emek vermeli, zorluklara göğüs germelidir. Çünkü emekle yoğrulmayan kazançlar kalıcı ve değerli olamaz.',
        rubric: [
          { criterion: 'Giriş, gelişme ve sonuç planının tutarlılığı', points: 10 },
          { criterion: 'Atasözünün mesajının doğru yorumlanması ve akıcı anlatım', points: 10 }
        ]
      },
      {
        id: 's5-e1-q6',
        number: 6,
        outcomeCode: 'T.Y.7.21',
        title: 'Noktalama İşaretleri (Üç Nokta ve Noktalı Virgül) Uygulaması',
        points: 15,
        linesNeeded: 6,
        prompt: 'Aşağıda verilen noktalama kuralları doğrultusunda soruları cevaplayınız.',
        subQuestions: [
          {
            label: 'a. Üç Nokta (...) ve Kullanım Amaçları',
            text: 'Aşağıdaki cümlelerde geçen üç noktanın (...) hangi görevle kullanıldığını altlarındaki boşluklara yazınız:\n1. "Zeytinlikte yankılanan türküler, traktörlerin homurtusu, dalların hışırtısı..."\n   Kullanım Görevi: ........................................................................\n2. "Hey koca ağaç!.. Bize daha kaç asır gölge vereceksin?"\n   Kullanım Görevi: ........................................................................',
            expectedAnswer: '1. Cümle: Yüklemi bulunmayan, anlatımı tamamlanmamış (eksiltili) cümlenin sonuna konmuştur.\n2. Cümle: Ünlem ve seslenmelerde anlatımı pekiştirmek için kullanılmıştır.',
            points: 7,
            guideline: '1. görev (4 Puan), 2. görev (3 Puan).'
          },
          {
            label: 'b. Noktalı Virgül (;) ve Noktalama Uygulaması',
            text: 'Aşağıdaki cümlede yay ayraçla ( ) gösterilen yerlere uygun noktalama işaretlerini koyunuz ve noktalı virgülün (;) kullanım gerekçesini açıklayınız:\n"Sinan; örtüleri, sepetleri, tahta tarakları ağacın altına serdi ( ) dedesi ise çuvalları, ipleri ve küfeleri traktöre yükledi ( )"\n• Noktalı virgülün (;) kullanım gerekçesi: .....................................................................',
            expectedAnswer: '• Yay ayraçlara sırasıyla: ( ; ) ve ( . ) getirilmelidir.\n• Noktalı Virgülün (;) Kullanım Gerekçesi: Cümle içinde virgüllerle ayrılmış tür veya takımları (hasat araçları ile taşıma araçları) birbirinden ayırmak için kullanılmıştır.',
            points: 8,
            guideline: 'İşaretler (3 Puan), kural açıklaması (5 Puan).'
          }
        ],
        expectedAnswer: 'Üç nokta ve noktalı virgülün kurallarıyla birlikte doğru tespiti.',
        rubric: [
          { criterion: 'Üç noktanın iki ayrı görevinin tespiti', points: 7 },
          { criterion: 'Noktalı virgülün tür ve takım ayırma görevinin izahı', points: 8 }
        ]
      }
    ]
  },
  {
    id: 's5-e2',
    scenarioGroup: 'senaryo-5',
    scenarioGroupTitle: 'MEB Senaryo 5',
    scenarioName: '2. Sınav (Taş Köprülerin Sessiz Şahidi)',
    examNumber: 2,
    title: 'Taş Köprülerin Sessiz Şahidi',
    theme: '5. Tema: Kültürel Miras ve Mimari Estetik',
    targetClass: '7. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Taş Köprülerin Sessiz Şahidi',
      author: 'Türkçe Ülküsü Yayınları (Özgün Edebi Metin)',
      source: '7. Sınıf Türkçe Dersi - Tarih, Mimarlık ve Medeniyet',
      content: `Meriç Nehri’nin coşkun suları üzerinden Edirne’ye bağlanan asırlık taş köprü, yüzyıllardır nice kervanların, sultanların ve seyyahların ayak seslerini dinlemişti. Köprünün kemerleri, nehrin en hırçın taşkınlarına bile göğüs geren kilit taşlarıyla örülmüştü. On üç yaşındaki Elif, mimar olan teyzesiyle birlikte köprünün seyir köşkünün mermer korkuluklarına yaslanmış, güneşin batışını izliyordu.

Elif kemerlerin altından köpürerek geçen sulara bakıp sordu:
— Teyze, yüzyıllar önce yapılmış bu köprü çimento ve demir olmadan nasıl hâlâ böyle dimdik durabiliyor?

Teyzesi gülümsedi; parmağıyla kemerin tam tepe noktasındaki kama şeklindeki taşı gösterdi:
— Bak Elif, o taşa "kilit taşı" denir. Kemerdeki bütün taşlar birbirine yaslanır ve ağırlıklarını o kilit taşına aktarır. Kilit taşı yerinde durduğu müddetçe köprü yıkılmaz. Atalarımız köprü yaparken sadece taşları değil, bir milletin birlik ve beraberlik felsefesini de harca katmışlardır. Birbirine kenetlenen fertler gibi, taşlar da omuz omuza vererek nehirlere meydan okur.`
    },
    questions: [
      {
        id: 's5-e2-q1',
        number: 1,
        outcomeCode: 'T.O.7.4',
        title: 'Bağlamdan Söz Varlığını Tahmin Etme ve Gerekçelendirme',
        points: 15,
        linesNeeded: 6,
        prompt: 'Metinde geçen altı çizili kelimelerin anlamlarını metnin bağlamından yararlanarak tahmin ediniz ve gerekçelerini yazınız.',
        subQuestions: [
          {
            label: 'a. kemer',
            text: 'Metindeki: "Köprünün kemerleri, nehrin en hırçın taşkınlarına bile göğüs geren..." cümlesindeki "kemer" kelimesi:\n• Anlam Tahmini: ........................................................................\n• Metin İçi Gerekçe: ....................................................................',
            expectedAnswer: '• Anlam Tahmini: İki sütun veya ayak arasındaki açıklığı geçmek için taşlarla örülen kavisli / yay biçimindeki mimari yapı ögesi.\n• Metin İçi Gerekçe: Suyun altından geçtiği ve kilit taşlarıyla birbirine yaslanan taş köprü ögesi olması.',
            points: 7,
            guideline: 'Anlam tahmini (4 Puan), gerekçe (3 Puan).'
          },
          {
            label: 'b. kenetlenen',
            text: 'Metindeki: "Birbirine kenetlenen fertler gibi..." cümlesindeki "kenetlenen" kelimesi:\n• Anlam Tahmini: ........................................................................\n• Metin İçi Gerekçe: ....................................................................',
            expectedAnswer: '• Anlam Tahmini: Birbirine sıkı sıkıya tutunup ayrılmaz duruma gelmek, kenetlenmek, sımsıkı bağlanmak.\n• Metin İçi Gerekçe: Taşların omuz omuza verip yıkılmadan nehirlere meydan okuması benzetmesi.',
            points: 8,
            guideline: 'Anlam tahmini (4 Puan), gerekçe (4 Puan).'
          }
        ],
        expectedAnswer: 'Kemer ve kenetlenmek sözcüklerinin bağlamsal tahmini ve gerekçesi.',
        rubric: [
          { criterion: 'Her iki kelimenin anlamına dair isabetli tahmin', points: 8 },
          { criterion: 'Metin gerekçelerinin açıkça yazılması', points: 7 }
        ]
      },
      {
        id: 's5-e2-q2',
        number: 2,
        outcomeCode: 'T.O.7.5',
        title: 'Metnin Yüzey Anlamı (Metnin Konusu)',
        points: 15,
        linesNeeded: 3,
        prompt: 'Okuduğunuz metnin konusunu (yüzey anlamını) belirleyerek bir cümleyle yazınız.',
        expectedAnswer: 'Metnin konusu; tarihi taş köprülerin mimari sırrı, kilit taşının işlevi ve taşıdığı birlik sembolüdür.',
        rubric: [
          { criterion: 'Metnin konusunu eksiksiz ve doğru biçimde tek cümleyle belirleme', points: 15 },
          { criterion: 'Konuyu kısmen ifade etme veya eksik bırakma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ]
      },
      {
        id: 's5-e2-q3',
        number: 3,
        outcomeCode: 'T.O.7.5',
        title: 'Metnin Yüzey Anlamı - Doğrudan Bilgi Tespiti',
        points: 15,
        linesNeeded: 4,
        prompt: 'Mimar teyzenin anlattıklarına göre tarihî taş köprünün yüzyıllardır dimdik ayakta kalmasını sağlayan teknik ve felsefi sebep nedir?',
        expectedAnswer: 'Teknik sebep, kemerdeki taşların birbirine yaslanarak ağırlıklarını tepe noktasındaki kilit taşına aktarmasıdır. Felsefi sebep ise ecdadımızın köprü harcına kattığı birlik, beraberlik ve birbirine kenetlenme anlayışıdır.',
        rubric: [
          { criterion: 'Teknik sebebin (kilit taşı ve ağırlık aktarımı) açıklanması', points: 8 },
          { criterion: 'Felsefi sebebin (birlik ve kenetlenme anlayışı) belirtilmesi', points: 7 }
        ]
      },
      {
        id: 's5-e2-q4',
        number: 4,
        outcomeCode: 'T.O.7.21',
        title: 'Söz Varlığını Çözümleme - Benzetme ve Sebep-Sonuç',
        points: 20,
        linesNeeded: 6,
        prompt: 'Metinde geçen "omuz omuza vermek" deyimi ile köprünün taşları arasında nasıl bir benzetme kurulmuştur? Bu benzetmenin köprünün dayanıklılığıyla olan sebep-sonuç ilişkisini açıklayınız.',
        expectedAnswer: '• Benzetme: Kemerdeki taşların birbirine dayanarak ağırlığı paylaşması, insanların bir felaket veya zorluk karşısında güçlerini birleştirip omuz omuza vermesine benzetilmiştir.\n• Sebep-Sonuç: Taşların tek başına değil birbirine kenetlenip kilit taşına güç vermesi (sebep), köprünün yüzyıllar boyunca Meriç Nehri\'nin azgın taşkınlarına bile meydan okuyarak dimdik ayakta kalmasını (sonuç) sağlamıştır.',
        rubric: [
          { criterion: 'Deyim ve mimari yapı arasındaki benzetmenin izahı', points: 10 },
          { criterion: 'Dayanıklılığa dair sebep-sonuç bağının kurulması', points: 10 }
        ]
      },
      {
        id: 's5-e2-q5',
        number: 5,
        outcomeCode: 'T.Y.7.3',
        title: 'İçerik ve Yapıya Yönelik Seçimleri Yönetme (Yazma)',
        points: 20,
        linesNeeded: 8,
        prompt: '"Birlikten kuvvet doğar." sözünden hareketle, toplumsal dayanışmanın zorlukları aşmadaki gücünü anlatan bir düşünce yazısı yazınız.',
        expectedAnswer: 'Örnek Metin: Tek bir tuğla rüzgâr karşısında kolayca savrulabilir; ancak harçla birbirine bağlanmış binlerce tuğla fırtınalara kafa tutan sarsılmaz bir kale meydana getirir. Toplumlar da böyledir. Bireyler sadece kendi çıkarlarını düşündüğünde en küçük sarsıntıda dağılırlar; fakat sevinçte ve kederde omuz omuza verdiklerinde hiçbir engel onları yıldıramaz. Tarihimiz boyunca milletimizin kazandığı büyük zaferler, bu kenetlenme ruhunun birer meyvesidir. Birlik olmak, geleceği güvenle inşa etmenin tek anahtarıdır.',
        rubric: [
          { criterion: 'Giriş, gelişme ve sonuç planının tutarlılığı', points: 10 },
          { criterion: 'Düşüncelerin ikna edici ve zengin bir dille aktarımı', points: 10 }
        ]
      },
      {
        id: 's5-e2-q6',
        number: 6,
        outcomeCode: 'T.Y.7.21',
        title: 'Noktalama İşaretleri (Üç Nokta ve Noktalı Virgül) Uygulaması',
        points: 15,
        linesNeeded: 6,
        prompt: 'Aşağıdaki noktalama görevlerini yönergelere uygun olarak tamamlayınız.',
        subQuestions: [
          {
            label: 'a. Üç Nokta (...) ve Kullanım Alanları',
            text: 'Aşağıdaki cümlelerde geçen üç noktanın (...) kullanım gerekçelerini altlarındaki boşluklara yazınız:\n1. "Meriç\'in coşkun suları, asırlık taş kemerler, güneşin batışındaki kızıllık..."\n   Kullanım Gerekçesi: ........................................................................\n2. "Hey koca Mimar Sinan!.. Bu taşlar senin nefesinle mi örüldü?"\n   Kullanım Gerekçesi: ........................................................................',
            expectedAnswer: '1. Cümle: Yüklemi bulunmayan, anlatımı tamamlanmamış (eksiltili) cümlenin sonuna konmuştur.\n2. Cümle: Seslenmelerde ve ünlemlerde anlatımı pekiştirmek için kullanılmıştır.',
            points: 7,
            guideline: '1. gerekçe (4 Puan), 2. gerekçe (3 Puan).'
          },
          {
            label: 'b. Noktalı Virgül (;) ve Noktalama Uygulaması',
            text: 'Aşağıdaki parçada yay ayraçla ( ) belirtilen yerlere uygun noktalama işaretlerini koyunuz ve noktalı virgülün (;) kullanım gerekçesini açıklayınız:\n"Köprünün kemerleri Meriç\'in taşkınlarına göğüs gerer, asırları selamlar ( ) kilit taşı ise bütün taşların yükünü taşır, birliği sağlar ( )"\n• Noktalı virgülün (;) kullanım gerekçesi: .....................................................................',
            expectedAnswer: '• Yay ayraçlara sırasıyla: ( ; ) ve ( . ) getirilmelidir.\n• Noktalı Virgülün (;) Kullanım Gerekçesi: Ögeleri arasında virgül bulunan sıralı cümleleri birbirinden ayırmak için noktalı virgül (;) kullanılmıştır.',
            points: 8,
            guideline: 'İşaretler (3 Puan), kural açıklaması (5 Puan).'
          }
        ],
        expectedAnswer: 'Üç nokta ve noktalı virgül kurallarının tespiti.',
        rubric: [
          { criterion: 'Üç noktanın iki ayrı kuralının doğru belirlenmesi', points: 7 },
          { criterion: 'Noktalı virgülün kullanım kuralının açıklanması', points: 8 }
        ]
      }
    ]
  },
  {
    id: 's5-e3',
    scenarioGroup: 'senaryo-5',
    scenarioGroupTitle: 'MEB Senaryo 5',
    scenarioName: '3. Sınav (Evliya Çelebi\'nin İzinde)',
    examNumber: 3,
    title: 'Kütüphanedeki Gezgin: Evliya Çelebi\'nin İzinde',
    theme: '5. Tema: Gezi Yazısı ve Keşif Tutkusu',
    targetClass: '7. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Evliya Çelebi\'nin İzinde',
      author: 'Türkçe Ülküsü Yayınları (Özgün Edebi Metin)',
      source: '7. Sınıf Türkçe Dersi - Seyahat Kültürü ve Edebiyat',
      content: `Yağmurlu bir hafta sonu şehir kütüphanesinin tozlu rafları arasında dolaşan Can, deri ciltli kalın bir kitabın önünde durdu: "Evliya Çelebi Seyahatnamesi". Kitabın sararmış sayfalarını araladığında karşısına minyatürlerle süslü haritalar ve rüya gibi şehir tasvirleri çıktı. Evliya Çelebi’nin on yedinci yüzyılda at sırtında Balkanlar’dan Kafkaslar’a, Mısır çöllerinden Viyana surlarına kadar uzanan elli yıllık yolculuğu Can’ı büyülemişti.

Evliya Çelebi sadece sarayları, kaleleri anlatmıyordu; gittiği yörelerin halk türkülerini, pazar yerlerindeki esnafın şakalarını, lezzetli yemeklerini ve konuşulan şiveleri de sıcağı sıcağına not etmişti. Örneğin Trabzon’u anlatırken hamsinin kırk türlü yemeğinden bahseder, Bursa’yı anlatırken "Velhasıl Bursa sudan ibarettir." diyerek suyun zarafetini mısralara dökerdi.

Can o gün kütüphaneden çıktığında cebindeki not defterine ilk cümlesini yazdı: "Gezmek sadece yeni yerler görmek değil; yeni bakış açıları kazanmaktır." Artık o da yaşadığı şehri bir turist gözüyle değil, bir seyyah yüreğiyle keşfetmeye kararlıydı.`
    },
    questions: [
      {
        id: 's5-e3-q1',
        number: 1,
        outcomeCode: 'T.O.7.4',
        title: 'Bağlamdan Söz Varlığını Tahmin Etme ve Gerekçelendirme',
        points: 15,
        linesNeeded: 6,
        prompt: 'Metinde geçen altı çizili kelimelerin anlamlarını metnin bağlamından yararlanarak tahmin ediniz ve gerekçelerini yazınız.',
        subQuestions: [
          {
            label: 'a. tasvir',
            text: 'Metindeki: "...minyatürlerle süslü haritalar ve rüya gibi şehir tasvirleri çıktı." cümlesindeki "tasvir" kelimesi:\n• Anlam Tahmini: ........................................................................\n• Metin İçi Gerekçe: ....................................................................',
            expectedAnswer: '• Anlam Tahmini: Bir şeyi, yeri veya olayı sözle veya yazıyla göz önünde canlandıracak biçimde anlatma, betimleme.\n• Metin İçi Gerekçe: Şehirlerin saraylarını, kalelerini ve sokaklarını ayrıntılı anlatması bağlamı.',
            points: 7,
            guideline: 'Anlam tahmini (4 Puan), gerekçe (3 Puan).'
          },
          {
            label: 'b. seyyah',
            text: 'Metindeki: "...yaşadığı şehri bir turist gözüyle değil, bir seyyah yüreğiyle keşfetmeye..." cümlesindeki "seyyah" kelimesi:\n• Anlam Tahmini: ........................................................................\n• Metin İçi Gerekçe: ....................................................................',
            expectedAnswer: '• Anlam Tahmini: Gezip görmek, incelemek ve öğrenmek amacıyla çok gezen kimse, gezgin.\n• Metin İçi Gerekçe: Evliya Çelebi\'nin elli yıl boyunca at sırtında dünyayı gezmesi ve yazması.',
            points: 8,
            guideline: 'Anlam tahmini (4 Puan), gerekçe (4 Puan).'
          }
        ],
        expectedAnswer: 'Tasvir ve seyyah kelimelerinin bağlam tahmini ve gerekçesi.',
        rubric: [
          { criterion: 'Her iki kelimenin anlamına dair isabetli tahmin', points: 8 },
          { criterion: 'Metin gerekçelerinin sunulması', points: 7 }
        ]
      },
      {
        id: 's5-e3-q2',
        number: 2,
        outcomeCode: 'T.O.7.5',
        title: 'Metnin Yüzey Anlamı (Metnin Konusu)',
        points: 15,
        linesNeeded: 3,
        prompt: 'Okuduğunuz metnin konusunu (yüzey anlamını) belirleyerek bir cümleyle yazınız.',
        expectedAnswer: 'Metnin konusu; Can\'ın kütüphanede Evliya Çelebi Seyahatnamesi ile tanışması ve seyahat kültürünün derinliğini kavramasıdır.',
        rubric: [
          { criterion: 'Metnin konusunu eksiksiz ve doğru biçimde tek cümleyle belirleme', points: 15 },
          { criterion: 'Konuyu kısmen ifade etme veya eksik bırakma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ]
      },
      {
        id: 's5-e3-q3',
        number: 3,
        outcomeCode: 'T.O.7.5',
        title: 'Metnin Yüzey Anlamı - Doğrudan Bilgi Tespiti',
        points: 15,
        linesNeeded: 4,
        prompt: 'Metne göre Evliya Çelebi gittiği şehirlerde mimari eserlerin yanı sıra özellikle neleri kaydetmiştir? İki örnek veriniz.',
        expectedAnswer: 'Evliya Çelebi gittiği yerlerin halk türkülerini, pazar yerlerindeki esnafın şakalarını, lezzetli yemeklerini (Trabzon\'da hamsi yemekleri) ve konuşulan şiveleri kaydetmiştir.',
        rubric: [
          { criterion: 'Kültürel unsurların (yemek, türkü, şive, şaka) metne dayalı yazılması', points: 15 }
        ]
      },
      {
        id: 's5-e3-q4',
        number: 4,
        outcomeCode: 'T.O.7.21',
        title: 'Söz Varlığını Çözümleme - Deyim ve Sebep-Sonuç',
        points: 20,
        linesNeeded: 6,
        prompt: 'Metinde geçen "sıcağı sıcağına" deyiminin anlamını açıklayınız. Can\'ın seyyah bakış açısı kazanmasında Evliya Çelebi\'nin eserinin oluşturduğu sebep-sonuç ilişkisini metne göre yazınız.',
        expectedAnswer: '• "Sıcağı sıcağına" deyimi: Aradan zaman geçmeden, unutulmadan, anında ve tazeyken demektir.\n• Sebep-Sonuç: Can\'ın Seyahatname\'yi okuyup Evliya Çelebi\'nin insan sevgisini ve ayrıntılara verdiği önemi görmesi (sebep), Can\'ın kendi yaşadığı kente sıradan bir turist gibi değil, derinlemesine bakan bir seyyah gözüyle yaklaşmaya karar vermesini (sonuç) sağlamıştır.',
        rubric: [
          { criterion: 'Deyimin doğru anlamı', points: 10 },
          { criterion: 'Can\'ın dönüşümüne dair sebep-sonuç bağının kurulması', points: 10 }
        ]
      },
      {
        id: 's5-e3-q5',
        number: 5,
        outcomeCode: 'T.Y.7.3',
        title: 'İçerik ve Yapıya Yönelik Seçimleri Yönetme (Yazma)',
        points: 20,
        linesNeeded: 8,
        prompt: '"Çok gezen mi bilir, çok okuyan mı?" tartışmasından hareketle, gezip görmenin ve okumanın insan ufkuna katkısını ele alan planlı bir düşünce yazısı yazınız.',
        expectedAnswer: 'Örnek Metin: İnsanın ufkunu açan iki büyük kanat vardır: Biri okumak, diğeri gezmektir. Okumak, insanı odasından çıkarmadan asırlar öncesine götürür; farklı zihinlerin derinliklerinde dolaştırır. Gezmek ise kitaplarda okunan bilgileri ete kemiğe büründürür; insana doğrudan tecrübe kazandırır. Nitekim Evliya Çelebi gibi büyük seyyahlar, önce iyi birer okuyucu ve gözlemci olmuş, sonra yollara düşmüşlerdir. En büyük bilgi, okunanları görerek ve yaşayarak içselleştirmektir.',
        rubric: [
          { criterion: 'Giriş, gelişme ve sonuç planının tutarlılığı', points: 10 },
          { criterion: 'İki kavramın dengeli ve ikna edici şekilde sentezlenmesi', points: 10 }
        ]
      },
      {
        id: 's5-e3-q6',
        number: 6,
        outcomeCode: 'T.Y.7.21',
        title: 'Noktalama İşaretleri (Üç Nokta ve Noktalı Virgül) Uygulaması',
        points: 15,
        linesNeeded: 6,
        prompt: 'Aşağıda verilen noktalama kuralları doğrultusunda soruları cevaplayınız.',
        subQuestions: [
          {
            label: 'a. Üç Nokta (...) ve Kullanım Amaçları',
            text: 'Aşağıdaki cümlelerde geçen üç noktanın (...) hangi görevle kullanıldığını altlarındaki boşluklara yazınız:\n1. "Seyahatname\'de tasvir edilen Viyana surları, Mısır piramitleri, Kafkas yaylaları..."\n   Kullanım Görevi: ........................................................................\n2. "— Atını nereye sürüyorsun Evliya Çelebi?\n   — Rumeli ellerine..."\n   Kullanım Görevi: ........................................................................',
            expectedAnswer: '1. Cümle: Yüklemi bulunmayan, anlatımı tamamlanmamış eksiltili cümlenin sonuna konmuştur.\n2. Cümle: Karşılıklı konuşmalarda yeterli olmayan, eksik bırakılan cevaplarda kullanılır.',
            points: 7,
            guideline: '1. görev (4 Puan), 2. görev (3 Puan).'
          },
          {
            label: 'b. Noktalı Virgül (;) ve Noktalama Uygulaması',
            text: 'Aşağıdaki parçada yay ayraçla ( ) belirtilen yerlere uygun noktalama işaretlerini koyunuz ve noktalı virgülün (;) kullanım gerekçesini açıklayınız:\n"Evliya Çelebi sarayları, kaleleri, camileri yazdı ( ) pazar yerlerini, esnaf şakalarını ve türküleri ise halkın diliyle aktardı ( )"\n• Noktalı virgülün (;) kullanım gerekçesi: .....................................................................',
            expectedAnswer: '• Yay ayraçlara sırasıyla: ( ; ) ve ( . ) getirilmelidir.\n• Noktalı Virgülün (;) Kullanım Gerekçesi: Ögeleri arasında virgül bulunan sıralı cümleleri birbirinden ayırmak için noktalı virgül (;) kullanılmıştır.',
            points: 8,
            guideline: 'İşaretler (3 Puan), kural açıklaması (5 Puan).'
          }
        ],
        expectedAnswer: 'Üç nokta ve noktalı virgülün kurala uygun tespiti.',
        rubric: [
          { criterion: 'Üç noktanın iki ayrı kuralının doğru belirlenmesi', points: 7 },
          { criterion: 'Noktalı virgülün sıralı cümleleri ayırma görevinin izahı', points: 8 }
        ]
      }
    ]
  }
];
