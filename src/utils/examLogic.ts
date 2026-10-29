import { ExamScenario, GradeLevel, OutcomeCode, Question, ScenarioGroup } from '../types/exam';

export interface ScenarioDefinition {
  id: ScenarioGroup;
  title: string;
  shortName: string;
  totalQuestions: number;
  totalPoints: number;
  description: string;
  distribution: Record<OutcomeCode, number>;
}

// 5. Sınıf Resmî Senaryo Tanımları (MEB Konu Soru Dağılım Tablosu)
export const GRADE_5_SCENARIOS: Record<string, ScenarioDefinition> = {
  'senaryo-1': {
    id: 'senaryo-1',
    title: 'Senaryo 1',
    shortName: 'Senaryo 1 (6 Soru)',
    totalQuestions: 6,
    totalPoints: 100,
    description: 'Yüzey anlam (2), görsel okuma (1), söz varlığı (1), zenginleştirme (1), noktalama (1).',
    distribution: {
      'T.O.5.6': 2,
      'T.O.5.7': 1,
      'T.O.5.20': 1,
      'T.Y.5.13': 1,
      'T.Y.5.16': 1,
    },
  },
  'senaryo-2': {
    id: 'senaryo-2',
    title: 'Senaryo 2',
    shortName: 'Senaryo 2 (6 Soru)',
    totalQuestions: 6,
    totalPoints: 100,
    description: 'Kelime tahmini (1), yüzey anlam (1), görsel okuma (2), anahtar kelime (1), noktalama (1).',
    distribution: {
      'T.O.5.5': 1,
      'T.O.5.6': 1,
      'T.O.5.7': 2,
      'T.O.5.15': 1,
      'T.Y.5.16': 1,
    },
  },
  'senaryo-3': {
    id: 'senaryo-3',
    title: 'Senaryo 3',
    shortName: 'Senaryo 3 (7 Soru)',
    totalQuestions: 7,
    totalPoints: 100,
    description: 'Kelime tahmini (1), yüzey anlam (2), görsel (1), anahtar kelime (1), söz varlığı (1), noktalama (1).',
    distribution: {
      'T.O.5.5': 1,
      'T.O.5.6': 2,
      'T.O.5.7': 1,
      'T.O.5.15': 1,
      'T.Y.5.13': 1,
      'T.Y.5.16': 1,
    },
  },
  'senaryo-4': {
    id: 'senaryo-4',
    title: 'Senaryo 4',
    shortName: 'Senaryo 4 (7 Soru)',
    totalQuestions: 7,
    totalPoints: 100,
    description: 'Yüzey anlam (2), görsel (2), söz varlığı (1), zenginleştirme (1), noktalama (1).',
    distribution: {
      'T.O.5.6': 2,
      'T.O.5.7': 2,
      'T.O.5.20': 1,
      'T.Y.5.13': 1,
      'T.Y.5.16': 1,
    },
  },
  'senaryo-5': {
    id: 'senaryo-5',
    title: 'Senaryo 5',
    shortName: 'Senaryo 5 (7 Soru)',
    totalQuestions: 7,
    totalPoints: 100,
    description: 'Kelime tahmini (1), yüzey anlam (2), görsel (1), söz varlığı (1), içerik/yapı seçimi (1), zenginleştirme (1).',
    distribution: {
      'T.O.5.5': 1,
      'T.O.5.6': 2,
      'T.O.5.7': 1,
      'T.O.5.20': 1,
      'T.Y.5.3': 1,
      'T.Y.5.13': 1,
    },
  },
  'senaryo-6': {
    id: 'senaryo-6',
    title: 'Senaryo 6',
    shortName: 'Senaryo 6 (8 Soru)',
    totalQuestions: 8,
    totalPoints: 100,
    description: 'Kelime tahmini (1), yüzey anlam (2), görsel (1), anahtar kelime (1), söz varlığı (1), yapı seçimi (1), noktalama (1).',
    distribution: {
      'T.O.5.5': 1,
      'T.O.5.6': 2,
      'T.O.5.7': 1,
      'T.O.5.15': 1,
      'T.O.5.20': 1,
      'T.Y.5.3': 1,
      'T.Y.5.16': 1,
    },
  },
};

