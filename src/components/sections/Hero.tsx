import { ChevronDown, Swords, Drama, Moon, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import { DownloadButtons, Starfield } from "../ui";

export function Hero() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const fontCairo = { fontFamily: isArabic ? "'Cairo', sans-serif" : "'Inter', sans-serif" };
  const fontTajawal = { fontFamily: isArabic ? "'Tajawal', sans-serif" : "'Inter', sans-serif" };

  return (
    <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-5 pt-28 pb-16 overflow-hidden">
      {/* Subtle Elegant Starfield Background */}
      <Starfield count={80} />

      {/* Subtle Vignette Overlay for Title Focus */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,#050308_90%)]" />
      </div>

      {/* Top Badge: Thin, Elegant Glass Pill with Soft Gold Border */}
      <div className="relative mb-6 z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/35 bg-white/[0.03] text-xs sm:text-sm font-semibold text-[#F0D78C] shadow-[0_0_20px_rgba(212,175,55,0.2)] backdrop-blur-xl">
          <Sparkles className="w-3.5 h-3.5 text-[#F0D78C] animate-pulse" />
          <span style={fontTajawal}>{t('hero.subtitle')}</span>
        </div>
      </div>

      {/* Title Showcase (“ديسيت” / “Deceit”) - Metallic specular gold with depth */}
      <div className="relative my-3 group z-10">
        <h1
          className="text-[22vw] sm:text-[9.5rem] lg:text-[12.5rem] leading-tight font-black bg-gradient-to-b from-[#FFFFFF] via-[#F5DF9E] to-[#8B6914] bg-clip-text text-transparent drop-shadow-[0_0_90px_rgba(240,217,140,0.5)] transition-all duration-700 hover:scale-[1.02] select-none tracking-tight py-2"
          style={{
            fontFamily: isArabic ? "'Scheherazade New', serif" : "'Cinzel', serif",
            animation: "floaty 6s ease-in-out infinite",
            filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.9))",
          }}
        >
          {t('nav.deceit')}
        </h1>
      </div>

      {/* Subtitle Description */}
      <p
        className="mt-6 text-base sm:text-xl lg:text-2xl text-[#EAE2D2]/90 max-w-2xl relative z-10 px-4 sm:px-0 leading-relaxed font-medium"
        style={{
          ...fontCairo,
          textShadow: "0 2px 14px rgba(0,0,0,0.95), 0 0 35px rgba(0,0,0,0.6)",
        }}
      >
        {t('hero.description')}
      </p>

      {/* Buttons Area: Clean Horizontal Row Directly on Canvas (No Dark Container Box) */}
      <div id="download" className="mt-10 sm:mt-12 scroll-mt-24 relative z-10 w-full px-4 flex flex-col items-center">
        <DownloadButtons size="lg" />

        <p
          className="mt-4 text-xs sm:text-sm text-[#9C8FA8] text-center font-medium"
          style={fontTajawal}
        >
          {t('hero.downloadNote')}
        </p>
      </div>

      {/* Bottom Feature Tags: Ultra-Premium Floating Glass Badges */}
      <div
        className="mt-14 sm:mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-6 relative z-10 px-4 max-w-4xl mx-auto"
        style={fontCairo}
      >
        {/* Hidden Roles Badge */}
        <div className="group relative flex items-center gap-3 px-5 py-3 rounded-2xl border border-[#D4AF37]/50 bg-gradient-to-r from-[#D4AF37]/20 via-black/60 to-black/80 backdrop-blur-xl shadow-[0_0_25px_rgba(212,175,55,0.25)] hover:shadow-[0_0_40px_rgba(240,217,140,0.5)] hover:border-[#F0D78C] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
          <div className="p-2 rounded-xl border border-[#D4AF37]/40 bg-[#D4AF37]/20 text-[#F0D78C] shadow-md group-hover:scale-110 transition-transform duration-300">
            <Swords className="w-4 h-4 text-[#F0D78C]" />
          </div>
          <span className="text-xs sm:text-sm font-extrabold text-[#F0D78C] tracking-wide relative z-10">
            {t('hero.features.hiddenRoles')}
          </span>
        </div>

        {/* Social Deduction Badge */}
        <div className="group relative flex items-center gap-3 px-5 py-3 rounded-2xl border border-[#9C3357]/50 bg-gradient-to-r from-[#9C3357]/25 via-black/60 to-black/80 backdrop-blur-xl shadow-[0_0_25px_rgba(156,51,87,0.25)] hover:shadow-[0_0_40px_rgba(255,133,162,0.5)] hover:border-[#FF85A2] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
          <div className="p-2 rounded-xl border border-[#9C3357]/40 bg-[#9C3357]/20 text-[#FF85A2] shadow-md group-hover:scale-110 transition-transform duration-300">
            <Drama className="w-4 h-4 text-[#FF85A2]" />
          </div>
          <span className="text-xs sm:text-sm font-extrabold text-[#FF85A2] tracking-wide relative z-10">
            {t('hero.features.socialDeduction')}
          </span>
        </div>

        {/* Strategic Gameplay Badge */}
        <div className="group relative flex items-center gap-3 px-5 py-3 rounded-2xl border border-[#A99BFF]/50 bg-gradient-to-r from-[#A99BFF]/20 via-black/60 to-black/80 backdrop-blur-xl shadow-[0_0_25px_rgba(169,155,255,0.25)] hover:shadow-[0_0_40px_rgba(212,205,255,0.5)] hover:border-[#D4CDFF] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
          <div className="p-2 rounded-xl border border-[#A99BFF]/40 bg-[#A99BFF]/20 text-[#D4CDFF] shadow-md group-hover:scale-110 transition-transform duration-300">
            <Moon className="w-4 h-4 text-[#D4CDFF]" />
          </div>
          <span className="text-xs sm:text-sm font-extrabold text-[#D4CDFF] tracking-wide relative z-10">
            {t('hero.features.strategicGameplay')}
          </span>
        </div>
      </div>

      {/* Down Arrow */}
      <a href="#about" aria-label="Scroll to next section">
        <ChevronDown className="mt-14 w-7 h-7 text-[#D4AF37]/80 animate-bounce relative z-10 transition-transform duration-300 hover:scale-125 hover:text-[#F0D78C] cursor-pointer" />
      </a>
    </section>
  );
}
