import React from 'react';
import { CustomExamConfig, ExamScenario } from '../types/exam';
import { ExamHeader } from './ExamHeader';
import { CheckCircle2, Award, Lightbulb, FileText } from 'lucide-react';
import { getOfficialOutcomeTitle } from '../data/learningOutcomes';

interface AnswerKeyViewProps {
  scenario: ExamScenario;
  config: CustomExamConfig;
}

export const AnswerKeyView: React.FC<AnswerKeyViewProps> = ({ scenario, config }) => {
  return (
    <div id="printable-exam-paper" className="exam-page-container bg-white shadow-xl rounded-xl border border-slate-300 p-6 sm:p-10 max-w-4xl mx-auto text-slate-900">
      <ExamHeader scenario={scenario} config={config} isAnswerKey={true} />

      <div className="mb-6 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-300 rounded-lg p-4 avoid-break">
        <div className="flex items-start gap-3">
          <Award className="w-6 h-6 text-emerald-700 shrink-0 mt-0.5" />
          <div>
            <h3 className="text-sm font-black text-emerald-950 uppercase tracking-wide">
              Türkiye Yüzyılı Maarif Modeli Dereceli Puanlama Yönergesi
            </h3>
            <p className="text-xs text-emerald-800 mt-1 leading-relaxed">
              Bu sınav, MEB Ölçme ve Değerlendirme Yönetmeliği esaslarına göre öğrencilerin ezber bilgilerini değil; metinden anlam kurma, bağlamdan tahmin yürütme, derin çıkarım yapma, söz varlığını zenginleştirme ve yazım/noktalama kurallarını metin içinde uygulayabilme becerilerini ölçmek için tasarlanmıştır. Puanlamada anahtar kelime eşleşmesi yerine öğrencinin anlam bütünlüğünü kurup kurmadığına dikkat edilmelidir.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {scenario.questions.map((q) => {
          return (
            <div
              key={q.id}
              className="border-2 border-slate-200 rounded-lg p-5 bg-white avoid-break shadow-xs hover:border-slate-300 transition-colors"
            >
              {/* Question Top Info */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-3 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-emerald-700 text-white font-black text-sm flex items-center justify-center shrink-0">
                    {q.number}
                  </span>
                  <span className="font-extrabold text-slate-800 text-xs sm:text-sm leading-snug">
                    {getOfficialOutcomeTitle(q.outcomeCode)}
                  </span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="px-2.5 py-0.5 text-xs font-black rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                    {q.points} Puan
                  </span>
                </div>
              </div>

              {/* Soru Metni */}
              <div className="text-xs sm:text-sm font-semibold text-slate-700 mb-3 bg-slate-50 p-2.5 rounded border border-slate-200">
                <span className="font-bold text-slate-900 block mb-1">Soru Metni:</span>
                {q.prompt}
              </div>

              {/* Sub-questions solutions if present */}
              {q.subQuestions && q.subQuestions.length > 0 && (
                <div className="space-y-3 mb-4">
                  {q.subQuestions.map((sub, sIdx) => (
                    <div key={sIdx} className="bg-emerald-50/60 border border-emerald-200 rounded-lg p-3">
                      <div className="flex items-center justify-between font-bold text-xs text-emerald-950 mb-1">
                        <span>{sub.label}</span>
                        <span className="bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded text-[11px]">
                          {sub.points} Puan
                        </span>
                      </div>
                      <div className="text-xs text-slate-700 italic mb-2">
                        {sub.text}
                      </div>
                      <div className="text-xs text-emerald-950 font-medium whitespace-pre-line bg-white p-2.5 rounded border border-emerald-100 shadow-2xs">
                        {sub.expectedAnswer}
                      </div>
                      {sub.guideline && (
                        <div className="mt-1.5 text-[11px] text-emerald-700 font-semibold">
                          💡 Değerlendirme Ölçütü: {sub.guideline}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Expected Model Answer */}
              {(!q.subQuestions || q.subQuestions.length === 0) && (
                <div className="mb-4 bg-emerald-50/60 border border-emerald-200 rounded-lg p-3">
                  <div className="flex items-center gap-1.5 font-bold text-xs text-emerald-900 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Örnek / Model Tam Puanlık Yanıt:</span>
                  </div>
                  <div className="text-xs sm:text-sm text-emerald-950 font-medium whitespace-pre-line bg-white p-3 rounded border border-emerald-200 shadow-2xs leading-relaxed">
                    {q.expectedAnswer}
                  </div>
                </div>
              )}

              {/* Acceptable Alternative Answers */}
              {q.acceptableAnswers && q.acceptableAnswers.length > 0 && (
                <div className="mb-3 bg-amber-50/70 border border-amber-200 rounded-lg p-2.5">
                  <div className="flex items-center gap-1 text-[11px] font-bold text-amber-900 mb-1">
                    <FileText className="w-3.5 h-3.5 text-amber-700" />
                    <span>Kabul Edilebilir Eş Değer Alternatif İfadeler:</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-amber-950 space-y-1">
                    {q.acceptableAnswers.map((alt, aIdx) => (
                      <li key={aIdx} className="italic">{alt}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Rubric Criteria Table */}
              <div className="mt-3">
                <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Dereceli Puanlama Anahtarı (Rubrik)
                </div>
                <div className="border border-slate-200 rounded overflow-hidden text-xs">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                      <tr>
                        <th className="p-2">Ölçüt / Değerlendirme Basamağı</th>
                        <th className="p-2 w-24 text-right">Puan Değeri</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {q.rubric.map((r, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-50/80">
                          <td className="p-2 text-slate-800">{r.criterion}</td>
                          <td className="p-2 text-right font-black text-emerald-800">
                            {r.points} Puan
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Pedagogical Note */}
              {q.pedagogicalNote && (
                <div className="mt-2.5 flex items-center gap-1.5 text-[11px] text-slate-500 italic">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>Maarif Modeli Notu: {q.pedagogicalNote}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Answer Key Footer (Logosuz, sade Google AI Studio yapısı) */}
      <div className="mt-8 pt-4 border-t-2 border-slate-800 flex items-center justify-between text-xs text-slate-600 avoid-break">
        <span className="font-bold text-slate-800">
          Türkçe Ülküsü Yayınları • {scenario.targetClass || `${scenario.gradeLevel || 5}. Sınıf`} Çözüm ve Rubrik Kılavuzu
        </span>
        <span>{config.academicYear || '2026-2027'} Eğitim Öğretim Yılı • Millî Eğitim Bakanlığı Maarif Modeli</span>
      </div>
    </div>
  );
};