// 6. Sınıf Resmî Senaryo Tanımları (MEB Konu Soru Dağılım Tablosu)
export const GRADE_6_SCENARIOS: Record<string, ScenarioDefinition> = {
  'senaryo-1': {
    id: 'senaryo-1',
    title: 'Senaryo 1',
    shortName: 'Senaryo 1 (6 Soru)',
    totalQuestions: 6,
    totalPoints: 100,
    description: 'Kelime tahmini (1), yüzey anlam (2), söz varlığı (1), söz varlığını zenginleştirme (1), noktalama/yazım (1).',
    distribution: {
      'T.O.6.5': 1,
      'T.O.6.6': 2,
      'T.O.6.21': 1,
      'T.Y.6.18': 1,
      'T.Y.6.21': 1,
    },
  },
  'senaryo-2': {
    id: 'senaryo-2',
    title: 'Senaryo 2',
    shortName: 'Senaryo 2 (6 Soru)',
    totalQuestions: 6,
    totalPoints: 100,
    description: 'Yüzey anlam (2), anahtar kelime (1), söz varlığı (1), içerik/yapı seçimi (1), noktalama/yazım (1).',
    distribution: {
      'T.O.6.6': 2,
      'T.O.6.16': 1,
      'T.O.6.21': 1,
      'T.Y.6.3': 1,
      'T.Y.6.21': 1,
    },
  },
  'senaryo-3': {
    id: 'senaryo-3',
    title: 'Senaryo 3',
    shortName: 'Senaryo 3 (6 Soru)',
    totalQuestions: 6,
    totalPoints: 100,
    description: 'Kelime tahmini (1), yüzey anlam (1), anahtar kelime (1), söz varlığı (1), zenginleştirme (1), noktalama/yazım (1).',
    distribution: {
      'T.O.6.5': 1,
      'T.O.6.6': 1,
      'T.O.6.16': 1,
      'T.O.6.21': 1,
      'T.Y.6.18': 1,
      'T.Y.6.21': 1,
    },
  },
  'senaryo-4': {
    id: 'senaryo-4',
    title: 'Senaryo 4',
    shortName: 'Senaryo 4 (6 Soru)',
    totalQuestions: 6,
    totalPoints: 100,
    description: 'Yüzey anlam (2), söz varlığı geliştirme (2), içerik/yapı seçimi (1), noktalama/yazım (1).',
    distribution: {
      'T.O.6.6': 2,
      'T.O.6.21': 2,
      'T.Y.6.3': 1,
      'T.Y.6.21': 1,
    },
  },
  'senaryo-5': {
    id: 'senaryo-5',
    title: 'Senaryo 5',
    shortName: 'Senaryo 5 (7 Soru)',
    totalQuestions: 7,
    totalPoints: 100,
    description: 'Yüzey anlam (2), anahtar kelime (1), söz varlığı geliştirme (2), içerik/yapı seçimi (1), noktalama/yazım (1).',
    distribution: {
      'T.O.6.6': 2,
      'T.O.6.16': 1,
      'T.O.6.21': 2,
      'T.Y.6.3': 1,
      'T.Y.6.21': 1,
    },
  },
  'senaryo-6': {
    id: 'senaryo-6',
    title: 'Senaryo 6',
    shortName: 'Senaryo 6 (7 Soru)',
    totalQuestions: 7,
    totalPoints: 100,
    description: 'Kelime tahmini (1), yüzey anlam (2), anahtar kelime (1), söz varlığı (1), zenginleştirme (1), noktalama/yazım (1).',
    distribution: {
      'T.O.6.5': 1,
      'T.O.6.6': 2,
      'T.O.6.16': 1,
      'T.O.6.21': 1,
      'T.Y.6.18': 1,
      'T.Y.6.21': 1,
    },
  },
};

