import { Analytics } from "@vercel/analytics/react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState, lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { ArrowUp } from "lucide-react";
import {
  BackgroundEffects,
  Header,
  Hero,
  About,
  Cycle,
  Interactions,
  Roles,
  Goals,
  Footer,
  SEO,
} from "./components";

// Lazy-load secondary page routes to keep initial bundle size minimal
const CharacterDetail = lazy(() => import("./components/pages/CharacterDetail").then(m => ({ default: m.CharacterDetail })));
const PrivacyPolicy = lazy(() => import("./components/pages/PrivacyPolicy").then(m => ({ default: m.PrivacyPolicy })));
const AppAds = lazy(() => import("./components/pages/AppAds").then(m => ({ default: m.AppAds })));
const NotFound = lazy(() => import("./components/pages/NotFound").then(m => ({ default: m.NotFound })));

function PageFallback() {
  return (
    <div className="min-h-screen bg-[#050308] text-[#EAE2D2] flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-[#D4AF37] border-t-transparent animate-spin" />
    </div>
  );
}

export default function App() {
  const location = useLocation();
  const { i18n } = useTranslation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
          
          if (scrolled > 200 && (maxScroll - scrolled > 150)) {
            setShowScrollTop(true);
          } else {
            setShowScrollTop(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Handle route changes and hash scrolling (#roles, #about, etc.)
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const scrollToHash = () => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };

      scrollToHash();
      const timer = setTimeout(scrollToHash, 80);
      return () => clearTimeout(timer);
    } else if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  // Update HTML lang and dir based on current language
  useEffect(() => {
    const isArabic = i18n.language === 'ar';
    document.documentElement.lang = isArabic ? 'ar' : 'en';
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
  }, [i18n.language]);

  return (
    <div
      id="top"
      className="relative min-h-screen bg-[#050308] text-[#EAE2D2] overflow-x-clip selection:bg-[#C6A369]/30"
    >
      <Analytics />
      <BackgroundEffects />
      <Header />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={
            <>
              <SEO />
              <Hero />
              <About />
              <Cycle />
              <Interactions />
              <Roles />
              <Goals />
              <Footer />
            </>
          } />
          <Route path="/character/:characterName" element={<CharacterDetail />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/app-ads.txt" element={<AppAds />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      {/* Premium Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 rtl:left-6 rtl:right-auto sm:bottom-8 sm:right-8 sm:rtl:left-8 z-[9999] w-9.5 h-9.5 flex items-center justify-center rounded-full bg-[#050308]/80 backdrop-blur-md border border-[#C6A369]/30 text-[#C6A369]/70 transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:border-[#C6A369] hover:text-[#EAD6A8] hover:shadow-[0_0_20px_rgba(198,163,105,0.5)] hover:-translate-y-1 active:scale-90 ${
          showScrollTop
            ? "opacity-60 hover:opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-50 pointer-events-none"
        }`}
        aria-label={i18n.language === 'ar' ? "العودة إلى الأعلى" : "Scroll to top"}
      >
        <ArrowUp className="w-4.5 h-4.5" />
      </button>
    </div>
  );
}
