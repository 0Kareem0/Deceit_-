import { Reveal, Eyebrow } from "../ui";
import { INTERACTIONS } from "../../data/gameData";
import { useTranslation } from "react-i18next";
import { GitCommit, Sparkles } from "lucide-react";

export function Interactions() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const fontCairo = { fontFamily: isArabic ? "'Cairo', sans-serif" : "'Cinzel', serif" };
  const fontTajawal = { fontFamily: isArabic ? "'Tajawal', sans-serif" : "'Inter', sans-serif" };

  return (
    <section className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-32 scroll-mt-16">
      {/* Soft Divider Line Top */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent mb-20" />

      {/* Section Header */}
      <Reveal className="text-center mb-16 relative">
        <Eyebrow>{t('interactions.subtitle')}</Eyebrow>
        <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-[#F0D78C] via-[#D4AF37] to-[#8B6914] bg-clip-text text-transparent" style={fontCairo}>
          {t('interactions.title')}
        </h2>
        <p className="mt-4 text-[#9C8FA8] max-w-2xl mx-auto text-sm sm:text-base leading-relaxed" style={fontTajawal}>
          {t('interactions.description')}
        </p>
      </Reveal>

      {/* Three Equal Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {INTERACTIONS.map((chain, i) => (
          <Reveal key={chain.key} delay={i * 150}>
            <div
              className="h-full rounded-3xl p-6 sm:p-8 border border-[#D4AF37]/30 bg-gradient-to-b from-white/[0.03] via-black/40 to-black/80 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_-15px_rgba(212,175,55,0.3)] hover:border-[#D4AF37]/70 relative overflow-hidden group flex flex-col justify-between"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-5">
                  <span className="p-2 rounded-xl border border-[#D4AF37]/40 bg-[#D4AF37]/15 text-[#F0D78C] shadow-md group-hover:scale-110 transition-transform duration-300">
                    <GitCommit className="w-5 h-5" />
                  </span>
                  <span className="text-[11px] font-extrabold px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#F0D78C]">
                    {isArabic ? `سلسلة ٠${i + 1}` : `CHAIN 0${i + 1}`}
                  </span>
                </div>

                <h4
                  className="font-extrabold mb-6 text-base sm:text-lg text-white group-hover:text-[#F0D78C] transition-colors duration-300 leading-snug"
                  style={fontCairo}
                >
                  {t(`interactions.${chain.key}.title`)}
                </h4>

                <div className="space-y-4">
                  {chain.steps.map((s, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3.5 transition-all duration-300 group/step"
                    >
                      {/* Elegant Gold Circular Badge Node */}
                      <span
                        className="shrink-0 w-7 h-7 rounded-full border border-[#D4AF37]/60 bg-[#050508] text-[#F0D78C] text-xs font-bold flex items-center justify-center shadow-[0_0_12px_rgba(212,175,55,0.3)] transition-all duration-300 group-hover/step:border-[#F0D78C] group-hover/step:bg-[#D4AF37] group-hover/step:text-[#050508] group-hover/step:scale-110 mt-0.5"
                        style={{ fontFamily: "'Cairo', sans-serif" }}
                      >
                        {isArabic ? ["١", "٢", "٣", "٤"][idx] || idx + 1 : `0${idx + 1}`}
                      </span>
                      <span
                        className="text-xs sm:text-sm text-[#9C8FA8] leading-relaxed transition-colors duration-300 group-hover/step:text-[#EAE2D2]"
                        style={fontTajawal}
                      >
                        {t(`interactions.${chain.key}.steps.${idx}`)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Gold Line */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#D4AF37]/70 font-semibold">
                <span style={fontTajawal}>{isArabic ? "تفاعل استراتيجي" : "Tactical Combo"}</span>
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
