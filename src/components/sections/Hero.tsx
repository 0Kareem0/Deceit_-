import { ChevronDown, Swords, Drama, Moon, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import { DownloadButtons, Starfield } from "../ui";

export function Hero() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-5 pt-28 pb-16 overflow-hidden">
      <Starfield count={85} />

      {/* Subtle Ambient Vignette & Background Radial Gold Aura */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050508]/40 via-transparent to-[#050508]/80" />
        <div
          className="absolute top-10 left-1/2 -translate-x-1/2 w-[380px] h-[380px] sm:w-[650px] sm:h-[650px] rounded-full blur-3xl opacity-50"
          style={{
            background: "radial-gradient(circle, rgba(240,217,140,0.35) 0%, rgba(212,175,55,0.2) 40%, rgba(107,27,56,0.15) 65%, transparent 80%)",
            animation: "crescentGlow 6s ease-in-out infinite",
          }}
        />
        {/* Soft corner vignettes */}
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[#6B1B38]/15 blur-[120px]" />
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#D4AF37]/10 blur-[120px]" />
      </div>

      {/* Eyebrow Tag */}
      <div className="relative mb-5 z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/40 bg-gradient-to-r from-[#D4AF37]/20 via-[#6B1B38]/20 to-transparent text-xs sm:text-sm font-semibold text-[#F0D78C] shadow-[0_0_20px_rgba(212,175,55,0.25)] backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-[#F0D78C] animate-pulse" />
          <span style={{ fontFamily: isArabic ? "'Tajawal', sans-serif" : "'Inter', sans-serif" }}>
            {t('hero.subtitle')}
          </span>
        </div>
      </div>

      {/* Big Title ("ديسيت" / "Deceit") */}
      <div className="relative my-2 group z-10">
        <h1
          className="text-[21vw] sm:text-[9rem] lg:text-[11.5rem] leading-none font-black bg-gradient-to-b from-[#FFFFFF] via-[#F0D78C] to-[#8B6914] bg-clip-text text-transparent drop-shadow-[0_0_80px_rgba(212,175,55,0.4)] transition-all duration-700 hover:scale-[1.03] select-none tracking-tight"
          style={{
            fontFamily: isArabic ? "'Scheherazade New', serif" : "'Cinzel', serif",
            animation: "floaty 6s ease-in-out infinite",
            filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.8))",
          }}
        >
          {t('nav.deceit')}
        </h1>

        {/* Soft underline glow accent */}
        <div className="w-36 sm:w-72 h-1 mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent rounded-full shadow-[0_0_20px_#D4AF37] opacity-80" />
      </div>

      {/* Subtitle / Description */}
      <p
        className="mt-6 text-base sm:text-xl lg:text-2xl text-[#EAE2D2]/90 max-w-2xl relative z-10 px-4 sm:px-0 leading-relaxed font-medium"
        style={{
          fontFamily: isArabic ? "'Cairo', sans-serif" : "'Inter', sans-serif",
          textShadow: "0 2px 12px rgba(0,0,0,0.9), 0 0 30px rgba(0,0,0,0.5)",
        }}
      >
        {t('hero.description')}
      </p>

      {/* Download CTAs Container */}
      <div id="download" className="mt-10 scroll-mt-24 relative z-10 w-full max-w-xl px-4">
        <div className="p-6 sm:p-8 rounded-3xl border border-[#D4AF37]/30 bg-gradient-to-b from-black/60 via-[#D4AF37]/[0.04] to-black/80 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] hover:border-[#D4AF37]/60 hover:shadow-[0_0_40px_rgba(212,175,55,0.25)] transition-all duration-500 flex flex-col items-center">
          <DownloadButtons size="lg" />

          <p
            className="mt-4 text-xs sm:text-sm text-[#9C8FA8] flex items-center justify-center gap-1.5 font-medium"
            style={{ fontFamily: isArabic ? "'Tajawal', sans-serif" : "'Inter', sans-serif" }}
          >
            <span>{t('hero.downloadNote')}</span>
          </p>
        </div>
      </div>

      {/* Bottom Feature Tags - Elegant Floating Pills */}
      <div
        className="mt-12 sm:mt-14 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[#EAE2D2] text-xs sm:text-sm relative z-10 px-4"
        style={{ fontFamily: isArabic ? "'Cairo', sans-serif" : "'Inter', sans-serif" }}
      >
        <div className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#D4AF37]/35 bg-[#D4AF37]/10 backdrop-blur-md transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37]/20 hover:scale-105 shadow-md">
          <Swords className="w-4 h-4 text-[#F0D78C]" />
          <span>{t('hero.features.hiddenRoles')}</span>
        </div>

        <div className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#9C3357]/35 bg-[#9C3357]/10 backdrop-blur-md transition-all duration-300 hover:border-[#9C3357] hover:bg-[#9C3357]/20 hover:scale-105 shadow-md">
          <Drama className="w-4 h-4 text-[#FF85A2]" />
          <span>{t('hero.features.socialDeduction')}</span>
        </div>

        <div className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#A99BFF]/35 bg-[#A99BFF]/10 backdrop-blur-md transition-all duration-300 hover:border-[#A99BFF] hover:bg-[#A99BFF]/20 hover:scale-105 shadow-md">
          <Moon className="w-4 h-4 text-[#A99BFF]" />
          <span>{t('hero.features.strategicGameplay')}</span>
        </div>
      </div>

      <a href="#about" aria-label="Scroll to next section">
        <ChevronDown className="mt-12 w-7 h-7 text-[#D4AF37]/80 animate-bounce relative z-10 transition-transform duration-300 hover:scale-125 hover:text-[#F0D78C] cursor-pointer" />
      </a>
    </section>
  );
}
