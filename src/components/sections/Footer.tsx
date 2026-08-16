import { Instagram, Facebook, Music2 } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();
  return (
    <>
      {/* Final CTA */}
      <section className="text-center py-20 px-5">
          <h2
            className="text-3xl sm:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "'Cairo', sans-serif" }}
          >
            {t('footer.cta.title')}
          </h2>

          <p
            className="text-[#8C82A0] max-w-xl mx-auto"
            style={{ fontFamily: "'Tajawal', sans-serif" }}
          >
            {t('footer.cta.desc')}
          </p>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.06] bg-black/40">
        <div className="max-w-6xl mx-auto px-5 py-12">

          {/* Brand */}
          <div className="flex flex-col items-center text-center">
            <h3
              className="text-3xl font-bold text-white mb-2"
              style={{ fontFamily: "'Aref Ruqaa', serif" }}
            >
              {t('nav.deceit')}
            </h3>

            <p
              className="text-sm text-[#8C82A0] max-w-md"
              style={{ fontFamily: "'Tajawal', sans-serif" }}
            >
              {t('footer.tagline')}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-7">
              <a
                href="https://www.instagram.com/deceit.11?igsh=MXZneGMzMTJyd2p2bQ=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group w-11 h-11 flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-[#8C82A0] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
              >
                <Instagram
                  size={19}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </a>

              <a
                href="https://www.facebook.com/share/1BWRcCN4Zu/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="group w-11 h-11 flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-[#8C82A0] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
              >
                <Facebook
                  size={19}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </a>

              <a
                href="https://www.tiktok.com/@ak.fake5?_r=1&_t=ZS-98juSg3lGsx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="group w-11 h-11 flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-[#8C82A0] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
              >
                <Music2
                  size={19}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </a>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-10 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
            <p
              className="text-xs text-[#6F687D]"
              style={{ fontFamily: "'Tajawal', sans-serif" }}
            >
              © 2026 Deceit. {t('footer.rights')}
            </p>

            <p
              className="text-xs text-[#6F687D]"
              style={{ fontFamily: "'Tajawal', sans-serif" }}
            >
              Made {t('footer.madeBy')} {" "}
              <span className="text-[#A99BFF] font-medium">
                Kareem & Eslam
              </span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
