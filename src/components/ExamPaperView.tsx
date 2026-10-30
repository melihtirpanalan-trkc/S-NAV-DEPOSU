import React from 'react';
import { CustomExamConfig, ExamScenario } from '../types/exam';
import { ExamHeader } from './ExamHeader';
import { BookOpen, Sparkles } from 'lucide-react';
import { getOfficialOutcomeTitle } from '../data/learningOutcomes';

interface ExamPaperViewProps {
  scenario: ExamScenario;
  config: CustomExamConfig;
}

export const ExamPaperView: React.FC<ExamPaperViewProps> = ({ scenario, config }) => {
  const totalQuestions = scenario.questions.length;
  // Başlık + Okuma Metni yaklaşık 2 soru yüksekliğinde yer kapladığı için:
  // 6 soruda: 1. sayfa 2 soru, 2. sayfa 4 soru
  // 7-8 soruda: 1. sayfa 3 soru, 2. sayfa 4-5 soru
  // 9-10 soruda: 1. sayfa 4 soru, 2. sayfa 5-6 soru
  const page1QuestionCount = totalQuestions <= 6 ? 2 : totalQuestions <= 8 ? 3 : 4;
  const page1Questions = scenario.questions.slice(0, page1QuestionCount);
  const page2Questions = scenario.questions.slice(page1QuestionCount);

  const getPassageFontSizeClass = () => {
    switch (config.fontSize) {
      case 'sm':
        return 'text-[14px] sm:text-[15px] leading-relaxed';
      case 'lg':
        return 'text-[16.5px] sm:text-[17.5px] leading-relaxed';
      case 'md':
      default:
        return 'text-[15.5px] sm:text-[16.5px] leading-relaxed';
    }
  };

  const getPromptFontSizeClass = () => {
    switch (config.fontSize) {
      case 'sm':
        return 'text-[14px] sm:text-[15px]';
      case 'lg':
        return 'text-[16.5px] sm:text-[17.5px]';
      case 'md':
      default:
        return 'text-[15.5px] sm:text-[16.5px]';
    }
  };

  const renderQuestionCard = (q: ExamScenario['questions'][number], isPage2: boolean) => {
    const linesToRender = isPage2
      ? Math.min(Math.max(q.linesNeeded, 4), 6)
      : Math.min(Math.max(q.linesNeeded, 3), 5);

    return (
      <div
        key={q.id}
        className="flex-1 flex flex-col justify-between border border-slate-300 rounded-lg p-3.5 sm:p-4 bg-white avoid-break hover:border-slate-400 transition-colors"
      >
        <div>
          {/* Question Header Bar */}
          <div className="flex items-center justify-between gap-2 border-b border-slate-200 pb-2 mb-2.5 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-red-700 text-white font-black text-sm flex items-center justify-center shrink-0">
                {q.number}
              </span>
              <span className="text-xs sm:text-[13.5px] font-bold text-slate-800 leading-snug">
                {getOfficialOutcomeTitle(q.outcomeCode)}
              </span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-red-100 text-red-800 border border-red-300">
                {q.points} Puan
              </span>
            </div>
          </div>

          {/* Question Prompt */}
          <p className={`${getPromptFontSizeClass()} font-semibold text-slate-900 mb-2.5 leading-snug whitespace-pre-line`}>
            {q.prompt}
          </p>
        </div>

        {/* Sub-questions if any */}
        {q.subQuestions && q.subQuestions.length > 0 && (
          <div className="flex-1 flex flex-col justify-around space-y-2.5 pl-2.5 sm:pl-3 border-l-2 border-red-300">
            {q.subQuestions.map((sub, sIdx) => (
              <div key={sIdx} className="space-y-1">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-xs sm:text-[13.5px] font-bold text-slate-800">
                    {sub.label}:
                  </span>
                  <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded">
                    {sub.points} Puan
                  </span>
                </div>
                <p className="text-xs sm:text-[13.5px] text-slate-700 italic whitespace-pre-line leading-snug">
                  {sub.text}
                </p>
                {config.showLines && (
                  <div className="space-y-2 pt-1">
                    <div className="border-b border-dashed border-slate-400 h-5"></div>
                    <div className="border-b border-dashed border-slate-400 h-5"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Lined Writing Area for student response - stretches to fill remaining card space */}
        {config.showLines && (!q.subQuestions || q.subQuestions.length === 0) && (
          <div className="flex-1 flex flex-col justify-between mt-1.5 bg-slate-50/70 p-2.5 rounded border border-slate-200">
            <div className="text-[10.5px] font-bold text-slate-500 mb-1 flex items-center justify-between">
              <span>CEVAP ALANI:</span>
              <span>(Açık Uçlu Yanıtınızı Buraya Yazınız)</span>
            </div>
            <div className="flex-1 flex flex-col justify-evenly min-h-[75px] py-1">
              {Array.from({ length: linesToRender }).map((_, lineIdx) => (
                <div
                  key={lineIdx}
                  className="border-b border-slate-300 w-full h-5"
                ></div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div id="printable-exam-paper" className="exam-page-container max-w-4xl mx-auto text-slate-900 space-y-8">
      {/* ==================== 1. SAYFA (A4) ==================== */}
      <div className="bg-white shadow-xl rounded-xl border border-slate-300 p-5 sm:p-8 min-h-[1120px] flex flex-col justify-between">
        {/* Official Exam Header */}
        <div className="shrink-0">
          <ExamHeader scenario={scenario} config={config} />
        </div>

        {/* Reading Passage Box */}
        <div className="shrink-0 border-2 border-slate-300 bg-slate-50/80 rounded-lg p-4 sm:p-5 mb-4 avoid-break">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-2.5">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-red-700" />
              <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                {scenario.readingPassage.title}
              </h3>
            </div>
            <span className="text-xs font-semibold text-slate-500 italic">
              {scenario.readingPassage.author}
            </span>
          </div>

          <div className={`${getPassageFontSizeClass()} text-slate-800 text-justify whitespace-pre-line font-serif`}>
            {scenario.readingPassage.content}
          </div>

          <div className="mt-2.5 pt-2 border-t border-slate-200 flex items-center justify-between text-xs">
            <span className="font-bold text-slate-500">1. Sayfa / 2</span>
            <span className="font-bold text-red-800">
              (İlk soruları yukarıdaki metne göre cevaplayınız.)
            </span>
          </div>
        </div>

        {/* Page 1 Questions - stretches to bottom of Page 1 without leaving empty gap */}
        <div className="flex-1 flex flex-col justify-between gap-3.5">
          {page1Questions.map((q) => renderQuestionCard(q, false))}
        </div>
      </div>

      {/* ==================== 2. SAYFA (A4) ==================== */}
      {page2Questions.length > 0 && (
        <div className="bg-white shadow-xl rounded-xl border border-slate-300 p-5 sm:p-8 min-h-[1120px] flex flex-col justify-between page-break-before">
          {/* Page 2 Questions - stretches from top of Page 2 down to the footer */}
          <div className="flex-1 flex flex-col justify-between gap-4">
            {page2Questions.map((q) => renderQuestionCard(q, true))}
          </div>

          {/* Exam Paper Footer - pinned right at the bottom edge of Page 2 */}
          <div className="shrink-0 mt-4 pt-3 border-t-2 border-slate-800 flex items-center justify-between text-xs sm:text-sm text-slate-700 avoid-break">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-red-600" />
              <span className="font-bold text-slate-900">Türkçe Ülküsü Yayınları</span>
              <span>• {scenario.targetClass || `${scenario.gradeLevel || 5}. Sınıf`} Yazılıya Hazırlık Serisi</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-bold text-slate-500">2. Sayfa / 2</span>
              <span className="font-bold text-slate-900">Başarılar Dileriz!</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
