import { Download, Apple, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";
import { ANDROID_LINK, ANDROID_DIRECT_LINK, IOS_LINK } from "../../data/gameData";

export function DownloadButtons({ size = "base" }: { size?: "base" | "lg" }) {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  
  const pad = size === "lg" 
    ? "px-7 py-4 sm:px-9 sm:py-4.5 text-sm sm:text-base" 
    : "px-5 py-3.5 text-xs sm:text-sm";

  const fontStyle = {
    fontFamily: isArabic ? "'Cairo', sans-serif" : "'Inter', sans-serif",
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full max-w-4xl mx-auto">
      {/* Android Direct Download Button */}
      {ANDROID_DIRECT_LINK && (
        <a
          href={ANDROID_DIRECT_LINK}
          download
          className={`group relative w-full sm:w-auto flex items-center justify-center gap-3 ${pad} rounded-2xl font-black text-[#050508] overflow-hidden bg-gradient-to-r from-[#FBF0CB] via-[#D4AF37] to-[#8B6914] shadow-[0_10px_35px_rgba(212,175,55,0.45)] hover:shadow-[0_15px_50px_rgba(240,217,140,0.75)] hover:-translate-y-1 active:scale-95 transition-all duration-300 border border-[#FFF5DC]/40`}
          style={fontStyle}
        >
          {/* Inner Light Refraction Shine */}
          <span className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/30 pointer-events-none" />
          {/* Micro Shimmer Animation */}
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12" />
          
          <Zap className="w-5 h-5 relative z-10 text-[#050508] transition-transform duration-300 group-hover:scale-110" strokeWidth={2.5} />
          <span className="relative z-10 tracking-wide">{t('common.directDownload')} — {t('common.android')}</span>
        </a>
      )}

      {/* Android Google Drive / Standard Button */}
      <a
        href={ANDROID_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative w-full sm:w-auto flex items-center justify-center gap-3 ${pad} rounded-2xl font-black text-[#050508] overflow-hidden bg-gradient-to-r from-[#FBF0CB] via-[#D4AF37] to-[#8B6914] shadow-[0_10px_35px_rgba(212,175,55,0.45)] hover:shadow-[0_15px_50px_rgba(240,217,140,0.75)] hover:-translate-y-1 active:scale-95 transition-all duration-300 border border-[#FFF5DC]/40`}
        style={fontStyle}
      >
        {/* Inner Light Refraction Shine */}
        <span className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/30 pointer-events-none" />
        {/* Micro Shimmer Animation */}
        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12" />

        <Download className="w-5 h-5 relative z-10 text-[#050508] transition-transform duration-300 group-hover:scale-110" strokeWidth={2.5} />
        <span className="relative z-10 tracking-wide">{t('common.googleDrive')} — {t('common.android')}</span>
      </a>

      {/* iOS Coming Soon / Download Button (Elegant Dashed Glass Style) */}
      {IOS_LINK ? (
        <a
          href={IOS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className={`group relative w-full sm:w-auto flex items-center justify-center gap-3 ${pad} rounded-2xl font-bold text-[#EAE2D2] border border-[#D4AF37]/50 bg-white/[0.04] backdrop-blur-xl hover:bg-white/[0.09] hover:border-[#F0D78C] hover:shadow-[0_0_30px_rgba(212,175,55,0.35)] hover:-translate-y-1 active:scale-95 transition-all duration-300`}
          style={fontStyle}
        >
          <Apple className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 text-[#F0D78C]" />
          <span className="relative">{t('common.downloadNow')} — {t('common.iOS')}</span>
        </a>
      ) : (
        <button
          disabled
          className={`group relative w-full sm:w-auto flex items-center justify-center gap-3 ${pad} rounded-2xl font-bold text-[#9C8FA8] border border-dashed border-[#D4AF37]/45 bg-white/[0.03] backdrop-blur-xl cursor-not-allowed select-none transition-all duration-300 hover:border-[#F0D78C]/70 hover:bg-white/[0.06] hover:shadow-[0_0_25px_rgba(212,175,55,0.25)]`}
          style={fontStyle}
        >
          <Apple className="w-5 h-5 text-[#D4AF37]/70 group-hover:text-[#F0D78C] transition-colors" />
          <span className="relative tracking-wide">{t('common.comingSoon')} {t('common.iOS')}</span>
        </button>
      )}
    </div>
  );
}
