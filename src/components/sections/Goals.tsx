import { Reveal, Eyebrow } from "../ui";
import { useTranslation } from "react-i18next";
import { Crown, Moon, Scale, Sparkles } from "lucide-react";

export function Goals() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const fontCairo = { fontFamily: isArabic ? "'Cairo', sans-serif" : "'Cinzel', serif" };
  const fontTajawal = { fontFamily: isArabic ? "'Tajawal', sans-serif" : "'Inter', sans-serif" };

  const goals = [
    {
      key: "kingdom",
      icon: Crown,
      badgeText: isArabic ? "المملكة" : "KINGDOM",
      color: "#F0D78C",
      titleColor: "bg-gradient-to-r from-[#FFF5DC] via-[#F0D78C] to-[#D4AF37] bg-clip-text text-transparent",
      borderColor: "border-[#D4AF37]/40 hover:border-[#F0D78C]",
      glowColor: "rgba(212, 175, 55, 0.4)",
      bgGradient: "from-[#D4AF37]/[0.10] via-black/50 to-black/90",
      iconBg: "bg-[#D4AF37]/20 border-[#D4AF37]/50 text-[#F0D78C] shadow-[0_0_25px_rgba(212,175,55,0.4)]",
    },
    {
      key: "shadows",
      icon: Moon,
      badgeText: isArabic ? "الظلال" : "SHADOWS",
      color: "#FF85A2",
      titleColor: "bg-gradient-to-r from-[#FF85A2] via-[#9C3357] to-[#6B1B38] bg-clip-text text-transparent",
      borderColor: "border-[#9C3357]/40 hover:border-[#FF85A2]",
      glowColor: "rgba(156, 51, 87, 0.45)",
      bgGradient: "from-[#9C3357]/[0.12] via-black/50 to-black/90",
      iconBg: "bg-[#9C3357]/20 border-[#9C3357]/50 text-[#FF85A2] shadow-[0_0_25px_rgba(156,51,87,0.45)]",
    },
    {
      key: "neutral",
      icon: Scale,
      badgeText: isArabic ? "المحايدون" : "NEUTRAL",
      color: "#D4CDFF",
      titleColor: "bg-gradient-to-r from-[#EAE2D2] via-[#A99BFF] to-[#6C5CE7] bg-clip-text text-transparent",
      borderColor: "border-[#A99BFF]/40 hover:border-[#D4CDFF]",
      glowColor: "rgba(169, 155, 255, 0.4)",
      bgGradient: "from-[#A99BFF]/[0.10] via-black/50 to-black/90",
      iconBg: "bg-[#A99BFF]/20 border-[#A99BFF]/50 text-[#D4CDFF] shadow-[0_0_25px_rgba(169,155,255,0.4)]",
    },
  ];

  return (
    <section id="goals" className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-32 scroll-mt-16">
      {/* Soft Divider Line Top */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent mb-20" />

      {/* Section Header */}
      <Reveal className="text-center mb-16 relative">
        <Eyebrow>{t('goals.subtitle')}</Eyebrow>
        <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-[#F0D78C] via-[#D4AF37] to-[#8B6914] bg-clip-text text-transparent" style={fontCairo}>
          {t('goals.title')}
        </h2>
        <p className="mt-4 text-[#9C8FA8] max-w-2xl mx-auto text-sm sm:text-base leading-relaxed" style={fontTajawal}>
          {t('goals.description')}
        </p>
      </Reveal>

      {/* Three Faction Win Condition Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative">
        {goals.map((g, i) => {
          const Icon = g.icon;
          return (
            <Reveal key={g.key} delay={i * 150}>
              <div
                className={`h-full rounded-3xl p-7 sm:p-9 text-center border ${g.borderColor} bg-gradient-to-b ${g.bgGradient} backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden group flex flex-col justify-between`}
                style={{
                  boxShadow: `0 15px 45px -20px ${g.glowColor}`,
                }}
              >
                <div>
                  {/* Top Faction Pill Badge */}
                  <div className="flex justify-center mb-6">
                    <span className="text-[11px] font-extrabold px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.04] text-[#EAE2D2] backdrop-blur-md">
                      {g.badgeText}
                    </span>
                  </div>

                  {/* Icon Node */}
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl border ${g.iconBg} flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                    <Icon className="w-8 h-8" />
                  </div>

                  <h3
                    className={`text-xl sm:text-2xl font-extrabold mb-3 ${g.titleColor}`}
                    style={fontCairo}
                  >
                    {t(`goals.${g.key}.title`)}
                  </h3>

                  <p
                    className="text-sm sm:text-base text-[#9C8FA8] leading-relaxed transition-colors duration-300 group-hover:text-[#EAE2D2]"
                    style={fontTajawal}
                  >
                    {t(`goals.${g.key}.description`)}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-center gap-1.5 text-xs text-[#D4AF37]/70 font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span style={fontTajawal}>{isArabic ? "شرط الفوز" : "Victory Condition"}</span>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