// 7. Sınıf Resmî Senaryo Tanımları
export const GRADE_7_SCENARIOS: Record<string, ScenarioDefinition> = {
  'senaryo-1': {
    id: 'senaryo-1',
    title: 'Senaryo 1',
    shortName: 'Senaryo 1 (7 Soru)',
    totalQuestions: 7,
    totalPoints: 100,
    description: 'Üst düzey çıkarım (T.O.7.8) ve içerik yönetimi (T.Y.7.3) içeren kapsamlı senaryo.',
    distribution: {
      'T.O.7.4': 1,
      'T.O.7.5': 1,
      'T.O.7.8': 1,
      'T.O.7.21': 1,
      'T.Y.7.3': 1,
      'T.Y.7.18': 1,
      'T.Y.7.21': 1,
    },
  },
  'senaryo-2': {
    id: 'senaryo-2',
    title: 'Senaryo 2',
    shortName: 'Senaryo 2 (6 Soru)',
    totalQuestions: 6,
    totalPoints: 100,
    description: 'Bilgilendirici metin yapıları (T.O.7.14) ve anahtar kelime çözümlemesi (T.O.7.15) odaklı senaryo.',
    distribution: {
      'T.O.7.5': 1,
      'T.O.7.7': 1,
      'T.O.7.14': 1,
      'T.O.7.15': 1,
      'T.Y.7.3': 1,
      'T.Y.7.21': 1,
    },
  },
  'senaryo-3': {
    id: 'senaryo-3',
    title: 'Senaryo 3',
    shortName: 'Senaryo 3 (7 Soru)',
    totalQuestions: 7,
    totalPoints: 100,
    description: 'Yüzey anlam (2 Soru), derin anlam (1 Soru) ve içerik/yapı yönetimi (T.Y.7.3) dengeli senaryo.',
    distribution: {
      'T.O.7.4': 1,
      'T.O.7.5': 2,
      'T.O.7.7': 1,
      'T.O.7.21': 1,
      'T.Y.7.3': 1,
      'T.Y.7.21': 1,
    },
  },
  'senaryo-4': {
    id: 'senaryo-4',
    title: 'Senaryo 4',
    shortName: 'Senaryo 4 (7 Soru)',
    totalQuestions: 7,
    totalPoints: 100,
    description: 'Söz varlığını zenginleştirme (T.Y.7.18) ve derin anlam çıkarımı (T.O.7.7) odaklı senaryo.',
    distribution: {
      'T.O.7.4': 1,
      'T.O.7.5': 2,
      'T.O.7.7': 1,
      'T.O.7.21': 1,
      'T.Y.7.18': 1,
      'T.Y.7.21': 1,
    },
  },
  'senaryo-5': {
    id: 'senaryo-5',
    title: 'Senaryo 5',
    shortName: 'Senaryo 5 (6 Soru)',
    totalQuestions: 6,
    totalPoints: 100,
    description: 'Söz varlığı geliştirme (T.O.7.21) ve içerik yönetimi (T.Y.7.3) içeren 6 soruluk senaryo.',
    distribution: {
      'T.O.7.4': 1,
      'T.O.7.5': 2,
      'T.O.7.21': 1,
      'T.Y.7.3': 1,
      'T.Y.7.21': 1,
    },
  },
  'senaryo-6': {
    id: 'senaryo-6',
    title: 'Senaryo 6',
    shortName: 'Senaryo 6 (6 Soru)',
    totalQuestions: 6,
    totalPoints: 100,
    description: 'Söz varlığı kullanımı (T.Y.7.18) ve anlama odaklı pratik 6 soruluk senaryo.',
    distribution: {
      'T.O.7.4': 1,
      'T.O.7.5': 2,
      'T.O.7.21': 1,
      'T.Y.7.18': 1,
      'T.Y.7.21': 1,
    },
  },
};

