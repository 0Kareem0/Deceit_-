import { Download, Apple, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";
import { ANDROID_LINK, ANDROID_DIRECT_LINK, IOS_LINK } from "../../data/gameData";

export function DownloadButtons({ size = "base" }: { size?: "base" | "lg" }) {
  const { t } = useTranslation();
  const pad = size === "lg" ? "px-8 py-4 text-lg" : "px-6 py-3.5 text-base";
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4">
      {ANDROID_DIRECT_LINK && (
        <a
          href={ANDROID_DIRECT_LINK}
          download
          className={`group relative w-full sm:w-auto flex items-center justify-center gap-3 ${pad} rounded-xl font-bold text-[#050308] overflow-hidden bg-gradient-to-l from-[#EAD6A8] to-[#C6A369] shadow-[0_10px_40px_-10px_rgba(198,163,105,0.55)] hover:shadow-[0_15px_60px_-8px_rgba(198,163,105,0.9)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300`}
          style={{ fontFamily: "'Cairo', sans-serif" }}
        >
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-l from-transparent via-white/40 to-transparent skew-x-12" />
          <Zap className="w-5 h-5 relative transition-transform duration-300 group-hover:scale-110" strokeWidth={2.5} />
          <span className="relative">{t('common.directDownload')} — {t('common.android')}</span>
        </a>
      )}

      <a
        href={ANDROID_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative w-full sm:w-auto flex items-center justify-center gap-3 ${pad} rounded-xl font-bold text-[#050308] overflow-hidden bg-gradient-to-l from-[#EAD6A8] to-[#C6A369] shadow-[0_10px_40px_-10px_rgba(198,163,105,0.55)] hover:shadow-[0_15px_60px_-8px_rgba(198,163,105,0.9)] hover:-translate-y-1 active:translate-y-0 transition-all duration-300`}
        style={{ fontFamily: "'Cairo', sans-serif" }}
      >
        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-l from-transparent via-white/40 to-transparent skew-x-12" />
        <Download className="w-5 h-5 relative transition-transform duration-300 group-hover:scale-110" strokeWidth={2.5} />
        <span className="relative">{t('common.googleDrive')} — {t('common.android')}</span>
      </a>

      {IOS_LINK ? (
        <a
          href={IOS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full sm:w-auto flex items-center justify-center gap-3 ${pad} rounded-xl font-bold text-[#EAE2D2] border border-[#8C82A0]/40 bg-white/[0.02] hover:bg-white/[0.08] hover:border-[#8C82A0]/60 hover:-translate-y-1 transition-all duration-300`}
          style={{ fontFamily: "'Cairo', sans-serif" }}
        >
          <Apple className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
          <span className="relative">{t('common.downloadNow')} — {t('common.iOS')}</span>
        </a>
      ) : (
        <button
          disabled
          className={`w-full sm:w-auto relative flex items-center justify-center gap-3 ${pad} rounded-xl font-bold text-[#8C82A0] border border-dashed border-[#8C82A0]/30 cursor-not-allowed`}
          style={{ fontFamily: "'Cairo', sans-serif" }}
        >
          <Apple className="w-5 h-5 opacity-50" />
          {t('common.comingSoon')} {t('common.iOS')}
        </button>
      )}
    </div>
  );
}
