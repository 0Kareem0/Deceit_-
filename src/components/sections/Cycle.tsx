import { Moon, Sun } from "lucide-react";
import { Reveal, Eyebrow } from "../ui";
import { useTranslation } from "react-i18next";

export function Cycle() {
  const { t } = useTranslation();

  return (
    <section id="cycle" className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-20 scroll-mt-16">
      <Reveal className="text-center mb-14">
        <Eyebrow>{t('cycle.title')}</Eyebrow>
        <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold" style={{ fontFamily: "'Cairo', sans-serif" }}>
          {t('cycle.subtitle')}
        </h2>
        <p className="mt-4 text-[#8C82A0] max-w-2xl mx-auto" style={{ fontFamily: "'Tajawal', sans-serif" }}>
          {t('cycle.description')}
        </p>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-6">
        <Reveal>
          <div
            className="h-full rounded-2xl p-8 border border-white/[0.07] bg-white/[0.015] transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_50px_-15px_rgba(198,163,105,0.3)] hover:border-[#C6A369]/30"
          >
            <div className="flex items-center gap-3 mb-5">
              <Moon className="w-6 h-6 text-[#C6A369] transition-transform duration-300 hover:scale-110" />
              <h3 className="text-xl font-bold transition-colors duration-300 hover:text-[#C6A369]" style={{ fontFamily: "'Cairo', sans-serif" }}>{t('cycle.night.title')}</h3>
            </div>
            <ul className="space-y-3 text-[#8C82A0]" style={{ fontFamily: "'Tajawal', sans-serif" }}>
              <li className="flex gap-2 transition-colors duration-300 hover:text-[#EAE2D2]/90"><span className="text-[#C6A369]">—</span> {t('cycle.night.point1')}</li>
              <li className="flex gap-2 transition-colors duration-300 hover:text-[#EAE2D2]/90"><span className="text-[#C6A369]">—</span> {t('cycle.night.point2')}</li>
              <li className="flex gap-2 transition-colors duration-300 hover:text-[#EAE2D2]/90"><span className="text-[#C6A369]">—</span> {t('cycle.night.point3')}</li>
            </ul>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div
            className="h-full rounded-2xl p-8 border border-white/[0.07] bg-white/[0.015] transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_50px_-15px_rgba(234,214,168,0.3)] hover:border-[#EAD6A8]/30"
          >
            <div className="flex items-center gap-3 mb-5">
              <Sun className="w-6 h-6 text-[#EAD6A8] transition-transform duration-300 hover:scale-110" />
              <h3 className="text-xl font-bold transition-colors duration-300 hover:text-[#EAD6A8]" style={{ fontFamily: "'Cairo', sans-serif" }}>{t('cycle.day.title')}</h3>
            </div>
            <ul className="space-y-3 text-[#8C82A0]" style={{ fontFamily: "'Tajawal', sans-serif" }}>
              <li className="flex gap-2 transition-colors duration-300 hover:text-[#EAE2D2]/90"><span className="text-[#EAD6A8]">—</span> {t('cycle.day.point1')}</li>
              <li className="flex gap-2 transition-colors duration-300 hover:text-[#EAE2D2]/90"><span className="text-[#EAD6A8]">—</span> {t('cycle.day.point2')}</li>
              <li className="flex gap-2 transition-colors duration-300 hover:text-[#EAE2D2]/90"><span className="text-[#EAD6A8]">—</span> {t('cycle.day.point3')}</li>
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal delay={250}>
        <p
          className="mt-14 text-center text-2xl sm:text-3xl text-[#EAE2D2]/90 max-w-3xl mx-auto"
          style={{ fontFamily: "'Aref Ruqaa', serif" }}
        >
          "{t('cycle.quote')}"
        </p>
      </Reveal>
    </section>
  );
}
