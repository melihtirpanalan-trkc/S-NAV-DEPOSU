import { LearningOutcome } from '../types/exam';

export const OFFICIAL_OUTCOMES_BY_CODE: Record<string, string> = {
  // 5. Sınıf
  'T.O.5.5': 'Metinde geçen anlamını bilmediği söz varlığı unsurlarının anlamını tahmin edebilme',
  'T.O.5.6': 'Metnin yüzey anlamını belirleyebilme',
  'T.O.5.7': 'Görselle iletilen anlamı belirleyebilme',
  'T.O.5.15': 'Metnin anahtar kelimelerini belirlemeye yönelik çözümleme yapabilme',
  'T.O.5.20': 'Metinden hareketle söz varlığını geliştirmeye yönelik çözümleme yapabilme',
  'T.Y.5.3': 'Yazısında içerik ve yapıya yönelik seçimlerini yönetebilme',
  'T.Y.5.13': 'Yazısını zenginleştirecek biçimde söz varlığını kullanabilme',
  'T.Y.5.16': 'Yazım ve noktalama işaretleriyle ilgili kuralları uygulayabilme',

  // 6. Sınıf
  'T.O.6.5': 'Metinde geçen anlamını bilmediği söz varlığı unsurlarının anlamını tahmin edebilme',
  'T.O.6.6': 'Metnin yüzey anlamını belirleyebilme',
  'T.O.6.16': 'Bilgilendirici metinde anahtar kelimeleri belirlemeye yönelik çözümleme yapabilme',
  'T.O.6.21': 'Metinden hareketle söz varlığını geliştirmeye yönelik çözümleme yapabilme',
  'T.Y.6.3': 'Yazısında içerik ve yapıya yönelik seçimlerini yönetebilme',
  'T.Y.6.18': 'Yazısını zenginleştirecek biçimde söz varlığını kullanabilme',
  'T.Y.6.21': 'Yazım kuralları ve noktalama işaretlerini uygulayabilme',

  // 7. Sınıf
  'T.O.7.4': 'Metinde geçen anlamını bilmediği söz varlığı unsurlarının anlamını tahmin edebilme',
  'T.O.7.5': 'Metnin yüzey anlamını belirleyebilme',
  'T.O.7.7': 'Metnin derin anlamını belirlemeye yönelik basit çıkarımlar yapabilme',
  'T.O.7.8': 'Metnin derin anlamını belirlemeye yönelik üst düzey çıkarımlar yapabilme',
  'T.O.7.14': 'Bilgilendirici metinlerde metin yapılarından hareketle önemli bilgileri belirlemeye yönelik çözümleme yapabilme',
  'T.O.7.15': 'Bilgilendirici metinde anahtar kelimeleri belirlemeye yönelik çözümleme yapabilme',
  'T.O.7.21': 'Metinden hareketle söz varlığını geliştirmeye yönelik çözümleme yapabilme',
  'T.Y.7.3': 'Yazısında içerik ve yapıya yönelik seçimlerini yönetebilme',
  'T.Y.7.18': 'Yazısını zenginleştirecek biçimde söz varlığını kullanabilme',
  'T.Y.7.21': 'Yazım kuralları ve noktalama işaretlerini uygulayabilme',

  // 8. Sınıf
  'T.8.3.5': 'Bağlamdan yararlanarak bilmediği kelime ve kelime gruplarının anlamını tahmin eder.',
  'T.8.3.7': 'Metindeki söz sanatlarını tespit eder.',
  'T.8.3.9': 'Fiilimsilerin cümledeki işlevlerini kavrar.',
  'T.8.3.11': 'Metindeki anlatım biçimlerini belirler.',
  'T.8.3.14': 'Metinle ilgili soruları cevaplar.',
  'T.8.3.15': 'Metinle ilgili sorular sorar.',
  'T.8.3.16': 'Metnin konusunu belirler.',
  'T.8.3.17': 'Metnin ana fikrini/ana duygusunu belirler.',
  'T.8.3.19': 'Metnin içeriğine uygun başlık/başlıklar belirler.',
  'T.8.3.25': 'Okudukları ile ilgili çıkarımlarda bulunur.',
  'T.8.3.26': 'Metin türlerini ayırt eder.',
  'T.8.3.34': 'Okuduklarında kullanılan düşünceyi geliştirme yollarını belirler.',
  'T.8.4.1': 'Şiir yazar.',
  'T.8.4.4': 'Yazma stratejilerini uygular.',
  'T.8.4.9': 'Yazılarında anlatım biçimlerini kullanır.',
  'T.8.4.15': 'Yazılarında uygun geçiş ve bağlantı ifadelerini kullanır.',
  'T.8.4.18': 'Cümlenin ögelerini ayırt eder.',
};

