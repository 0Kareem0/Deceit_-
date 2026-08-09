import { Reveal, Eyebrow } from "../ui";

export function Goals() {
  const goals = [
    { icon: "👑", title: "المملكة", color: "#C6A369", desc: "القضاء على كل الظلال والصمود أمام هجماتهم الليلية." },
    { icon: "🌑", title: "الظلال", color: "#9C3357", desc: "التخلص من أبناء المملكة حتى تمتلك السيطرة الكاملة على القرار." },
    { icon: "❔", title: "المحايدون", color: "#8C82A0", desc: "لكل محايد غايته الخاصة، منفصلة عن صراع المملكة والظلال." },
  ];

  return (
    <section id="goals" className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-20 scroll-mt-16">
      <Reveal className="text-center mb-14">
        <Eyebrow>من يفوز؟</Eyebrow>
        <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold" style={{ fontFamily: "'Cairo', sans-serif" }}>
          كل فريق له نصره الخاص
        </h2>
      </Reveal>

      <div className="grid sm:grid-cols-3 gap-6">
        {goals.map((g, i) => (
          <Reveal key={g.title} delay={i * 120}>
            <div 
              className="h-full rounded-2xl p-8 text-center border border-white/[0.07] bg-white/[0.015] transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)] hover:border-white/[0.15]"
            >
              <div 
                className="text-4xl mb-4 transition-transform duration-300 hover:scale-110"
              >
                {g.icon}
              </div>
              <h3 
                className="text-xl font-bold mb-2 transition-colors duration-300" 
                style={{ color: g.color, fontFamily: "'Cairo', sans-serif" }}
              >
                {g.title}
              </h3>
              <p 
                className="text-sm text-[#8C82A0] leading-relaxed transition-colors duration-300 hover:text-[#EAE2D2]/90" 
                style={{ fontFamily: "'Tajawal', sans-serif" }}
              >
                {g.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
