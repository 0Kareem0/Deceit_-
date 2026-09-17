import { Apple } from "lucide-react";
import { useTranslation } from "react-i18next";
import { PLAY_STORE_LINK, IOS_LINK } from "../../data/gameData";

function GooglePlayIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 512 512">
      <path d="M99.617 8.057a24.238 24.238 0 0 0-14.739 6.844L267.098 197.12l53.945-53.945L99.617 8.057z" fill="#EA4335"/>
      <path d="M267.098 314.88L84.878 497.1a24.225 24.225 0 0 0 14.739 6.844l221.426-135.118-53.945-53.946z" fill="#34A853"/>
      <path d="M84.878 14.901C78.435 21.054 74.667 30.68 74.667 42.667v426.666c0 11.987 3.768 21.613 10.211 27.766L257.65 256 84.878 14.901z" fill="#4285F4"/>
      <path d="M427.333 234.333l-106.29 64.938-53.945-53.945 53.945-53.945 106.29 64.938c11.085 6.772 11.085 16.514 0 23.286z" fill="#FBBC04"/>
    </svg>
  );
}

export function DownloadButtons({ size = "base" }: { size?: "base" | "lg" }) {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  
  const pad = size === "lg" 
    ? "px-6 py-3.5 sm:px-7 sm:py-4 text-sm sm:text-base font-extrabold" 
    : "px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-bold";

  const fontStyle = {
    fontFamily: isArabic ? "'Cairo', sans-serif" : "'Inter', sans-serif",
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full max-w-xl mx-auto">
      {/* Android Google Play Store Button */}
      <a
        href={PLAY_STORE_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative w-full sm:w-auto flex items-center justify-center gap-3 ${pad} rounded-2xl text-[#050508] overflow-hidden bg-gradient-to-r from-[#FBF0CB] via-[#D4AF37] to-[#8B6914] shadow-[0_8px_30px_rgba(212,175,55,0.4)] hover:shadow-[0_12px_45px_rgba(240,217,140,0.7)] hover:-translate-y-1 active:scale-95 transition-all duration-300 border border-[#FFF5DC]/40 shrink-0`}
        style={fontStyle}
      >
        {/* Inner Light Refraction Shine */}
        <span className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/30 pointer-events-none" />
        {/* Micro Shimmer Animation */}
        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12" />
        
        <GooglePlayIcon className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:scale-110 shrink-0" />
        <span className="relative z-10 tracking-wide font-extrabold">{t('common.playStore')}</span>
      </a>

      {/* iOS Coming Soon / Download Button (Elegant Dashed Glass Style) */}
      {IOS_LINK ? (
        <a
          href={IOS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className={`group relative w-full sm:w-auto flex items-center justify-center gap-2.5 ${pad} rounded-2xl font-bold text-[#EAE2D2] border border-[#D4AF37]/50 bg-white/[0.04] backdrop-blur-xl hover:bg-white/[0.09] hover:border-[#F0D78C] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:-translate-y-1 active:scale-95 transition-all duration-300 shrink-0`}
          style={fontStyle}
        >
          <Apple className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 text-[#F0D78C]" />
          <span className="relative">{t('common.downloadNow')} — {t('common.iOS')}</span>
        </a>
      ) : (
        <button
          disabled
          className={`group relative w-full sm:w-auto flex items-center justify-center gap-2.5 ${pad} rounded-2xl font-bold text-[#9C8FA8] border border-dashed border-[#D4AF37]/45 bg-white/[0.03] backdrop-blur-xl cursor-not-allowed select-none transition-all duration-300 hover:border-[#F0D78C]/70 hover:bg-white/[0.06] hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] shrink-0`}
          style={fontStyle}
        >
          <Apple className="w-5 h-5 text-[#D4AF37]/70 group-hover:text-[#F0D78C] transition-colors" />
          <span className="relative tracking-wide">{t('common.comingSoon')} {t('common.iOS')}</span>
        </button>
      )}
    </div>
  );
}
