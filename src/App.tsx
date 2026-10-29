import React, { useState } from 'react';
import { EXAM_SCENARIOS } from './data/examScenarios';
import { CustomExamConfig, ExamScenario } from './types/exam';
import { TurkceUlkusuLogo } from './components/TurkceUlkusuLogo';
import { ExamPaperView } from './components/ExamPaperView';
import { AnswerKeyView } from './components/AnswerKeyView';
import { InteractiveExamView } from './components/InteractiveExamView';
import { CustomExamBuilder } from './components/CustomExamBuilder';
import { OutcomeTableModal } from './components/OutcomeTableModal';
import { MaarifGuideModal } from './components/MaarifGuideModal';
import {
  downloadPrintableExam,
  printExamDocument,
  downloadExamAsPdf
} from './utils/exportPrintableHtml';
import {
  Printer,
  FileText,
  CheckCircle,
  Clock,
  BookOpen,
  Info,
  Table,
  Sparkles,
  Download,
  FileDown,
  Loader2,
  CheckCircle2
} from 'lucide-react';

export default function App() {
  const [activeScenario, setActiveScenario] = useState<ExamScenario>(EXAM_SCENARIOS[0]);
  const [activeView, setActiveView] = useState<'paper' | 'answers' | 'interactive'>('paper');
  const [isOutcomeModalOpen, setIsOutcomeModalOpen] = useState<boolean>(false);
  const [isMaarifModalOpen, setIsMaarifModalOpen] = useState<boolean>(false);
  const [showPrintModal, setShowPrintModal] = useState<boolean>(false);
  const [isPdfGenerating, setIsPdfGenerating] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const [config, setConfig] = useState<CustomExamConfig>({
    schoolName: 'ÜLKÜ ORTAOKULU',
    academicYear: '2026-2027',
    examDate: '04.11.2026',
    teacherName: 'Melih Öğretmen',
    classGroup: '5 / A',
    selectedGrade: 5,
    selectedScenarioId: EXAM_SCENARIOS[0].id,
    fontSize: 'md',
    showLines: true,
    includeAnswerKeyOnPrint: false,
  });

  const currentGrade = activeScenario.gradeLevel || config.selectedGrade || 5;

  const handleConfigChange = (updated: Partial<CustomExamConfig>) => {
    setConfig((prev) => ({ ...prev, ...updated }));
  };

  const handleSelectScenario = (scenario: ExamScenario) => {
    setActiveScenario(scenario);
    setConfig((prev) => ({
      ...prev,
      selectedScenarioId: scenario.id,
      selectedGrade: scenario.gradeLevel || prev.selectedGrade || 5,
      classGroup: `${scenario.gradeLevel || prev.selectedGrade || 5} / A`,
    }));
  };

  const handlePrint = () => {
    if (activeView === 'interactive') {
      setActiveView('paper');
    }
    setShowPrintModal(true);
  };

  const handleDirectPrintTrigger = async () => {
    setShowPrintModal(false);
    if (activeView !== 'paper') {
      setActiveView('paper');
    }
    setToastMessage('Yazdırma penceresi açılıyor...');
    setTimeout(async () => {
      const ok = await printExamDocument(activeScenario, config);
      if (!ok) {
        setToastMessage('Tarayıcı yazdırmayı engelledi. PDF otomatik indiriliyor...');
        try {
          setIsPdfGenerating(true);
          await downloadExamAsPdf(activeScenario, config);
          setIsPdfGenerating(false);
          setToastMessage('PDF başarıyla indirildi!');
        } catch {
          downloadPrintableExam(activeScenario, config);
          setToastMessage('A4 şablonu indirildi!');
        }
      } else {
        setToastMessage(null);
      }
      setTimeout(() => setToastMessage(null), 3500);
    }, 150);
  };

  const handleDownloadPdf = async () => {
    try {
      setIsPdfGenerating(true);
      setToastMessage('PDF hazırlanıyor, lütfen bekleyiniz...');
      await downloadExamAsPdf(activeScenario, config);
      setIsPdfGenerating(false);
      setShowPrintModal(false);
      setToastMessage('PDF başarıyla indirildi!');
      setTimeout(() => setToastMessage(null), 3000);
    } catch (e) {
      console.error('PDF üretimi hatası:', e);
      setIsPdfGenerating(false);
      downloadPrintableExam(activeScenario, config);
      setToastMessage('A4 yazdırma şablonu (.html) indirildi!');
      setTimeout(() => setToastMessage(null), 3000);
    }
  };

  const handleDownloadExamHtml = () => {
    downloadPrintableExam(activeScenario, config);
    setShowPrintModal(false);
    setToastMessage('A4 kâğıdı şablonu (.html) indirildi!');
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      {/* Top Header - Hidden on Print */}
      <header className="app-header no-print bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4">
          <TurkceUlkusuLogo variant="full" />

          {/* Quick Header Navigation */}
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <button
              onClick={() => setIsOutcomeModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors"
            >
              <Table className="w-3.5 h-3.5 text-red-700" />
              <span className="hidden sm:inline">Konu Soru Dağılım Tablosu</span>
              <span className="sm:hidden">Dağılım</span>
            </button>

            <button
              onClick={() => setIsMaarifModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors"
            >
              <Info className="w-3.5 h-3.5 text-blue-700" />
              <span className="hidden sm:inline">Maarif Modeli Rehberi</span>
              <span className="sm:hidden">Kılavuz</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-black bg-red-700 text-white hover:bg-red-800 shadow-sm transition-all cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Yazdır / PDF</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 py-5">
        {/* Custom Exam Builder / Teacher Controls */}
        <CustomExamBuilder
          config={config}
          onChangeConfig={handleConfigChange}
          activeScenario={activeScenario}
          onSelectScenario={handleSelectScenario}
          activeView={activeView}
          onChangeView={setActiveView}
          onOpenOutcomes={() => setIsOutcomeModalOpen(true)}
          onPrint={handlePrint}
          onDownloadPdf={handleDownloadPdf}
          isPdfGenerating={isPdfGenerating}
        />

        {/* Active View Rendering */}
        <div className="py-2">
          {activeView === 'paper' && (
            <ExamPaperView scenario={activeScenario} config={config} />
          )}

          {activeView === 'answers' && (
            <AnswerKeyView scenario={activeScenario} config={config} />
          )}

          {activeView === 'interactive' && (
            <InteractiveExamView
              scenario={activeScenario}
              onViewAnswerKey={() => setActiveView('answers')}
            />
          )}
        </div>
      </main>

      {/* Footer - Hidden on Print */}
      <footer className="no-print bg-white border-t border-slate-200 py-6 mt-12 text-center text-xs text-slate-600">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <div className="flex flex-col items-center justify-center leading-none">
            <span className="font-serif font-black text-base text-slate-900 leading-none">TÜRKÇE ÜLKÜSÜ</span>
            <span className="font-serif font-black text-xs text-slate-900 tracking-widest uppercase mt-1 leading-none">YAYINLARI</span>
            <span className="text-slate-500 text-[11px] font-medium mt-1.5">Türkiye Yüzyılı Maarif Modeli Ölçme & Değerlendirme Sistemi</span>
          </div>
          <p className="text-slate-500 text-[11px]">
            T.C. Millî Eğitim Bakanlığı {currentGrade}. Sınıf Türkçe Dersi Öğretim Programı, MEB Senaryoları ve Türkiye Yüzyılı Maarif Modeliyle Tam Uyumludur.
          </p>
        </div>
      </footer>

      {/* Modals */}
      <OutcomeTableModal
        scenario={activeScenario}
        isOpen={isOutcomeModalOpen}
        onClose={() => setIsOutcomeModalOpen(false)}
      />

      <MaarifGuideModal
        isOpen={isMaarifModalOpen}
        onClose={() => setIsMaarifModalOpen(false)}
      />

      {/* Active Print & PDF Options Modal */}
      {showPrintModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-3 text-red-700">
                <div className="p-2.5 bg-red-50 rounded-xl">
                  <Printer className="w-6 h-6 text-red-700" />
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900">
                    Yazdırma & PDF İşlemleri
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">A4 Standart Sınav Formatı • Türkçe Ülküsü Yayınları</p>
                </div>
              </div>
              <button
                onClick={() => setShowPrintModal(false)}
                className="text-slate-400 hover:text-slate-600 text-lg font-bold p-1"
              >
                ✕
              </button>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Sınav kâğıdını yazıcınızdan basabilir, doğrudan <b>PDF olarak kaydedebilir</b> veya bağımsız A4 şablonu olarak indirebilirsiniz:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <button
                type="button"
                onClick={handleDirectPrintTrigger}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-black bg-red-700 text-white hover:bg-red-800 shadow-md transition-all text-center cursor-pointer"
              >
                <Printer className="w-4 h-4 shrink-0" />
                <span>Yazıcıdan Yazdır (Baskı Al)</span>
              </button>

              <button
                type="button"
                disabled={isPdfGenerating}
                onClick={handleDownloadPdf}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-black bg-emerald-700 text-white hover:bg-emerald-800 shadow-md transition-all text-center cursor-pointer disabled:opacity-60"
              >
                {isPdfGenerating ? (
                  <>
                    <Loader2 className="w-4 h-4 shrink-0 animate-spin" />
                    <span>PDF Hazırlanıyor...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 shrink-0" />
                    <span>PDF Olarak İndir (.pdf)</span>
                  </>
                )}
              </button>
            </div>

            <div className="pt-1">
              <button
                type="button"
                onClick={handleDownloadExamHtml}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-300 transition-all text-center cursor-pointer"
              >
                <FileDown className="w-4 h-4 shrink-0 text-slate-700" />
                <span>Bağımsız A4 Kâğıdı İndir (.html / Çevrim Dışı)</span>
              </button>
            </div>

            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1 text-xs text-slate-600">
              <div className="font-bold text-slate-800 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-blue-600" />
                <span>Yazdırma & PDF Kaydetme İpuçları:</span>
              </div>
              <ul className="list-disc pl-4 space-y-0.5 text-[11px] text-slate-600">
                <li><b>"PDF Olarak İndir"</b> butonu yazıcıya gerek kalmadan sınavı anında <b>.pdf dosyası</b> olarak indirir.</li>
                <li><b>"Yazıcıdan Yazdır"</b> butonu tarayıcınızın A4 baskı penceresini açar (Hedef: "PDF Olarak Kaydet" seçilebilir).</li>
                <li>Sayfa Yapısı: <b>Dikey (Portrait)</b>, Boyut: <b>A4</b>, <b>"Arka plan grafikleri"</b> kutucuğunu işaretleyiniz.</li>
              </ul>
            </div>

            <div className="flex justify-between items-center pt-2 border-t border-slate-100">
              <div className="text-[11px] text-slate-500">
                Seçili Sınav: <b>{activeScenario.scenarioGroupTitle} • {activeScenario.scenarioName}</b>
              </div>
              <button
                type="button"
                onClick={() => setShowPrintModal(false)}
                className="px-4 py-2 rounded-lg text-xs font-bold bg-slate-200 text-slate-800 hover:bg-slate-300 cursor-pointer"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Status Notification Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white px-5 py-3 rounded-xl shadow-2xl border border-slate-700 text-xs sm:text-sm font-bold flex items-center gap-2.5 animate-bounce">
          {isPdfGenerating ? (
            <Loader2 className="w-4 h-4 text-emerald-400 animate-spin shrink-0" />
          ) : (
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          )}
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
