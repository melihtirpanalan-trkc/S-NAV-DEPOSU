import React from 'react';

interface LogoProps {
  variant?: 'full' | 'compact' | 'seal' | 'banner';
  className?: string;
  imgClassName?: string;
  gradeText?: string;
}

export const TurkceUlkusuEmblemSvg: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="emblemGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#b91c1c" />
        <stop offset="100%" stopColor="#7f1d1d" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="48" fill="url(#emblemGrad)" stroke="#f59e0b" strokeWidth="3" />
    <circle cx="50" cy="50" r="44" fill="none" stroke="#fef3c7" strokeWidth="1" strokeDasharray="2,2" />
    
    {/* Star / Torch motif */}
    <path d="M50 18 L52.5 25 L60 26 L54 31 L56 38 L50 34 L44 38 L46 31 L40 26 L47.5 25 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="0.5" />
    
    {/* Open Book */}
    <path d="M50 72 V46 C44 42 30 42 22 46 V72 C30 68 44 68 50 72 Z" fill="#ffffff" stroke="#0f172a" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M50 72 V46 C56 42 70 42 78 46 V72 C70 68 56 68 50 72 Z" fill="#ffffff" stroke="#0f172a" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M50 46 V72" stroke="#94a3b8" strokeWidth="2" />
    <path d="M28 54 H44" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M28 60 H44" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M56 54 H72" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M56 60 H72" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
    
    {/* Golden Ribbon */}
    <path d="M20 84 Q50 92 80 84 Q50 88 20 84 Z" fill="#fbbf24" />
  </svg>
);

export const TurkceUlkusuLogo: React.FC<LogoProps> = ({
  variant = 'full',
  className = '',
  imgClassName = '',
  gradeText,
}) => {
  if (variant === 'seal') {
    return (
      <div className={`inline-flex flex-col items-center justify-center text-center ${className}`}>
        <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center shrink-0">
          <TurkceUlkusuEmblemSvg className={`w-full h-full object-contain ${imgClassName}`} />
        </div>
        <span className="text-[11px] font-black tracking-tight text-slate-900 font-serif uppercase mt-1 leading-none">
          TÜRKÇE ÜLKÜSÜ
        </span>
        <span className="text-[9px] font-black tracking-widest text-slate-900 font-serif uppercase mt-0.5 leading-none">
          YAYINLARI
        </span>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-2.5 ${className}`}>
        <div className="w-10 h-10 shrink-0 flex items-center justify-center">
          <TurkceUlkusuEmblemSvg className={`w-full h-full object-contain drop-shadow-xs ${imgClassName}`} />
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-sm sm:text-base font-black tracking-tight text-slate-900 font-serif leading-none">
            TÜRKÇE ÜLKÜSÜ
          </span>
          <span className="text-[10px] sm:text-xs font-black tracking-widest text-slate-900 font-serif uppercase mt-0.5 leading-none">
            YAYINLARI
          </span>
        </div>
      </div>
    );
  }

  if (variant === 'banner') {
    return (
      <div className={`flex items-center justify-between p-3 border-b-2 border-slate-300 bg-white ${className}`}>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 shrink-0">
            <TurkceUlkusuEmblemSvg className="w-full h-full object-contain drop-shadow-xs" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-lg font-black tracking-tight text-slate-900 font-serif leading-none">
              TÜRKÇE ÜLKÜSÜ
            </h2>
            <h3 className="text-xs font-black tracking-widest text-slate-900 font-serif uppercase mt-1 leading-none">
              YAYINLARI
            </h3>
            <p className="text-xs font-medium text-slate-600 mt-1">
              Türkiye Yüzyılı Maarif Modeli • Türkçe Ölçme ve Değerlendirme Sistemi
            </p>
          </div>
        </div>
        <div className="hidden sm:flex flex-col items-end text-right">
          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-sky-100 text-sky-900 border border-sky-300">
            Maarif Modeli Uyumlu
          </span>
          <span className="text-[11px] text-slate-500 mt-0.5">{gradeText || '5, 6, 7 ve 8. Sınıf 1. Dönem 1. Yazılı'}</span>
        </div>
      </div>
    );
  }

  // Full default view
  return (
    <div className={`flex items-center gap-2.5 sm:gap-3.5 ${className}`}>
      <div className="w-11 h-11 sm:w-13 sm:h-13 shrink-0 flex items-center justify-center">
        <TurkceUlkusuEmblemSvg className={`w-full h-full object-contain drop-shadow-sm ${imgClassName}`} />
      </div>
      <div className="flex flex-col justify-center">
        <span className="text-base sm:text-xl font-black tracking-tight text-slate-900 font-serif leading-none">
          TÜRKÇE ÜLKÜSÜ
        </span>
        <span className="text-[11px] sm:text-xs font-black tracking-widest text-slate-900 font-serif uppercase mt-1 leading-none">
          YAYINLARI
        </span>
        <p className="text-[10px] sm:text-xs font-semibold text-slate-500 tracking-wide mt-1 hidden sm:block">
          Türkiye Yüzyılı Maarif Modeli Ölçme & Değerlendirme Dizisi
        </p>
      </div>
    </div>
  );
};
