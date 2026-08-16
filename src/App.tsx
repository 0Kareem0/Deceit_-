import { Analytics } from "@vercel/analytics/react"
import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
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

  return (
    <div
      id="top"
      dir="rtl"
      lang="ar"
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
