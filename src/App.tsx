import { Analytics } from "@vercel/analytics/react"
import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"
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
import { CharacterDetail } from "./components/pages/CharacterDetail";

export default function App() {
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    // Handle hash scrolling when navigating to home page with hash
    if (location.pathname === '/' && location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  // Update HTML lang and dir based on current language
  useEffect(() => {
    const isArabic = i18n.language === 'ar';
    document.documentElement.lang = isArabic ? 'ar' : 'en';
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
  }, [i18n.language]);

  return (
    <div
      id="top"
      className="relative min-h-screen bg-[#050308] text-[#EAE2D2] overflow-x-hidden selection:bg-[#C6A369]/30"
    >
      <Analytics />
      <BackgroundEffects />
      <Header />
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
      </Routes>
    </div>
  );
}
