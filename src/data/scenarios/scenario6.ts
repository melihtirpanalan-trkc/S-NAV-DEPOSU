import { ExamScenario } from '../../types/exam';

export const SCENARIO_6_EXAMS: ExamScenario[] = [
  {
    id: 's6-e1',
    scenarioGroup: 'senaryo-6',
    scenarioGroupTitle: 'MEB Senaryo 6',
    scenarioName: '1. Sınav (Karanlığı Delen Kağnı)',
    examNumber: 1,
    title: 'Karanlığı Delen Kağnı Sesleri',
    theme: '6. Tema: Millî Mücadele Ruhu ve Vatan Sevgisi',
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
        id: 's6-e1-q1',
        number: 1,
        outcomeCode: 'T.O.7.4',
        title: 'Bağlamdan Söz Varlığını Tahmin Etme ve Gerekçelendirme',
        points: 15,
        linesNeeded: 6,
        prompt: 'Metinde geçen altı çizili kelimelerin anlamlarını metnin bağlamından hareketle tahmin ediniz ve gerekçelerini yazınız.',
        subQuestions: [
          {
            label: 'a. cephane',
            text: 'Metindeki: "İnebolu kıyılarından cepheye cephane taşıyan kağnı kollarının..." cümlesindeki "cephane" kelimesi:\n• Anlam Tahmini: ........................................................................\n• Metin İçi Gerekçe: ....................................................................',
            expectedAnswer: '• Anlam Tahmini: Savaşta ordunun kullandığı mermi, fişek ve patlayıcı maddelerin tümü, mühimmat.\n• Metin İçi Gerekçe: Cephedeki askerlere kağnılarla sandıklar içinde taşınması ve ıslanmaması için korunması.',
            points: 7,
            guideline: 'Anlam tahmini (4 Puan), gerekçe (3 Puan).'
          },
          {
            label: 'b. sarsılmaz',
            text: 'Metindeki: "Mehmet, gözlerinde parlayan sarsılmaz bir inançla başını kaldırdı..." cümlesindeki "sarsılmaz" kelimesi:\n• Anlam Tahmini: ........................................................................\n• Metin İçi Gerekçe: ....................................................................',
            expectedAnswer: '• Anlam Tahmini: Hiçbir güçlük karşısında zayıflamayan, bozulmayan, çok sağlam ve güçlü.\n• Metin İçi Gerekçe: Mehmet\'in dondurucu soğuğa rağmen kendi paltosunu çıkarıp cephaneyi korumaktan vazgeçmemesi.',
            points: 8,
            guideline: 'Anlam tahmini (4 Puan), gerekçe (4 Puan).'
          }
        ],
        expectedAnswer: 'Cephane ve sarsılmaz sözcüklerinin bağlamsal tahmini ve gerekçesi.',
        rubric: [
          { criterion: 'Her iki sözcüğün bağlama uygun tahmini', points: 8 },
          { criterion: 'Metin gerekçelerinin açıkça yazılması', points: 7 }
        ]
      },
      {
        id: 's6-e1-q2',
        number: 2,
        outcomeCode: 'T.O.7.5',
        title: 'Metnin Yüzey Anlamı (Metnin Konusu)',
        points: 15,
        linesNeeded: 3,
        prompt: 'Okuduğunuz metnin konusunu (yüzey anlamını) belirleyerek bir cümleyle yazınız.',
        expectedAnswer: 'Metnin konusu; Millî Mücadele yıllarında cepheye cephane taşıyan Mehmet ve köylülerin dondurucu kış şartlarında gösterdiği fedakârlıktır.',
        rubric: [
          { criterion: 'Metnin konusunu eksiksiz ve doğru biçimde tek cümleyle belirleme', points: 15 },
          { criterion: 'Konuyu kısmen ifade etme veya eksik bırakma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ]
      },
      {
        id: 's6-e1-q3',
        number: 3,
        outcomeCode: 'T.O.7.5',
        title: 'Metnin Yüzey Anlamı - Doğrudan Bilgi Tespiti',
        points: 15,
        linesNeeded: 4,
        prompt: 'Kağnı çamur çukuruna saplandığında Mehmet sırasıyla hangi davranışları sergilemiştir?',
        expectedAnswer: 'Mehmet hiç düşünmeden omzunu çamurlu tekerleğe dayayarak var gücüyle yüklenmiş; hemen ardından sırtındaki kalın yün paltosunu çıkarıp ıslanmasınlar diye cephane sandıklarının üzerine örtmüştür.',
        rubric: [
          { criterion: 'Mehmet\'in tekerleğe yüklenmesi ve paltosunu cephane sandıklarına örtmesi davranışlarının tam aktarılması', points: 15 }
        ]
      },
      {
        id: 's6-e1-q4',
        number: 4,
        outcomeCode: 'T.O.7.21',
        title: 'Söz Varlığını Çözümleme - Deyim ve Sebep-Sonuç',
        points: 20,
        linesNeeded: 6,
        prompt: 'Metinde geçen "omuz omuza vermek" deyiminin anlamını açıklayınız. Mehmet’in sözlerinin gerideki köylüler üzerindeki etkisini sebep-sonuç ilişkisiyle yazınız.',
        expectedAnswer: '• "Omuz omuza vermek" deyimi: Bir amaç uğruna dayanışma içinde olmak, güçlerini birleştirmek, yardımlaşmak demektir.\n• Sebep-Sonuç: Mehmet\'in "Biz üşürüz ama cephane ıslanırsa vatanımız tehlikeye girer!" diyerek gösterdiği fedakârlık (sebep), gerideki köylülerin koşup gelerek hep birlikte kağnıyı çamurdan çıkarmasını (sonuç) sağlamıştır.',
        rubric: [
          { criterion: 'Deyimin doğru anlamı', points: 10 },
          { criterion: 'Metindeki sebep-sonuç bağıntısının doğru tespiti', points: 10 }
        ]
      },
      {
        id: 's6-e1-q5',
        number: 5,
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
        id: 's6-e1-q6',
        number: 6,
        outcomeCode: 'T.Y.7.21',
        title: 'Noktalama İşaretleri (Üç Nokta ve Noktalı Virgül) Uygulaması',
        points: 15,
        linesNeeded: 6,
        prompt: 'Aşağıdaki noktalama görevlerini yönergelere uygun olarak cevaplayınız.',
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
    id: 's6-e2',
    scenarioGroup: 'senaryo-6',
    scenarioGroupTitle: 'MEB Senaryo 6',
    scenarioName: '2. Sınav (Rüzgârla Yarışan Tay)',
    examNumber: 2,
    title: 'Rüzgârla Yarışan Tay: Bozkırın Sadık Dostu',
    theme: '6. Tema: Hayvan Sevgisi ve Sadakat',
    targetClass: '7. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Rüzgârla Yarışan Tay: Bozkırın Sadık Dostu',
      author: 'Türkçe Ülküsü Yayınları (Özgün Edebi Metin)',
      source: '7. Sınıf Türkçe Dersi - Doğa ve Hayvan Sevgisi',
      content: `Kuzey bozkırlarında kış yaklaştığında sert rüzgâr kuru otları savururdu. On iki yaşındaki Yusuf, baharda dünyaya gelen siyah tayı Gökkurt’u kendi eliyle büyütmüştü. Annesini doğumdan hemen sonra kaybeden bu narin tay, Yusuf’un avucundan içtiği ılık sütle hayata tutunmuştu. Gökkurt artık parıldayan simsiyah yelesi, dik kulakları ve güçlü gövdesiyle asil bir at olmuştu.

Bir akşamüzeri yayladan köye dönerken aniden başlayan tipi yolu kapattı. Göz gözü görmüyor, soğuk gittikçe şiddetleniyordu. Yusuf yolunu kaybetti ve kayalık bir vadide mahsur kaldı. Soğuktan parmakları uyuşuyor, uykuya yenik düşmek üzereydi. Tam o sırada Gökkurt dizlerinin üzerine çöktü; başını Yusuf’un kucağına koyup sıcak nefesiyle onu ısıtmaya çalıştı. Ardından gökyüzüne doğru güçlü bir kişneme sesi yükseltti. Bu ses fırtınanın uğultusunu aşarak uzaktaki köylülerin arama ekibine ulaştı. Yusuf kurtarıldığında gözlerini açıp tayının boynuna sarıldı; insan ile hayvan arasındaki dostluğun ne büyük bir can yeleği olduğunu o gece bütün köy anladı.`
    },
    questions: [
      {
        id: 's6-e2-q1',
        number: 1,
        outcomeCode: 'T.O.7.4',
        title: 'Bağlamdan Söz Varlığını Tahmin Etme ve Gerekçelendirme',
        points: 15,
        linesNeeded: 6,
        prompt: 'Metinde geçen altı çizili kelimelerin anlamlarını metnin bağlamından hareketle tahmin ediniz ve gerekçelerini yazınız.',
        subQuestions: [
          {
            label: 'a. narin',
            text: 'Metindeki: "Annesini doğumdan hemen sonra kaybeden bu narin tay, Yusuf’un avucundan içtiği ılık sütle hayata tutunmuştu." cümlesindeki "narin" kelimesi:\n• Anlam Tahmini: ........................................................................\n• Metin İçi Gerekçe: ....................................................................',
            expectedAnswer: '• Anlam Tahmini: İnce yapılı, kırılgan, özenli bakıma ihtiyaç duyan, hassas.\n• Metin İçi Gerekçe: Tayın yeni doğmuş olması ve annesini kaybettiği için elden ılık sütle beslenerek yaşatılması.',
            points: 7,
            guideline: 'Anlam tahmini (4 Puan), gerekçe (3 Puan).'
          },
          {
            label: 'b. mahsur',
            text: 'Metindeki: "...kayalık bir vadide mahsur kaldı." cümlesindeki "mahsur" kelimesi:\n• Anlam Tahmini: ........................................................................\n• Metin İçi Gerekçe: ....................................................................',
            expectedAnswer: '• Anlam Tahmini: Bir yerde kısılıp kalmış, çevresi kapanmış, hiçbir yere gidemeyecek durumda kalmış olan.\n• Metin İçi Gerekçe: Tipiden yolun kapanması ve Yusuf\'un yolunu kaybedip vadiden çıkamaması.',
            points: 8,
            guideline: 'Anlam tahmini (4 Puan), gerekçe (4 Puan).'
          }
        ],
        expectedAnswer: 'Narin ve mahsur kelimelerinin bağlam tahmini ve gerekçesi.',
        rubric: [
          { criterion: 'Her iki kelimenin doğru tahmini', points: 8 },
          { criterion: 'Metin gerekçelerinin açıkça sunulması', points: 7 }
        ]
      },
      {
        id: 's6-e2-q2',
        number: 2,
        outcomeCode: 'T.O.7.5',
        title: 'Metnin Yüzey Anlamı (Metnin Konusu)',
        points: 15,
        linesNeeded: 3,
        prompt: 'Okuduğunuz metnin konusunu (yüzey anlamını) belirleyerek bir cümleyle yazınız.',
        expectedAnswer: 'Metnin konusu; Yusuf ile kendi büyüttüğü tayı Gökkurt arasındaki sevgi bağı ve tayın Yusuf\'un hayatını kurtarmasıdır.',
        rubric: [
          { criterion: 'Metnin konusunu eksiksiz ve doğru biçimde tek cümleyle belirleme', points: 15 },
          { criterion: 'Konuyu kısmen ifade etme veya eksik bırakma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ]
      },
      {
        id: 's6-e2-q3',
        number: 3,
        outcomeCode: 'T.O.7.5',
        title: 'Metnin Yüzey Anlamı - Doğrudan Bilgi Tespiti',
        points: 15,
        linesNeeded: 4,
        prompt: 'Gökkurt tipide mahsur kalan Yusuf’u kurtarmak için sırasıyla hangi fedakârca davranışları sergilemiştir?',
        expectedAnswer: 'Gökkurt önce dizlerinin üzerine çöküp başını Yusuf\'un kucağına koyarak sıcak nefesiyle onu dondurucu soğuktan korumaya çalışmış; ardından gökyüzüne doğru acı bir kişneme savurarak köylülerin arama ekibine yerlerini duyurmuştur.',
        rubric: [
          { criterion: 'Nefesiyle ısıtması ve kişneyerek yardım çağırması adımlarının tam aktarımı', points: 15 }
        ]
      },
      {
        id: 's6-e2-q4',
        number: 4,
        outcomeCode: 'T.O.7.21',
        title: 'Söz Varlığını Çözümleme - Benzetme ve Sebep-Sonuç',
        points: 20,
        linesNeeded: 6,
        prompt: 'Metinde geçen "can yeleği olmak" benzetmesinin anlamını açıklayınız. Yusuf ile Gökkurt arasındaki bu bağı ortaya çıkaran sebep-sonuç ilişkisini metinden yazınız.',
        expectedAnswer: '• Benzetmenin Anlamı: İnsanı ölümden, tehlikeden veya büyük bir felaketten kurtaran en güvenilir sığınak olmak anlamındadır.\n• Sebep-Sonuç: Yusuf\'un annesini kaybeden tayı küçüklüğünden beri şefkatle ve kendi elleriyle beslemesi (sebep), tayın da Yusuf\'a derin bir sadakatle bağlanıp fırtınada hayatını kurtarmasını (sonuç) sağlamıştır.',
        rubric: [
          { criterion: 'Benzetmenin anlamına dair doğru açıklama', points: 10 },
          { criterion: 'Sebep ve sonuç mantıksal bağının kurulması', points: 10 }
        ]
      },
      {
        id: 's6-e2-q5',
        number: 5,
        outcomeCode: 'T.Y.7.18',
        title: 'Yazısını Zenginleştirecek Söz Varlığı Kullanımı',
        points: 20,
        linesNeeded: 8,
        prompt: 'Aşağıda verilen metin başlangıcını; "şefkat, sadakat, bağ, can dostu" sözcüklerini ve en az bir "benzetme" ile bir "ikileme"yi kullanarak zenginleştirerek tamamlayınız:\n\n"Güneş bozkırın yamaçlarından doğarken ahırın kapısı gıcırtıyla açıldı..."',
        expectedAnswer: 'Örnek Metin: "Güneş bozkırın yamaçlarından doğarken ahırın kapısı gıcırtıyla açıldı. Yusuf\'un adım seslerini duyan yağız tay, neşeyle kişneyerek başını uzattı. Aralarındaki bu sarsılmaz BAĞ, yıllardır verilen karşılıksız ŞEFKAT ile ilmek ilmek örülmüştü. Gökkurt, Yusuf için sadece bir binek hayvanı değil; zor günlerde sığınılacak gerçek bir CAN DOSTU idi. Gözleri, pırıl pırıl parlayan berrak bir kaynak suyu gibi derin bir SADAKAT fısıldıyordu. Birlikte bozkırda adım adım, yavaş yavaş koşarken rüzgâr bile onların bu dostluğuna gıpta ediyordu."',
        rubric: [
          { criterion: 'Verilen 4 anahtar sözcüğün amaca uygun kullanımı', points: 8 },
          { criterion: 'Benzetme sanatına yer verilmesi', points: 4 },
          { criterion: 'İkilemenin metne doğal biçimde katılması', points: 4 },
          { criterion: 'Anlatım güzelliği ve akıcılık', points: 4 }
        ]
      },
      {
        id: 's6-e2-q6',
        number: 6,
        outcomeCode: 'T.Y.7.21',
        title: 'Noktalama İşaretleri (Üç Nokta ve Noktalı Virgül) Uygulaması',
        points: 15,
        linesNeeded: 6,
        prompt: 'Aşağıda verilen noktalama görevlerini kurallara uygun olarak tamamlayınız.',
        subQuestions: [
          {
            label: 'a. Üç Nokta (...) ve Kullanım Alanları',
            text: 'Aşağıdaki cümlelerde geçen üç noktanın (...) hangi görevle kullanıldığını altlarındaki boşluklara yazınız:\n1. "Bozkırda uğuldayan rüzgâr, savrulan kar taneleri, Gökkurt\'un derin solukları..."\n   Kullanım Görevi: ........................................................................\n2. "Hey Gökkurt!.. Sesinle yırt şu karanlık geceyi!"\n   Kullanım Görevi: ........................................................................',
            expectedAnswer: '1. Cümle: Yüklemi söylenmemiş, anlatımı tamamlanmamış (eksiltili) cümlenin sonuna konmuştur.\n2. Cümle: Seslenmelerde ve ünlemlerde anlatımı pekiştirmek için kullanılmıştır.',
            points: 7,
            guideline: '1. görev (4 Puan), 2. görev (3 Puan).'
          },
          {
            label: 'b. Noktalı Virgül (;) ve Noktalama Uygulaması',
            text: 'Aşağıdaki parçada yay ayraçla ( ) gösterilen yerlere uygun noktalama işaretlerini koyunuz ve noktalı virgülün (;) kullanım gerekçesini açıklayınız:\n"Yusuf tayı sevgiyle okşadı, ılık sütle besledi ( ) Gökkurt ise sadakatle bağlandı, sahibine can yeleği oldu ( )"\n• Noktalı virgülün (;) kullanım gerekçesi: .....................................................................',
            expectedAnswer: '• Yay ayraçlara sırasıyla: ( ; ) ve ( . ) getirilmelidir.\n• Noktalı Virgülün (;) Kullanım Gerekçesi: Ögeleri arasında virgül bulunan sıralı cümleleri birbirinden ayırmak için noktalı virgül (;) kullanılmıştır.',
            points: 8,
            guideline: 'İşaretler (3 Puan), kural açıklaması (5 Puan).'
          }
        ],
        expectedAnswer: 'Üç nokta ve noktalı virgül kurallarının tespiti.',
        rubric: [
          { criterion: 'Üç noktanın iki ayrı kuralının doğru tespiti', points: 7 },
          { criterion: 'Noktalı virgülün sıralı cümleleri ayırma kuralının izahı', points: 8 }
        ]
      }
    ]
  },
  {
    id: 's6-e3',
    scenarioGroup: 'senaryo-6',
    scenarioGroupTitle: 'MEB Senaryo 6',
    scenarioName: '3. Sınav (Sessiz Şehrin Kitapçısı)',
    examNumber: 3,
    title: 'Sessiz Şehrin Kitapçısı: Sayfaların Büyüsü',
    theme: '6. Tema: Kitap Sevgisi ve Kültür',
    targetClass: '7. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Sessiz Şehrin Kitapçısı',
      author: 'Türkçe Ülküsü Yayınları (Özgün Edebi Metin)',
      source: '7. Sınıf Türkçe Dersi - Kitap Sevgisi, Okuma Kültürü ve Dostluk',
      content: `Eski kentin kitapçılar sokağında zaman sanki daha sakin akardı. Bu sokağın en ucunda, ahşap kepenkleri yeşile boyalı küçücük bir sahaf dükkânı vardı: "Kitap Sandığı". Dükkânın sahibi yetmiş yaşındaki Rıza Amca, tavanlara kadar yükselen kitap rafları arasında yaşardı. İçerisi kâğıt, meşe ağacı ve ıhlamur kokardı. Rıza Amca kitapları sadece satan bir esnaf değil, her kitabın kapağını sevgiyle okşayan ve hangi okura hangi kitabın iyi geleceğini içtenlikle hisseden bilge bir insandı.

Bir öğle vakti dükkânın kapı zili çaldı. İçeri giren on üç yaşındaki Ömer, üzgün bir hâlde raflara göz gezdirdi. Okulda arkadaşlarıyla yaşadığı bir kırgınlıktan dolayı içine kapanmıştı. Rıza Amca çocuğun gözlerindeki üzüntüyü hemen fark etti. Sessizce ahşap merdivene çıktı; üst raftan bez ciltli, sarı ayraçlı bir hikâye kitabı indirdi:
— Evlat, bazen insanlar seni anlamadığında kitaplar yardıma yetişir. Bu kitaptaki kahraman da senin gibi yalnız kalmıştı; ama bak bakalım sayfaların sonunda ne buldu, dedi.

Ömer kitabı kucağına alıp dükkânın köşesindeki koltuğa oturdu. Sayfaları çevirdikçe içindeki sıkıntı dağıldı, yüzüne sımsıcak bir gülümseme yerleşti. O gün Ömer anladı ki iyi bir kitap, insanın en vefalı ve en sessiz arkadaşıdır.`
    },
    questions: [
      {
        id: 's6-e3-q1',
        number: 1,
        outcomeCode: 'T.O.7.4',
        title: 'Bağlamdan Söz Varlığını Tahmin Etme ve Gerekçelendirme',
        points: 15,
        linesNeeded: 6,
        prompt: 'Metinde geçen altı çizili kelimelerin anlamlarını metnin bağlamından hareketle tahmin ediniz ve gerekçelerini yazınız.',
        subQuestions: [
          {
            label: 'a. sahaf',
            text: 'Metindeki: "...ahşap kepenkleri yeşile boyalı küçücük bir sahaf dükkânı vardı..." cümlesindeki "sahaf" kelimesi:\n• Anlam Tahmini: ........................................................................\n• Metin İçi Gerekçe: ....................................................................',
            expectedAnswer: '• Anlam Tahmini: Genellikle eski, kullanılmış veya basımı tükenmiş değerli kitapları alıp satan kitapçı.\n• Metin İçi Gerekçe: Tavanlara kadar yükselen kitap rafları, eski bez ciltli kitaplar ve kâğıt kokusu bağlamı.',
            points: 7,
            guideline: 'Anlam tahmini (4 Puan), gerekçe (3 Puan).'
          },
          {
            label: 'b. vefalı',
            text: 'Metindeki: "...iyi bir kitap, insanın en vefalı ve en sessiz arkadaşıdır." cümlesindeki "vefalı" kelimesi:\n• Anlam Tahmini: ........................................................................\n• Metin İçi Gerekçe: ....................................................................',
            expectedAnswer: '• Anlam Tahmini: Dostluğunu ve sevgisini unutmayan, zor zamanlarda dostunu yalnız bırakmayan, bağlılığı süren.\n• Metin İçi Gerekçe: İnsanlar Ömer\'i anlamadığında ve yalnız kaldığında kitabın onun yardımına yetişip üzüntüsünü dağıtması.',
            points: 8,
            guideline: 'Anlam tahmini (4 Puan), gerekçe (4 Puan).'
          }
        ],
        expectedAnswer: 'Sahaf ve vefalı sözcüklerinin tahmini ve gerekçesi.',
        rubric: [
          { criterion: 'Her iki kelimenin doğru tahmini', points: 8 },
          { criterion: 'Metin gerekçelerinin sunulması', points: 7 }
        ]
      },
      {
        id: 's6-e3-q2',
        number: 2,
        outcomeCode: 'T.O.7.5',
        title: 'Metnin Yüzey Anlamı (Metnin Konusu)',
        points: 15,
        linesNeeded: 3,
        prompt: 'Okuduğunuz metnin konusunu (yüzey anlamını) belirleyerek bir cümleyle yazınız.',
        expectedAnswer: 'Metnin konusu; arkadaşlarına kırılan Ömer\'in sahaf Rıza Amca\'nın tavsiye ettiği kitapla moral bulması ve kitap sevgisini keşfetmesidir.',
        rubric: [
          { criterion: 'Metnin konusunu eksiksiz ve doğru biçimde tek cümleyle belirleme', points: 15 },
          { criterion: 'Konuyu kısmen ifade etme veya eksik bırakma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ]
      },
      {
        id: 's6-e3-q3',
        number: 3,
        outcomeCode: 'T.O.7.5',
        title: 'Metnin Yüzey Anlamı - Doğrudan Bilgi Tespiti',
        points: 15,
        linesNeeded: 4,
        prompt: 'Rıza Amca’nın sıradan bir kitap satıcısından farklı olduğunu gösteren özellikleri nelerdir? Metinden iki özellik belirtiniz.',
        expectedAnswer: '1. Her kitabın kapağını sevgiyle okşaması ve kitapları sadece ticari bir eşya olarak görmemesi.\n2. Gelen okurların ruh hâlini hissedip onlara iyi gelecek kitapları bir hekim gibi seçerek tavsiye etmesi.',
        rubric: [
          { criterion: 'Kitaplara gösterilen sevgi ve şefkatin belirtilmesi', points: 8 },
          { criterion: 'Okurların ruhuna uygun kitap seçme özelliğinin yazılması', points: 7 }
        ]
      },
      {
        id: 's6-e3-q4',
        number: 4,
        outcomeCode: 'T.O.7.21',
        title: 'Söz Varlığını Çözümleme - Deyim ve Sebep-Sonuç',
        points: 20,
        linesNeeded: 6,
        prompt: 'Metinde geçen "içine kapanmak" deyiminin anlamını açıklayınız. Ömer’in bu durumdan kurtulmasını sağlayan sebep-sonuç ilişkisini metne göre yazınız.',
        expectedAnswer: '• "İçine kapanmak" deyimi: Çevresiyle bağını koparıp duygu ve düşüncelerini kimseyle paylaşmamak, sessizliğe ve yalnızlığa bürünmek demektir.\n• Sebep-Sonuç: Rıza Amca\'nın Ömer\'in hüznünü fark edip ona uygun kumaş ciltli hikâye kitabını vermesi ve Ömer\'in o kitabı okuması (sebep), Ömer\'in içindeki kasvetin dağılarak yüzünün gülmesini ve hayata umutla bakmasını (sonuç) sağlamıştır.',
        rubric: [
          { criterion: 'Deyimin doğru anlamı', points: 10 },
          { criterion: 'Sebep ve sonuç örgüsünün doğru kurulması', points: 10 }
        ]
      },
      {
        id: 's6-e3-q5',
        number: 5,
        outcomeCode: 'T.Y.7.18',
        title: 'Yazısını Zenginleştirecek Söz Varlığı Kullanımı',
        points: 20,
        linesNeeded: 8,
        prompt: 'Aşağıda verilen metin başlangıcını; "hazine, teselli, pusula, vefalı dost" kelimelerini ve en az bir "benzetme" ile bir "ikileme"yi kullanarak zenginleştirerek tamamlayınız:\n\n"Kitabın kapağını kapattığında odanın içi sanki daha aydınlık görünüyordu..."',
        expectedAnswer: 'Örnek Metin: "Kitabın kapağını kapattığında odanın içi sanki daha aydınlık görünüyordu. Çünkü sayfalar arasında saklanan o bilge cümleler, karanlıkta yol gösteren bir PUSULA gibi zihnini aydınlatmıştı. İnsanların kırıcı tavırları karşısında aradığı sımsıcak TESELLİ, bu satırların arasındaydı. Anladı ki kitaplar, zamana meydan okuyan tükenmez bir HAZİNE idi. Gece gündüz demeden her an elinin altında bekleyen bu VEFALI DOST, bir bahar meltemi gibi ruhundaki tüm kederleri silip süpürmüştü."',
        rubric: [
          { criterion: 'Belirlenen 4 kavramın yerinde kullanımı', points: 8 },
          { criterion: 'Benzetme sanatına yer verilmesi', points: 4 },
          { criterion: 'İkilemenin metne uygun katılması', points: 4 },
          { criterion: 'Anlatım dili ve akıcılık', points: 4 }
        ]
      },
      {
        id: 's6-e3-q6',
        number: 6,
        outcomeCode: 'T.Y.7.21',
        title: 'Noktalama İşaretleri (Üç Nokta ve Noktalı Virgül) Uygulaması',
        points: 15,
        linesNeeded: 6,
        prompt: 'Aşağıdaki noktalama görevlerini yönergelere göre tamamlayınız.',
        subQuestions: [
          {
            label: 'a. Üç Nokta (...) ve Kullanım Alanları',
            text: 'Aşağıdaki cümlelerde geçen üç noktanın (...) hangi görevle kullanıldığını altlarındaki boşluklara yazınız:\n1. "Sahaflar sokağında sararmış sayfalar, adaçayı kokusu, eski haritalar..."\n   Kullanım Görevi: ........................................................................\n2. "— Bu kitabı ne zaman bitirirsin Ömer?\n   — Hafta sonuna kadar..."\n   Kullanım Görevi: ........................................................................',
            expectedAnswer: '1. Cümle: Yüklemi söylenmemiş, anlatımı tamamlanmamış (eksiltili) cümlenin sonuna konmuştur.\n2. Cümle: Karşılıklı konuşmalarda yeterli olmayan, eksik bırakılan cevaplarda kullanılmıştır.',
            points: 7,
            guideline: '1. görev (4 Puan), 2. görev (3 Puan).'
          },
          {
            label: 'b. Noktalı Virgül (;) ve Noktalama Uygulaması',
            text: 'Aşağıdaki parçada yay ayraçla ( ) belirtilen yerlere uygun noktalama işaretlerini koyunuz ve noktalı virgülün (;) kullanım gerekçesini açıklayınız:\n"Rıza Amca rafları düzenledi, kitapları sildi ( ) Ömer ise mindere oturdu, sayfaları merakla çevirdi ( )"\n• Noktalı virgülün (;) kullanım gerekçesi: .....................................................................',
            expectedAnswer: '• Yay ayraçlara sırasıyla: ( ; ) ve ( . ) getirilmelidir.\n• Noktalı Virgülün (;) Kullanım Gerekçesi: Ögeleri arasında virgül bulunan sıralı cümleleri birbirinden ayırmak için noktalı virgül (;) kullanılmıştır.',
            points: 8,
            guideline: 'İşaretler (3 Puan), kural açıklaması (5 Puan).'
          }
        ],
        expectedAnswer: 'Üç nokta ve noktalı virgül kurallarının tespiti.',
        rubric: [
          { criterion: 'Üç noktanın iki ayrı kuralının doğru belirlenmesi', points: 7 },
          { criterion: 'Noktalı virgülün kullanım amacının eksiksiz yazılması', points: 8 }
        ]
      }
    ]
  }
];
