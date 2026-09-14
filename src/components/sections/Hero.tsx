import { ChevronDown, Swords, Drama, Moon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Eyebrow, DownloadButtons, Starfield } from "../ui";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-5 pt-24 pb-12 overflow-hidden">
      <Starfield count={70} />

      {/* Subtle Background Lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050308]/30 via-transparent to-[#050308]/50 pointer-events-none" />

      <div
        className="absolute top-16 sm:top-10 w-32 h-32 sm:w-56 sm:h-56 rounded-full pointer-events-none opacity-50"
        style={{
          background: "radial-gradient(circle, rgba(198,163,105,0.3) 0%, transparent 70%)",
          animation: "crescentGlow 5s ease-in-out infinite",
        }}
      />

      <div className="relative">
        <Eyebrow>{t('hero.subtitle')}</Eyebrow>
        <h1
          className="mt-5 text-[18vw] sm:text-[8rem] lg:text-[10rem] leading-none font-bold bg-gradient-to-b from-[#F1E4C3] via-[#C6A369] to-[#6B1B38] bg-clip-text text-transparent drop-shadow-[0_0_60px_rgba(198,163,105,0.25)] transition-transform duration-700 hover:scale-105 select-none"
          style={{ fontFamily: "'Scheherazade New', serif", animation: "floaty 6s ease-in-out infinite" }}
        >
          {t('nav.deceit')}
        </h1>
      </div>

      <p
        className="mt-4 text-base sm:text-xl lg:text-2xl text-[#EAE2D2] max-w-2xl relative transition-all duration-300 hover:text-white px-4 sm:px-0 leading-relaxed"
        style={{ fontFamily: "'Cairo', sans-serif", textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}
      >
        {t('hero.description')}
      </p>

      <div id="download" className="mt-10 scroll-mt-24 relative z-10 flex flex-col items-center">
        <DownloadButtons size="lg" />
        <p
          className="mt-3 text-xs sm:text-sm text-[#8C82A0] transition-colors duration-300 hover:text-[#EAE2D2]"
          style={{ fontFamily: "'Tajawal', sans-serif" }}
        >
          {t('hero.downloadNote')}
        </p>
      </div>

      {/* Minimalist Features Inline Bar */}
      <div
        className="mt-12 sm:mt-14 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-[#8C82A0] text-xs sm:text-sm relative z-10 px-4"
        style={{ fontFamily: "'Cairo', sans-serif" }}
      >
        <span className="flex items-center gap-2 transition-colors duration-300 hover:text-[#C6A369]">
          <Swords className="w-4 h-4 text-[#C6A369]" />
          <span>{t('hero.features.hiddenRoles')}</span>
        </span>

        <span className="hidden sm:block w-px h-4 bg-white/10" />

        <span className="flex items-center gap-2 transition-colors duration-300 hover:text-[#C6A369]">
          <Drama className="w-4 h-4 text-[#C6A369]" />
          <span>{t('hero.features.socialDeduction')}</span>
        </span>

        <span className="hidden sm:block w-px h-4 bg-white/10" />

        <span className="flex items-center gap-2 transition-colors duration-300 hover:text-[#C6A369]">
          <Moon className="w-4 h-4 text-[#C6A369]" />
          <span>{t('hero.features.strategicGameplay')}</span>
        </span>
      </div>

      <ChevronDown className="mt-14 w-6 h-6 text-[#8C82A0] animate-bounce relative z-10 transition-colors duration-300 hover:text-[#C6A369] cursor-pointer" />
    </section>
  );
}
