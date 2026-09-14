import { Reveal, Eyebrow } from "../ui";
import { useTranslation } from "react-i18next";
import { Sparkles, Lightbulb } from "lucide-react";

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

      {/* Premium Tip Banner */}
      <Reveal delay={450}>
        <div className="mt-16 sm:mt-20 relative max-w-4xl mx-auto rounded-2xl p-6 sm:p-8 border border-[#C6A369]/30 bg-gradient-to-r from-[#050308] via-[#1A1208] to-[#050308] text-center overflow-hidden backdrop-blur-xl shadow-[0_0_40px_rgba(198,163,105,0.12)] hover:border-[#C6A369]/60 hover:shadow-[0_0_50px_rgba(198,163,105,0.25)] transition-all duration-500 group">
          {/* Ambient Lighting & Top/Bottom Hairline Glow Effects */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#C6A369]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C6A369] to-transparent opacity-60" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C6A369]/40 to-transparent opacity-40" />

          {/* Faded Background Lightbulb Icon */}
          <Lightbulb className="absolute -right-4 -bottom-4 rtl:left-4 rtl:right-auto w-32 h-32 text-[#C6A369]/[0.05] group-hover:text-[#C6A369]/[0.10] transition-colors duration-500 pointer-events-none select-none" />

          {/* Header Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#C6A369]/20 via-[#6B1B38]/30 to-[#C6A369]/20 border border-[#C6A369]/40 text-xs font-extrabold text-[#EAD6A8] mb-4 shadow-[0_0_15px_rgba(198,163,105,0.2)]">
            <Sparkles className="w-4 h-4 text-[#C6A369] animate-pulse" />
            <span style={{ fontFamily: "'Tajawal', sans-serif" }}>
              {isArabic ? "نصيحة ذهبية" : "GOLDEN TIP"}
            </span>
          </div>

          {/* Title */}
          <h3
            className="text-xl sm:text-2xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#EAD6A8] via-[#C6A369] to-[#EAD6A8]"
            style={{ fontFamily: "'Cairo', sans-serif" }}
          >
            {t('about.tip.title')}
          </h3>

          {/* Description */}
          <p
            className="text-sm sm:text-base text-[#9C8FA8] group-hover:text-[#EAE2D2] transition-colors duration-300 leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: "'Tajawal', sans-serif" }}
          >
            {t('about.tip.description')}
          </p>
        </div>
      </Reveal>
    </section>
  );
}