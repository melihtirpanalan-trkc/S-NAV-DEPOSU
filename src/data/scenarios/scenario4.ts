import { ExamScenario } from '../../types/exam';

export const SCENARIO_4_EXAMS: ExamScenario[] = [
  {
    id: 's4-e1',
    scenarioGroup: 'senaryo-4',
    scenarioGroupTitle: 'MEB Senaryo 4',
    scenarioName: '1. Sınav (Yıldızlara Dokunan Eller)',
    examNumber: 1,
    title: 'Yıldızlara Dokunan Eller',
    theme: '4. Tema: Hayat Boyu Gelişim & Merak ve Azim',
    targetClass: '7. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Yıldızlara Dokunan Eller',
      author: 'Türkçe Ülküsü Yayınları (Özgün Edebi Metin)',
      source: '7. Sınıf Türkçe Dersi - Bilim ve Araştırma Ruhu',
      content: `Köyün ucundaki taş evin çatı katı, on üç yaşındaki Murat için dünyanın en gizemli sığınağıydı. Akranları meydanda top koştururken ya da derenin kıyısında vakit öldürürken o, dedesinden kalma kırık bir dürbün merceğini güneşe tutar, ışığın kırılışını hayranlıkla incelerdi. Babası ise köyün marangozuydu; oğlunun da eline keseri alıp tahtadan yontulmuş masalar yapmasını arzuluyordu. Fakat Murat’ın aklı fikri, gece olunca gökyüzünü kaplayan o parıltılı noktalardaydı.

Murat, ortaokulun kütüphanesine âdeta dadandı. Fizik ve gök bilimine dair eline geçen her sayfayı bir solukta okuyor, anlamadığı terimleri öğretmeniyle paylaşıyordu. Ancak çıplak gözle ya da eski bir dürbünle göğün derinliklerine ulaşmak imkânsızdı; bir teleskoba ihtiyacı vardı. Köy şartlarında böyle bir aleti satın alabilmek hayalden bile uzaktı. Murat pes etmedi. Kasaba pazarındaki hurdalıkları günlerce dolaşarak eski bir soba borusu, kırık bir fotoğraf makinesi merceği ve pirinç bir halka buldu. Geceleri gaz lambasının titrek alevinde bu cam parçalarını saatlerce perdahlayarak pürüzsüz hâle getirdi. Uykusuzluktan göz kapakları ağırlaşıyor, yorgunluktan bitap düşüyordu ama gökyüzü tutkusu onu dimdik ayakta tutuyordu. 

Soğuk bir kasım gecesi, teneke çatının üstünde el yapımı teleskobunu güney ufkuna çevirdi. Merceğin ardından baktığında daha önce hiçbir atlas üzerinde görmediği, kuyruğundan mavimsi ışıklar saçan bir yıldızın süzüldüğünü gördü. Heyecanla soluğu kesildi; o dondurucu gecede elleri buz tutsa da yüreğinde sönmeyecek bir başarı ateşi yanmıştı.`
    },
    questions: [
      {
        id: 's4-e1-q1',
        number: 1,
        outcomeCode: 'T.O.7.4',
        title: 'Bağlamdan Söz Varlığını Tahmin Etme ve Gerekçelendirme',
        points: 15,
        linesNeeded: 7,
        prompt: 'Metinde geçen altı çizili kelimelerin anlamlarını metnin bağlamından yararlanarak tahmin ediniz. Tahminlerinizi ve sizi bu tahmine götüren metin içi gerekçeleri yazınız.',
        subQuestions: [
          {
            label: 'a. dadandı',
            text: 'Metindeki: "Murat, ortaokulun kütüphanesine âdeta dadandı." cümlesindeki "dadandı" kelimesi:\n• Anlam Tahmini: ........................................................................\n• Metin İçi Gerekçe: ....................................................................',
            expectedAnswer: '• Anlam Tahmini: Bir yere çok sık gitmeyi alışkanlık hâline getirmek, oradan ayrılamamak.\n• Metin İçi Gerekçe: Murat\'ın kütüphanedeki kaynakları durmaksızın incelemesi ve araştırması.',
            points: 7,
            guideline: 'Anlam tahmini (4 Puan), metin içi somut gerekçe (3 Puan).'
          },
          {
            label: 'b. perdahlayarak',
            text: 'Metindeki: "...bu cam parçalarını saatlerce perdahlayarak pürüzsüz hâle getirdi." cümlesindeki "perdahlayarak" kelimesi:\n• Anlam Tahmini: ........................................................................\n• Metin İçi Gerekçe: ....................................................................',
            expectedAnswer: '• Anlam Tahmini: Bir nesnenin yüzeyini överek düzeltmek, cilalayarak parlatmak ve pürüzsüz duruma getirmek.\n• Metin İçi Gerekçe: Cümlenin devamındaki "pürüzsüz hâle getirdi" ifadesi.',
            points: 8,
            guideline: 'Anlam tahmini (4 Puan), metin içi somut gerekçe (4 Puan).'
          }
        ],
        expectedAnswer: 'Kelimelerin metindeki bağlama uygun tahmini ve metin içi delillerle desteklenmesi.',
        rubric: [
          { criterion: 'Her iki kelimenin anlamına dair isabetli tahmin yapılması', points: 8 },
          { criterion: 'Tahmini destekleyen metin içi gerekçelerin açıkça sunulması', points: 7 }
        ]
      },
      {
        id: 's4-e1-q2',
        number: 2,
        outcomeCode: 'T.O.7.5',
        title: 'Metnin Yüzey Anlamı - Metnin Konusu',
        points: 10,
        linesNeeded: 3,
        prompt: 'Okuduğunuz metnin konusunu bir cümleyle yazınız.',
        expectedAnswer: 'Metnin konusu, gök bilimine tutkuyla bağlı olan Murat\'ın imkânsızlıklara rağmen azimle kendi teleskobunu yapması ve gökyüzünü keşfetmesidir.',
        rubric: [
          { criterion: 'Metnin konusunun ana fikre kaymadan, eksiksiz ve tek cümleyle ifade edilmesi', points: 10 }
        ]
      },
      {
        id: 's4-e1-q3',
        number: 3,
        outcomeCode: 'T.O.7.5',
        title: 'Metnin Yüzey Anlamı - Doğrudan Bilgi Tespiti',
        points: 10,
        linesNeeded: 4,
        prompt: 'Metne göre Murat, el yapımı teleskobunu yapabilmek için hangi malzemeleri nerelerden temin etmiştir?',
        expectedAnswer: 'Murat, dedesinden kalma kırık bir dürbün merceğini kullanmış; kasaba pazarındaki hurdalıklardan ise eski bir soba borusu, kırık bir fotoğraf makinesi merceği ve pirinç bir halka temin etmiştir.',
        rubric: [
          { criterion: 'Kullanılan malzemelerin (soba borusu, mercek, pirinç halka) eksiksiz yazılması', points: 10 }
        ]
      },
      {
        id: 's4-e1-q4',
        number: 4,
        outcomeCode: 'T.O.7.7',
        title: 'Metnin Derin Anlamı (Metnin Ana Fikri / İletisi)',
        points: 15,
        linesNeeded: 5,
        prompt: 'Metnin son cümlesinde geçen "elleri buz tutsa da yüreğinde sönmeyecek bir başarı ateşi yanmıştı" ifadesindeki tezatlıktan hareketle metnin derin anlamını (ana fikrini) açıklayınız.',
        expectedAnswer: 'Fiziksel olarak dondurucu kasım gecesinde elleri buz tutsa bile, hedefine ulaşıp kuyruklu yıldızı keşfetmiş olmanın verdiği mutluluk, coşku ve başarma azmi onun içini ısıtmıştır. Metnin derin anlamı; azim ve inançla çalışıldığında en zorlu imkânsızlıkların bile başarıya engel olamayacağıdır.',
        rubric: [
          { criterion: 'Buz tutan eller ile yürekteki ateş zıtlığının doğru tahlil edilmesi', points: 8 },
          { criterion: 'Başarı ve öz güven duygusunun mantıksal olarak ifade edilmesi', points: 7 }
        ]
      },
      {
        id: 's4-e1-q5',
        number: 5,
        outcomeCode: 'T.O.7.21',
        title: 'Söz Varlığını Çözümleme - Deyim ve Sebep-Sonuç',
        points: 15,
        linesNeeded: 5,
        prompt: 'Metinde geçen "vakit öldürmek" deyiminin metne kattığı anlamı açıklayınız. Ayrıca metindeki olay akışından hareketle Murat’ın başarısını sağlayan temel "sebep" ve ortaya çıkan "sonuç" arasındaki mantıksal bağı yazınız.',
        expectedAnswer: '• "Vakit öldürmek" deyimi: Zamanı yararsız, boş ve faydasız işlerle harcamak anlamındadır.\n• Sebep-Sonuç: Murat\'ın kütüphanede araştırma yapıp hurdalıklardan topladığı parçaları sabırla işlemesi (sebep), daha önce görülmemiş kuyruklu yıldızı keşfetmesini (sonuç) sağlamıştır.',
        rubric: [
          { criterion: 'Deyimin bağlamsal anlamının eksiksiz açıklanması', points: 7 },
          { criterion: 'Sebep ve sonuç bağıntısının metne dayalı olarak kurulması', points: 8 }
        ]
      },
      {
        id: 's4-e1-q6',
        number: 6,
        outcomeCode: 'T.Y.7.18',
        title: 'Yazısını Zenginleştirecek Söz Varlığı Kullanımı',
        points: 20,
        linesNeeded: 8,
        prompt: 'Aşağıda verilen metin başlangıcını, Murat’ın kararlılığını ve çalışma disiplinini yansıtacak biçimde "öz güven, kararlılık, basamak, başarıya giden yol" kelimelerini ve en az bir "benzetme" ile bir "ikileme"yi kullanarak anlamlı bir şekilde tamamlayınız:\n\n"Teleskobun parçalarını masaya dizdiğinde etrafındakiler onun bu işi asla başaramayacağını söylüyorlardı..."',
        expectedAnswer: 'Örnek Metin: "Teleskobun parçalarını masaya dizdiğinde etrafındakiler onun bu işi asla başaramayacağını söylüyorlardı. Oysa Murat, içinde taşıdığı sarsılmaz ÖZ GÜVEN sayesinde bu sözlerin hiçbirine kulak asmadı. Biliyordu ki BAŞARIYA GİDEN YOL, çiçekli düzlüklerden değil dik yokuşlardan geçerdi. Karşılaştığı her zorluğu onu durduran bir engel değil, göklere ulaştıracak sağlam birer BASAMAK olarak gördü. Gece gündüz demeden, tırnaklarıyla kaza kaza camları parlattı. Gözleri, karanlıkta parlayan bir kutup yıldızı gibi ışıldıyordu. Sonunda gösterdiği bu üstün KARARLILIK meyvesini verdi ve imkânsız denilen düşü gerçeğe dönüştürdü."',
        rubric: [
          { criterion: 'Verilen 4 anahtar ifadenin anlamlı kullanımı', points: 8 },
          { criterion: 'Metinde en az bir "benzetme" sanatına yer verilmesi', points: 4 },
          { criterion: 'Metinde en az bir "ikileme" kullanılması', points: 4 },
          { criterion: 'Anlatım bütünlüğü ve akıcılık', points: 4 }
        ]
      },
      {
        id: 's4-e1-q7',
        number: 7,
        outcomeCode: 'T.Y.7.21',
        title: 'Noktalama İşaretleri (Üç Nokta ve Noktalı Virgül) Uygulaması',
        points: 15,
        linesNeeded: 6,
        prompt: 'Aşağıda verilen noktalama görevlerini yönergelere uygun olarak tamamlayınız.',
        subQuestions: [
          {
            label: 'a. Üç Nokta (...) ve Kullanım Görevleri',
            text: 'Aşağıdaki cümlelerde geçen üç noktanın (...) hangi görevle kullanıldığını altlarındaki boşluklara yazınız:\n1. "— Kapıyı çalan kimdi Murat?\n   — Ali Kuşçu Atölyesi\'nden bir usta..."\n   Kullanım Görevi: ........................................................................\n2. "Koca Yusuf!.. Çevir merceğini kutup yıldızına doğru!"\n   Kullanım Görevi: ........................................................................',
            expectedAnswer: '1. Cümle: Karşılıklı konuşmalarda yeterli olmayan, eksik bırakılan cevaplarda kullanılır.\n2. Cümle: Ünlem ve seslenmelerde anlatımı pekiştirmek için kullanılır. (Ünlemden sonra iki nokta konulması yeterlidir.)',
            points: 7,
            guideline: '1. kullanım görevi (4 Puan), 2. kullanım görevi (3 Puan).'
          },
          {
            label: 'b. Noktalı Virgül (;) ve Noktalama Uygulaması',
            text: 'Aşağıdaki parçada yay ayraçla ( ) gösterilen yerlere uygun noktalama işaretlerini getiriniz ve noktalı virgülün (;) buradaki kullanım gerekçesini yazınız:\n"Murat; mercekleri, pirinç boruları, cam aynaları özenle dizdi ( ) çekiç, zımpara ve tutkalları ise yan tezgâha koydu ( ) Gökyüzü geceleri ne kadar da büyüleyiciydi ( )"\n• Noktalı virgülün (;) kullanım gerekçesi: .....................................................................',
            expectedAnswer: '• Yay ayraçlara sırasıyla: ( ; ) ( . ) ( ! ) işaretleri gelmelidir.\n• Noktalı Virgülün (;) Kullanım Gerekçesi: Cümle içinde virgüllerle ayrılmış tür veya takımları (optik parçalar ile el aletleri) birbirinden ayırmak için konmuştur.',
            points: 8,
            guideline: 'Ayraçların doğru doldurulması (4 Puan), noktalı virgül kuralının doğru açıklanması (4 Puan).'
          }
        ],
        expectedAnswer: 'Üç noktanın konuşmadaki eksik cevap ve pekiştirme görevleri ile noktalı virgülün tür/takım ayırma kuralının tespiti.',
        rubric: [
          { criterion: 'Üç noktanın iki farklı kullanım kuralının doğru tespit edilmesi', points: 7 },
          { criterion: 'Yay ayraçların doldurulması ve noktalı virgül gerekçesinin açıklanması', points: 8 }
        ]
      }
    ]
  },
  {
    id: 's4-e2',
    scenarioGroup: 'senaryo-4',
    scenarioGroupTitle: 'MEB Senaryo 4',
    scenarioName: '2. Sınav (Karanlığı Delen Kağnı Sesleri)',
    examNumber: 2,
    title: 'Karanlığı Delen Kağnı Sesleri',
    theme: '4. Tema: Millî Mücadele Ruhu ve Vatan Sevgisi',
    targetClass: '7. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Karanlığı Delen Kağnı Sesleri',
      author: 'Türkçe Ülküsü Yayınları (Özgün Edebi Metin)',
      source: '7. Sınıf Türkçe Dersi - Millî Mücadele ve Vatan Sevgisi',
      content: `Ilgaz Dağları’nın geçit vermez yamaçlarında kasım ayazı bıçak gibi kesiyordu. İnebolu kıyılarından cepheye cephane taşıyan kağnı kollarının tekerleklerinden yükselen "gacır gucur" sesler, dağların uğultusuna karışıyordu. Bu çetin kafilede on beş yaşındaki Mehmet ile yaşlı anası da vardı. Kağnıya koşulu Sarıkız ile Kocabaş, dik yokuşlarda nefes nefese kalmış; çamurlu dik yollarda zorlukla adım atıyordu. 

Hava karardıkça kar serpiştirmeye, tipi şiddetini artırmaya başladı. Mehmet’in sırtındaki yırtık yelek ayazı önlemeye yetmiyor, dudakları soğuktan morarıyordu. Bir ara kağnı derin bir çamur çukuruna saplandı, öküzler ne kadar zorlasa da tekerlek bir santim dahi ilerlemedi. Mehmet hiç tereddüt etmeden omuzunu çamurlu tekerleğe dayadı, var gücüyle yüklendi. İşte tam o anda sırtındaki kalın keçe abayı çıkarıp ıslanmasınlar diye kağnıdaki sandıkların ve mermilerin üzerine örttü. Anası titreyen elleriyle oğlunun kolunu tuttu:
— Oğul, donacaksın! Üstünü niye açtın?

Mehmet, gözlerinde alevlenen sarsılmaz bir inançla başını kaldırdı:
— Ana; biz üşürüz, biz ıslanırız ama cephedeki askerimizin cephanesi ıslanırsa vatan söner! 

Bu sözler gecenin karanlığını bir şimşek gibi aydınlattı. Gerideki kağnılardan yetişen köylüler de koşup geldiler. Omuz omuza verip kağnıyı çamurdan çıkardılar. O gece Ilgaz’ın zirvesinde yalnızca bir kağnı değil; bütün bir milletin hürriyet ve bağımsızlık aşkı yürüyordu.`
    },
    questions: [
      {
        id: 's4-e2-q1',
        number: 1,
        outcomeCode: 'T.O.7.4',
        title: 'Bağlamdan Söz Varlığını Tahmin Etme ve Gerekçelendirme',
        points: 15,
        linesNeeded: 7,
        prompt: 'Metinde geçen altı çizili kelimelerin anlamlarını metnin bağlamından hareketle tahmin ediniz. Tahminlerinizi ve sizi bu tahmine ulaştıran metin içi gerekçeleri yazınız.',
        subQuestions: [
          {
            label: 'a. çetin',
            text: 'Metindeki: "Bu çetin kafilede on beş yaşındaki Mehmet ile yaşlı anası da vardı." cümlesindeki "çetin" kelimesi:\n• Anlam Tahmini: ........................................................................\n• Metin İçi Gerekçe: ....................................................................',
            expectedAnswer: '• Anlam Tahmini: Çok zor, güç, aşılması büyük çaba ve dayanıklılık gerektiren, meşakkatli.\n• Metin İçi Gerekçe: Ilgaz Dağları’nın ayazı, kar ve tipinin şiddeti ile yolların çamurlu olması.',
            points: 7,
            guideline: 'Anlam tahmini (4 Puan), metin içi gerekçe (3 Puan).'
          },
          {
            label: 'b. aba',
            text: 'Metindeki: "İşte tam o anda sırtındaki kalın keçe abayı çıkarıp ıslanmasınlar diye kağnıdaki sandıkların... üzerine örttü." cümlesindeki "aba" kelimesi:\n• Anlam Tahmini: ........................................................................\n• Metin İçi Gerekçe: ....................................................................',
            expectedAnswer: '• Anlam Tahmini: Yünden veya keçeden yapılan, soğuktan korunmak için giyilen kaba ve kalın üst giysisi.\n• Metin İçi Gerekçe: Mehmet’in sırtından çıkarıp mermilerin üzerine örtmesi ve anasının "donacaksın" demesi.',
            points: 8,
            guideline: 'Anlam tahmini (4 Puan), metin içi gerekçe (4 Puan).'
          }
        ],
        expectedAnswer: 'Çetin ve aba kelimelerinin bağlam anlamı ve gerekçeleri.',
        rubric: [
          { criterion: 'Çetin ve aba sözcüklerinin isabetle tahmin edilmesi', points: 8 },
          { criterion: 'Her tahmin için metinden delil ve gerekçe gösterilmesi', points: 7 }
        ]
      },
      {
        id: 's4-e2-q2',
        number: 2,
        outcomeCode: 'T.O.7.5',
        title: 'Metnin Yüzey Anlamı - Metnin Konusu',
        points: 10,
        linesNeeded: 3,
        prompt: 'Okuduğunuz metnin konusunu bir cümleyle yazınız.',
        expectedAnswer: 'Metnin konusu, Kurtuluş Savaşı yıllarında dondurucu soğuğa rağmen cepheye kağnıyla cephane taşıyan Mehmet ve Türk milletinin gösterdiği eşsiz fedakârlıktır.',
        rubric: [
          { criterion: 'Metnin ana konusunun doğru ve tek cümleyle ifade edilmesi', points: 10 }
        ]
      },
      {
        id: 's4-e2-q3',
        number: 3,
        outcomeCode: 'T.O.7.5',
        title: 'Metnin Yüzey Anlamı - Doğrudan Bilgi Tespiti',
        points: 10,
        linesNeeded: 4,
        prompt: 'Metne göre çamura saplanan kağnıyı kurtarmak için kimler, nasıl bir çaba göstermiştir?',
        expectedAnswer: 'Mehmet omuzunu çamurlu tekerleğe dayayarak var gücüyle yüklenmiş, ardından gerideki kağnılardan yetişen köylüler de koşup gelerek omuz omuza verip kağnıyı çamurdan çıkarmışlardır.',
        rubric: [
          { criterion: 'Mehmet\'in ve köylülerin omuz omuza mücadelesinin doğru aktarılması', points: 10 }
        ]
      },
      {
        id: 's4-e2-q4',
        number: 4,
        outcomeCode: 'T.O.7.7',
        title: 'Metnin Derin Anlamı (Metnin Ana Fikri / İletisi)',
        points: 15,
        linesNeeded: 5,
        prompt: 'Mehmet’in "Biz üşürüz, biz ıslanırız ama cephedeki askerimizin cephanesi ıslanırsa vatan söner!" sözünden hareketle metnin derin anlamını (ana fikrini) açıklayınız.',
        expectedAnswer: 'Türk milleti için vatanın bağımsızlığı ve bekası, bireyin kendi canından ve rahatından çok daha üstündür. Metnin derin anlamı; vatan sevgisinin ve milletçe gösterilen fedakârlığın her türlü zorluğu aşacak en yüce güç olmasıdır.',
        rubric: [
          { criterion: 'Vatan bağımsızlığının bireysel canın önüne konulması çıkarımı', points: 8 },
          { criterion: 'Metindeki söz ile desteklenmiş çıkarım', points: 7 }
        ]
      },
      {
        id: 's4-e2-q5',
        number: 5,
        outcomeCode: 'T.O.7.21',
        title: 'Söz Varlığını Çözümleme - Deyim ve Sebep-Sonuç',
        points: 15,
        linesNeeded: 5,
        prompt: 'Metinde geçen "omuz omuza vermek" deyiminin anlamını açıklayınız. Köylülerin bu deyimle ifade edilen davranışı sergilemelerinin arkasındaki temel "sebep" ve ortaya çıkan "sonuç" ilişkisini yazınız.',
        expectedAnswer: '• "Omuz omuza vermek" deyimi: Bir amaç uğruna dayanışma içinde olmak, güçlerini birleştirmek, yardımlaşmak demektir.\n• Sebep-Sonuç: Mehmet\'in mermileri korumak için abasını feda edip tekerleğe asılması ve vatan sözleri (sebep), köylülerin gayrete gelip güç birliği yaparak kağnıyı çamurdan çıkarmalarını (sonuç) sağlamıştır.',
        rubric: [
          { criterion: 'Deyimin doğru açıklaması', points: 7 },
          { criterion: 'Sebep ve sonuç bağıntısının metinle kurulması', points: 8 }
        ]
      },
      {
        id: 's4-e2-q6',
        number: 6,
        outcomeCode: 'T.Y.7.18',
        title: 'Yazısını Zenginleştirecek Söz Varlığı Kullanımı',
        points: 20,
        linesNeeded: 8,
        prompt: 'Aşağıda verilen metin başlangıcını, Millî Mücadele ruhunu yansıtacak biçimde "fedakârlık, sarsılmaz irade, hürriyet, vatan sağ olsun" ifadelerini ve en az bir "benzetme" ile bir "ikileme"yi kullanarak tamamlayınız:\n\n"Ilgaz Dağları’nı aşan kafile sabaha karşı cephe hattına ulaştığında askerler gözlerine inanamadı..."',
        expectedAnswer: 'Örnek Metin: "Ilgaz Dağları’nı aşan kafile sabaha karşı cephe hattına ulaştığında askerler gözlerine inanamadı. Kağnıların başındaki kadınların ve çocukların üstü başı buz tutmuştu ama gözlerinde çelikten bir SARSILMAZ İRADE parıldıyordu. Gösterilen bu eşsiz FEDAKÂRLIK, karanlık geceleri aydınlatan bir meşale gibi askerlerin yüreğine umut aşıladı. Sandıklar tek tek indirilirken Mehmet\'in dudaklarından tek bir cümle döküldü: VATAN SAĞ OLSUN! Çünkü onlar biliyordu ki dökülen her damla ter, aziz milletimizin HÜRRİYET müjdesiydi."',
        rubric: [
          { criterion: 'Verilen 4 anahtar ifadenin doğru kullanımı', points: 8 },
          { criterion: 'Anlatımı güçlendiren uygun bir benzetme', points: 4 },
          { criterion: 'Metinde ikilemenin yer alması', points: 4 },
          { criterion: 'Metnin temaya uygunluğu ve tutarlılığı', points: 4 }
        ]
      },
      {
        id: 's4-e2-q7',
        number: 7,
        outcomeCode: 'T.Y.7.21',
        title: 'Noktalama İşaretleri (Üç Nokta ve Noktalı Virgül) Uygulaması',
        points: 15,
        linesNeeded: 6,
        prompt: 'Aşağıdaki cümlelerde yer alan noktalama görevlerini yönergelere uygun olarak cevaplayınız.',
        subQuestions: [
          {
            label: 'a. Üç Nokta (...) ve Kullanım Amaçları',
            text: 'Aşağıdaki cümlelerde yer alan üç noktanın (...) hangi amaçla kullanıldığını altlarındaki boşluklara yazınız:\n1. "Ilgaz Dağları\'nın doruklarında uğuldayan rüzgâr, karanlıkta çakan şimşekler, kağnı tekerleklerinin sesi..."\n   Kullanım Amacı: ........................................................................\n2. "— Kağnı kolunun başı nereye vardı ana?\n   — Kastamonu kışlasına..."\n   Kullanım Amacı: ........................................................................',
            expectedAnswer: '1. Cümle: Anlatım olarak tamamlanmamış, yüklemi bulunmayan eksiltili cümlenin sonuna konmuştur.\n2. Cümle: Karşılıklı konuşmalarda yeterli olmayan, eksik bırakılan cevaplarda kullanılır.',
            points: 7,
            guideline: '1. cümlenin gerekçesi (4 Puan), 2. cümlenin gerekçesi (3 Puan).'
          },
          {
            label: 'b. Noktalı Virgül (;) Kullanımı ve Görevi',
            text: 'Aşağıdaki cümlede yay ayraçla ( ) belirtilen yere noktalı virgül (;) getiriniz ve bu noktalama işaretinin cümlede hangi görevle kullanıldığını açıklayınız:\n"Mehmet canını dişine takmış, mermileri korumak için gövdesini siper etmişti ( ) köylüler de var güçleriyle kağnıya asılmış, tekerleği çamurdan çıkarmıştı."\n• Noktalı virgülün (;) kullanım görevi: .....................................................................',
            expectedAnswer: '• Yay Ayraca Gelecek İşaret: Noktalı virgül (;)\n• Kullanım Görevi: Ögeleri arasında virgül bulunan sıralı cümleleri birbirinden ayırmak için noktalı virgül konur.',
            points: 8,
            guideline: 'İşaretin doğru konulması (3 Puan), kuralın tam ve doğru açıklanması (5 Puan).'
          }
        ],
        expectedAnswer: 'Üç noktanın eksiltili cümle ve diyalogdaki eksik cevap kuralları ile noktalı virgülün sıralı cümleleri ayırma görevinin tespiti.',
        rubric: [
          { criterion: 'Üç noktanın iki farklı görev kuralının doğru yazılması', points: 7 },
          { criterion: 'Noktalı virgülün kullanım görevinin eksiksiz açıklanması', points: 8 }
        ]
      }
    ]
  },
  {
    id: 's4-e3',
    scenarioGroup: 'senaryo-4',
    scenarioGroupTitle: 'MEB Senaryo 4',
    scenarioName: '3. Sınav (Sandıktan Çıkan Mektuplar)',
    examNumber: 3,
    title: 'Gönül Köprüsü: Sandıktan Çıkan Mektuplar',
    theme: '4. Tema: İletişim, Dil Sevgisi ve Nezaket',
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
        id: 's4-e3-q1',
        number: 1,
        outcomeCode: 'T.O.7.4',
        title: 'Bağlamdan Söz Varlığını Tahmin Etme ve Gerekçelendirme',
        points: 15,
        linesNeeded: 7,
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
        id: 's4-e3-q2',
        number: 2,
        outcomeCode: 'T.O.7.5',
        title: 'Metnin Yüzey Anlamı - Metnin Konusu',
        points: 10,
        linesNeeded: 3,
        prompt: 'Okuduğunuz metnin konusunu bir cümleyle yazınız.',
        expectedAnswer: 'Metnin konusu, günümüzün ekran odaklı ve yüzeysel iletişimi karşısında eski mektuplar aracılığıyla samimi sevgi dilinin ve nezaketin değerinin anlaşılmasıdır.',
        rubric: [
          { criterion: 'Metnin ana konusunun doğru ve tek cümleyle ifade edilmesi', points: 10 }
        ]
      },
      {
        id: 's4-e3-q3',
        number: 3,
        outcomeCode: 'T.O.7.5',
        title: 'Metnin Yüzey Anlamı - Doğrudan Bilgi Tespiti',
        points: 10,
        linesNeeded: 4,
        prompt: 'Metne göre Tahsin Dede’nin çocukluğunda komşuluk ve sokak iletişimi nasıldı? Metinden örnek veriniz.',
        expectedAnswer: 'Tahsin Dede\'nin çocukluğunda sokaktan geçerken rastlanan herkese "Hayırlı sabahlar, akıbetiniz hayrola!" denir; komşunun hâli hatırı sorulmadan kapı önünden geçilmezdi.',
        rubric: [
          { criterion: 'Geçmişteki sokak ve komşuluk iletişiminin doğru aktarılması', points: 10 }
        ]
      },
      {
        id: 's4-e3-q4',
        number: 4,
        outcomeCode: 'T.O.7.7',
        title: 'Metnin Derin Anlamı (Metnin Ana Fikri / İletisi)',
        points: 15,
        linesNeeded: 5,
        prompt: 'Eren’in sararmış mektupları okuduktan sonra elindeki telefonu sehpaya bırakması hareketinden yola çıkarak metnin derin anlamını (ana fikrini) açıklayınız.',
        expectedAnswer: 'Eren, ekran başında yaşadığı hızlı, ruhsuz ve kısaltmalarla dolu sanal iletişimin yetersizliğini; sevginin, emek verilmiş kelimelerin ve aile bağlarının sıcaklığını fark etmiştir. Metnin derin anlamı; sanal dünyanın sahte hızından sıyrılarak kalpten kalbe samimi bağlar kurmanın insan ruhuna verdiği huzurdur.',
        rubric: [
          { criterion: 'İçsel değişimin ve farkındalığın doğru tahlil edilmesi', points: 8 },
          { criterion: 'Metindeki davranışla temellendirilmesi', points: 7 }
        ]
      },
      {
        id: 's4-e3-q5',
        number: 5,
        outcomeCode: 'T.O.7.21',
        title: 'Söz Varlığını Çözümleme - Deyim ve Karşılaştırma',
        points: 15,
        linesNeeded: 5,
        prompt: 'Metinde geçen "hâli hatırı sorulmak" deyiminin anlamına değinerek, yazarın geçmişteki iletişim ile günümüz iletişimi arasında kurduğu karşılaştırmayı yazınız.',
        expectedAnswer: '• "Hâli hatırı sorulmak" deyimi: Bir kimsenin sağlığını ve durumunu öğrenmek üzere ilgi ve yakınlık göstermek demektir.\n• Karşılaştırma: Geçmişte insanlar birbirine selam verip hâl hatır sorarak içtenlikle ilgilenirken, günümüzde insanlar kulaklık ve telefonlarla birbirlerinin yüzüne dahi bakmadan gölge gibi teğet geçmektedir.',
        rubric: [
          { criterion: 'Deyimin doğru açıklaması', points: 7 },
          { criterion: 'İki dönem arasındaki karşılaştırmanın tespiti', points: 8 }
        ]
      },
      {
        id: 's4-e3-q6',
        number: 6,
        outcomeCode: 'T.Y.7.18',
        title: 'Yazısını Zenginleştirecek Söz Varlığı Kullanımı',
        points: 20,
        linesNeeded: 8,
        prompt: 'Aşağıda verilen metin başlangıcını, nezaketli konuşmanın ve tatlı dilin önemini vurgulayacak biçimde "tebessüm, gönül, incitmek, anahtar" sözcüklerini ve en az bir "benzetme" ile bir "karşılaştırma"yı kullanarak anlamlı bir şekilde tamamlayınız:\n\n"İnsanlar konuştukça birbirini daha iyi anlar derler ama asıl mesele nasıl konuştuğumuzdur..."',
        expectedAnswer: 'Örnek Metin: "İnsanlar konuştukça birbirini daha iyi anlar derler ama asıl mesele nasıl konuştuğumuzdur. Kırıcı ve aceleci sözler dostlukları baltalarken tatlı bir dille söylenen kelimeler, kilitli kapıları ardına kadar açan sihirli bir ANAHTAR gibidir. Yüzümüzde beliren içten bir TEBESSÜM, en soğuk ortamları bile bahar güneşi gibi ısıtır. Olgun insan, karşısındakini İNCİTMEKTEN sakınır; çünkü bilir ki bir kez kırılan GÖNÜL kolay kolay onarılmaz. Nezaket dolu bir cümle, binlerce kaba sözden çok daha kuvvetlidir. Dilimizi sevgiyle yoğurduğumuzda, aramızdaki bütün mesafeler yok olur."',
        rubric: [
          { criterion: 'Verilen 4 anahtar sözcüğün yerinde kullanımı', points: 8 },
          { criterion: 'Paragrafta açık bir benzetme kurulması', points: 4 },
          { criterion: 'Paragrafta açık bir karşılaştırma yapılması', points: 4 },
          { criterion: 'Anlatım zenginliği ve akıcılık', points: 4 }
        ]
      },
      {
        id: 's4-e3-q7',
        number: 7,
        outcomeCode: 'T.Y.7.21',
        title: 'Noktalama İşaretleri (Üç Nokta ve Noktalı Virgül) Uygulaması',
        points: 15,
        linesNeeded: 6,
        prompt: 'Aşağıda verilen noktalama kuralları doğrultusunda ilgili görevleri tamamlayınız.',
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
  }
];