// 8. Sınıf Resmî Senaryo Tanımları (MEB Konu Soru Dağılım Tablosu)
export const GRADE_8_SCENARIOS: Record<string, ScenarioDefinition> = {
  'senaryo-1': {
    id: 'senaryo-1',
    title: 'Senaryo 1',
    shortName: 'Senaryo 1 (8 Soru)',
    totalQuestions: 8,
    totalPoints: 100,
    description: 'Söz varlığı, söz sanatları, fiilimsiler, metin anlama, konu, düşünceyi geliştirme yolları, şiir yazma ve geçiş ifadeleri.',
    distribution: {
      'T.8.3.5': 1,
      'T.8.3.7': 1,
      'T.8.3.9': 1,
      'T.8.3.14': 1,
      'T.8.3.16': 1,
      'T.8.3.34': 1,
      'T.8.4.1': 1,
      'T.8.4.15': 1,
    },
  },
  'senaryo-2': {
    id: 'senaryo-2',
    title: 'Senaryo 2',
    shortName: 'Senaryo 2 (9 Soru)',
    totalQuestions: 9,
    totalPoints: 100,
    description: 'Söz varlığı, fiilimsiler, anlatım biçimleri, metin anlama, ana fikir, çıkarım, metin türleri, düşünceyi geliştirme, anlatım biçimleri yazma.',
    distribution: {
      'T.8.3.5': 1,
      'T.8.3.9': 1,
      'T.8.3.11': 1,
      'T.8.3.14': 1,
      'T.8.3.17': 1,
      'T.8.3.25': 1,
      'T.8.3.26': 1,
      'T.8.3.34': 1,
      'T.8.4.9': 1,
    },
  },
  'senaryo-3': {
    id: 'senaryo-3',
    title: 'Senaryo 3',
    shortName: 'Senaryo 3 (7 Soru)',
    totalQuestions: 7,
    totalPoints: 100,
    description: 'Söz varlığı, söz sanatları, metin anlama, konu, ana duygu, şiir yazma ve cümlenin ögeleri.',
    distribution: {
      'T.8.3.5': 1,
      'T.8.3.7': 1,
      'T.8.3.14': 1,
      'T.8.3.16': 1,
      'T.8.3.17': 1,
      'T.8.4.1': 1,
      'T.8.4.18': 1,
    },
  },
  'senaryo-4': {
    id: 'senaryo-4',
    title: 'Senaryo 4',
    shortName: 'Senaryo 4 (7 Soru)',
    totalQuestions: 7,
    totalPoints: 100,
    description: 'Söz varlığı, anlatım biçimleri, konu, ana fikir, düşünceyi geliştirme yolları, yazma stratejileri ve geçiş ifadeleri.',
    distribution: {
      'T.8.3.5': 1,
      'T.8.3.11': 1,
      'T.8.3.16': 1,
      'T.8.3.17': 1,
      'T.8.3.34': 1,
      'T.8.4.4': 1,
      'T.8.4.15': 1,
    },
  },
  'senaryo-5': {
    id: 'senaryo-5',
    title: 'Senaryo 5',
    shortName: 'Senaryo 5 (9 Soru)',
    totalQuestions: 9,
    totalPoints: 100,
    description: 'Söz sanatları, fiilimsiler, anlatım biçimleri, soru sorma, çıkarım, metin türleri, düşünceyi geliştirme, anlatım biçimleri yazma, cümlenin ögeleri.',
    distribution: {
      'T.8.3.7': 1,
      'T.8.3.9': 1,
      'T.8.3.11': 1,
      'T.8.3.15': 1,
      'T.8.3.25': 1,
      'T.8.3.26': 1,
      'T.8.3.34': 1,
      'T.8.4.9': 1,
      'T.8.4.18': 1,
    },
  },
  'senaryo-6': {
    id: 'senaryo-6',
    title: 'Senaryo 6',
    shortName: 'Senaryo 6 (10 Soru)',
    totalQuestions: 10,
    totalPoints: 100,
    description: '10 soruluk kapsamlı senaryo: Söz sanatları, anlatım biçimleri, soruları cevaplama ve sorma, ana fikir, başlık, çıkarım, düşünceyi geliştirme, şiir ve ögeler.',
    distribution: {
      'T.8.3.7': 1,
      'T.8.3.11': 1,
      'T.8.3.14': 1,
      'T.8.3.15': 1,
      'T.8.3.17': 1,
      'T.8.3.19': 1,
      'T.8.3.25': 1,
      'T.8.3.34': 1,
      'T.8.4.1': 1,
      'T.8.4.18': 1,
    },
  },
  'senaryo-7': {
    id: 'senaryo-7',
    title: 'Senaryo 7',
    shortName: 'Senaryo 7 (7 Soru)',
    totalQuestions: 7,
    totalPoints: 100,
    description: 'Fiilimsiler, soruları cevaplama, konu, çıkarım, yazma stratejileri, anlatım biçimleri ve cümlenin ögeleri.',
    distribution: {
      'T.8.3.9': 1,
      'T.8.3.14': 1,
      'T.8.3.16': 1,
      'T.8.3.25': 1,
      'T.8.4.4': 1,
      'T.8.4.9': 1,
      'T.8.4.18': 1,
    },
  },
};

