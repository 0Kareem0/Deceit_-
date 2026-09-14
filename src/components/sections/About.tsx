import { Reveal, Eyebrow } from "../ui";
import { useTranslation } from "react-i18next";
import { Sparkles } from "lucide-react";

export function About() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const steps = [
    {
      num: isArabic ? "١" : "1",
      titleKey: "about.step1.title",
      descKey: "about.step1.description",
    },
    {
      num: isArabic ? "٢" : "2",
      titleKey: "about.step2.title",
      descKey: "about.step2.description",
    },
    {
      num: isArabic ? "٣" : "3",
      titleKey: "about.step3.title",
      descKey: "about.step3.description",
    },
  ];

  return (
    <section id="about" className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-24 sm:py-32 scroll-mt-16">
      {/* Background ambient light */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050308]/30 via-[#C6A369]/[0.02] to-[#050308]/30 pointer-events-none rounded-3xl" />

      <Reveal className="text-center mb-16 sm:mb-20 relative">
        <Eyebrow>{t('about.howToPlay')}</Eyebrow>
        <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-[#EAD6A8] via-[#C6A369] to-[#8B6914] bg-clip-text text-transparent" style={{ fontFamily: "'Cairo', sans-serif" }}>
          {t('about.learnBasics')}
        </h2>
        <p className="mt-5 max-w-3xl mx-auto text-[#9C8FA8] leading-relaxed text-sm sm:text-base" style={{ fontFamily: "'Tajawal', sans-serif" }}>
          {t('about.gameDescription')}
        </p>
      </Reveal>

      {/* Connected Stepper Flow */}
      <div className="relative max-w-5xl mx-auto">
        {/* Horizontal Line connecting steps on Desktop */}
        <div className="hidden lg:block absolute top-7 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-[#C6A369]/20 via-[#C6A369]/70 to-[#C6A369]/20 z-0" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 relative z-10">
          {steps.map((item, index) => (
            <Reveal key={index} delay={index * 150}>
              <div className="flex flex-col items-center text-center group h-full">
                {/* Circular Number Badge Node */}
                <div className="relative mb-6">
                  {/* Outer Glow Ring */}
                  <div className="absolute -inset-2 rounded-full bg-[#C6A369]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div
                    className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#050308] border-2 border-[#C6A369]/60 group-hover:border-[#C6A369] group-hover:scale-110 shadow-[0_0_20px_rgba(198,163,105,0.25)] group-hover:shadow-[0_0_30px_rgba(198,163,105,0.6)] text-[#EAD6A8] font-bold text-xl sm:text-2xl flex items-center justify-center transition-all duration-500"
                    style={{ fontFamily: "'Cairo', sans-serif" }}
                  >
                    {item.num}
                  </div>
                </div>

                {/* Card Container */}
                <div className="flex-1 w-full rounded-2xl p-6 sm:p-7 border border-white/10 bg-white/[0.02] backdrop-blur-md transition-all duration-500 group-hover:border-[#C6A369]/40 group-hover:bg-white/[0.04] group-hover:shadow-[0_15px_35px_-15px_rgba(198,163,105,0.3)] flex flex-col justify-start">
                  <h3
                    className="text-lg sm:text-xl font-bold mb-3 text-white group-hover:text-[#EAD6A8] transition-colors duration-300"
                    style={{ fontFamily: "'Aref Ruqaa', serif" }}
                  >
                    {t(item.titleKey)}
                  </h3>

                  <p
                    className="text-sm sm:text-base text-[#9C8FA8] leading-relaxed group-hover:text-[#EAE2D2] transition-colors duration-300"
                    style={{ fontFamily: "'Tajawal', sans-serif" }}
                  >
                    {t(item.descKey)}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Tip Banner */}
      <Reveal delay={450}>
        <div className="mt-14 rounded-2xl p-6 sm:p-8 border border-white/10 bg-gradient-to-r from-white/[0.02] via-[#C6A369]/[0.05] to-white/[0.02] text-center relative overflow-hidden backdrop-blur-md">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C6A369]/15 border border-[#C6A369]/30 text-xs font-bold text-[#EAD6A8] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A369]" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold mb-2 text-[#EAE2D2]" style={{ fontFamily: "'Cairo', sans-serif" }}>
            {t('about.tip.title')}
          </h3>
          <p className="text-sm sm:text-base text-[#9C8FA8] leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: "'Tajawal', sans-serif" }}>
            {t('about.tip.description')}
          </p>
        </div>
      </Reveal>
    </section>
  );
}