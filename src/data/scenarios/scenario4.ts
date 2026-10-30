import { ExamScenario } from '../../types/exam';

export const SCENARIO_4_EXAMS: ExamScenario[] = [
  {
    id: 's4-e1',
    scenarioGroup: 'senaryo-4',
    scenarioGroupTitle: 'MEB Senaryo 4',
    scenarioName: '1. Sınav (Kemençenin Tellerindeki Karadeniz)',
    examNumber: 1,
    title: 'Kemençenin Tellerindeki Karadeniz',
    theme: '4. Tema: Millî Kültür, Sanat ve Azim',
    targetClass: '7. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Kemençenin Tellerindeki Karadeniz',
      author: 'Türkçe Ülküsü Yayınları (Özgün Edebi Metin)',
      source: '7. Sınıf Türkçe Dersi - Millî Kültür, Sanat ve Sabır',
      content: `Trabzon’un sisli yaylalarına sonbahar yağmurları indiğinde ahşap evlerin pencerelerinden sıcak soba dumanları yükselirdi. On üç yaşındaki Tuna, okuldan döner dönmez dedesi Dursun Usta’nın evin alt katındaki küçük ahşap atölyesine koşardı. Dursun Usta, Karadeniz’in en bilinen kemençe yapımcılarından biriydi. Atölyenin içi ardıç, dut ve erik ağaçlarının kendine özgü hoş kokusuyla doluydu.

Tuna, dedesinin yaptığı kemençeleri dinlemeyi çok seviyor; kendisi de bu müzik aletini çalmak istiyordu. Ancak yayı tellere her sürdüğünde kemençeden cılız ve uyumsuz sesler çıkıyordu. Birkaç hafta denedikten sonra umutsuzluğa kapılıp kemençeyi tezgâhın üzerine bıraktı:
— Dede, parmaklarım tellere bir türlü alışamıyor. Galiba ben bu işi hiç öğrenemeyeceğim, dedi.

Dursun Usta, elindeki zımparayı yavaşça masaya koydu ve duvarda asılı duran ilk kemençesini gösterdi:
— Bak Tuna, şu yayladaki coşkun dereler bile yatağını bir günde açmadı; suyu damla damla akıtarak sert kayalara yol verdi. Sanat da tıpkı o dere gibidir; sabırla tekrar etmeden teller dile gelmez.

Dedesinin bu sözleri Tuna’ya yeniden güç verdi. O günden sonra her akşam parmakları ağrıyana kadar bıkmadan çalıştı. Aylar sonra yayla şenliğinde kemençesinin yayını tellere dokundurduğunda, yaylanın rüzgârı kadar duru ve coşkulu bir ezgi bütün meydanı sardı.`
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
            label: 'a. cılız',
            text: 'Metindeki: "Ancak yayı tellere her sürdüğünde kemençeden cılız ve uyumsuz sesler çıkıyordu." cümlesindeki "cılız" kelimesi:\n• Anlam Tahmini: ........................................................................\n• Metin İçi Gerekçe: ....................................................................',
            expectedAnswer: '• Anlam Tahmini: Güçsüz, zayıf, gür olmayan, etkisi az.\n• Metin İçi Gerekçe: Tuna\'nın henüz kemençe çalmayı bilmediği için tellerden güçlü ve uyumlu bir ses çıkaramaması.',
            points: 7,
            guideline: 'Anlam tahmini (4 Puan), metin içi somut gerekçe (3 Puan).'
          },
          {
            label: 'b. ezgi',
            text: 'Metindeki: "...yaylanın rüzgârı kadar duru ve coşkulu bir ezgi bütün meydanı sardı." cümlesindeki "ezgi" kelimesi:\n• Anlam Tahmini: ........................................................................\n• Metin İçi Gerekçe: ....................................................................',
            expectedAnswer: '• Anlam Tahmini: Belli bir kurala göre oluşturulan, kulağa hoş gelen ses dizisi, melodi, nağme.\n• Metin İçi Gerekçe: Tuna\'nın yayla şenliğinde kemençesinin yayını tellere dokundurmasıyla ortaya çıkan uyumlu müzik sesi.',
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
        expectedAnswer: 'Metnin konusu, kemençe çalmayı öğrenirken zorlanan Tuna\'nın dedesi Dursun Usta\'nın öğüdüyle pes etmeyip sabırla çalışarak kemençe çalmayı başarmasıdır.',
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
        prompt: 'Metne göre Dursun Usta’nın atölyesinde hangi ağaçların kokusu vardır ve Tuna başlangıçta neden kemençeyi tezgâhın üzerine bırakmıştır?',
        expectedAnswer: 'Dursun Usta\'nın atölyesinde ardıç, dut ve erik ağaçlarının kokusu vardır. Tuna, yayı tellere her sürdüğünde cılız ve uyumsuz sesler çıktığı ve parmakları tellere alışamadığı için umutsuzluğa kapılarak kemençeyi bırakmıştır.',
        rubric: [
          { criterion: 'Ağaç türlerinin (ardıç, dut, erik) ve Tuna\'nın umutsuzluğa kapılma sebebinin eksiksiz yazılması', points: 10 }
        ]
      },
      {
        id: 's4-e1-q4',
        number: 4,
        outcomeCode: 'T.O.7.7',
        title: 'Metnin Derin Anlamı (Metnin Ana Fikri / İletisi)',
        points: 15,
        linesNeeded: 5,
        prompt: 'Dursun Usta’nın "Şu yayladaki coşkun dereler bile yatağını bir günde açmadı; suyu damla damla akıtarak sert kayalara yol verdi." sözünden hareketle metnin derin anlamını (ana fikrini) açıklayınız.',
        expectedAnswer: 'Su damlaları nasıl sabırla ve süreklilikle akarak en sert kayaları bile aşındırıp kendine yatak açıyorsa, insan da bir sanatı veya beceriyi ancak sabırla ve düzenli tekrarlarla öğrenebilir. Metnin derin anlamı; vazgeçmeden ve sabırla çalışıldığında en zor görünen işlerin bile ustalıkla başarılabileceğidir.',
        rubric: [
          { criterion: 'Dere ve su damlası benzetmesinin sabır ve süreklilikle ilişkilendirilmesi', points: 8 },
          { criterion: 'Azimle çalışmanın başarıya ulaştıracağı ana fikrinin açıkça ifade edilmesi', points: 7 }
        ]
      },
      {
        id: 's4-e1-q5',
        number: 5,
        outcomeCode: 'T.O.7.21',
        title: 'Söz Varlığını Çözümleme - Deyim ve Sebep-Sonuç',
        points: 15,
        linesNeeded: 5,
        prompt: 'Metinde geçen "umutsuzluğa kapılmak" deyiminin metne kattığı anlamı açıklayınız. Ayrıca metindeki olay akışından hareketle Tuna’nın yayla şenliğinde coşkulu bir ezgi çalabilmesini sağlayan temel "sebep" ve ortaya çıkan "sonuç" arasındaki bağı yazınız.',
        expectedAnswer: '• "Umutsuzluğa kapılmak" deyimi: Bir işin olacağına veya başarılacağına dair inancını yitirmek, karamsarlığa düşmek anlamındadır.\n• Sebep-Sonuç: Tuna\'nın dedesinin öğüdünü dinleyerek her akşam parmakları ağrıyana kadar bıkmadan çalışması (sebep), aylar sonra yayla şenliğinde kemençesiyle duru ve coşkulu bir ezgi çalarak herkesi etkilemesini (sonuç) sağlamıştır.',
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
        prompt: 'Aşağıda verilen metin başlangıcını, Tuna’nın azmini ve çalışma disiplinini yansıtacak biçimde "sabır, gayret, ustalık, başarıya giden yol" ifadelerini ve en az bir "benzetme" ile bir "ikileme"yi kullanarak anlamlı bir şekilde tamamlayınız:\n\n"Ahşap atölyesinin kapısından içeri girdiğinde dedesinin elindeki kemençeyi hayranlıkla izledi..."',
        expectedAnswer: 'Örnek Metin: "Ahşap atölyesinin kapısından içeri girdiğinde dedesinin elindeki kemençeyi hayranlıkla izledi. Biliyordu ki BAŞARIYA GİDEN YOL, aceleyle değil adım adım yürünerek aşılırdı. Gerçek USTALIK, karşılaşılan ilk zorlukta pes etmeyenlerin ödülüydü. Bu yüzden Tuna, büyük bir SABIR ile her akşam yayını tellere sürdü. Gösterdiği bu içten GAYRET sayesinde kemençenin sesi günden güne, yavaş yavaş berraklaştı ve sonunda yayladan akan coşkun bir şelale gibi yankılandı."',
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
            text: 'Aşağıdaki cümlelerde geçen üç noktanın (...) hangi görevle kullanıldığını altlarındaki boşluklara yazınız:\n1. "— Bu kemençenin gövdesini hangi ağaçtan yaptın Dursun Usta?\n   — Yayladaki yaşlı ardıçtan..."\n   Kullanım Görevi: ........................................................................\n2. "Tuna!.. Yayını tellere daha dengeli ve yumuşak bastır!"\n   Kullanım Görevi: ........................................................................',
            expectedAnswer: '1. Cümle: Karşılıklı konuşmalarda yeterli olmayan, eksik bırakılan cevaplarda kullanılır.\n2. Cümle: Ünlem ve seslenmelerde anlatımı pekiştirmek için kullanılır. (Ünlemden sonra iki nokta konulması yeterlidir.)',
            points: 7,
            guideline: '1. kullanım görevi (4 Puan), 2. kullanım görevi (3 Puan).'
          },
          {
            label: 'b. Noktalı Virgül (;) ve Noktalama Uygulaması',
            text: 'Aşağıdaki parçada yay ayraçla ( ) gösterilen yerlere uygun noktalama işaretlerini getiriniz ve noktalı virgülün (;) buradaki kullanım gerekçesini yazınız:\n"Dursun Usta; ardıç, dut, erik kütüklerini köşeye ayırdı ( ) keski, zımpara ve burguları ise tezgâha dizdi ( ) Kemençenin sesi ne kadar da etkileyiciydi ( )"\n• Noktalı virgülün (;) kullanım gerekçesi: .....................................................................',
            expectedAnswer: '• Yay ayraçlara sırasıyla: ( ; ) ( . ) ( ! ) işaretleri gelmelidir.\n• Noktalı Virgülün (;) Kullanım Gerekçesi: Cümle içinde virgüllerle ayrılmış tür veya takımları (ağaç türleri ile marangozluk aletleri) birbirinden ayırmak için konmuştur.',
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
      content: `Ilgaz Dağları’nın dik yamaçlarında kasım soğuğu bıçak gibi kesiyordu. İnebolu kıyılarından cepheye cephane taşıyan kağnı kollarının tekerleklerinden yükselen sesler, dağların uğultusuna karışıyordu. Bu zorlu yolculukta on beş yaşındaki Mehmet ile yaşlı annesi de vardı. Kağnıya koşulu öküzler, dik yokuşlarda nefes nefese kalmış; çamurlu yollarda zorlukla adım atıyordu. 

Hava karardıkça kar serpiştirmeye, tipi şiddetini artırmaya başladı. Mehmet’in sırtındaki ince yelek soğuğu önlemeye yetmiyor, dudakları soğuktan titriyordu. Bir ara kağnı derin bir çamur çukuruna saplandı, öküzler ne kadar zorlasa da tekerlek bir santim bile ilerlemedi. Mehmet hiç düşünmeden omzunu çamurlu tekerleğe dayadı, var gücüyle yüklendi. İşte tam o anda sırtındaki kalın yün paltosunu çıkarıp ıslanmasınlar diye kağnıdaki cephane sandıklarının üzerine örttü. Annesi titreyen elleriyle oğlunun kolunu tuttu:
— Oğlum, üşüyeceksin! Üstünü niye çıkardın?

Mehmet, gözlerinde parlayan sarsılmaz bir inançla başını kaldırdı:
— Anne; biz üşürüz, biz ıslanırız ama cephedeki askerimizin cephanesi ıslanırsa vatanımız tehlikeye girer! 

Bu sözler gecenin karanlığını bir şimşek gibi aydınlattı. Gerideki kağnılardan yetişen köylüler de koşup geldiler. Omuz omuza verip kağnıyı çamurdan çıkardılar. O gece Ilgaz’ın zirvesinde yalnızca bir kağnı değil; bütün bir milletin özgürlük ve bağımsızlık sevgisi yürüyordu.`
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
            label: 'a. cephane',
            text: 'Metindeki: "İnebolu kıyılarından cepheye cephane taşıyan kağnı kollarının..." cümlesindeki "cephane" kelimesi:\n• Anlam Tahmini: ........................................................................\n• Metin İçi Gerekçe: ....................................................................',
            expectedAnswer: '• Anlam Tahmini: Savaşta ordunun kullandığı mermi, fişek ve patlayıcı maddelerin tümü, mühimmat.\n• Metin İçi Gerekçe: Cephedeki askerlere kağnılarla sandıklar içinde taşınması ve ıslanmaması için korunması.',
            points: 7,
            guideline: 'Anlam tahmini (4 Puan), metin içi gerekçe (3 Puan).'
          },
          {
            label: 'b. sarsılmaz',
            text: 'Metindeki: "Mehmet, gözlerinde parlayan sarsılmaz bir inançla başını kaldırdı..." cümlesindeki "sarsılmaz" kelimesi:\n• Anlam Tahmini: ........................................................................\n• Metin İçi Gerekçe: ....................................................................',
            expectedAnswer: '• Anlam Tahmini: Hiçbir güçlük karşısında zayıflamayan, bozulmayan, çok sağlam ve güçlü.\n• Metin İçi Gerekçe: Mehmet\'in dondurucu soğuğa rağmen kendi paltosunu çıkarıp cephaneyi korumaktan vazgeçmemesi.',
            points: 8,
            guideline: 'Anlam tahmini (4 Puan), metin içi gerekçe (4 Puan).'
          }
        ],
        expectedAnswer: 'Cephane ve sarsılmaz kelimelerinin bağlam anlamı ve gerekçeleri.',
        rubric: [
          { criterion: 'Cephane ve sarsılmaz sözcüklerinin isabetle tahmin edilmesi', points: 8 },
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
        prompt: 'Mehmet’in "Biz üşürüz, biz ıslanırız ama cephedeki askerimizin cephanesi ıslanırsa vatanımız tehlikeye girer!" sözünden hareketle metnin derin anlamını (ana fikrini) açıklayınız.',
        expectedAnswer: 'Türk milleti için vatanın bağımsızlığı ve güvenliği, bireyin kendi canından ve rahatından çok daha üstündür. Metnin derin anlamı; vatan sevgisinin ve milletçe gösterilen fedakârlığın her türlü zorluğu aşacak en yüce güç olmasıdır.',
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
        expectedAnswer: '• "Omuz omuza vermek" deyimi: Bir amaç uğruna dayanışma içinde olmak, güçlerini birleştirmek, yardımlaşmak demektir.\n• Sebep-Sonuç: Mehmet\'in cephaneyi korumak için paltosunu çıkarıp tekerleğe yüklenmesi ve vatan sevgisi dolu sözleri (sebep), köylülerin gayrete gelip güç birliği yaparak kağnıyı çamurdan çıkarmalarını (sonuç) sağlamıştır.',
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
      content: `Yetmiş beş yaşındaki Tahsin Dede, apartman dairesinin balkonundan caddeye baktığında içini derin bir hüzün kaplardı. Sokaktan gelip geçen insanlar kulaklarında kulaklıklar, ellerinde telefon ekranlarıyla yürüyordu. Ne bir gülümseme ne bir selamlaşma vardı sokakta... Birbirlerinin yüzüne bakmadan, sanki birer gölge gibi yan yana geçip gidiyorlardı. Oysa onun çocukluğunda bir sokaktan geçerken rastlanan herkese "Hayırlı sabahlar, işiniz rast gitsin!" denir; komşunun hâli hatırı sorulmadan kapı önünden geçilmezdi.

O gün torunu Eren ziyarete gelmişti. Eren koltuğa oturmuş, parmaklarını hızla telefon ekranında kaydırarak arkadaşlarıyla mesajlaşıyordu. Kullandığı kısaltmalar, yabancı kelimeler ve semboller Tahsin Dede’nin dikkatini çekti. Dede usulca yerinden kalktı; odadaki ceviz sandığın kapağını açtı. Sararmış, kenarları yıpranmış bir deste mektup çıkardı. 

— Eren oğlum, bak bu mektupları bana elli yıl önce askerdeyken rahmetli babam yazmıştı, dedi.
Eren merakla başını ekrandan kaldırdı. Mektupların her bir satırı "Gözümün nuru, canım oğlum..." diye başlıyor; sevgiyle, incelikle seçilmiş kelimelerle devam ediyordu. Mektuplarda ne kırıcı bir sitem ne de kaba bir söz vardı; her cümle özenle yazılmıştı. Eren o sararmış kâğıtları kokladığında dedesinin neden bu kadar üzüldüğünü kendiliğinden anladı. O an elindeki telefonu usulca sehpaya bıraktı. Dedesiyle göz göze geldiğinde gözlerinde sımsıcak bir anlayış pırıltısı parıldıyordu.`
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
            label: 'a. sitem',
            text: 'Metindeki: "Mektuplarda ne kırıcı bir sitem ne de kaba bir söz vardı..." cümlesindeki "sitem" kelimesi:\n• Anlam Tahmini: ........................................................................\n• Metin İçi Gerekçe: ....................................................................',
            expectedAnswer: '• Anlam Tahmini: Bir kimseye yaptığı bir hareketin veya söylediği sözün üzüntü, kırgınlık uyandırdığını öfkelenmeden belirtme.\n• Metin İçi Gerekçe: Cümlede "kırıcı" sıfatıyla birlikte kullanılması ve sevgi dolu sözlerin karşıtı olarak verilmesi.',
            points: 7,
            guideline: 'Anlam tahmini (4 Puan), gerekçe (3 Puan).'
          },
          {
            label: 'b. kendiliğinden',
            text: 'Metindeki: "...dedesinin neden bu kadar üzüldüğünü kendiliğinden anladı." cümlesindeki "kendiliğinden" kelimesi:\n• Anlam Tahmini: ........................................................................\n• Metin İçi Gerekçe: ....................................................................',
            expectedAnswer: '• Anlam Tahmini: Başka birinin açıklamasına gerek kalmadan, doğal olarak, içinden gelerek.\n• Metin İçi Gerekçe: Eren\'in mektupları okuyup koklar koklamaz dedesinin duygusunu hemen fark etmesi.',
            points: 8,
            guideline: 'Anlam tahmini (4 Puan), gerekçe (4 Puan).'
          }
        ],
        expectedAnswer: 'Sitem ve kendiliğinden sözcüklerinin bağlamsal tahmini ve gerekçesi.',
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
        expectedAnswer: 'Tahsin Dede\'nin çocukluğunda sokaktan geçerken rastlanan herkese "Hayırlı sabahlar, işiniz rast gitsin!" denir; komşunun hâli hatırı sorulmadan kapı önünden geçilmezdi.',
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
