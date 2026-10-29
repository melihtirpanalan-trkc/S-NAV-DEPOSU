import React from 'react';
import { TURKCE_ULKUSU_LOGO_DATA_URI } from '../assets/logoDataUri';

interface LogoProps {
  variant?: 'full' | 'compact' | 'seal' | 'banner';
  className?: string;
  imgClassName?: string;
  gradeText?: string;
}

export const TurkceUlkusuEmblemSvg: React.FC<{ className?: string; size?: number }> = ({
  className = 'w-full h-full',
  size = 56,
}) => (
  <img
    src={TURKCE_ULKUSU_LOGO_DATA_URI}
    alt="Türkçe Ülküsü Logo"
    width={size}
    height={size}
    style={{
      width: `${size}px`,
      height: `${size}px`,
      maxWidth: `${size}px`,
      maxHeight: `${size}px`,
      objectFit: 'contain',
      display: 'block',
    }}
    className={`object-contain select-none ${className}`}
    draggable={false}
  />
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
        <div className="w-14 h-14 flex items-center justify-center shrink-0">
          <TurkceUlkusuEmblemSvg size={56} className={imgClassName} />
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
          <TurkceUlkusuEmblemSvg size={40} className={imgClassName} />
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
          <div className="w-12 h-12 shrink-0 flex items-center justify-center">
            <TurkceUlkusuEmblemSvg size={48} />
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
      <div className="w-12 h-12 shrink-0 flex items-center justify-center">
        <TurkceUlkusuEmblemSvg size={48} className={imgClassName} />
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
