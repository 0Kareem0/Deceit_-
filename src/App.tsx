import { Analytics } from "@vercel/analytics/react"
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
} from "./components";

export default function App() {
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
      <Hero />
      <About />
      <Cycle />
      <Interactions />
      <Roles />
      <Goals />
      <Footer />
    </div>
  );
}
