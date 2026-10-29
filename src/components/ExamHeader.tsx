import React from 'react';
import { CustomExamConfig, ExamScenario } from '../types/exam';
import { TurkceUlkusuEmblemSvg } from './TurkceUlkusuLogo';

interface ExamHeaderProps {
  scenario: ExamScenario;
  config: CustomExamConfig;
  isAnswerKey?: boolean;
}

export const ExamHeader: React.FC<ExamHeaderProps> = ({
  scenario,
  config,
  isAnswerKey = false,
}) => {
  return (
    <div className="w-full border-2 border-slate-800 rounded-lg p-3 bg-white mb-5 text-slate-900 shadow-xs avoid-break">
      {/* Top Bar: Official Logos and Central Title */}
      <div className="grid grid-cols-12 gap-2 items-center border-b border-slate-300 pb-3">
        {/* Left: Türkçe Ülküsü Logo & Yayınları Branding (İlk sayfada sol üst köşede tek yer) */}
        <div className="col-span-3 flex items-center justify-start">
          <div className="flex items-center gap-2.5">
            <div className="w-14 h-14 flex items-center justify-center shrink-0">
              <TurkceUlkusuEmblemSvg size={56} />
            </div>
            <div className="flex flex-col justify-center leading-none">
              <span className="text-xs sm:text-sm font-black text-slate-900 font-serif leading-none">
                TÜRKÇE ÜLKÜSÜ
              </span>
              <span className="text-[10px] sm:text-xs font-black text-slate-900 font-serif tracking-widest uppercase mt-1 leading-none">
                YAYINLARI
              </span>
              <span className="text-[9px] font-semibold text-slate-500 mt-1 hidden sm:block">
                Ölçme & Değerlendirme
              </span>
            </div>
          </div>
        </div>

        {/* Center: School, Class & Exam Name */}
        <div className="col-span-6 text-center px-1">
          <h1 className="text-xs sm:text-sm font-black uppercase tracking-wide text-slate-800 mb-1 leading-snug">
            {config.schoolName || 'ÜLKÜ ORTAOKULU'}
          </h1>
          <h2 className="text-sm sm:text-base font-black text-red-700 tracking-tight mb-1.5 leading-snug">
            {config.academicYear || '2026-2027'} EĞİTİM ÖĞRETİM YILI {scenario.gradeLevel || 7}. SINIF TÜRKÇE DERSİ
          </h2>
          <div className="text-xs font-bold text-slate-900 flex items-center justify-center gap-1.5 flex-wrap">
            <span>1. DÖNEM 1. YAZILI SINAVI</span>
            <span className="text-slate-400">•</span>
            <span className="text-blue-900 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 font-bold">
              {scenario.scenarioGroupTitle} • {scenario.scenarioName}
            </span>
            {isAnswerKey && (
              <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded border border-emerald-300 font-bold">
                CEVAP ANAHTARI & PUANLAMA RUBRİĞİ
              </span>
            )}
          </div>
        </div>

        {/* Right: Sınav Bilgi / Format Kartı (Logosuz, tek ve sade) */}
        <div className="col-span-3 flex justify-end">
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-2 sm:px-3 text-right leading-tight">
            <span className="block text-[10px] font-bold uppercase text-slate-500">
              Sınav Formatı
            </span>
            <span className="block text-xs font-black text-slate-900 mt-0.5">
              Açık Uçlu Yazılı
            </span>
            <span className="block text-[10px] font-bold text-red-700 mt-0.5">
              100 Puan • 40 Dk.
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Student Details Grid or Teacher Rubric Bar */}
      {!isAnswerKey ? (
        <div className="grid grid-cols-12 gap-2 mt-2.5 text-xs">
          <div className="col-span-8 grid grid-cols-2 gap-x-3 gap-y-1.5 bg-slate-50 p-2 rounded border border-slate-200">
            <div className="flex items-center">
              <span className="font-bold text-slate-700 w-24">Adı Soyadı:</span>
              <span className="border-b border-dotted border-slate-400 flex-1 h-5 text-slate-800"></span>
            </div>
            <div className="flex items-center">
              <span className="font-bold text-slate-700 w-20">Sınıfı / Şubesi:</span>
              <span className="border-b border-dotted border-slate-400 flex-1 h-5 text-slate-800">
                {config.classGroup ? `${config.classGroup}` : `${scenario.gradeLevel || 5} / .....`}
              </span>
            </div>
            <div className="flex items-center">
              <span className="font-bold text-slate-700 w-24">Okul Numarası:</span>
              <span className="border-b border-dotted border-slate-400 flex-1 h-5 text-slate-800"></span>
            </div>
            <div className="flex items-center">
              <span className="font-bold text-slate-700 w-20">Sınav Tarihi:</span>
              <span className="border-b border-dotted border-slate-400 flex-1 h-5 text-slate-800">
                {config.examDate || '..... / ..... / 2026'}
              </span>
            </div>
          </div>

          {/* Score Box */}
          <div className="col-span-4 flex items-stretch">
            <div className="w-full bg-red-50/70 border-2 border-red-600 rounded p-1.5 flex flex-col justify-between text-center">
              <div className="flex justify-between items-center text-[10px] font-bold text-red-900 border-b border-red-200 pb-0.5">
                <span>ALDIĞI NOT</span>
                <span className="text-[9px] text-slate-500 font-normal">Süre: {scenario.durationMinutes} Dk.</span>
              </div>
              <div className="flex items-center justify-center my-1">
                <span className="text-xl sm:text-2xl font-black text-red-800">.....</span>
                <span className="text-sm font-bold text-slate-500 ml-1">/ 100</span>
              </div>
              <div className="text-[9px] text-slate-600 border-t border-red-200 pt-0.5 flex justify-between px-1">
                <span>Öğretmen: {config.teacherName || '.....................'}</span>
                <span>İmza: ..........</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-2.5 bg-emerald-50 border border-emerald-200 rounded p-2 text-xs flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-bold text-emerald-900">
              📌 Değerlendirme Kriteri:
            </span>
            <span className="text-emerald-800">
              MEB Ölçme ve Değerlendirme Yönetmeliği uyarınca her soru açık uçlu olup tam ve kısmi puan rubriğiyle derecelendirilmiştir.
            </span>
          </div>
          <div className="font-bold text-emerald-950 shrink-0">
            Toplam: {scenario.questions.length} Soru • 100 Puan
          </div>
        </div>
      )}
    </div>
  );
};
