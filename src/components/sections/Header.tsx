export function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[#050308]/80 border-b border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <span
          className="text-2xl font-bold bg-gradient-to-l from-[#EAD6A8] to-[#C6A369] bg-clip-text text-transparent"
          style={{ fontFamily: "'Aref Ruqaa', serif" }}
        >
          ديسيت
        </span>
        <nav className="hidden sm:flex items-center gap-8 text-sm text-[#8C82A0]" style={{ fontFamily: "'Cairo', sans-serif" }}>
          <a href="#about" className="hover:text-[#EAE2D2] transition-colors">اللعبة</a>
          <a href="#cycle" className="hover:text-[#EAE2D2] transition-colors">الليل والنهار</a>
          <a href="#roles" className="hover:text-[#EAE2D2] transition-colors">الشخصيات</a>
          <a href="#goals" className="hover:text-[#EAE2D2] transition-colors">الأهداف</a>
        </nav>
        <a
          href="#download"
          className="text-sm font-bold px-4 py-2 rounded-lg text-[#050308] bg-gradient-to-l from-[#EAD6A8] to-[#C6A369] hover:opacity-90 transition-opacity"
          style={{ fontFamily: "'Cairo', sans-serif" }}
        >
          حمّل الآن
        </a>
      </div>
    </header>
  );
}
