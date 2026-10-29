import React from 'react';
import { CustomExamConfig, ExamScenario } from '../types/exam';
import { ExamHeader } from './ExamHeader';
import { TurkceUlkusuEmblemSvg } from './TurkceUlkusuLogo';
import { BookOpen, Printer } from 'lucide-react';
import { getOfficialOutcomeTitle } from '../data/learningOutcomes';

interface ExamPaperViewProps {
  scenario: ExamScenario;
  config: CustomExamConfig;
  onPrintOrPdf?: () => void;
}

export const ExamPaperView: React.FC<ExamPaperViewProps> = ({
  scenario,
  config,
  onPrintOrPdf,
}) => {
  const getFontSizeClass = () => {
    switch (config.fontSize) {
      case 'sm':
        return 'text-xs leading-relaxed';
      case 'lg':
        return 'text-base leading-relaxed';
      case 'md':
      default:
        return 'text-sm leading-relaxed';
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Single Print / PDF Action Bar right above the exam sheet */}
      {onPrintOrPdf && (
        <div className="no-print flex items-center justify-between bg-white border border-slate-200 rounded-t-xl px-4 sm:px-6 py-3 shadow-xs border-b-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 shrink-0">
              <TurkceUlkusuEmblemSvg className="w-full h-full object-contain" />
            </div>
            <div>
              <span className="text-xs sm:text-sm font-black text-slate-900 block leading-tight">
                {scenario.gradeLevel || 5}. Sınıf • {scenario.scenarioGroupTitle} ({scenario.scenarioName})
              </span>
              <span className="text-[11px] text-slate-500 font-medium">
                A4 Baskıya Hazır Resmî Yazılı Kâğıdı Görünümü
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onPrintOrPdf}
            className="flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black bg-gradient-to-r from-red-700 to-red-800 text-white hover:from-red-800 hover:to-red-900 shadow-md hover:shadow-lg transition-all cursor-pointer shrink-0"
          >
            <Printer className="w-4 h-4" />
            <span>Yazdır / PDF İndir</span>
          </button>
        </div>
      )}

      <div
        id="printable-exam-paper"
        className={`exam-page-container bg-white shadow-xl ${
          onPrintOrPdf ? 'rounded-b-xl' : 'rounded-xl'
        } border border-slate-300 p-6 sm:p-10 text-slate-900 transition-all`}
      >
        {/* Official Exam Header */}
        <ExamHeader scenario={scenario} config={config} />

        {/* Reading Passage Box */}
        <div className="border-2 border-slate-300 bg-slate-50/70 rounded-lg p-4 sm:p-5 mb-6 avoid-break">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-3">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-red-700" />
              <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                {scenario.readingPassage.title}
              </h3>
            </div>
            <span className="text-[11px] font-semibold text-slate-500 italic">
              {scenario.readingPassage.author}
            </span>
          </div>

          <div className={`${getFontSizeClass()} text-slate-800 text-justify whitespace-pre-line font-serif`}>
            {scenario.readingPassage.content}
          </div>

          <div className="mt-3 pt-2 border-t border-slate-200 text-right">
            <span className="text-[11px] font-bold text-red-800">
              (1, 2, 3, 4 ve 5. soruları yukarıdaki metne göre cevaplayınız.)
            </span>
          </div>
        </div>

        {/* Questions Section */}
        <div className="space-y-5">
          {scenario.questions.map((q) => {
            return (
              <div
                key={q.id}
                className="border border-slate-200 rounded-lg p-4 bg-white avoid-break hover:border-slate-300 transition-colors"
              >
                {/* Question Header Bar */}
                <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-2 mb-3 flex-wrap">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-red-700 text-white font-black text-sm flex items-center justify-center shrink-0">
                      {q.number}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
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
                <p className="text-sm sm:text-base font-semibold text-slate-900 mb-3 leading-snug whitespace-pre-line">
                  {q.prompt}
                </p>

                {/* Sub-questions if any */}
                {q.subQuestions && q.subQuestions.length > 0 && (
                  <div className="space-y-3 mb-3 pl-2 sm:pl-3 border-l-2 border-red-200">
                    {q.subQuestions.map((sub, sIdx) => (
                      <div key={sIdx} className="space-y-1.5">
                        <div className="flex items-start justify-between gap-2">
                          <span className="text-xs sm:text-sm font-bold text-slate-800">
                            {sub.label}:
                          </span>
                          <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                            {sub.points} Puan
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 italic">
                          {sub.text}
                        </p>
                        {config.showLines && (
                          <div className="space-y-2 py-1">
                            <div className="border-b border-dashed border-slate-300 h-5"></div>
                            <div className="border-b border-dashed border-slate-300 h-5"></div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Lined Writing Area for student response */}
                {config.showLines && (!q.subQuestions || q.subQuestions.length === 0) && (
                  <div className="mt-3 bg-slate-50/50 p-2 rounded border border-slate-200/80">
                    <div className="text-[10px] font-bold text-slate-400 mb-1 flex items-center justify-between">
                      <span>CEVAP ALANI:</span>
                      <span>(Açık Uçlu Yanıtınızı Buraya Yazınız)</span>
                    </div>
                    <div className="space-y-2.5">
                      {Array.from({ length: q.linesNeeded }).map((_, lineIdx) => (
                        <div
                          key={lineIdx}
                          className="border-b border-slate-300 h-5"
                        ></div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Exam Paper Footer */}
        <div className="mt-8 pt-4 border-t-2 border-slate-800 flex items-center justify-between text-xs text-slate-600 avoid-break">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 shrink-0">
              <TurkceUlkusuEmblemSvg className="w-full h-full object-contain" />
            </div>
            <span className="font-bold text-slate-800">Türkçe Ülküsü Yayınları</span>
            <span>• {scenario.targetClass || `${scenario.gradeLevel || 5}. Sınıf`} Yazılıya Hazırlık Serisi</span>
          </div>
          <div className="text-right">
            <span className="font-semibold">Başarılar Dileriz!</span>
          </div>
        </div>
      </div>
    </div>
  );
};
