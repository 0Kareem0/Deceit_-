import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Eyebrow, DownloadButtons, Starfield } from "../ui";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-5 pt-24 overflow-hidden">
      <Starfield count={70} />

      <div
        className="absolute top-16 sm:top-10 w-40 h-40 sm:w-56 sm:h-56 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(198,163,105,0.35) 0%, transparent 70%)",
          animation: "crescentGlow 5s ease-in-out infinite",
        }}
      />

      <div className="relative">
        <Eyebrow>{t('hero.subtitle')}</Eyebrow>
        <h1
          className="mt-5 text-[20vw] sm:text-[10rem] leading-none font-bold bg-gradient-to-b from-[#F1E4C3] via-[#C6A369] to-[#6B1B38] bg-clip-text text-transparent drop-shadow-[0_0_60px_rgba(198,163,105,0.25)] transition-transform duration-700 hover:scale-105"
          style={{ fontFamily: "'Scheherazade New', serif", animation: "floaty 6s ease-in-out infinite" }}
        >
          {t('nav.deceit')}
        </h1>
      </div>

      <p
        className="mt-4 text-lg sm:text-2xl text-[#EAE2D2]/90 max-w-2xl relative transition-all duration-300 hover:text-[#EAE2D2] hover:scale-105"
        style={{ fontFamily: "'Cairo', sans-serif" }}
      >
        {t('hero.description')}
      </p>

      <div id="download" className="mt-10 scroll-mt-24 relative">
        <DownloadButtons size="lg" />
        <p
          className="mt-3 text-xs text-[#8C82A0] transition-colors duration-300 hover:text-[#EAE2D2]/90"
          style={{ fontFamily: "'Tajawal', sans-serif" }}
        >
          {t('hero.downloadNote')}
        </p>
      </div>

      <div
        className="mt-14 flex items-center gap-8 text-[#8C82A0] text-sm relative transition-all duration-300 hover:text-[#EAE2D2]/90 hover:scale-105"
        style={{ fontFamily: "'Cairo', sans-serif" }}
      >
        <span className="transition-transform duration-300 hover:scale-110">⚔️ {t('hero.features.hiddenRoles')}</span>

        <span className="w-px h-4 bg-[#8C82A0]/25" />

        <span className="transition-transform duration-300 hover:scale-110">🎭 {t('hero.features.socialDeduction')}</span>

        <span className="w-px h-4 bg-[#8C82A0]/25" />

        <span className="transition-transform duration-300 hover:scale-110">🌙 {t('hero.features.strategicGameplay')}</span>
      </div>

      <ChevronDown className="mt-16 w-6 h-6 text-[#8C82A0] animate-bounce relative transition-transform duration-300 hover:scale-110 hover:text-[#C6A369]" />
    </section>
  );
}
