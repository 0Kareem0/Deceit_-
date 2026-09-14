import { Instagram, Facebook, Music2, Mail, Crown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { DownloadButtons } from "../ui";

export function Footer() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const fontCairo = { fontFamily: isArabic ? "'Cairo', sans-serif" : "'Cinzel', serif" };
  const fontTajawal = { fontFamily: isArabic ? "'Tajawal', sans-serif" : "'Inter', sans-serif" };

  return (
    <>
      {/* Bottom Cinematic Statement & CTA Banner */}
      <section className="text-center py-24 sm:py-32 px-5 max-w-5xl mx-auto relative z-10">
        <div className="rounded-3xl p-8 sm:p-14 border border-[#D4AF37]/40 bg-gradient-to-b from-[#D4AF37]/[0.12] via-[#050508]/90 to-black backdrop-blur-2xl shadow-[0_20px_70px_rgba(0,0,0,0.9)] relative overflow-hidden group hover:border-[#D4AF37]/70 transition-all duration-500">
          {/* Ambient Lighting Orbs */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-80" />

          {/* Watermark Crown */}
          <Crown className="w-44 h-44 text-[#D4AF37]/[0.04] absolute -bottom-10 right-10 rtl:left-10 rtl:right-auto pointer-events-none select-none group-hover:text-[#D4AF37]/[0.08] transition-colors duration-500" />

          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-[#FFFFFF] via-[#F0D78C] to-[#D4AF37] bg-clip-text text-transparent relative z-10 leading-tight"
            style={fontCairo}
          >
            {t('footer.cta.title')}
          </h2>

          <p
            className="text-base sm:text-xl text-[#9C8FA8] max-w-2xl mx-auto mb-10 relative z-10 leading-relaxed font-medium"
            style={fontTajawal}
          >
            {t('footer.cta.desc')}
          </p>

          <div className="relative z-10 flex justify-center">
            <DownloadButtons size="lg" />
          </div>
        </div>
      </section>

      {/* Footer Container */}
      <footer className="relative z-10 border-t border-[#D4AF37]/20 bg-[#050508]/95 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-5 py-14">

          {/* Brand */}
          <div className="flex flex-col items-center text-center">
            <h3
              className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-[#F0D78C] via-[#D4AF37] to-[#8B6914] bg-clip-text text-transparent mb-2"
              style={{ fontFamily: isArabic ? "'Scheherazade New', serif" : "'Cinzel', serif" }}
            >
              {t('nav.deceit')}
            </h3>

            <p
              className="text-xs sm:text-sm text-[#9C8FA8] max-w-md mt-1"
              style={fontTajawal}
            >
              {t('footer.tagline')}
            </p>

            {/* Social & Contact Icons */}
            <div className="flex items-center gap-3 mt-6 sm:mt-8">
              <a
                href="https://www.instagram.com/deceit.11?igsh=MXZneGMzMTJyd2p2bQ=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group w-11 h-11 flex items-center justify-center rounded-xl border border-[#D4AF37]/30 bg-white/[0.03] text-[#9C8FA8] transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37] hover:bg-[#D4AF37]/15 hover:text-[#F0D78C] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              >
                <Instagram
                  size={18}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </a>

              <a
                href="https://www.facebook.com/share/1BWRcCN4Zu/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="group w-11 h-11 flex items-center justify-center rounded-xl border border-[#D4AF37]/30 bg-white/[0.03] text-[#9C8FA8] transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37] hover:bg-[#D4AF37]/15 hover:text-[#F0D78C] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              >
                <Facebook
                  size={18}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </a>

              <a
                href="https://www.tiktok.com/@ak.fake5?_r=1&_t=ZS-98juSg3lGsx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="group w-11 h-11 flex items-center justify-center rounded-xl border border-[#D4AF37]/30 bg-white/[0.03] text-[#9C8FA8] transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37] hover:bg-[#D4AF37]/15 hover:text-[#F0D78C] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              >
                <Music2
                  size={18}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </a>

              <a
                href="mailto:deceit2026@gmail.com"
                aria-label="Gmail"
                title="deceit2026@gmail.com"
                className="group w-11 h-11 flex items-center justify-center rounded-xl border border-[#D4AF37]/30 bg-white/[0.03] text-[#9C8FA8] transition-all duration-300 hover:-translate-y-1 hover:border-[#EA4335]/60 hover:bg-[#EA4335]/15 hover:text-[#EA4335] hover:shadow-[0_0_20px_rgba(234,67,53,0.35)]"
              >
                <Mail
                  size={18}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <p
                className="text-xs text-[#9C8FA8]"
                style={fontTajawal}
              >
                © 2026 Deceit. {t('footer.rights')}
              </p>
              <span className="text-white/20 text-xs">•</span>
              <Link
                to="/privacy"
                className="text-xs text-[#9C8FA8] hover:text-[#F0D78C] transition-colors"
                style={fontTajawal}
              >
                {t('footer.privacy')}
              </Link>
            </div>

            <p
              className="text-xs text-[#9C8FA8]"
              style={fontTajawal}
            >
              {t('footer.madeBy')}{" "}
              <span className="text-[#F0D78C] font-semibold">
                Kareem & Eslam
              </span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
