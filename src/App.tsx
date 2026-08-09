import { useScrollProgress } from "./hooks/useScrollProgress";
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
  const progress = useScrollProgress();

  return (
    <div
      dir="rtl"
      lang="ar"
      className="relative min-h-screen bg-[#050308] text-[#EAE2D2] overflow-x-hidden selection:bg-[#C6A369]/30"
    >
      <BackgroundEffects progress={progress} />
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
