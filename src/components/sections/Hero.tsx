import { ChevronDown } from "lucide-react";
import { Eyebrow, DownloadButtons, Starfield } from "../ui";

export function Hero() {
  return (
    <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-5 pt-24 overflow-hidden">
      <Starfield count={70} />

      <div
        className="absolute top-16 sm:top-10 w-40 h-40 sm:w-56 sm:h-56 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(198,163,105,0.35) 0%, transparent 70%)",
          animation: "crescentGlow 5s ease-in-out infinite",
        }}
      />

      <div className="relative">
        <Eyebrow>لعبة الخداع والتضليل</Eyebrow>
        <h1
          className="mt-5 text-[20vw] sm:text-[10rem] leading-none font-bold bg-gradient-to-b from-[#F1E4C3] via-[#C6A369] to-[#6B1B38] bg-clip-text text-transparent drop-shadow-[0_0_60px_rgba(198,163,105,0.25)] transition-transform duration-700 hover:scale-105"
          style={{ fontFamily: "'Scheherazade New', serif", animation: "floaty 6s ease-in-out infinite" }}
        >
          ديسيت
        </h1>
      </div>

      <p 
        className="mt-4 text-lg sm:text-2xl text-[#EAE2D2]/90 max-w-2xl relative transition-all duration-300 hover:text-[#EAE2D2] hover:scale-105" 
        style={{ fontFamily: "'Cairo', sans-serif" }}
      >
        لعبة خداع اجتماعي مع أدوار خاصة وقدرات فريدة
      </p>
      <p 
        className="mt-4 max-w-xl text-[#8C82A0] leading-relaxed relative transition-all duration-300 hover:text-[#EAE2D2]/80 hover:scale-105" 
        style={{ fontFamily: "'Tajawal', sans-serif" }}
      >
        أنت جزء من فريقين: المملكة (الخير) أو الظلال (الشر). كل ليلة تستخدم قدرتك سرًا، وكل نهار تناقش وتصوّت للكشف عن الخونة. هل ستكشف الظلال قبل أن يسيطروا على المملكة؟
      </p>

      <div id="download" className="mt-10 scroll-mt-24 relative">
        <DownloadButtons size="lg" />
        <p 
          className="mt-3 text-xs text-[#8C82A0] transition-colors duration-300 hover:text-[#EAE2D2]/90" 
          style={{ fontFamily: "'Tajawal', sans-serif" }}
        >
          التحميل متاح حاليًا على أندرويد — نسخة iOS في الطريق
        </p>
      </div>

  <div
  className="mt-14 flex items-center gap-8 text-[#8C82A0] text-sm relative transition-all duration-300 hover:text-[#EAE2D2]/90 hover:scale-105"
  style={{ fontFamily: "'Cairo', sans-serif" }}
>
  <span  className="transition-transform duration-300 hover:scale-110" >⚔️ فريقان متصارعان</span>

  <span className="w-px h-4 bg-[#8C82A0]/25" />

  <span  className="transition-transform duration-300 hover:scale-110" >🎭 شخصيات محايدة</span>

  <span className="w-px h-4 bg-[#8C82A0]/25" />

  <span  className="transition-transform duration-300 hover:scale-110" >🌙 ليل ونهار</span>
</div>

      <ChevronDown className="mt-16 w-6 h-6 text-[#8C82A0] animate-bounce relative transition-transform duration-300 hover:scale-110 hover:text-[#C6A369]" />
    </section>
  );
}
