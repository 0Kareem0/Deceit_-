import { Moon, Sun, Quote, Sparkles, Shield, Eye, Flame, Vote } from "lucide-react";
import { Reveal, Eyebrow } from "../ui";
import { useTranslation } from "react-i18next";

export function Cycle() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const fontCairo = { fontFamily: isArabic ? "'Cairo', sans-serif" : "'Cinzel', serif" };
  const fontTajawal = { fontFamily: isArabic ? "'Tajawal', sans-serif" : "'Inter', sans-serif" };

  return (
    <section id="cycle" className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-32 scroll-mt-16">
      {/* Soft Divider Line Top */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent mb-20" />

      {/* Section Header */}
      <Reveal className="text-center mb-16 relative">
        <Eyebrow>{t('cycle.title')}</Eyebrow>
        <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-[#F0D78C] via-[#D4AF37] to-[#8B6914] bg-clip-text text-transparent" style={fontCairo}>
          {t('cycle.subtitle')}
        </h2>
        <p className="mt-4 text-[#9C8FA8] max-w-2xl mx-auto text-sm sm:text-base leading-relaxed" style={fontTajawal}>
          {t('cycle.description')}
        </p>
      </Reveal>

      {/* Two Big Side-by-Side Cards */}
      <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
        {/* Night Phase Card: Cooler deep purple / midnight blue tones + crescent moon */}
        <Reveal>
          <div
            className="h-full rounded-3xl p-7 sm:p-9 border border-[#8C82A0]/30 bg-gradient-to-b from-[#1E1035]/50 via-[#0A0618]/70 to-[#050508]/90 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(140,130,160,0.35)] hover:border-[#D4AF37]/60 relative overflow-hidden group"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-2xl border border-[#A99BFF]/40 bg-[#A99BFF]/15 text-[#D4CDFF] shadow-[0_0_20px_rgba(169,155,255,0.3)] group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  <Moon className="w-6 h-6 sm:w-7 sm:h-7 text-[#A99BFF]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-[#F0D78C] transition-colors duration-300" style={fontCairo}>
                  {t('cycle.night.title')}
                </h3>
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full border border-[#A99BFF]/40 bg-[#A99BFF]/10 text-[#D4CDFF] backdrop-blur-md">
                {isArabic ? "مرحلة السرية" : "NIGHT PHASE"}
              </span>
            </div>

            <ul className="space-y-4 text-sm sm:text-base text-[#9C8FA8]" style={fontTajawal}>
              <li className="flex items-start gap-3.5 transition-colors duration-300 group-hover:text-[#EAE2D2]">
                <div className="w-5 h-5 rounded-lg border border-[#A99BFF]/40 bg-[#A99BFF]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#A99BFF]">
                  <Eye className="w-3 h-3" />
                </div>
                <span className="leading-relaxed">{t('cycle.night.point1')}</span>
              </li>
              <li className="flex items-start gap-3.5 transition-colors duration-300 group-hover:text-[#EAE2D2]">
                <div className="w-5 h-5 rounded-lg border border-[#A99BFF]/40 bg-[#A99BFF]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#A99BFF]">
                  <Shield className="w-3 h-3" />
                </div>
                <span className="leading-relaxed">{t('cycle.night.point2')}</span>
              </li>
              <li className="flex items-start gap-3.5 transition-colors duration-300 group-hover:text-[#EAE2D2]">
                <div className="w-5 h-5 rounded-lg border border-[#A99BFF]/40 bg-[#A99BFF]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#A99BFF]">
                  <Sparkles className="w-3 h-3" />
                </div>
                <span className="leading-relaxed">{t('cycle.night.point3')}</span>
              </li>
            </ul>
          </div>
        </Reveal>

        {/* Day Phase Card: Warm soft golden light accents + sun icon */}
        <Reveal delay={150}>
          <div
            className="h-full rounded-3xl p-7 sm:p-9 border border-[#D4AF37]/35 bg-gradient-to-b from-[#D4AF37]/[0.10] via-[#1A1208]/70 to-[#050508]/90 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(212,175,55,0.4)] hover:border-[#D4AF37]/70 relative overflow-hidden group"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-2xl border border-[#D4AF37]/50 bg-[#D4AF37]/20 text-[#F0D78C] shadow-[0_0_20px_rgba(212,175,55,0.4)] group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  <Sun className="w-6 h-6 sm:w-7 sm:h-7 text-[#F0D78C]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-[#F0D78C] transition-colors duration-300" style={fontCairo}>
                  {t('cycle.day.title')}
                </h3>
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/15 text-[#F0D78C] backdrop-blur-md">
                {isArabic ? "مرحلة النقاش والاقصاء" : "DAY PHASE"}
              </span>
            </div>

            <ul className="space-y-4 text-sm sm:text-base text-[#9C8FA8]" style={fontTajawal}>
              <li className="flex items-start gap-3.5 transition-colors duration-300 group-hover:text-[#EAE2D2]">
                <div className="w-5 h-5 rounded-lg border border-[#D4AF37]/40 bg-[#D4AF37]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#F0D78C]">
                  <Vote className="w-3 h-3" />
                </div>
                <span className="leading-relaxed">{t('cycle.day.point1')}</span>
              </li>
              <li className="flex items-start gap-3.5 transition-colors duration-300 group-hover:text-[#EAE2D2]">
                <div className="w-5 h-5 rounded-lg border border-[#D4AF37]/40 bg-[#D4AF37]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#F0D78C]">
                  <Flame className="w-3 h-3" />
                </div>
                <span className="leading-relaxed">{t('cycle.day.point2')}</span>
              </li>
              <li className="flex items-start gap-3.5 transition-colors duration-300 group-hover:text-[#EAE2D2]">
                <div className="w-5 h-5 rounded-lg border border-[#D4AF37]/40 bg-[#D4AF37]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#F0D78C]">
                  <Sparkles className="w-3 h-3" />
                </div>
                <span className="leading-relaxed">{t('cycle.day.point3')}</span>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>

      {/* Quote Banner */}
      <Reveal delay={250}>
        <div className="mt-16 p-8 sm:p-10 rounded-3xl border border-[#D4AF37]/35 bg-gradient-to-r from-black/80 via-[#D4AF37]/[0.08] to-black/80 text-center relative overflow-hidden backdrop-blur-xl max-w-3xl mx-auto shadow-2xl group hover:border-[#D4AF37]/60 transition-all duration-500">
          <Quote className="w-12 h-12 text-[#D4AF37]/20 absolute top-4 left-4 rtl:right-4 rtl:left-auto pointer-events-none group-hover:text-[#D4AF37]/30 transition-colors" />
          <p
            className="text-xl sm:text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-[#F0D78C] via-[#D4AF37] to-[#F0D78C] bg-clip-text text-transparent leading-relaxed"
            style={{ fontFamily: isArabic ? "'Aref Ruqaa', serif" : "'Cinzel', serif" }}
          >
            "{t('cycle.quote')}"
          </p>
        </div>
      </Reveal>
    </section>
  );
}
