import { useState, useEffect } from "react";
import { Crown, Eye, Moon, Sun } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "backdrop-blur-xl bg-[#050308]/90 border-b border-[#C6A369]/20 shadow-[0_4px_30px_rgba(198,163,105,0.15)]" 
          : "backdrop-blur-md bg-[#050308]/60 border-b border-white/[0.05]"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 group">
          <div 
            className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#C6A369]/20 to-[#6B1B38]/20 border border-[#C6A369]/30 flex items-center justify-center transition-all duration-300 group-hover:border-[#C6A369]/60 group-hover:shadow-[0_0_20px_rgba(198,163,105,0.3)]"
          >
            <Crown className="w-5 h-5 text-[#C6A369] transition-transform duration-300 group-hover:scale-110" />
            <div 
              className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#C6A369]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
          <div className="flex flex-col">
            <span
              className="text-2xl font-bold bg-gradient-to-l from-[#EAD6A8] via-[#C6A369] to-[#8B6914] bg-clip-text text-transparent transition-all duration-300 group-hover:from-[#F1E4C3] group-hover:to-[#C6A369]"
              style={{ fontFamily: "'Scheherazade New', serif" }}
            >
              ديسيت
            </span>
            <span 
              className="text-xs text-[#8C82A0] transition-colors duration-300 group-hover:text-[#C6A369]"
              style={{ fontFamily: "'Tajawal', sans-serif" }}
            >
              لعبة الخداع والتضليل
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-1" style={{ fontFamily: "'Cairo', sans-serif" }}>
          {[
            { href: "#about", label: "اللعبة", icon: <Eye className="w-4 h-4" /> },
            { href: "#cycle", label: "الليل والنهار", icon: <Moon className="w-4 h-4" /> },
            { href: "#roles", label: "الشخصيات", icon: <Crown className="w-4 h-4" /> },
            { href: "#goals", label: "الأهداف", icon: <Sun className="w-4 h-4" /> },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative px-4 py-2 rounded-lg text-sm text-[#8C82A0] hover:text-[#EAE2D2] transition-all duration-300 group hover:bg-white/[0.03]"
            >
              <span className="flex items-center gap-2">
                {item.icon}
                {item.label}
              </span>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#C6A369] to-[#6B1B38] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Download Button */}
        <a
          href="#download"
          className="relative group px-6 py-3 rounded-xl text-sm font-bold text-[#050308] overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_25px_rgba(198,163,105,0.4)]"
          style={{ fontFamily: "'Cairo', sans-serif" }}
        >
          <div className="absolute inset-0 bg-gradient-to-l from-[#EAD6A8] via-[#C6A369] to-[#8B6914]" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          <span className="relative flex items-center gap-2">
            <span>حمّل الآن</span>
            <Crown className="w-4 h-4" />
          </span>
        </a>
      </div>

      {/* Decorative line */}
      <div 
        className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-[#C6A369]/30 to-transparent transition-opacity duration-300"
        style={{ opacity: scrolled ? 1 : 0.5 }}
      />
    </header>
  );
}
