import { Reveal, Eyebrow } from "../ui";

export function About() {
  return (
    <section id="about" className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-28 scroll-mt-16">
      <Reveal className="text-center mb-14">
        <Eyebrow>فريقان، حقيقة واحدة</Eyebrow>
        <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold" style={{ fontFamily: "'Cairo', sans-serif" }}>
          من يحمي المملكة… ومن يخونها؟
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-6">
        <Reveal delay={0}>
          <div 
            className="h-full rounded-2xl p-8 border border-[#C6A369]/20 bg-gradient-to-b from-[#C6A369]/[0.05] to-transparent shadow-[0_20px_60px_-30px_rgba(198,163,105,0.35)] transition-all duration-500 hover:scale-105 hover:shadow-[0_25px_70px_-20px_rgba(198,163,105,0.5)] hover:border-[#C6A369]/40"
          >
            <div className="text-5xl mb-4 transition-transform duration-300 hover:scale-110">👑</div>
            <h3 className="text-2xl font-bold mb-3 transition-colors duration-300 hover:text-[#C6A369]" style={{ fontFamily: "'Aref Ruqaa', serif" }}>المملكة</h3>
            <p className="text-[#8C82A0] leading-relaxed transition-colors duration-300 hover:text-[#EAE2D2]/90" style={{ fontFamily: "'Tajawal', sans-serif" }}>
              لاعبو المملكة لا يعرفون بعضهم بالكامل، لكنهم يشتركون في هدف واحد: كشف الظلال قبل فوات
              الأوان. يعتمدون على قدرات التحقيق والحماية، وعلى نقاشات النهار لتجميع الأدلة وتوجيه
              التصويت نحو المذنبين الحقيقيين.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div 
            className="h-full rounded-2xl p-8 border border-[#9C3357]/25 bg-gradient-to-b from-[#9C3357]/[0.07] to-transparent shadow-[0_20px_60px_-30px_rgba(156,51,87,0.4)] transition-all duration-500 hover:scale-105 hover:shadow-[0_25px_70px_-20px_rgba(156,51,87,0.6)] hover:border-[#9C3357]/50"
          >
            <div className="text-5xl mb-4 transition-transform duration-300 hover:scale-110">🌑</div>
            <h3 className="text-2xl font-bold mb-3 transition-colors duration-300 hover:text-[#9C3357]" style={{ fontFamily: "'Aref Ruqaa', serif" }}>الظلال</h3>
            <p className="text-[#8C82A0] leading-relaxed transition-colors duration-300 hover:text-[#EAE2D2]/90" style={{ fontFamily: "'Tajawal', sans-serif" }}>
              الظلال يعرفون بعضهم، ويتحدون في الخفاء كل ليلة لاختيار ضحيتهم التالية. مهمتهم لا تقتصر
              على القتل، بل على الإقناع — فكل ظلّ يزرع الشك في مكانه الصحيح حتى تنهار ثقة المملكة من
              الداخل.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
