import { Moon, Sun } from "lucide-react";
import { Reveal, Eyebrow } from "../ui";

export function Cycle() {
  return (
    <section id="cycle" className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-20 scroll-mt-16">
      <Reveal className="text-center mb-14">
        <Eyebrow>دورة اللعب</Eyebrow>
        <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold" style={{ fontFamily: "'Cairo', sans-serif" }}>
          كل دورة تبدأ بالظلام، وتنتهي بالحقيقة
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-6">
        <Reveal>
          <div 
            className="h-full rounded-2xl p-8 border border-white/[0.07] bg-white/[0.015] transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_50px_-15px_rgba(198,163,105,0.3)] hover:border-[#C6A369]/30"
          >
            <div className="flex items-center gap-3 mb-5">
              <Moon className="w-6 h-6 text-[#C6A369] transition-transform duration-300 hover:scale-110" />
              <h3 className="text-xl font-bold transition-colors duration-300 hover:text-[#C6A369]" style={{ fontFamily: "'Cairo', sans-serif" }}>الليل</h3>
            </div>
            <ul className="space-y-3 text-[#8C82A0]" style={{ fontFamily: "'Tajawal', sans-serif" }}>
              <li className="flex gap-2 transition-colors duration-300 hover:text-[#EAE2D2]/90"><span className="text-[#C6A369]">—</span> كل شخصية تستخدم قدرتها بدورها.</li>
              <li className="flex gap-2 transition-colors duration-300 hover:text-[#EAE2D2]/90"><span className="text-[#C6A369]">—</span> الظلال يتفقون سرًا على هدف الليلة.</li>
              <li className="flex gap-2 transition-colors duration-300 hover:text-[#EAE2D2]/90"><span className="text-[#C6A369]">—</span> بعض القدرات تحمي، وبعضها يخدع، وبعضها يقتل.</li>
            </ul>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div 
            className="h-full rounded-2xl p-8 border border-white/[0.07] bg-white/[0.015] transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_50px_-15px_rgba(234,214,168,0.3)] hover:border-[#EAD6A8]/30"
          >
            <div className="flex items-center gap-3 mb-5">
              <Sun className="w-6 h-6 text-[#EAD6A8] transition-transform duration-300 hover:scale-110" />
              <h3 className="text-xl font-bold transition-colors duration-300 hover:text-[#EAD6A8]" style={{ fontFamily: "'Cairo', sans-serif" }}>النهار</h3>
            </div>
            <ul className="space-y-3 text-[#8C82A0]" style={{ fontFamily: "'Tajawal', sans-serif" }}>
              <li className="flex gap-2 transition-colors duration-300 hover:text-[#EAE2D2]/90"><span className="text-[#EAD6A8]">—</span> يناقش اللاعبون ما حدث خلال الليل.</li>
              <li className="flex gap-2 transition-colors duration-300 hover:text-[#EAE2D2]/90"><span className="text-[#EAD6A8]">—</span> الاتهامات تتقاطع مع الأدلة والشكوك.</li>
              <li className="flex gap-2 transition-colors duration-300 hover:text-[#EAE2D2]/90"><span className="text-[#EAD6A8]">—</span> تصويت جماعي يقرر من يُطرد من اللعبة.</li>
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal delay={250}>
        <p
          className="mt-14 text-center text-2xl sm:text-3xl text-[#EAE2D2]/90 max-w-3xl mx-auto"
          style={{ fontFamily: "'Aref Ruqaa', serif" }}
        >
          "اللعبة لا تُقاس بمعرفة الأدوار فقط، بل بفهم ما حدث في الظلام… ولماذا حدث."
        </p>
      </Reveal>
    </section>
  );
}
