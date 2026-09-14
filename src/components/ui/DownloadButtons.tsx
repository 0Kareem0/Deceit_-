import { Download, Apple, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";
import { ANDROID_LINK, ANDROID_DIRECT_LINK, IOS_LINK } from "../../data/gameData";

export function DownloadButtons({ size = "base" }: { size?: "base" | "lg" }) {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const pad = size === "lg" ? "px-7 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base" : "px-5 py-3 text-xs sm:text-sm";

  const fontStyle = {
    fontFamily: isArabic ? "'Cairo', sans-serif" : "'Inter', sans-serif",
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full">
      {ANDROID_DIRECT_LINK && (
        <a
          href={ANDROID_DIRECT_LINK}
          download
          className={`group relative w-full sm:w-auto flex items-center justify-center gap-3 ${pad} rounded-xl font-extrabold text-[#050508] overflow-hidden bg-gradient-to-r from-[#F0D78C] via-[#D4AF37] to-[#AA7C11] shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_45px_rgba(240,217,140,0.7)] hover:scale-105 active:scale-95 transition-all duration-300`}
          style={fontStyle}
        >
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />
          <Zap className="w-5 h-5 relative transition-transform duration-300 group-hover:scale-110 text-[#050508]" strokeWidth={2.5} />
          <span className="relative">{t('common.directDownload')} — {t('common.android')}</span>
        </a>
      )}

      <a
        href={ANDROID_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative w-full sm:w-auto flex items-center justify-center gap-3 ${pad} rounded-xl font-extrabold text-[#050508] overflow-hidden bg-gradient-to-r from-[#F0D78C] via-[#D4AF37] to-[#AA7C11] shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_45px_rgba(240,217,140,0.7)] hover:scale-105 active:scale-95 transition-all duration-300`}
        style={fontStyle}
      >
        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />
        <Download className="w-5 h-5 relative transition-transform duration-300 group-hover:scale-110 text-[#050508]" strokeWidth={2.5} />
        <span className="relative">{t('common.googleDrive')} — {t('common.android')}</span>
      </a>

      {IOS_LINK ? (
        <a
          href={IOS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full sm:w-auto flex items-center justify-center gap-3 ${pad} rounded-xl font-bold text-[#EAE2D2] border border-[#D4AF37]/40 bg-white/[0.04] backdrop-blur-md hover:bg-white/[0.09] hover:border-[#D4AF37] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:scale-105 active:scale-95 transition-all duration-300`}
          style={fontStyle}
        >
          <Apple className="w-5 h-5 transition-transform duration-300 hover:scale-110 text-[#F0D78C]" />
          <span className="relative">{t('common.downloadNow')} — {t('common.iOS')}</span>
        </a>
      ) : (
        <button
          disabled
          className={`w-full sm:w-auto relative flex items-center justify-center gap-2.5 ${pad} rounded-xl font-semibold text-[#9C8FA8] border border-dashed border-[#D4AF37]/35 bg-white/[0.02] backdrop-blur-md cursor-not-allowed select-none transition-all duration-300 hover:border-[#D4AF37]/50`}
          style={fontStyle}
        >
          <Apple className="w-4 h-4 text-[#9C8FA8] opacity-70" />
          <span>{t('common.comingSoon')} {t('common.iOS')}</span>
        </button>
      )}
    </div>
  );
}
