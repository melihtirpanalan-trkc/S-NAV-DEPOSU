import React from 'react';
import { CustomExamConfig, ExamScenario, GradeLevel, ScenarioGroup } from '../types/exam';
import { EXAMS_BY_GRADE } from '../data/examScenarios';
import { GRADE_SCENARIO_DEFINITIONS } from '../utils/examLogic';
import {
  Printer,
  Settings2,
  FileCheck2,
  School,
  Calendar,
  User,
  Layers,
  GraduationCap,
  Download
} from 'lucide-react';

interface CustomExamBuilderProps {
  config: CustomExamConfig;
  onChangeConfig: (updated: Partial<CustomExamConfig>) => void;
  activeScenario: ExamScenario;
  onSelectScenario: (scenario: ExamScenario) => void;
  activeView: 'paper' | 'answers' | 'interactive';
  onChangeView: (view: 'paper' | 'answers' | 'interactive') => void;
  onOpenOutcomes: () => void;
  onPrint?: () => void;
  onDownloadPdf?: () => void;
  isPdfGenerating?: boolean;
}

const GRADES_CONFIG: { grade: GradeLevel; label: string; countInfo: string; badge: string }[] = [
  { grade: 5, label: '5. Sınıf', countInfo: '6 Senaryo • 12 Sınav', badge: 'Maarif Modeli' },
  { grade: 6, label: '6. Sınıf', countInfo: '6 Senaryo • 12 Sınav', badge: 'Maarif Modeli' },
  { grade: 7, label: '7. Sınıf', countInfo: '6 Senaryo • 18 Sınav', badge: 'Maarif Modeli' },
  { grade: 8, label: '8. Sınıf', countInfo: '7 Senaryo • 14 Sınav', badge: 'MEB & LGS' },
];

