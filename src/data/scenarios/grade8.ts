import { ExamScenario } from '../../types/exam';

export const GRADE_8_EXAMS: ExamScenario[] = [
  // ==================== SENARYO 1 ====================
  // Senaryo 1 - Sınav 1
  {
    id: 'g8-s1-e1',
    gradeLevel: 8,
    scenarioGroup: 'senaryo-1',
    scenarioGroupTitle: 'MEB Senaryo 1',
    scenarioName: '1. Sınav (Fırtınada Kırılan Zincir)',
    examNumber: 1,
    title: 'Fırtınada Kırılan Zincir',
    theme: '1. Tema: Mücadele & Doğa ve İnsan',
    targetClass: '8. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Fırtınada Kırılan Zincir',
      author: 'Türkçe Ülküsü Yayınları (Özgün Anlatı)',
      source: '8. Sınıf Türkçe Dersi - MEBİ Yazılıya Hazırlanıyorum Uyarlaması',
      content: `Ufukta fırtınanın kopacağını gösteren türlü alametler vardı. Kararan gökyüzü ile kurşuni deniz birbirine karışıyor, sert rüzgâr dalgaları devasa dağlar gibi şaha kaldırıyordu. Bulutlar ürkütücü şekillerde parçalanıyor; bir kısmı başımızın üstünden süratle geçerken bir kısmı ötede heybetli kayalar gibi hareketsiz duruyordu. Gökte hiç mavilik kalmamıştı; yalnız soluk ve zeytuni bir ışıltı yeri göğü aydınlatıyordu.

Koca geminin boyuna azgın dalgalarla boğuşması sonucunda nihayet korkulan oldu. Denizdeki tonlarca ağırlıktaki demirlerin kalın zincirleri büyük bir çatırtıyla kırıldı. Gemi, arkadaki tek zincirle tutunmaya çalışıyordu ancak devasa dalgalar demiri tarayarak gemiyi kayalıklara doğru sürüklemeye başladı. Kaptan ve tayfalar, hayatları pahasına makine dairesine inerek son bir gayretle pervanelere güç verdiler.`
    },
    questions: [
      {
        id: 'g8-s1-e1-q1',
        number: 1,
        outcomeCode: 'T.8.3.5',
        title: 'Bağlamdan Kelime Anlamı Bulma',
        points: 10,
        prompt: `Metinde yer alan aşağıdaki anlamların karşılığı olan sözcükleri metinden bularak yazınız:
a) Bir olayın veya durumun anlaşılmasına yardım eden belirti, işaret: .......................................
b) Parlaklığını ve canlılığını yitirmiş olan: .......................................
c) Koyu yeşil ile kahverengi arası renk, zeytin rengi: .......................................
ç) Yerinden kımıldamayan, durgun olan: .......................................`,
        expectedAnswer: 'a) alamet\nb) soluk\nc) zeytuni\nç) hareketsiz',
        rubric: [
          { criterion: '4 sözcüğün tamamını doğru bulma', points: 10 },
          { criterion: '3 sözcüğü doğru bulma', points: 7 },
          { criterion: '2 sözcüğü doğru bulma', points: 5 },
          { criterion: '1 sözcüğü doğru bulma', points: 2 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 4
      },
      {
        id: 'g8-s1-e1-q2',
        number: 2,
        outcomeCode: 'T.8.3.7',
        title: 'Söz Sanatlarını Tespit Etme',
        points: 10,
        prompt: `Aşağıdaki dizelerde kullanılan edebi sanatları belirleyerek altlarındaki boşluğa yazınız:
1. Şiir:
"Ağlarım hatıra geldikçe gülüştüklerimiz,
Çoğu gitti azı kaldı bu uzun yolların."
Kullanılan Söz Sanatı: .......................................

2. Şiir:
"Üstüme lapa lapa kar yağıyordu yeniden,
Yeniden yüreğim beyaz bir lale."
Kullanılan Söz Sanatı: .......................................`,
        expectedAnswer: '1. Şiir: Tezat (Karşıtlık) [ağlamak-gülüşmek, çok-az]\n2. Şiir: Benzetme (Teşbih) [yüreğin beyaz bir laleye benzetilmesi]',
        rubric: [
          { criterion: 'İki söz sanatını da doğru tespit etme', points: 10 },
          { criterion: 'Bir söz sanatını doğru tespit etme', points: 5 },
          { criterion: 'Hatalı tespit', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g8-s1-e1-q3',
        number: 3,
        outcomeCode: 'T.8.3.9',
        title: 'Fiilimsilerin İşlevlerini Kavrama',
        points: 15,
        prompt: `Metinde geçen fiilimsileri inceleyerek aşağıdaki bölümlere metinden birer örnek fiilimsi yazınız:
• İsim-fiil (Mastar): .......................................
• Sıfat-fiil (Ortaç): .......................................
• Zarf-fiil (Ulaç): .......................................`,
        expectedAnswer: '• İsim-fiil: boğuşması (veya tutunmaya)\n• Sıfat-fiil: kopacağını, gösteren, kararan, kırılan\n• Zarf-fiil: geçerken, tarayarak (veya inerek)',
        rubric: [
          { criterion: '3 fiilimsi türüne de metinden doğru örnek verme', points: 15 },
          { criterion: '2 fiilimsi türüne doğru örnek verme', points: 10 },
          { criterion: '1 fiilimsi türüne doğru örnek verme', points: 5 },
          { criterion: 'Hatalı örnek', points: 0 }
        ],
        linesNeeded: 4
      },
      {
        id: 'g8-s1-e1-q4',
        number: 4,
        outcomeCode: 'T.8.3.14',
        title: 'Metinle İlgili Soruları Cevaplama',
        points: 15,
        prompt: 'Geminin zincirleri kırıldıktan sonra dalgalar gemiyi nasıl bir tehlikeyle karşı karşıya bırakmıştır? Kaptan ve tayfalar buna karşı nasıl tepki vermiştir? Metne göre açıklayınız.',
        expectedAnswer: 'Dalgalar demiri tarayarak gemiyi kayalıklara doğru sürüklemiş ve parçalanma tehlikesi yaratmıştır. Kaptan ve tayfalar hayatları pahasına makine dairesine inerek pervanelere güç vermişlerdir.',
        rubric: [
          { criterion: 'Tehlikeyi ve tayfaların mücadelesini metne dayanarak eksiksiz açıklama', points: 15 },
          { criterion: 'Yalnızca tehlikeyi veya yalnızca tayfaları açıklama', points: 8 },
          { criterion: 'Hatalı açıklama', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g8-s1-e1-q5',
        number: 5,
        outcomeCode: 'T.8.3.16',
        title: 'Metnin Yüzey Anlamı (Metnin Konusu)',
        points: 10,
        prompt: 'Okuduğunuz metnin konusunu (yüzey anlamını) belirleyerek bir cümleyle ifade ediniz.',
        expectedAnswer: 'Şiddetli bir fırtınada zincirleri kopan bir geminin kayalıklara sürüklenmesi ve mürettebatın kurtulmak için verdiği zorlu mücadele.',
        rubric: [
          { criterion: 'Metnin konusunu (yüzey anlamını) eksiksiz ve özlü ifade etme', points: 10 },
          { criterion: 'Konuyu kısmen doğru ifade etme', points: 5 },
          { criterion: 'Hatalı konu tespiti', points: 0 }
        ],
        linesNeeded: 2
      },
      {
        id: 'g8-s1-e1-q6',
        number: 6,
        outcomeCode: 'T.8.3.34',
        title: 'Düşünceyi Geliştirme Yollarını Belirleme',
        points: 15,
        prompt: 'Metinde geçen "sert rüzgâr dalgaları devasa dağlar gibi şaha kaldırıyordu" ve "ötede heybetli kayalar gibi hareketsiz duruyordu" cümlelerinde kullanılan düşünceyi geliştirme yolunu yazınız ve gerekçesini belirtiniz.',
        expectedAnswer: 'Kullanılan düşünceyi geliştirme yolu: Benzetme (veya Karşılaştırma).\nGerekçesi: Dalgaların büyüklüğü devasa dağlara, bulutların durgunluğu ise heybetli kayalara benzetilerek anlatım somutlaştırılmış ve güçlendirilmiştir.',
        rubric: [
          { criterion: 'Düşünceyi geliştirme yolunu ve gerekçesini tam yazma', points: 15 },
          { criterion: 'Yalnızca benzetme deyip gerekçeyi yazmama', points: 8 },
          { criterion: 'Hatalı tespit', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g8-s1-e1-q7',
        number: 7,
        outcomeCode: 'T.8.4.1',
        title: 'Şiir Yazma',
        points: 15,
        prompt: 'Fırtına, deniz ve mücadele temasını işleyen, içinde en az bir söz sanatı (benzetme veya tezat) barındıran dört dizelik (bir dörtlük) özgün bir şiir yazınız.',
        expectedAnswer: 'Örnek Şiir:\nKükredi karanlıkta azgın dalgalar,\nBir dağ gibi dikildi önümüzde rüzgâr.\nYüreğimizde yanan o sönmez umutla,\nKaranlık geceden doğdu ilkbahar.',
        rubric: [
          { criterion: 'Tema ile uyumlu, ahenkli ve içinde söz sanatı olan 4 dizelik şiir yazma', points: 15 },
          { criterion: 'Şiir yazıp söz sanatını eksik bırakma veya ölçü/uyak zayıflığı', points: 8 },
          { criterion: 'Düzyazı veya tema dışı cevap', points: 0 }
        ],
        linesNeeded: 5
      },
      {
        id: 'g8-s1-e1-q8',
        number: 8,
        outcomeCode: 'T.8.4.15',
        title: 'Geçiş ve Bağlantı İfadelerini Kullanma',
        points: 10,
        prompt: `Aşağıdaki boşluklara uygun geçiş ve bağlantı ifadelerini (ancak, oysaki, kısacası) yerleştiriniz:
a) Deniz sakin görünüyordu (.......................................) derinlerde büyük bir fırtına hazırlığı vardı.
b) Dalgalar gemiyi çok sarstı (.......................................) mürettebat pes etmedi.
c) Cesaret, inanç ve sabır bir araya geldiğinde; (.......................................) hiçbir engel aşılamaz değildir.`,
        expectedAnswer: 'a) oysaki\nb) ancak\nc) kısacası',
        rubric: [
          { criterion: '3 ifadeyi de doğru yerleştirme', points: 10 },
          { criterion: '2 ifadeyi doğru yerleştirme', points: 7 },
          { criterion: '1 ifadeyi doğru yerleştirme', points: 3 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 3
      }
    ]
  },

  // Senaryo 1 - Sınav 2
  {
    id: 'g8-s1-e2',
    gradeLevel: 8,
    scenarioGroup: 'senaryo-1',
    scenarioGroupTitle: 'MEB Senaryo 1',
    scenarioName: '2. Sınav (Dağın Zirvesindeki Pusula)',
    examNumber: 2,
    title: 'Dağın Zirvesindeki Pusula',
    theme: '1. Tema: Azim ve Doğa Keşfi',
    targetClass: '8. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Dağın Zirvesindeki Pusula',
      author: 'Türkçe Ülküsü Yayınları (Özgün Anlatı)',
      source: '8. Sınıf Türkçe Dersi - Dağcılık ve İrade',
      content: `Kaçkar Dağları’nın sisli patikalarında ilerleyen genç dağcı grubu, güneş tepeye varmadan zirve sırtına ulaşmayı hedefliyordu. Yol boyunca dik kayalıklar ve kaygan zemin yürümeyi güçleştiriyordu. Liderleri Selim, gruptakileri sık sık uyararak adımlarını dikkatle atmalarını tembihliyordu. Vadiden yükselen serin rüzgâr, dağ keçilerinin izlerini takip eden ekibin yüzünü kamçılıyordu.

Zirveye birkaç yüz metre kala aniden bastıran yoğun sis, görüş mesafesini birkaç adıma düşürdü. Ancak Selim soğukkanlılığını yitirmedi; çantasından çıkardığı pusulayı avucuna alarak yön tayini yaptı. Sis bir dev gibi etraflarını sarmışken grup birbirine emniyet ipleriyle bağlandı. Nihayet dik yamacı aşarak zirvedeki rüzgârlı tepeye ayak bastılar. Bulutların üzerinden doğan güneş, kararlı adımların hak ettiği en muhteşem mükâfattı.`
    },
    questions: [
      {
        id: 'g8-s1-e2-q1',
        number: 1,
        outcomeCode: 'T.8.3.5',
        title: 'Bağlamdan Kelime Anlamı Bulma',
        points: 10,
        prompt: `Metinde geçen aşağıdaki anlamların karşılığı olan sözcükleri metinden bulunuz:
a) Dağ eteğinde veya ormanda insanların ve hayvanların yürümesiyle açılan dar keçi yolu: .......................................
b) Yönü belirlemek, istikameti bulmak: .......................................`,
        expectedAnswer: 'a) patika\nb) yön tayini (veya tayin etmek)',
        rubric: [
          { criterion: 'İki sözcüğü de doğru bulma', points: 10 },
          { criterion: 'Bir sözcüğü doğru bulma', points: 5 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g8-s1-e2-q2',
        number: 2,
        outcomeCode: 'T.8.3.7',
        title: 'Söz Sanatlarını Tespit Etme',
        points: 10,
        prompt: 'Metinde geçen "Sis bir dev gibi etraflarını sarmışken" cümlesinde kullanılan söz sanatını ve unsurlarını yazınız.',
        expectedAnswer: 'Benzetme (Teşbih) sanatı kullanılmıştır. Benzeyen: Sis, Benzetilen: Dev, Benzetme Edatı: Gibi, Benzetme Yönü: Etraflarını sarması / büyüklüğü.',
        rubric: [
          { criterion: 'Söz sanatını ve unsurlarını eksiksiz belirtme', points: 10 },
          { criterion: 'Yalnızca benzetme olduğunu yazma', points: 5 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g8-s1-e2-q3',
        number: 3,
        outcomeCode: 'T.8.3.9',
        title: 'Fiilimsilerin İşlevlerini Kavrama',
        points: 15,
        prompt: `Metinden aşağıdaki fiilimsi türlerine uygun birer örnek bularak yazınız:
• İsim-fiil: .......................................
• Sıfat-fiil: .......................................
• Zarf-fiil: .......................................`,
        expectedAnswer: '• İsim-fiil: ulaşmayı, yürümeyi\n• Sıfat-fiil: ilerleyen, yükselen, takip eden, bastıran\n• Zarf-fiil: varmadan, uyararak, alarak, aşarak',
        rubric: [
          { criterion: '3 fiilimsi türüne de metinden doğru örnek verme', points: 15 },
          { criterion: '2 fiilimsi türüne doğru örnek verme', points: 10 },
          { criterion: '1 fiilimsi türüne doğru örnek verme', points: 5 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 4
      },
      {
        id: 'g8-s1-e2-q4',
        number: 4,
        outcomeCode: 'T.8.3.14',
        title: 'Metinle İlgili Soruları Cevaplama',
        points: 15,
        prompt: 'Zirveye yakın bir noktada bastıran yoğun sise karşı Selim ve ekibi hangi güvenlik önlemlerini almıştır? Metne göre iki önlem yazınız.',
        expectedAnswer: '1. Selim pusula ile yön tayini yapmıştır.\n2. Ekip üyeleri birbirine emniyet ipleriyle bağlanmıştır.',
        rubric: [
          { criterion: 'İki güvenlik önlemini de eksiksiz yazma', points: 15 },
          { criterion: 'Tek önlemi yazma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g8-s1-e2-q5',
        number: 5,
        outcomeCode: 'T.8.3.16',
        title: 'Metnin Yüzey Anlamı (Metnin Konusu)',
        points: 10,
        prompt: 'Okuduğunuz metnin konusunu (yüzey anlamını) belirleyerek tek bir cümleyle yazınız.',
        expectedAnswer: 'Genç bir dağcı grubunun sis ve dik kayalıklar gibi zorlu doğa koşullarına rağmen azimle Kaçkar Dağları’nın zirvesine tırmanışı.',
        rubric: [
          { criterion: 'Metnin konusunu (yüzey anlamını) eksiksiz ve özlü ifade etme', points: 10 },
          { criterion: 'Kısmen doğru ifade etme', points: 5 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 2
      },
      {
        id: 'g8-s1-e2-q6',
        number: 6,
        outcomeCode: 'T.8.3.34',
        title: 'Düşünceyi Geliştirme Yollarını Belirleme',
        points: 15,
        prompt: 'Metinde dağcıların zirveye ulaştıkları andaki manzarayı tasvir ederken kullanılan düşünceyi geliştirme yolunu ve etkisini açıklayınız.',
        expectedAnswer: 'Benzetme ve Karşılaştırma kullanılmıştır. Zirvede doğan güneş, çekilen tüm zahmetlerin ardından hak edilen bir "mükâfat"a benzetilmiş; sisli vadi ile aydınlık zirve kıyaslanarak anlatım zenginleştirilmiştir.',
        rubric: [
          { criterion: 'Düşünceyi geliştirme yolunu ve etkisini tam açıklama', points: 15 },
          { criterion: 'Yalnızca benzetme olduğunu yazma', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g8-s1-e2-q7',
        number: 7,
        outcomeCode: 'T.8.4.1',
        title: 'Şiir Yazma',
        points: 15,
        prompt: 'Zirve, rüzgâr ve kararlılık duygularını yansıtan dört dizelik (bir dörtlük) özgün bir şiir yazınız.',
        expectedAnswer: 'Örnek Şiir:\nSisleri yardı dağcıların sesi,\nUfukta parıldar umut neşesi.\nZirveye varan her cesur yürekte,\nYankılanır hürriyetin bestesi.',
        rubric: [
          { criterion: 'Temaya uygun, kafiyeli ve 4 dizelik özgün şiir yazma', points: 15 },
          { criterion: 'Kısmen başarılı şiir yazma', points: 8 },
          { criterion: 'Düzyazı veya ilgisiz metin', points: 0 }
        ],
        linesNeeded: 5
      },
      {
        id: 'g8-s1-e2-q8',
        number: 8,
        outcomeCode: 'T.8.4.15',
        title: 'Geçiş ve Bağlantı İfadelerini Kullanma',
        points: 10,
        prompt: '"ancak", "bu nedenle" ve "özellikle" ifadelerini kullanarak dağcılık sporuyla ilgili 2-3 cümlelik bir paragraf yazınız.',
        expectedAnswer: 'Dağcılık yüksek kondisyon gerektiren zorlu bir spordur; ancak doğayla baş başa kalmanın huzuru benzersizdir. Özellikle ani hava değişimlerine karşı hazırlıklı olunmalı, bu nedenle rotaya çıkmadan önce ekipmanlar eksiksiz kontrol edilmelidir.',
        rubric: [
          { criterion: 'Üç ifadeyi de bağlama uygun ve doğru kullanarak kısa paragraf yazma', points: 10 },
          { criterion: 'İki ifadeyi doğru kullanma', points: 6 },
          { criterion: 'Hatalı kullanım', points: 0 }
        ],
        linesNeeded: 4
      }
    ]
  },

  // ==================== SENARYO 2 ====================
  // Senaryo 2 - Sınav 1
  {
    id: 'g8-s2-e1',
    gradeLevel: 8,
    scenarioGroup: 'senaryo-2',
    scenarioGroupTitle: 'MEB Senaryo 2',
    scenarioName: '1. Sınav (Vaktin Kıymeti ve Yaşlı Bilge)',
    examNumber: 1,
    title: 'Vaktin Kıymeti ve Yaşlı Bilge',
    theme: '2. Tema: Zaman Bilinci ve Yaşam Değeri',
    targetClass: '8. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Vaktin Kıymeti ve Yaşlı Bilge',
      author: 'Türkçe Ülküsü Yayınları (Özgün Deneme Metni)',
      source: '8. Sınıf Türkçe Dersi - MEBİ Hazırlık Metni Uyarlaması',
      content: `Gençlikte tükenmez gibi görünen vakit, yaş ilerledikçe akıp giden bir su gibi azalacaktır. Yetmiş beş yaşına varan bir âlim, "Kabil olsa da köşe başlarında şapkamı gelene geçene uzatsam, boşa harcadıkları vakitleri içine atmaları için yalvarsam!" derken kendisi için ayrılmış zamanın bitmekte olduğunu ne çarpıcı anlatmıştır.

Bir insanın içinde yaşadığı topluma faydalı olabilmesi; ancak gençliğinin kıymetini bilmesine, o çağlarda zamanını iyi değerlendirmesine ve zihinsel heybesini bilgiyle doldurmasına bağlıdır. "Gençlik bilse, ihtiyarlık yapabilse!" sözü bu hakikati özetler. İhtiyarlığın kudretli ve saygın olması, gençliğin üretken geçmesine dayanır. En güçlü yaşlılar, gençliklerini heba etmemiş olanlardır. Eğer bugün insanlık birilerinin önünde saygıyla eğiliyorsa, gençliğini ilimle yoğuranların önünde eğilmektedir.`
    },
    questions: [
      {
        id: 'g8-s2-e1-q1',
        number: 1,
        outcomeCode: 'T.8.3.5',
        title: 'Bağlamdan Kelime Anlamı Bulma',
        points: 10,
        prompt: 'Metinde geçen "kabil olmak" ve "heba etmek" deyimlerinin anlamlarını metnin bağlamından hareketle yazınız.',
        expectedAnswer: 'Kabil olmak: Mümkün olmak, olanağı bulunmak, yapılabilmek.\nHeba etmek: Boşa harcamak, ziyan etmek, kıymetini bilmeyip yok etmek.',
        rubric: [
          { criterion: 'Her iki ifadenin de anlamını doğru yazma', points: 10 },
          { criterion: 'Bir ifadenin anlamını doğru yazma', points: 5 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g8-s2-e1-q2',
        number: 2,
        outcomeCode: 'T.8.3.9',
        title: 'Fiilimsilerin İşlevlerini Kavrama',
        points: 10,
        prompt: `Metinde geçen aşağıdaki altı çizili sözcüklerin fiilimsi türlerini (isim-fiil, sıfat-fiil, zarf-fiil) belirleyiniz:
a) "Gençlikte tükenmez gibi görünen vakit..." -> görünen: .......................................
b) "...boşa harcadıkları vakitleri içine atmaları için..." -> atmaları: .......................................
c) "...yaş ilerledikçe akıp giden bir su gibi..." -> ilerledikçe: .......................................`,
        expectedAnswer: 'a) Sıfat-fiil (Ortaç)\nb) İsim-fiil (Mastar)\nc) Zarf-fiil (Ulaç)',
        rubric: [
          { criterion: '3 türü de doğru belirleme', points: 10 },
          { criterion: '2 türü doğru belirleme', points: 7 },
          { criterion: '1 türü doğru belirleme', points: 3 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 4
      },
      {
        id: 'g8-s2-e1-q3',
        number: 3,
        outcomeCode: 'T.8.3.11',
        title: 'Metindeki Anlatım Biçimlerini Belirleme',
        points: 10,
        prompt: 'Okuduğunuz metinde ağırlıklı olarak hangi anlatım biçimi (açıklayıcı, tartışmacı, betimleyici, öyküleyici) kullanılmıştır? Gerekçesiyle yazınız.',
        expectedAnswer: 'Tartışmacı anlatım (veya Açıklayıcı anlatım). Yazar zamanın boşa harcanmaması konusundaki kişisel kanaatini okuyucuyla sohbet edercesine savunmuş, alıntı ve atasözleriyle fikrini desteklemiştir.',
        rubric: [
          { criterion: 'Anlatım biçimini ve metne dayalı gerekçesini doğru yazma', points: 10 },
          { criterion: 'Yalnızca anlatım biçiminin adını yazma', points: 5 },
          { criterion: 'Hatalı tespit', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g8-s2-e1-q4',
        number: 4,
        outcomeCode: 'T.8.3.14',
        title: 'Metinle İlgili Soruları Cevaplama',
        points: 15,
        prompt: 'Metinde sözü edilen yetmiş beş yaşındaki âlimin insanlardan boşa harcadıkları vakitleri şapkasına atmalarını istemesiyle vurguladığı asıl düşünce nedir?',
        expectedAnswer: 'Zamanın geri getirilemeyecek kadar kıymetli bir sermaye olduğu ve özellikle yaş kemale erdiğinde boşa harcanmış anların telafisinin imkânsızlığı vurgulanmaktadır.',
        rubric: [
          { criterion: 'Zamanın geri dönülemezliği ve telafisiz değerini eksiksiz açıklama', points: 15 },
          { criterion: 'Kısmi açıklama', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g8-s2-e1-q5',
        number: 5,
        outcomeCode: 'T.8.3.17',
        title: 'Metnin Derin Anlamı (Metnin Ana Fikri / İletisi)',
        points: 10,
        prompt: 'Okuduğunuz metnin ana fikrini (derin anlamını / verilmek istenen iletiyi) tek bir cümleyle yazınız.',
        expectedAnswer: 'Gençlik yıllarını bilgi ve erdemle dolduran, zamanını verimli kullanan insanlar; yaşlılıklarında saygın, güçlü ve topluma faydalı bir ömür sürerler.',
        rubric: [
          { criterion: 'Ana fikri (derin anlamı) tam ve özlü ifade etme', points: 10 },
          { criterion: 'Kısmi ifade etme', points: 5 },
          { criterion: 'Hatalı ana fikir', points: 0 }
        ],
        linesNeeded: 2
      },
      {
        id: 'g8-s2-e1-q6',
        number: 6,
        outcomeCode: 'T.8.3.25',
        title: 'Okuduklarıyla İlgili Çıkarımda Bulunma',
        points: 15,
        prompt: 'Metindeki "Eğer bugün insanlık birilerinin önünde saygıyla eğiliyorsa, gençliğini ilimle yoğuranların önünde eğilmektedir." sözünden hareketle nesnel ve öznel birer çıkarım yazınız.',
        expectedAnswer: 'Öznel Çıkarım: Gençliğini ilim yoluna adayan insanlar dünyanın en hayranlık verici şahsiyetleridir.\nNesnel Çıkarım: Yazar, saygı görmenin gençlik döneminde edinilen bilgi ve üretkenlikle ilişkili olduğunu savunmaktadır.',
        rubric: [
          { criterion: 'Öznel ve nesnel çıkarımları doğru şekilde yazma', points: 15 },
          { criterion: 'Yalnızca bir çıkarımı doğru yazma', points: 8 },
          { criterion: 'Hatalı çıkarım', points: 0 }
        ],
        linesNeeded: 4
      },
      {
        id: 'g8-s2-e1-q7',
        number: 7,
        outcomeCode: 'T.8.3.26',
        title: 'Metin Türlerini Ayırt Etme',
        points: 10,
        prompt: 'Okuduğunuz metnin türü (makale, deneme, fıkra, masal) nedir? İki kanıt göstererek açıklayınız.',
        expectedAnswer: 'Metnin türü Denemedir.\n1. Kanıt: Yazarın zaman ve gençlik hakkındaki kişisel görüşlerini samimi ve içten bir üslupla kanıtlama zorunluluğu gütmeden paylaşması.\n2. Kanıt: Konunun kesin bilimsel terimlerle değil, bilge sözleri ve hayata dair felsefi sorgulamalarla ele alınması.',
        rubric: [
          { criterion: 'Metin türünü (deneme) belirleyip iki geçerli kanıt gösterme', points: 10 },
          { criterion: 'Türü doğru bilip tek kanıt gösterme', points: 5 },
          { criterion: 'Hatalı tür tespiti', points: 0 }
        ],
        linesNeeded: 4
      },
      {
        id: 'g8-s2-e1-q8',
        number: 8,
        outcomeCode: 'T.8.3.34',
        title: 'Düşünceyi Geliştirme Yollarını Belirleme',
        points: 10,
        prompt: 'Metinde yaşlı âlimin sözüne yer verilmesi ve "Gençlik bilse, ihtiyarlık yapabilse!" ifadesinin kullanılması hangi düşünceyi geliştirme yoluna örnektir?',
        expectedAnswer: 'Tanık gösterme (Alıntı yapma) yoluna örnektir. Yazar savunduğu zaman fikrini pekiştirmek için alanında tanınmış bir bilgenin sözünü doğrudan aktarmıştır.',
        rubric: [
          { criterion: 'Tanık gösterme yolunu ve gerekçesini doğru yazma', points: 10 },
          { criterion: 'Yalnızca tanık gösterme yazma', points: 5 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g8-s2-e1-q9',
        number: 9,
        outcomeCode: 'T.8.4.9',
        title: 'Yazılarında Anlatım Biçimlerini Kullanma',
        points: 10,
        prompt: 'Zamanın su gibi akıp geçtiğini ve gençlerin planlı yaşaması gerektiğini anlatan, tartışmacı anlatım biçiminde kısa bir paragraf (3-4 cümle) yazınız.',
        expectedAnswer: 'Çoğu insan gençlikte zamanın hiç bitmeyeceğini zanneder. Oysa günler takvim yaprakları gibi hızla tükenirken boşa harcanan saatlerin telafisi asla mümkün değildir. Kendinizi geliştirmek için beklemeyi bırakıp bugünden harekete geçmelisiniz; çünkü gelecek, bugünü planlayanların ellerinde şekillenir.',
        rubric: [
          { criterion: 'Tartışmacı anlatım tekniğine uygun 3-4 cümlelik etkili paragraf yazma', points: 10 },
          { criterion: 'Düz anlatım veya cümle sayısı yetersiz', points: 5 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 4
      }
    ]
  },

  // Senaryo 2 - Sınav 2
  {
    id: 'g8-s2-e2',
    gradeLevel: 8,
    scenarioGroup: 'senaryo-2',
    scenarioGroupTitle: 'MEB Senaryo 2',
    scenarioName: '2. Sınav (Balın Mucizesi ve Zaman)',
    examNumber: 2,
    title: 'Balın Mucizesi ve Zaman',
    theme: '2. Tema: Doğa ve Bilim & Tarihin İzinde',
    targetClass: '8. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Balın Mucizesi ve Zaman',
      author: 'Türkçe Ülküsü Yayınları (Özgün Bilimsel Metin)',
      source: '8. Sınıf Türkçe Dersi - MEBİ Örnek Metin Uyarlaması',
      content: `Bal, doğanın insanlığa sunduğu gıdaların en saf ve bozulmayan mucizesidir. Tam kıvamını bulduğu takdirde içerisindeki yüksek şeker ve düşük su oranı sebebiyle balın içinde bakteriler bir iki saatten fazla yaşayamaz. Arıların salgıladığı özel enzimler, balı binlerce yıl boyunca bozulmaktan koruyan doğal bir zırh oluşturur.

Mısır’da bir firavunun mezarında arkeologlar tarafından bulunan 3300 yıllık bal çömleği, zamanla koyulaşıp kararmış olmasına rağmen saflığından ve biyolojik değerinden hiçbir şey kaybetmemiştir. Arkeologlar bu balın tadına baktıklarında hâlâ tüketilebilir olduğunu hayretle görmüşlerdir. Doğanın kusursuz kimyası, modern teknolojinin bile başarmakta zorlandığı bir ölümsüzlüğü küçük bir bal damlasında saklamıştır.`
    },
    questions: [
      {
        id: 'g8-s2-e2-q1',
        number: 1,
        outcomeCode: 'T.8.3.5',
        title: 'Bağlamdan Kelime Anlamı Bulma',
        points: 10,
        prompt: 'Metinde geçen "enzim" ve "arkeolog" kelimelerinin anlamlarını metnin bağlamından hareketle açıklayınız.',
        expectedAnswer: 'Enzim: Canlı organizmalarda biyolojik tepkimeleri hızlandıran veya koruyucu etki yapan özel protein bileşikleri.\nArkeolog: Eski uygarlıklardan kalan tarihi eserleri, mezarları ve kalıntıları kazarak gün ışığına çıkaran bilim insanı.',
        rubric: [
          { criterion: 'İki kelimenin anlamını da doğru açıklama', points: 10 },
          { criterion: 'Bir kelimenin anlamını doğru açıklama', points: 5 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g8-s2-e2-q2',
        number: 2,
        outcomeCode: 'T.8.3.9',
        title: 'Fiilimsilerin İşlevlerini Kavrama',
        points: 10,
        prompt: `Metinden aşağıdaki fiilimsi türlerine uygun birer örnek bularak yazınız:
• İsim-fiil: .......................................
• Sıfat-fiil: .......................................
• Zarf-fiil: .......................................`,
        expectedAnswer: '• İsim-fiil: bozulmaktan (veya başarmakta)\n• Sıfat-fiil: sunduğu, bulunan, kaybetmemiştir (veya yaşayan)\n• Zarf-fiil: kararmış olmasına rağmen (veya baktıklarında - dığında eki)',
        rubric: [
          { criterion: '3 fiilimsi türüne de metinden doğru örnek verme', points: 10 },
          { criterion: '2 fiilimsi türüne doğru örnek verme', points: 7 },
          { criterion: '1 fiilimsi türüne doğru örnek verme', points: 3 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 4
      },
      {
        id: 'g8-s2-e2-q3',
        number: 3,
        outcomeCode: 'T.8.3.11',
        title: 'Metindeki Anlatım Biçimlerini Belirleme',
        points: 10,
        prompt: 'Metinde ağırlıklı olarak kullanılan anlatım biçimini (açıklayıcı, tartışmacı, betimleyici, öyküleyici) gerekçesiyle yazınız.',
        expectedAnswer: 'Açıklayıcı anlatım biçimi kullanılmıştır. Çünkü yazar okuyucuya balın bozulmama nedenleri ve Mısır’daki tarihi keşif hakkında nesnel bilimsel bilgiler vermeyi amaçlamıştır.',
        rubric: [
          { criterion: 'Açıklayıcı anlatım biçimini ve gerekçesini doğru yazma', points: 10 },
          { criterion: 'Yalnızca açıklayıcı anlatım yazma', points: 5 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g8-s2-e2-q4',
        number: 4,
        outcomeCode: 'T.8.3.14',
        title: 'Metinle İlgili Soruları Cevaplama',
        points: 15,
        prompt: 'Balın içinde bakterilerin yaşayamamasının ve binlerce yıl bozulmamasının iki temel biyolojik nedenini metne dayanarak açıklayınız.',
        expectedAnswer: '1. Neden: İçerisindeki şeker oranının çok yüksek, su oranının ise çok düşük olması.\n2. Neden: Arıların salgıladığı özel enzimlerin balı koruyan doğal bir kalkan oluşturması.',
        rubric: [
          { criterion: 'İki nedeni de metne dayanarak eksiksiz açıklama', points: 15 },
          { criterion: 'Tek nedeni açıklama', points: 8 },
          { criterion: 'Hatalı cevap', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g8-s2-e2-q5',
        number: 5,
        outcomeCode: 'T.8.3.17',
        title: 'Metnin Derin Anlamı (Metnin Ana Fikri / İletisi)',
        points: 10,
        prompt: 'Okuduğunuz metnin ana fikrini (derin anlamını / verilmek istenen mesajı) tek bir cümleyle yazınız.',
        expectedAnswer: 'Bal, içerdiği özel kimyasal yapı ve arı enzimleriyle zamanın yıpratıcı etkisine meydan okuyan, binlerce yıl bozulmadan kalan eşsiz bir doğa harikasıdır.',
        rubric: [
          { criterion: 'Ana fikri (derin anlamı) tam ve özlü ifade etme', points: 10 },
          { criterion: 'Kısmi ifade etme', points: 5 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 2
      },
      {
        id: 'g8-s2-e2-q6',
        number: 6,
        outcomeCode: 'T.8.3.25',
        title: 'Okuduklarıyla İlgili Çıkarımda Bulunma',
        points: 15,
        prompt: 'Metinde geçen "Mısır\'da bulunan 3300 yıllık balın tadına baktıklarında hâlâ tüketilebilir olduğunu hayretle görmüşlerdir." ifadesinden hareketle sebep-sonuç ilişkisini açıklayınız.',
        expectedAnswer: 'Sebep: Balın yüksek şeker, düşük nem ve koruyucu enzimler sayesinde bakterileri barındırmaması.\nSonuç: 3300 yıl geçmesine rağmen mezardaki balın bozulmayarak hâlâ yenilebilir kalması.',
        rubric: [
          { criterion: 'Sebep ve sonuç unsurlarını net olarak açıklama', points: 15 },
          { criterion: 'Kısmi açıklama', points: 8 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g8-s2-e2-q7',
        number: 7,
        outcomeCode: 'T.8.3.26',
        title: 'Metin Türlerini Ayırt Etme',
        points: 10,
        prompt: 'Okuduğunuz metnin türü (makale, deneme, fıkra, hikâye) nedir? İki gerekçe ile yazınız.',
        expectedAnswer: 'Metnin türü Makaledir.\n1. Gerekçe: Bilimsel ve tarihi bir gerçeği (balın yapısı ve 3300 yıllık Mısır balını) nesnel kanıtlarla açıklaması.\n2. Gerekçe: Kişisel duygulardan uzak, öğretici ve kanıtlanabilir bir üslupla kaleme alınmış olması.',
        rubric: [
          { criterion: 'Türü (makale) belirleyip iki gerekçe sunma', points: 10 },
          { criterion: 'Türü bilip tek gerekçe sunma', points: 5 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 4
      },
      {
        id: 'g8-s2-e2-q8',
        number: 8,
        outcomeCode: 'T.8.3.34',
        title: 'Düşünceyi Geliştirme Yollarını Belirleme',
        points: 10,
        prompt: 'Metinde Mısır\'daki 3300 yıllık bal çömleğinden söz edilmesi hangi düşünceyi geliştirme yoludur?',
        expectedAnswer: 'Örneklendirme (veya Sayısal verilerden yararlanma) yoludur. Balın bozulmadığı iddiasını somut bir tarihi bulguyla kanıtlamak için örnek verilmiştir.',
        rubric: [
          { criterion: 'Örneklendirme olduğunu ve gerekçesini doğru yazma', points: 10 },
          { criterion: 'Yalnızca örneklendirme yazma', points: 5 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g8-s2-e2-q9',
        number: 9,
        outcomeCode: 'T.8.4.9',
        title: 'Yazılarında Anlatım Biçimlerini Kullanma',
        points: 10,
        prompt: 'Bal arılarının çalışkanlığını ve kovandaki iş bölümünü açıklayıcı anlatım biçimiyle anlatan 3-4 cümlelik kısa bir metin yazınız.',
        expectedAnswer: 'Kovandaki on binlerce arı, mükemmel bir iş bölümü içerisinde aralıksız çalışır. Kraliçe arı kovanın devamlılığını sağlarken işçi arılar nektar toplama, petek örme ve kovanı temizleme görevlerini yürütür. Her bir arı görevini kusursuz bir disiplinle yerine getirdiği için kovan yaşamı aksamadan sürer.',
        rubric: [
          { criterion: 'Açıklayıcı anlatım tekniğine uygun 3-4 cümlelik tutarlı metin yazma', points: 10 },
          { criterion: 'Kısmen uygun metin', points: 5 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 4
      }
    ]
  },

  // ==================== SENARYO 3 ====================
  // Senaryo 3 - Sınav 1
  {
    id: 'g8-s3-e1',
    gradeLevel: 8,
    scenarioGroup: 'senaryo-3',
    scenarioGroupTitle: 'MEB Senaryo 3',
    scenarioName: '1. Sınav (Kör Kuyudaki Mücadele)',
    examNumber: 1,
    title: 'Kör Kuyudaki Mücadele',
    theme: '3. Tema: Hayat Mücadelesi & Engelleri Aşma',
    targetClass: '8. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Kör Kuyudaki Mücadele',
      author: 'Türkçe Ülküsü Yayınları (Özgün Fabl/Kıssa)',
      source: '8. Sınıf Türkçe Dersi - MEBİ Hazırlık Metni Uyarlaması',
      content: `Günlerden bir gün, köylerden birinde bir çiftçinin emektar eşeği kör bir kuyuya düşer. Hayvan saatlerce acı içinde çırpınır ve feryat eder. Sesini duyan sahibi baktığında eşeği kuyunun dibinde çaresizce görür. Çiftçi köylüleri yardıma çağırır; fakat köylüler kuyunun çok derin olduğunu, hayvanı çıkarmanın imkânsız olduğunu söyleyerek üzerini toprakla doldurmaya karar verirler.

Herkes ellerine aldığı küreklerle kuyuya toprak atmaya başlar. Üzerine atılan toprakların ağırlığını hisseden eşek önce korkuya kapılır. Fakat çok geçmeden üzerine dökülen her kürek toprağı sırtından silkeleyip ayaklarının altına almaya başlar. Toprak döküldükçe eşek bir basamak daha yükselir. Sonunda kuyunun ağzına kadar tırmanarak dışarı çıkar. Hayat da bazen bizim üzerimize dertler ve engeller yağdırır; mühim olan o dertleri silkip ayağımızın altında basamak yapabilmektir.`
    },
    questions: [
      {
        id: 'g8-s3-e1-q1',
        number: 1,
        outcomeCode: 'T.8.3.5',
        title: 'Bağlamdan Kelime Anlamı Bulma',
        points: 15,
        prompt: 'Metinde geçen "kör kuyu" ifadesinin ve "silkelemek" sözcüğünün metindeki anlamını açıklayınız.',
        expectedAnswer: 'Kör kuyu: İçinde su bulunmayan, kurumuş, terk edilmiş derin kuyu.\nSilkelemek: Üzerindeki tozu veya toprağı hızla hareket ettirerek üzerinden atmak, dökmek.',
        rubric: [
          { criterion: 'İki anlamı da doğru açıklama', points: 15 },
          { criterion: 'Bir anlamı doğru açıklama', points: 8 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g8-s3-e1-q2',
        number: 2,
        outcomeCode: 'T.8.3.7',
        title: 'Söz Sanatlarını Tespit Etme',
        points: 15,
        prompt: 'Metnin sonunda dertlerin ve zorlukların basamağa dönüştürülmesi hangi edebi sanatla anlatılmıştır? Açıklayınız.',
        expectedAnswer: 'Benzetme (Teşbih) veya İstiare sanatı kullanılmıştır. Hayatın zorlukları ve engelleri eşeğin üzerine atılan toprağa, bu zorlukları aşma çabası ise ayakların altına alınan bir basamağa benzetilmiştir.',
        rubric: [
          { criterion: 'Söz sanatını ve benzetme ilişkisini eksiksiz açıklama', points: 15 },
          { criterion: 'Yalnızca benzetme olduğunu yazma', points: 8 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g8-s3-e1-q3',
        number: 3,
        outcomeCode: 'T.8.3.14',
        title: 'Metinle İlgili Soruları Cevaplama',
        points: 15,
        prompt: 'Eşek kuyuya atılan topraklardan kurtulmak için nasıl bir yöntem uygulamıştır? Metne göre yazınız.',
        expectedAnswer: 'Üzerine atılan her kürek toprağı sırtından silkeleyip ayaklarının altına almış, böylece toprak biriktikçe basamak yaparak kuyudan yukarı çıkmıştır.',
        rubric: [
          { criterion: 'Silkeleme ve basamak yapma yöntemini eksiksiz yazma', points: 15 },
          { criterion: 'Kısmi yazma', points: 8 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g8-s3-e1-q4',
        number: 4,
        outcomeCode: 'T.8.3.16',
        title: 'Metnin Yüzey Anlamı (Metnin Konusu)',
        points: 10,
        prompt: 'Okuduğunuz metnin konusunu (yüzey anlamını) tek bir cümleyle yazınız.',
        expectedAnswer: 'Kör kuyuya düşen bir eşeğin üzerine atılan toprakları fırsata çevirerek kuyudan kurtuluşu ve azmin zaferi.',
        rubric: [
          { criterion: 'Metnin konusunu (yüzey anlamını) eksiksiz yazma', points: 10 },
          { criterion: 'Kısmen doğru yazma', points: 5 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 2
      },
      {
        id: 'g8-s3-e1-q5',
        number: 5,
        outcomeCode: 'T.8.3.17',
        title: 'Metnin Derin Anlamı (Metnin Ana Fikri / İletisi)',
        points: 15,
        prompt: 'Okuduğunuz metnin derin anlamını (vermek istediği asıl mesajı / ana fikrini) yazınız.',
        expectedAnswer: 'Hayatta karşılaştığımız güçlükler ve üzerimize gelen engeller karşısında pes etmek yerine, onları silkeleyip ayağımızın altında birer başarı basamağına dönüştürmeliyiz.',
        rubric: [
          { criterion: 'Ana fikri (derin anlamı) tam ve etkili şekilde ifade etme', points: 15 },
          { criterion: 'Kısmi ifade etme', points: 8 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g8-s3-e1-q6',
        number: 6,
        outcomeCode: 'T.8.4.1',
        title: 'Şiir Yazma',
        points: 15,
        prompt: 'Zorluklara boyun eğmeme ve mücadele azmini anlatan dört dizelik (bir dörtlük) özgün bir şiir yazınız.',
        expectedAnswer: 'Örnek Şiir:\nYıkılma karanlık çökünce dağa,\nKüllerinden doğar her yeni gün de.\nZorluklar eğilir azimli çağa,\nZafer sabreden kulun önünde.',
        rubric: [
          { criterion: 'Temaya uygun, uyaklı ve 4 dizelik şiir yazma', points: 15 },
          { criterion: 'Kısmen başarılı şiir', points: 8 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 5
      },
      {
        id: 'g8-s3-e1-q7',
        number: 7,
        outcomeCode: 'T.8.4.18',
        title: 'Cümlenin Ögelerini Ayırt Etme',
        points: 15,
        prompt: `Aşağıdaki cümlenin ögelerini (Özne, Belirtili/Belirtisiz Nesne, Yer Tamlayıcısı, Zarf Tamlayıcısı, Yüklem) bularak altlarına yazınız:
"Çaresiz çiftçi, köydeki komşularını yardıma çağırdı."

• Yüklem: .......................................
• Özne: .......................................
• Belirtili Nesne: .......................................
• Yer Tamlayıcısı (Dolaylı Tümleç): .......................................`,
        expectedAnswer: '• Yüklem: çağırdı\n• Özne: Çaresiz çiftçi\n• Belirtili Nesne: köydeki komşularını\n• Yer Tamlayıcısı: yardıma',
        rubric: [
          { criterion: '4 ögeyi de eksiksiz ve doğru ayırma', points: 15 },
          { criterion: '3 ögeyi doğru ayırma', points: 11 },
          { criterion: '2 ögeyi doğru ayırma', points: 7 },
          { criterion: '1 ögeyi doğru ayırma', points: 3 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 4
      }
    ]
  },

  // Senaryo 3 - Sınav 2
  {
    id: 'g8-s3-e2',
    gradeLevel: 8,
    scenarioGroup: 'senaryo-3',
    scenarioGroupTitle: 'MEB Senaryo 3',
    scenarioName: '2. Sınav (Kayadaki Tohumun Direnişi)',
    examNumber: 2,
    title: 'Kayadaki Tohumun Direnişi',
    theme: '3. Tema: Yaşama Tutunma & Sabır',
    targetClass: '8. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Kayadaki Tohumun Direnişi',
      author: 'Türkçe Ülküsü Yayınları (Özgün Anlatı)',
      source: '8. Sınıf Türkçe Dersi - Tabiat ve İrade',
      content: `Sert kireçtaşı kayalıkların tam ortasındaki daracık bir çatlağa rüzgârın savurduğu küçük bir çam tohumu düştü. Çevresinde ne yumuşak bir toprak ne de bolca su vardı; sadece kavurucu güneş ve acımasız rüzgârlar hüküm sürüyordu. Ancak tohum teslim olmadı. Yağan her çiğ tanesini emerek minik bir kök saldı. Kökleri kayanın kılcal damarlarına doğru ilerledikçe taşı milim milim araladı.

Yıllar geçti. O küçük tohum, gövdesi rüzgârla dövülmüş ama kökleri kayayı parçalayarak toprağa kenetlenmiş ulu bir karaçama dönüştü. Vadiden bakan dağcılar, çıplak kayanın zirvesinde tek başına yeşeren bu ağacı hayranlıkla seyrederlerdi. İmkânsızlıkların ortasında hayat bulan bu çam, yaşama arzusunun taştan bile sert olduğunu kanıtlıyordu.`
    },
    questions: [
      {
        id: 'g8-s3-e2-q1',
        number: 1,
        outcomeCode: 'T.8.3.5',
        title: 'Bağlamdan Kelime Anlamı Bulma',
        points: 15,
        prompt: 'Metinde geçen "kılcal damar" ve "kenetlenmek" ifadelerinin anlamlarını metnin bağlamından hareketle açıklayınız.',
        expectedAnswer: 'Kılcal damar: Kayanın içindeki çok ince, dar çatlak ve yarıklar.\nKenetlenmek: Birbirine sımsıkı bağlanmak, ayrılmayacak şekilde sarılmak.',
        rubric: [
          { criterion: 'İki ifadeyi de doğru açıklama', points: 15 },
          { criterion: 'Bir ifadeyi doğru açıklama', points: 8 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g8-s3-e2-q2',
        number: 2,
        outcomeCode: 'T.8.3.7',
        title: 'Söz Sanatlarını Tespit Etme',
        points: 15,
        prompt: 'Metindeki "Tohum teslim olmadı" ifadesinde kullanılan söz sanatını ve kişileştirilen varlığı yazınız.',
        expectedAnswer: 'Kişileştirme (Teşhis) sanatı kullanılmıştır. İnsana ait bir özellik olan "teslim olmama / direnme" vasfı çam tohumuna yüklenmiştir.',
        rubric: [
          { criterion: 'Kişileştirme sanatını ve unsurunu eksiksiz yazma', points: 15 },
          { criterion: 'Yalnızca kişileştirme yazma', points: 8 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g8-s3-e2-q3',
        number: 3,
        outcomeCode: 'T.8.3.14',
        title: 'Metinle İlgili Soruları Cevaplama',
        points: 15,
        prompt: 'Çam tohumu susuzluk ve topraksızlık koşullarında nasıl hayatta kalmıştır? Metinden hareketle açıklayınız.',
        expectedAnswer: 'Yağan çiğ tanelerini emerek kök salmış ve köklerini kayanın ince yarıklarına doğru ilerleterek taşı aralamış ve beslenmiştir.',
        rubric: [
          { criterion: 'Hayatta kalma sürecini metne göre eksiksiz yazma', points: 15 },
          { criterion: 'Kısmi açıklama', points: 8 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g8-s3-e2-q4',
        number: 4,
        outcomeCode: 'T.8.3.16',
        title: 'Metnin Yüzey Anlamı (Metnin Konusu)',
        points: 10,
        prompt: 'Okuduğunuz metnin konusunu (yüzey anlamını) bir cümleyle yazınız.',
        expectedAnswer: 'Kaya çatlağına düşen bir çam tohumunun tüm olumsuz koşullara direnerek ulu bir ağaca dönüşmesi.',
        rubric: [
          { criterion: 'Metnin konusunu (yüzey anlamını) eksiksiz yazma', points: 10 },
          { criterion: 'Kısmi yazma', points: 5 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 2
      },
      {
        id: 'g8-s3-e2-q5',
        number: 5,
        outcomeCode: 'T.8.3.17',
        title: 'Metnin Derin Anlamı (Metnin Ana Fikri / İletisi)',
        points: 15,
        prompt: 'Okuduğunuz metnin derin anlamını (ana fikrini / verilmek istenen iletiyi) yazınız.',
        expectedAnswer: 'Şartlar ne kadar elverişsiz ve imkânsız görünürse görünsün, sabır ve direnme azmi en katı engelleri bile parçalayarak başarıya ulaştırır.',
        rubric: [
          { criterion: 'Ana fikri (derin anlamı) tam ve özlü ifade etme', points: 15 },
          { criterion: 'Kısmi ifade etme', points: 8 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g8-s3-e2-q6',
        number: 6,
        outcomeCode: 'T.8.4.1',
        title: 'Şiir Yazma',
        points: 15,
        prompt: 'Taş, kök ve sabır temalı dört dizelik (bir dörtlük) özgün bir şiir yazınız.',
        expectedAnswer: 'Örnek Şiir:\nKayayı delip geçen sabrın sesidir,\nYeşeren her yaprak aşk nefesidir.\nYılmadan toprağa uzanan bu kök,\nZalime baş eğmeyen hür iradedir.',
        rubric: [
          { criterion: 'Temaya uygun 4 dizelik özgün şiir yazma', points: 15 },
          { criterion: 'Kısmen uygun şiir', points: 8 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 5
      },
      {
        id: 'g8-s3-e2-q7',
        number: 7,
        outcomeCode: 'T.8.4.18',
        title: 'Cümlenin Ögelerini Ayırt Etme',
        points: 15,
        prompt: `Aşağıdaki cümlenin ögelerini bularak yazınız:
"Vadiden bakan dağcılar, çıplak kayanın zirvesinde tek başına yeşeren bu ağacı hayranlıkla seyrederlerdi."

• Yüklem: .......................................
• Özne: .......................................
• Belirtili Nesne: .......................................
• Zarf Tamlayıcısı: .......................................`,
        expectedAnswer: '• Yüklem: seyrederlerdi\n• Özne: Vadiden bakan dağcılar\n• Belirtili Nesne: çıplak kayanın zirvesinde tek başına yeşeren bu ağacı\n• Zarf Tamlayıcısı: hayranlıkla',
        rubric: [
          { criterion: '4 ögeyi de doğru bulma', points: 15 },
          { criterion: '3 ögeyi doğru bulma', points: 11 },
          { criterion: '2 ögeyi doğru bulma', points: 7 },
          { criterion: '1 ögeyi doğru bulma', points: 3 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 4
      }
    ]
  },

  // ==================== SENARYO 4 ====================
  // Senaryo 4 - Sınav 1
  {
    id: 'g8-s4-e1',
    gradeLevel: 8,
    scenarioGroup: 'senaryo-4',
    scenarioGroupTitle: 'MEB Senaryo 4',
    scenarioName: '1. Sınav (Kitapların Büyülü Dünyası)',
    examNumber: 1,
    title: 'Kitapların Büyülü Dünyası',
    theme: '4. Tema: Sanat ve Edebiyatın Gücü',
    targetClass: '8. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Kitapların Büyülü Dünyası',
      author: 'Türkçe Ülküsü Yayınları (Özgün Deneme)',
      source: '8. Sınıf Türkçe Dersi - MEBİ Metin Uyarlaması',
      content: `Nedir insanların kitaplara, hele ki roman ve şiir kitaplarına olan bu tükenmez düşkünlüğü? Neden kitaplar hayatımızda bu kadar büyük bir yer tutuyor? Bence bu soruya cevap bulmak için öncelikle "İnsan niçin okur?" sorusuna samimiyetle eğilmek gerekir. Dünyada hiçbir dost, insana kitaptan daha yakın ve sadık değildir. Sıkıntılarımızı unutmak, tekdüze hayatımıza biraz renk ve ışık katmak, daracık dünyamızda bulamadığımız zenginlikleri yaşamak için tek sığınağımız kitaplara sarılmaktır.

Sanatçı sadece kuru bilgiler öğretmek veya bazı doğruları dayatmak amacıyla yazmaz. Eğer öyle olsaydı edebiyatın yerini ansiklopediler alırdı. Sanat eseri, insan ruhunu arındırır, duygularımızı inceltir ve bizi başka insanların acılarına ortak eder. İşte bu nokta, fikir eseri ile sanat eserinin ayrıldığı en belirgin sınırdır.`
    },
    questions: [
      {
        id: 'g8-s4-e1-q1',
        number: 1,
        outcomeCode: 'T.8.3.5',
        title: 'Bağlamdan Kelime Anlamı Bulma',
        points: 15,
        prompt: 'Metinde geçen "tekdüze" ve "arındırmak" sözcüklerinin anlamlarını metnin bağlamından hareketle açıklayınız.',
        expectedAnswer: 'Tekdüze: Değişmeksizin aynı biçimde sürüp giden, yeknesak, monoton.\nArındırmak: Kusurlardan, sıkıntılardan ve kaba duygulardan temizlemek, saflaştırmak.',
        rubric: [
          { criterion: 'İki sözcüğün anlamını da doğru açıklama', points: 15 },
          { criterion: 'Bir sözcüğün anlamını doğru açıklama', points: 8 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g8-s4-e1-q2',
        number: 2,
        outcomeCode: 'T.8.3.11',
        title: 'Metindeki Anlatım Biçimlerini Belirleme',
        points: 15,
        prompt: 'Metinde yazarın okuyucuya sorular yönelterek kendi düşüncesini aktarmasında hangi anlatım biçimi ağır basmaktadır? Gerekçesiyle yazınız.',
        expectedAnswer: 'Tartışmacı anlatım biçimi ağır basmaktadır. Yazar "Nedir insanların kitaplara olan bu düşkünlüğü?" gibi sorularla okuyucunun zihninde sorgulama başlatmış ve kendi edebiyat görüşünü savunmuştur.',
        rubric: [
          { criterion: 'Tartışmacı anlatımı ve soru temelli gerekçesini tam yazma', points: 15 },
          { criterion: 'Yalnızca tartışmacı anlatım yazma', points: 8 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g8-s4-e1-q3',
        number: 3,
        outcomeCode: 'T.8.3.16',
        title: 'Metnin Yüzey Anlamı (Metnin Konusu)',
        points: 10,
        prompt: 'Okuduğunuz metnin konusunu (yüzey anlamını) tek bir cümleyle yazınız.',
        expectedAnswer: 'İnsanın kitap okuma ihtiyacının nedenleri ve edebiyatın insan ruhunu zenginleştiren gücü.',
        rubric: [
          { criterion: 'Metnin konusunu (yüzey anlamını) eksiksiz yazma', points: 10 },
          { criterion: 'Kısmi yazma', points: 5 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 2
      },
      {
        id: 'g8-s4-e1-q4',
        number: 4,
        outcomeCode: 'T.8.3.17',
        title: 'Metnin Derin Anlamı (Metnin Ana Fikri / İletisi)',
        points: 15,
        prompt: 'Yazara göre fikir eseri ile sanat eseri arasındaki temel farktan hareketle metnin derin anlamını (ana fikrini) yazınız.',
        expectedAnswer: 'Fikir eserleri kuru bilgi öğretmeyi hedeflerken, sanat eserleri insan ruhunu incelten, duyguları zenginleştiren ve başkalarının dünyasını anlamayı sağlayan eserlerdir.',
        rubric: [
          { criterion: 'Fikir eseri ile sanat eseri farkını ve derin anlamı eksiksiz yazma', points: 15 },
          { criterion: 'Kısmi yazma', points: 8 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g8-s4-e1-q5',
        number: 5,
        outcomeCode: 'T.8.3.34',
        title: 'Düşünceyi Geliştirme Yollarını Belirleme',
        points: 15,
        prompt: 'Metinde geçen "Dünyada hiçbir dost, insana kitaptan daha yakın ve sadık değildir." cümlesinde hangi düşünceyi geliştirme yolu kullanılmıştır? Açıklayınız.',
        expectedAnswer: 'Karşılaştırma kullanılmıştır. Kitap ile dünyadaki diğer dostlar sadakat ve yakınlık bakımından kıyaslanmış, kitabın üstünlüğü vurgulanmıştır.',
        rubric: [
          { criterion: 'Karşılaştırma olduğunu ve unsurlarını doğru açıklama', points: 15 },
          { criterion: 'Yalnızca karşılaştırma yazma', points: 8 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g8-s4-e1-q6',
        number: 6,
        outcomeCode: 'T.8.4.4',
        title: 'Yazma Stratejilerini Uygulama',
        points: 15,
        prompt: 'Bir roman kahramanının yerine kendinizi koyarak empati kurma stratejisiyle yazılmış 4-5 cümlelik kısa bir metin oluşturunuz.',
        expectedAnswer: 'Sayfaları çevirirken kendimi bir anda ıssız adada yaşam mücadelesi veren Robinson Crusoe’nun yerine koydum. Dalgaların kıyıya vurduğu her an yalnızlığın soğuk nefesini ensemde hissettim. Ancak vazgeçmedim; doğanın sunduğu küçük nimetlerle bir barınak kurup ateşi harladım. Bir kitabın içinde başka bir cana bürünmek, insanın kendi sınırlarını aşmasının en muazzam yoludur.',
        rubric: [
          { criterion: 'Empati stratejisiyle 4-5 cümlelik edebi bir anlatım oluşturma', points: 15 },
          { criterion: 'Kısmi veya stratejiden uzak metin', points: 8 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 5
      },
      {
        id: 'g8-s4-e1-q7',
        number: 7,
        outcomeCode: 'T.8.4.15',
        title: 'Geçiş ve Bağlantı İfadelerini Kullanma',
        points: 15,
        prompt: '"ancak", "oysaki", "özellikle", "başka bir deyişle" ve "kısacası" geçiş ifadelerinden en az ikisini kullanarak edebiyatın gücünü anlatan bir düşünce paragrafı yazınız.',
        expectedAnswer: 'Edebiyat yalnızca sözcüklerin kâğıda dökülmesi değildir; başka bir deyişle insan ruhunun derinliklerine açılan bir aynadır. Çoğu insan romanları vakit geçirme aracı sanır, oysaki iyi bir roman insanın dünyaya bakışını baştan aşağı yeniler. Kısacası edebiyat bizi daha duyarlı ve anlayışlı birer insan yapar.',
        rubric: [
          { criterion: 'En az iki geçiş ifadesini anlamına uygun kullanarak akıcı paragraf yazma', points: 15 },
          { criterion: 'Tek ifade kullanma veya cümle yapısı zayıf', points: 8 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 5
      }
    ]
  },

  // Senaryo 4 - Sınav 2
  {
    id: 'g8-s4-e2',
    gradeLevel: 8,
    scenarioGroup: 'senaryo-4',
    scenarioGroupTitle: 'MEB Senaryo 4',
    scenarioName: '2. Sınav (Tarihin Taşlaşmış Şiiri: Mimar Sinan)',
    examNumber: 2,
    title: 'Tarihin Taşlaşmış Şiiri: Mimar Sinan',
    theme: '4. Tema: Sanat Tarihi & Mimari Deha',
    targetClass: '8. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Tarihin Taşlaşmış Şiiri: Mimar Sinan',
      author: 'Türkçe Ülküsü Yayınları (Özgün Makale/Deneme)',
      source: '8. Sınıf Türkçe Dersi - Klasik Sanatlarımız',
      content: `Koca Sinan’ın eserlerine baktığınızda taşa can veren mimari bir dehanın ayak seslerini duyarsınız. Selimiye Camii’nin göğe uzanan dört minaresi ve devasa kubbesi, sadece teknik bir zafer değil; taşın zarafetle yoğrulduğu estetik bir mucizedir. Sinan, kubbeyi sekiz filayağı üzerine öyle bir hafiflikle oturtmuştur ki bina ağırlığını unutmuş gibidir.

Geleneksel mimaride binalar yalnızca ibadet veya barınma amacıyla inşa edilmezdi. Çevreyle olan ahengi, rüzgârın yönü ve ışığın düşüş açısı matematiksel bir hassasiyetle hesaplanırdı. Selimiye’de kullanılan akustik düzen, imamın fısıltısının dahi binanın en arka köşesinden berrakça duyulmasını sağlar. İşte bu yüzden Sinan’ın yapıları birer bina değil; yüzyılları aşan taşlaşmış birer şiirdir.`
    },
    questions: [
      {
        id: 'g8-s4-e2-q1',
        number: 1,
        outcomeCode: 'T.8.3.5',
        title: 'Bağlamdan Kelime Anlamı Bulma',
        points: 15,
        prompt: 'Metinde geçen "filayağı" ve "akustik" terimlerinin anlamlarını açıklayınız.',
        expectedAnswer: 'Filayağı: Büyük kubbeleri ve kemerleri taşımak için yapılan çok kalın, masif taş sütun.\nAkustik: Sesin bir mekân içerisindeki yankılanma, yayılma ve duyulma özelliklerini inceleyen fizik/mimari düzen.',
        rubric: [
          { criterion: 'İki terimi de doğru açıklama', points: 15 },
          { criterion: 'Bir terimi doğru açıklama', points: 8 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g8-s4-e2-q2',
        number: 2,
        outcomeCode: 'T.8.3.11',
        title: 'Metindeki Anlatım Biçimlerini Belirleme',
        points: 15,
        prompt: 'Metinde Mimar Sinan’ın Selimiye Camii’ndeki kubbe ve minare tasarımları aktarılırken hangi anlatım biçimleri (açıklama ve betimleme) bir arada kullanılmıştır? Gerekçesiyle yazınız.',
        expectedAnswer: 'Açıklama ve Betimleme bir arada kullanılmıştır. Camiinin teknik özellikleri ve akustik düzeni açıklanırken; kubbenin hafifliği ve minarelerin göğe uzanışı gözde canlandırılacak şekilde betimlenmiştir.',
        rubric: [
          { criterion: 'Her iki anlatım biçimini ve gerekçesini tam yazma', points: 15 },
          { criterion: 'Yalnızca birini yazma', points: 8 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g8-s4-e2-q3',
        number: 3,
        outcomeCode: 'T.8.3.16',
        title: 'Metnin Yüzey Anlamı (Metnin Konusu)',
        points: 10,
        prompt: 'Okuduğunuz metnin konusunu (yüzey anlamını) tek bir cümleyle yazınız.',
        expectedAnswer: 'Mimar Sinan’ın Selimiye Camii’nde ortaya koyduğu mimari deha ve estetik mükemmellik.',
        rubric: [
          { criterion: 'Metnin konusunu (yüzey anlamını) eksiksiz yazma', points: 10 },
          { criterion: 'Kısmi yazma', points: 5 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 2
      },
      {
        id: 'g8-s4-e2-q4',
        number: 4,
        outcomeCode: 'T.8.3.17',
        title: 'Metnin Derin Anlamı (Metnin Ana Fikri / İletisi)',
        points: 15,
        prompt: 'Yazarın Sinan’ın yapıları için "taşlaşmış birer şiir" ifadesini kullanmasındaki asıl düşünceyi ve metnin derin anlamını (ana fikrini) açıklayınız.',
        expectedAnswer: 'Mimar Sinan’ın eserleri sadece teknik bir inşaat başarısı değil, insan ruhunu büyüleyen ve sanatın en yüksek ahengini taşa yansıtan estetik şaheserlerdir.',
        rubric: [
          { criterion: 'Derin anlamı ve ana fikri tam ve özlü açıklama', points: 15 },
          { criterion: 'Kısmi açıklama', points: 8 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g8-s4-e2-q5',
        number: 5,
        outcomeCode: 'T.8.3.34',
        title: 'Düşünceyi Geliştirme Yollarını Belirleme',
        points: 15,
        prompt: 'Metinde Selimiye Camii’ndeki kubbe, minare ve akustik sistemin anlatılması hangi düşünceyi geliştirme yoludur?',
        expectedAnswer: 'Örneklendirme yoludur. Sinan’ın mimari dehasını somutlaştırmak için ustalık eseri olan Selimiye Camii örnek verilmiştir.',
        rubric: [
          { criterion: 'Örneklendirme olduğunu ve gerekçesini doğru yazma', points: 15 },
          { criterion: 'Yalnızca örneklendirme yazma', points: 8 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g8-s4-e2-q6',
        number: 6,
        outcomeCode: 'T.8.4.4',
        title: 'Yazma Stratejilerini Uygulama',
        points: 15,
        prompt: 'Tarihi bir köprü veya hanın gözünden insanlığa seslenen kısa bir monolog (4-5 cümle) yazınız.',
        expectedAnswer: 'Asırlardır altımdan çağlayan coşkun nehrin sularını göğsümde yumuşatıyorum. Üzerimden geçen kervanları, sefere çıkan orduları ve hasret çeken yolcuları sessizce sırtımda taşıdım. Kemerlerimin her taşında ecdadın alın teri ve usta ellerin sabrı saklıdır. Zaman beni yıpratmaya çalışsa da ben iki yakayı birbirine bağlamaya devam edeceğim.',
        rubric: [
          { criterion: 'Tarihi yapının gözünden yaratıcı yazma stratejisiyle 4-5 cümlelik metin oluşturma', points: 15 },
          { criterion: 'Kısmen başarılı anlatım', points: 8 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 5
      },
      {
        id: 'g8-s4-e2-q7',
        number: 7,
        outcomeCode: 'T.8.4.15',
        title: 'Geçiş ve Bağlantı İfadelerini Kullanma',
        points: 15,
        prompt: '"oysaki", "özellikle" ve "kısacası" geçiş ifadelerini kullanarak tarihi eserlerin korunması hakkında bir düşünce paragrafı yazınız.',
        expectedAnswer: 'Tarihi yapılar geçmişimizin tapu senetleridir; oysaki günümüzde pek çok tarihi eser ilgisizlikten yıpranmaktadır. Özellikle genç nesillerin bu eserleri tanıması ve koruma bilinci kazanması büyük önem taşır. Kısacası tarihimize sahip çıkmak geleceğimize sahip çıkmaktır.',
        rubric: [
          { criterion: 'Üç geçiş ifadesini de doğru ve akıcı kullanarak paragraf yazma', points: 15 },
          { criterion: 'İki ifadeyi doğru kullanma', points: 10 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 5
      }
    ]
  },

  // ==================== SENARYO 5 ====================
  // Senaryo 5 - Sınav 1
  {
    id: 'g8-s5-e1',
    gradeLevel: 8,
    scenarioGroup: 'senaryo-5',
    scenarioGroupTitle: 'MEB Senaryo 5',
    scenarioName: '1. Sınav (Galata Kulesi’nin Panoraması)',
    examNumber: 1,
    title: 'Galata Kulesi’nin Panoraması',
    theme: '5. Tema: Şehir ve Mimari & Tarihi Miras',
    targetClass: '8. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Galata Kulesi’nin Panoraması',
      author: 'Türkçe Ülküsü Yayınları (Özgün Anlatı)',
      source: '8. Sınıf Türkçe Dersi - MEBİ Hazırlık Metni Uyarlaması',
      content: `(I) Galata Kulesi, İstanbul’un tarihî yarımadasını seyretmek amacıyla inşa edilen görkemli yapılardan biridir. (II) Cenevizliler tarafından fener ve gözetleme kulesi olarak yapılan bu eser, yüzyıllar boyunca birçok kez restore edildiği için günümüze kadar sağlam bir şekilde ulaşabilmiştir. (III) Kulenin en üst katına çıkarsanız İstanbul Boğazı’nın büyüleyici manzarasını panoramik olarak seyredebilirsiniz. (IV) İstanbul’un diğer tarihî yapılarına göre çok daha fazla yerli ve yabancı ziyaretçi çeken Galata Kulesi, şehrin silüetini süsleyen en gözde simgedir.`
    },
    questions: [
      {
        id: 'g8-s5-e1-q1',
        number: 1,
        outcomeCode: 'T.8.3.7',
        title: 'Söz Sanatlarını Tespit Etme',
        points: 10,
        prompt: 'Metindeki "şehrin silüetini süsleyen en gözde simge" ifadesindeki söz sanatını ve kişileştirilen/benzetilen durumu açıklayınız.',
        expectedAnswer: 'Kişileştirme veya Benzetme sanatı vardır. Kulenin bir şehri "süsleyen bir takı/figür" gibi düşünülmesi veya kuleye "en gözde" nitelemesi verilmesi sanatlı bir edebi ve kişileştirme söyleyişidir.',
        rubric: [
          { criterion: 'Söz sanatını ve gerekçesini doğru açıklama', points: 10 },
          { criterion: 'Yalnızca sanatın adını yazma', points: 5 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g8-s5-e1-q2',
        number: 2,
        outcomeCode: 'T.8.3.9',
        title: 'Fiilimsilerin İşlevlerini Kavrama',
        points: 15,
        prompt: `Metinden aşağıdaki fiilimsileri bularak türlerini yazınız:
• "seyretmek" -> .......................................
• "yapılan" -> .......................................
• "edildiği için" (edildik-te) -> .......................................`,
        expectedAnswer: '• seyretmek: İsim-fiil (Mastar)\n• yapılan: Sıfat-fiil (Ortaç)\n• edildiği için (edildik): Sıfat-fiil veya Zarf-fiil öbeği (Sıfat-fiil eki alıp edatla zarflaşmıştır)',
        rubric: [
          { criterion: '3 fiilimsi türünü de doğru belirtme', points: 15 },
          { criterion: '2 fiilimsiyi doğru belirtme', points: 10 },
          { criterion: '1 fiilimsiyi doğru belirtme', points: 5 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 4
      },
      {
        id: 'g8-s5-e1-q3',
        number: 3,
        outcomeCode: 'T.8.3.11',
        title: 'Metindeki Anlatım Biçimlerini Belirleme',
        points: 10,
        prompt: 'Metinde Galata Kulesi hakkında bilgi verilirken hangi anlatım biçimi kullanılmıştır?',
        expectedAnswer: 'Açıklayıcı anlatım biçimi kullanılmıştır.',
        rubric: [
          { criterion: 'Açıklayıcı anlatım biçimini doğru belirtme', points: 10 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 2
      },
      {
        id: 'g8-s5-e1-q4',
        number: 4,
        outcomeCode: 'T.8.3.15',
        title: 'Metinle İlgili Sorular Sorma',
        points: 10,
        prompt: 'Metnin içeriğine yönelik, cevabı metinde bulunan iki nitelikli soru yazınız.',
        expectedAnswer: '1. Soru: Galata Kulesi başlangıçta kimler tarafından ve hangi amaçla yapılmıştır?\n2. Soru: Galata Kulesi’nin günümüze kadar sağlam ulaşabilmesinin sebebi nedir?',
        rubric: [
          { criterion: 'Cevabı metinde bulunan iki nitelikli soru yazma', points: 10 },
          { criterion: 'Tek soru yazma', points: 5 },
          { criterion: 'Hatalı sorular', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g8-s5-e1-q5',
        number: 5,
        outcomeCode: 'T.8.3.25',
        title: 'Okuduklarıyla İlgili Çıkarımda Bulunma',
        points: 15,
        prompt: `Metinde numaralanmış cümlelerde bulunan anlam ilişkilerini belirleyiniz:
• I. cümledeki anlam ilişkisi: .......................................
• II. cümledeki anlam ilişkisi: .......................................
• III. cümledeki anlam ilişkisi: .......................................
• IV. cümledeki anlam ilişkisi: .......................................
(Seçenekler: Amaç-Sonuç / Sebep-Sonuç / Koşul-Sonuç / Karşılaştırma)`,
        expectedAnswer: '• I. cümle: Amaç-Sonuç (Tarihî yarımadayı seyretmek amacıyla...)\n• II. cümle: Sebep-Sonuç (Birçok kez restore edildiği için...)\n• III. cümle: Koşul-Sonuç (En üst katına çıkarsanız...)\n• IV. cümle: Karşılaştırma (Diğer tarihî yapılara göre daha çok...)',
        rubric: [
          { criterion: '4 cümlenin anlam ilişkisini de eksiksiz ve doğru eşleştirme', points: 15 },
          { criterion: '3 cümleyi doğru eşleştirme', points: 11 },
          { criterion: '2 cümleyi doğru eşleştirme', points: 7 },
          { criterion: '1 cümleyi doğru eşleştirme', points: 3 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 5
      },
      {
        id: 'g8-s5-e1-q6',
        number: 6,
        outcomeCode: 'T.8.3.26',
        title: 'Metin Türlerini Ayırt Etme',
        points: 10,
        prompt: 'Okuduğunuz metin bir tanıtım ve bilgilendirme yazısıdır. Metnin öznel ve nesnel cümle dengesini açıklayınız.',
        expectedAnswer: 'I. ve IV. cümleler "görkemli", "büyüleyici", "en gözde" ifadeleriyle öznel yargılar içerirken; II. cümle (Cenevizliler tarafından yapılması ve restorasyonlar) nesnel kanıtlanabilir bilgiler sunar.',
        rubric: [
          { criterion: 'Öznel ve nesnel cümleleri gerekçesiyle açıklama', points: 10 },
          { criterion: 'Kısmi açıklama', points: 5 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g8-s5-e1-q7',
        number: 7,
        outcomeCode: 'T.8.3.34',
        title: 'Düşünceyi Geliştirme Yollarını Belirleme',
        points: 10,
        prompt: 'IV. cümlede Galata Kulesi’nin ziyaretçi sayısı İstanbul’un diğer yapılarıyla kıyaslanırken hangi düşünceyi geliştirme yolu kullanılmıştır?',
        expectedAnswer: 'Karşılaştırma düşünceyi geliştirme yolu kullanılmıştır.',
        rubric: [
          { criterion: 'Karşılaştırma olduğunu doğru yazma', points: 10 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 2
      },
      {
        id: 'g8-s5-e1-q8',
        number: 8,
        outcomeCode: 'T.8.4.9',
        title: 'Yazılarında Anlatım Biçimlerini Kullanma',
        points: 10,
        prompt: 'Galata Kulesi’nden gün batımında İstanbul Boğazı’nı seyreden bir kişinin gördüklerini betimleyici anlatım biçimiyle (3-4 cümle) yazınız.',
        expectedAnswer: 'Kulenin balkonundan ufka baktığımda erguvan renkli akşam güneşi Boğaz’ın sularını kızıla boyuyordu. Uzaktan geçen vapurun beyaz köpükleri altın sarısı ışıkta pırıl pırıl parıldıyordu. Tarihi yarımadanın kubbe ve minareleri, kızıllaşan gökyüzünün önünde zarif birer gölge gibi yükseliyordu.',
        rubric: [
          { criterion: 'Betimleyici anlatıma uygun 3-4 cümlelik zengin görsel metin yazma', points: 10 },
          { criterion: 'Kısmen uygun metin', points: 5 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 4
      },
      {
        id: 'g8-s5-e1-q9',
        number: 9,
        outcomeCode: 'T.8.4.18',
        title: 'Cümlenin Ögelerini Ayırt Etme',
        points: 10,
        prompt: `Aşağıdaki cümlenin ögelerini ayırınız:
"Cenevizliler, bu muazzam kuleyi fener olarak inşa ettiler."

• Yüklem: .......................................
• Özne: .......................................
• Belirtili Nesne: .......................................
• Zarf Tamlayıcısı: .......................................`,
        expectedAnswer: '• Yüklem: inşa ettiler\n• Özne: Cenevizliler\n• Belirtili Nesne: bu muazzam kuleyi\n• Zarf Tamlayıcısı: fener olarak',
        rubric: [
          { criterion: '4 ögeyi de doğru ayırma', points: 10 },
          { criterion: '3 ögeyi doğru ayırma', points: 7 },
          { criterion: '2 ögeyi doğru ayırma', points: 5 },
          { criterion: '1 ögeyi doğru ayırma', points: 2 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 4
      }
    ]
  },

  // Senaryo 5 - Sınav 2
  {
    id: 'g8-s5-e2',
    gradeLevel: 8,
    scenarioGroup: 'senaryo-5',
    scenarioGroupTitle: 'MEB Senaryo 5',
    scenarioName: '2. Sınav (Kız Kulesi’nin Sessiz Masalı)',
    examNumber: 2,
    title: 'Kız Kulesi’nin Sessiz Masalı',
    theme: '5. Tema: Efsaneler ve İstanbul Mimarisi',
    targetClass: '8. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Kız Kulesi’nin Sessiz Masalı',
      author: 'Türkçe Ülküsü Yayınları (Özgün Anlatı)',
      source: '8. Sınıf Türkçe Dersi - Efsanelerimiz',
      content: `(I) Kız Kulesi, Boğaz’ın dalgaları ortasında küçük bir adacık üzerine kondurulmuş zarif bir inci gibidir. (II) Bizans devrinden Osmanlı’ya kadar gümrük istasyonu ve deniz feneri vazifesi gördüğü için her devirde özenle korunmuştur. (III) Eğer kıyıdan kalkan küçük teknelere binerseniz kulenin asırlık taş merdivenlerini adımlayabilirsiniz. (IV) Boğaziçi’ndeki diğer tüm adalara kıyasla etrafı efsanelerle en çok örülü olan bu yapı, İstanbul’un kalbinde yüzyıllardır yalnızlığını fısıldar.`
    },
    questions: [
      {
        id: 'g8-s5-e2-q1',
        number: 1,
        outcomeCode: 'T.8.3.7',
        title: 'Söz Sanatlarını Tespit Etme',
        points: 10,
        prompt: 'Metindeki "zarif bir inci gibidir" ve "yalnızlığını fısıldar" ifadelerinde kullanılan söz sanatlarını yazınız.',
        expectedAnswer: '"zarif bir inci gibidir": Benzetme (Teşbih)\n"yalnızlığını fısıldar": Kişileştirme (Teşhis)',
        rubric: [
          { criterion: 'İki söz sanatını da doğru tespit etme', points: 10 },
          { criterion: 'Birini doğru tespit etme', points: 5 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g8-s5-e2-q2',
        number: 2,
        outcomeCode: 'T.8.3.9',
        title: 'Fiilimsilerin İşlevlerini Kavrama',
        points: 15,
        prompt: `Metinde geçen aşağıdaki sözcüklerin fiilimsi türlerini yazınız:
• "kondurulmuş" -> .......................................
• "kalkan" -> .......................................
• "adımlayabilirsiniz" bir fiilimsi midir? Açıklayınız.`,
        expectedAnswer: '• kondurulmuş: Sıfat-fiil (kondurulmuş inci)\n• kalkan: Sıfat-fiil (kalkan tekneler)\n• adımlayabilirsiniz fiilimsi değildir; çekimli bir fiildir (Geniş zaman ve yeterlilik kipi almıştır).',
        rubric: [
          { criterion: '3 bölümü de doğru açıklama', points: 15 },
          { criterion: '2 bölümü doğru açıklama', points: 10 },
          { criterion: '1 bölümü doğru açıklama', points: 5 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 4
      },
      {
        id: 'g8-s5-e2-q3',
        number: 3,
        outcomeCode: 'T.8.3.11',
        title: 'Metindeki Anlatım Biçimlerini Belirleme',
        points: 10,
        prompt: 'Metinde kullanılan temel anlatım biçimini yazınız.',
        expectedAnswer: 'Açıklayıcı anlatım (Betimleyici unsurlarla zenginleştirilmiş açıklama).',
        rubric: [
          { criterion: 'Açıklayıcı anlatımı doğru belirtme', points: 10 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 2
      },
      {
        id: 'g8-s5-e2-q4',
        number: 4,
        outcomeCode: 'T.8.3.15',
        title: 'Metinle İlgili Sorular Sorma',
        points: 10,
        prompt: 'Kız Kulesi metnine dayalı iki nitelikli kavrama sorusu yazınız.',
        expectedAnswer: '1. Kız Kulesi tarih boyunca hangi işlevlerle (vazifelerle) kullanılmıştır?\n2. Kız Kulesi’ne ulaşmak isteyen bir ziyaretçi hangi ulaşım yolunu tercih etmelidir?',
        rubric: [
          { criterion: 'İki geçerli soru yazma', points: 10 },
          { criterion: 'Tek soru yazma', points: 5 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g8-s5-e2-q5',
        number: 5,
        outcomeCode: 'T.8.3.25',
        title: 'Okuduklarıyla İlgili Çıkarımda Bulunma',
        points: 15,
        prompt: `Metindeki cümlelerin anlam ilişkilerini yazınız:
• II. cümle: .......................................
• III. cümle: .......................................
• IV. cümle: .......................................`,
        expectedAnswer: '• II. cümle: Sebep-Sonuç (Vazife gördüğü için korunmuştur)\n• III. cümle: Koşul-Sonuç (Teknelere binerseniz adımlayabilirsiniz)\n• IV. cümle: Karşılaştırma (Diğer tüm adalara kıyasla...)',
        rubric: [
          { criterion: '3 cümlenin anlam ilişkisini de doğru belirleme', points: 15 },
          { criterion: '2 cümleyi doğru belirleme', points: 10 },
          { criterion: '1 cümleyi doğru belirleme', points: 5 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 4
      },
      {
        id: 'g8-s5-e2-q6',
        number: 6,
        outcomeCode: 'T.8.3.26',
        title: 'Metin Türlerini Ayırt Etme',
        points: 10,
        prompt: 'Metindeki öznel ve nesnel yargılara birer örnek cümle yazınız.',
        expectedAnswer: 'Öznel Yargı: I. cümle ("zarif bir inci gibidir") veya IV. cümle ("yalnızlığını fısıldar").\nNesnel Yargı: II. cümle ("Bizans devrinden Osmanlı’ya kadar gümrük istasyonu ve deniz feneri vazifesi görmüştür").',
        rubric: [
          { criterion: 'Öznel ve nesnel yargıyı doğru örnekleme', points: 10 },
          { criterion: 'Birini doğru örnekleme', points: 5 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g8-s5-e2-q7',
        number: 7,
        outcomeCode: 'T.8.3.34',
        title: 'Düşünceyi Geliştirme Yollarını Belirleme',
        points: 10,
        prompt: 'IV. cümlede diğer adalar ile Kız Kulesi arasında kurulan bağ hangi düşünceyi geliştirme yoludur?',
        expectedAnswer: 'Karşılaştırma yoludur.',
        rubric: [
          { criterion: 'Karşılaştırma olduğunu doğru yazma', points: 10 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 2
      },
      {
        id: 'g8-s5-e2-q8',
        number: 8,
        outcomeCode: 'T.8.4.9',
        title: 'Yazılarında Anlatım Biçimlerini Kullanma',
        points: 10,
        prompt: 'Kız Kulesi’nin gece ışıklandırmasını betimleyici anlatım biçimiyle anlatan 3-4 cümlelik kısa bir metin yazınız.',
        expectedAnswer: 'Gece çöktüğünde Kız Kulesi Boğaz’ın karanlık suları ortasında altın sarısı bir fener gibi parıldıyordu. Kulenin pencerelerinden sızan ışıklar dalgaların üzerinde dans eden yakamozlara karışıyordu. Kıyıdaki martılar bu ışıltılı kalenin etrafında sessiz daireler çizerek gecenin sükûnetine eşlik ediyordu.',
        rubric: [
          { criterion: 'Betimleyici anlatıma uygun 3-4 cümlelik görsel metin yazma', points: 10 },
          { criterion: 'Kısmen uygun metin', points: 5 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 4
      },
      {
        id: 'g8-s5-e2-q9',
        number: 9,
        outcomeCode: 'T.8.4.18',
        title: 'Cümlenin Ögelerini Ayırt Etme',
        points: 10,
        prompt: `Aşağıdaki cümlenin ögelerini ayırınız:
"Küçük tekneler, yolcuları Kız Kulesi'ne güvenle ulaştırır."

• Yüklem: .......................................
• Özne: .......................................
• Belirtili Nesne: .......................................
• Yer Tamlayıcısı: .......................................
• Zarf Tamlayıcısı: .......................................`,
        expectedAnswer: '• Yüklem: ulaştırır\n• Özne: Küçük tekneler\n• Belirtili Nesne: yolcuları\n• Yer Tamlayıcısı: Kız Kulesi\'ne\n• Zarf Tamlayıcısı: güvenle',
        rubric: [
          { criterion: '5 ögeyi de doğru ayırma', points: 10 },
          { criterion: '4 ögeyi doğru ayırma', points: 8 },
          { criterion: '3 ögeyi doğru ayırma', points: 6 },
          { criterion: '2 ögeyi doğru ayırma', points: 4 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 5
      }
    ]
  },

  // ==================== SENARYO 6 ====================
  // Senaryo 6 - Sınav 1
  {
    id: 'g8-s6-e1',
    gradeLevel: 8,
    scenarioGroup: 'senaryo-6',
    scenarioGroupTitle: 'MEB Senaryo 6',
    scenarioName: '1. Sınav (Bozkırın Tezenesi Neşet Ertaş)',
    examNumber: 1,
    title: 'Bozkırın Tezenesi Neşet Ertaş',
    theme: '6. Tema: Millî Kültür & Halk Müziği',
    targetClass: '8. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Bozkırın Tezenesi Neşet Ertaş',
      author: 'Türkçe Ülküsü Yayınları (Özgün Sanatçı Biyografisi)',
      source: '8. Sınıf Türkçe Dersi - Kültür Hazinelerimiz',
      content: `Bozkırın sarı sıcağında bağlamasının tellerine dokunduğunda yalnızca bir melodi değil, Anadolu insanının yüzyıllık çilesi, aşkı ve gurbet hasreti yankılanırdı. Neşet Ertaş; tevazusu, arı Türkçesi ve kalpten gelen sesiyle halkın gönlünde taht kurmuş ulu bir halk ozanıdır. O, "Gönülden gönüle bir yol vardır, görülmez." diyerek samimiyetin her türlü yapmacıklıktan üstün olduğunu kanıtlamıştır.

Babası Muharrem Ertaş’tan devraldığı abdal geleneğini modern zamanlara taşırken sazına ve sözüne asla yabancı unsurlar karıştırmadı. Konserlerine başlarken dinleyicilerine "Ayaklarınızın turabıyım." diyecek kadar engin bir alçakgönüllülüğe sahipti. Onun türküleri, bozkırın kuru toprağında filizlenen en berrak sevgi çiçeğidir.`
    },
    questions: [
      {
        id: 'g8-s6-e1-q1',
        number: 1,
        outcomeCode: 'T.8.3.7',
        title: 'Söz Sanatlarını Tespit Etme',
        points: 10,
        prompt: 'Metinde geçen "Onun türküleri, bozkırın kuru toprağında filizlenen en berrak sevgi çiçeğidir." cümlesindeki söz sanatını yazınız.',
        expectedAnswer: 'Benzetme (Teşbih) veya İstiare sanatı kullanılmıştır. Türküler kuru toprakta açan bir sevgi çiçeğine benzetilmiştir.',
        rubric: [
          { criterion: 'Benzetme sanatını ve unsurlarını doğru yazma', points: 10 },
          { criterion: 'Yalnızca benzetme yazma', points: 5 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 2
      },
      {
        id: 'g8-s6-e1-q2',
        number: 2,
        outcomeCode: 'T.8.3.11',
        title: 'Metindeki Anlatım Biçimlerini Belirleme',
        points: 10,
        prompt: 'Metinde ağırlıklı olarak hangi anlatım biçimi kullanılmıştır?',
        expectedAnswer: 'Açıklayıcı anlatım (veya Biyografik açıklama).',
        rubric: [
          { criterion: 'Açıklayıcı anlatımı doğru belirtme', points: 10 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 2
      },
      {
        id: 'g8-s6-e1-q3',
        number: 3,
        outcomeCode: 'T.8.3.14',
        title: 'Metinle İlgili Soruları Cevaplama',
        points: 10,
        prompt: 'Neşet Ertaş konserlerine başlarken seyircilerine nasıl hitap ederdi ve bu onun hangi kişilik özelliğini gösterir?',
        expectedAnswer: '"Ayaklarınızın turabıyım (toprağıyım)" diye hitap ederdi. Bu söz onun engin bir alçakgönüllülüğe, tevazuya ve halka duyduğu derin saygıya sahip olduğunu gösterir.',
        rubric: [
          { criterion: 'Hitabı ve alçakgönüllülük özelliğini tam yazma', points: 10 },
          { criterion: 'Kısmi yazma', points: 5 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g8-s6-e1-q4',
        number: 4,
        outcomeCode: 'T.8.3.15',
        title: 'Metinle İlgili Sorular Sorma',
        points: 10,
        prompt: 'Metnin içeriğiyle ilgili cevabı metinde olan bir analiz sorusu yazınız.',
        expectedAnswer: 'Neşet Ertaş abdal geleneğini babasından devralıp sürdürürken sazına ve sözüne nasıl bir yaklaşım sergilemiştir?',
        rubric: [
          { criterion: 'Nitelikli analiz sorusu yazma', points: 10 },
          { criterion: 'Basit soru yazma', points: 5 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 2
      },
      {
        id: 'g8-s6-e1-q5',
        number: 5,
        outcomeCode: 'T.8.3.17',
        title: 'Metnin Derin Anlamı (Metnin Ana Fikri / İletisi)',
        points: 10,
        prompt: 'Okuduğunuz metnin derin anlamını (ana fikrini / verilmek istenen mesajı) tek bir cümleyle yazınız.',
        expectedAnswer: 'Gerçek halk sanatçıları, tevazu ve samimiyetle kendi kültürünün arı özüne sahip çıkarak milletin kalbinde ölümsüzleşir.',
        rubric: [
          { criterion: 'Ana fikri (derin anlamı) tam ve özlü ifade etme', points: 10 },
          { criterion: 'Kısmi ifade etme', points: 5 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 2
      },
      {
        id: 'g8-s6-e1-q6',
        number: 6,
        outcomeCode: 'T.8.3.19',
        title: 'Metne Uygun Başlık Belirleme',
        points: 10,
        prompt: 'Metnin konusu ve iletisiyle tam örtüşen alternatif iki özgün başlık yazınız.',
        expectedAnswer: '1. Gönül Telinin Usta Sesi\n2. Bozkırın Alçakgönüllü Ozanı',
        rubric: [
          { criterion: 'İki uygun ve özgün başlık yazma', points: 10 },
          { criterion: 'Tek başlık yazma', points: 5 },
          { criterion: 'Hatalı başlık', points: 0 }
        ],
        linesNeeded: 2
      },
      {
        id: 'g8-s6-e1-q7',
        number: 7,
        outcomeCode: 'T.8.3.25',
        title: 'Okuduklarıyla İlgili Çıkarımda Bulunma',
        points: 10,
        prompt: 'Metinden hareketle Neşet Ertaş\'ın sanat anlayışına dair öznel bir çıkarım yapınız.',
        expectedAnswer: 'Neşet Ertaş için sanat şan ve şöhret kazanmak için değil, insan gönlüne dokunmak ve derdi paylaşmak için yapılan kutsal bir görevdir.',
        rubric: [
          { criterion: 'Metne dayalı tutarlı öznel çıkarım yapma', points: 10 },
          { criterion: 'Yüzeysel çıkarım', points: 5 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 2
      },
      {
        id: 'g8-s6-e1-q8',
        number: 8,
        outcomeCode: 'T.8.3.34',
        title: 'Düşünceyi Geliştirme Yollarını Belirleme',
        points: 10,
        prompt: 'Metinde Neşet Ertaş\'ın "Gönülden gönüle bir yol vardır, görülmez." sözüne yer verilmesi hangi düşünceyi geliştirme yoludur?',
        expectedAnswer: 'Tanık gösterme (Alıntı yapma) yoludur.',
        rubric: [
          { criterion: 'Tanık gösterme olduğunu doğru yazma', points: 10 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 2
      },
      {
        id: 'g8-s6-e1-q9',
        number: 9,
        outcomeCode: 'T.8.4.1',
        title: 'Şiir Yazma',
        points: 10,
        prompt: 'Bağlama, bozkır ve türkü temalı dört dizelik özgün bir dörtlük yazınız.',
        expectedAnswer: 'Örnek Şiir:\nBozkırın bağrında inler tezenen,\nGönülden gönüle bir yol çizen sen.\nTürküler susmasın bu topraklarda,\nÖlümsüz sesinle dertleri yenen sen.',
        rubric: [
          { criterion: 'Temaya uygun 4 dizelik şiir yazma', points: 10 },
          { criterion: 'Kısmen uygun şiir', points: 5 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 4
      },
      {
        id: 'g8-s6-e1-q10',
        number: 10,
        outcomeCode: 'T.8.4.18',
        title: 'Cümlenin Ögelerini Ayırt Etme',
        points: 10,
        prompt: `Aşağıdaki cümlenin ögelerini ayırınız:
"Büyük halk ozanı, türkülerinde Anadolu insanının sevinç ve kederlerini dile getirdi."

• Yüklem: .......................................
• Özne: .......................................
• Yer Tamlayıcısı: .......................................
• Belirtili Nesne: .......................................`,
        expectedAnswer: '• Yüklem: dile getirdi\n• Özne: Büyük halk ozanı\n• Yer Tamlayıcısı: türkülerinde\n• Belirtili Nesne: Anadolu insanının sevinç ve kederlerini',
        rubric: [
          { criterion: '4 ögeyi de doğru ayırma', points: 10 },
          { criterion: '3 ögeyi doğru ayırma', points: 7 },
          { criterion: '2 ögeyi doğru ayırma', points: 5 },
          { criterion: '1 ögeyi doğru ayırma', points: 2 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 4
      }
    ]
  },

  // Senaryo 6 - Sınav 2
  {
    id: 'g8-s6-e2',
    gradeLevel: 8,
    scenarioGroup: 'senaryo-6',
    scenarioGroupTitle: 'MEB Senaryo 6',
    scenarioName: '2. Sınav (Aşık Veysel’in Gönül Gözü)',
    examNumber: 2,
    title: 'Aşık Veysel’in Gönül Gözü',
    theme: '6. Tema: Millî Kültür & Halk Edebiyatı',
    targetClass: '8. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Aşık Veysel’in Gönül Gözü',
      author: 'Türkçe Ülküsü Yayınları (Özgün Sanatçı Biyografisi)',
      source: '8. Sınıf Türkçe Dersi - Ozanlarımız',
      content: `Çocuk yaşta geçirdiği çiçek hastalığı sebebiyle dünya gözünü kaybeden Âşık Veysel, karanlık dünyasını sazının tınılarıyla ve gönül gözünün nuruyla aydınlatmıştır. Sivas’ın Sivrialan köyünden yükselen bu bilge ses; toprağı, dostluğu, birlik ve beraberliği sazıyla mühürlemiştir. "Benim sadık yârim kara topraktır." diyerek insanın kibrini sıfırlayan ve toprağın cömertliğini anlatan o eşsiz felsefe, dünya durdukça yankılanacaktır.

Veysel, insanları renklerine, mezheplerine veya kökenlerine göre asla ayırmamış; "Beni hor görme kardeşim, sen altınsın da ben tunç muyum?" diyerek eşitlik ve insan sevgisini en yalın Türkçeyle savunmuştur. Gözleri görmeyen bu ulu çınar, gören gözlerin bile fark edemediği evrensel hakikatleri apaçık görmüş ve göstermiştir.`
    },
    questions: [
      {
        id: 'g8-s6-e2-q1',
        number: 1,
        outcomeCode: 'T.8.3.7',
        title: 'Söz Sanatlarını Tespit Etme',
        points: 10,
        prompt: 'Metinde geçen "kara toprağın sadık bir yâre benzetilmesi" ve "altın-tunç karşılaştırması" hangi söz sanatlarına örnektir?',
        expectedAnswer: 'Toprağın yâre benzetilmesi: Teşhis (Kişileştirme) ve Teşbih (Benzetme).\nAltın ile tunç sözcükleri: Tezat (Karşıtlık) veya İstifham (Soru yoluyla karşılaştırma).',
        rubric: [
          { criterion: 'İki söz sanatını da doğru tespit etme', points: 10 },
          { criterion: 'Birini doğru tespit etme', points: 5 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g8-s6-e2-q2',
        number: 2,
        outcomeCode: 'T.8.3.11',
        title: 'Metindeki Anlatım Biçimlerini Belirleme',
        points: 10,
        prompt: 'Metnin genelinde kullanılan anlatım biçimi nedir?',
        expectedAnswer: 'Açıklayıcı anlatım biçimi kullanılmıştır.',
        rubric: [
          { criterion: 'Açıklayıcı anlatımı doğru belirtme', points: 10 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 2
      },
      {
        id: 'g8-s6-e2-q3',
        number: 3,
        outcomeCode: 'T.8.3.14',
        title: 'Metinle İlgili Soruları Cevaplama',
        points: 10,
        prompt: 'Âşık Veysel "sadık yârim" olarak kimi görmüştür ve nedenini metne göre açıklayınız.',
        expectedAnswer: 'Kara toprağı sadık yâr olarak görmüştür; çünkü insan ne ekerse cömertçe karşılık veren, vefalı ve insanın kibrini unutturan varlık topraktır.',
        rubric: [
          { criterion: 'Toprağı ve cömertlik/vefa nedenini tam açıklama', points: 10 },
          { criterion: 'Kısmi açıklama', points: 5 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g8-s6-e2-q4',
        number: 4,
        outcomeCode: 'T.8.3.15',
        title: 'Metinle İlgili Sorular Sorma',
        points: 10,
        prompt: 'Metnin ana teması olan "insan sevgisi ve eşitlik" üzerine bir soru yazınız.',
        expectedAnswer: 'Âşık Veysel "Beni hor görme kardeşim..." dizesiyle toplumdaki hangi yanlış tutuma karşı çıkmış ve neyi savunmuştur?',
        rubric: [
          { criterion: 'Nitelikli soru yazma', points: 10 },
          { criterion: 'Yüzeysel soru', points: 5 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 2
      },
      {
        id: 'g8-s6-e2-q5',
        number: 5,
        outcomeCode: 'T.8.3.17',
        title: 'Metnin Derin Anlamı (Metnin Ana Fikri / İletisi)',
        points: 10,
        prompt: 'Okuduğunuz metnin derin anlamını (ana fikrini / verilmek istenen mesajı) tek bir cümleyle yazınız.',
        expectedAnswer: 'Fiziksel engeller gönül gözünün görmesine engel olamaz; sevgi, hoşgörü ve doğaya bağlılık insanı evrensel bir bilgeliğe ulaştırır.',
        rubric: [
          { criterion: 'Ana fikri (derin anlamı) tam ve özlü ifade etme', points: 10 },
          { criterion: 'Kısmi ifade etme', points: 5 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 2
      },
      {
        id: 'g8-s6-e2-q6',
        number: 6,
        outcomeCode: 'T.8.3.19',
        title: 'Metne Uygun Başlık Belirleme',
        points: 10,
        prompt: 'Metne uygun alternatif iki özgün başlık yazınız.',
        expectedAnswer: '1. Gönül Gözüyle Gören Bilge\n2. Toprağın Sadık Dostu Veysel',
        rubric: [
          { criterion: 'İki uygun başlık yazma', points: 10 },
          { criterion: 'Tek başlık yazma', points: 5 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 2
      },
      {
        id: 'g8-s6-e2-q7',
        number: 7,
        outcomeCode: 'T.8.3.25',
        title: 'Okuduklarıyla İlgili Çıkarımda Bulunma',
        points: 10,
        prompt: 'Metinden hareketle "gönül gözü" kavramının insan yaşamındaki önemine dair bir çıkarım yapınız.',
        expectedAnswer: 'İnsanın hakikati kavraması sadece gözleriyle bakmasına değil, kalbiyle hissetmesine ve vicdanıyla değerlendirmesine bağlıdır.',
        rubric: [
          { criterion: 'Tutarlı ve derinlikli çıkarım yapma', points: 10 },
          { criterion: 'Yüzeysel çıkarım', points: 5 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 2
      },
      {
        id: 'g8-s6-e2-q8',
        number: 8,
        outcomeCode: 'T.8.3.34',
        title: 'Düşünceyi Geliştirme Yollarını Belirleme',
        points: 10,
        prompt: 'Metinde Âşık Veysel\'in şiirlerinden dizelerin doğrudan aktarılması hangi düşünceyi geliştirme yoludur?',
        expectedAnswer: 'Tanık gösterme (Alıntı yapma) yoludur.',
        rubric: [
          { criterion: 'Tanık gösterme olduğunu doğru yazma', points: 10 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 2
      },
      {
        id: 'g8-s6-e2-q9',
        number: 9,
        outcomeCode: 'T.8.4.1',
        title: 'Şiir Yazma',
        points: 10,
        prompt: 'Toprak ve insan sevgisi temalı dört dizelik özgün bir dörtlük yazınız.',
        expectedAnswer: 'Örnek Şiir:\nToprak ana sarar bizi bağrına,\nKulak ver sen ozanların çağrına.\nKibir kırma, gönül incitme sakın,\nSevgi düşer berekete, yarına.',
        rubric: [
          { criterion: 'Temaya uygun 4 dizelik şiir yazma', points: 10 },
          { criterion: 'Kısmen uygun şiir', points: 5 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 4
      },
      {
        id: 'g8-s6-e2-q10',
        number: 10,
        outcomeCode: 'T.8.4.18',
        title: 'Cümlenin Ögelerini Ayırt Etme',
        points: 10,
        prompt: `Aşağıdaki cümlenin ögelerini ayırınız:
"Âşık Veysel, karanlık dünyasını sazının tınılarıyla aydınlatmıştır."

• Yüklem: .......................................
• Özne: .......................................
• Belirtili Nesne: .......................................
• Zarf Tamlayıcısı: .......................................`,
        expectedAnswer: '• Yüklem: aydınlatmıştır\n• Özne: Âşık Veysel\n• Belirtili Nesne: karanlık dünyasını\n• Zarf Tamlayıcısı: sazının tınılarıyla',
        rubric: [
          { criterion: '4 ögeyi de doğru ayırma', points: 10 },
          { criterion: '3 ögeyi doğru ayırma', points: 7 },
          { criterion: '2 ögeyi doğru ayırma', points: 5 },
          { criterion: '1 ögeyi doğru ayırma', points: 2 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 4
      }
    ]
  },

  // ==================== SENARYO 7 ====================
  // Senaryo 7 - Sınav 1
  {
    id: 'g8-s7-e1',
    gradeLevel: 8,
    scenarioGroup: 'senaryo-7',
    scenarioGroupTitle: 'MEB Senaryo 7',
    scenarioName: '1. Sınav (Göbeklitepe ve Zamanın Sıfır Noktası)',
    examNumber: 1,
    title: 'Göbeklitepe ve Zamanın Sıfır Noktası',
    theme: '7. Tema: Tarih Öncesi & Arkeolojik Keşifler',
    targetClass: '8. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Göbeklitepe ve Zamanın Sıfır Noktası',
      author: 'Türkçe Ülküsü Yayınları (Özgün Bilimsel Metin)',
      source: '8. Sınıf Türkçe Dersi - Arkeoloji ve Anadolu',
      content: `Şanlıurfa yakınlarındaki Göbeklitepe, günümüzden yaklaşık 12.000 yıl öncesine uzanan tarihiyle insanlık tarihinin bilinen tüm ezberlerini bozmuştur. Arkeologlar burada devasa "T" biçimli kireçtaşı sütunları ve bu sütunların üzerine ustalıkla işlenmiş hayvan kabartmalarını gün ışığına çıkardılar. Bu keşiften önce bilim insanları, avcı-toplayıcı insanların tapınak yapacak örgütlenme ve mimari beceriye sahip olamayacağını düşünüyorlardı.

Göbeklitepe, insanın yalnızca karnını doyurmak için değil, manevi inançlarını ve sanatsal estetiğini ifade etmek için de bir araya geldiğini kanıtladı. Tonlarca ağırlıktaki yekpare taşların kilometrelerce öteden nasıl taşındığı ve hangi teknikle dikildiği hâlâ araştırmacıları hayrete düşürmektedir. Burası, tarihin sıfır noktası olarak tüm dünyanın gözünü Anadolu topraklarına çevirmiştir.`
    },
    questions: [
      {
        id: 'g8-s7-e1-q1',
        number: 1,
        outcomeCode: 'T.8.3.9',
        title: 'Fiilimsilerin İşlevlerini Kavrama',
        points: 15,
        prompt: `Metinde geçen aşağıdaki fiilimsilerin türlerini (isim-fiil, sıfat-fiil, zarf-fiil) yazınız:
• "uzanan" -> .......................................
• "doyurmak" -> .......................................
• "çevirmiştir" bir fiilimsi midir? Açıklayınız.`,
        expectedAnswer: '• uzanan: Sıfat-fiil (Ortaç)\n• doyurmak: İsim-fiil (Mastar)\n• çevirmiştir fiilimsi değildir; duyulan geçmiş zaman ve bildirme eki almış çekimli bir fiildir.',
        rubric: [
          { criterion: '3 bölümü de doğru açıklama', points: 15 },
          { criterion: '2 bölümü doğru açıklama', points: 10 },
          { criterion: '1 bölümü doğru açıklama', points: 5 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 4
      },
      {
        id: 'g8-s7-e1-q2',
        number: 2,
        outcomeCode: 'T.8.3.14',
        title: 'Metinle İlgili Soruları Cevaplama',
        points: 15,
        prompt: 'Göbeklitepe keşfedilmeden önce bilim insanlarının avcı-toplayıcı insanlar hakkındaki ortak düşüncesi neydi?',
        expectedAnswer: 'Avcı-toplayıcı insanların tapınak veya anıtsal yapılar yapabilecek toplumsal örgütlenme ve mimari beceriye sahip olamayacağını düşünüyorlardı.',
        rubric: [
          { criterion: 'Bilim insanlarının eski görüşünü metne dayalı eksiksiz yazma', points: 15 },
          { criterion: 'Kısmi yazma', points: 8 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g8-s7-e1-q3',
        number: 3,
        outcomeCode: 'T.8.3.16',
        title: 'Metnin Yüzey Anlamı (Metnin Konusu)',
        points: 15,
        prompt: 'Okuduğunuz metnin konusunu (yüzey anlamını) bir cümleyle yazınız.',
        expectedAnswer: 'Göbeklitepe arkeolojik keşfi ve bu keşfin insanlık tarihi ile avcı-toplayıcı toplumlar hakkındaki ezberleri değiştirmesi.',
        rubric: [
          { criterion: 'Metnin konusunu (yüzey anlamını) eksiksiz yazma', points: 15 },
          { criterion: 'Kısmi yazma', points: 8 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 2
      },
      {
        id: 'g8-s7-e1-q4',
        number: 4,
        outcomeCode: 'T.8.3.25',
        title: 'Okuduklarıyla İlgili Çıkarımda Bulunma',
        points: 15,
        prompt: 'Metindeki "Göbeklitepe, insanın yalnızca karnını doyurmak için değil, manevi inançlarını ve sanatsal estetiğini ifade etmek için de bir araya geldiğini kanıtladı." cümlesinden hareketle insan doğasına dair nasıl bir çıkarım yapılabilir?',
        expectedAnswer: 'İnsanoğlu var oluşundan itibaren yalnızca fiziksel beslenme ihtiyacıyla sınırlı kalmamış; sanatsal, inançsal ve manevi değerler üretmeyi de hayatının merkezine koymuştur.',
        rubric: [
          { criterion: 'Derinlikli ve tutarlı çıkarım yapma', points: 15 },
          { criterion: 'Kısmi çıkarım', points: 8 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g8-s7-e1-q5',
        number: 5,
        outcomeCode: 'T.8.4.4',
        title: 'Yazma Stratejilerini Uygulama',
        points: 15,
        prompt: 'Bir arkeolog olduğunuzu hayal ederek Göbeklitepe’deki ilk "T" sütununu topraktan çıkardığınız anı anlatan serbest yazma stratejisine uygun 4-5 cümlelik bir anı metni yazınız.',
        expectedAnswer: 'Güneşin kavurduğu tepede fırçamı son bir kez taşın üzerine vurduğumda kabartmadaki tilki figürü apaçık belirdi. On iki bin yıl önce bir insanın elleriyle işlediği bu taşa dokunurken heyecandan nefesim kesildi. Binlerce yıllık karanlığın ardından gün ışığına kavuşan bu dev sütun, tarihin akışını değiştireceğimizin ilk müjdesiydi. Ekip arkadaşlarımla göz göze geldiğimizde tarihin sıfır noktasına ayak bastığımızı biliyorduk.',
        rubric: [
          { criterion: 'Arkeolog rolüyle 4-5 cümlelik heyecan verici ve tutarlı anı oluşturma', points: 15 },
          { criterion: 'Kısmen başarılı anlatım', points: 8 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 5
      },
      {
        id: 'g8-s7-e1-q6',
        number: 6,
        outcomeCode: 'T.8.4.9',
        title: 'Yazılarında Anlatım Biçimlerini Kullanma',
        points: 10,
        prompt: 'Göbeklitepe’deki T biçimli taş sütunları açıklayıcı anlatım biçimiyle anlatan 3-4 cümlelik kısa bir metin yazınız.',
        expectedAnswer: 'Göbeklitepe’de bulunan T biçimli sütunlar yekpare kireçtaşından oyulmuş olup yükseklikleri altı metreyi bulmaktadır. Sütunların gövdesinde leopar, yaban domuzu, turna ve yılan gibi hayvan figürleri kabartma tekniğiyle işlenmiştir. Bu anıtsal dikilitaşlar o dönem insanının gelişmiş estetik anlayışını ve simgesel inanç dünyasını gözler önüne sermektedir.',
        rubric: [
          { criterion: 'Açıklayıcı anlatıma uygun 3-4 cümlelik nesnel metin yazma', points: 10 },
          { criterion: 'Kısmen uygun metin', points: 5 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 4
      },
      {
        id: 'g8-s7-e1-q7',
        number: 7,
        outcomeCode: 'T.8.4.18',
        title: 'Cümlenin Ögelerini Ayırt Etme',
        points: 15,
        prompt: `Aşağıdaki cümlenin ögelerini ayırınız:
"Arkeologlar, Şanlıurfa yakınlarında devasa taş sütunları büyük bir dikkatle gün ışığına çıkardılar."

• Yüklem: .......................................
• Özne: .......................................
• Yer Tamlayıcısı: .......................................
• Belirtili Nesne: .......................................
• Zarf Tamlayıcısı: .......................................`,
        expectedAnswer: '• Yüklem: gün ışığına çıkardılar\n• Özne: Arkeologlar\n• Yer Tamlayıcısı: Şanlıurfa yakınlarında\n• Belirtili Nesne: devasa taş sütunları\n• Zarf Tamlayıcısı: büyük bir dikkatle',
        rubric: [
          { criterion: '5 ögeyi de eksiksiz ve doğru ayırma', points: 15 },
          { criterion: '4 ögeyi doğru ayırma', points: 11 },
          { criterion: '3 ögeyi doğru ayırma', points: 7 },
          { criterion: '2 ögeyi doğru ayırma', points: 4 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 5
      }
    ]
  },

  // Senaryo 7 - Sınav 2
  {
    id: 'g8-s7-e2',
    gradeLevel: 8,
    scenarioGroup: 'senaryo-7',
    scenarioGroupTitle: 'MEB Senaryo 7',
    scenarioName: '2. Sınav (Çatalhöyük: İlk Şehrin Gizemi)',
    examNumber: 2,
    title: 'Çatalhöyük: İlk Şehrin Gizemi',
    theme: '7. Tema: Anadolu Uygarlıkları & Yerleşik Yaşam',
    targetClass: '8. Sınıf',
    termInfo: '1. Dönem 1. Yazılı Sınavı',
    durationMinutes: 40,
    totalPoints: 100,
    readingPassage: {
      title: 'Çatalhöyük: İlk Şehrin Gizemi',
      author: 'Türkçe Ülküsü Yayınları (Özgün Bilimsel Metin)',
      source: '8. Sınıf Türkçe Dersi - Arkeolojik Mirasımız',
      content: `Konya Ovası’nın ortasında yükselen Çatalhöyük, insanlığın avcılıktan yerleşik tarım toplumuna ve ilk şehir düzenine geçişinin en çarpıcı tanığıdır. Yaklaşık 9000 yıl önce kurulan bu antik yerleşimde sokak bulunmuyordu. Birbirine bitişik kerpiç evlere kapı yerine çatılardan açılan merdivenli deliklerle girilirdi. İnsanlar evlerin düz damlarında dolaşır, komşuluk ilişkilerini bu çatılarda sürdürürlerdi.

Çatalhöyük sakinleri evlerinin duvarlarını av sahneleri, boğa başları ve geometrik desenlerle süslemişlerdi. Bu duvar resimleri, tarımla uğraşan insanların bile avcı geçmişlerine duydukları saygıyı yansıtır. Kapısız ve sokaksız bu şehir, insanların ortak barış ve dayanışma içinde bin yılı aşkın bir süre savaşsız nasıl yaşadığının eşsiz bir örneğidir.`
    },
    questions: [
      {
        id: 'g8-s7-e2-q1',
        number: 1,
        outcomeCode: 'T.8.3.9',
        title: 'Fiilimsilerin İşlevlerini Kavrama',
        points: 15,
        prompt: `Metinde geçen aşağıdaki fiilimsilerin türlerini yazınız:
• "yükselen" -> .......................................
• "geçişinin" -> .......................................
• "açılan" -> .......................................`,
        expectedAnswer: '• yükselen: Sıfat-fiil\n• geçişinin: İsim-fiil (Mastar eki -iş)\n• açılan: Sıfat-fiil',
        rubric: [
          { criterion: '3 fiilimsi türünü de doğru belirtme', points: 15 },
          { criterion: '2 fiilimsiyi doğru belirtme', points: 10 },
          { criterion: '1 fiilimsiyi doğru belirtme', points: 5 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 4
      },
      {
        id: 'g8-s7-e2-q2',
        number: 2,
        outcomeCode: 'T.8.3.14',
        title: 'Metinle İlgili Soruları Cevaplama',
        points: 15,
        prompt: 'Çatalhöyük evlerine nasıl giriliyordu ve komşuluk ilişkileri nerede sürdürülüyordu?',
        expectedAnswer: 'Evlere sokak veya kapı bulunmadığı için çatılardan açılan merdivenli deliklerle giriliyordu. Komşuluk ilişkileri ve gündelik hayat evlerin düz damlarında sürdürülüyordu.',
        rubric: [
          { criterion: 'Çatı girişi ve damdaki komşuluk ilişkisini tam yazma', points: 15 },
          { criterion: 'Kısmi yazma', points: 8 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g8-s7-e2-q3',
        number: 3,
        outcomeCode: 'T.8.3.16',
        title: 'Metnin Yüzey Anlamı (Metnin Konusu)',
        points: 15,
        prompt: 'Okuduğunuz metnin konusunu (yüzey anlamını) bir cümleyle yazınız.',
        expectedAnswer: 'Çatalhöyük antik kentinin sokaksız mimari yapısı ve insanlık tarihindeki ilk yerleşik şehir hayatının özellikleri.',
        rubric: [
          { criterion: 'Metnin konusunu (yüzey anlamını) tam yazma', points: 15 },
          { criterion: 'Kısmi yazma', points: 8 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 2
      },
      {
        id: 'g8-s7-e2-q4',
        number: 4,
        outcomeCode: 'T.8.3.25',
        title: 'Okuduklarıyla İlgili Çıkarımda Bulunma',
        points: 15,
        prompt: 'Çatalhöyük’te sokak ve dış kapı bulunmaması, evlerin çatılardan açılan deliklerle birbirine bitişik yapılması güvenlik ve barış açısından neyi kanıtlar?',
        expectedAnswer: 'Bitişik nizam ve çatılardan giriş, dışarıdan gelebilecek vahşi hayvan veya düşman saldırılarına karşı doğal bir kale görevi görmüş; içeride ise halkın barış ve güven içinde yaşadığını kanıtlamıştır.',
        rubric: [
          { criterion: 'Güvenlik ve barış çıkarımını eksiksiz açıklama', points: 15 },
          { criterion: 'Kısmi açıklama', points: 8 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 3
      },
      {
        id: 'g8-s7-e2-q5',
        number: 5,
        outcomeCode: 'T.8.4.4',
        title: 'Yazma Stratejilerini Uygulama',
        points: 15,
        prompt: 'Çatalhöyük’te damda oturan bir çocuğun gözünden anlatılan 4-5 cümlelik bir kurgu metin yazınız.',
        expectedAnswer: 'Güneş Konya Ovası’nın ardında batarken damımızın üzerine serilen hasırın üstünde oturuyordum. Yan komşumuz Ayşe Teyze fırından yeni çıkardığı ekmeği çatının üzerinden anneme uzattı. Damların üzerinden birbirine seslenen insanların neşeli sesleri alacakaranlığa karışıyordu. Merdivenden aşağıya, evimizin serin odasına inerken bu çatılarda büyümenin ne büyük bir güven olduğunu bir kez daha hissettim.',
        rubric: [
          { criterion: 'Çocuk kahraman bakış açısıyla 4-5 cümlelik kurgusal metin yazma', points: 15 },
          { criterion: 'Kısmen uygun metin', points: 8 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 5
      },
      {
        id: 'g8-s7-e2-q6',
        number: 6,
        outcomeCode: 'T.8.4.9',
        title: 'Yazılarında Anlatım Biçimlerini Kullanma',
        points: 10,
        prompt: 'Çatalhöyük evlerinin iç yapısını açıklayıcı anlatım biçimiyle (3-4 cümle) anlatınız.',
        expectedAnswer: 'Çatalhöyük evleri dikdörtgen planlı olup güneşte kurutulmuş kerpiç tuğlalardan inşa edilmiştir. Evlerin içinde oturma ve uyuma için yükseltilmiş sekiler, ocak ve depolama alanları bulunmaktadır. Duvarlar beyaz kille sıvanmış ve üzerlerine kırmızı aşı boyasıyla av sahneleri resmedilmiştir.',
        rubric: [
          { criterion: 'Açıklayıcı anlatıma uygun 3-4 cümlelik nesnel metin yazma', points: 10 },
          { criterion: 'Kısmen uygun metin', points: 5 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 4
      },
      {
        id: 'g8-s7-e2-q7',
        number: 7,
        outcomeCode: 'T.8.4.18',
        title: 'Cümlenin Ögelerini Ayırt Etme',
        points: 15,
        prompt: `Aşağıdaki cümlenin ögelerini ayırınız:
"Antik kentin sakinleri, kerpiç evlerin duvarlarını av sahneleriyle süslemişlerdi."

• Yüklem: .......................................
• Özne: .......................................
• Belirtili Nesne: .......................................
• Zarf Tamlayıcısı: .......................................`,
        expectedAnswer: '• Yüklem: süslemişlerdi\n• Özne: Antik kentin sakinleri\n• Belirtili Nesne: kerpiç evlerin duvarlarını\n• Zarf Tamlayıcısı: av sahneleriyle (veya Vasıta tamlayıcısı/Zarf tamlayıcısı)',
        rubric: [
          { criterion: '4 ögeyi de doğru ayırma', points: 15 },
          { criterion: '3 ögeyi doğru ayırma', points: 11 },
          { criterion: '2 ögeyi doğru ayırma', points: 7 },
          { criterion: '1 ögeyi doğru ayırma', points: 3 },
          { criterion: 'Hatalı', points: 0 }
        ],
        linesNeeded: 4
      }
    ]
  }
];
