import { Reveal, Eyebrow } from "../ui";

export function About() {
  return (
    <section id="about" className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-28 scroll-mt-16">
      <Reveal className="text-center mb-14">
        <Eyebrow>كيف تُلعب ديسيت؟</Eyebrow>
        <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold" style={{ fontFamily: "'Cairo', sans-serif" }}>
          اكشف الخداع قبل أن يبتلع الظلام المملكة
        </h2>
        <p className="mt-5 max-w-3xl mx-auto text-[#8C82A0] leading-relaxed" style={{ fontFamily: "'Tajawal', sans-serif" }}>
          ديسيت لعبة خداع اجتماعي جماعية. يحصل كل لاعب على دور سري وقدرة خاصة، ثم يحاول قراءة نوايا الآخرين
          واتخاذ القرارات الصحيحة قبل أن يحسم أحد الفريقين المعركة.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6">
        <Reveal delay={0}>
          <div 
            className="h-full rounded-2xl p-8 border border-[#C6A369]/20 bg-gradient-to-b from-[#C6A369]/[0.05] to-transparent shadow-[0_20px_60px_-30px_rgba(198,163,105,0.35)] transition-all duration-500 hover:scale-105 hover:shadow-[0_25px_70px_-20px_rgba(198,163,105,0.5)] hover:border-[#C6A369]/40"
          >
            <div className="text-5xl mb-4 transition-transform duration-300 hover:scale-110">🌙</div>
            <h3 className="text-2xl font-bold mb-3 transition-colors duration-300 hover:text-[#C6A369]" style={{ fontFamily: "'Aref Ruqaa', serif" }}>ليلٌ مليء بالأسرار</h3>
            <p className="text-[#8C82A0] leading-relaxed transition-colors duration-300 hover:text-[#EAE2D2]/90" style={{ fontFamily: "'Tajawal', sans-serif" }}>
              عند حلول الليل يستخدم كل دور قدرته سرًا: الظلال يخططون لهجومهم، بينما يحاول الحارس والطبيب
              والمحققون حماية المملكة وكشف ما يحدث بعيدًا عن الأعين.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div 
            className="h-full rounded-2xl p-8 border border-[#9C3357]/25 bg-gradient-to-b from-[#9C3357]/[0.07] to-transparent shadow-[0_20px_60px_-30px_rgba(156,51,87,0.4)] transition-all duration-500 hover:scale-105 hover:shadow-[0_25px_70px_-20px_rgba(156,51,87,0.6)] hover:border-[#9C3357]/50"
          >
            <div className="text-5xl mb-4 transition-transform duration-300 hover:scale-110">☀️</div>
            <h3 className="text-2xl font-bold mb-3 transition-colors duration-300 hover:text-[#9C3357]" style={{ fontFamily: "'Aref Ruqaa', serif" }}>نهارٌ للشك والتصويت</h3>
            <p className="text-[#8C82A0] leading-relaxed transition-colors duration-300 hover:text-[#EAE2D2]/90" style={{ fontFamily: "'Tajawal', sans-serif" }}>
              في النهار يتناقش الجميع حول أحداث الليلة. اجمع الأدلة، اكتشف التناقضات، ثم صوّت لطرد اللاعب
              الذي تظن أنه يخفي ولاءه الحقيقي — لكن انتبه، فالظلال يكذبون بإتقان.
            </p>
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div className="h-full rounded-2xl p-8 border border-[#8C82A0]/25 bg-gradient-to-b from-[#8C82A0]/[0.07] to-transparent shadow-[0_20px_60px_-30px_rgba(140,130,160,0.4)] transition-all duration-500 hover:scale-105 hover:shadow-[0_25px_70px_-20px_rgba(140,130,160,0.6)] hover:border-[#8C82A0]/50">
            <div className="text-5xl mb-4 transition-transform duration-300 hover:scale-110">⚔️</div>
            <h3 className="text-2xl font-bold mb-3 transition-colors duration-300 hover:text-[#EAE2D2]" style={{ fontFamily: "'Aref Ruqaa', serif" }}>طريقان للفوز</h3>
            <p className="text-[#8C82A0] leading-relaxed transition-colors duration-300 hover:text-[#EAE2D2]/90" style={{ fontFamily: "'Tajawal', sans-serif" }}>
              تفوز المملكة بكشف الظلال وإخراجهم من اللعبة. أما الظلال فيفوزون عندما يسيطرون على المملكة.
              قدراتك مهمة، لكن الإقناع والثقة والخداع هي ما تصنع النتيجة.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
