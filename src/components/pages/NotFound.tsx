import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Home, ShieldCheck, AlertTriangle, ArrowRight, Ghost } from "lucide-react";
import { SEO } from "../ui/SEO";
import { Header } from "../sections/Header";
import { Footer } from "../sections/Footer";

export function NotFound() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      dir={isArabic ? "rtl" : "ltr"}
      className="min-h-screen bg-[#050308] text-[#EAE2D2] selection:bg-[#C6A369]/30 relative flex flex-col justify-between overflow-x-hidden"
    >
      <SEO
        title={t("notFound.title")}
        description={t("notFound.subtitle")}
      />


      {/* Decorative ambient lighting */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] sm:h-[600px] sm:w-[600px] rounded-full bg-gradient-to-r from-[#C6A369]/15 via-[#6B1B38]/20 to-[#9C3357]/10 blur-[150px]" />
        <div className="absolute -bottom-20 right-10 h-[400px] w-[400px] rounded-full bg-[#6B1B38]/15 blur-[160px]" />
      </div>

      {/* Main 404 Hero Section */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto my-auto">
        {/* Error Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C6A369]/40 bg-gradient-to-r from-[#C6A369]/20 via-[#6B1B38]/20 to-transparent mb-8 text-xs sm:text-sm font-semibold text-[#C6A369] shadow-[0_0_25px_rgba(198,163,105,0.2)]">
          <AlertTriangle className="w-4 h-4 text-[#C6A369] animate-pulse" />
          <span style={{ fontFamily: "'Tajawal', sans-serif" }}>
            {t("notFound.badge")}
          </span>
        </div>

        {/* 404 Visual Showcase */}
        <div className="relative mb-6">
          {/* Background Glow Ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#C6A369]/30 via-[#6B1B38]/40 to-[#C6A369]/30 blur-3xl opacity-70 animate-pulse" />
          
          <div className="relative flex items-center justify-center">
            <h1
              className="text-8xl sm:text-[140px] lg:text-[180px] font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-[#EAD6A8] via-[#C6A369] to-[#4A0E23] drop-shadow-[0_10px_35px_rgba(198,163,105,0.3)] select-none leading-none"
              style={{ fontFamily: "'Cairo', sans-serif" }}
            >
              404
            </h1>
            <Ghost className="absolute w-14 h-14 sm:w-20 sm:h-20 text-[#C6A369]/70 animate-bounce duration-[3000ms] pointer-events-none drop-shadow-[0_0_15px_rgba(198,163,105,0.6)]" />
          </div>
        </div>

        {/* Title & Description */}
        <h2
          className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight"
          style={{ fontFamily: "'Cairo', sans-serif" }}
        >
          {t("notFound.heading")}
        </h2>

        <p
          className="text-base sm:text-lg text-[#9C8FA8] max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ fontFamily: "'Tajawal', sans-serif" }}
        >
          {t("notFound.subtitle")}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
          {/* Home Button */}
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#C6A369] via-[#D4B475] to-[#8B6914] text-[#050308] font-extrabold text-sm sm:text-base shadow-[0_0_25px_rgba(198,163,105,0.4)] hover:shadow-[0_0_35px_rgba(198,163,105,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 group"
            style={{ fontFamily: "'Cairo', sans-serif" }}
          >
            <Home className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
            <span>{t("notFound.backHome")}</span>
            <ArrowRight
              className={`w-4 h-4 transition-transform duration-300 ${
                isArabic
                  ? "group-hover:-translate-x-1 rotate-180"
                  : "group-hover:translate-x-1"
              }`}
            />
          </Link>

          {/* Privacy Button */}
          <Link
            to="/privacy"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl border border-white/10 bg-white/[0.04] text-[#EAE2D2] hover:bg-white/[0.08] hover:border-[#C6A369]/50 font-bold text-sm sm:text-base transition-all duration-300 group"
            style={{ fontFamily: "'Cairo', sans-serif" }}
          >
            <ShieldCheck className="w-5 h-5 text-[#C6A369]" />
            <span>{t("notFound.privacy")}</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
