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
} from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const isCharacterPage = location.pathname.startsWith("/character/");
  const isSubPage = location.pathname !== "/";

  /* -------------------------------------------------- */
  /* Scroll state                                        */
  /* -------------------------------------------------- */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* -------------------------------------------------- */
  /* Lock body scroll while mobile menu is open         */
  /* -------------------------------------------------- */

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

  /* -------------------------------------------------- */
  /* Close menu when route changes                       */
  /* -------------------------------------------------- */

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  /* -------------------------------------------------- */
  /* Escape key                                          */
  /* -------------------------------------------------- */

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  /* -------------------------------------------------- */
  /* Language                                            */
  /* -------------------------------------------------- */

  const toggleLanguage = () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
  };

  /* -------------------------------------------------- */
  /* Character page back button                          */
  /* -------------------------------------------------- */

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


  /* -------------------------------------------------- */
  /* Navigation                                          */
  /* -------------------------------------------------- */

  const navigationItems = [
    {
      href: isSubPage ? "/#about" : "#about",
      label: t("nav.game"),
      icon: <Eye className="h-4 w-4" />,
    },
    {
      href: isSubPage ? "/#cycle" : "#cycle",
      label: t("nav.dayNight"),
      icon: <Moon className="h-4 w-4" />,
    },
    {
      href: isSubPage ? "/#roles" : "#roles",
      label: t("nav.characters"),
      icon: <Crown className="h-4 w-4" />,
    },
    {
      href: isSubPage ? "/#goals" : "#goals",
      label: t("nav.goals"),
      icon: <Sun className="h-4 w-4" />,
    },
  ];

  return (
    <>
      {/* =========================================================
          HEADER
      ========================================================= */}

      <header
        dir={i18n.language === "ar" ? "rtl" : "ltr"}
        className={[
          "fixed inset-x-0 top-0 z-[10000]",
          "transition-all duration-500",
          scrolled
            ? [
                "bg-[#050308]/95",
                "backdrop-blur-xl",
                "border-b border-[#C6A369]/20",
                "shadow-[0_4px_30px_rgba(198,163,105,0.15)]",
              ].join(" ")
            : [
                "bg-[#050308]/70",
                "backdrop-blur-md",
                "border-b border-white/[0.05]",
              ].join(" "),
        ].join(" ")}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-8">
          {/* =====================================================
              LOGO
          ===================================================== */}

          <div className="group flex items-center gap-2 sm:gap-3">
            <Link
              to="/"
              onClick={handleLogoClick}
              aria-label={t("nav.deceit")}
              className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-[#C6A369]/30 bg-gradient-to-br from-[#C6A369]/20 to-[#6B1B38]/20 transition-all duration-300 group-hover:border-[#C6A369]/60 group-hover:shadow-[0_0_20px_rgba(198,163,105,0.3)] sm:h-10 sm:w-10"
            >
              <Crown className="h-4 w-4 text-[#C6A369] transition-transform duration-300 group-hover:scale-110 sm:h-5 sm:w-5" />

              <span className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-[#C6A369]/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Link>

            <div className="flex min-w-0 flex-col">
              <Link
                to="/"
                onClick={handleLogoClick}
                className="truncate text-xl font-bold bg-gradient-to-l from-[#EAD6A8] via-[#C6A369] to-[#8B6914] bg-clip-text text-transparent transition-all duration-300 group-hover:from-[#F1E4C3] group-hover:to-[#C6A369] sm:text-2xl"
                style={{
                  fontFamily: "'Scheherazade New', serif",
                }}
              >
                {t("nav.deceit")}
              </Link>

              <span
                className="truncate text-[10px] text-[#8C82A0] transition-colors duration-300 group-hover:text-[#C6A369] sm:text-xs"
                style={{
                  fontFamily: "'Tajawal', sans-serif",
                }}
              >
                {t("nav.gameOfDeception")}
              </span>
            </div>
          </div>

          {/* =====================================================
              DESKTOP NAVIGATION
          ===================================================== */}

          {!isCharacterPage && (
            <nav
              className="hidden items-center gap-1 md:flex"
              style={{
                fontFamily: "'Cairo', sans-serif",
              }}
              aria-label="Primary navigation"
            >
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group relative rounded-lg px-4 py-2 text-sm text-[#8C82A0] transition-all duration-300 hover:bg-white/[0.03] hover:text-[#EAE2D2]"
                >
                  <span className="flex items-center gap-2">
                    {item.icon}
                    <span>{item.label}</span>
                  </span>

                  <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-gradient-to-r from-[#C6A369] to-[#6B1B38] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>
          )}

          {/* =====================================================
              RIGHT SIDE
          ===================================================== */}

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Character page back button */}
            {isCharacterPage && (
              <button
                type="button"
                onClick={handleBack}
                className="group relative rounded-xl border border-[#C6A369]/30 bg-transparent px-4 py-2 text-xs font-bold text-[#EAE2D2] transition-all duration-300 hover:border-[#C6A369]/60 hover:shadow-[0_8px_25px_rgba(198,163,105,0.4)] sm:px-6 sm:py-3 sm:text-sm"
                style={{
                  fontFamily: "'Cairo', sans-serif",
                }}
              >
                <span className="flex items-center gap-2">
                  <ArrowRight
                    className={`h-4 w-4 ${
                      i18n.language === "ar" ? "" : "rotate-180"
                    }`}
                  />

                  <span>{t("common.back")}</span>
                </span>
              </button>
            )}

            {/* Desktop download */}
            {!isCharacterPage && (
              <a
                href={isSubPage ? "/#download" : "#download"}
                className="relative hidden overflow-hidden rounded-xl px-6 py-3 text-sm font-bold text-[#050308] transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_25px_rgba(198,163,105,0.4)] sm:flex"
                style={{
                  fontFamily: "'Cairo', sans-serif",
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-l from-[#EAD6A8] via-[#C6A369] to-[#8B6914]" />

                <span className="absolute inset-0 -translate-x-full bg-gradient-to-l from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <span className="relative flex items-center gap-2">
                  <span>{t("common.downloadNow")}</span>
                  <Crown className="h-4 w-4" />
                </span>
              </a>
            )}

            {/* Desktop language */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="hidden rounded-xl border border-[#C6A369]/30 bg-transparent px-3 py-2 text-xs font-bold text-[#EAE2D2] transition-all duration-300 hover:border-[#C6A369]/60 hover:shadow-[0_8px_25px_rgba(198,163,105,0.4)] sm:flex sm:px-4 sm:py-3 sm:text-sm"
              style={{
                fontFamily: "'Cairo', sans-serif",
              }}
            >
              <span className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <span>{i18n.language === "ar" ? "EN" : "AR"}</span>
              </span>
            </button>

            {/* Mobile menu button */}
            {!isCharacterPage && (
              <button
                type="button"
                aria-label={
                  mobileMenuOpen ? "Close navigation" : "Open navigation"
                }
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
                onClick={() => setMobileMenuOpen((value) => !value)}
                className="relative rounded-lg border border-[#C6A369]/30 bg-transparent p-2 text-[#EAE2D2] transition-all duration-300 hover:border-[#C6A369]/60 hover:shadow-[0_8px_25px_rgba(198,163,105,0.4)] sm:p-3 md:hidden"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            )}
          </div>
        </div>

        {/* Decorative line */}
        <div
          className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C6A369]/30 to-transparent"
          style={{
            opacity: scrolled ? 1 : 0.5,
          }}
        />
      </header>

      {/* =========================================================
          MOBILE MENU
          IMPORTANT:
          Render outside <header> using a portal.
      ========================================================= */}

      {mobileMenuOpen &&
        !isCharacterPage &&
        typeof document !== "undefined" &&
        createPortal(
          <>
            {/* Backdrop */}
            <button
              type="button"
              aria-label="Close navigation"
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-[10001] cursor-default bg-black/70 backdrop-blur-sm md:hidden"
            />

            {/* Menu */}
            <div
              id="mobile-navigation"
              dir={i18n.language === "ar" ? "rtl" : "ltr"}
              className="fixed inset-x-0 top-16 z-[10002] max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-[#C6A369]/20 bg-[#050308]/98 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl md:hidden sm:top-20 sm:max-h-[calc(100dvh-5rem)]"
            >
              <nav
                className="mx-auto flex w-full max-w-md flex-col gap-2 px-5 py-6"
                style={{
                  fontFamily: "'Cairo', sans-serif",
                }}
              >
                {navigationItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex w-full items-center justify-center gap-3 rounded-xl border border-transparent px-6 py-4 text-base text-[#8C82A0] transition-all duration-300 hover:border-[#C6A369]/20 hover:bg-white/[0.05] hover:text-[#EAE2D2]"
                  >
                    {item.icon}

                    <span>{item.label}</span>
                  </a>
                ))}

                {/* Download */}
                <a
                  href="#download"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-[#EAD6A8] via-[#C6A369] to-[#8B6914] px-6 py-4 text-base font-bold text-[#050308] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_25px_rgba(198,163,105,0.4)]"
                >
                  <span>{t("common.downloadNow")}</span>
                  <Crown className="h-5 w-5" />
                </a>

                {/* Language */}
                <button
                  type="button"
                  onClick={() => {
                    toggleLanguage();
                    setMobileMenuOpen(false);
                  }}
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-[#C6A369]/30 bg-transparent px-6 py-4 text-base font-bold text-[#EAE2D2] transition-all duration-300 hover:border-[#C6A369]/60 hover:bg-[#C6A369]/5 hover:shadow-[0_8px_25px_rgba(198,163,105,0.25)]"
                >
                  <Globe className="h-5 w-5" />

                  <span>
                    {i18n.language === "ar" ? "English" : "العربية"}
                  </span>
                </button>
              </nav>
            </div>
          </>,
          document.body
        )}
    </>
  );
}