export function getOfficialOutcomeTitle(code: string): string {
  const text = OFFICIAL_OUTCOMES_BY_CODE[code];
  return text ? `${code}. ${text}` : code;
}

export const LEARNING_OUTCOMES: LearningOutcome[] = [
  // --- 5. SINIF MAARİF MODELİ KAZANIMLARI ---
  {
    code: 'T.O.5.5',
    gradeLevel: 5,
    area: 'Okuma',
    title: 'Anlamı Bilinmeyen Söz Varlığını Tahmin Etme',
    description: 'Metinde geçen anlamını bilmediği söz varlığı unsurlarının anlamını tahmin edebilme',
    cognitiveLevel: 'Anlama',
    textbookContext: 'Metnin bağlamından ve ipuçlarından hareketle kelimelerin anlamını tahmin etme, ön bilgilerle ilişkilendirme.'
  },
  {
    code: 'T.O.5.6',
    gradeLevel: 5,
    area: 'Okuma',
    title: 'Metnin Yüzey Anlamını Belirleyebilme',
    description: 'Metnin yüzey anlamını belirleyebilme',
    cognitiveLevel: 'Anlama',
    textbookContext: 'Metnin yüzey anlamını, yani metinde ne anlatıldığını (metnin konusunu) ve doğrudan ifade edilen olay ve durumları belirleme.'
  },
  {
    code: 'T.O.5.7',
    gradeLevel: 5,
    area: 'Okuma',
    title: 'Görselle İletilen Anlamı Belirleme',
    description: 'Görselle iletilen anlamı belirleyebilme',
    cognitiveLevel: 'Anlama',
    textbookContext: 'Görsellerdeki kişilerin yüz ifadelerini, beden hareketlerini, davranışlarını ve görselin vermek istediği ana mesajı belirleme.'
  },
  {
    code: 'T.O.5.15',
    gradeLevel: 5,
    area: 'Okuma',
    title: 'Anahtar Kelimeleri Belirleme',
    description: 'Metnin anahtar kelimelerini belirlemeye yönelik çözümleme yapabilme',
    cognitiveLevel: 'Çözümleme',
    textbookContext: 'Metnin konusunu ve iletisini yansıtan anahtar kelimeleri seçebilme ve metin içeriğiyle ilişkisini açıklama.'
  },
  {
    code: 'T.O.5.20',
    gradeLevel: 5,
    area: 'Okuma',
    title: 'Söz Varlığını Geliştirme',
    description: 'Metinden hareketle söz varlığını geliştirmeye yönelik çözümleme yapabilme',
    cognitiveLevel: 'Çözümleme',
    textbookContext: 'Kavramların metindeki/oyundaki anlam ve işlevlerini açıklama, kelimeleri günlük yaşamla ilgili cümlelerde kullanma.'
  },
  {
    code: 'T.Y.5.3',
    gradeLevel: 5,
    area: 'Yazma',
    title: 'Yazıda İçerik ve Yapı Seçimi',
    description: 'Yazısında içerik ve yapıya yönelik seçimlerini yönetebilme',
    cognitiveLevel: 'Uygulama ve Üretim',
    textbookContext: 'Yazma görevine ve hedefine uygun anlatım yolunu (adım adım açıklama vb.) belirleyip gerekçelendirme.'
  },
  {
    code: 'T.Y.5.13',
    gradeLevel: 5,
    area: 'Yazma',
    title: 'Söz Varlığını Zenginleştirerek Kullanma',
    description: 'Yazısını zenginleştirecek biçimde söz varlığını kullanabilme',
    cognitiveLevel: 'Uygulama ve Üretim',
    textbookContext: 'Metindeki kavramları (iş birliği, geri dönüşüm vb.) davranışlarla ilişkilendirerek tavsiye veya betimleme paragrafı yazma.'
  },
  {
    code: 'T.Y.5.16',
    gradeLevel: 5,
    area: 'Yazma',
    title: 'Yazım ve Noktalama Kurallarını Uygulama',
    description: 'Yazım ve noktalama işaretleriyle ilgili kuralları uygulayabilme',
    cognitiveLevel: 'Uygulama ve Üretim',
    textbookContext: 'Nokta, kısa çizgi, satır sonuna sığmayan kelimelerin hece bölünmesi ve saat-dakika arasına nokta koyma kuralları.'
  },

  // --- 6. SINIF MAARİF MODELİ KAZANIMLARI ---
  {
    code: 'T.O.6.5',
    gradeLevel: 6,
    area: 'Okuma',
    title: 'Anlamı Bilinmeyen Söz Varlığını Tahmin Etme',
    description: 'Metinde geçen anlamını bilmediği söz varlığı unsurlarının anlamını tahmin edebilme',
    cognitiveLevel: 'Anlama',
    textbookContext: 'Metnin bağlamından hareketle sözcüklerin anlamını tahmin etme ve metindeki ipucu ifadeleri gerekçe gösterme.'
  },
  {
    code: 'T.O.6.6',
    gradeLevel: 6,
    area: 'Okuma',
    title: 'Metnin Yüzey Anlamını Belirleyebilme',
    description: 'Metnin yüzey anlamını belirleyebilme',
    cognitiveLevel: 'Anlama',
    textbookContext: 'Metnin yüzey anlamını, yani metinde ne anlatıldığını (metnin konusunu) ve doğrudan anlatılan temel bilgileri tespit etme.'
  },
  {
    code: 'T.O.6.16',
    gradeLevel: 6,
    area: 'Okuma',
    title: 'Bilgilendirici Metinde Anahtar Kelimeleri Belirleme',
    description: 'Bilgilendirici metinde anahtar kelimeleri belirlemeye yönelik çözümleme yapabilme',
    cognitiveLevel: 'Çözümleme',
    textbookContext: 'Metnin konusunu ve temel fikrini yansıtan anahtar kelimeleri belirleme ve metin içeriğiyle ilişkisini açıklama.'
  },
  {
    code: 'T.O.6.21',
    gradeLevel: 6,
    area: 'Okuma',
    title: 'Söz Varlığını Geliştirmeye Yönelik Çözümleme',
    description: 'Metinden hareketle söz varlığını geliştirmeye yönelik çözümleme yapabilme',
    cognitiveLevel: 'Çözümleme',
    textbookContext: 'Metindeki deyimlerin, sözcük gruplarının ve kavramların metne kattığı anlamı belirleme, sözcüğü bağlamına uygun yeni cümlede kullanma.'
  },
  {
    code: 'T.Y.6.3',
    gradeLevel: 6,
    area: 'Yazma',
    title: 'Yazıda İçerik ve Yapı Seçimi',
    description: 'Yazısında içerik ve yapıya yönelik seçimlerini yönetebilme',
    cognitiveLevel: 'Uygulama ve Üretim',
    textbookContext: 'Amaca uygun paragraf türünü (açıklama, öyküleme vb.) seçme, öneriler sunup gerekçelerini açıklayarak paragraf yazma.'
  },
  {
    code: 'T.Y.6.18',
    gradeLevel: 6,
    area: 'Yazma',
    title: 'Söz Varlığını Zenginleştirerek Kullanma',
    description: 'Yazısını zenginleştirecek biçimde söz varlığını kullanabilme',
    cognitiveLevel: 'Uygulama ve Üretim',
    textbookContext: 'Günlük yaşam kalıp sözlerini, deyimleri ve atasözlerini anlamına uygun kullanarak bilgilendirici paragraf yazma.'
  },
  {
    code: 'T.Y.6.21',
    gradeLevel: 6,
    area: 'Yazma',
    title: 'Yazım Kuralları ve Noktalama İşaretleri',
    description: 'Yazım kuralları ve noktalama işaretlerini uygulayabilme',
    cognitiveLevel: 'Uygulama ve Üretim',
    textbookContext: 'Virgülün görevleri (sıralı cümle, kabul/ret, tırnak dışı alıntı), ki/de/mi yazımı ve yay ayraç kullanımı.'
  },

  // --- 7. SINIF MAARİF MODELİ KAZANIMLARI ---
  {
    code: 'T.O.7.4',
    gradeLevel: 7,
    area: 'Okuma',
    title: 'Anlamı Bilinmeyen Söz Varlığını Tahmin Etme',
    description: 'Metinde geçen anlamını bilmediği söz varlığı unsurlarının anlamını tahmin edebilme',
    cognitiveLevel: 'Anlama',
    textbookContext: 'Metnin bağlamından hareketle kelime anlamını tahmin etme ve metin içi gerekçe gösterme becerisi.'
  },
  {
    code: 'T.O.7.5',
    gradeLevel: 7,
    area: 'Okuma',
    title: 'Metnin Yüzey Anlamını Belirleyebilme',
    description: 'Metnin yüzey anlamını belirleyebilme',
    cognitiveLevel: 'Anlama',
    textbookContext: 'Metnin yüzey anlamını, yani metnin konusunu ve doğrudan aktarılan olgusal bilgileri tespit edebilme.'
  },
  {
    code: 'T.O.7.7',
    gradeLevel: 7,
    area: 'Okuma',
    title: 'Metnin Derin Anlamını Belirlemeye Yönelik Basit Çıkarımlar Yapabilme',
    description: 'Metnin derin anlamını belirlemeye yönelik basit çıkarımlar yapabilme',
    cognitiveLevel: 'Basit Çıkarım',
    textbookContext: 'Metnin derin anlamını, yani metnin ana fikrini ve karakterlerin davranışlarının altındaki örtük iletileri sezebilme.'
  },
  {
    code: 'T.O.7.8',
    gradeLevel: 7,
    area: 'Okuma',
    title: 'Metnin Derin Anlamını Belirlemeye Yönelik Üst Düzey Çıkarımlar Yapabilme',
    description: 'Metnin derin anlamını belirlemeye yönelik üst düzey çıkarımlar yapabilme',
    cognitiveLevel: 'Üst Düzey Çıkarım',
    textbookContext: 'Metnin derin anlamını, yani metnin ana fikrini, sembolik anlatımını ve ahlaki/felsefi iletisini çok boyutlu tahlil edebilme.'
  },
  {
    code: 'T.O.7.14',
    gradeLevel: 7,
    area: 'Okuma',
    title: 'Bilgilendirici Metin Yapılarını Çözümleme',
    description: 'Bilgilendirici metinlerde metin yapılarından hareketle önemli bilgileri belirlemeye yönelik çözümleme yapabilme',
    cognitiveLevel: 'Çözümleme',
    textbookContext: 'Karşılaştırma, sebep-sonuç, problem-çözüm ve kronolojik metin yapılarından hareketle önemli bilgileri çıkarma.'
  },
  {
    code: 'T.O.7.15',
    gradeLevel: 7,
    area: 'Okuma',
    title: 'Bilgilendirici Metinde Anahtar Kelimeleri Belirleme',
    description: 'Bilgilendirici metinde anahtar kelimeleri belirlemeye yönelik çözümleme yapabilme',
    cognitiveLevel: 'Çözümleme',
    textbookContext: 'Metnin konusunu ve iletisini en doğru temsil eden kavramları seçip metin içi işlevleriyle ilişkilendirme.'
  },
  {
    code: 'T.O.7.21',
    gradeLevel: 7,
    area: 'Okuma',
    title: 'Söz Varlığını Geliştirmeye Yönelik Çözümleme',
    description: 'Metinden hareketle söz varlığını geliştirmeye yönelik çözümleme yapabilme',
    cognitiveLevel: 'Çözümleme',
    textbookContext: 'Deyimler, kavram ağları, söz sanatları ve fiil anlam özellikleri (iş, oluş, durum).'
  },
  {
    code: 'T.Y.7.3',
    gradeLevel: 7,
    area: 'Yazma',
    title: 'Yazıda İçerik ve Yapı Seçimi',
    description: 'Yazısında içerik ve yapıya yönelik seçimlerini yönetebilme',
    cognitiveLevel: 'Uygulama ve Üretim',
    textbookContext: 'Yazma görevine ve hedefine uygun anlatım yolunu (adım adım açıklama vb.) belirleyip gerekçelendirme.'
  },
  {
    code: 'T.Y.7.18',
    gradeLevel: 7,
    area: 'Yazma',
    title: 'Söz Varlığını Zenginleştirerek Kullanma',
    description: 'Yazısını zenginleştirecek biçimde söz varlığını kullanabilme',
    cognitiveLevel: 'Uygulama ve Üretim',
    textbookContext: 'İkilemelerin yazımı, birleşik sözcükler, büyük harflerin kullanımı ve ek olan -de/-ki yazımı.'
  },
  {
    code: 'T.Y.7.21',
    gradeLevel: 7,
    area: 'Yazma',
    title: 'Yazım Kuralları ve Noktalama İşaretleri',
    description: 'Yazım kuralları ve noktalama işaretlerini uygulayabilme',
    cognitiveLevel: 'Uygulama ve Üretim',
    textbookContext: 'Noktalama işaretlerini (üç nokta, noktalı virgül, virgül, iki nokta) ve yazım kurallarını cümle içindeki kurallara göre uygulama.'
  },

  // --- 8. SINIF MEB MÜFREDATI KAZANIMLARI ---
  {
    code: 'T.8.3.5',
    gradeLevel: 8,
    area: 'Okuma',
    title: 'Kelime ve Kelime Gruplarının Anlamını Tahmin Etme',
    description: 'Bağlamdan yararlanarak bilmediği kelime ve kelime gruplarının anlamını tahmin eder.',
    cognitiveLevel: 'Anlama',
    textbookContext: 'Metnin bağlamından hareketle bilinmeyen sözcüklerin anlamını çıkarma ve anlam eşleştirmesi yapma.'
  },
  {
    code: 'T.8.3.7',
    gradeLevel: 8,
    area: 'Okuma',
    title: 'Söz Sanatlarını Tespit Etme',
    description: 'Metindeki söz sanatlarını tespit eder (Tezat, Benzetme, Kişileştirme, Abartma).',
    cognitiveLevel: 'Anlama',
    textbookContext: 'Şiir veya nesirde kullanılan edebi sanatları metinden delil göstererek gerekçesiyle tespit etme.'
  },
  {
    code: 'T.8.3.9',
    gradeLevel: 8,
    area: 'Okuma',
    title: 'Fiilimsilerin İşlevlerini Kavrama',
    description: 'Fiilimsilerin cümledeki işlevlerini kavrar (İsim-fiil, Sıfat-fiil, Zarf-fiil).',
    cognitiveLevel: 'Çözümleme',
    textbookContext: 'Metindeki isim-fiil, sıfat-fiil ve zarf-fiilleri bularak cümledeki işlevlerini açıklama.'
  },
  {
    code: 'T.8.3.11',
    gradeLevel: 8,
    area: 'Okuma',
    title: 'Anlatım Biçimlerini Belirleme',
    description: 'Metindeki anlatım biçimlerini belirler (Açıklayıcı, Tartışmacı, Betimleyici, Öyküleyici).',
    cognitiveLevel: 'Çözümleme',
    textbookContext: 'Metin parçalarında kullanılan anlatım tekniklerini ve amaçlarını tespit etme.'
  },
  {
    code: 'T.8.3.14',
    gradeLevel: 8,
    area: 'Okuma',
    title: 'Metinle İlgili Soruları Cevaplama',
    description: 'Metinle ilgili soruları cevaplar.',
    cognitiveLevel: 'Anlama',
    textbookContext: 'Okuduğu metinden hareketle yöneltilen doğrudan ve çıkarıma dayalı soruları tam cümlelerle yanıtlama.'
  },
  {
    code: 'T.8.3.15',
    gradeLevel: 8,
    area: 'Okuma',
    title: 'Metinle İlgili Sorular Sorma',
    description: 'Metinle ilgili sorular sorar.',
    cognitiveLevel: 'Uygulama ve Üretim',
    textbookContext: 'Metnin içeriğini derinlemesine sorgulayan, anlamaya ve analize yönelik nitelikli sorular oluşturma.'
  },
  {
    code: 'T.8.3.16',
    gradeLevel: 8,
    area: 'Okuma',
    title: 'Metnin Konusunu Belirler',
    description: 'Metnin konusunu belirler.',
    cognitiveLevel: 'Anlama',
    textbookContext: 'Metnin yüzey anlamını, üzerinde durulan kavramı ve konusunu net şekilde ifade etme.'
  },
  {
    code: 'T.8.3.17',
    gradeLevel: 8,
    area: 'Okuma',
    title: 'Metnin Ana Fikrini/Ana Duygusunu Belirler',
    description: 'Metnin ana fikrini/ana duygusunu belirler.',
    cognitiveLevel: 'Basit Çıkarım',
    textbookContext: 'Metnin derin anlamını, yazarın okuyucuya iletmek istediği asıl mesajı (ana fikri) saptama.'
  },
  {
    code: 'T.8.3.19',
    gradeLevel: 8,
    area: 'Okuma',
    title: 'Metne Uygun Başlık Belirleme',
    description: 'Metnin içeriğine uygun başlık/başlıklar belirler.',
    cognitiveLevel: 'Uygulama ve Üretim',
    textbookContext: 'Metnin konusu ve ana fikriyle tam örtüşen özlü ve dikkat çekici başlıklar üretme.'
  },
  {
    code: 'T.8.3.25',
    gradeLevel: 8,
    area: 'Okuma',
    title: 'Okuduklarıyla İlgili Çıkarımlarda Bulunma',
    description: 'Okudukları ile ilgili çıkarımlarda bulunur (Öznel-Nesnel, Neden-Sonuç, Amaç-Sonuç, Karşılaştırma).',
    cognitiveLevel: 'Basit Çıkarım',
    textbookContext: 'Cümleler arasındaki mantıksal ve anlamsal ilişkileri tespit edip sınıflandırma.'
  },
  {
    code: 'T.8.3.26',
    gradeLevel: 8,
    area: 'Okuma',
    title: 'Metin Türlerini Ayırt Etme',
    description: 'Metin türlerini ayırt eder (Makale, Deneme, Fıkra, Söyleşi vb.).',
    cognitiveLevel: 'Çözümleme',
    textbookContext: 'Metinlerin üslup, amaç ve içerik özelliklerine bakarak türünü kanıtlarıyla belirleme.'
  },
  {
    code: 'T.8.3.34',
    gradeLevel: 8,
    area: 'Okuma',
    title: 'Düşünceyi Geliştirme Yollarını Belirleme',
    description: 'Okuduklarında kullanılan düşünceyi geliştirme yollarını belirler.',
    cognitiveLevel: 'Çözümleme',
    textbookContext: 'Tanımlama, tanık gösterme, karşılaştırma ve örneklendirme yollarını metinden örneklerle açıklama.'
  },
  {
    code: 'T.8.4.1',
    gradeLevel: 8,
    area: 'Yazma',
    title: 'Şiir Yazma',
    description: 'Şiir yazar.',
    cognitiveLevel: 'Uygulama ve Üretim',
    textbookContext: 'Belirlenen tema ve duygu etrafında ahenk unsurları ve edebi sanatlar kullanarak şiir yazma.'
  },
  {
    code: 'T.8.4.4',
    gradeLevel: 8,
    area: 'Yazma',
    title: 'Yazma Stratejilerini Uygulama',
    description: 'Yazma stratejilerini uygular.',
    cognitiveLevel: 'Uygulama ve Üretim',
    textbookContext: 'Güdümlü veya serbest yazma stratejilerini planlı bir şekilde yürütme.'
  },
  {
    code: 'T.8.4.9',
    gradeLevel: 8,
    area: 'Yazma',
    title: 'Yazılarında Anlatım Biçimlerini Kullanma',
    description: 'Yazılarında anlatım biçimlerini kullanır.',
    cognitiveLevel: 'Uygulama ve Üretim',
    textbookContext: 'Amacına uygun olarak açıklayıcı, tartışmacı veya betimleyici anlatım biçimleriyle metin kurgulama.'
  },
  {
    code: 'T.8.4.15',
    gradeLevel: 8,
    area: 'Yazma',
    title: 'Geçiş ve Bağlantı İfadelerini Kullanma',
    description: 'Yazılarında uygun geçiş ve bağlantı ifadelerini kullanır.',
    cognitiveLevel: 'Uygulama ve Üretim',
    textbookContext: 'Düşüncenin yönünü değiştiren, açıklayıcı-destekleyici ve özetleyen geçiş unsurlarını doğru kullanma.'
  },
  {
    code: 'T.8.4.18',
    gradeLevel: 8,
    area: 'Yazma',
    title: 'Cümlenin Ögelerini Ayırt Etme',
    description: 'Cümlenin ögelerini ayırt eder (Özne, Yüklem, Nesne, Yer Tamlayıcısı, Zarf Tamlayıcısı).',
    cognitiveLevel: 'Çözümleme',
    textbookContext: 'Cümledeki temel ve yardımcı ögeleri sorularıyla birlikte eksiksiz çözümleme.'
  }
];
