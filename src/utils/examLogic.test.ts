import test from 'node:test';
import assert from 'node:assert/strict';
import { validateExamScenario, checkIkilemeSpelling, getOutcomeDistribution, GRADE_SCENARIO_DEFINITIONS } from './examLogic';
import { ALL_EXAMS, GRADE_5_EXAMS, GRADE_6_EXAMS, GRADE_7_EXAMS, GRADE_8_EXAMS } from '../data/examScenarios';

test('Must have total 56 exams across grades 5, 6, 7, and 8', () => {
  assert.equal(ALL_EXAMS.length, 56);
  assert.equal(GRADE_5_EXAMS.length, 12, 'Grade 5 must have 12 exams (6 scenarios x 2)');
  assert.equal(GRADE_6_EXAMS.length, 12, 'Grade 6 must have 12 exams (6 scenarios x 2)');
  assert.equal(GRADE_7_EXAMS.length, 18, 'Grade 7 must have 18 exams (6 scenarios x 3)');
  assert.equal(GRADE_8_EXAMS.length, 14, 'Grade 8 must have 14 exams (7 scenarios x 2)');
});

test('All 56 exams must strictly adhere to their designated MEB scenario distribution and 100 points', () => {
  for (const exam of ALL_EXAMS) {
    const result = validateExamScenario(exam);
    assert.equal(
      result.isValid,
      true,
      `Validation failed for [${exam.gradeLevel}. Sınıf] ${exam.scenarioGroupTitle} - ${exam.scenarioName}: ${result.errors.join(', ')}`
    );
    assert.equal(result.totalPoints, 100, `Exam ${exam.id} must be 100 points`);
    const gradeDefs = GRADE_SCENARIO_DEFINITIONS[exam.gradeLevel || 7];
    const def = gradeDefs[exam.scenarioGroup];
    assert.equal(
      result.totalQuestions,
      def.totalQuestions,
      `Exam ${exam.id} must have ${def.totalQuestions} questions`
    );
  }
});

test('Grade 5 Scenario 1 exams must have 6 questions and 100 points', () => {
  const g5s1 = GRADE_5_EXAMS.filter((e) => e.scenarioGroup === 'senaryo-1');
  assert.equal(g5s1.length, 2);
  for (const e of g5s1) {
    assert.equal(e.questions.length, 6);
    assert.equal(e.totalPoints, 100);
  }
});

test('Grade 6 Scenario 2 exams must have 6 questions and 100 points', () => {
  const g6s2 = GRADE_6_EXAMS.filter((e) => e.scenarioGroup === 'senaryo-2');
  assert.equal(g6s2.length, 2);
  for (const e of g6s2) {
    assert.equal(e.questions.length, 6);
    assert.equal(e.totalPoints, 100);
  }
});

test('Grade 8 Scenario 6 exams must have 10 questions and 100 points', () => {
  const g8s6 = GRADE_8_EXAMS.filter((e) => e.scenarioGroup === 'senaryo-6');
  assert.equal(g8s6.length, 2);
  for (const e of g8s6) {
    assert.equal(e.questions.length, 10);
    assert.equal(e.totalPoints, 100);
  }
});

test('Grade 8 Scenario 7 exams must have 7 questions and 100 points (per official MEB table)', () => {
  const g8s7 = GRADE_8_EXAMS.filter((e) => e.scenarioGroup === 'senaryo-7');
  assert.equal(g8s7.length, 2);
  for (const e of g8s7) {
    assert.equal(e.questions.length, 7);
    assert.equal(e.totalPoints, 100);
  }
});

test('checkIkilemeSpelling flags hyphenated ikileme correctly', () => {
  const resBad = checkIkilemeSpelling('öğrenciler gece-gündüz çalıştı');
  assert.equal(resBad.isCorrect, false);

  const resGood = checkIkilemeSpelling('öğrenciler gece gündüz çalıştı');
  assert.equal(resGood.isCorrect, true);
});

test('getOutcomeDistribution accurately counts points and frequencies', () => {
  const dist = getOutcomeDistribution(ALL_EXAMS[0].questions);
  assert.ok(dist.size > 0);
});

test('All 56 exams must match their respective grade levels and not mix up grades', () => {
  for (const exam of ALL_EXAMS) {
    assert.ok(exam.gradeLevel === 5 || exam.gradeLevel === 6 || exam.gradeLevel === 7 || exam.gradeLevel === 8);
    if (exam.targetClass) {
      assert.ok(
        exam.targetClass.startsWith(`${exam.gradeLevel}. Sınıf`),
        `Exam ${exam.id} targetClass "${exam.targetClass}" does not match gradeLevel ${exam.gradeLevel}`
      );
    }
  }
});

test('No question or prompt should contain forbidden phrases: "kitaptaki bilgiye göre", "kitaba göre", "gerçek anlam", "mecaz anlam"', () => {
  const forbiddenPatterns = [
    /kitaptaki bilgiye göre/i,
    /kitaba göre/i,
    /gerçek anlam/i,
    /mecaz anlam/i,
  ];

  for (const exam of ALL_EXAMS) {
    for (const q of exam.questions) {
      const fullText = `${q.title} ${q.prompt} ${q.expectedAnswer} ${q.pedagogicalNote || ''}`;
      for (const pattern of forbiddenPatterns) {
        assert.equal(
          pattern.test(fullText),
          false,
          `Forbidden phrase "${pattern}" found in [${exam.gradeLevel}. Sınıf] ${exam.id} Question ${q.number}: ${q.prompt}`
        );
      }
    }
  }
});

test('Exams must include punctuation marks question with three dots (...) as requested', () => {
  let foundThreeDots = false;
  for (const exam of ALL_EXAMS) {
    for (const q of exam.questions) {
      const text = `${q.prompt} ${q.expectedAnswer} ${q.pedagogicalNote || ''}`;
      if (text.includes('üç nokta') || text.includes('...') || text.includes('Üç nokta')) {
        foundThreeDots = true;
        break;
      }
    }
    if (foundThreeDots) break;
  }
  assert.equal(foundThreeDots, true, 'At least one punctuation question with three dots (...) must exist');
});

