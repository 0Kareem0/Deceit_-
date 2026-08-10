import { Reveal, Eyebrow } from "../ui";
import { INTERACTIONS } from "../../data/gameData";

export function Interactions() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-20">
      <Reveal className="text-center mb-14">
        <Eyebrow>الجزء المهم</Eyebrow>
        <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold" style={{ fontFamily: "'Cairo', sans-serif" }}>
          القدرات تتقاطع… والنتيجة تُروى
        </h2>
        <p className="mt-4 text-[#8C82A0] max-w-2xl mx-auto" style={{ fontFamily: "'Tajawal', sans-serif" }}>
          كل قدرة قد تصطدم بقدرة أخرى، فتتغيّر نتيجة الليلة كلها بناءً على ترتيب الأحداث. فهم هذه التفاعلات مفتاح الفوز.
        </p>
      </Reveal>

      <div className="grid sm:grid-cols-3 gap-6">
        {INTERACTIONS.map((chain, i) => (
          <Reveal key={chain.title} delay={i * 120}>
            <div 
              className="h-full rounded-2xl p-6 border border-white/[0.07] bg-white/[0.015] transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_50px_-15px_rgba(198,163,105,0.25)] hover:border-[#C6A369]/40"
            >
              <h4 
                className="font-bold mb-5 text-[#C6A369] transition-colors duration-300 hover:text-[#EAD6A8]" 
                style={{ fontFamily: "'Cairo', sans-serif" }}
              >
                {chain.title}
              </h4>
              <div className="space-y-3">
                {chain.steps.map((s, idx) => (
                  <div 
                    key={s} 
                    className="flex items-center gap-3 transition-all duration-300 hover:translate-x-2"
                  >
                    <span 
                      className="shrink-0 w-7 h-7 rounded-full border border-[#C6A369]/40 text-[#C6A369] text-xs flex items-center justify-center transition-all duration-300 hover:border-[#C6A369] hover:bg-[#C6A369]/10"
                    >
                      {idx + 1}
                    </span>
                    <span 
                      className="text-sm text-[#EAE2D2]/90 transition-colors duration-300 hover:text-[#EAE2D2]" 
                      style={{ fontFamily: "'Tajawal', sans-serif" }}
                    >
                      {s}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
