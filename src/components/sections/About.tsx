import { Reveal, Eyebrow } from "../ui";

export function About() {
  return (
    <section id="about" className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-28 scroll-mt-16">
      <Reveal className="text-center mb-14">
        <Eyebrow>كيف تُلعب ديسيت؟</Eyebrow>
        <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold" style={{ fontFamily: "'Cairo', sans-serif" }}>
          تعلّم الأساسيات في 3 خطوات
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
            <div className="text-5xl mb-4 transition-transform duration-300 hover:scale-110">1️⃣</div>
            <h3 className="text-2xl font-bold mb-3 transition-colors duration-300 hover:text-[#C6A369]" style={{ fontFamily: "'Aref Ruqaa', serif" }}>احصل على دورك السري</h3>
            <p className="text-[#8C82A0] leading-relaxed transition-colors duration-300 hover:text-[#EAE2D2]/90" style={{ fontFamily: "'Tajawal', sans-serif" }}>
              في بداية اللعبة، تحصل على دور سري واحد: إما من المملكة (الخير) أو من الظلال (الشر). كل دور له قدرة خاصة خاصة، مثل الحماية، القتل، التحقيق، أو التخريب.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div 
            className="h-full rounded-2xl p-8 border border-[#9C3357]/25 bg-gradient-to-b from-[#9C3357]/[0.07] to-transparent shadow-[0_20px_60px_-30px_rgba(156,51,87,0.4)] transition-all duration-500 hover:scale-105 hover:shadow-[0_25px_70px_-20px_rgba(156,51,87,0.6)] hover:border-[#9C3357]/50"
          >
            <div className="text-5xl mb-4 transition-transform duration-300 hover:scale-110">2️⃣</div>
            <h3 className="text-2xl font-bold mb-3 transition-colors duration-300 hover:text-[#9C3357]" style={{ fontFamily: "'Aref Ruqaa', serif" }}>استخدم قدرتك في الليل</h3>
            <p className="text-[#8C82A0] leading-relaxed transition-colors duration-300 hover:text-[#EAE2D2]/90" style={{ fontFamily: "'Tajawal', sans-serif" }}>
              كل ليلة، تستخدم دورك قدرته سرًا: الظلال يهاجمون، بينما المملكة تحمي وتحقق. لا أحد يعرف ما فعلته في الليل، وكل الأحداث تُكشف في النهار.
            </p>
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div className="h-full rounded-2xl p-8 border border-[#8C82A0]/25 bg-gradient-to-b from-[#8C82A0]/[0.07] to-transparent shadow-[0_20px_60px_-30px_rgba(140,130,160,0.4)] transition-all duration-500 hover:scale-105 hover:shadow-[0_25px_70px_-20px_rgba(140,130,160,0.6)] hover:border-[#8C82A0]/50">
            <div className="text-5xl mb-4 transition-transform duration-300 hover:scale-110">3️⃣</div>
            <h3 className="text-2xl font-bold mb-3 transition-colors duration-300 hover:text-[#EAE2D2]" style={{ fontFamily: "'Aref Ruqaa', serif" }}>ناقش وصوّت في النهار</h3>
            <p className="text-[#8C82A0] leading-relaxed transition-colors duration-300 hover:text-[#EAE2D2]/90" style={{ fontFamily: "'Tajawal', sans-serif" }}>
              في النهار، تناقش مع اللاعبين ما حدث، اجمع الأدلة، واكشف التناقضات. ثم صوّت لطرد اللاعب الذي تظن أنه من الظلال. انتبه: الظلال يكذبون لإخفاء هويتهم!
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={400}>
        <div className="mt-12 rounded-2xl p-8 border border-white/[0.07] bg-white/[0.015] text-center">
          <h3 className="text-xl font-bold mb-4 text-[#EAE2D2]" style={{ fontFamily: "'Cairo', sans-serif" }}>
            💡 نصيحة للمبتدئين
          </h3>
          <p className="text-[#8C82A0] leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: "'Tajawal', sans-serif" }}>
            المفتاح للفوز ليس معرفة الأدور فقط، بل مراقبة من يتحدث كثيرًا، ومن يتهرب من الإجابة، ومن يدافع عن لاعبين معينين. كن ذكيًا في اختيار من تثق به!
          </p>
        </div>
      </Reveal>
    </section>
  );
}
