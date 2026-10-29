import React, { useState, useEffect } from 'react';
import { ExamScenario } from '../types/exam';
import { getOfficialOutcomeTitle } from '../data/learningOutcomes';
import {
  Clock,
  Play,
  Pause,
  RotateCcw,
  Send,
  Eye,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Sparkles,
  BookOpen
} from 'lucide-react';

interface InteractiveExamViewProps {
  scenario: ExamScenario;
  onViewAnswerKey: () => void;
}

export const InteractiveExamView: React.FC<InteractiveExamViewProps> = ({
  scenario,
  onViewAnswerKey,
}) => {
  // Timer state (40 mins = 2400 seconds)
  const [timeLeft, setTimeLeft] = useState<number>(scenario.durationMinutes * 60);
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [studentAnswers, setStudentAnswers] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [selfScores, setSelfScores] = useState<Record<string, number>>({});
  const [showPassageModal, setShowPassageModal] = useState<boolean>(false);
  const [showIncompleteWarning, setShowIncompleteWarning] = useState<boolean>(false);

  // Storage key
  const storageKey = `student_answers_${scenario.id}`;

  // Load from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        setStudentAnswers(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, [scenario.id]);

  // Save to localStorage on change
  const handleAnswerChange = (qId: string, value: string) => {
    const updated = { ...studentAnswers, [qId]: value };
    setStudentAnswers(updated);
    try {
      localStorage.setItem(storageKey, JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  // Timer countdown
  useEffect(() => {
    if (!isRunning || timeLeft <= 0 || isSubmitted) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning, timeLeft, isSubmitted]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const answeredCount = Object.values(studentAnswers).filter((a) => a && a.trim().length > 0).length;

  const handleSelfScoreChange = (qId: string, score: number) => {
    setSelfScores((prev) => ({ ...prev, [qId]: score }));
  };

  const totalSelfScore = Object.values(selfScores).reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Sticky Interactive Bar */}
      <div className="sticky top-2 z-20 bg-white/95 backdrop-blur-md border-2 border-slate-300 rounded-xl p-3 shadow-lg flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200">
            <Clock className={`w-4 h-4 ${timeLeft < 300 ? 'text-red-600 animate-pulse' : 'text-blue-700'}`} />
            <span className="font-mono text-base font-black text-slate-800">
              {formatTime(timeLeft)}
            </span>
          </div>
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700"
            title={isRunning ? 'Zamanlayıcıyı Duraklat' : 'Zamanlayıcıyı Başlat'}
            aria-label={isRunning ? 'Duraklat' : 'Başlat'}
          >
            {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setTimeLeft(scenario.durationMinutes * 60)}
            className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700"
            title="Süreyi Sıfırla"
            aria-label="Sıfırla"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-600 hidden sm:inline">
            Cevaplanan: <b className="text-slate-900">{answeredCount} / {scenario.questions.length} Soru</b>
          </span>
          <div className="w-24 bg-slate-200 h-2.5 rounded-full overflow-hidden hidden sm:block">
            <div
              className="bg-emerald-600 h-full transition-all duration-300"
              style={{ width: `${(answeredCount / scenario.questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowPassageModal(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-blue-50 text-blue-800 border border-blue-200 hover:bg-blue-100"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Metni Oku</span>
          </button>

          {!isSubmitted ? (
            <button
              onClick={() => {
                if (answeredCount < scenario.questions.length) {
                  setShowIncompleteWarning(true);
                  return;
                }
                setIsSubmitted(true);
                setIsRunning(false);
              }}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-black bg-red-700 text-white hover:bg-red-800 shadow-sm transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Sınavı Tamamla & Karşılaştır</span>
            </button>
          ) : (
            <button
              onClick={() => setIsSubmitted(false)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Cevapları Düzenlemeye Dön</span>
            </button>
          )}
        </div>
      </div>

      {/* Reading Passage Accordion/Box */}
      <div className="bg-white rounded-xl border-2 border-slate-200 p-5 shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-3">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-red-700" />
            <h2 className="text-base font-black text-slate-900">
              Sınav Metni: {scenario.readingPassage.title}
            </h2>
          </div>
          <span className="text-xs text-slate-500 italic">
            {scenario.readingPassage.author}
          </span>
        </div>
        <div className="text-sm text-slate-800 leading-relaxed font-serif whitespace-pre-line bg-slate-50/60 p-4 rounded-lg border border-slate-200">
          {scenario.readingPassage.content}
        </div>
      </div>

      {/* Submitted Banner & Self-Evaluation Summary */}
      {isSubmitted && (
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl p-5 shadow-lg flex items-center justify-between flex-wrap gap-4">
          <div>
            <h3 className="text-lg font-black flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-300" />
              Tebrikler! Sınavı Tamamladınız
            </h3>
            <p className="text-xs text-emerald-100 mt-1 max-w-xl">
              Aşağıda her soru için girdiğiniz yanıtı, Türkçe Ülküsü Yayınları Maarif Modeli uzmanlarınca hazırlanan model çözüm ve puanlama rubriğiyle karşılaştırabilirsiniz. Her soru için kendinizi puanlayabilirsiniz.
            </p>
          </div>
          <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl text-center border border-white/30">
            <span className="text-xs uppercase font-bold text-emerald-100 block">Öz Değerlendirme Puanı</span>
            <span className="text-2xl font-black text-white">{totalSelfScore} / 100</span>
          </div>
        </div>
      )}

      {/* Interactive Question List */}
      <div className="space-y-6">
        {scenario.questions.map((q) => {
          const currentAnswer = studentAnswers[q.id] || '';
          const currentScore = selfScores[q.id] ?? 0;

          return (
            <div
              key={q.id}
              className={`bg-white rounded-xl border-2 p-5 shadow-sm transition-all ${
                isSubmitted ? 'border-emerald-200' : 'border-slate-200'
              }`}
            >
              {/* Question Header */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-3 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-red-700 text-white font-black text-sm flex items-center justify-center shrink-0">
                    {q.number}
                  </span>
                  <span className="font-extrabold text-xs sm:text-sm text-slate-800 leading-snug">
                    {getOfficialOutcomeTitle(q.outcomeCode)}
                  </span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-red-100 text-red-800 border border-red-300">
                    {q.points} Puan
                  </span>
                </div>
              </div>

              {/* Soru Kökü */}
              <p className="text-sm font-semibold text-slate-900 mb-3 leading-snug">
                {q.prompt}
              </p>

              {/* Alt sorular bilgisi */}
              {q.subQuestions && q.subQuestions.length > 0 && (
                <div className="mb-3 space-y-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
                  {q.subQuestions.map((sub, sIdx) => (
                    <div key={sIdx} className="text-xs text-slate-700">
                      <b className="text-slate-900">{sub.label}:</b> {sub.text}
                    </div>
                  ))}
                </div>
              )}

              {/* Student Input Field */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-600 block">
                  Yanıtınız (Açık Uçlu):
                </label>
                <textarea
                  rows={q.linesNeeded > 5 ? 5 : q.linesNeeded}
                  disabled={isSubmitted}
                  value={currentAnswer}
                  onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                  placeholder="Cevabınızı Türkçe yazım ve noktalama kurallarına uygun biçimde buraya yazınız..."
                  className={`w-full p-3 rounded-lg border text-sm font-sans focus:outline-hidden transition-all ${
                    isSubmitted
                      ? 'bg-slate-50 text-slate-800 border-slate-300'
                      : 'border-slate-300 focus:border-red-600 focus:ring-2 focus:ring-red-100'
                  }`}
                />
              </div>

              {/* Post-submission comparison */}
              {isSubmitted && (
                <div className="mt-4 pt-4 border-t border-slate-200 space-y-3">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900 mb-1">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Model Çözüm & Beklenen Yanıt:</span>
                    </div>
                    <div className="text-xs text-emerald-950 font-medium whitespace-pre-line leading-relaxed bg-white p-2.5 rounded border border-emerald-100">
                      {q.expectedAnswer}
                    </div>
                  </div>

                  {/* Self Score Slider / Buttons */}
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 flex items-center justify-between flex-wrap gap-2">
                    <div className="text-xs">
                      <span className="font-bold text-slate-800">Öz Değerlendirme Puanı: </span>
                      <span className="text-emerald-700 font-extrabold">{currentScore} / {q.points} Puan</span>
                    </div>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <button
                        onClick={() => handleSelfScoreChange(q.id, 0)}
                        className={`px-2 py-1 rounded text-xs font-bold ${
                          currentScore === 0 ? 'bg-red-600 text-white' : 'bg-white text-slate-700 border'
                        }`}
                      >
                        0 Puan
                      </button>
                      <button
                        onClick={() => handleSelfScoreChange(q.id, Math.round(q.points / 2))}
                        className={`px-2 py-1 rounded text-xs font-bold ${
                          currentScore === Math.round(q.points / 2) ? 'bg-amber-500 text-white' : 'bg-white text-slate-700 border'
                        }`}
                      >
                        Kısmi ({Math.round(q.points / 2)} Puan)
                      </button>
                      <button
                        onClick={() => handleSelfScoreChange(q.id, q.points)}
                        className={`px-2.5 py-1 rounded text-xs font-bold ${
                          currentScore === q.points ? 'bg-emerald-600 text-white' : 'bg-white text-slate-700 border'
                        }`}
                      >
                        Tam Puan ({q.points})
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Floating Passage Modal */}
      {showPassageModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
            <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-red-600" />
                {scenario.readingPassage.title}
              </h3>
              <button
                onClick={() => setShowPassageModal(false)}
                className="text-slate-400 hover:text-slate-700 font-bold px-2 py-1 rounded-md"
              >
                ✕
              </button>
            </div>
            <div className="p-5 overflow-y-auto text-sm text-slate-800 leading-relaxed font-serif whitespace-pre-line">
              {scenario.readingPassage.content}
            </div>
            <div className="p-3 border-t border-slate-200 bg-slate-50 text-right">
              <button
                onClick={() => setShowPassageModal(false)}
                className="px-4 py-1.5 rounded-lg text-xs font-bold bg-slate-800 text-white hover:bg-slate-900"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Modal for Incomplete Questions (Replaces window.confirm) */}
      {showIncompleteWarning && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full p-5 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center gap-3 text-amber-600">
              <div className="p-2 bg-amber-50 rounded-xl">
                <AlertCircle className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-base font-black text-slate-900">
                Cevaplanmamış Sorular Var
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Henüz <b className="text-slate-900">{scenario.questions.length - answeredCount}</b> soruyu yanıtlamadınız. Sınavı tamamlayıp model cevaplarla karşılaştırmak istiyor musunuz?
            </p>
            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setShowIncompleteWarning(false)}
                className="px-4 py-2 rounded-lg text-xs font-bold bg-slate-100 text-slate-700 hover:bg-slate-200"
              >
                Cevaplamaya Devam Et
              </button>
              <button
                onClick={() => {
                  setShowIncompleteWarning(false);
                  setIsSubmitted(true);
                  setIsRunning(false);
                }}
                className="px-4 py-2 rounded-lg text-xs font-black bg-red-700 text-white hover:bg-red-800"
              >
                Evet, Sınavı Bitir
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
