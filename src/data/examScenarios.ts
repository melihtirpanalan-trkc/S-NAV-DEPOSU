import { ExamScenario, GradeLevel } from '../types/exam';
import { SCENARIO_1_EXAMS } from './scenarios/scenario1';
import { SCENARIO_2_EXAMS } from './scenarios/scenario2';
import { SCENARIO_3_EXAMS } from './scenarios/scenario3';
import { SCENARIO_4_EXAMS } from './scenarios/scenario4';
import { SCENARIO_5_EXAMS } from './scenarios/scenario5';
import { SCENARIO_6_EXAMS } from './scenarios/scenario6';

import { GRADE_5_EXAMS } from './scenarios/grade5';
import { GRADE_6_EXAMS } from './scenarios/grade6';
import { GRADE_8_EXAMS } from './scenarios/grade8';

export const GRADE_7_EXAMS: ExamScenario[] = [
  ...SCENARIO_1_EXAMS,
  ...SCENARIO_2_EXAMS,
  ...SCENARIO_3_EXAMS,
  ...SCENARIO_4_EXAMS,
  ...SCENARIO_5_EXAMS,
  ...SCENARIO_6_EXAMS,
].map((s) => ({ ...s, gradeLevel: 7 as GradeLevel }));

export const EXAMS_BY_GRADE: Record<GradeLevel, ExamScenario[]> = {
  5: GRADE_5_EXAMS,
  6: GRADE_6_EXAMS,
  7: GRADE_7_EXAMS,
  8: GRADE_8_EXAMS,
};

export const ALL_EXAMS: ExamScenario[] = [
  ...GRADE_5_EXAMS,
  ...GRADE_6_EXAMS,
  ...GRADE_7_EXAMS,
  ...GRADE_8_EXAMS,
];

// Default export for backward compatibility
export const EXAM_SCENARIOS: ExamScenario[] = ALL_EXAMS;

export {
  GRADE_5_EXAMS,
  GRADE_6_EXAMS,
  GRADE_8_EXAMS,
  SCENARIO_1_EXAMS,
  SCENARIO_2_EXAMS,
  SCENARIO_3_EXAMS,
  SCENARIO_4_EXAMS,
  SCENARIO_5_EXAMS,
  SCENARIO_6_EXAMS,
};
