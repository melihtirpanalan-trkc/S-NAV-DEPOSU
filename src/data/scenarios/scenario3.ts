import { ExamScenario } from '../../types/exam';

export const SCENARIO_3_EXAMS: ExamScenario[] = [
  {
    id: 's3-e1',
    scenarioGroup: 'senaryo-3',
    scenarioGroupTitle: 'MEB Senaryo 3',
    scenarioName: '1. Sınav (Sandıktan Çıkan Mektuplar)',
    examNumber: 1,
    title: 'Gönül Köprüsü: Sandıktan Çıkan Mektuplar',
    theme: '3. Tema: İletişim, Dil Sevgisi ve Nezaket',
    targetClass: '7. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Gönül Köprüsü: Sandıktan Çıkan Mektuplar',
      author: 'Türkçe Ülküsü Yayınları (Özgün Edebi Metin)',
      source: '7. Sınıf Türkçe Dersi - İletişim, Dil Sevgisi ve Nezaket',
      content: `Yetmiş beş yaşındaki Tahsin Dede, apartman dairesinin balkonundan caddeye baktığında içini derin bir hüzün kaplardı. Sokaktan gelip geçen insanlar kulaklarında kulaklıklar, ellerinde telefon ekranlarıyla yürüyordu. Ne bir tebessüm ne bir selamlaşma vardı havada... Birbirlerinin yüzüne bakmadan, sanki birer gölge gibi teğet geçiyorlardı. Oysa onun çocukluğunda bir sokaktan geçerken rastlanan herkese "Hayırlı sabahlar, akıbetiniz hayrola!" denir; komşunun hâli hatırı sorulmadan kapı önünden geçilmezdi.

O gün torunu Eren ziyarete gelmişti. Eren koltuğa gömülmüş, parmaklarını hızla telefon camında kaydırarak arkadaşlarıyla mesajlaşıyordu. Kullandığı kısaltmalar, yabancı kelimeler ve emojiler Tahsin Dede’nin dikkatini çekti. Dede usulca yerinden kalktı; odadaki ceviz sandığın kapağını açtı. Sararmış, kenarları dantel gibi yıpranmış bir tomar mektup çıkardı. 

— Eren oğlum, bak bu mektupları bana elli yıl önce asker ocağındayken rahmetli babam yazmıştı, dedi.
Eren merakla başını ekrandan kaldırdı. Mektupların her bir satırı "Gözümün nuru, hasretlim..." diye başlıyor; sevgiyle, incelikle dokunmuş kelimelerle devam ediyordu. Mektuplarda ne kırıcı bir sitem ne de kaba bir söz vardı; her cümle âdeta bir gönül nakışı gibi işlenmişti. Eren o sararmış kâğıtları kokladığında dedesinin neden bu kadar kederlendiğini gayriihtiyari anladı. O an elindeki telefonu usulca sehpaya bıraktı. Dedesiyle göz göze geldiğinde gözlerinde sımsıcak bir anlayış pırıltısı parıldıyordu.`
    },
    questions: [
      {
        id: 's3-e1-q1',
        number: 1,
        outcomeCode: 'T.O.7.4',
        title: 'Bağlamdan Söz Varlığını Tahmin Etme ve Gerekçelendirme',
        points: 15,
        linesNeeded: 6,
        prompt: 'Metinde geçen altı çizili kelimelerin anlamlarını metnin bağlamından hareketle tahmin ediniz ve gerekçelerini yazınız.',
        subQuestions: [
          {
            label: 'a. teğet',
            text: 'Metindeki: "...sanki birer gölge gibi teğet geçiyorlardı." cümlesindeki "teğet" kelimesi:\n• Anlam Tahmini: ........................................................................\n• Metin İçi Gerekçe: ....................................................................',
            expectedAnswer: '• Anlam Tahmini: Birbirine dokunmadan, çok yakınından temas etmeksizin geçip gitmek; iletişim kurmadan uzaklaşmak.\n• Metin İçi Gerekçe: İnsanların birbirlerinin yüzüne bakmaması ve selamlaşmaması ifadesi.',
            points: 7,
            guideline: 'Anlam tahmini (4 Puan), gerekçe (3 Puan).'
          },
          {
            label: 'b. gayriihtiyari',
            text: 'Metindeki: "...neden bu kadar kederlendiğini gayriihtiyari anladı." cümlesindeki "gayriihtiyari" kelimesi:\n• Anlam Tahmini: ........................................................................\n• Metin İçi Gerekçe: ....................................................................',
            expectedAnswer: '• Anlam Tahmini: İstem dışı olarak, elinde olmadan, kendiliğinden, birdenbire.\n• Metin İçi Gerekçe: Mektupları koklayıp okur okumaz o an birdenbire içine doğması durumu.',
            points: 8,
            guideline: 'Anlam tahmini (4 Puan), gerekçe (4 Puan).'
          }
        ],
        expectedAnswer: 'Teğet ve gayriihtiyari sözcüklerinin bağlamsal tahmini ve gerekçesi.',
        rubric: [
          { criterion: 'Her iki kelimenin anlamına dair isabetli tahmin', points: 8 },
          { criterion: 'Tahmini destekleyen metin delillerinin gösterilmesi', points: 7 }
        ]
      },
      {
        id: 's3-e1-q2',
        number: 2,
        outcomeCode: 'T.O.7.5',
        title: 'Metnin Yüzey Anlamı - Metnin Konusu',
        points: 10,
        linesNeeded: 3,
        prompt: 'Okuduğunuz metnin konusunu bir cümleyle yazınız.',
        expectedAnswer: 'Metnin konusu, modern çağın dijital iletişimi karşısında insanların yüz yüze samimiyeti kaybetmesi ve dedenin eski mektuplar aracılığıyla torununa dilin ve sevginin kıymetini fark ettirmesidir.',
        rubric: [
          { criterion: 'Metnin ana konusunun doğru ve tek cümleyle ifade edilmesi', points: 10 }
        ]
      },
      {
        id: 's3-e1-q3',
        number: 3,
        outcomeCode: 'T.O.7.5',
        title: 'Metnin Yüzey Anlamı - Doğrudan Bilgi Tespiti',
        points: 10,
        linesNeeded: 4,
        prompt: 'Metne göre Tahsin Dede’nin sandıktan çıkardığı mektupların dil ve anlatım özellikleri nasıldır? Metinden iki özellik belirtiniz.',
        expectedAnswer: '1. Mektuplar "Gözümün nuru, hasretlim..." gibi sevgi ve nezaket dolu hitaplarla başlamaktadır.\n2. Mektuplarda kırıcı sitemler veya kaba sözler bulunmamakta; kelimeler bir gönül nakışı gibi incelikle seçilmiştir.',
        rubric: [
          { criterion: 'Mektupların hitap ve sevgi dilinin belirtilmesi', points: 5 },
          { criterion: 'Kaba sözlerden uzak, incelikli anlatımın yazılması', points: 5 }
        ]
      },
      {
        id: 's3-e1-q4',
        number: 4,
        outcomeCode: 'T.O.7.7',
        title: 'Metnin Derin Anlamı (Metnin Ana Fikri / İletisi)',
        points: 15,
        linesNeeded: 5,
        prompt: 'Eren’in sararmış mektupları okuduktan sonra elindeki telefonu sehpaya bırakması hareketinden yola çıkarak metnin derin anlamını (ana fikrini) açıklayınız.',
        expectedAnswer: 'Eren, ekran başında yaşadığı hızlı, ruhsuz ve kısaltmalarla dolu sanal iletişimin yetersizliğini; sevginin, emek verilmiş kelimelerin ve aile bağlarının sıcaklığını fark etmiştir. Telefonu bırakması, sanal dünyadan sıyrılıp dedesiyle samimi bir insani bağ kurmayı seçtiğini simgeler.',
        rubric: [
          { criterion: 'Eren\'in iç dünyasındaki değişimin doğru çözümlenmesi', points: 8 },
          { criterion: 'Sanal dünyadan gerçek samimiyete geçişin çıkarım olarak ifade edilmesi', points: 7 }
        ]
      },
      {
        id: 's3-e1-q5',
        number: 5,
        outcomeCode: 'T.O.7.21',
        title: 'Söz Varlığını Çözümleme - Deyim ve Çözümleme',
        points: 15,
        linesNeeded: 5,
        prompt: 'Metinde geçen "hâli hatırı sorulmak" deyiminin anlamını açıklayınız. Yazar bu deyimi kullanarak geçmişteki toplum yaşamına dair hangi değeri vurgulamak istemiştir?',
        expectedAnswer: '• "Hâli hatırı sorulmak" deyimi: Bir kimsenin sağlığını, durumunu, bir sıkıntısı olup olmadığını öğrenmek üzere ilgi ve yakınlık göstermek demektir.\n• Vurgulanan Değer: Yazar, geçmişte komşuluk ilişkilerinin, insanların birbirine gösterdiği samimi ilgi ve vefanın toplum hayatındaki önemini vurgulamak istemiştir.',
        rubric: [
          { criterion: 'Deyimin anlamının doğru verilmesi', points: 7 },
          { criterion: 'Vurgulanan toplumsal dayanışma ve nezaket değerinin açıklanması', points: 8 }
        ]
      },
      {
        id: 's3-e1-q6',
        number: 6,
        outcomeCode: 'T.Y.7.3',
        title: 'İçerik ve Yapıya Yönelik Seçimleri Yönetme (Yazma)',
        points: 20,
        linesNeeded: 8,
        prompt: '"Güzel söz, kilitli gönülleri açan bir anahtardır." atasözünü açıklayan; giriş, gelişme ve sonuç bölümlerinden oluşan kısa bir kompozisyon yazınız.',
        expectedAnswer: 'Örnek Kompozisyon: İletişim, sadece kelimeleri ardı ardına sıralamak değil; muhatabımızın kalbine dokunabilmektir. Kırıcı, sert ve aceleci bir üslup en yakın dostlukları bile zedelerken tatlı dille söylenen bir çift söz, en katı öfkeleri bile yumuşatır. Atalarımız "Tatlı dil yılanı deliğinden çıkarır." diyerek sözün gücünü anlatmıştır. Günlük hayatımızda tebessümü ve nezaketli konuşmayı elden bırakmamalıyız. Çünkü gönül kapıları ancak sevgi diliyle çalındığında ardına kadar açılır.',
        rubric: [
          { criterion: 'Giriş, gelişme ve sonuç planına uygun kompozisyon kurgusu', points: 10 },
          { criterion: 'Fikirlerin zenginliği, akıcılık ve Türkçenin kurallarına uygunluk', points: 10 }
        ]
      },
      {
        id: 's3-e1-q7',
        number: 7,
        outcomeCode: 'T.Y.7.21',
        title: 'Noktalama İşaretleri (Üç Nokta ve Noktalı Virgül) Uygulaması',
        points: 15,
        linesNeeded: 6,
        prompt: 'Aşağıda verilen noktalama görevlerini yönergelere uygun olarak tamamlayınız.',
        subQuestions: [
          {
            label: 'a. Üç Nokta (...) ve Ünlemle Kullanımı (!..)',
            text: 'Aşağıdaki cümlelerde kullanılan üç noktanın (...) ve ünlemle birleşiminin gerekçelerini altlarındaki boşluklara yazınız:\n1. "Tahsin Dede!.. Gel de sandıktaki diğer mektupları da beraber okuyalım!"\n   Kullanım Gerekçesi: ........................................................................\n2. "O sararmış mektup yapraklarında saklanan derin sevgi, sımsıcak muhabbet, buram buram tüten vatan hasreti..."\n   Kullanım Gerekçesi: ........................................................................',
            expectedAnswer: '1. Cümle: Ünlem ve seslenmelerde anlatımı pekiştirmek için kullanılmıştır. (Ünlem işaretinden sonra üç nokta yerine iki nokta konulması kuralına uyulmuştur.)\n2. Cümle: Yüklemi bulunmayan, anlatımı tamamlanmamış (eksiltili) cümlenin sonuna konmuştur.',
            points: 7,
            guideline: '1. cümlenin kuralı (4 Puan), 2. cümlenin kuralı (3 Puan).'
          },
          {
            label: 'b. Noktalı Virgül (;) ve Noktalama Uygulaması',
            text: 'Aşağıdaki parçada yay ayraçla ( ) belirtilen yerlere uygun noktalama işaretlerini getiriniz ve noktalı virgülün (;) kullanım gerekçesini açıklayınız:\n"Edebiyatımızda mektup; samimi, sıcak, içten duyguları aktarır ( ) günlük ise anlık duygu, düşünce ve gözlemleri kaydeder ( )"\n• Noktalı virgülün (;) kullanım gerekçesi: .....................................................................',
            expectedAnswer: '• Yay ayraçlara sırasıyla: ( ; ) ve ( . ) getirilmelidir.\n• Noktalı Virgülün (;) Kullanım Gerekçesi: Ögeleri arasında virgül bulunan sıralı cümleleri birbirinden ayırmak için noktalı virgül (;) kullanılmıştır.',
            points: 8,
            guideline: 'Ayraçların doğru doldurulması (4 Puan), kuralın tam ve açık yazılması (4 Puan).'
          }
        ],
        expectedAnswer: 'Üç noktanın seslenmelerde pekiştirme ve eksiltili cümledeki görevleri ile noktalı virgülün sıralı cümleleri ayırma görevinin açıklanması.',
        rubric: [
          { criterion: 'Üç noktanın iki ayrı kuralının doğru belirlenmesi', points: 7 },
          { criterion: 'Ayraçların yerleştirilmesi ve noktalı virgülün kullanım amacının eksiksiz yazılması', points: 8 }
        ]
      }
    ]
  },
  {
    id: 's3-e2',
    scenarioGroup: 'senaryo-3',
    scenarioGroupTitle: 'MEB Senaryo 3',
    scenarioName: '2. Sınav (Saat Kulesinin Ustası)',
    examNumber: 2,
    title: 'Ahşabın ve Zamanın Efendisi: Saat Kulesinin Ustası',
    theme: '3. Tema: Millî Değerler ve Emek',
    targetClass: '7. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Saat Kulesinin Ustası',
      author: 'Türkçe Ülküsü Yayınları (Özgün Edebi Metin)',
      source: '7. Sınıf Türkçe Dersi - Sabır, Zaman Bilinci ve Emek',
      content: `Tarihî şehrin meydanındaki heybetli saat kulesi, yüz elli yıldır her saat başında tokmaklarını tunç çana vurarak şehre zamanın akıp gittiğini hatırlatırdı. Kulenin içinde, dik ve döner merdivenlerin en tepesinde ise kentin tek saat tamircisi olan Cemil Usta yaşardı. Cemil Usta, gözüne taktığı büyüteciyle dişlileri, yayları ve sarkaçları gün boyu temizler; tek bir saniyenin bile şaşmaması için büyük bir titizlikle çalışırdı.

O sabah saat aniden durdu. Meydandaki esnaf merakla kulenin kapısına toplandı. Genç çırak Ali telaşla koşuşturuyor, dişlileri aceleyle çevirmeye çalışıyordu. Cemil Usta çırağının elini usulca tuttu:
— Ali, zamana hükmetmek istiyorsan önce kendi içindeki telaşı susturacaksın. Saat tamiri sabırla diş diş işlenir; zorlamayla değil, sevgiyle yoluna girer.

Usta, cebinden çıkardığı incecik kıl fırçayla çarkların arasına sıkışmış küçücük bir güvercin tüyünü nazikçe aldı. Çarklar bir anda yeniden dönmeye, sarkaç düzenli ritmine kavuşmaya başladı. Çan tekrar "Dan!.. Dan!.." diye çaldığında bütün şehir derin bir nefes aldı. Cemil Usta gülümsedi; çünkü doğru anı beklemek bazen en zor işi bile kolay kılardı.`
    },
    questions: [
      {
        id: 's3-e2-q1',
        number: 1,
        outcomeCode: 'T.O.7.4',
        title: 'Bağlamdan Söz Varlığını Tahmin Etme ve Gerekçelendirme',
        points: 15,
        linesNeeded: 6,
        prompt: 'Metinde geçen altı çizili kelimelerin anlamlarını metnin bağlamından yararlanarak tahmin ediniz ve gerekçelerini yazınız.',
        subQuestions: [
          {
            label: 'a. heybetli',
            text: 'Metindeki: "Tarihî şehrin meydanındaki heybetli saat kulesi..." cümlesindeki "heybetli" kelimesi:\n• Anlam Tahmini: ........................................................................\n• Metin İçi Gerekçe: ....................................................................',
            expectedAnswer: '• Anlam Tahmini: Görünüşüyle insanda büyüklük, saygı ve hayranlık uyandıran, gösterişli ve azametli.\n• Metin İçi Gerekçe: Yüz elli yıldır meydanda yükselen dik ve devasa bir kule olması.',
            points: 7,
            guideline: 'Anlam tahmini (4 Puan), gerekçe (3 Puan).'
          },
          {
            label: 'b. sarkaç',
            text: 'Metindeki: "...sarkaç düzenli ritmine kavuşmaya başladı." cümlesindeki "sarkaç" kelimesi:\n• Anlam Tahmini: ........................................................................\n• Metin İçi Gerekçe: ....................................................................',
            expectedAnswer: '• Anlam Tahmini: Sabit bir nokta çevresinde yer çekimi ve atalet etkisiyle düzenli salınım yapan ağırlık / çubuk.\n• Metin İçi Gerekçe: Saatin düzenli ritmini sağlayan ve çarklarla birlikte hareket eden düzenek olması.',
            points: 8,
            guideline: 'Anlam tahmini (4 Puan), gerekçe (4 Puan).'
          }
        ],
        expectedAnswer: 'Heybetli ve sarkaç sözcüklerinin bağlamsal tahmini ve gerekçesi.',
        rubric: [
          { criterion: 'Her iki sözcüğün bağlama uygun tahmini', points: 8 },
          { criterion: 'Metinden gösterilen gerekçelerin tutarlılığı', points: 7 }
        ]
      },
      {
        id: 's3-e2-q2',
        number: 2,
        outcomeCode: 'T.O.7.5',
        title: 'Metnin Yüzey Anlamı - Metnin Konusu',
        points: 10,
        linesNeeded: 3,
        prompt: 'Okuduğunuz metnin konusunu bir cümleyle yazınız.',
        expectedAnswer: 'Metnin konusu, tarihî saat kulesinin durması üzerine Cemil Usta\'nın sabır ve ustalıkla saati tamir ederek çırağına sabrın önemini öğretmesidir.',
        rubric: [
          { criterion: 'Metnin konusunun ana fikre kaymadan açıkça belirtilmesi', points: 10 }
        ]
      },
      {
        id: 's3-e2-q3',
        number: 3,
        outcomeCode: 'T.O.7.5',
        title: 'Metnin Yüzey Anlamı - Olay Akışı Tespiti',
        points: 10,
        linesNeeded: 4,
        prompt: 'Saat kulesinin aniden durmasının gerçek sebebi nedir ve Cemil Usta sorunu nasıl çözmüştür?',
        expectedAnswer: 'Saatin durmasının gerçek sebebi çarkların arasına küçücük bir güvercin tüyünün sıkışmasıdır. Cemil Usta cebinden çıkardığı incecik kıl fırçayla tüyü nazikçe alarak sorunu çözmüştür.',
        rubric: [
          { criterion: 'Sorunun sebebinin (güvercin tüyü) belirtilmesi', points: 5 },
          { criterion: 'Çözüm yolunun (fırçayla tüyün alınması) yazılması', points: 5 }
        ]
      },
      {
        id: 's3-e2-q4',
        number: 4,
        outcomeCode: 'T.O.7.7',
        title: 'Metnin Derin Anlamı (Metnin Ana Fikri / İletisi)',
        points: 15,
        linesNeeded: 5,
        prompt: 'Cemil Usta’nın "Zamana hükmetmek istiyorsan önce kendi içindeki telaşı susturacaksın." sözünden hareketle metnin derin anlamını (ana fikrini) açıklayınız.',
        expectedAnswer: 'İnsan telaş ve panik içindeyken olayları sağlıklı değerlendiremez ve acelecilik hataya yol açar. Bir işte başarıya ulaşmak için önce sakin ve sabırlı olmak gerekir. Metnin derin anlamı; sabır ve dinginlikle yapılan işlerin en karmaşık sorunları bile çözeceğidir.',
        rubric: [
          { criterion: 'Telaşı susturmanın sabır ve başarıyla ilişkisinin tespiti', points: 8 },
          { criterion: 'Günlük hayatla bağlantılı tutarlı bir örnek sunulması', points: 7 }
        ]
      },
      {
        id: 's3-e2-q5',
        number: 5,
        outcomeCode: 'T.O.7.21',
        title: 'Söz Varlığını Çözümleme - Deyim ve Anlam',
        points: 15,
        linesNeeded: 5,
        prompt: 'Metinde geçen "derin bir nefes almak" deyiminin anlamına değinerek, şehrin saatin tekrar çalışmasıyla neden bu tepkiyi verdiğini açıklayınız.',
        expectedAnswer: '• "Derin bir nefes almak" deyimi: Bir tehlikenin, belirsizliğin veya sıkıntının geçmesiyle ferahlamak, rahatlamak demektir.\n• Şehir halkı için saat kulesi sadece bir zaman aracı değil, kentin yüz elli yıllık nabzı ve düzenidir. Saatin yeniden çalışması kentteki düzenin ve huzurun devam ettiğini gösterdiği için insanlar rahatlamıştır.',
        rubric: [
          { criterion: 'Deyimin doğru açıklaması', points: 7 },
          { criterion: 'Şehrin tepkisinin metin bağlamında yorumlanması', points: 8 }
        ]
      },
      {
        id: 's3-e2-q6',
        number: 6,
        outcomeCode: 'T.Y.7.3',
        title: 'İçerik ve Yapıya Yönelik Seçimleri Yönetme (Yazma)',
        points: 20,
        linesNeeded: 8,
        prompt: '"Sabır acıdır fakat meyvesi tatlıdır." sözünü konu alan; serim, düğüm ve çözüm bölümlerine uygun bir olay yazısı (hikâye) kurgulayınız.',
        expectedAnswer: 'Örnek Hikâye Kurgusu: Marangozluk öğrenmek isteyen Emre, günlerce eline testere verilmeden sadece tahtaları zımparalattığı için ustasına sitem eder. Bırakıp gitmek üzereyken ustası ona işin temelinin sabır ve pürüzsüz yüzey oluşturmak olduğunu anlatır. Emre pes etmez ve aylarca sabırla çalışır. Yıl sonunda ahşaptan yaptığı ilk keman yarışmada birinci olduğunda ustasının elini öper; sabrın ne denli tatlı bir başarı getirdiğini anlar.',
        rubric: [
          { criterion: 'Olay yazısının unsurları (olay, kişi, zaman, mekân) ve planlı kurgusu', points: 10 },
          { criterion: 'Anlatım dili, temaya uygunluk ve sonuç bağlamı', points: 10 }
        ]
      },
      {
        id: 's3-e2-q7',
        number: 7,
        outcomeCode: 'T.Y.7.21',
        title: 'Noktalama İşaretleri (Üç Nokta ve Noktalı Virgül) Uygulaması',
        points: 15,
        linesNeeded: 6,
        prompt: 'Aşağıdaki noktalama görevlerini kurallara uygun olarak cevaplayınız.',
        subQuestions: [
          {
            label: 'a. Üç Nokta (...) ve Pekiştirme Kuralı',
            text: 'Aşağıdaki cümlelerde geçen üç noktanın (...) hangi görevle kullanıldığını altlarındaki boşluklara yazınız:\n1. "Kulede dönen pirinç çarklar, sarkacın fısıltısı, zamanın derin nabzı..."\n   Kullanım Görevi: ........................................................................\n2. "Hey koca çan!.. Sesinle şehri yeniden uyandır!"\n   Kullanım Görevi: ........................................................................',
            expectedAnswer: '1. Cümle: Yüklemi söylenmemiş, anlatımı tamamlanmamış eksiltili cümlenin sonuna konmuştur.\n2. Cümle: Ünlem ve seslenmelerde anlatımı pekiştirmek için kullanılmıştır.',
            points: 7,
            guideline: '1. görev (4 Puan), 2. görev (3 Puan).'
          },
          {
            label: 'b. Noktalı Virgül (;) ve Noktalama Uygulaması',
            text: 'Aşağıdaki cümlede yay ayraçla ( ) belirtilen yerlere uygun noktalama işaretlerini getiriniz ve noktalı virgülün (;) kullanım gerekçesini açıklayınız:\n"Cemil Usta; büyüteci, cımbızı, tornavidayı masaya dizdi ( ) çırak ise çekiç, kerpeten ve keskileri tezgâha koydu ( )"\n• Noktalı virgülün (;) kullanım gerekçesi: .....................................................................',
            expectedAnswer: '• Yay ayraçlara sırasıyla: ( ; ) ve ( . ) getirilmelidir.\n• Noktalı Virgülün (;) Kullanım Gerekçesi: Cümle içinde virgüllerle ayrılmış tür veya takımları (hassas tamir aletleri ile kaba el aletleri) birbirinden ayırmak için kullanılmıştır.',
            points: 8,
            guideline: 'İşaretler (3 Puan), kural açıklaması (5 Puan).'
          }
        ],
        expectedAnswer: 'Üç nokta ve noktalı virgül kurallarının tespiti ve doğru kullanımı.',
        rubric: [
          { criterion: 'Üç noktanın iki ayrı görevinin tespiti', points: 7 },
          { criterion: 'Noktalı virgülün tür ve takım ayırma görevinin izahı', points: 8 }
        ]
      }
    ]
  },
  {
    id: 's3-e3',
    scenarioGroup: 'senaryo-3',
    scenarioGroupTitle: 'MEB Senaryo 3',
    scenarioName: '3. Sınav (Toroslar\'da Çıkan Çeşme)',
    examNumber: 3,
    title: 'Dağların Serin Nefesi: Toroslar\'da Bir Hayrat Çeşmesi',
    theme: '3. Tema: Yardımlaşma ve İyilik',
    targetClass: '7. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Toroslar\'da Bir Hayrat Çeşmesi',
      author: 'Türkçe Ülküsü Yayınları (Özgün Edebi Metin)',
      source: '7. Sınıf Türkçe Dersi - Yardımlaşma, Paylaşma ve İyilik',
      content: `Toroslar’ın sarp kayalıkları arasından kıvrılarak geçen tozlu kervan yolu, yaz aylarında kavurucu güneşin altında cehenneme dönerdi. Yolcular saatlerce bir yudum soğuk su bulabilmek umuduyla dudakları çatlamış hâlde ilerlerdi. Bu geçitte yaşayan yaşlı taş ustası Hasan Dede, ömrünün son yıllarını dağın zirvesinden sızan billur gibi kaynak suyunu yol kıyısına indirmeye adamıştı. 

Köydekiler ona "Boşuna zahmet çekiyorsun Hasan Dede, bu kayaları delmeye senin gücün yeter mi?" dediklerinde o sadece tebessüm eder:
— Evlatlarım; bir insanın diktiği fidanın gölgesi, yaptığı çeşmenin suyu kendinden sonraki nesillere kalıyorsa o insan hiç ölmemiş demektir, derdi.

Hasan Dede tam iki yıl boyunca elinde murç ve çekiçle kayaları oydu; ardıç kütüklerinden su olukları yaptı. Nihayet o kızgın temmuz sıcağında buz gibi su taş yalağa "şırıl şırıl" döküldü. Yalağın yanına yolcuların içmesi için kalaylı bir bakır tas, kuşların ve kurtların su içmesi için de küçük bir taş oyuk yaptı. Gelip geçen yolcular atlarını sulayıp kana kana su içerken "Bu çeşmeyi yapandan Allah razı olsun." diye dua ederdi. Hasan Dede’nin nasırlı elleri yorulmuştu ama gönlü Toroslar kadar yüce bir huzurla dolmuştu.`
    },
    questions: [
      {
        id: 's3-e3-q1',
        number: 1,
        outcomeCode: 'T.O.7.4',
        title: 'Bağlamdan Söz Varlığını Tahmin Etme ve Gerekçelendirme',
        points: 15,
        linesNeeded: 6,
        prompt: 'Metinde geçen altı çizili kelimelerin anlamlarını metnin bağlamından yararlanarak tahmin ediniz ve gerekçelerini yazınız.',
        subQuestions: [
          {
            label: 'a. billur',
            text: 'Metindeki: "...billur gibi kaynak suyunu yol kıyısına indirmeye adamıştı." cümlesindeki "billur" kelimesi:\n• Anlam Tahmini: ........................................................................\n• Metin İçi Gerekçe: ....................................................................',
            expectedAnswer: '• Anlam Tahmini: Çok duru, tertemiz, berrak, cam gibi saydam.\n• Metin İçi Gerekçe: Dağın zirvesinden çıkan saf ve içilebilir kaynak suyu bağlamı.',
            points: 7,
            guideline: 'Anlam tahmini (4 Puan), gerekçe (3 Puan).'
          },
          {
            label: 'b. murç',
            text: 'Metindeki: "...elinde murç ve çekiçle kayaları oydu..." cümlesindeki "murç" kelimesi:\n• Anlam Tahmini: ........................................................................\n• Metin İçi Gerekçe: ....................................................................',
            expectedAnswer: '• Anlam Tahmini: Taş ve kayaları yontmak veya delmek için çekiçle vurularak kullanılan sivri uçlu demir kalem/alet.\n• Metin İçi Gerekçe: Çekiçle birlikte kayaları oymak için kullanılması.',
            points: 8,
            guideline: 'Anlam tahmini (4 Puan), gerekçe (4 Puan).'
          }
        ],
        expectedAnswer: 'Billur ve murç sözcüklerinin bağlamsal tahmini ve gerekçesi.',
        rubric: [
          { criterion: 'Her iki sözcüğün bağlama uygun tahmini', points: 8 },
          { criterion: 'Metin gerekçelerinin açıkça yazılması', points: 7 }
        ]
      },
      {
        id: 's3-e3-q2',
        number: 2,
        outcomeCode: 'T.O.7.5',
        title: 'Metnin Yüzey Anlamı - Metnin Konusu',
        points: 10,
        linesNeeded: 3,
        prompt: 'Okuduğunuz metnin konusunu bir cümleyle yazınız.',
        expectedAnswer: 'Metnin konusu, Hasan Dede\'nin yolculara ve hayvanlara fayda sağlamak amacıyla büyük bir fedakârlık ve sabırla dağdan su indirip çeşme yapmasıdır.',
        rubric: [
          { criterion: 'Metnin ana konusunun doğru ve tek cümleyle belirtilmesi', points: 10 }
        ]
      },
      {
        id: 's3-e3-q3',
        number: 3,
        outcomeCode: 'T.O.7.5',
        title: 'Metnin Yüzey Anlamı - Doğrudan Bilgi Tespiti',
        points: 10,
        linesNeeded: 4,
        prompt: 'Hasan Dede çeşmeyi yaparken insanlarla birlikte doğadaki diğer canlıları da düşündüğünü hangi davranışıyla göstermiştir?',
        expectedAnswer: 'Hasan Dede, yolcuların su içmesi için kalaylı bir bakır tas koymanın yanı sıra, kuşların ve yabani hayvanların da su içebilmesi için çeşmenin kenarına küçük bir taş oyuk yaparak göstermiştir.',
        rubric: [
          { criterion: 'Hayvanlar ve kuşlar için taş oyuk yapıldığının belirtilmesi', points: 10 }
        ]
      },
      {
        id: 's3-e3-q4',
        number: 4,
        outcomeCode: 'T.O.7.7',
        title: 'Metnin Derin Anlamı (Metnin Ana Fikri / İletisi)',
        points: 15,
        linesNeeded: 5,
        prompt: 'Hasan Dede’nin "Kendinden sonraki nesillere hayırlı bir eser bırakan insan hiç ölmemiş demektir." sözünden yola çıkarak metnin derin anlamını (ana fikrini) açıklayınız.',
        expectedAnswer: 'İnsanın bedeni fani olsa da geride bıraktığı eserler, insanlığa ve doğaya yaptığı karşılıksız iyilikler onun adını ve ruhunu sonsuza dek yaşatır. Metnin derin anlamı; kalıcı olmanın ve insanlığa hizmet etmenin erdemidir.',
        rubric: [
          { criterion: 'Kalıcı eser bırakma ve ölümsüzlük ilişkisinin tespiti', points: 8 },
          { criterion: 'Çıkarımın metinle desteklenerek açıklanması', points: 7 }
        ]
      },
      {
        id: 's3-e3-q5',
        number: 5,
        outcomeCode: 'T.O.7.21',
        title: 'Söz Varlığını Çözümleme - Deyim ve Sebep-Sonuç',
        points: 15,
        linesNeeded: 5,
        prompt: 'Metinde geçen "gönlü huzurla dolmak" deyiminin anlamına değinerek, Hasan Dede\'nin bu iç huzura kavuşmasını sağlayan sebep-sonuç ilişkisini metne göre yazınız.',
        expectedAnswer: '• "Gönlü huzurla dolmak" deyimi: Yaptığı bir iyilik veya güzel bir iş sonucunda kalbinde derin bir rahatlık, dinginlik ve manevi mutluluk hissetmek demektir.\n• Sebep-Sonuç: Hasan Dede\'nin iki yıl sabırla çalışıp çeşmeyi tamamlaması ve susayan yolcuların, hayvanların kana kana su içip hayır dua etmesi (sebep), Hasan Dede\'nin tüm yorgunluğunu unutup derin bir manevi huzur duymasını (sonuç) sağlamıştır.',
        rubric: [
          { criterion: 'Deyimin doğru anlamı', points: 7 },
          { criterion: 'Sebep ve sonuç bağıntısının metinle kurulması', points: 8 }
        ]
      },
      {
        id: 's3-e3-q6',
        number: 6,
        outcomeCode: 'T.Y.7.3',
        title: 'İçerik ve Yapıya Yönelik Seçimleri Yönetme (Yazma)',
        points: 20,
        linesNeeded: 8,
        prompt: '"İyilik yapan iyilik bulur." anlayışından hareketle, toplumsal yardımlaşmanın ve paylaşmanın insan ilişkilerini nasıl güçlendirdiğini anlatan planlı bir düşünce yazısı yazınız.',
        expectedAnswer: 'Örnek Metin: İnsanı insan yapan en yüce haslet, başkalarının derdiyle dertlenip onlara karşılıksız el uzatabilmektir. İyilik, denize atılan küçük bir taşın oluşturduğu dalgalar gibi halka halka büyür ve bütün toplumu sarar. Bir çeşme yapan usta, bir sokak hayvanına su veren çocuk ya da komşusunun kapısını çalan bir dost, aslında toplumun vicdanını ayakta tutmaktadır. Karşılık beklemeden yapılan her iyilik, hem yapanın kalbini aydınlatır hem de dünyayı daha yaşanabilir kılar.',
        rubric: [
          { criterion: 'Giriş, gelişme ve sonuç planının tutarlılığı', points: 10 },
          { criterion: 'İçerik zenginliği, akıcı anlatım ve imla kurallarına uyum', points: 10 }
        ]
      },
      {
        id: 's3-e3-q7',
        number: 7,
        outcomeCode: 'T.Y.7.21',
        title: 'Noktalama İşaretleri (Üç Nokta ve Noktalı Virgül) Uygulaması',
        points: 15,
        linesNeeded: 6,
        prompt: 'Aşağıdaki noktalama görevlerini verilen kurallara göre cevaplayınız.',
        subQuestions: [
          {
            label: 'a. Üç Nokta (...) ve Kullanım Amaçları',
            text: 'Aşağıdaki cümlelerde geçen üç noktanın (...) hangi görevle kullanıldığını altlarındaki boşluklara yazınız:\n1. "Toroslar\'ın sarp kayalıkları, çam kokulu rüzgâr, çağıldayan kaynak suları..."\n   Kullanım Görevi: ........................................................................\n2. "— Çeşmenin başında kim var kervancıbaşı?\n   — Bir garip yolcu..."\n   Kullanım Görevi: ........................................................................',
            expectedAnswer: '1. Cümle: Yüklemi bulunmayan eksiltili cümlenin sonuna konmuştur.\n2. Cümle: Karşılıklı konuşmalarda yeterli olmayan, eksik bırakılan cevaplarda kullanılmıştır.',
            points: 7,
            guideline: '1. görev (4 Puan), 2. görev (3 Puan).'
          },
          {
            label: 'b. Noktalı Virgül (;) ve Noktalama Uygulaması',
            text: 'Aşağıdaki cümlede yay ayraçla ( ) belirtilen yerlere uygun noktalama işaretlerini koyunuz ve noktalı virgülün (;) kullanım gerekçesini açıklayınız:\n"Yolcular serin sudan kana kana içti, yorgunluk attı ( ) atlar, develer ve kuşlar ise taş yalakta susuzluğunu giderdi ( )"\n• Noktalı virgülün (;) kullanım gerekçesi: .....................................................................',
            expectedAnswer: '• Yay ayraçlara sırasıyla: ( ; ) ve ( . ) getirilmelidir.\n• Noktalı Virgülün (;) Kullanım Gerekçesi: Ögeleri arasında virgül bulunan sıralı cümleleri birbirinden ayırmak için noktalı virgül (;) kullanılmıştır.',
            points: 8,
            guideline: 'İşaretler (3 Puan), kural açıklaması (5 Puan).'
          }
        ],
        expectedAnswer: 'Üç nokta ve noktalı virgülün kurallarıyla birlikte tespiti.',
        rubric: [
          { criterion: 'Üç noktanın iki ayrı görevinin tespiti', points: 7 },
          { criterion: 'Noktalı virgülün kuralının tam olarak açıklanması', points: 8 }
        ]
      }
    ]
  }
];