export const CustomExamBuilder: React.FC<CustomExamBuilderProps> = ({
  config,
  onChangeConfig,
  activeScenario,
  onSelectScenario,
  activeView,
  onChangeView,
  onOpenOutcomes,
  onPrint,
  onDownloadPdf,
  isPdfGenerating = false,
}) => {
  const currentGrade = (activeScenario.gradeLevel || config.selectedGrade || 5) as GradeLevel;
  const currentScenarioGroup = activeScenario.scenarioGroup;

  const currentGradeScenariosDef = GRADE_SCENARIO_DEFINITIONS[currentGrade] || {};
  const currentGradeScenarioKeys = Object.keys(currentGradeScenariosDef) as ScenarioGroup[];

  const handleSelectGrade = (grade: GradeLevel) => {
    onChangeConfig({
      selectedGrade: grade,
      classGroup: `${grade} / A`,
    });
    const firstExamOfGrade = EXAMS_BY_GRADE[grade]?.[0];
    if (firstExamOfGrade) {
      onSelectScenario(firstExamOfGrade);
    }
  };

  const handleSelectScenarioGroup = (group: ScenarioGroup) => {
    const examsInGrade = EXAMS_BY_GRADE[currentGrade] || [];
    const firstExam = examsInGrade.find((s) => s.scenarioGroup === group);
    if (firstExam) {
      onSelectScenario(firstExam);
    }
  };

  const currentGroupExams = (EXAMS_BY_GRADE[currentGrade] || []).filter(
    (s) => s.scenarioGroup === currentScenarioGroup
  );

  const handlePrint = () => {
    if (onPrint) {
      onPrint();
      return;
    }
    try {
      if (typeof window !== 'undefined' && typeof window.print === 'function') {
        window.print();
      }
    } catch (e) {
      console.warn('Tarayıcı yazdırma işlemi kısıtlandı:', e);
    }
  };

  return (
    <div className="no-print bg-white rounded-2xl border border-slate-200 shadow-md p-4 sm:p-5 mb-6 space-y-4">
      {/* 0. SEVİYE: Sınıf Düzeyi Seçimi (5, 6, 7, 8. Sınıf) */}
      <div className="border-b border-slate-200 pb-3">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-red-700" />
            <span className="text-xs font-black uppercase tracking-wider text-slate-900">
              Sınıf Düzeyi Seçimi
            </span>
          </div>
          <span className="text-[11px] font-bold text-slate-500">
            5, 6, 7 ve 8. Sınıf Resmî MEB Senaryoları (Toplam 56 Özgün Sınav)
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {GRADES_CONFIG.map(({ grade, label, countInfo, badge }) => {
            const isSelected = currentGrade === grade;
            return (
              <button
                key={grade}
                onClick={() => handleSelectGrade(grade)}
                className={`p-3 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gradient-to-br from-slate-900 to-slate-800 text-white border-slate-900 shadow-md ring-2 ring-red-400'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-black">{label}</span>
                  <span
                    className={`text-[9px] font-bold px-1.5 py-0.5 rounded uppercase ${
                      isSelected
                        ? 'bg-red-600 text-white'
                        : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {badge}
                  </span>
                </div>
                <span
                  className={`text-[11px] mt-1 font-semibold ${
                    isSelected ? 'text-slate-300' : 'text-slate-500'
                  }`}
                >
                  {countInfo}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 1. SEVİYE: Seçilen Sınıfın MEB Senaryo Seçimi */}
      <div className="border-b border-slate-200 pb-3">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-red-700" />
            <span className="text-xs font-black uppercase tracking-wider text-slate-900">
              {currentGrade}. Sınıf MEB Ortak Sınav Senaryosu Seçimi
            </span>
          </div>
          <span className="text-[11px] font-bold text-slate-500">
            Kılavuzdaki Soru Dağılımına Birebir Uyumlu
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-7 gap-2">
          {currentGradeScenarioKeys.map((group) => {
            const def = currentGradeScenariosDef[group];
            if (!def) return null;
            const isActive = currentScenarioGroup === group;

            return (
              <button
                key={group}
                onClick={() => handleSelectScenarioGroup(group)}
                className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-gradient-to-br from-red-700 to-red-800 text-white border-red-800 shadow-md ring-2 ring-red-200'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between gap-1">
                  <span className="text-xs font-black">{def.title}</span>
                  <span
                    className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {def.totalQuestions} Soru
                  </span>
                </div>
                <span
                  className={`text-[10px] mt-1 line-clamp-1 ${
                    isActive ? 'text-red-100' : 'text-slate-500'
                  }`}
                >
                  100 Puan • {currentGroupExams.length || (currentGrade === 7 ? 3 : 2)} Sınav
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. SEVİYE: Seçili Senaryoya Ait Ayrı Sınavlar & Görünüm Seçici */}
      <div className="flex items-center justify-between flex-wrap gap-3 border-b border-slate-200 pb-3">
        <div>
          <span className="text-xs font-black uppercase tracking-wider text-blue-900 block">
            {currentGrade}. Sınıf • {activeScenario.scenarioGroupTitle} • Örnek Sınav Seçimi (Ayrı Metin ve Sorular)
          </span>
          <div className="flex items-center gap-2 mt-1.5 flex-wrap">
            {currentGroupExams.map((s) => {
              const isSelected = activeScenario.id === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => onSelectScenario(s)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200'
                  }`}
                >
                  <span>{s.scenarioName}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* View Switcher: Sınav Kâğıdı / Cevap Anahtarı / İnteraktif */}
        <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl border border-slate-200">
          <button
            onClick={() => onChangeView('paper')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeView === 'paper'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            📄 Sınav Kâğıdı
          </button>
          <button
            onClick={() => onChangeView('answers')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeView === 'answers'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            ✅ Cevap Anahtarı & Rubrik
          </button>
          <button
            onClick={() => onChangeView('interactive')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeView === 'interactive'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            ⏱️ İnteraktif Çöz
          </button>
        </div>
      </div>

      {/* Configuration Grid: School, Academic Year, Teacher, Date, Class */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
        <div className="space-y-1">
          <label className="text-[11px] font-bold text-slate-600 flex items-center gap-1">
            <School className="w-3.5 h-3.5 text-slate-400" />
            Okul Adı:
          </label>
          <input
            type="text"
            value={config.schoolName}
            onChange={(e) => onChangeConfig({ schoolName: e.target.value })}
            className="w-full text-xs font-medium bg-slate-50 border border-slate-300 rounded-lg p-2 focus:bg-white focus:ring-1 focus:ring-red-600 outline-none transition"
            placeholder="ÜLKÜ ORTAOKULU"
          />
        </div>

        <div className="space-y-1">
          <label className="text-[11px] font-bold text-slate-600 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            Eğitim-Öğretim Yılı:
          </label>
          <input
            type="text"
            value={config.academicYear}
            onChange={(e) => onChangeConfig({ academicYear: e.target.value })}
            className="w-full text-xs font-medium bg-slate-50 border border-slate-300 rounded-lg p-2 focus:bg-white focus:ring-1 focus:ring-red-600 outline-none transition"
            placeholder="2026-2027"
          />
        </div>

        <div className="space-y-1">
          <label className="text-[11px] font-bold text-slate-600 flex items-center gap-1">
            <User className="w-3.5 h-3.5 text-slate-400" />
            Türkçe Öğretmeni:
          </label>
          <input
            type="text"
            value={config.teacherName}
            onChange={(e) => onChangeConfig({ teacherName: e.target.value })}
            className="w-full text-xs font-medium bg-slate-50 border border-slate-300 rounded-lg p-2 focus:bg-white focus:ring-1 focus:ring-red-600 outline-none transition"
            placeholder="Öğretmen Adı..."
          />
        </div>

        <div className="space-y-1">
          <label className="text-[11px] font-bold text-slate-600 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            Sınav Tarihi:
          </label>
          <input
            type="text"
            value={config.examDate}
            onChange={(e) => onChangeConfig({ examDate: e.target.value })}
            className="w-full text-xs font-medium bg-slate-50 border border-slate-300 rounded-lg p-2 focus:bg-white focus:ring-1 focus:ring-red-600 outline-none transition"
            placeholder="04.11.2026"
          />
        </div>

        <div className="space-y-1">
          <label className="text-[11px] font-bold text-slate-600 flex items-center gap-1">
            <Settings2 className="w-3.5 h-3.5 text-slate-400" />
            Sınıf & Şube:
          </label>
          <input
            type="text"
            value={config.classGroup}
            onChange={(e) => onChangeConfig({ classGroup: e.target.value })}
            className="w-full text-xs font-medium bg-slate-50 border border-slate-300 rounded-lg p-2 focus:bg-white focus:ring-1 focus:ring-red-600 outline-none transition"
            placeholder={`${currentGrade} / A`}
          />
        </div>
      </div>

      {/* Bottom Bar: Outcomes Modal Button, Font Size, Lines Toggle, and Print Button */}
      <div className="flex items-center justify-between flex-wrap gap-3 pt-2 border-t border-slate-100">
        <div className="flex items-center gap-3 flex-wrap">
          <button
            onClick={onOpenOutcomes}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-indigo-50 text-indigo-900 border border-indigo-200 hover:bg-indigo-100 cursor-pointer"
          >
            <FileCheck2 className="w-4 h-4 text-indigo-700" />
            <span>{currentGrade}. Sınıf Kazanım Dağılım Tablosu & Senaryo Matrisi</span>
          </button>

          <div className="flex items-center gap-2 text-xs">
            <span className="font-bold text-slate-600">Punto:</span>
            <button
              onClick={() => onChangeConfig({ fontSize: 'sm' })}
              className={`px-2 py-1 rounded text-xs cursor-pointer ${
                config.fontSize === 'sm' ? 'bg-slate-800 text-white font-bold' : 'bg-slate-100 text-slate-700'
              }`}
            >
              Küçük
            </button>
            <button
              onClick={() => onChangeConfig({ fontSize: 'md' })}
              className={`px-2 py-1 rounded text-xs cursor-pointer ${
                config.fontSize === 'md' ? 'bg-slate-800 text-white font-bold' : 'bg-slate-100 text-slate-700'
              }`}
            >
              Standart
            </button>
            <button
              onClick={() => onChangeConfig({ fontSize: 'lg' })}
              className={`px-2 py-1 rounded text-xs cursor-pointer ${
                config.fontSize === 'lg' ? 'bg-slate-800 text-white font-bold' : 'bg-slate-100 text-slate-700'
              }`}
            >
              Büyük
            </button>
          </div>

          <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={config.showLines}
              onChange={(e) => onChangeConfig({ showLines: e.target.checked })}
              className="rounded text-red-600 cursor-pointer"
            />
            <span>Cevap Çizgilerini Göster</span>
          </label>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {onDownloadPdf && (
            <button
              onClick={onDownloadPdf}
              disabled={isPdfGenerating}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-black bg-emerald-700 text-white hover:bg-emerald-800 shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-60"
              title="Sınavı PDF dosyası olarak doğrudan bilgisayarınıza indirin"
            >
              <Download className="w-4 h-4" />
              <span>{isPdfGenerating ? 'PDF Hazırlanıyor...' : 'PDF İndir'}</span>
            </button>
          )}

          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-black bg-gradient-to-r from-red-700 to-red-800 text-white hover:from-red-800 hover:to-red-900 shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Yazdır / PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
};
