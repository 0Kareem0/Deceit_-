import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import {
  Crown,
  Eye,
  Moon,
  Sun,
  ArrowRight,
  Globe,
  Menu,
  X,
  Sparkles,
} from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === "ar";
  const isCharacterPage = location.pathname.startsWith("/character/");
  const isSubPage = location.pathname !== "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const toggleLanguage = () => {
    const newLang = isArabic ? "en" : "ar";
    i18n.changeLanguage(newLang);
  };

  const handleBack = () => {
    navigate("/");
    setTimeout(() => {
      const rolesSection = document.getElementById("roles");
      if (rolesSection) {
        rolesSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    if (isSubPage) {
      e.preventDefault();
      navigate("/");
      window.scrollTo(0, 0);
    } else {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const navigationItems = [
    {
      href: isSubPage ? "/#about" : "#about",
      label: t("nav.game"),
      icon: <Eye className="h-4 w-4 text-[#D4AF37]" />,
    },
    {
      href: isSubPage ? "/#cycle" : "#cycle",
      label: t("nav.dayNight"),
      icon: <Moon className="h-4 w-4 text-[#D4AF37]" />,
    },
    {
      href: isSubPage ? "/#roles" : "#roles",
      label: t("nav.characters"),
      icon: <Crown className="h-4 w-4 text-[#D4AF37]" />,
    },
    {
      href: isSubPage ? "/#goals" : "#goals",
      label: t("nav.goals"),
      icon: <Sun className="h-4 w-4 text-[#D4AF37]" />,
    },
  ];

  return (
    <>
      <header
        dir={isArabic ? "rtl" : "ltr"}
        className={`fixed inset-x-0 top-0 z-[10000] transition-all duration-500 ${
          scrolled
            ? "bg-[#050508]/95 backdrop-blur-xl border-b border-[#D4AF37]/35 shadow-[0_4px_30px_rgba(212,175,55,0.2)] py-1"
            : "bg-[#050508]/75 backdrop-blur-md border-b border-white/[0.08] py-2"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-8">
          {/* LOGO */}
          <div className="group flex items-center gap-3">
            <Link
              to="/"
              onClick={handleLogoClick}
              aria-label={t("nav.deceit")}
              className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/50 bg-gradient-to-br from-[#D4AF37]/25 via-[#6B1B38]/30 to-black shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300 group-hover:scale-110 group-hover:border-[#F0D78C] group-hover:shadow-[0_0_30px_rgba(240,217,140,0.5)] sm:h-11 sm:w-11"
            >
              <Crown className="h-5 w-5 text-[#F0D78C] transition-transform duration-300 group-hover:scale-110 sm:h-6 sm:w-6" />
              <span className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-[#F0D78C]/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Link>

            <div className="flex min-w-0 flex-col">
              <Link
                to="/"
                onClick={handleLogoClick}
                className="truncate text-2xl font-black tracking-wide bg-gradient-to-r from-[#F0D78C] via-[#D4AF37] to-[#AA7C11] bg-clip-text text-transparent transition-all duration-300 group-hover:from-[#FFFFFF] group-hover:to-[#F0D78C] sm:text-3xl"
                style={{
                  fontFamily: isArabic ? "'Scheherazade New', serif" : "'Cinzel', serif",
                }}
              >
                {t("nav.deceit")}
              </Link>

              <span
                className="truncate text-[10px] text-[#9C8FA8] transition-colors duration-300 group-hover:text-[#F0D78C] sm:text-xs"
                style={{
                  fontFamily: isArabic ? "'Tajawal', sans-serif" : "'Inter', sans-serif",
                }}
              >
                {t("nav.gameOfDeception")}
              </span>
            </div>
          </div>

          {/* DESKTOP NAVIGATION */}
          {!isCharacterPage && (
            <nav
              className="hidden items-center gap-1 md:flex"
              style={{
                fontFamily: isArabic ? "'Cairo', sans-serif" : "'Inter', sans-serif",
              }}
              aria-label="Primary navigation"
            >
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group relative rounded-xl px-4 py-2 text-sm font-semibold text-[#9C8FA8] transition-all duration-300 hover:bg-white/[0.04] hover:text-[#EAE2D2]"
                >
                  <span className="flex items-center gap-2">
                    {item.icon}
                    <span>{item.label}</span>
                  </span>
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#F0D78C] to-[#D4AF37] transition-all duration-300 group-hover:w-3/4 shadow-[0_0_8px_#D4AF37]" />
                </a>
              ))}
            </nav>
          )}

          {/* RIGHT SIDE ACTIONS */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Back Button */}
            {isCharacterPage && (
              <button
                type="button"
                onClick={handleBack}
                className="group relative rounded-xl border border-[#D4AF37]/40 bg-white/[0.03] px-4 py-2 text-xs font-bold text-[#EAE2D2] transition-all duration-300 hover:border-[#D4AF37] hover:bg-white/[0.08] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] sm:px-5 sm:py-2.5 sm:text-sm"
                style={{
                  fontFamily: isArabic ? "'Cairo', sans-serif" : "'Inter', sans-serif",
                }}
              >
                <span className="flex items-center gap-2">
                  <ArrowRight
                    className={`h-4 w-4 ${isArabic ? "" : "rotate-180"}`}
                  />
                  <span>{t("common.back")}</span>
                </span>
              </button>
            )}

            {/* Premium Download CTA Button */}
            {!isCharacterPage && (
              <a
                href={isSubPage ? "/#download" : "#download"}
                className="group relative hidden overflow-hidden rounded-xl bg-gradient-to-r from-[#F0D78C] via-[#D4AF37] to-[#AA7C11] px-5 py-2.5 text-sm font-extrabold text-[#050508] shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(240,217,140,0.7)] active:scale-95 sm:flex"
                style={{
                  fontFamily: isArabic ? "'Cairo', sans-serif" : "'Inter', sans-serif",
                }}
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[#050508] animate-pulse" />
                  <span>{t("common.downloadNow")}</span>
                </span>
              </a>
            )}

            {/* Language Switcher Pill */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="flex items-center gap-2 rounded-xl border border-[#D4AF37]/40 bg-white/[0.03] px-3.5 py-2 text-xs font-bold text-[#F0D78C] transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] sm:px-4 sm:py-2.5 sm:text-sm"
              style={{
                fontFamily: isArabic ? "'Cairo', sans-serif" : "'Inter', sans-serif",
              }}
            >
              <Globe className="h-4 w-4 text-[#D4AF37]" />
              <span>{isArabic ? "EN" : "AR"}</span>
            </button>

            {/* Mobile menu trigger */}
            {!isCharacterPage && (
              <button
                type="button"
                aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
                onClick={() => setMobileMenuOpen((value) => !value)}
                className="relative rounded-xl border border-[#D4AF37]/40 bg-white/[0.03] p-2 text-[#EAE2D2] transition-all duration-300 hover:border-[#D4AF37] hover:bg-white/[0.08] sm:p-2.5 md:hidden"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5 text-[#F0D78C]" />
                ) : (
                  <Menu className="h-5 w-5 text-[#F0D78C]" />
                )}
              </button>
            )}
          </div>
        </div>

        {/* Scroll-reactive bottom hairline glow */}
        <div
          className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent transition-opacity duration-500"
          style={{
            opacity: scrolled ? 0.9 : 0.4,
          }}
        />
      </header>

      {/* MOBILE MENU PORTAL */}
      {mobileMenuOpen &&
        !isCharacterPage &&
        typeof document !== "undefined" &&
        createPortal(
          <>
            <button
              type="button"
              aria-label="Close navigation"
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-[10001] cursor-default bg-black/80 backdrop-blur-md md:hidden"
            />

            <div
              id="mobile-navigation"
              dir={isArabic ? "rtl" : "ltr"}
              className="fixed inset-x-0 top-16 z-[10002] max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-[#D4AF37]/30 bg-[#050508]/98 shadow-[0_20px_50px_rgba(0,0,0,0.9)] backdrop-blur-2xl md:hidden sm:top-20"
            >
              <nav
                className="mx-auto flex w-full max-w-md flex-col gap-2.5 px-5 py-6"
                style={{
                  fontFamily: isArabic ? "'Cairo', sans-serif" : "'Inter', sans-serif",
                }}
              >
                {navigationItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex w-full items-center justify-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-6 py-4 text-base font-semibold text-[#9C8FA8] transition-all duration-300 hover:border-[#D4AF37]/40 hover:bg-white/[0.07] hover:text-[#F0D78C]"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </a>
                ))}

                <a
                  href="#download"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#F0D78C] via-[#D4AF37] to-[#AA7C11] px-6 py-4 text-base font-extrabold text-[#050508] shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all duration-300"
                >
                  <Sparkles className="h-5 w-5" />
                  <span>{t("common.downloadNow")}</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    toggleLanguage();
                    setMobileMenuOpen(false);
                  }}
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl border border-[#D4AF37]/40 bg-white/[0.03] px-6 py-4 text-base font-bold text-[#F0D78C] transition-all duration-300 hover:border-[#D4AF37]"
                >
                  <Globe className="h-5 w-5 text-[#D4AF37]" />
                  <span>{isArabic ? "English (EN)" : "العربية (AR)"}</span>
                </button>
              </nav>
            </div>
          </>,
          document.body
        )}
    </>
  );
}