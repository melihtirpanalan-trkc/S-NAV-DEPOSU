import { ExamScenario } from '../../types/exam';

export const GRADE_5_EXAMS: ExamScenario[] = [
  // ==================== SENARYO 1 ====================
  // Senaryo 1 - Sınav 1
  {
    id: 'g5-s1-e1',
    gradeLevel: 5,
    scenarioGroup: 'senaryo-1',
    scenarioGroupTitle: 'MEB Senaryo 1',
    scenarioName: '1. Sınav (Rengârenk Uçurtmalar Şenliği)',
    examNumber: 1,
    title: 'Rengârenk Uçurtmalar Şenliği',
    theme: '1. Tema: Çocuk Dünyası & Oyun ve Dayanışma',
    targetClass: '5. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Rengârenk Uçurtmalar Şenliği',
      author: 'Türkçe Ülküsü Yayınları (Özgün Çocuk Metni)',
      source: '5. Sınıf Türkçe Dersi - Oyun ve Doğa Teması',
      content: `Köyün tepesindeki rüzgârlı bayır, bahar aylarında çocukların en sevdiği oyun alanına dönüşürdü. On yaşındaki Kerem ve kız kardeşi Zeynep, günlerdir kilerdeki saz çıtalarını, renkli elişi kâğıtlarını ve sağlam iplikleri bir araya getirerek büyük bir altıgen uçurtma yapmaya çalışıyorlardı. Kerem çıtaları birbirine bağlarken düğümleri dikkatle sıktı, çıtaların tam ortasını ip ile sabitledi. Zeynep ise rengârenk kâğıtları çıtaların üzerine yapıştırırken kenarlarının yırtılmaması için yavaş hareket ediyordu.

Kuyruk yapımı için eski kumaş parçalarını eşit aralıklarla ipe dizdiler. Çünkü rüzgârda dengeli uçmanın sırrı düzgün bir kuyruktu. Tepeye vardıklarında arkadaşları Elif ve Mert de oradaydı. Mert’in uçurtmasının çıtası kırılmış, çocuk üzgün bir şekilde kenarda oturuyordu. Kerem ve Zeynep hiç düşünmeden yanlarındaki yedek çıtaları ve tutkalı Mert ile paylaştılar. Kısa sürede Mert’in uçurtmasını da tamir ettiler. Rüzgâr kuvvetlenince dört çocuk aynı anda gökyüzüne doğru ipleri bıraktı. Gökyüzü bir anda mavi, sarı ve kırmızı renklerle süslendi. Çocukların yüzündeki sevinç, uçurtmaların yükselişinden bile daha parlaktı.`
    },
    questions: [
      {
        id: 'g5-s1-e1-q1',
        number: 1,
        outcomeCode: 'T.O.5.6',
        title: 'Metnin Yüzey Anlamı (Metnin Konusu)',
        points: 15,
        prompt: 'Okuduğunuz metnin konusunu (yüzey anlamını) belirleyerek bir cümleyle yazınız.',
        expectedAnswer: 'Metnin konusu; Kerem ve Zeynep\'in yaptıkları uçurtmayı uçurmak için tepeye çıkmaları ve çıtası kırılan arkadaşları Mert ile malzemelerini paylaşarak birlikte eğlenmeleridir.',
        rubric: [
          { criterion: 'Metnin konusunu eksiksiz ve doğru biçimde tek cümleyle belirleme', points: 15 },
          { criterion: 'Konuyu kısmen ifade etme veya eksik bırakma', points: 8 },
          { criterion: 'Eksik veya ilgisiz yanıt', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g5-s1-e1-q2',
        number: 2,
        outcomeCode: 'T.O.5.6',
        title: 'Metnin Yüzey Anlamı (Karakter Davranışı)',
        points: 15,
        prompt: 'Metindeki altı çizili "Kerem ve Zeynep hiç düşünmeden yanlarındaki yedek çıtaları ve tutkalı Mert ile paylaştılar." ifadesinden hareketle iki kardeşin hangi kişilik özelliğine sahip olduğu söylenebilir? Gerekçesiyle yazınız.',
        expectedAnswer: 'Kerem ve Zeynep yardımsever, cömert, bencil olmayan ve arkadaş dayanışmasına değer veren çocuklardır. Arkadaşlarının üzüntüsünü görünce tereddüt etmeden kendi malzemelerini onunla paylaşmışlardır.',
        rubric: [
          { criterion: 'Kişilik özelliğini (yardımsever/dayanışmacı) gerekçesiyle açıklama', points: 15 },
          { criterion: 'Kişilik özelliğini belirtip gerekçeyi yazmama', points: 8 },
          { criterion: 'Yanlış çıkarım', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g5-s1-e1-q3',
        number: 3,
        outcomeCode: 'T.O.5.7',
        title: 'Görselle İletilen Anlam (Beden Dili ve Duygu)',
        points: 15,
        prompt: 'Metnin son cümlesinde geçen "Çocukların yüzündeki sevinç, uçurtmaların yükselişinden bile daha parlaktı." ifadesinden hareketle, bu sahneyi canlandıran bir görselde çocukların yüz ifadeleri ve beden hareketleri nasıl betimlenmelidir? İki ayrıntı yazınız.',
        expectedAnswer: '1. Ayrıntı: Çocukların ağızları kulaklarına varırcasına gülümsemesi, gözlerinin mutlulukla parlaması.\n2. Ayrıntı: Başlarını yukarı kaldırmış, kollarını neşeyle göğe uzatarak ipleri heyecanla tutmaları veya zıplamaları.',
        rubric: [
          { criterion: 'Yüz ifadesi ve beden hareketine dair iki tutarlı ayrıntı yazma', points: 15 },
          { criterion: 'Yalnızca tek bir ayrıntı yazma', points: 8 },
          { criterion: 'Görsel öğelerle bağ kuramama', points: 0 }
        ],
        linesNeeded: 4
      },
      {
        id: 'g5-s1-e1-q4',
        number: 4,
        outcomeCode: 'T.O.5.20',
        title: 'Söz Varlığı ve Günlük Yaşam İlişkisi',
        points: 15,
        prompt: 'Metinde geçen "sabitlemek" ve "paylaşmak" sözcüklerinin anlamlarını göz önünde bulundurunuz. "Paylaşmak" sözcüğünü okul hayatınızla ilgili özgün bir cümlede kullanınız.',
        expectedAnswer: 'Örnek Cümle: Teneffüste beslenme çantamdaki elmayı arkadaşımla paylaşarak birlikte afiyetle yedik.',
        acceptableAnswers: ['Kalemini unutan sıra arkadaşımla yedek kurşun kalemimi paylaştım.'],
        rubric: [
          { criterion: 'Sözcüğü anlamına uygun ve okul yaşamıyla ilişkili kurallı bir cümlede kullanma', points: 15 },
          { criterion: 'Cümle kurup okul hayatı bağlamını kuramama veya anlatım bozukluğu', points: 8 },
          { criterion: 'Sözcüğü yanlış anlamda kullanma veya cümle kuramama', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g5-s1-e1-q5',
        number: 5,
        outcomeCode: 'T.Y.5.13',
        title: 'Söz Varlığını Zenginleştirerek Paragraf Yazma',
        points: 20,
        prompt: 'Metinde vurgulanan "dayanışma" ve "yardımlaşma" kavramlarını kullanarak sınıfta ya da oyunda zorlanan bir arkadaşımıza nasıl destek olabileceğimizi anlatan 4-5 cümlelik bilgilendirici bir paragraf yazınız.',
        expectedAnswer: 'Birlikte yaşamak ve oyun oynamak, birbirimizin eksiklerini tamamlamayı gerektirir. Sınıfta ödevini anlamayan veya oyunda bir kuralı karıştıran arkadaşımıza sabırla rehberlik etmeliyiz. Dayanışma gösterdiğimizde hem arkadaşımızın öz güveni artar hem de aramızdaki dostluk bağı güçlenir. Zor günlerde el ele vermek, hayatı herkes için çok daha güzel ve kolay hâle getirir.',
        rubric: [
          { criterion: 'Dayanışma ve yardımlaşma kavramlarını bağlama uygun kullanarak 4-5 cümlelik tutarlı paragraf yazma', points: 20 },
          { criterion: 'Düşünceyi ifade edip cümle sayısında veya söz varlığı kullanımında eksiklik olma', points: 10 },
          { criterion: 'Konu dışı veya tek cümlelik yetersiz cevap', points: 0 }
        ],
        linesNeeded: 6
      },
      {
        id: 'g5-s1-e1-q6',
        number: 6,
        outcomeCode: 'T.Y.5.16',
        title: 'Yazım ve Noktalama Kuralları',
        points: 20,
        prompt: `Aşağıdaki cümlelerde yay ayraçla ( ) gösterilen yerlere gelmesi gereken noktalama işaretlerini (nokta veya kısa çizgi) yazınız:
a) Uçurtma şenliği saat 14( )30'da köy meydanında başladı.
b) Zeynep elindeki renk( )li kâğıtları masanın üstüne serdi.
c) Yarışmada Kerem ve Zeynep 1( ) oldu.
ç) Gökyüzündeki uçurtmalar rüzgârın sesine eşlik etti( )`,
        expectedAnswer: 'a) Nokta (.) [Saat ve dakika arasına]\nb) Kısa çizgi (-) [Satır sonuna sığmayan kelimeyi heceden bölme]\nc) Nokta (.) [Sıra sayısı bildirme]\nç) Nokta (.) [Tamamlanmış cümlenin sonu]',
        rubric: [
          { criterion: '4 boşluğun tamamını doğru işaretle doldurma', points: 20 },
          { criterion: '3 boşluğu doğru yapma', points: 15 },
          { criterion: '2 boşluğu doğru yapma', points: 10 },
          { criterion: '1 boşluğu doğru yapma', points: 5 },
          { criterion: 'Hiçbirini doğru yapamama', points: 0 }
        ],
        linesNeeded: 5
      }
    ]
  },

  // Senaryo 1 - Sınav 2
  {
    id: 'g5-s1-e2',
    gradeLevel: 5,
    scenarioGroup: 'senaryo-1',
    scenarioGroupTitle: 'MEB Senaryo 1',
    scenarioName: '2. Sınav (Küçük Kuşun Sıcak Yuvası)',
    examNumber: 2,
    title: 'Küçük Kuşun Sıcak Yuvası',
    theme: '1. Tema: Doğa Sevgisi ve Hayvanları Koruma',
    targetClass: '5. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Küçük Kuşun Sıcak Yuvası',
      author: 'Türkçe Ülküsü Yayınları (Özgün Çocuk Metni)',
      source: '5. Sınıf Türkçe Dersi - Çevre ve Merhamet',
      content: `Sonbaharın son günlerinde parktaki ıhlamur ağaçları yapraklarını tamamen dökmüştü. Okul çıkışı parktan geçen Ali, kuru yaprakların arasında kanadı incinmiş küçük bir serçe gördü. Zavallı kuş uçamıyor, soğuk rüzgâr estikçe çaresizce titriyordu. Ali hemen montunu çıkarıp kuşu ürkütmeden yavaşça avuçlarının içine aldı. 

Koşarak mahalledeki marangoz Hasan Amca’nın dükkânına gitti. Hasan Amca kuşu muayene etti; kanadında kırık olmadığını, sadece çalılara takılıp incindiğini söyledi. Birlikte atık tahta parçalarından küçük ve korunaklı bir kuş yuvası yaptılar. Yuvanın içine yumuşak pamuklar ve kuru otlar koydular. Ali serçeye temiz su ve buğday taneleri verdi. Üç gün boyunca her sabah kuşu ziyaret edip besledi. Dördüncü günün sabahında küçük serçe iyileşmişti. Hasan Amca kafesin kapağını açtığında serçe neşeyle cıvıldayarak gökyüzüne kanat çırptı. Ali’nin içini sıcacık bir mutluluk kapladı.`
    },
    questions: [
      {
        id: 'g5-s1-e2-q1',
        number: 1,
        outcomeCode: 'T.O.5.6',
        title: 'Metnin Yüzey Anlamı (Metnin Konusu)',
        points: 15,
        prompt: 'Okuduğunuz metnin konusunu (yüzey anlamını) belirleyerek bir cümleyle yazınız.',
        expectedAnswer: 'Metnin konusu; Ali\'nin parkta bulduğu kanadı incinmiş yaralı serçeyi Hasan Amca ile birlikte tedavi edip iyileşince doğaya bırakmasıdır.',
        rubric: [
          { criterion: 'Metnin konusunu eksiksiz ve doğru biçimde tek cümleyle belirleme', points: 15 },
          { criterion: 'Konuyu kısmen ifade etme veya eksik bırakma', points: 8 },
          { criterion: 'Metin dışı veya yanlış yanıt', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g5-s1-e2-q2',
        number: 2,
        outcomeCode: 'T.O.5.6',
        title: 'Metnin Yüzey Anlamı (Metin İçi Bilgi)',
        points: 15,
        prompt: 'Hasan Amca ve Ali, kuşun yuvasının içine neden pamuk ve kuru ot koymuşlardır? Metinden hareketle yazınız.',
        expectedAnswer: 'Yuvanın içini sıcak, yumuşak ve korunaklı hâle getirerek incinen serçenin üşümesini engellemek için koymuşlardır.',
        rubric: [
          { criterion: 'Yuvanın sıcak ve korunaklı olmasını sağlama amacını doğru açıklama', points: 15 },
          { criterion: 'Yalnızca serçeyi rahat ettirmek şeklinde eksik yazma', points: 8 },
          { criterion: 'İlgisiz cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g5-s1-e2-q3',
        number: 3,
        outcomeCode: 'T.O.5.7',
        title: 'Görselle İletilen Anlam (Duygu ve Sahne)',
        points: 15,
        prompt: 'Serçenin kafesten çıkıp gökyüzüne uçtuğu anı gösteren bir resimde Ali\'nin duruşunu ve yüz ifadesini betimleyen iki ayrıntı yazınız.',
        expectedAnswer: '1. Ayrıntı: Ali’nin başını yukarı kaldırmış, yüzünde huzurlu ve gururlu geniş bir gülümseme olması.\n2. Ayrıntı: Kuşa doğru el sallaması ve gözlerinin parıldaması.',
        rubric: [
          { criterion: 'İki tutarlı ve görselleştirilebilir ayrıntıyı doğru yazma', points: 15 },
          { criterion: 'Tek ayrıntı belirtme', points: 8 },
          { criterion: 'Metindeki durumla bağdaşmayan cevap', points: 0 }
        ],
        linesNeeded: 4
      },
      {
        id: 'g5-s1-e2-q4',
        number: 4,
        outcomeCode: 'T.O.5.20',
        title: 'Söz Varlığı ve Cümle Kurma',
        points: 15,
        prompt: 'Metinde geçen "merhamet" duygusunu çağrıştıran davranışlardan hareketle, "iyilik" sözcüğünü günlük yaşamınızla ilişkili anlamlı bir cümlede kullanınız.',
        expectedAnswer: 'Örnek Cümle: Karşıdan karşıya geçmekte zorlanan yaşlı teyzeye koluna girerek yardım etmek içimi iyilikle doldurdu.',
        acceptableAnswers: ['Sokak hayvanları için kapımızın önüne bir kap su koyarak küçük bir iyilik yaptık.'],
        rubric: [
          { criterion: 'Sözcüğü anlamına uygun, günlük yaşam bağlamında kurallı bir cümlede kullanma', points: 15 },
          { criterion: 'Basit veya bağlamı zayıf cümle kurma', points: 8 },
          { criterion: 'Sözcüğü yanlış kullanma', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g5-s1-e2-q5',
        number: 5,
        outcomeCode: 'T.Y.5.13',
        title: 'Söz Varlığını Zenginleştirerek Paragraf Yazma',
        points: 20,
        prompt: 'Sokakta yardıma muhtaç bir canlı gördüğümüzde birey olarak neler yapabileceğimizi anlatan 4-5 cümlelik bilgilendirici bir paragraf yazınız. Paragrafınızda "duyarlılık" ve "sorumluluk" sözcüklerini kullanınız.',
        expectedAnswer: 'Çevremizdeki dilsiz dostlarımıza karşı duyarlılık göstermek insanlığın en güzel erdemidir. Yaralı veya aç bir sokak hayvanı gördüğümüzde ona sırtımızı dönmemeli, gücümüz yettiğince yardım eli uzatmalıyız. Evimizin önüne temiz su ve mama bırakmak her vatandaşın yerine getirebileceği bir sorumluluktur. Birlikte hareket ettiğimizde dünyayı tüm canlılar için daha güvenli bir yuvaya dönüştürebiliriz.',
        rubric: [
          { criterion: 'Belirtilen kavramları bağlamında kullanarak 4-5 cümlelik akıcı paragraf yazma', points: 20 },
          { criterion: 'Kelimelerden birini eksik kullanma veya cümle sayısı yetersizliği', points: 10 },
          { criterion: 'Konuyla ilgisiz paragraf', points: 0 }
        ],
        linesNeeded: 6
      },
      {
        id: 'g5-s1-e2-q6',
        number: 6,
        outcomeCode: 'T.Y.5.16',
        title: 'Yazım ve Noktalama Kuralları',
        points: 20,
        prompt: `Aşağıdaki cümlelerde yay ayraçla ( ) gösterilen yerlere uygun noktalama işaretlerini (nokta veya kısa çizgi) koyunuz:
a) Serçenin tedavisi sabah 09( )15'te tamamlandı.
b) Ali bahçedeki kuru yap( )rakları bir köşeye topladı.
c) Yarışmada serçeyi ilk gören Ali 1( ) sırayı aldı.
ç) Doğa tüm canlıların ortak yaşam alanıdır( )`,
        expectedAnswer: 'a) Nokta (.) [Saat ve dakika arasına]\nb) Kısa çizgi (-) [Satır sonuna sığmayan kelime hecesi]\nc) Nokta (.) [Sıra sayısı bildirme]\nç) Nokta (.) [Cümle sonu]',
        rubric: [
          { criterion: '4 boşluğun tamamı doğru', points: 20 },
          { criterion: '3 boşluk doğru', points: 15 },
          { criterion: '2 boşluk doğru', points: 10 },
          { criterion: '1 boşluk doğru', points: 5 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 5
      }
    ]
  },

  // ==================== SENARYO 2 ====================
  // Senaryo 2 - Sınav 1
  {
    id: 'g5-s2-e1',
    gradeLevel: 5,
    scenarioGroup: 'senaryo-2',
    scenarioGroupTitle: 'MEB Senaryo 2',
    scenarioName: '1. Sınav (Miras Kalan Dokuma Tezgahı)',
    examNumber: 1,
    title: 'Miras Kalan Dokuma Tezgahı',
    theme: '2. Tema: Millî Kültürümüz & Geleneksel Sanatlar',
    targetClass: '5. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Miras Kalan Dokuma Tezgahı',
      author: 'Türkçe Ülküsü Yayınları (Özgün Kültür Metni)',
      source: '5. Sınıf Türkçe Dersi - Somut Olmayan Kültürel Miras',
      content: `Isparta’nın eski bir mahallesinde yaşayan Fatma Nine, evin alt katındaki taş odada ahşap dokuma tezgâhının başına geçerdi. Bu tezgâh ona kendi annesinden, annesine de ninesinden kalmıştı. Parmakları yün ipleri mekikle buluştururken çıkardığı "tık-tık" sesleri evin neşesiydi. Fatma Nine, halılara sadece desen işlemez; Anadolu insanının sevincini, hüznünü ve doğaya olan sevgisini de ilmek ilmek dokurdu. Her motifin bir dili vardı: Koçboynuzu gücü, hayat ağacı bereketi, su yolu ise ömrün akıp giden berraklığını simgelerdi.

Torunu Selim, okulda açılacak geleneksel el sanatları sergisi için ninesini hayranlıkla izliyordu. Fatma Nine ipleri tezgâha özenle gerdi. Her düğümü tek tek kontrol etti, gevşek kalan ipleri tarağıyla sıkıca bastırdı. "Evladım," dedi, "sabırla dokunmayan halının deseni çabuk dağılır." Selim, sergide arkadaşlarına tanıtmak için halı motiflerinin anlamlarını küçük kartlara yazmaya başladı.`
    },
    questions: [
      {
        id: 'g5-s2-e1-q1',
        number: 1,
        outcomeCode: 'T.O.5.5',
        title: 'Bağlamdan Kelime Anlamı Tahmini ve Ön Bilgi',
        points: 15,
        prompt: `Metinde geçen "özenle" kelimesini inceleyiniz:
a) Metinde bu kelimenin anlamını tahmin etmenizi sağlayan ipucunu yazınız.
b) Bu kelimenin anlamını metnin bağlamından hareketle tahmin ederek yazınız.`,
        expectedAnswer: 'a) Metindeki İpucu: Fatma Nine’nin her düğümü tek tek kontrol etmesi, gevşek kalan ipleri tarağıyla sıkıca bastırması.\nb) Tahminim: Büyük bir dikkatle, emek vererek, titizlikle.',
        rubric: [
          { criterion: 'İpucu ve anlam tahminini eksiksiz ve doğru yazma', points: 15 },
          { criterion: 'Yalnızca anlamı tahmin edip metin ipucunu yazmama', points: 8 },
          { criterion: 'Yanlış tahmin', points: 0 }
        ],
        linesNeeded: 4
      },
      {
        id: 'g5-s2-e1-q2',
        number: 2,
        outcomeCode: 'T.O.5.6',
        title: 'Metnin Yüzey Anlamı (Metnin Konusu)',
        points: 15,
        prompt: 'Okuduğunuz metnin konusunu (yüzey anlamını) belirleyerek bir cümleyle yazınız.',
        expectedAnswer: 'Metnin konusu; Fatma Nine\'nin dokuduğu geleneksel Türk halılarındaki motiflerin dili ve bu zengin kültürel mirasın torununa aktarılmasıdır.',
        rubric: [
          { criterion: 'Metnin konusunu eksiksiz ve doğru biçimde tek cümleyle belirleme', points: 15 },
          { criterion: 'Konuyu kısmen ifade etme veya eksik bırakma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g5-s2-e1-q3',
        number: 3,
        outcomeCode: 'T.O.5.7',
        title: 'Görsel Anlamı Belirleme (Ayrıntı Tespiti)',
        points: 15,
        prompt: 'Fatma Nine’nin tezgah başında halı dokurken ve torunu Selim’in onu izlerken resmedildiği bir görselde, Selim’in tavrını yansıtan iki görsel ayrıntı ne olabilir?',
        expectedAnswer: '1. Ayrıntı: Selim’in tezgaha merakla eğilmiş, gözlerini ninesinin ellerine dikmiş dikkatli bakışı.\n2. Ayrıntı: Elinde not defteri ve kalem tutarak motifleri ilgiyle çizmeye çalışması.',
        rubric: [
          { criterion: 'Görsel içerikle uyumlu iki tutarlı ayrıntı yazma', points: 15 },
          { criterion: 'Tek ayrıntı belirtme', points: 8 },
          { criterion: 'Görsel durumla ilgisiz cevap', points: 0 }
        ],
        linesNeeded: 4
      },
      {
        id: 'g5-s2-e1-q4',
        number: 4,
        outcomeCode: 'T.O.5.7',
        title: 'Görselin Ana Mesajı',
        points: 15,
        prompt: 'Yaşlı bir nine ile küçük torununun geleneksel bir sanat etrafında bir araya geldiğini gösteren sahnenin vermek istediği ana mesajı tek bir cümleyle yazınız.',
        expectedAnswer: 'Kültürel mirasımız ve geleneksel sanatlarımız, kuşaktan kuşağa sevgi ve ilgiyle aktarılarak yaşatılır.',
        rubric: [
          { criterion: 'Kuşaklar arası kültürel aktarımı vurgulayan özlü bir ana mesaj cümlesi yazma', points: 15 },
          { criterion: 'Mesajı genel ifadelerle kısmen açıklama', points: 8 },
          { criterion: 'İlgisiz ifade', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g5-s2-e1-q5',
        number: 5,
        outcomeCode: 'T.O.5.15',
        title: 'Metnin Anahtar Kelimelerini Belirleme',
        points: 20,
        prompt: 'Okuduğunuz metnin içeriğini ve temel iletisini yansıtan iki anahtar kelime veya kelime grubu belirleyiniz ve bu kelimelerin metinle ilişkisini birer cümleyle açıklayınız.',
        expectedAnswer: '1. Anahtar Kelime: Dokuma tezgahı / Geleneksel halı (Metinde nineden toruna aktarılan kültürel üretimin merkezidir.)\n2. Anahtar Kelime: Kültürel miras / Motifler (Metinde geçmişin duygularını ve değerlerini günümüze taşıyan sembollerdir.)',
        rubric: [
          { criterion: 'İki anahtar kelime belirleyip metinle ilişkisini açıklama', points: 20 },
          { criterion: 'Anahtar kelimeleri yazıp ilişkisini açıklayamama', points: 10 },
          { criterion: 'Metinle ilgisiz kelimeler seçme', points: 0 }
        ],
        linesNeeded: 5
      },
      {
        id: 'g5-s2-e1-q6',
        number: 6,
        outcomeCode: 'T.Y.5.16',
        title: 'Yazım ve Noktalama Kuralları',
        points: 20,
        prompt: `Aşağıdaki kelimeler satır sonuna sığmadığında hecelerinden nasıl bölüneceğini gösteriniz. Kısa çizgi (-) kullanarak birer doğru bölünme biçimi yazınız:
a) geleneksel: .......................................
b) motiflerinden: .......................................`,
        expectedAnswer: 'a) ge-leneksel veya gelenek-sel veya gele-neksel\nb) mo-tiflerinden veya motif-lerinden veya motiflerin-den',
        rubric: [
          { criterion: 'İki kelimeyi de hece kurallarına uygun olarak doğru bölme', points: 20 },
          { criterion: 'Bir kelimeyi doğru bölme', points: 10 },
          { criterion: 'Yanlış heceleme yapma', points: 0 }
        ],
        linesNeeded: 4
      }
    ]
  },

  // Senaryo 2 - Sınav 2
  {
    id: 'g5-s2-e2',
    gradeLevel: 5,
    scenarioGroup: 'senaryo-2',
    scenarioGroupTitle: 'MEB Senaryo 2',
    scenarioName: '2. Sınav (Eski Değirmenin Şarkısı)',
    examNumber: 2,
    title: 'Eski Değirmenin Şarkısı',
    theme: '2. Tema: Millî Kültür & Üretim ve Emek',
    targetClass: '5. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Eski Değirmenin Şarkısı',
      author: 'Türkçe Ülküsü Yayınları (Özgün Kültür Metni)',
      source: '5. Sınıf Türkçe Dersi - Tarih ve Doğa',
      content: `Köyün girişinde çağıldayan derenin hemen kenarında asırlık su değirmeni yer alırdı. Ahmet Usta, derenin berrak suyunu ahşap oluklardan geçirerek devasa değirmen çarkını döndürürdü. Çark döndükçe ağır değirmen taşları birbirine sürtünür, araya dökülen altın sarısı buğday taneleri sıcacık, mis kokulu una dönüşürdü. 

Ahmet Usta, taşın arasına dökülecek buğday miktarını büyük bir titizlikle ayarlardı. Fazla buğday dökerse taşın dönüşü yavaşlar, un kalın çıkardı; az dökerse taşlar aşınırdı. Bu yüzden gözünü oluktan ve taşın ritminden hiç ayırmazdı. Köylüler çuvallar dolusu buğdayı getirir, sırayla unlarını alırlardı. Ahmet Usta hiçbir zaman telaş etmez, "Emek sabırla yoğrulursa sofradaki ekmek tatlı olur." derdi. Akşam olunca un çuvallarını düzgünce istifler, değirmenin kapısını kapatıp huzurla evine dönerdi.`
    },
    questions: [
      {
        id: 'g5-s2-e2-q1',
        number: 1,
        outcomeCode: 'T.O.5.5',
        title: 'Kelime Anlamı Tahmini ve İpucu',
        points: 15,
        prompt: `Metinde geçen "titizlikle" kelimesini ele alınız:
a) Metinde bu kelimenin anlamını tahmin etmenizi sağlayan davranışı yazınız.
b) Kelimenin anlamını metinden hareketle tahmin ediniz.`,
        expectedAnswer: 'a) Metindeki İpucu: Ahmet Usta’nın gözünü oluktan ve taşın ritminden hiç ayırmaması, buğday miktarını ne az ne çok tam dengeli ayarlaması.\nb) Tahminim: Çok özen göstererek, dikkatli ve incelikle davranarak.',
        rubric: [
          { criterion: 'İpucu ve tahminin eksiksiz ve doğru yazılması', points: 15 },
          { criterion: 'Yalnızca tahminin doğru olması', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 4
      },
      {
        id: 'g5-s2-e2-q2',
        number: 2,
        outcomeCode: 'T.O.5.6',
        title: 'Metnin Yüzey Anlamı (Metnin Konusu)',
        points: 15,
        prompt: 'Okuduğunuz metnin konusunu (yüzey anlamını) belirleyerek bir cümleyle yazınız.',
        expectedAnswer: 'Metnin konusu; Ahmet Usta\'nın tarihi su değirmeninde suyun gücü ve sabırla geleneksel buğday öğütme ustalığıdır.',
        rubric: [
          { criterion: 'Metnin konusunu eksiksiz ve doğru biçimde tek cümleyle belirleme', points: 15 },
          { criterion: 'Konuyu kısmen ifade etme veya eksik bırakma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g5-s2-e2-q3',
        number: 3,
        outcomeCode: 'T.O.5.7',
        title: 'Görsel Ayrıntılarını Belirleme',
        points: 15,
        prompt: 'Ahmet Usta’nın değirmen başında çalıştığı bir görseli incelediğinizde ustanın yüz ifadesi ve çalışma ortamı hakkında hangi iki ayrıntı dikkat çekmelidir?',
        expectedAnswer: '1. Ayrıntı: Ustanın başında kasketi, yüzünde ve önlüğünde beyaz un tozları, dikkatle taşa odaklanmış gözleri.\n2. Ayrıntı: Ahşap çarktan sıçrayan su damlacıkları ve oluktan akan buğday taneleri.',
        rubric: [
          { criterion: 'İki tutarlı görsel ayrıntıyı net olarak belirtme', points: 15 },
          { criterion: 'Tek ayrıntı belirtme', points: 8 },
          { criterion: 'İlgisiz cevap', points: 0 }
        ],
        linesNeeded: 4
      },
      {
        id: 'g5-s2-e2-q4',
        number: 4,
        outcomeCode: 'T.O.5.7',
        title: 'Görselin Vermek İstediği Mesaj',
        points: 15,
        prompt: 'Değirmende suyun gücüyle dönen çarkı ve un öğüten ustayı gösteren resmin vermek istediği mesajı bir cümleyle ifade ediniz.',
        expectedAnswer: 'Geleneksel üretim yöntemleri doğayla uyum içinde çalışarak sabır ve emeğin değerini en güzel şekilde ortaya koyar.',
        rubric: [
          { criterion: 'Doğa, emek ve sabır ilişkisini özetleyen mesaj cümlesi yazma', points: 15 },
          { criterion: 'Kısmi veya dar kapsamlı mesaj yazma', points: 8 },
          { criterion: 'Hatalı mesaj', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g5-s2-e2-q5',
        number: 5,
        outcomeCode: 'T.O.5.15',
        title: 'Metnin Anahtar Kelimelerini Çözümleme',
        points: 20,
        prompt: 'Metinden hareketle metnin konusunu en iyi anlatan iki anahtar kelime yazınız ve bu kelimeleri neden seçtiğinizi metin içeriğiyle ilişkilendirerek belirtiniz.',
        expectedAnswer: '1. Anahtar Kelime: Su değirmeni (Metindeki tüm olayların ve emeğin gerçekleştiği tarihi üretim aracıdır.)\n2. Anahtar Kelime: Emek / Sabır (Ustanın kaliteli un elde etmek için sergilediği temel ahlaki duruştur.)',
        rubric: [
          { criterion: 'İki anahtar kelime belirleyip metinle ilişkisini açıklama', points: 20 },
          { criterion: 'Yalnızca kelimeleri belirtme', points: 10 },
          { criterion: 'İlgisiz kelimeler seçme', points: 0 }
        ],
        linesNeeded: 5
      },
      {
        id: 'g5-s2-e2-q6',
        number: 6,
        outcomeCode: 'T.Y.5.16',
        title: 'Yazım Kuralları (Satır Sonu Bölünmesi)',
        points: 20,
        prompt: `Aşağıdaki kelimeler satır sonuna sığmadığında kısa çizgi (-) ile nasıl bölünebilir? Birer örnek gösteriniz:
a) değirmenin: .......................................
b) sabırla: .......................................`,
        expectedAnswer: 'a) de-ğirmenin veya değir-menin veya değirme-nin\nb) sa-bırla veya sabır-la',
        rubric: [
          { criterion: 'Her iki kelimeyi de heceleme kurallarına göre doğru bölme', points: 20 },
          { criterion: 'Bir kelimeyi doğru bölme', points: 10 },
          { criterion: 'Yanlış bölme', points: 0 }
        ],
        linesNeeded: 4
      }
    ]
  },

  // ==================== SENARYO 3 ====================
  // Senaryo 3 - Sınav 1
  {
    id: 'g5-s3-e1',
    gradeLevel: 5,
    scenarioGroup: 'senaryo-3',
    scenarioGroupTitle: 'MEB Senaryo 3',
    scenarioName: '1. Sınav (Köy Kütüphanesinin Küçük Müdavimleri)',
    examNumber: 1,
    title: 'Köy Kütüphanesinin Küçük Müdavimleri',
    theme: '3. Tema: Okuma Kültürü & Dayanışma',
    targetClass: '5. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Köy Kütüphanesinin Küçük Müdavimleri',
      author: 'Türkçe Ülküsü Yayınları (Özgün Çocuk Metni)',
      source: '5. Sınıf Türkçe Dersi - Kitap Sevgisi',
      content: `Köyün eski muhtarlık odası, geçen ay köylülerin el birliğiyle sıcacık bir kütüphaneye dönüştürüldü. Beşinci sınıf öğrencisi Ayşe ve arkadaşları, okul çıkışında çantalarını bıraktıkları gibi soluğu bu kütüphanede alıyorlardı. Raflarda masal kitaplarından doğa ansiklopedilerine kadar pek çok eser diziliydi. Kütüphaneci Emine Teyze, çocuklara kitapları sevgiyle emanet ederken sayfalarını incitmeden çevirmelerini öğütlerdi. 

Bir gün kasabadan kütüphaneye iki büyük koli yeni kitap bağışı geldi. Kitapların kayıt altına alınıp raflara yerleştirilmesi gerekiyordu. Ayşe ve arkadaşı Tarık hemen kolları sıvadılar. Kitapları önce konularına göre masal, hikâye ve bilim olarak sınıflandırdılar. Ardından yıpranmış kapakları olanları şeffaf kaplama kâğıdıyla kapladılar. Akşamüzeri tüm raflar pırıl pırıl olmuştu. Emine Teyze çocuklara ikram ettiği sıcacık ıhlamurun yanında, "Birlikten kuvvet doğar evlatlarım, sayenizde kitaplar yuvalarına kavuştu." diyerek teşekkür etti.`
    },
    questions: [
      {
        id: 'g5-s3-e1-q1',
        number: 1,
        outcomeCode: 'T.O.5.5',
        title: 'Kelime Anlamı Tahmini',
        points: 15,
        prompt: 'Metinde geçen "öğütlemek" kelimesinin anlamını metnin bağlamından hareketle tahmin ediniz ve bu tahmininizi destekleyen metin içi ipucunu yazınız.',
        expectedAnswer: 'Tahminim: Birine yapması gereken doğru davranışları tavsiye etmek, nasihat vermek.\nMetindeki İpucu: Emine Teyze\'nin çocuklara kitap sayfalarını incitmeden çevirmelerini söylemesi.',
        rubric: [
          { criterion: 'Tahmini ve metin ipucunu doğru yazma', points: 15 },
          { criterion: 'Yalnızca tahmini yazma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g5-s3-e1-q2',
        number: 2,
        outcomeCode: 'T.O.5.6',
        title: 'Metnin Yüzey Anlamı (Metnin Konusu)',
        points: 15,
        prompt: 'Okuduğunuz metnin konusunu (yüzey anlamını) belirleyerek bir cümleyle yazınız.',
        expectedAnswer: 'Metnin konusu; bir dağ köyünde köylülerin ve çocukların el birliğiyle kurup düzenledikleri köy kütüphanesidir.',
        rubric: [
          { criterion: 'Metnin konusunu eksiksiz ve doğru biçimde tek cümleyle belirleme', points: 15 },
          { criterion: 'Konuyu kısmen ifade etme veya eksik bırakma', points: 8 },
          { criterion: 'Eksik veya yanlış cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g5-s3-e1-q3',
        number: 3,
        outcomeCode: 'T.O.5.6',
        title: 'Metnin Yüzey Anlamı (5N1K)',
        points: 15,
        prompt: 'Köy kütüphanesi nerede ve nasıl kurulmuştur? Metinden yararlanarak açıklayınız.',
        expectedAnswer: 'Köyün eski muhtarlık odasında, köylülerin el birliği ve yardımlaşmasıyla kurulmuştur.',
        rubric: [
          { criterion: 'Yeri (eski muhtarlık odası) ve yapılış şeklini (köylülerin el birliğiyle) tam yazma', points: 15 },
          { criterion: 'Yalnızca yerini veya yalnızca el birliği olduğunu yazma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g5-s3-e1-q4',
        number: 4,
        outcomeCode: 'T.O.5.7',
        title: 'Görsel Anlamı Belirleme',
        points: 15,
        prompt: 'Kütüphanede çocukların kitap kapladığı ve rafları düzenlediği bir görselde dayanışmayı gösteren iki beden hareketi veya yüz ifadesi ne olabilir?',
        expectedAnswer: '1. Ayrıntı: Bir çocuğun kitabı tutarken diğerinin kaplama kâğıdını dikkatle yapıştırması, birbirlerine gülümseyerek bakmaları.\n2. Ayrıntı: Raflara kitap uzatan arkadaşına yardım eden çocuğun kol hareketi ve istekli duruşu.',
        rubric: [
          { criterion: 'İki tutarlı görsel ayrıntı yazma', points: 15 },
          { criterion: 'Tek ayrıntı yazma', points: 8 },
          { criterion: 'İlgisiz cevap', points: 0 }
        ],
        linesNeeded: 4
      },
      {
        id: 'g5-s3-e1-q5',
        number: 5,
        outcomeCode: 'T.O.5.15',
        title: 'Anahtar Kelime Çözümleme',
        points: 10,
        prompt: 'Metnin içeriğini yansıtan en önemli anahtar kelimeyi seçiniz ve bu kelimenin metnin konusuyla ilişkisini bir cümleyle açıklayınız.',
        expectedAnswer: 'Anahtar Kelime: Köy kütüphanesi / Kitap sevgisi.\nİlişkisi: Metin, köydeki çocukların ve köylülerin kütüphaneye sahip çıkışını ve kitaplarla kurdukları sıcak bağı anlatmaktadır.',
        rubric: [
          { criterion: 'Doğru anahtar kelime ve metin ilişkisini yazma', points: 10 },
          { criterion: 'Yalnızca kelimeyi yazıp ilişkiyi kuramama', points: 5 },
          { criterion: 'Hatalı kelime', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g5-s3-e1-q6',
        number: 6,
        outcomeCode: 'T.Y.5.13',
        title: 'Söz Varlığıyla Paragraf Yazma',
        points: 15,
        prompt: 'Metinde geçen "birlikten kuvvet doğar" sözünden hareketle, okulunuzda arkadaşlarınızla ortaklaşa yapabileceğiniz bir projeyi anlatan 4-5 cümlelik bir paragraf yazınız.',
        expectedAnswer: 'Okulumuzun bahçesini güzelleştirmek için sınıfça bir çiçek ekme projesi başlatabiliriz. Her öğrenci evinden bir saksı veya çiçek tohumu getirerek bahçede ayrılan alana dikebilir. Görev paylaşımı yaparak bazı arkadaşlarımız sulamayı, bazıları toprağı havalandırmayı üstlenir. Birlikten kuvvet doğduğu için tek başımıza günler sürecek bu çalışma, hep birlikte birkaç saatte tamamlanır ve bahçemiz rengârenk olur.',
        rubric: [
          { criterion: 'Ortak çalışma fikrini 4-5 cümlelik kurallı bir paragrafla anlatma', points: 15 },
          { criterion: 'Cümle sayısı eksik veya düşünce gelişimi zayıf olma', points: 8 },
          { criterion: 'Konu dışı yazı', points: 0 }
        ],
        linesNeeded: 5
      },
      {
        id: 'g5-s3-e1-q7',
        number: 7,
        outcomeCode: 'T.Y.5.16',
        title: 'Yazım ve Noktalama',
        points: 15,
        prompt: `Aşağıdaki cümlelerde yay ayraç ( ) içine gelmesi gereken noktalama işaretlerini (nokta veya kısa çizgi) yazınız:
a) Kütüphane haftası kutlamaları 10( )45'te başladı.
b) Ayşe kütüphanedeki ki( )tapları türlerine göre ayırdı.
c) Okuma yarışmasında okulumuz ilçe 2( )si oldu.`,
        expectedAnswer: 'a) Nokta (.) [Saat ve dakika arasına]\nb) Kısa çizgi (-) [Satır sonu hece bölme]\nc) Nokta (.) [Sıra sayısı bildirme]',
        rubric: [
          { criterion: '3 boşluğu da doğru tamamlama', points: 15 },
          { criterion: '2 boşluğu doğru tamamlama', points: 10 },
          { criterion: '1 boşluğu doğru tamamlama', points: 5 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 4
      }
    ]
  },

  // Senaryo 3 - Sınav 2
  {
    id: 'g5-s3-e2',
    gradeLevel: 5,
    scenarioGroup: 'senaryo-3',
    scenarioGroupTitle: 'MEB Senaryo 3',
    scenarioName: '2. Sınav (Tohumdan Fidana Orman Sevgisi)',
    examNumber: 2,
    title: 'Tohumdan Fidana Orman Sevgisi',
    theme: '3. Tema: Doğa ve Çevre Bilinci',
    targetClass: '5. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Tohumdan Fidana Orman Sevgisi',
      author: 'Türkçe Ülküsü Yayınları (Özgün Çocuk Metni)',
      source: '5. Sınıf Türkçe Dersi - Ağaçlandırma ve Doğa',
      content: `Sonbahar yağmurlarıyla ıslanan toprak, fidan dikimi için en elverişli hâle gelmişti. 5-A sınıfı öğrencileri, Orman Haftası kapsamında okulun arka tarafındaki çıplak yamacı yeşillendirmek için bir etkinlik düzenledi. Orman mühendisi Kemal Bey, öğrencilere çam ve meşe fidanlarının nasıl dikileceğini uygulamalı olarak gösterdi. 

Kemal Bey, "Fidanın kök boğazı toprak hizasında olmalı, çukuru ne çok derin ne de sığ kazmalıyız." diyerek öğrencileri uyardı. Öğrenciler ikişerli gruplara ayrıldılar. Biri kürekle uygun derinlikte çukur açarken diğeri fidanı köklerine zarar vermeden çukura yerleştirdi. Toprağı fidanın etrafına doldurup ayaklarıyla hafifçe bastırarak sabitlediler. En sonunda her fidana bolca can suyu verdiler. Birkaç saat içinde dikilen elli fidan, geleceğin yemyeşil koruluğunun ilk müjdecisi oldu.`
    },
    questions: [
      {
        id: 'g5-s3-e2-q1',
        number: 1,
        outcomeCode: 'T.O.5.5',
        title: 'Kelime Anlamı Tahmini',
        points: 15,
        prompt: 'Metinde geçen "can suyu" ifadesinin anlamını metnin bağlamından hareketle tahmin ediniz ve bu tahmini yapmanızı sağlayan ipucunu belirtiniz.',
        expectedAnswer: 'Tahminim: Fidan dikildikten hemen sonra tutunması ve yaşaması için verilen ilk su.\nİpucu: Fidan dikim işleminin en son aşamasında fidanların diplerine bolca su verilmesi.',
        rubric: [
          { criterion: 'Tahmini ve metin içi ipucunu eksiksiz yazma', points: 15 },
          { criterion: 'Yalnızca tahmini yazma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g5-s3-e2-q2',
        number: 2,
        outcomeCode: 'T.O.5.6',
        title: 'Metnin Yüzey Anlamı (Metnin Konusu)',
        points: 15,
        prompt: 'Okuduğunuz metnin konusunu (yüzey anlamını) belirleyerek bir cümleyle yazınız.',
        expectedAnswer: 'Metnin konusu; öğrencilerin öğretmenleri ve orman mühendisi eşliğinde tepeye fidan dikerek doğayı yeşillendirme etkinliğidir.',
        rubric: [
          { criterion: 'Metnin konusunu eksiksiz ve doğru biçimde tek cümleyle belirleme', points: 15 },
          { criterion: 'Konuyu kısmen ifade etme veya eksik bırakma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g5-s3-e2-q3',
        number: 3,
        outcomeCode: 'T.O.5.6',
        title: 'Metnin Yüzey Anlamı (İş Bölümü)',
        points: 15,
        prompt: 'İkişerli gruplara ayrılan öğrencilerin fidan dikiminde yaptıkları iş bölümünü sırasıyla açıklayınız.',
        expectedAnswer: 'Öğrencilerden biri kürekle çukuru kazarken diğeri fidanı köklerine zarar vermeden çukura yerleştirmiş, ardından toprağı doldurup sabitlemiş ve can suyu vermişlerdir.',
        rubric: [
          { criterion: 'İş bölümünün adımlarını eksiksiz açıklama', points: 15 },
          { criterion: 'İş bölümünü eksik veya genel ifadelerle anlatma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g5-s3-e2-q4',
        number: 4,
        outcomeCode: 'T.O.5.7',
        title: 'Görsel Anlamı',
        points: 15,
        prompt: 'Fidan dikme etkinliğini anlatan bir fotoğrafta çocukların doğaya ve yaptıkları işe sevgisini gösteren iki görsel ayrıntı ne olabilir?',
        expectedAnswer: '1. Ayrıntı: Çocukların elleri çamurlu olmasına rağmen yüzlerindeki mutlu gülümseme.\n2. Ayrıntı: Fidanı kırmamak için iki elleriyle özenle ve sevgiyle kavramaları.',
        rubric: [
          { criterion: 'İki görsel ayrıntıyı doğru yazma', points: 15 },
          { criterion: 'Tek ayrıntı yazma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 4
      },
      {
        id: 'g5-s3-e2-q5',
        number: 5,
        outcomeCode: 'T.O.5.15',
        title: 'Anahtar Kelime Çözümleme',
        points: 10,
        prompt: 'Metnin içeriğini yansıtan iki anahtar kelime yazınız.',
        expectedAnswer: 'Fidan dikimi, Doğa sevgisi (veya Orman Haftası, Ağaçlandırma).',
        rubric: [
          { criterion: 'İki uygun anahtar kelime yazma', points: 10 },
          { criterion: 'Tek anahtar kelime yazma', points: 5 },
          { criterion: 'Hatalı kelimeler', points: 0 }
        ],
        linesNeeded: 2
      },
      {
        id: 'g5-s3-e2-q6',
        number: 6,
        outcomeCode: 'T.Y.5.13',
        title: 'Söz Varlığıyla Paragraf Yazma',
        points: 15,
        prompt: 'Gelecek nesillere temiz ve yeşil bir dünya bırakmak için ağaç dikmenin önemini anlatan 4-5 cümlelik bir tavsiye paragrafı yazınız.',
        expectedAnswer: 'Ağaçlar dünyamızın akciğerleridir ve havamızı temizleyen en büyük dostlarımızdır. Her fidan, erozyonu önler, kuşlara yuva olur ve kuraklıkla mücadele eder. Hayatımız boyunca en az birkaç fidan dikerek doğaya olan borcumuzu ödemeliyiz. Diktiğimiz her fidan, gelecekte çocuklarımızın gölgesinde dinleneceği bir umut yeşertir.',
        rubric: [
          { criterion: 'Ağaç dikmenin önemini 4-5 cümlelik akıcı bir tavsiye paragrafıyla anlatma', points: 15 },
          { criterion: 'Kısmi anlatım veya cümle sayısı azlığı', points: 8 },
          { criterion: 'Konu dışı yazı', points: 0 }
        ],
        linesNeeded: 5
      },
      {
        id: 'g5-s3-e2-q7',
        number: 7,
        outcomeCode: 'T.Y.5.16',
        title: 'Yazım ve Noktalama',
        points: 15,
        prompt: `Aşağıdaki cümlelerde yay ayraç ( ) içine nokta (.) veya kısa çizgi (-) koyunuz:
a) Fidan dikme etkinliği saat 11( )00'de başladı.
b) Öğrenciler meşe fidan( )larını sırayla diktiler.
c) Okulumuz çevre yarışmasında 1( ) oldu.`,
        expectedAnswer: 'a) Nokta (.)\nb) Kısa çizgi (-)\nc) Nokta (.)',
        rubric: [
          { criterion: '3 boşluğu da doğru yapma', points: 15 },
          { criterion: '2 boşluğu doğru yapma', points: 10 },
          { criterion: '1 boşluğu doğru yapma', points: 5 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 4
      }
    ]
  },

  // ==================== SENARYO 4 ====================
  // Senaryo 4 - Sınav 1
  {
    id: 'g5-s4-e1',
    gradeLevel: 5,
    scenarioGroup: 'senaryo-4',
    scenarioGroupTitle: 'MEB Senaryo 4',
    scenarioName: '1. Sınav (Kukla Atölyesinde Birlik)',
    examNumber: 1,
    title: 'Kukla Atölyesinde Birlik',
    theme: '4. Tema: Sanat ve İletişim',
    targetClass: '5. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Kukla Atölyesinde Birlik',
      author: 'Türkçe Ülküsü Yayınları (Özgün Sanat Metni)',
      source: '5. Sınıf Türkçe Dersi - Yaratıcılık ve İletişim',
      content: `Hafta sonu okul kulübünde bir araya gelen altı arkadaş, geri dönüşüm malzemelerinden bir gölge oyunu ve el kuklası sahnesi kurmaya karar verdi. İlk dakikalarda herkes kendi istediği kuklayı yapmaya çalışınca masada büyük bir kargaşa çıktı. Kimi karton kesiyor, kimi kumaş arıyor, kimisi de dekor kutusunu boyuyordu. Bu dağınıklık yüzünden hiçbir kukla tamamlanamadı. 

Grup sözcüsü Eren, "Arkadaşlar, böyle devam edersek gösteriyi yetiştiremeyiz. Önce bir plan yapalım." dedi. Yapılacak işleri kâğıda yazdılar. İki kişi kuklaların gövdelerini çorap ve düğmelerden dikti. Diğer iki kişi eski ayakkabı kutusundan kukla sahnesi yaptı. Kalan iki arkadaş ise kuklaların oynatılacağı metni kaleme aldı. İş bölümü ve düzenli iletişim sayesinde günün sonunda hem rengârenk kuklalar hem de harika bir gösteri sahnesi ortaya çıktı.`
    },
    questions: [
      {
        id: 'g5-s4-e1-q1',
        number: 1,
        outcomeCode: 'T.O.5.6',
        title: 'Metnin Yüzey Anlamı (Metnin Konusu)',
        points: 15,
        prompt: 'Okuduğunuz metnin konusunu (yüzey anlamını) belirleyerek bir cümleyle yazınız.',
        expectedAnswer: 'Metnin konusu; çocukların tiyatro kulübünde kukla yaparken yaşadıkları kargaşayı iş bölümü ve planlama ile çözmeleridir.',
        rubric: [
          { criterion: 'Metnin konusunu eksiksiz ve doğru biçimde tek cümleyle belirleme', points: 15 },
          { criterion: 'Konuyu kısmen ifade etme veya eksik bırakma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g5-s4-e1-q2',
        number: 2,
        outcomeCode: 'T.O.5.6',
        title: 'Metnin Yüzey Anlamı (Çözüm Yolu)',
        points: 15,
        prompt: 'Eren’in önerisiyle çocuklar işleri yoluna koymak için hangi somut adımı atmışlardır?',
        expectedAnswer: 'Önce yapılacak işleri bir kâğıda yazıp plan yapmışlar ve ikişerli gruplar hâlinde görev paylaşımı (iş bölümü) yapmışlardır.',
        rubric: [
          { criterion: 'Plan yapma ve görev paylaşımı adımlarını eksiksiz belirtme', points: 15 },
          { criterion: 'Eksik adım yazma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g5-s4-e1-q3',
        number: 3,
        outcomeCode: 'T.O.5.7',
        title: 'Görsel Anlam (İlk Durum vs Son Durum)',
        points: 15,
        prompt: 'Atölyenin ilk dakikalarındaki kargaşayı gösteren bir çizimde masanın ve çocukların durumunu anlatan iki ayrıntı yazınız.',
        expectedAnswer: '1. Ayrıntı: Masanın üstünde üst üste yığılmış kartonlar, saçılmış düğmeler ve devrilmiş boya kutuları.\n2. Ayrıntı: Çocukların şaşkın ve telaşlı yüz ifadeleri, birbirine aynı anda bir şeyler anlatmaya çalışmaları.',
        rubric: [
          { criterion: 'İki tutarlı görsel ayrıntıyı yazma', points: 15 },
          { criterion: 'Tek ayrıntı yazma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 4
      },
      {
        id: 'g5-s4-e1-q4',
        number: 4,
        outcomeCode: 'T.O.5.7',
        title: 'Görsel Anlam (Başarı ve Birlik)',
        points: 15,
        prompt: 'Kukla sahnesinin tamamlandığı anı gösteren görselin vermek istediği ana mesajı tek bir cümleyle yazınız.',
        expectedAnswer: 'Planlı çalışmak ve iş birliği yapmak, en zor görünen görevleri bile başarıyla ve neşeyle sonuçlandırır.',
        rubric: [
          { criterion: 'Plan ve iş birliğinin başarı getirdiğini vurgulayan mesaj cümlesi yazma', points: 15 },
          { criterion: 'Mesajı yüzeysel ifade etme', points: 8 },
          { criterion: 'İlgisiz cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g5-s4-e1-q5',
        number: 5,
        outcomeCode: 'T.O.5.20',
        title: 'Söz Varlığı Geliştirme (Kavram ve Davranış)',
        points: 10,
        prompt: 'Metinde geçen "iş birliği" ve "geri dönüşüm" kavramlarını metindeki çocukların hangi davranışlarıyla eşleştirebilirsiniz? Kısaca açıklayınız.',
        expectedAnswer: 'İş birliği: Çocukların görevleri ikişerli paylaşarak birbirine yardım etmesi.\nGeri dönüşüm: Atık karton, çorap ve düğmeleri çöpe atmayıp kukla ve sahneye dönüştürmeleri.',
        rubric: [
          { criterion: 'Her iki kavramı da metindeki somut davranışla doğru eşleştirme', points: 10 },
          { criterion: 'Bir kavramı doğru eşleştirme', points: 5 },
          { criterion: 'Hatalı eşleştirme', points: 0 }
        ],
        linesNeeded: 4
      },
      {
        id: 'g5-s4-e1-q6',
        number: 6,
        outcomeCode: 'T.Y.5.13',
        title: 'Söz Varlığını Zenginleştirme (Tavsiye Paragrafı)',
        points: 15,
        prompt: 'Kukla gösterisi veya grup ödevi hazırlayacak başka bir öğrenci topluluğuna tavsiyelerde bulunan 4-5 cümlelik bir rehber paragraf yazınız.',
        expectedAnswer: 'Grup çalışmalarına başlamadan önce mutlaka bir plan hazırlamalı ve yapılacak işleri sıraya koymalısınız. Herkesin yeteneğine uygun bir görev üstlenmesi işlerin aksamasını önler. Çalışırken sürekli iletişim hâlinde olmak ve zorlanan arkadaşlarımıza destek vermek çok önemlidir. Ayrıca eldeki malzemeleri tasarruflu kullanarak yaratıcı çözümler üretebilirsiniz.',
        rubric: [
          { criterion: '4-5 cümlelik tutarlı ve yapıcı bir tavsiye paragrafı yazma', points: 15 },
          { criterion: 'Düşünce gelişimi zayıf veya cümle sayısı yetersiz', points: 8 },
          { criterion: 'Konu dışı yazı', points: 0 }
        ],
        linesNeeded: 5
      },
      {
        id: 'g5-s4-e1-q7',
        number: 7,
        outcomeCode: 'T.Y.5.16',
        title: 'Yazım ve Noktalama Kuralları',
        points: 15,
        prompt: `Aşağıdaki kelimelerin satır sonuna sığmadığında kısa çizgi (-) ile nasıl bölüneceğini yazınız:
a) kuklaların: .......................................
b) gösterisini: .......................................
c) kütüphanede saat 13( )15'te toplandık cümlesindeki yay ayraç içine hangi işaret gelmelidir?`,
        expectedAnswer: 'a) kuk-laların veya kukla-ların veya kuklala-rın\nb) gös-terisini veya gösteri-sini veya gösterisi-ni\nc) Nokta (.)',
        rubric: [
          { criterion: '3 bölümün tamamını doğru yapma', points: 15 },
          { criterion: '2 bölümü doğru yapma', points: 10 },
          { criterion: '1 bölümü doğru yapma', points: 5 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 4
      }
    ]
  },

  // Senaryo 4 - Sınav 2
  {
    id: 'g5-s4-e2',
    gradeLevel: 5,
    scenarioGroup: 'senaryo-4',
    scenarioGroupTitle: 'MEB Senaryo 4',
    scenarioName: '2. Sınav (Teneffüsteki Saklambaç Neşesi)',
    examNumber: 2,
    title: 'Teneffüsteki Saklambaç Neşesi',
    theme: '4. Tema: Oyun Kültürü & Arkadaşlık',
    targetClass: '5. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Teneffüsteki Saklambaç Neşesi',
      author: 'Türkçe Ülküsü Yayınları (Özgün Çocuk Metni)',
      source: '5. Sınıf Türkçe Dersi - Geleneksel Oyunlar',
      content: `Uzun teneffüs zili çalar çalmaz okul bahçesi cıvıl cıvıl çocuk sesleriyle doldu. 5. sınıf öğrencileri okulun koca çınar ağacının altında toplandılar. O gün saklambaç oynamaya karar vermişlerdi. Önce tekerleme söyleyerek ebeyi belirlediler. Ebe seçilen Can, yüzünü çınarın gövdesine yaslayıp gözlerini yumdu ve yüksek sesle kırka kadar saymaya başladı: "Önüm, arkam, sağım, solum sobe; saklanmayan ebe!"

Diğer çocuklar bahçedeki kamelyaların arkasına, spor salonunun köşesine ve bankların altına saklandılar. Can saymayı bitirip gözlerini açtığında dikkatle etrafı gözlemledi. Kamelyanın kenarından uzanan sarı atkıyı fark edip "Sobe Elif!" diyerek ağaca dokundu. Ancak oyun sırasında küçük Burak koşarken ayağı takılıp düştü. Can ve Elif oyunu hemen bırakıp Burak’ın yanına koştular, dizindeki tozu silkeleyip kalkmasına yardım ettiler. Oyun kuralları önemliydi ama arkadaşlık her şeyden önce gelirdi.`
    },
    questions: [
      {
        id: 'g5-s4-e2-q1',
        number: 1,
        outcomeCode: 'T.O.5.6',
        title: 'Metnin Yüzey Anlamı (Metnin Konusu)',
        points: 15,
        prompt: 'Okuduğunuz metnin konusunu (yüzey anlamını) belirleyerek bir cümleyle yazınız.',
        expectedAnswer: 'Metnin konusu; çocukların teneffüste okul bahçesinde saklambaç oynarken arkadaşları düştüğünde oyunu bırakıp ona yardım etmeleridir.',
        rubric: [
          { criterion: 'Metnin konusunu eksiksiz ve doğru biçimde tek cümleyle belirleme', points: 15 },
          { criterion: 'Konuyu kısmen ifade etme veya eksik bırakma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g5-s4-e2-q2',
        number: 2,
        outcomeCode: 'T.O.5.6',
        title: 'Metnin Yüzey Anlamı (Öncelikler)',
        points: 15,
        prompt: 'Burak düştüğünde Can ve Elif’in gösterdiği davranış metnin ana iletisiyle nasıl örtüşmektedir? Açıklayınız.',
        expectedAnswer: 'Oyunu ve sobelemeyi hemen bırakıp yaralanan arkadaşlarına yardım etmişlerdir. Bu davranış, hiçbir oyunun veya kuralın insan sağlığı ve arkadaşlıktan daha değerli olamayacağını göstermektedir.',
        rubric: [
          { criterion: 'Davranışı ve iletilen mesajı tam ilişkilendirme', points: 15 },
          { criterion: 'Kısmi açıklama', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g5-s4-e2-q3',
        number: 3,
        outcomeCode: 'T.O.5.7',
        title: 'Görsel Anlamı Belirleme',
        points: 15,
        prompt: 'Can ve Elif’in yere düşen Burak’a yardım ettikleri sahneyi canlandıran görselde çocukların yüz ifadeleri ve hareketleri nasıl olmalıdır? İki ayrıntı yazınız.',
        expectedAnswer: '1. Ayrıntı: Can ve Elif’in yüzlerinde endişeli ama şefkatli bir ifadeyle Burak’ın koluna girmeleri.\n2. Ayrıntı: Burak’ın arkadaşlarının desteğiyle ayağa kalkarken yüzünde beliren güven ve tebessüm.',
        rubric: [
          { criterion: 'İki görsel ayrıntıyı doğru yazma', points: 15 },
          { criterion: 'Tek ayrıntı yazma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 4
      },
      {
        id: 'g5-s4-e2-q4',
        number: 4,
        outcomeCode: 'T.O.5.7',
        title: 'Görselin Ana Mesajı',
        points: 15,
        prompt: 'Bu sahnenin vermek istediği ana mesajı bir cümleyle yazınız.',
        expectedAnswer: 'Gerçek arkadaşlık, oyunun kazanma hırsını bir kenara bırakıp zor anında dostunun elinden tutabilmektir.',
        rubric: [
          { criterion: 'Arkadaşlık ve yardımlaşmayı özetleyen etkili bir mesaj cümlesi yazma', points: 15 },
          { criterion: 'Mesajı yüzeysel yazma', points: 8 },
          { criterion: 'Hatalı mesaj', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g5-s4-e2-q5',
        number: 5,
        outcomeCode: 'T.O.5.20',
        title: 'Söz Varlığı Geliştirme (Cümle Kurma)',
        points: 10,
        prompt: 'Metinde geçen "ebe" ve "kural" sözcüklerinin anlamlarını düşününüz. "Kural" sözcüğünü okul hayatınızla ilgili anlamlı bir cümlede kullanınız.',
        expectedAnswer: 'Örnek Cümle: Koridorlarda koşmamak ve merdivenlerden sağdan inmek hepimizin uyması gereken önemli bir okul kuralıdır.',
        rubric: [
          { criterion: 'Sözcüğü anlamına uygun ve okul yaşamıyla ilişkili kurallı bir cümlede kullanma', points: 10 },
          { criterion: 'Cümle kurup bağlamı zayıf bırakma', points: 5 },
          { criterion: 'Yanlış kullanım', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g5-s4-e2-q6',
        number: 6,
        outcomeCode: 'T.Y.5.13',
        title: 'Söz Varlığını Zenginleştirerek Paragraf Yazma',
        points: 15,
        prompt: 'Geleneksel sokak oyunlarının çocuklara kazandırdığı fiziksel ve sosyal faydaları anlatan 4-5 cümlelik bir bilgilendirici paragraf yazınız.',
        expectedAnswer: 'Geleneksel sokak oyunları çocukların hem bedenen güçlenmesini hem de sosyalleşmesini sağlar. Saklambaç, körebe ve mendil kapmaca gibi oyunlar sayesinde çocuklar koşar, hızlı karar verir ve hareket ederler. Aynı zamanda bu oyunlar paylaşmayı, kurallara saygı duymayı ve yenilgiyi olgunlukla karşılamayı öğretir. Ekran başında saatlerce oturmak yerine sokakta oynamak gerçek dostlukların kapısını aralar.',
        rubric: [
          { criterion: 'Fiziksel ve sosyal faydaları 4-5 cümlelik akıcı bir paragrafla açıklama', points: 15 },
          { criterion: 'Yetersiz cümle veya tek taraflı anlatım', points: 8 },
          { criterion: 'Konu dışı yazı', points: 0 }
        ],
        linesNeeded: 5
      },
      {
        id: 'g5-s4-e2-q7',
        number: 7,
        outcomeCode: 'T.Y.5.16',
        title: 'Yazım ve Noktalama',
        points: 15,
        prompt: `Aşağıdaki kelimelerin satır sonuna sığmadığında kısa çizgi (-) ile doğru bölünüşünü yazınız:
a) saklambaç: .......................................
b) tekerleme: .......................................
c) Teneffüs saat 10( )15'te bitti cümlesindeki boşluğa hangi işaret gelmelidir?`,
        expectedAnswer: 'a) sak-lambaç veya saklam-baç\nb) te-kerleme veya teker-leme veya tekerle-me\nc) Nokta (.)',
        rubric: [
          { criterion: '3 bölümün tamamı doğru', points: 15 },
          { criterion: '2 bölüm doğru', points: 10 },
          { criterion: '1 bölüm doğru', points: 5 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 4
      }
    ]
  },

  // ==================== SENARYO 5 ====================
  // Senaryo 5 - Sınav 1
  {
    id: 'g5-s5-e1',
    gradeLevel: 5,
    scenarioGroup: 'senaryo-5',
    scenarioGroupTitle: 'MEB Senaryo 5',
    scenarioName: '1. Sınav (Atatürk ve Yalova Yürüyen Köşk)',
    examNumber: 1,
    title: 'Atatürk ve Yalova Yürüyen Köşk',
    theme: '5. Tema: Atatürk ve Doğa Sevgisi',
    targetClass: '5. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Atatürk ve Yalova Yürüyen Köşk',
      author: 'Türkçe Ülküsü Yayınları (Özgün Tarih Metni)',
      source: '5. Sınıf Türkçe Dersi - Millî Mücadele ve Atatürk',
      content: `Gazi Mustafa Kemal Atatürk, 1929 yılında Yalova Millet Çiftliği’ni ziyaret ederken deniz kıyısındaki görkemli bir çınar ağacından çok etkilendi. Çınarın hemen yanına küçük, iki katlı ahşap bir köşk yapılmasını istedi. Aradan bir yıl geçti. Çınarın gür dalları büyüyüp köşkün çatısına ve pencerelerine değmeye başladı. Bahçıvan, köşkün zarar görmemesi için ağacın dallarını kesmek üzere Atatürk’ten izin istedi.

Atatürk bahçıvanın bu talebini kararlılıkla reddetti. "Ağaç kesilmeyecek, köşk kaydırılacak!" emrini verdi. İstanbul’dan getirilen mühendisler ve ustalar, köşkün temellerini dikkatle kazdılar. Binanın altına tramvay rayları yerleştirdiler. Atatürk’ün bizzat başında beklediği çalışmalar sonucunda köşk, tek bir tahtasına bile zarar verilmeden raylar üzerinde yaklaşık beş metre doğuya kaydırıldı. Asırlık ulu çınar da köşk de kurtuldu. Bu olay tarihe "Yürüyen Köşk" efsanesi olarak geçti ve Atatürk’ün doğaya olan derin saygısının simgesi oldu.`
    },
    questions: [
      {
        id: 'g5-s5-e1-q1',
        number: 1,
        outcomeCode: 'T.O.5.5',
        title: 'Kelime Anlamı Tahmini ve Ön Bilgi',
        points: 15,
        prompt: 'Metinde geçen "görkemli" kelimesinin anlamını metnin bağlamından hareketle tahmin ediniz. Bu tahmini yaparken metindeki hangi ifadeden ve ön bilginizden yararlandığınızı yazınız.',
        expectedAnswer: 'Tahminim: Büyüklüğü, heybeti ve duruşuyla hayranlık uyandıran, gösterişli.\nMetindeki İpucu: Çınarın asırlık ulu bir ağaç olması, geniş dallarının köşkü sarması.\nÖn Bilgim: Doğadaki devasa ve yaşlı ağaçların insanı etkileyen heybetli görüntüsü.',
        rubric: [
          { criterion: 'Tahmini, metin ipucunu ve ön bilgi ilişkisini eksiksiz yazma', points: 15 },
          { criterion: 'Yalnızca tahmini yazma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 4
      },
      {
        id: 'g5-s5-e1-q2',
        number: 2,
        outcomeCode: 'T.O.5.6',
        title: 'Metnin Yüzey Anlamı (Metnin Konusu)',
        points: 15,
        prompt: 'Okuduğunuz metnin konusunu (yüzey anlamını) belirleyerek bir cümleyle yazınız.',
        expectedAnswer: 'Metnin konusu; Atatürk\'ün bir çınar ağacının dalını kestirmemek için Yalova\'daki köşkü raylar üzerinde kaydırtması ve gösterdiği çevre bilincidir.',
        rubric: [
          { criterion: 'Metnin konusunu eksiksiz ve doğru biçimde tek cümleyle belirleme', points: 15 },
          { criterion: 'Konuyu kısmen ifade etme veya eksik bırakma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g5-s5-e1-q3',
        number: 3,
        outcomeCode: 'T.O.5.6',
        title: 'Metnin Yüzey Anlamı (Olayın Gelişimi)',
        points: 15,
        prompt: 'Atatürk\'ün emriyle köşkün kaydırılma işlemi mühendisler tarafından teknik olarak nasıl gerçekleştirilmiştir?',
        expectedAnswer: 'Köşkün temelleri dikkatle kazılmış, binanın altına tramvay rayları yerleştirilmiş ve köşk raylar üzerinde yaklaşık beş metre doğuya kaydırılmıştır.',
        rubric: [
          { criterion: 'Temel kazılması, ray yerleştirilmesi ve ray üzerinde kaydırılmasını eksiksiz yazma', points: 15 },
          { criterion: 'Yalnızca raylarla kaydırıldı deme', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g5-s5-e1-q4',
        number: 4,
        outcomeCode: 'T.O.5.7',
        title: 'Görsel Anlamı Belirleme',
        points: 15,
        prompt: 'Atatürk’ün raylar üzerinde yürütülen köşkü izlediği tarihi fotoğrafı canlandırdığınızda, Atatürk’ün duruşunu ve çevresindeki mühendislerin hareketlerini yansıtan iki ayrıntı ne olabilir?',
        expectedAnswer: '1. Ayrıntı: Atatürk’ün elleri cebinde veya bastonuna dayanmış, büyük bir dikkat ve kararlılıkla raylara odaklanan asil bakışı.\n2. Ayrıntı: Mühendislerin ve ustaların kollarını sıvayarak manivelalarla köşkü milim milim ilerletmeye çalışmaları.',
        rubric: [
          { criterion: 'İki görsel ayrıntıyı tutarlı ve canlı şekilde yazma', points: 15 },
          { criterion: 'Tek ayrıntı yazma', points: 8 },
          { criterion: 'İlgisiz cevap', points: 0 }
        ],
        linesNeeded: 4
      },
      {
        id: 'g5-s5-e1-q5',
        number: 5,
        outcomeCode: 'T.O.5.20',
        title: 'Söz Varlığı Geliştirme (Cümlede Kullanma)',
        points: 10,
        prompt: 'Metinde geçen "fedakârlık" ve "çevre bilinci" kavramlarından hareketle, "korumak" kelimesini günlük yaşamınızla ilgili bir cümlede kullanınız.',
        expectedAnswer: 'Örnek Cümle: Mahallemizdeki parkın temiz kalması için yerlere çöp atmayan arkadaşlarımla birlikte çevremizi korumaya özen gösteriyoruz.',
        rubric: [
          { criterion: 'Sözcüğü anlamına uygun ve günlük yaşam bağlamında kurallı kullanma', points: 10 },
          { criterion: 'Basit veya bağlamsız cümle kurma', points: 5 },
          { criterion: 'Yanlış kullanım', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g5-s5-e1-q6',
        number: 6,
        outcomeCode: 'T.Y.5.3',
        title: 'Yazıda İçerik ve Yapı Seçimi',
        points: 15,
        prompt: `Bir okul panosu için "Yürüyen Köşk Olayı"nı bilmeyen bir öğrenciye aktarmak üzere bir yazı hazırlayacaksınız.
Aşağıdaki iki anlatım yolundan hangisini seçersiniz? Seçiminizi işaretleyip nedenini bir cümleyle açıklayınız:
[ ] Olayın başından sonuna kadar aşamalarını sırayla açıklayan bilgilendirici bir anlatım yolu
[ ] Yalnızca Yalova sahilinin manzarasını anlatan betimleyici bir anlatım yolu

Seçimimin Nedeni: .....................................................................................................................................`,
        expectedAnswer: 'İlk seçenek işaretlenmelidir ([X] Olayın başından sonuna kadar aşamalarını sırayla açıklayan bilgilendirici anlatım yolu).\nNedeni: Yazının amacı olayı hiç bilmeyen birine ağacın nasıl kurtarıldığını ve köşkün raylarla nasıl yürütüldüğünü öğretmektir; sahil manzarası anlatmak bu amaca hizmet etmez.',
        rubric: [
          { criterion: 'Doğru seçeneği işaretleyip amaca uygun gerekçeyi net şekilde yazma', points: 15 },
          { criterion: 'Yalnızca doğru seçeneği işaretleyip gerekçeyi yazmama', points: 7 },
          { criterion: 'Yanlış seçenek veya ilgisiz gerekçe', points: 0 }
        ],
        linesNeeded: 4
      },
      {
        id: 'g5-s5-e1-q7',
        number: 7,
        outcomeCode: 'T.Y.5.13',
        title: 'Söz Varlığıyla Paragraf Yazma',
        points: 15,
        prompt: 'Atatürk\'ün bir ağaç dalını bile kestirmemek için köşkü yürütmesinden yola çıkarak doğaya saygının önemini anlatan 4-5 cümlelik bir düşünce yazısı yazınız.',
        expectedAnswer: 'Doğa, insanlığa emanet edilmiş en büyük zenginliktir. Bir ağacın yetişmesi onlarca yıl alırken onu kesmek sadece dakikalar sürer. Atatürk’ün bir çınar dalını kurtarmak için koca bir köşkü raylar üzerinde kaydırması, doğaya verilen değerin tüm dünyaya eşsiz bir örneğidir. Bizler de onun izinden giderek çevremizdeki tek bir yeşil yaprağı bile korumalı, doğayla savaşmak yerine onunla uyum içinde yaşamalıyız.',
        rubric: [
          { criterion: 'Metindeki olaydan hareketle 4-5 cümlelik etkili ve akıcı bir düşünce paragrafı yazma', points: 15 },
          { criterion: 'Düşünce gelişimi zayıf veya cümle sayısı yetersiz', points: 8 },
          { criterion: 'Konu dışı yazı', points: 0 }
        ],
        linesNeeded: 5
      }
    ]
  },

  // Senaryo 5 - Sınav 2
  {
    id: 'g5-s5-e2',
    gradeLevel: 5,
    scenarioGroup: 'senaryo-5',
    scenarioGroupTitle: 'MEB Senaryo 5',
    scenarioName: '2. Sınav (Bozkırda Bir Vaha: Orman Çiftliği)',
    examNumber: 2,
    title: 'Bozkırda Bir Vaha: Orman Çiftliği',
    theme: '5. Tema: Bilim, Tarım ve Yurt Sevgisi',
    targetClass: '5. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Bozkırda Bir Vaha: Orman Çiftliği',
      author: 'Türkçe Ülküsü Yayınları (Özgün Tarih Metni)',
      source: '5. Sınıf Türkçe Dersi - Üretim ve Vatan Sevgisi',
      content: `Cumhuriyet’in ilk yıllarında Ankara, kurak ve ağaçsız bir bozkırdı. Atatürk, başkentin hemen yakınında modern bir çiftlik kurmak istedi. Yanındaki uzmanlar arazinin bataklık ve çorak olduğunu, burada hiçbir şey yetişmeyeceğini söylediler. Atatürk ise gülümseyerek, "İşte aradığımız yer tam da burasıdır! Biz burada zor olanı başaracağız ve Türk çiftçisine örnek olacağız." dedi.

Atatürk kolları sıvadı, traktörün direksiyonuna bizzat geçti. Bataklıklar kurutuldu, binlerce fidan dikildi. Bilimsel tarım yöntemleri ve modern makineler kullanılarak kısa sürede meyve bahçeleri, süt tesisleri ve arı kovanları kuruldu. Kıraç bozkır, cıvıl cıvıl kuş seslerinin yankılandığı yemyeşil bir vahaya dönüştü. Atatürk Orman Çiftliği, milletin azmi ve bilimin gücü birleştiğinde aşılamayacak hiçbir engelin olmadığını tüm dünyaya kanıtladı.`
    },
    questions: [
      {
        id: 'g5-s5-e2-q1',
        number: 1,
        outcomeCode: 'T.O.5.5',
        title: 'Kelime Anlamı Tahmini ve İpucu',
        points: 15,
        prompt: 'Metinde geçen "vaha" sözcüğünün anlamını metnin bağlamından hareketle tahmin ediniz ve tahmini yaparken metindeki hangi zıt durumdan yararlandığınızı açıklayınız.',
        expectedAnswer: 'Tahminim: Çöl veya kurak arazilerin ortasında su bulunan, yeşillik ve verimli alan.\nMetindeki Zıtlık: Ankara’nın kurak, ağaçsız ve çorak bir bozkır olmasının karşısında çiftliğin meyve bahçeleriyle dolu yemyeşil bir yere dönüşmesi.',
        rubric: [
          { criterion: 'Tahmini ve metindeki zıtlık ipucunu eksiksiz yazma', points: 15 },
          { criterion: 'Yalnızca tahmini yazma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 4
      },
      {
        id: 'g5-s5-e2-q2',
        number: 2,
        outcomeCode: 'T.O.5.6',
        title: 'Metnin Yüzey Anlamı (Metnin Konusu)',
        points: 15,
        prompt: 'Okuduğunuz metnin konusunu (yüzey anlamını) belirleyerek bir cümleyle yazınız.',
        expectedAnswer: 'Metnin konusu; Atatürk\'ün Ankara\'daki bataklık ve çorak arazide modern yöntemlerle Orman Çiftliği kurarak Türk milletine örnek olmasıdır.',
        rubric: [
          { criterion: 'Metnin konusunu eksiksiz ve doğru biçimde tek cümleyle belirleme', points: 15 },
          { criterion: 'Konuyu kısmen ifade etme veya eksik bırakma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g5-s5-e2-q3',
        number: 3,
        outcomeCode: 'T.O.5.6',
        title: 'Metnin Yüzey Anlamı (Atatürk’ün Amacı)',
        points: 15,
        prompt: 'Atatürk arazinin verimsiz olduğunu bile bile çiftliği burada kurmakta neden ısrar etmiştir? Metinden hareketle açıklayınız.',
        expectedAnswer: 'Zor olanı başararak Türk çiftçisine bilimsel yöntemlerle çorak arazilerin bile nasıl verimli hâle getirileceğini örnek olarak göstermek istemiştir.',
        rubric: [
          { criterion: 'Zoru başarma ve çiftçiye örnek olma amacını eksiksiz belirtme', points: 15 },
          { criterion: 'Yüzeysel veya eksik belirtme', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g5-s5-e2-q4',
        number: 4,
        outcomeCode: 'T.O.5.7',
        title: 'Görsel Anlamı Belirleme',
        points: 15,
        prompt: 'Atatürk’ün çiftlikte traktör kullandığını ve çiftçilerle konuştuğunu gösteren bir fotoğrafta halkın Atatürk’e bakışını ve Atatürk’ün çalışma heyecanını anlatan iki görsel ayrıntı yazınız.',
        expectedAnswer: '1. Ayrıntı: Atatürk’ün kollarını sıvamış, kararlı ve güler yüzlü bir şekilde traktör direksiyonunu tutması.\n2. Ayrıntı: Çevresindeki çiftçilerin ve köylülerin gözlerindeki hayranlık, saygı ve umut dolu tebessüm.',
        rubric: [
          { criterion: 'İki tutarlı görsel ayrıntı yazma', points: 15 },
          { criterion: 'Tek ayrıntı yazma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 4
      },
      {
        id: 'g5-s5-e2-q5',
        number: 5,
        outcomeCode: 'T.O.5.20',
        title: 'Söz Varlığı Geliştirme (Cümle Kurma)',
        points: 10,
        prompt: 'Metinde geçen "azim" ve "üretim" sözcüklerinin anlamından hareketle, "çalışkanlık" kelimesini okul başarısıyla ilişkili bir cümlede kullanınız.',
        expectedAnswer: 'Örnek Cümle: Derslerimize düzenli çalışmak ve ödevlerimizi zamanında yapmak, çalışkanlık sayesinde başarıya ulaşmanın en güvenilir yoludur.',
        rubric: [
          { criterion: 'Sözcüğü anlamına uygun ve okul başarısıyla ilişkili kurallı kullanma', points: 10 },
          { criterion: 'Cümle kurup bağlamı zayıf tutma', points: 5 },
          { criterion: 'Yanlış kullanım', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g5-s5-e2-q6',
        number: 6,
        outcomeCode: 'T.Y.5.3',
        title: 'Yazıda İçerik ve Yapı Seçimi',
        points: 15,
        prompt: `Atatürk Orman Çiftliği'nin kuruluş aşamalarını anlatan bir okul gazetesi haberi hazırlayacaksınız.
Aşağıdaki yöntemlerden hangisi bu haberin hedefine en uygundur? İşaretleyip gerekçesini yazınız:
[ ] Çiftliğin kuruluşundaki aşamaları ve elde edilen üretim sonuçlarını adım adım açıklayan nesnel bir anlatım
[ ] Yalnızca çiftlikteki hayvan seslerini betimleyen duygusal bir anlatım

Seçimimin Gerekçesi: .....................................................................................................................................`,
        expectedAnswer: 'İlk seçenek işaretlenmelidir ([X] Çiftliğin kuruluşundaki aşamaları ve elde edilen üretim sonuçlarını adım adım açıklayan nesnel anlatım).\nGerekçesi: Okul gazetesi haberinin amacı okuyucuya çiftliğin nasıl kurulduğunu ve bilimin üretime katkısını öğretmektir; aşamalı açıklama bu bilgi aktarımı için en uygun yoldur.',
        rubric: [
          { criterion: 'Doğru seçeneği işaretleyip amaca uygun gerekçeyi yazma', points: 15 },
          { criterion: 'Yalnızca doğru seçeneği işaretleme', points: 7 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 4
      },
      {
        id: 'g5-s5-e2-q7',
        number: 7,
        outcomeCode: 'T.Y.5.13',
        title: 'Söz Varlığıyla Paragraf Yazma',
        points: 15,
        prompt: 'Azim ve kararlılıkla çalışıldığında imkânsız gibi görünen engellerin nasıl aşılabileceğini anlatan 4-5 cümlelik bir bilgilendirici paragraf yazınız.',
        expectedAnswer: 'Hayatta karşılaştığımız zorluklar karşısında pes etmek yerine azimle çalışmak bizi başarıya ulaştırır. Başkalarının imkânsız dediği durumlarda bile inanç ve sabırla yola devam eden insanlar kalıcı eserler bırakırlar. Bilgiyi, bilimi ve emeği bir araya getirdiğimizde çorak topraklar bile bereketli bahçelere dönüşebilir. En büyük zaferler, güçlükler karşısında yılmadan mücadele edenlerin gayretiyle kazanılır.',
        rubric: [
          { criterion: '4-5 cümlelik tutarlı ve konuya uygun paragraf yazma', points: 15 },
          { criterion: 'Kısmi veya cümle sayısı eksik anlatım', points: 8 },
          { criterion: 'Konu dışı yazı', points: 0 }
        ],
        linesNeeded: 5
      }
    ]
  },

  // ==================== SENARYO 6 ====================
  // Senaryo 6 - Sınav 1
  {
    id: 'g5-s6-e1',
    gradeLevel: 5,
    scenarioGroup: 'senaryo-6',
    scenarioGroupTitle: 'MEB Senaryo 6',
    scenarioName: '1. Sınav (Geleneksel Masal Gecesi)',
    examNumber: 1,
    title: 'Geleneksel Masal Gecesi',
    theme: '6. Tema: Sözlü Kültür & Masallar',
    targetClass: '5. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Geleneksel Masal Gecesi',
      author: 'Türkçe Ülküsü Yayınları (Özgün Kültür Metni)',
      source: '5. Sınıf Türkçe Dersi - Masal ve Efsaneler',
      content: `Kış akşamlarında köy odasında sobanın çıtırtısına karışan en tatlı ses, masal anlatan dedemin sesiydi. Biz çocuklar minderin üzerine bağdaş kurar, gözlerimizi bir an bile kırpmadan onu dinlerdik. Dedem masallara her zaman bildik ama sihirli bir tekerlemeyle başlardı: "Evvel zaman içinde, kalbur saman içinde, pireler berber iken develer tellal iken..."

O gece anlattığı masal, dürüstlüğü sayesinde zorlukları aşan ve padişahın veziri olan Keloğlan’ın hikâyesiydi. Masaldaki devler, konuşan kuşlar ve sihirli elmalar hayal dünyamızı kanatlandırırdı. Ancak dedemin masalları yalnızca bizi uyutmak için değildi; kötülüğün er ya da geç kaybedeceğini, sabır ve doğruluğun ise insanı her zaman aydınlığa çıkaracağını öğütlerdi. Masal bittiğinde gökten üç elma düşerdi: Biri anlatana, biri dinleyene, biri de dürüstlükten ayrılmayanlara.`
    },
    questions: [
      {
        id: 'g5-s6-e1-q1',
        number: 1,
        outcomeCode: 'T.O.5.5',
        title: 'Kelime Anlamı Tahmini',
        points: 10,
        prompt: 'Metinde geçen "tekerleme" kelimesinin masallardaki işlevini ve anlamını metnin bağlamından hareketle tahmin ediniz.',
        expectedAnswer: 'Masalların başında dinleyicilerin dikkatini çekmek ve onları masalın hayal dünyasına hazırlamak için söylenen kafiyeli, eğlenceli ve kalıplaşmış sözler.',
        rubric: [
          { criterion: 'Tekerlemenin masaldaki işlevini ve anlamını doğru açıklama', points: 10 },
          { criterion: 'Yalnızca kafiyeli sözcükler deme', points: 5 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g5-s6-e1-q2',
        number: 2,
        outcomeCode: 'T.O.5.6',
        title: 'Metnin Yüzey Anlamı (Metnin Konusu)',
        points: 15,
        prompt: 'Okuduğunuz metnin konusunu (yüzey anlamını) belirleyerek bir cümleyle yazınız.',
        expectedAnswer: 'Metnin konusu; kış gecelerinde dedenin torunlarına anlattığı geleneksel masalların sıcaklığı, eğitici rolü ve ahlaki öğütleridir.',
        rubric: [
          { criterion: 'Metnin konusunu (yüzey anlamını) eksiksiz ve doğru yazma', points: 15 },
          { criterion: 'Kısmi veya yüzeysel yazma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g5-s6-e1-q3',
        number: 3,
        outcomeCode: 'T.O.5.6',
        title: 'Metnin Yüzey Anlamı (Kültürel Kalıp)',
        points: 15,
        prompt: 'Masal bittiğinde gökten düşen üç elma kimlere ithaf edilmiştir? Metinden bularak yazınız.',
        expectedAnswer: 'Biri masalı anlatana, biri masalı dinleyene, biri de dürüstlükten hiç ayrılmayanlara ithaf edilmiştir.',
        rubric: [
          { criterion: 'Üç elmanın kime düştüğünü eksiksiz yazma', points: 15 },
          { criterion: 'İki tanesini doğru yazma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g5-s6-e1-q4',
        number: 4,
        outcomeCode: 'T.O.5.7',
        title: 'Görsel Anlamı Belirleme',
        points: 10,
        prompt: 'Köy odasında soba başında dedesini dinleyen çocukların görselinde çocukların dinleme tutumunu yansıtan iki ayrıntı yazınız.',
        expectedAnswer: '1. Ayrıntı: Çocukların minder üstünde sessizce oturup gözlerini büyülenmiş gibi dedelerine dikmeleri.\n2. Ayrıntı: Heyecanlı sahnelerde ellerini çenelerine dayayıp merakla ileri doğru eğilmeleri.',
        rubric: [
          { criterion: 'İki tutarlı dinleme ayrıntısını yazma', points: 10 },
          { criterion: 'Tek ayrıntı yazma', points: 5 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g5-s6-e1-q5',
        number: 5,
        outcomeCode: 'T.O.5.15',
        title: 'Anahtar Kelime Çözümleme',
        points: 10,
        prompt: 'Metnin içeriğini en iyi yansıtan iki anahtar kelime yazınız.',
        expectedAnswer: 'Geleneksel masallar, Dürüstlük (veya Masal tekerlemesi, Sözlü kültür).',
        rubric: [
          { criterion: 'İki doğru anahtar kelime yazma', points: 10 },
          { criterion: 'Tek anahtar kelime yazma', points: 5 },
          { criterion: 'Hatalı kelime', points: 0 }
        ],
        linesNeeded: 2
      },
      {
        id: 'g5-s6-e1-q6',
        number: 6,
        outcomeCode: 'T.O.5.20',
        title: 'Söz Varlığı Geliştirme (Cümle Kurma)',
        points: 15,
        prompt: 'Metinde geçen "öğüt" kelimesinin anlamını dikkate alarak bu kelimeyi aile yaşamıyla ilgili bir cümlede kullanınız.',
        expectedAnswer: 'Örnek Cümle: Annemin her sabah evden çıkarken verdiği büyüklere saygılı olma öğüdünü asla unutmuyorum.',
        rubric: [
          { criterion: 'Sözcüğü anlamına uygun ve aile bağlamında kurallı bir cümlede kullanma', points: 15 },
          { criterion: 'Cümle kurup bağlamı zayıf bırakma', points: 8 },
          { criterion: 'Yanlış kullanım', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g5-s6-e1-q7',
        number: 7,
        outcomeCode: 'T.Y.5.3',
        title: 'Yazıda İçerik ve Yapı Seçimi',
        points: 10,
        prompt: `Bir arkadaşınıza "Keloğlan ve Sihirli Taş" masalını anlatacaksınız.
Amacınız masalın olay akışını hiç bilmeyen birine öğretmek olduğuna göre aşağıdaki anlatım yollarından hangisini seçersiniz? İşaretleyiniz:
[ ] Masalın serim, düğüm ve çözüm aşamalarını olay sırasına göre açıklayan anlatım yolu
[ ] Yalnızca padişah sarayının mimarisini anlatan betimleme yolu`,
        expectedAnswer: 'İlk seçenek işaretlenmelidir ([X] Masalın serim, düğüm ve çözüm aşamalarını olay sırasına göre açıklayan anlatım yolu).',
        rubric: [
          { criterion: 'Doğru seçeneği işaretleme', points: 10 },
          { criterion: 'Yanlış işaretleme', points: 0 }
        ],
        linesNeeded: 2
      },
      {
        id: 'g5-s6-e1-q8',
        number: 8,
        outcomeCode: 'T.Y.5.16',
        title: 'Yazım ve Noktalama Kuralları',
        points: 15,
        prompt: `Aşağıdaki cümlelerde yay ayraç ( ) içine nokta (.) veya kısa çizgi (-) koyunuz:
a) Masal dinletisi saat 19( )30'da başladı.
b) Dedem dürüstlük hakkında güzel bir ma( )sal anlattı.
c) Keloğlan padişahın 1( ) veziri oldu.`,
        expectedAnswer: 'a) Nokta (.)\nb) Kısa çizgi (-)\nc) Nokta (.)',
        rubric: [
          { criterion: '3 boşluğun tamamı doğru', points: 15 },
          { criterion: '2 boşluk doğru', points: 10 },
          { criterion: '1 boşluk doğru', points: 5 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 3
      }
    ]
  },

  // Senaryo 6 - Sınav 2
  {
    id: 'g5-s6-e2',
    gradeLevel: 5,
    scenarioGroup: 'senaryo-6',
    scenarioGroupTitle: 'MEB Senaryo 6',
    scenarioName: '2. Sınav (Mendil Kapmaca Şenliği)',
    examNumber: 2,
    title: 'Mendil Kapmaca Şenliği',
    theme: '6. Tema: Geleneksel Çocuk Oyunları',
    targetClass: '5. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Mendil Kapmaca Şenliği',
      author: 'Türkçe Ülküsü Yayınları (Özgün Çocuk Metni)',
      source: '5. Sınıf Türkçe Dersi - Oyun ve Kültür',
      content: `Bahar şenliklerinde okulumuzun bahçesinde geleneksel oyunlar turnuvası düzenlendi. En çok heyecan uyandıran oyun ise "Mendil Kapmaca"ydı. Oyun için bahçeye iki paralel çizgi çizildi, tam orta noktaya ise elinde beyaz bir mendille tarafsız bir hakem geçti. İki eşit takıma ayrılan oyuncular çizgilerin arkasında numaralandırıldı.

Hakem yüksek sesle "Üç!" diye bağırdığında her iki takımdan üç numaralı oyuncular hızla orta noktaya doğru koştu. Oyunun kuralına göre amaç, mendili hakemin elinden kapıp kendi takım çizgisine yakalanmadan dönmekti. Eğer mendili alan oyuncu çizgiyi geçmeden rakibi ona dokunursa puan rakip takıma geçiyordu. Hızlı koşan kadar çevik davranan ve strateji kuran takım galip geldi. Kazanan takım kaybeden arkadaşlarına sarılarak tebrik etti; bahçede kazanan dostluk oldu.`
    },
    questions: [
      {
        id: 'g5-s6-e2-q1',
        number: 1,
        outcomeCode: 'T.O.5.5',
        title: 'Kelime Anlamı Tahmini',
        points: 10,
        prompt: 'Metinde geçen "çevik" kelimesinin anlamını metnin bağlamından hareketle tahmin ediniz.',
        expectedAnswer: 'Tahminim: Kolaylık ve çabuklukla hareket edebilen, atak, kıvrak, tetik.',
        rubric: [
          { criterion: 'Doğru anlam tahmininde bulunma', points: 10 },
          { criterion: 'Kısmen doğru tahmin', points: 5 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g5-s6-e2-q2',
        number: 2,
        outcomeCode: 'T.O.5.6',
        title: 'Metnin Yüzey Anlamı (Metnin Konusu)',
        points: 15,
        prompt: 'Okuduğunuz metnin konusunu (yüzey anlamını) belirleyerek bir cümleyle yazınız.',
        expectedAnswer: 'Metnin konusu; okul bahçesinde çocukların kurallarına uyarak oynadıkları geleneksel mendil kapmaca oyunu, yaşanan heyecan ve sergilenen dostluktur.',
        rubric: [
          { criterion: 'Metnin konusunu (yüzey anlamını) eksiksiz ve doğru yazma', points: 15 },
          { criterion: 'Kısmi veya yüzeysel yazma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g5-s6-e2-q3',
        number: 3,
        outcomeCode: 'T.O.5.6',
        title: 'Metnin Yüzey Anlamı (Puan Kazanma Kuralı)',
        points: 15,
        prompt: 'Mendil Kapmaca oyununda puan kazanmanın iki farklı yolunu metne göre açıklayınız.',
        expectedAnswer: '1. Yol: Mendili kapıp rakibe yakalanmadan kendi takım çizgisine ulaşmak.\n2. Yol: Mendili kapan rakip oyuncuya kendi çizgisine varmadan önce dokunarak onu ebelemek.',
        rubric: [
          { criterion: 'Puan kazanmanın her iki yolunu da net açıklama', points: 15 },
          { criterion: 'Yalnızca bir yolu açıklama', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g5-s6-e2-q4',
        number: 4,
        outcomeCode: 'T.O.5.7',
        title: 'Görsel Anlamı Belirleme',
        points: 10,
        prompt: 'Mendil Kapmaca oyununun en heyecanlı anını gösteren bir görselde iki koşucunun beden dili nasıl resmedilmelidir?',
        expectedAnswer: 'İki koşucunun tüm güçleriyle ileri atılmış adımları, gözlerinin ortadaki mendile odaklanmış hırslı ve dikkatli bakışları.',
        rubric: [
          { criterion: 'Görsel öğeleri uygun şekilde açıklama', points: 10 },
          { criterion: 'Kısmi açıklama', points: 5 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g5-s6-e2-q5',
        number: 5,
        outcomeCode: 'T.O.5.15',
        title: 'Anahtar Kelime Çözümleme',
        points: 10,
        prompt: 'Metnin içeriğini yansıtan iki anahtar kelime yazınız.',
        expectedAnswer: 'Mendil Kapmaca, Geleneksel oyun (veya Takım ruhu, Bahar şenliği).',
        rubric: [
          { criterion: 'İki uygun anahtar kelime yazma', points: 10 },
          { criterion: 'Tek anahtar kelime yazma', points: 5 },
          { criterion: 'Hatalı kelime', points: 0 }
        ],
        linesNeeded: 2
      },
      {
        id: 'g5-s6-e2-q6',
        number: 6,
        outcomeCode: 'T.O.5.20',
        title: 'Söz Varlığı Geliştirme (Cümle Kurma)',
        points: 15,
        prompt: 'Metinde geçen "tarafsız" kelimesinin anlamını dikkate alarak bu kelimeyi bir hakem veya jüri ile ilgili cümlede kullanınız.',
        expectedAnswer: 'Örnek Cümle: Yarışmada görev alan jüri üyeleri tarafsız davranarak tüm öğrencilerin çalışmalarını adaletle puanladı.',
        rubric: [
          { criterion: 'Sözcüğü anlamına uygun ve adalet/hakem bağlamında kurallı kullanma', points: 15 },
          { criterion: 'Cümle kurup bağlamı zayıf tutma', points: 8 },
          { criterion: 'Yanlış kullanım', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g5-s6-e2-q7',
        number: 7,
        outcomeCode: 'T.Y.5.3',
        title: 'Yazıda İçerik ve Yapı Seçimi',
        points: 10,
        prompt: `Mendil Kapmaca oyununu hiç bilmeyen birine tanıtacak bir metin hazırlarken aşağıdakilerden hangisini öncelikli amaç olarak belirlersiniz?
[ ] Oyunun kurallarını, hazırlık aşamasını ve nasıl puan alındığını adım adım açıklamak
[ ] Okul bahçesindeki ağaçların türlerini ve hava durumunu tanıtmak`,
        expectedAnswer: 'İlk seçenek işaretlenmelidir ([X] Oyunun kurallarını, hazırlık aşamasını ve nasıl puan alındığını adım adım açıklamak).',
        rubric: [
          { criterion: 'Doğru seçeneği işaretleme', points: 10 },
          { criterion: 'Yanlış işaretleme', points: 0 }
        ],
        linesNeeded: 2
      },
      {
        id: 'g5-s6-e2-q8',
        number: 8,
        outcomeCode: 'T.Y.5.16',
        title: 'Yazım ve Noktalama Kuralları',
        points: 15,
        prompt: `Aşağıdaki cümlelerde yay ayraç ( ) içine nokta (.) veya kısa çizgi (-) koyunuz:
a) Oyun turnuvası saat 13( )45'te başladı.
b) Hakem elindeki beyaz men( )dili havaya kaldırdı.
c) Turnuvada 5-A sınıfı 1( ) oldu.`,
        expectedAnswer: 'a) Nokta (.)\nb) Kısa çizgi (-)\nc) Nokta (.)',
        rubric: [
          { criterion: '3 boşluğu da doğru yapma', points: 15 },
          { criterion: '2 boşluğu doğru yapma', points: 10 },
          { criterion: '1 boşluğu doğru yapma', points: 5 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 3
      }
    ]
  }
];
