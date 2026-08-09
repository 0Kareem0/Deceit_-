import { ShieldCheck } from "lucide-react";
import { Reveal, DownloadButtons } from "../ui";

export function Footer() {
  return (
    <>
      {/* نداء أخير للتحميل */}
      <section className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 py-28 text-center">
        <Reveal>
          <ShieldCheck className="w-10 h-10 mx-auto text-[#C6A369] mb-5" />
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-4" style={{ fontFamily: "'Cairo', sans-serif" }}>
            العرش ينتظر… فمن يحكمه؟
          </h2>
          <p className="text-[#8C82A0] mb-10 max-w-xl mx-auto" style={{ fontFamily: "'Tajawal', sans-serif" }}>
            انضم إلى المملكة أو تسلّل بين الظلال — التحميل متاح الآن.
          </p>
          <div className="flex justify-center">
            <DownloadButtons size="lg" />
          </div>
        </Reveal>
      </section>

      {/* تذييل */}
      <footer className="relative z-10 border-t border-white/[0.05] py-10 px-5 bg-black/30">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xl font-bold" style={{ fontFamily: "'Aref Ruqaa', serif" }}>ديسيت</span>
          <p className="text-xs text-[#8C82A0]" style={{ fontFamily: "'Tajawal', sans-serif" }}>
            © 2026 Deceit — جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>
    </>
  );
}
