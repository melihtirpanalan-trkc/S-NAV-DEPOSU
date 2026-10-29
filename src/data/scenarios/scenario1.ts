import { ExamScenario } from '../../types/exam';

export const SCENARIO_1_EXAMS: ExamScenario[] = [
  {
    id: 's1-e1',
    scenarioGroup: 'senaryo-1',
    scenarioGroupTitle: 'MEB Senaryo 1',
    scenarioName: '1. Sınav (Yıldızlara Dokunan Eller)',
    examNumber: 1,
    title: 'Yıldızlara Dokunan Eller',
    theme: '1. Tema: Hayat Boyu Gelişim & Merak ve Azim',
    targetClass: '7. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Yıldızlara Dokunan Eller',
      author: 'Türkçe Ülküsü Yayınları (Özgün Edebi Metin)',
      source: '7. Sınıf Türkçe Dersi - Bilim, Merak ve Azim',
      content: `Köyün ucundaki taş evin çatı katı, on üç yaşındaki Murat için dünyanın en gizemli sığınağıydı. Akranları meydanda top koştururken ya da derenin kıyısında vakit öldürürken o, dedesinden kalma kırık bir dürbün merceğini güneşe tutar, ışığın kırılışını hayranlıkla incelerdi. Babası ise köyün marangozuydu; oğlunun da eline keseri alıp tahtadan yontulmuş masalar yapmasını arzuluyordu. Fakat Murat’ın aklı fikri, gece olunca gökyüzünü kaplayan o parıltılı noktalardaydı.

Murat, ortaokulun kütüphanesine âdeta dadandı. Fizik ve gök bilimine dair eline geçen her sayfayı bir solukta okuyor, anlamadığı terimleri öğretmeniyle paylaşıyordu. Ancak çıplak gözle ya da eski bir dürbünle göğün derinliklerine ulaşmak imkânsızdı; bir teleskoba ihtiyacı vardı. Köy şartlarında böyle bir aleti satın alabilmek hayalden bile uzaktı. Murat pes etmedi. Kasaba pazarındaki hurdalıkları günlerce dolaşarak eski bir soba borusu, kırık bir fotoğraf makinesi merceği ve pirinç bir halka buldu. Geceleri gaz lambasının titrek alevinde bu cam parçalarını saatlerce perdahlayarak pürüzsüz hâle getirdi. Uykusuzluktan göz kapakları ağırlaşıyor, yorgunluktan bitap düşüyordu ama gökyüzü tutkusu onu dimdik ayakta tutuyordu.

Soğuk bir kasım gecesi, teneke çatının üstünde el yapımı teleskobunu güney ufkuna çevirdi. Merceğin ardından baktığında daha önce hiçbir atlas üzerinde görmediği, kuyruğundan mavimsi ışıklar saçan bir yıldızın süzüldüğünü gördü. Heyecanla soluğu kesildi; o dondurucu gecede elleri buz tutsa da yüreğinde sönmeyecek bir başarı ateşi yanmıştı.`
    },
    questions: [
      {
        id: 's1-e1-q1',
        number: 1,
        outcomeCode: 'T.O.7.4',
        title: 'Bağlamdan Söz Varlığını Tahmin Etme ve Gerekçelendirme',
        points: 15,
        linesNeeded: 6,
        prompt: 'Metinde geçen altı çizili kelimelerin anlamlarını metnin bağlamından yararlanarak tahmin ediniz. Tahminlerinizi ve sizi bu tahmine götüren metin içi gerekçeleri yazınız.',
        subQuestions: [
          {
            label: 'a. dadandı',
            text: 'Metindeki: "Murat, ortaokulun kütüphanesine âdeta dadandı." cümlesindeki "dadandı" kelimesi:\n• Anlam Tahmini: ........................................................................\n• Metin İçi Gerekçe: ....................................................................',
            expectedAnswer: '• Anlam Tahmini: Bir yere çok sık gitmeyi alışkanlık hâline getirmek, oradan ayrılamamak.\n• Metin İçi Gerekçe: Murat\'ın kütüphanedeki kitapları durmaksızın ve büyük bir hevesle okuması.',
            points: 7,
            guideline: 'Anlam tahmini (4 Puan), metin içi somut gerekçe (3 Puan).'
          },
          {
            label: 'b. perdahlayarak',
            text: 'Metindeki: "...bu cam parçalarını saatlerce perdahlayarak pürüzsüz hâle getirdi." cümlesindeki "perdahlayarak" kelimesi:\n• Anlam Tahmini: ........................................................................\n• Metin İçi Gerekçe: ....................................................................',
            expectedAnswer: '• Anlam Tahmini: Bir nesnenin yüzeyini överek düzeltmek, cilalayarak pürüzsüz duruma getirmek.\n• Metin İçi Gerekçe: Cümlenin devamındaki "pürüzsüz hâle getirdi" ifadesi.',
            points: 8,
            guideline: 'Anlam tahmini (4 Puan), metin içi somut gerekçe (4 Puan).'
          }
        ],
        expectedAnswer: 'Kelimelerin metindeki bağlama uygun tahmini ve doğrudan metin içi delillerle desteklenmesi gerekmektedir.',
        rubric: [
          { criterion: 'Her iki kelimenin anlamına dair isabetli tahmin yapılması', points: 8 },
          { criterion: 'Tahmini destekleyen metin içi gerekçelerin açıkça sunulması', points: 7 }
        ]
      },
      {
        id: 's1-e1-q2',
        number: 2,
        outcomeCode: 'T.O.7.5',
        title: 'Metnin Yüzey Anlamı - Metnin Konusu',
        points: 10,
        linesNeeded: 3,
        prompt: 'Okuduğunuz metnin konusunu bir cümleyle yazınız.',
        expectedAnswer: 'Metnin konusu; gök bilimine büyük merak duyan Murat\'ın kısıtlı imkânlara rağmen azimle kendi teleskobunu yapması ve gökyüzünü keşfetme tutkusudur.',
        rubric: [
          { criterion: 'Metnin konusunun ana fikre kaymadan, eksiksiz ve tek cümleyle ifade edilmesi', points: 10 }
        ]
      },
      {
        id: 's1-e1-q3',
        number: 3,
        outcomeCode: 'T.O.7.8',
        title: 'Metnin Derin Anlamı (Metnin Ana Fikri / İletisi)',
        points: 15,
        linesNeeded: 5,
        prompt: 'Metnin son cümlesinde geçen "elleri buz tutsa da yüreğinde sönmeyecek bir başarı ateşi yanmıştı" ifadesindeki tezatlığı (zıtlığı) açıklayarak yazarın burada okuyucuya aktarmak istediği derin anlamı (metnin ana fikrini) değerlendiriniz.',
        expectedAnswer: 'Fiziksel soğukluk ve dondurucu kış şartları zorlukları simgelerken, yürekte yanan ateş ise insanın içindeki ideali, manevi coşkuyu ve azmin getirdiği sarsılmaz inancı simgeler. Yazar, dış dünyanın engelleri ne kadar dondurucu ve zor olursa olsun, insanın içinde taşıdığı bilim sevgisi ve başarma tutkusunun her türlü engeli eritecek güçte olduğunu vurgulamaktadır.',
        rubric: [
          { criterion: 'Buz tutan eller ile yürekteki ateş zıtlığının doğru tahlil edilmesi', points: 8 },
          { criterion: 'Fiziksel zorluklara karşı içsel azim ve inanç ilişkisinin üst düzey derinlikle açıklanması', points: 7 }
        ]
      },
      {
        id: 's1-e1-q4',
        number: 4,
        outcomeCode: 'T.O.7.21',
        title: 'Söz Varlığını Çözümleme - Sebep-Sonuç ve Deyimler',
        points: 15,
        linesNeeded: 5,
        prompt: 'Metinde geçen "vakit öldürmek" deyiminin metne kattığı anlamı açıklayınız. Ayrıca metindeki olay akışından hareketle Murat’ın başarısını sağlayan temel "sebep" ve ortaya çıkan "sonuç" arasındaki mantıksal bağı yazınız.',
        expectedAnswer: '• "Vakit öldürmek" deyimi: Zamanı yararsız, boş ve faydasız işlerle harcamak anlamındadır. Yazar, akranlarının zamanı boşa geçirmesi ile Murat\'ın üretkenliğini karşılaştırmak için kullanmıştır.\n• Sebep-Sonuç: Murat\'ın kütüphanede araştırma yapıp hurdalıklardan topladığı parçaları sabırla işlemesi (sebep), daha önce görmediği kuyruklu yıldızı keşfederek hedefine ulaşmasını (sonuç) sağlamıştır.',
        rubric: [
          { criterion: 'Deyimin bağlamsal anlamının eksiksiz açıklanması', points: 7 },
          { criterion: 'Sebep ve sonuç bağıntısının metne dayalı olarak kurulması', points: 8 }
        ]
      },
      {
        id: 's1-e1-q5',
        number: 5,
        outcomeCode: 'T.Y.7.3',
        title: 'İçerik ve Yapıya Yönelik Seçimleri Yönetme (Yazma)',
        points: 15,
        linesNeeded: 7,
        prompt: '"Hayatta karşılaşılan engeller, insanı hedeflerinden vazgeçirmemeli; aksine yeni çözüm yolları aramaya sevk etmelidir." düşüncesini savunan; giriş, gelişme ve sonuç bölümlerinden oluşan kısa bir düşünce yazısı kaleme alınız.',
        expectedAnswer: 'Örnek Yanıt: Başarıya giden yolda engeller kaçınılmazdır. Önemli olan bu engelleri birer duvar olarak değil, aşılması gereken birer basamak olarak görebilmektir. Tıpkı imkânsızlıklar içinde kendi teleskobunu yapan bir kâşif gibi, karşılaştığımız yokluklar bizi yıldırmamalı, üretkenliğe sevk etmelidir. Kararlılıkla çalışan insan için aşılamayacak hiçbir engel yoktur.',
        rubric: [
          { criterion: 'Giriş, gelişme ve sonuç planına uygun tutarlı bir yapı kurulması', points: 8 },
          { criterion: 'Düşünceyi geliştirme yollarının etkili kullanımı ve akıcılık', points: 7 }
        ]
      },
      {
        id: 's1-e1-q6',
        number: 6,
        outcomeCode: 'T.Y.7.18',
        title: 'Yazısını Zenginleştirecek Söz Varlığı Kullanımı',
        points: 15,
        linesNeeded: 6,
        prompt: 'Aşağıda verilen metin başlangıcını; "öz güven, kararlılık, basamak" kelimelerini ve en az bir "benzetme" ile bir "ikileme"yi kullanarak anlamlı bir şekilde tamamlayınız:\n\n"Teleskobun parçalarını masaya dizdiğinde etrafındakiler onun başaramayacağını söylüyorlardı..."',
        expectedAnswer: 'Örnek Metin: "Teleskobun parçalarını masaya dizdiğinde etrafındakiler onun başaramayacağını söylüyorlardı. Oysa o, içindeki ÖZ GÜVEN sayesinde hiçbir söze aldırmadı. Karşısına çıkan her engeli göklere ulaştıracak sağlam birer BASAMAK olarak gördü. Gece gündüz demeden, tırnaklarıyla kaza kaza parçaları birleştirdi. Gösterdiği KARARLILIK, karanlıkta parlayan bir kutup yıldızı gibi yolunu aydınlattı."',
        rubric: [
          { criterion: 'Verilen 3 anahtar kelimenin yerinde ve doğru kullanımı', points: 7 },
          { criterion: 'Benzetme ve ikilemeye yer verilmesi, dil zenginliği', points: 8 }
        ]
      },
      {
        id: 's1-e1-q7',
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
            expectedAnswer: '1. Cümle: Karşılıklı konuşmalarda yeterli olmayan, eksik bırakılan cevaplarda kullanılır.\n2. Cümle: Ünlem ve seslenmelerde anlatımı pekiştirmek için kullanılır. (Ünlem işaretinden sonra iki nokta konulması yeterlidir.)',
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
    id: 's1-e2',
    scenarioGroup: 'senaryo-1',
    scenarioGroupTitle: 'MEB Senaryo 1',
    scenarioName: '2. Sınav (Çini Fırınında Parlayan Düşler)',
    examNumber: 2,
    title: 'Çini Fırınında Parlayan Düşler',
    theme: '1. Tema: Millî Kültür & Geleneksel Sanatlarımız',
    targetClass: '7. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Çini Fırınında Parlayan Düşler',
      author: 'Türkçe Ülküsü Yayınları (Özgün Edebi Metin)',
      source: '7. Sınıf Türkçe Dersi - Geleneksel Sanatlarımız ve Kültürel Miras',
      content: `İznik’in dar sokaklarında çekiç ve fırça sesleri asırlardır birbirine karışırdı. On dört yaşındaki Kerem, dedesi Şükrü Usta’nın çini atölyesinde çıraklık yapıyordu. Atölye; killi toprak, kobalt mavisi boyalar ve kuruyan tabakların yaydığı tebeşir kokusuyla doluydu. Akranları dışarıda telefon oyunlarıyla oyalanırken Kerem, parmaklarının ucundaki samur fırçayla beyaz sırçalı tabağın üzerine lale motifleri konduruyordu. Fakat çizgileri bazen titriyor, bazen boya taşarak zarafeti bozuyordu.

Şükrü Usta tezgâhın başından usulca kalktı; torununun omzuna elini koydu:
— Kerem oğul, çiniye fırça vurmak sabır işidir. Toprak yoğrulmadan seramik olmaz, boya fırında yanmadan o mercan kırmızısını vermez. İnsan da böyledir; karşılaştığı zorlukların fırınında piştikçe olgunlaşır, dedi.

Kerem o gün dedesinin sözlerini aklına nakşetti. Haftalarca yılmadan fırça tutuşunu düzeltti, sabırla boyaları karıştırdı. Nihayet dedesinin sekseninci yaş günü için geceler boyu gizlice çalıştığı tabağı fırına verdi. Ertesi gün fırının kapağı açıldığında atölyenin loş ışığında parlayan bir şaheser belirdi: Masmavi bir zemin üstünde alev gibi kıvrılan nar taneleri ve laleler... Şükrü Usta tabağı eline aldığında gözleri nemlendi; çünkü toprak bu kez yalnızca bir tabak değil, kuşaktan kuşağa aktarılan bir ruh doğurmuştu.`
    },
    questions: [
      {
        id: 's1-e2-q1',
        number: 1,
        outcomeCode: 'T.O.7.4',
        title: 'Bağlamdan Söz Varlığını Tahmin Etme ve Gerekçelendirme',
        points: 15,
        linesNeeded: 6,
        prompt: 'Metinde geçen altı çizili kelimelerin anlamlarını metnin bağlamından hareketle tahmin ediniz. Tahminlerinizi metinden gerekçeler göstererek yazınız.',
        subQuestions: [
          {
            label: 'a. sırçalı',
            text: 'Metindeki: "...beyaz sırçalı tabağın üzerine lale motifleri konduruyordu." cümlesindeki "sırçalı" kelimesi:\n• Anlam Tahmini: ........................................................................\n• Metin İçi Gerekçe: ....................................................................',
            expectedAnswer: '• Anlam Tahmini: Üzeri cam gibi parlak ve saydam bir koruyucu tabakayla kaplanmış olan.\n• Metin İçi Gerekçe: Çini ve seramik tabakların fırınlanıp parlatılması bağlamı.',
            points: 7,
            guideline: 'Anlam tahmini (4 Puan), gerekçe (3 Puan).'
          },
          {
            label: 'b. nakşetti',
            text: 'Metindeki: "Kerem o gün dedesinin sözlerini aklına nakşetti." cümlesindeki "nakşetti" kelimesi:\n• Anlam Tahmini: ........................................................................\n• Metin İçi Gerekçe: ....................................................................',
            expectedAnswer: '• Anlam Tahmini: Bir şeyi hiçbir zaman unutmamak üzere zihnine, hafızasına derinlemesine yerleştirmek, kazımak.\n• Metin İçi Gerekçe: Kerem\'in haftalarca yılmadan dedesinin öğüdüyle çalışmaya devam etmesi.',
            points: 8,
            guideline: 'Anlam tahmini (4 Puan), gerekçe (4 Puan).'
          }
        ],
        expectedAnswer: 'Kelimelerin bağlam anlamları ve metinden sunulan somut deliller.',
        rubric: [
          { criterion: 'Sırçalı ve nakşetti kelimelerinin isabetli tahmini', points: 8 },
          { criterion: 'Her tahmin için metinden güçlü gerekçe sunulması', points: 7 }
        ]
      },
      {
        id: 's1-e2-q2',
        number: 2,
        outcomeCode: 'T.O.7.5',
        title: 'Metnin Yüzey Anlamı - Metnin Konusu',
        points: 10,
        linesNeeded: 3,
        prompt: 'Okuduğunuz metnin konusunu bir cümleyle yazınız.',
        expectedAnswer: 'Metnin konusu, geleneksel çini sanatını dedesinden öğrenen Kerem\'in sabır ve azimle çalışarak ustalığa adım atmasıdır.',
        rubric: [
          { criterion: 'Metnin konusunun eksiksiz ve tek cümleyle belirtilmesi', points: 10 }
        ]
      },
      {
        id: 's1-e2-q3',
        number: 3,
        outcomeCode: 'T.O.7.8',
        title: 'Metnin Derin Anlamı (Metnin Ana Fikri / İletisi)',
        points: 15,
        linesNeeded: 5,
        prompt: 'Metinde geçen "İnsan da böyledir; karşılaştığı zorlukların fırınında piştikçe olgunlaşır." cümlesindeki benzetmeyi çözümleyerek yazarın burada okuyucuya aktarmak istediği derin anlamı (metnin ana fikrini) açıklayınız.',
        expectedAnswer: 'Yazar, çamurun yüksek ateşli fırında yanarak sağlam ve pırıl pırıl bir sanat eserine dönüşmesi ile insanın hayatta karşılaştığı sıkıntı ve engellerle mücadele ederek tecrübe kazanıp olgunlaşması arasında derin bir benzerlik kurmuştur. İnsan ancak zorluklara göğüs gerdiğinde karakterini sağlamlaştırır ve öz değerini ortaya koyar.',
        rubric: [
          { criterion: 'Çini fırını ile hayat zorlukları arasındaki analojinin çözümlenmesi', points: 8 },
          { criterion: 'Olgunlaşma sürecine dair derin ve felsefi çıkarımın ifade edilmesi', points: 7 }
        ]
      },
      {
        id: 's1-e2-q4',
        number: 4,
        outcomeCode: 'T.O.7.21',
        title: 'Söz Varlığını Çözümleme - Deyim ve Sebep-Sonuç İlişkisi',
        points: 15,
        linesNeeded: 5,
        prompt: 'Metinde geçen "gözleri nemlenmek" deyiminin anlamına değinerek, Şükrü Usta’nın bu duyguyu yaşamasının arkasındaki sebep-sonuç ilişkisini metne dayanarak yazınız.',
        expectedAnswer: '• "Gözleri nemlenmek" deyimi: Duygulanmak, sevinç ya da gururdan ötürü gözleri yaşarmak demektir.\n• Sebep-Sonuç: Torunu Kerem\'in sabırla çalışıp dedesinin zanaatını başarıyla devam ettirdiğini ve ortaya koyduğu muhteşem eseri görmesi (sebep), Şükrü Usta\'nın derin bir gurur ve mutlulukla gözlerinin dolmasına (sonuç) yol açmıştır.',
        rubric: [
          { criterion: 'Deyimin doğru tahlil edilmesi', points: 7 },
          { criterion: 'Şükrü Usta\'nın duygusal tepkisine dair sebep-sonuç ilişkisinin metinle temellendirilmesi', points: 8 }
        ]
      },
      {
        id: 's1-e2-q5',
        number: 5,
        outcomeCode: 'T.Y.7.3',
        title: 'İçerik ve Yapıya Yönelik Seçimleri Yönetme (Yazma)',
        points: 15,
        linesNeeded: 7,
        prompt: '"Geleneksel el sanatlarımız, geçmişimizle geleceğimiz arasında kurulan en kıymetli köprüdür." fikrini temel alan, giriş-gelişme-sonuç bölümlerini içeren özgün bir düşünce yazısı yazınız.',
        expectedAnswer: 'Örnek Metin: Bir milletin ruhu, ürettiği sanatta ve kültürel mirasındadır. Çinicilik, ebru ve dokuma gibi kadim sanatlar sadece birer eşya değil; atalarımızın duygularını, sabrını ve estetik zevkini bugüne taşıyan birer canlı tanıktır. Genç nesiller bu sanatları yaşattıkça kendi köklerine tutunur. Unutulmamalıdır ki geçmişine sahip çıkmayan bir toplum, geleceğini inşa edemez.',
        rubric: [
          { criterion: 'Düşünce yazısının yapısal kurgusu (giriş, gelişme, sonuç dengesi)', points: 8 },
          { criterion: 'Fikirlerin tutarlılığı ve ikna edici anlatım', points: 7 }
        ]
      },
      {
        id: 's1-e2-q6',
        number: 6,
        outcomeCode: 'T.Y.7.18',
        title: 'Yazısını Zenginleştirecek Söz Varlığı Kullanımı',
        points: 15,
        linesNeeded: 6,
        prompt: 'Aşağıda verilen metin başlangıcını; "sabır, miras, emek" sözcüklerini ve en az bir "benzetme" ile bir "ikileme"yi kullanarak anlamlı bir şekilde tamamlayınız:\n\n"Fırçanın ucundaki boya kâğıda dokunduğunda atölyedeki herkes nefesini tuttu..."',
        expectedAnswer: 'Örnek Metin: "Fırçanın ucundaki boya kâğıda dokunduğunda atölyedeki herkes nefesini tuttu. Çünkü ortaya konan şey, yılların alın teriyle yoğrulan kutlu bir EMEK ürünüydü. Genç çırak, atalarından devraldığı bu eşsiz MİRASI yaşatmak için gece gündüz SABIR ile çalışmıştı. Tabaktaki renkler, baharda açan taze kır çiçekleri gibi capcanlı parıldıyordu."',
        rubric: [
          { criterion: 'Verilen 3 anahtar kelimenin (sabır, miras, emek) bağlama uygun kullanımı', points: 7 },
          { criterion: 'Benzetme ve ikileme unsurlarının anlatıma ustalıkla katılması', points: 8 }
        ]
      },
      {
        id: 's1-e2-q7',
        number: 7,
        outcomeCode: 'T.Y.7.21',
        title: 'Noktalama İşaretleri (Üç Nokta ve Noktalı Virgül) Uygulaması',
        points: 15,
        linesNeeded: 6,
        prompt: 'Aşağıdaki noktalama görevlerini yönergelere uygun olarak tamamlayınız.',
        subQuestions: [
          {
            label: 'a. Üç Nokta (...) ve Kullanım Amaçları',
            text: 'Aşağıdaki cümlelerde geçen üç noktanın (...) kullanım gerekçelerini altlarındaki boşluklara yazınız:\n1. "— Bu tabağı fırına sürmeden önce ne kadar bekleteceksin?\n   — Akşama kadar..."\n   Kullanım Gerekçesi: ........................................................................\n2. "Hey koca usta!.. Bu sırça hiç solar mı?"\n   Kullanım Gerekçesi: ........................................................................',
            expectedAnswer: '1. Cümle: Karşılıklı konuşmalarda yeterli olmayan, eksik bırakılan cevaplarda kullanılmıştır.\n2. Cümle: Ünlem ve seslenmelerde anlatımı pekiştirmek için kullanılmıştır.',
            points: 7,
            guideline: '1. gerekçe (4 Puan), 2. gerekçe (3 Puan).'
          },
          {
            label: 'b. Noktalı Virgül (;) ve Noktalama Uygulaması',
            text: 'Aşağıdaki cümlede yay ayraçla ( ) belirtilen yerlere uygun noktalama işaretlerini koyunuz ve noktalı virgülün (;) kullanım kuralını açıklayınız:\n"Kerem; fırçaları, boyaları, sırça kaplarını raftan aldı ( ) çekiç, keski ve zımparaları ise tezgâha bıraktı ( )"\n• Noktalı virgülün (;) kullanım kuralı: .....................................................................',
            expectedAnswer: '• Yay ayraçlara sırasıyla: ( ; ) ve ( . ) getirilmelidir.\n• Noktalı Virgülün (;) Kullanım Kuralı: Cümle içinde virgüllerle ayrılmış tür veya takımları (resim/boya aletleri ile marangozluk aletleri) birbirinden ayırmak için kullanılır.',
            points: 8,
            guideline: 'İşaretlerin yerleşimi (4 Puan), kuralın açıklanması (4 Puan).'
          }
        ],
        expectedAnswer: 'Üç nokta ve noktalı virgül kurallarının tespiti ve doğru tatbik edilmesi.',
        rubric: [
          { criterion: 'Üç noktanın iki ayrı kullanım görevinin doğru tespiti', points: 7 },
          { criterion: 'Yay ayraçların doldurulması ve noktalı virgülün kuralının yazılması', points: 8 }
        ]
      }
    ]
  },
  {
    id: 's1-e3',
    scenarioGroup: 'senaryo-1',
    scenarioGroupTitle: 'MEB Senaryo 1',
    scenarioName: '3. Sınav (Bozkırın Küçük Botanikçisi)',
    examNumber: 3,
    title: 'Bozkırın Küçük Botanikçisi',
    theme: '1. Tema: Doğa Bilinci & Araştırma ve Çevre',
    targetClass: '7. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Bozkırın Küçük Botanikçisi',
      author: 'Türkçe Ülküsü Yayınları (Özgün Edebi Metin)',
      source: '7. Sınıf Türkçe Dersi - Çevre Eğitimi ve Doğa Sevgisi',
      content: `İç Anadolu’nun sarı bozkırında rüzgâr kuru dikenleri sürüklerken on iki yaşındaki Zeynep, elindeki büyüteçle toprağa eğilmişti. Köydeki pek çok insan için bu uçsuz bucaksız arazi sadece kurak ve taşlık bir alandı. Oysa Zeynep için her yarık, her taş altı keşfedilmeyi bekleyen bir canlılar atlasıydı. Tahta kapaklı defterine her gün bozkırda rastladığı endemik bitkilerin resimlerini çizer, yaprak yapılarını inceler, köklerinin kuraklığa nasıl direndiğini not ederdi.

Bir gün köyün deresinin kıyısında, kayaların arasından başını uzatmış, kadife moru yaprakları olan narin bir çiçeğe rastladı. Daha önce hiçbir botanik kitabında bu çiçeğin eşine rastlamamıştı. Heyecanla çiçeği kökünden koparmak yerine defterine santim santim taslağını çıkardı; yaprağının dokusunu, kokusunu kaydetti. Ertesi hafta ilçeden gelen ziraat mühendislerine defterindeki çizimleri gösterdiğinde uzmanlar hayretler içinde kaldı. Zeynep, bölgede nesli tükendiği sanılan çok nadir bir dağ süsenini keşfetmişti.

Köy kahvesinde toplanan köylüler Zeynep’i alkışlarken ihtiyar muhtar başını salladı:
— Biz bu topraklara sadece kuru çorak diye bakardık kızım; meğer bakmakla görmek bambaşka şeylermiş, dedi. Zeynep o gün anladı ki sevgiyle bakılan hiçbir toprak çorak değildir.`
    },
    questions: [
      {
        id: 's1-e3-q1',
        number: 1,
        outcomeCode: 'T.O.7.4',
        title: 'Bağlamdan Söz Varlığını Tahmin Etme ve Gerekçelendirme',
        points: 15,
        linesNeeded: 6,
        prompt: 'Metinde geçen altı çizili kelimelerin anlamlarını metnin bağlamından yararlanarak tahmin ediniz ve metinden delil göstererek yazınız.',
        subQuestions: [
          {
            label: 'a. endemik',
            text: 'Metindeki: "...bozkırda rastladığı endemik bitkilerin resimlerini çizer..." cümlesindeki "endemik" kelimesi:\n• Anlam Tahmini: ........................................................................\n• Metin İçi Gerekçe: ....................................................................',
            expectedAnswer: '• Anlam Tahmini: Yalnızca belirli bir yöreye, dar bir coğrafi bölgeye özgü olan, başka yerde kendiliğinden yetişmeyen.\n• Metin İçi Gerekçe: Bölgede nesli tükendiği sanılan çok nadir bir bitki olması ve botanik kitaplarında rastlanmaması.',
            points: 7,
            guideline: 'Tahmin (4 Puan), gerekçe (3 Puan).'
          },
          {
            label: 'b. taslak',
            text: 'Metindeki: "...çiçeği kökünden koparmak yerine defterine santim santim taslağını çıkardı..." cümlesindeki "taslağını" kelimesi:\n• Anlam Tahmini: ........................................................................\n• Metin İçi Gerekçe: ....................................................................',
            expectedAnswer: '• Anlam Tahmini: Bir eserin, çizimin veya yazının henüz tamamlanmamış, ana hatlarını gösteren ön çizimi, planı.\n• Metin İçi Gerekçe: Zeynep\'in bitkiyi koparmadan defterine ölçülü çizim yapması.',
            points: 8,
            guideline: 'Tahmin (4 Puan), gerekçe (4 Puan).'
          }
        ],
        expectedAnswer: 'Endemik ve taslak sözcüklerinin doğru tahmini ve metin gerekçesi.',
        rubric: [
          { criterion: 'Kelimelerin anlamına yönelik isabetli çıkarım', points: 8 },
          { criterion: 'Metin içi destekleyici gerekçelerin net sunulması', points: 7 }
        ]
      },
      {
        id: 's1-e3-q2',
        number: 2,
        outcomeCode: 'T.O.7.5',
        title: 'Metnin Yüzey Anlamı - Metnin Konusu',
        points: 10,
        linesNeeded: 3,
        prompt: 'Okuduğunuz metnin konusunu bir cümleyle ifade ediniz.',
        expectedAnswer: 'Metnin konusu, doğaya büyük bir merakla yaklaşan Zeynep\'in bozkırda nesli tükenmekte olan nadir bir bitki türünü sabır ve dikkatle keşfetmesidir.',
        rubric: [
          { criterion: 'Metnin ana konusunun doğru ve net biçimde tek cümleyle özetlenmesi', points: 10 }
        ]
      },
      {
        id: 's1-e3-q3',
        number: 3,
        outcomeCode: 'T.O.7.8',
        title: 'Metnin Derin Anlamı (Metnin Ana Fikri / İletisi)',
        points: 15,
        linesNeeded: 5,
        prompt: 'Muhtarın "Meğer bakmakla görmek bambaşka şeylermiş." sözünden hareketle yazarın okuyucuya aktarmak istediği derin anlamı (metnin ana fikrini) açıklayınız.',
        expectedAnswer: 'Bakmak, nesneleri sadece fiziksel olarak algılamak ve derinliğine inmeden yüzeysel geçmektir; görmek ise dikkat, merak, sevgi ve bilinçle inceleyip nesnelerin ardındaki gizli güzelliği ve hakikati fark etmektir. Yazar, insanın çevresine sevgi ve ilgiyle yaklaştığında sıradan ve çorak sanılan yerlerde bile paha biçilmez zenginlikler bulabileceğini vurgulamaktadır.',
        rubric: [
          { criterion: 'Bakmak ile görmek arasındaki felsefi ve bilişsel farkın açıklanması', points: 8 },
          { criterion: 'Doğaya ve hayata karşı bilinçli yaklaşım mesajının üst düzey kavranması', points: 7 }
        ]
      },
      {
        id: 's1-e3-q4',
        number: 4,
        outcomeCode: 'T.O.7.21',
        title: 'Söz Varlığını Çözümleme - Sebep-Sonuç İlişkisi',
        points: 15,
        linesNeeded: 5,
        prompt: 'Zeynep’in keşfettiği çiçeği koparmayıp sadece çizimini yapması onun hangi kişilik özelliğini gösterir? Bu davranışın ortaya çıkardığı sebep-sonuç ilişkisini metne dayanarak yazınız.',
        expectedAnswer: '• Kişilik Özelliği: Doğaya derin saygı duyan, korumacı, bilinçli ve sorumlu bir araştırmacı olduğunu gösterir.\n• Sebep-Sonuç İlişkisi: Çiçeği kökünden koparmayıp doğal ortamını koruması ve bilimsel ölçümlerini deftere kaydetmesi (sebep), uzmanların gelip bitkiyi canlı ortamında tespit ederek koruma altına almasını (sonuç) sağlamıştır.',
        rubric: [
          { criterion: 'Karakter özelliğinin tespiti', points: 7 },
          { criterion: 'Sebep ve sonuç mantıksal örgüsünün doğru kurulması', points: 8 }
        ]
      },
      {
        id: 's1-e3-q5',
        number: 5,
        outcomeCode: 'T.Y.7.3',
        title: 'İçerik ve Yapıya Yönelik Seçimleri Yönetme (Yazma)',
        points: 15,
        linesNeeded: 7,
        prompt: '"Çevremizdeki doğal zenginlikleri korumak, sadece bugünün değil geleceğin de teminatıdır." düşüncesinden yola çıkarak giriş, gelişme ve sonuç bölümlerinden oluşan bir deneme yazınız.',
        expectedAnswer: 'Örnek Metin: Doğa, bize atalarımızdan miras kalmış bir mülk değil; çocuklarımızdan aldığımız kutsal bir emanettir. Ormanlarımız, sularımız ve üzerinde açan narin çiçekler yaşam döngüsünün vazgeçilmez parçalarıdır. Eğer doğayı hoyratça tüketirsek yarın nefes alacak bir dünya bulamayız. Doğayı korumak, insanlığın kendi geleceğine sahip çıkmasıdır.',
        rubric: [
          { criterion: 'Metnin yapısal bütünlüğü ve planlı gelişimi', points: 8 },
          { criterion: 'Konunun derinliği ve anlatım dili', points: 7 }
        ]
      },
      {
        id: 's1-e3-q6',
        number: 6,
        outcomeCode: 'T.Y.7.18',
        title: 'Yazısını Zenginleştirecek Söz Varlığı Kullanımı',
        points: 15,
        linesNeeded: 6,
        prompt: 'Aşağıda verilen metin başlangıcını; "keşif, korumak, bilinç" sözcüklerini ve en az bir "benzetme" ile bir "ikileme"yi kullanarak zenginleştirerek tamamlayınız:\n\n"Bozkırın sabah ayazında yürürken topraktan yükselen kokuyu içine çekti..."',
        expectedAnswer: 'Örnek Metin: "Bozkırın sabah ayazında yürürken topraktan yükselen kokuyu içine çekti. Bu kurak görünen topraklar, derin bir BİLİNÇ ile bakıldığında adeta bir hazine sandığı gibiydi. Doğayı KORUMAK adına adım adım, yavaş yavaş ilerledi. Karşılaştığı her yeni filiz, ona hayatın sırlarını fısıldayan yepyeni bir KEŞİF kapısı aralıyordu."',
        rubric: [
          { criterion: 'Belirlenen 3 kavramın (keşif, korumak, bilinç) metne yedirilmesi', points: 7 },
          { criterion: 'Benzetme ve ikilemenin anlatımı güçlendirecek biçimde sunulması', points: 8 }
        ]
      },
      {
        id: 's1-e3-q7',
        number: 7,
        outcomeCode: 'T.Y.7.21',
        title: 'Noktalama İşaretleri (Üç Nokta ve Noktalı Virgül) Uygulaması',
        points: 15,
        linesNeeded: 6,
        prompt: 'Aşağıda verilen noktalama kuralları doğrultusunda ilgili görevleri tamamlayınız.',
        subQuestions: [
          {
            label: 'a. Üç Nokta (...) ve Seslenme Kuralı',
            text: 'Aşağıdaki cümlelerde geçen üç noktanın (...) hangi görevle kullanıldığını altlarındaki boşluklara yazınız:\n1. "— Bu çiçeğin adını nereden öğrendin Zeynep?\n   — Köyümüzün yaylasından..."\n   Kullanım Görevi: ........................................................................\n2. "Hey dağlar!.. Sakladığınız mor süsenleri gösterin artık!"\n   Kullanım Görevi: ........................................................................',
            expectedAnswer: '1. Cümle: Karşılıklı konuşmalarda yeterli olmayan, eksik bırakılan cevaplarda kullanılır.\n2. Cümle: Ünlem ve seslenmelerde anlatımı pekiştirmek için kullanılmıştır. (Ünlemden sonra iki nokta konulması yeterlidir.)',
            points: 7,
            guideline: '1. görev (4 Puan), 2. görev (3 Puan).'
          },
          {
            label: 'b. Noktalı Virgül (;) ve Noktalama Uygulaması',
            text: 'Aşağıdaki cümlede yay ayraçla ( ) gösterilen yerlere uygun noktalama işaretlerini koyunuz ve noktalı virgülün (;) kullanım gerekçesini açıklayınız:\n"Zeynep; büyüteci, cetveli, çizim defterini çantasına koydu ( ) termosunu, kazağını ve şapkasını ise sepetine yerleştirdi ( )"\n• Noktalı virgülün (;) kullanım gerekçesi: .....................................................................',
            expectedAnswer: '• Yay ayraçlara sırasıyla: ( ; ) ve ( . ) getirilmelidir.\n• Noktalı Virgülün (;) Kullanım Gerekçesi: Cümle içinde virgüllerle ayrılmış tür veya takımları (araştırma aletleri ile giyim eşyaları) birbirinden ayırmak için kullanılmıştır.',
            points: 8,
            guideline: 'Ayraçlar (4 Puan), kural açıklaması (4 Puan).'
          }
        ],
        expectedAnswer: 'Üç nokta ve noktalı virgülün kurala uygun tespiti ve kullanımı.',
        rubric: [
          { criterion: 'Üç noktanın iki ayrı görevinin doğru tespiti', points: 7 },
          { criterion: 'Yay ayraçların doldurulması ve noktalı virgül gerekçesinin izahı', points: 8 }
        ]
      }
    ]
  }
];
