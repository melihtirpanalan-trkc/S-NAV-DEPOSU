import React, { useState } from 'react';
import { LEARNING_OUTCOMES } from '../data/learningOutcomes';
import { ExamScenario, GradeLevel } from '../types/exam';
import { GRADE_SCENARIO_DEFINITIONS } from '../utils/examLogic';
import { Table, ShieldCheck, Layers, FileSpreadsheet, GraduationCap } from 'lucide-react';

interface OutcomeTableModalProps {
  scenario: ExamScenario;
  isOpen: boolean;
  onClose: () => void;
}

export const OutcomeTableModal: React.FC<OutcomeTableModalProps> = ({
  scenario,
  isOpen,
  onClose,
}) => {
  const [tab, setTab] = useState<'current' | 'matrix'>('current');
  const [matrixGrade, setMatrixGrade] = useState<GradeLevel>((scenario.gradeLevel || 7) as GradeLevel);

  if (!isOpen) return null;

  const currentGrade = (scenario.gradeLevel || 7) as GradeLevel;
  const gradeDefs = GRADE_SCENARIO_DEFINITIONS[currentGrade] || {};
  const currentDef = gradeDefs[scenario.scenarioGroup];

  const targetMatrixDefs = GRADE_SCENARIO_DEFINITIONS[matrixGrade] || {};
  const targetScenarioKeys = Object.keys(targetMatrixDefs);

  const outcomesForCurrentGrade = LEARNING_OUTCOMES.filter(
    (item) => item.gradeLevel === currentGrade
  );

  const outcomesForMatrixGrade = LEARNING_OUTCOMES.filter(
    (item) => item.gradeLevel === matrixGrade
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-5xl w-full shadow-2xl border border-slate-300 overflow-hidden my-auto max-h-[94vh] flex flex-col">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 bg-gradient-to-r from-red-700 via-red-800 to-indigo-950 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded-xl">
              <Table className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black tracking-tight">
                {currentGrade}. Sınıf Türkçe Dersi 1. Dönem Ortak Sınav Senaryoları & Kazanım Dağılımı
              </h2>
              <p className="text-xs text-red-100">
                MEB Resmî Konu Soru Dağılım Tablosu & Türkiye Yüzyılı Maarif Modeli
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 rounded-lg text-lg font-bold"
            aria-label="Kapat"
          >
            ✕
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-5 pt-3 gap-3 flex-wrap">
          <button
            onClick={() => setTab('current')}
            className={`flex items-center gap-1.5 pb-2.5 px-3 text-xs font-bold border-b-2 transition-all cursor-pointer ${
              tab === 'current'
                ? 'border-red-700 text-red-700 font-black'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Aktif Sınav Tablosu ({currentGrade}. Sınıf • {scenario.scenarioGroupTitle})</span>
          </button>
          <button
            onClick={() => setTab('matrix')}
            className={`flex items-center gap-1.5 pb-2.5 px-3 text-xs font-bold border-b-2 transition-all cursor-pointer ${
              tab === 'matrix'
                ? 'border-red-700 text-red-700 font-black'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <FileSpreadsheet className="w-4 h-4" />
            <span>MEB Resmî Karşılaştırma Matrisi (Tüm Senaryolar)</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-5 overflow-y-auto space-y-4 text-xs sm:text-sm">
          {tab === 'current' ? (
            <>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-blue-950 flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">
                    Seçili Sınav Bilgisi: {currentGrade}. Sınıf • {scenario.scenarioGroupTitle} — {scenario.scenarioName}
                  </p>
                  <p className="text-xs text-blue-800 mt-0.5">
                    Bu senaryo için MEB tarafından toplam <b>{scenario.questions.length} soru</b> ve <b>100 puanlık</b> açık uçlu değerlendirme yapısı tanımlanmıştır. {currentDef?.description}
                  </p>
                </div>
              </div>

              <div className="border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-300 text-xs uppercase">
                    <tr>
                      <th className="p-2.5 border-r border-slate-200">Alan</th>
                      <th className="p-2.5 border-r border-slate-200 w-24">Kazanım</th>
                      <th className="p-2.5 border-r border-slate-200">Kazanım Açıklaması</th>
                      <th className="p-2.5 border-r border-slate-200 text-center w-28">Bilişsel Düzey</th>
                      <th className="p-2.5 border-r border-slate-200 text-center w-20">Soru Sayısı</th>
                      <th className="p-2.5 text-center w-20">Puan</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-xs">
                    {outcomesForCurrentGrade
                      .filter((item) => {
                        const count = currentDef?.distribution[item.code] || 0;
                        return count > 0;
                      })
                      .map((item, idx) => {
                        const matchingQuestions = scenario.questions.filter(
                          (q) => q.outcomeCode === item.code
                        );
                        const totalOutcomePoints = matchingQuestions.reduce(
                          (sum, q) => sum + q.points,
                          0
                        );

                        return (
                          <tr
                            key={item.code}
                            className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}
                          >
                            <td className="p-2.5 border-r border-slate-200 font-bold text-slate-700">
                              {item.area}
                            </td>
                            <td className="p-2.5 border-r border-slate-200 font-mono font-bold text-red-700">
                              {item.code}
                            </td>
                            <td className="p-2.5 border-r border-slate-200 text-slate-800">
                              <span className="font-semibold block text-slate-900">{item.title}</span>
                              <span className="text-[11px] text-slate-600 block mt-0.5">{item.description}</span>
                            </td>
                            <td className="p-2.5 border-r border-slate-200 text-center">
                              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                                {item.cognitiveLevel}
                              </span>
                            </td>
                            <td className="p-2.5 border-r border-slate-200 text-center font-bold text-slate-900">
                              {matchingQuestions.length} Soru
                            </td>
                            <td className="p-2.5 text-center font-black text-emerald-800">
                              {totalOutcomePoints} Puan
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                  <tfoot className="bg-slate-100 font-black border-t-2 border-slate-300 text-xs">
                    <tr>
                      <td colSpan={4} className="p-3 text-right text-slate-800">
                        TOPLAM
                      </td>
                      <td className="p-3 text-center text-slate-900 border-r border-slate-200">
                        {scenario.questions.length} Soru
                      </td>
                      <td className="p-3 text-center text-red-700 font-black">
                        100 Puan
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </>
          ) : (
            <>
              {/* Matrix Grade Filter */}
              <div className="flex items-center justify-between flex-wrap gap-2 pb-1">
                <div className="flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-red-700" />
                  <span className="font-bold text-xs text-slate-700">Sınıf Seçiniz:</span>
                </div>
                <div className="flex items-center gap-1.5">
                  {([5, 6, 7, 8] as GradeLevel[]).map((g) => (
                    <button
                      key={g}
                      onClick={() => setMatrixGrade(g)}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        matrixGrade === g
                          ? 'bg-red-700 text-white shadow-xs'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                      }`}
                    >
                      {g}. Sınıf
                    </button>
                  ))}
                </div>
              </div>

              <div className="border border-slate-200 rounded-xl overflow-x-auto shadow-2xs">
                <table className="w-full text-left border-collapse text-xs min-w-[700px]">
                  <thead className="bg-slate-800 text-white font-bold border-b border-slate-300 uppercase">
                    <tr>
                      <th className="p-2.5 border-r border-slate-700 w-24">Kazanım Kodu</th>
                      <th className="p-2.5 border-r border-slate-700">Öğrenme Çıktısı / Kazanım</th>
                      {targetScenarioKeys.map((sKey, idx) => (
                        <th
                          key={sKey}
                          className="p-2 text-center border-r border-slate-700 w-20 text-[11px]"
                        >
                          Senaryo {idx + 1}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {outcomesForMatrixGrade.map((item, idx) => (
                      <tr
                        key={item.code}
                        className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}
                      >
                        <td className="p-2.5 border-r border-slate-200 font-mono font-bold text-red-700">
                          {item.code}
                        </td>
                        <td className="p-2.5 border-r border-slate-200 text-slate-800">
                          <span className="font-bold text-slate-900 block">{item.title}</span>
                          <span className="text-[11px] text-slate-600 block mt-0.5">{item.description}</span>
                        </td>
                        {targetScenarioKeys.map((sKey) => {
                          const count = targetMatrixDefs[sKey]?.distribution[item.code] || 0;
                          return (
                            <td
                              key={sKey}
                              className={`p-2 border-r border-slate-200 text-center font-bold ${
                                count > 0 ? 'bg-emerald-50 text-emerald-900 font-black' : 'text-slate-300'
                              }`}
                            >
                              {count > 0 ? `${count} Soru` : '—'}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                  <tfoot className="bg-slate-100 font-black border-t-2 border-slate-300 text-xs">
                    <tr>
                      <td colSpan={2} className="p-3 text-right text-slate-800 border-r border-slate-200">
                        TOPLAM SORU SAYISI
                      </td>
                      {targetScenarioKeys.map((sKey) => (
                        <td
                          key={sKey}
                          className="p-3 text-center border-r border-slate-200 font-black text-red-700"
                        >
                          {targetMatrixDefs[sKey]?.totalQuestions} Soru
                        </td>
                      ))}
                    </tr>
                  </tfoot>
                </table>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
