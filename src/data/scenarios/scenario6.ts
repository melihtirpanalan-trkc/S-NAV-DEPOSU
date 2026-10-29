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
      content: `Ilgaz Dağları’nın geçit vermez yamaçlarında kasım ayazı bıçak gibi kesiyordu. İnebolu kıyılarından cepheye cephane taşıyan kağnı kollarının tekerleklerinden yükselen "gacır gucur" sesler, dağların uğultusuna karışıyordu. Bu çetin kafilede on beş yaşındaki Mehmet ile yaşlı anası da vardı. Kağnıya koşulu Sarıkız ile Kocabaş, dik yokuşlarda nefes nefese kalmış; çamurlu dik yollarda zorlukla adım atıyordu. 

Hava karardıkça kar serpiştirmeye, tipi şiddetini artırmaya başladı. Mehmet’in sırtındaki yırtık yelek ayazı önlemeye yetmiyor, dudakları soğuktan morarıyordu. Bir ara kağnı derin bir çamur çukuruna saplandı, öküzler ne kadar zorlasa da tekerlek bir santim dahi ilerlemedi. Mehmet hiç tereddüt etmeden omuzunu çamurlu tekerleğe dayadı, var gücüyle yüklendi. İşte tam o anda sırtındaki kalın keçe abayı çıkarıp ıslanmasınlar diye kağnıdaki sandıkların ve mermilerin üzerine örttü. Anası titreyen elleriyle oğlunun kolunu tuttu:
— Oğul, donacaksın! Üstünü niye açtın?

Mehmet, gözlerinde alevlenen sarsılmaz bir inançla başını kaldırdı:
— Ana; biz üşürüz, biz ıslanırız ama cephedeki askerimizin cephanesi ıslanırsa vatan söner! 

Bu sözler gecenin karanlığını bir şimşek gibi aydınlattı. Gerideki kağnılardan yetişen köylüler de koşup geldiler. Omuz omuza verip kağnıyı çamurdan çıkardılar. O gece Ilgaz’ın zirvesinde yalnızca bir kağnı değil; bütün bir milletin hürriyet ve bağımsızlık aşkı yürüyordu.`
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
            label: 'a. çetin',
            text: 'Metindeki: "Bu çetin kafilede on beş yaşındaki Mehmet ile yaşlı anası da vardı." cümlesindeki "çetin" kelimesi:\n• Anlam Tahmini: ........................................................................\n• Metin İçi Gerekçe: ....................................................................',
            expectedAnswer: '• Anlam Tahmini: Çok zor, güç, aşılması büyük çaba ve dayanıklılık gerektiren, meşakkatli.\n• Metin İçi Gerekçe: Ilgaz Dağları’nın ayazı, kar ve tipinin şiddeti ile yolların çamurlu ve dik olması.',
            points: 7,
            guideline: 'Anlam tahmini (4 Puan), gerekçe (3 Puan).'
          },
          {
            label: 'b. aba',
            text: 'Metindeki: "İşte tam o anda sırtındaki kalın keçe abayı çıkarıp ıslanmasınlar diye... örttü." cümlesindeki "aba" kelimesi:\n• Anlam Tahmini: ........................................................................\n• Metin İçi Gerekçe: ....................................................................',
            expectedAnswer: '• Anlam Tahmini: Yünden veya keçeden yapılan, soğuktan korunmak için giyilen kaba ve kalın bir üst giysisi.\n• Metin İçi Gerekçe: Mehmet’in sırtından çıkarıp mermilerin üzerine örtmesi ve anasının "donacaksın" demesi.',
            points: 8,
            guideline: 'Anlam tahmini (4 Puan), gerekçe (4 Puan).'
          }
        ],
        expectedAnswer: 'Çetin ve aba sözcüklerinin bağlamsal tahmini ve gerekçesi.',
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
        expectedAnswer: 'Mehmet tereddüt etmeden omuzunu çamurlu tekerleğe dayayarak var gücüyle yüklenmiş; hemen ardından sırtındaki kalın keçe abayı çıkarıp ıslanmasınlar diye mermilerin ve cephane sandıklarının üzerine örtmüştür.',
        rubric: [
          { criterion: 'Mehmet\'in tekerleğe yüklenmesi ve abasını mermilere örtmesi davranışlarının tam aktarılması', points: 15 }
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
        expectedAnswer: '• "Omuz omuza vermek" deyimi: Bir amaç uğruna dayanışma içinde olmak, güçlerini birleştirmek, yardımlaşmak demektir.\n• Sebep-Sonuç: Mehmet\'in "Biz üşürüz ama cephane ıslanırsa vatan söner!" diyerek gösterdiği fedakârlık (sebep), gerideki köylülerin koşup gelerek hep birlikte kağnıyı çamurdan çıkarmasını (sonuç) sağlamıştır.',
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
      content: `Kuzey bozkırlarında kış kapıya dayandığında rüzgâr kuru otları savururdu. On iki yaşındaki Yusuf, baharda dünyaya gelen yağız tayı Gökkurt’u kendi eliyle büyütmüştü. Annesini doğumdan hemen sonra kaybeden bu narin tay, Yusuf’un avucundan içtiği ılık sütle hayata tutunmuştu. Gökkurt artık parıldayan simsiyah yelesi, mızrak gibi dik kulakları ve geniş göğsüyle asil bir Türkmen atı olmuştu.

Bir akşamüzeri yayladan köye dönerken aniden başlayan tipi yolu kapattı. Göz gözü görmüyor, soğuk kemiklere işliyordu. Yusuf yolunu kaybetti ve kayalık bir vadide mahsur kaldı. Soğuktan parmakları uyuşuyor, uykuya teslim olmak üzereydi. Tam o sırada Gökkurt dizlerinin üzerine çöktü; başını Yusuf’un kucağına koyup nefesiyle onu ısıtmaya çalıştı. Ardından gökyüzüne doğru acı bir kişneme savurdu. Bu ses fırtınanın uğultusunu delerek kilometrelerce uzaktaki köylülerin arama meşalelerine ulaştı. Yusuf kurtarıldığında gözlerini açıp tayının boynuna sarıldı; insan ile hayvan arasındaki dostluğun ne büyük bir can yeleği olduğunu o gece bütün köy anladı.`
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
            label: 'a. yağız',
            text: 'Metindeki: "...baharda dünyaya gelen yağız tayı Gökkurt’u kendi eliyle büyütmüştü." cümlesindeki "yağız" kelimesi:\n• Anlam Tahmini: ........................................................................\n• Metin İçi Gerekçe: ....................................................................',
            expectedAnswer: '• Anlam Tahmini: Esmer, koyu buğday renkli veya atlar için koyu parlak siyah renkli.\n• Metin İçi Gerekçe: Devamında gelen "parıldayan simsiyah yelesi" ifadesi.',
            points: 7,
            guideline: 'Anlam tahmini (4 Puan), gerekçe (3 Puan).'
          },
          {
            label: 'b. mahsur',
            text: 'Metindeki: "...kayalık bir vadide mahsur kaldı." cümlesindeki "mahsur" kelimesi:\n• Anlam Tahmini: ........................................................................\n• Metin İçi Gerekçe: ....................................................................',
            expectedAnswer: '• Anlam Tahmini: Bir yerde kısılıp kalmış, kuşatılmış, hiçbir yere gidemeyecek durumda kalmış olan.\n• Metin İçi Gerekçe: Tipiden göz gözü görmemesi ve Yusuf\'un yolunu kaybedip çıkamaması.',
            points: 8,
            guideline: 'Anlam tahmini (4 Puan), gerekçe (4 Puan).'
          }
        ],
        expectedAnswer: 'Yağız ve mahsur kelimelerinin bağlam tahmini ve gerekçesi.',
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
      content: `Eski kentin sahaf sokağında zaman sanki daha ağır akardı. Bu sokağın en ucunda, ahşap kepenkleri yeşile boyalı küçücük bir dükkân vardı: "Sahaflar Sandığı". Dükkânın sahibi yetmiş yaşındaki Rıza Amca, tavanlara kadar yükselen kitap yığınları arasında yaşardı. İçerisi kurumuş kâğıt, meşe ağacı cilası ve adaçayı kokardı. Rıza Amca kitapları sadece satan bir tüccar değil, her kitabın kapağını okşayan ve hangi okura hangi kitabın iyi geleceğini kalpten hisseden bir gönül hekimiydi.

Bir öğle vakti dükkânın çıngırağı çaldı. İçeri giren on üç yaşındaki Ömer, boynu bükük bir hâlde raflara göz gezdirdi. Okulda arkadaşlarıyla yaşadığı bir kırgınlıktan ötürü içine kapanmıştı. Rıza Amca çocuğun gözlerindeki hüznü hemen fark etti. Sessizce ahşap merdivene tırmandı; en üst raftan kumaş ciltli, sarı kurdeleli bir hikâye kitabı indirdi:
— Evlat, bazen insanlar seni anlamadığında kitaplar imdada yetişir. Bu kitaptaki kahraman da senin gibi yalnız kalmıştı; ama bak bakalım sayfaların sonunda ne buldu, dedi.

Ömer kitabı kucağına alıp dükkânın köşesindeki mindere oturdu. Sayfaları çevirdikçe içindeki kasvet dağıldı, yüzüne sımsıcak bir tebessüm yerleşti. O gün Ömer anladı ki iyi bir kitap, insanın en vefalı ve en sessiz arkadaşıdır.`
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
            text: 'Metindeki: "Eski kentin sahaf sokağında zaman sanki daha ağır akardı." cümlesindeki "sahaf" kelimesi:\n• Anlam Tahmini: ........................................................................\n• Metin İçi Gerekçe: ....................................................................',
            expectedAnswer: '• Anlam Tahmini: Genellikle eski, kullanılmış, antika veya basımı tükenmiş kitapları alıp satan kitapçı.\n• Metin İçi Gerekçe: Tavanlara kadar yükselen eski kitap yığınları ve kurumuş kâğıt kokusu bağlamı.',
            points: 7,
            guideline: 'Anlam tahmini (4 Puan), gerekçe (3 Puan).'
          },
          {
            label: 'b. kasvet',
            text: 'Metindeki: "Sayfaları çevirdikçe içindeki kasvet dağıldı..." cümlesindeki "kasvet" kelimesi:\n• Anlam Tahmini: ........................................................................\n• Metin İçi Gerekçe: ....................................................................',
            expectedAnswer: '• Anlam Tahmini: İç sıkıntısı, keder, hüzün, bunaltı.\n• Metin İçi Gerekçe: Ömer\'in arkadaşlarına kırgın olması, boynunu bükmesi ve kitabın bu hüznü dağıtması.',
            points: 8,
            guideline: 'Anlam tahmini (4 Puan), gerekçe (4 Puan).'
          }
        ],
        expectedAnswer: 'Sahaf ve kasvet sözcüklerinin tahmini ve gerekçesi.',
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