export const GRADE_SCENARIO_DEFINITIONS: Record<GradeLevel, Record<string, ScenarioDefinition>> = {
  5: GRADE_5_SCENARIOS,
  6: GRADE_6_SCENARIOS,
  7: GRADE_7_SCENARIOS,
  8: GRADE_8_SCENARIOS,
};

// Geriye dönük uyumluluk (Varsayılan 7. Sınıf)
export const SCENARIO_DEFINITIONS = GRADE_7_SCENARIOS;

export interface ValidationResult {
  isValid: boolean;
  totalQuestions: number;
  totalPoints: number;
  errors: string[];
  counts: Partial<Record<OutcomeCode, number>>;
}

export function validateExamScenario(scenario: ExamScenario): ValidationResult {
  const errors: string[] = [];
  const counts: Partial<Record<OutcomeCode, number>> = {};
  let totalPoints = 0;

  for (const q of scenario.questions) {
    counts[q.outcomeCode] = (counts[q.outcomeCode] || 0) + 1;
    totalPoints += q.points;
  }

  const gradeDefs = GRADE_SCENARIO_DEFINITIONS[scenario.gradeLevel || 7];
  const def = gradeDefs?.[scenario.scenarioGroup];

  if (!def) {
    errors.push(`Tanımsız senaryo grubu: ${scenario.scenarioGroup} (Sınıf: ${scenario.gradeLevel})`);
    return {
      isValid: false,
      totalQuestions: scenario.questions.length,
      totalPoints,
      errors,
      counts,
    };
  }

  if (scenario.questions.length !== def.totalQuestions) {
    errors.push(
      `${def.title} için beklenen toplam soru sayısı ${def.totalQuestions}, bulunan: ${scenario.questions.length}`
    );
  }

  for (const [code, expected] of Object.entries(def.distribution) as [OutcomeCode, number][]) {
    const actual = counts[code] || 0;
    if (actual !== expected) {
      errors.push(`Kazanım ${code} için beklenen: ${expected}, bulunan: ${actual}`);
    }
  }

  if (totalPoints !== 100) {
    errors.push(`Sınav toplam puanı 100 olmalıdır, bulunan: ${totalPoints}`);
  }

  return {
    isValid: errors.length === 0,
    totalQuestions: scenario.questions.length,
    totalPoints,
    errors,
    counts,
  };
}

export function getOutcomeDistribution(questions: Question[]) {
  const map = new Map<OutcomeCode, { count: number; totalPoints: number }>();

  for (const q of questions) {
    const existing = map.get(q.outcomeCode) || { count: 0, totalPoints: 0 };
    existing.count += 1;
    existing.totalPoints += q.points;
    map.set(q.outcomeCode, existing);
  }

  return map;
}

export function checkIkilemeSpelling(input: string): { isCorrect: boolean; feedback: string } {
  const hyphenated = /([a-zçğıöşü]+)-([a-zçğıöşü]+)/i;
  const match = input.match(hyphenated);
  if (match) {
    return {
      isCorrect: false,
      feedback: `İkilemelerin arasına kısa çizgi (-) konulmaz. "${match[0]}" ifadesi ayrı ve çizgisiz yazılmalıdır.`,
    };
  }
  return {
    isCorrect: true,
    feedback: 'İkilemeler kurala uygun olarak ayrı yazılmıştır.',
  };
}
