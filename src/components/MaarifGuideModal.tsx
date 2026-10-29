import React from 'react';
import { BookOpen, Sparkles, Target, Compass, CheckCircle2 } from 'lucide-react';
import { LEARNING_OUTCOMES } from '../data/learningOutcomes';

interface MaarifGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MaarifGuideModal: React.FC<MaarifGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-3xl w-full shadow-2xl border border-slate-300 overflow-hidden my-auto max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-5 border-b border-slate-200 bg-gradient-to-r from-red-700 to-indigo-950 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded-xl">
              <Compass className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black tracking-tight">
                Türkiye Yüzyılı Maarif Modeli Türkçe Öğretim Esasları
              </h2>
              <p className="text-xs text-red-100">
                5, 6, 7 ve 8. Sınıf 1. Dönem 1. Yazılı Soru Tasarımı & Ölçme Değerlendirme İlkeleri
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 rounded-lg text-lg font-bold"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-800 leading-relaxed">
          {/* Section 1: Maarif Modeli Yaklaşımı */}
          <div className="space-y-2">
            <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-red-600" />
              1. Ezberden Becerilere Geçiş
            </h3>
            <p className="text-slate-700 text-justify">
              Türkiye Yüzyılı Maarif Modeli; öğrencilerin tanım ezberlemeleri yerine, dili anlama, anlamlandırma ve etkili kullanma becerilerini önceler. Sınavlarda çoktan seçmeli testler yerine <b>açık uçlu ve kısa cevaplı sorular</b> tercih edilir. Öğrencinin düşünme süreci, akıl yürütmesi ve metinden delil göstererek yanıt üretmesi değerlendirilir.
            </p>
          </div>

          {/* Section 2: MEB Senaryolarında Yer Alan Temel Kazanımlar */}
          <div className="space-y-3">
            <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
              <Target className="w-4 h-4 text-red-600" />
              2. MEB Senaryolarında (1-6) Yer Alan Temel Kazanımların Nitelikleri
            </h3>
            <div className="space-y-2.5">
              {LEARNING_OUTCOMES.map((out) => (
                <div key={out.code} className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-mono font-bold text-red-700">{out.code} ({out.area} – {out.questionCountRequired} Soru)</span>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-indigo-50 text-indigo-900 border border-indigo-200">
                      Düzey: {out.cognitiveLevel}
                    </span>
                  </div>
                  <p className="font-bold text-slate-900 text-xs mb-1">{out.description}</p>
                  <p className="text-[11px] text-slate-600 italic">{out.textbookContext}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Türkçe Ülküsü Yayınları Farkı */}
          <div className="p-4 bg-red-50 border border-red-200 rounded-xl space-y-2">
            <h4 className="font-black text-red-900 text-xs uppercase tracking-wide flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-red-700" />
              Türkçe Ülküsü Yayınları Sınav Formatı
            </h4>
            <p className="text-xs text-red-950">
              Sınavlarımızda her soru için MEB standartlarında hazırlanan <b>Dereceli Puanlama Anahtarı (Rubrik)</b> bulunmaktadır. Öğretmenlerimize notlandırma kolaylığı sağlarken öğrencilerimize de kendilerini değerlendirme imkânı sunar. Soru kağıtları MEB normlarında A4 formatına tam uyumlu olup doğrudan yazdırılabilir.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-bold bg-slate-800 text-white hover:bg-slate-900"
          >
            Anladım, Kapat
          </button>
        </div>
      </div>
    </div>
  );
};
