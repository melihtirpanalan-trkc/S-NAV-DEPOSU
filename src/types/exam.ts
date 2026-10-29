export type GradeLevel = 5 | 6 | 7 | 8;

export type OutcomeCode = string;

export type ScenarioGroup =
  | 'senaryo-1'
  | 'senaryo-2'
  | 'senaryo-3'
  | 'senaryo-4'
  | 'senaryo-5'
  | 'senaryo-6'
  | 'senaryo-7';

export interface LearningOutcome {
  code: OutcomeCode;
  gradeLevel: GradeLevel;
  area: 'Okuma' | 'Yazma';
  questionCountRequired?: number;
  title: string;
  description: string;
  cognitiveLevel: 'Anlama' | 'Basit Çıkarım' | 'Üst Düzey Çıkarım' | 'Çözümleme' | 'Uygulama ve Üretim';
  textbookContext: string;
}

export interface RubricStep {
  criterion: string;
  points: number;
}

export interface Question {
  id: string;
  number: number;
  outcomeCode: OutcomeCode;
  title: string;
  points: number;
  prompt: string;
  contextText?: string;
  subQuestions?: {
    label: string;
    text: string;
    expectedAnswer: string;
    points: number;
    guideline?: string;
  }[];
  expectedAnswer: string;
  acceptableAnswers?: string[];
  rubric: RubricStep[];
  pedagogicalNote?: string;
  linesNeeded: number;
}

export interface ExamScenario {
  id: string;
  gradeLevel?: GradeLevel;
  scenarioGroup: ScenarioGroup;
  scenarioGroupTitle: string;
  scenarioName: string;
  examNumber: 1 | 2 | 3;
  title: string;
  theme: string;
  targetClass: string;
  termInfo: string;
  durationMinutes: number;
  totalPoints: number;
  readingPassage: {
    title: string;
    author: string;
    source: string;
    content: string;
    wordCount?: number;
  };
  questions: Question[];
}

export interface CustomExamConfig {
  schoolName: string;
  academicYear: string;
  examDate: string;
  teacherName: string;
  classGroup: string;
  selectedGrade: GradeLevel;
  selectedScenarioId: string;
  fontSize: 'sm' | 'md' | 'lg';
  showLines: boolean;
  includeAnswerKeyOnPrint: boolean;
}
