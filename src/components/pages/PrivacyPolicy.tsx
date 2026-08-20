import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Shield,
  ShieldCheck,
  Smartphone,
  Globe,
  Activity,
  User,
  Database,
  CreditCard,
  Megaphone,
  MessageSquare,
  ArrowRight,
  ExternalLink,
  Lock,
  CheckCircle2,
  Mail,
  Copy,
  Check,
  Calendar,
  AlertTriangle,
  FileText,
  Key,
  Server,
  Trash2,
  Sparkles,
} from "lucide-react";
import { SEO } from "../ui/SEO";
import { Header } from "../sections/Header";
import { Footer } from "../sections/Footer";

export function PrivacyPolicy() {
  const { t, i18n } = useTranslation();
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("s1");

  const isArabic = i18n.language === "ar";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("deceit2026@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const navItems = [
    { id: "s1", label: isArabic ? "1. البيانات المجمعة" : "1. Data Collected" },
    { id: "s2", label: isArabic ? "2. أغراض المعالجة" : "2. Purposes" },
    { id: "s3", label: isArabic ? "3. الأطراف الثالثة" : "3. Third Parties" },
    { id: "s4", label: isArabic ? "4. المشتريات" : "4. Purchases" },
    { id: "s5", label: isArabic ? "5. الإعلانات" : "5. Advertising" },
    { id: "s6", label: isArabic ? "6. الأمان والتخزين" : "6. Data Security" },
    { id: "s7", label: isArabic ? "7. حقوق الحذف" : "7. Data Rights" },
    { id: "s8", label: isArabic ? "8. خصوصية الأطفال" : "8. Children" },
    { id: "s9", label: isArabic ? "9. التغييرات" : "9. Updates" },
    { id: "s10", label: isArabic ? "10. تواصل معنا" : "10. Contact Us" },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Type definition for table items
  interface PurposeItem {
    category: string;
    purpose: string;
  }

  const purposeTableData = (t("privacy.sections.s2.table", {
    returnObjects: true,
  }) || []) as PurposeItem[];

  return (
    <div
      dir={isArabic ? "rtl" : "ltr"}
      className="min-h-screen bg-[#050308] text-[#EAE2D2] selection:bg-[#C6A369]/30 relative"
    >
      <SEO
        title={
          isArabic
            ? "سياسة الخصوصية | ديسيت Deceit Online"
            : "Privacy Policy | Deceit Online"
        }
        description={t("privacy.subtitle")}
      />

      <Header />

      {/* Decorative ambient lighting */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-[#C6A369]/10 blur-[140px]" />
        <div className="absolute top-1/3 -left-40 h-[600px] w-[600px] rounded-full bg-[#6B1B38]/15 blur-[160px]" />
        <div className="absolute bottom-1/4 right-10 h-[400px] w-[400px] rounded-full bg-[#9C3357]/10 blur-[130px]" />
      </div>

      <main className="relative z-10 pt-24 pb-20 sm:pt-32 sm:pb-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Back Link */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#8C82A0] hover:text-[#C6A369] transition-colors duration-300 group"
            style={{ fontFamily: "'Cairo', sans-serif" }}
          >
            <ArrowRight
              className={`h-4 w-4 transition-transform duration-300 ${
                isArabic
                  ? "group-hover:translate-x-1"
                  : "rotate-180 group-hover:-translate-x-1"
              }`}
            />
            <span>{t("privacy.backHome")}</span>
          </Link>

          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#C6A369]/30 bg-[#C6A369]/10 text-xs font-semibold text-[#EAD6A8]"
            style={{ fontFamily: "'Tajawal', sans-serif" }}
          >
            <Calendar className="w-3.5 h-3.5" />
            {t("privacy.effectiveDate")}
          </span>
        </div>

        {/* Hero Banner */}
        <header className="mb-12 text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C6A369]/40 bg-gradient-to-r from-[#C6A369]/20 via-[#6B1B38]/20 to-transparent mb-6 text-xs sm:text-sm font-semibold text-[#C6A369] shadow-[0_0_25px_rgba(198,163,105,0.2)]">
            <ShieldCheck className="w-4 h-4 text-[#C6A369] animate-pulse" />
            <span>PRIVACY & SECURITY LOG</span>
          </div>

          <h1
            className="text-3xl sm:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-[#EAD6A8] via-[#C6A369] to-[#8B6914] bg-clip-text text-transparent leading-tight"
            style={{ fontFamily: "'Cairo', sans-serif" }}
          >
            {t("privacy.title")}
          </h1>

          <p
            className="text-base sm:text-lg text-[#9C8FA8] max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Tajawal', sans-serif" }}
          >
            {t("privacy.subtitle")}
          </p>
        </header>

        {/* Quick Section Navigation Chips */}
        <nav
          aria-label="Privacy policy quick navigation"
          className="mb-12 sticky top-20 z-30 py-3 bg-[#050308]/85 backdrop-blur-xl border-y border-white/[0.08]"
        >
          <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar pb-3 px-1">
            <span
              className="text-xs text-[#8C82A0] whitespace-nowrap hidden sm:inline-block font-semibold px-2"
              style={{ fontFamily: "'Cairo', sans-serif" }}
            >
              {t("privacy.quickNavTitle")}:
            </span>
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`whitespace-nowrap rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-[#C6A369] to-[#8B6914] text-[#050308] shadow-[0_0_15px_rgba(198,163,105,0.4)]"
                    : "border border-white/10 bg-white/[0.03] text-[#8C82A0] hover:border-[#C6A369]/40 hover:text-[#EAE2D2] hover:bg-white/[0.06]"
                }`}
                style={{ fontFamily: "'Cairo', sans-serif" }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Policy Content Sections */}
        <div className="space-y-12">
          {/* SECTION 1: Information We Collect */}
          <section
            id="s1"
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-md relative overflow-hidden group hover:border-[#C6A369]/30 transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl border border-[#C6A369]/30 bg-[#C6A369]/10 text-[#C6A369]">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h2
                  className="text-xl sm:text-2xl font-bold text-white"
                  style={{ fontFamily: "'Cairo', sans-serif" }}
                >
                  {t("privacy.sections.s1.title")}
                </h2>
              </div>
            </div>

            <p
              className="text-sm sm:text-base text-[#9C8FA8] mb-8 leading-relaxed"
              style={{ fontFamily: "'Tajawal', sans-serif" }}
            >
              {t("privacy.sections.s1.intro")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Device & Tech */}
              <div className="p-5 rounded-xl border border-white/[0.08] bg-black/40 hover:border-[#C6A369]/40 transition-colors">
                <div className="flex items-center gap-2.5 mb-3 text-[#C6A369]">
                  <Smartphone className="w-5 h-5" />
                  <h3
                    className="font-bold text-white text-base"
                    style={{ fontFamily: "'Cairo', sans-serif" }}
                  >
                    {t("privacy.sections.s1.device.title")}
                  </h3>
                </div>
                <ul
                  className="space-y-2 text-xs sm:text-sm text-[#9C8FA8]"
                  style={{ fontFamily: "'Tajawal', sans-serif" }}
                >
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A369] mt-2 shrink-0" />
                    <span>{t("privacy.sections.s1.device.identifiers")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A369] mt-2 shrink-0" />
                    <span>{t("privacy.sections.s1.device.network")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A369] mt-2 shrink-0" />
                    <span>{t("privacy.sections.s1.device.diagnostics")}</span>
                  </li>
                </ul>
              </div>

              {/* Profile & Gameplay */}
              <div className="p-5 rounded-xl border border-white/[0.08] bg-black/40 hover:border-[#C6A369]/40 transition-colors">
                <div className="flex items-center gap-2.5 mb-3 text-[#C6A369]">
                  <User className="w-5 h-5" />
                  <h3
                    className="font-bold text-white text-base"
                    style={{ fontFamily: "'Cairo', sans-serif" }}
                  >
                    {t("privacy.sections.s1.profile.title")}
                  </h3>
                </div>
                <ul
                  className="space-y-2 text-xs sm:text-sm text-[#9C8FA8]"
                  style={{ fontFamily: "'Tajawal', sans-serif" }}
                >
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A369] mt-2 shrink-0" />
                    <span>{t("privacy.sections.s1.profile.info")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A369] mt-2 shrink-0" />
                    <span>{t("privacy.sections.s1.profile.gameplay")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A369] mt-2 shrink-0" />
                    <span>{t("privacy.sections.s1.profile.cloud")}</span>
                  </li>
                </ul>
              </div>

              {/* Financial */}
              <div className="p-5 rounded-xl border border-white/[0.08] bg-black/40 hover:border-[#C6A369]/40 transition-colors">
                <div className="flex items-center gap-2.5 mb-3 text-[#C6A369]">
                  <CreditCard className="w-5 h-5" />
                  <h3
                    className="font-bold text-white text-base"
                    style={{ fontFamily: "'Cairo', sans-serif" }}
                  >
                    {t("privacy.sections.s1.financial.title")}
                  </h3>
                </div>
                <p
                  className="text-xs sm:text-sm text-[#9C8FA8] mb-3"
                  style={{ fontFamily: "'Tajawal', sans-serif" }}
                >
                  {t("privacy.sections.s1.financial.purchases")}
                </p>
                <div className="p-3 rounded-lg bg-[#C6A369]/10 border border-[#C6A369]/30 text-xs text-[#EAD6A8]">
                  {t("privacy.sections.s1.financial.note")}
                </div>
              </div>

              {/* Ads & Feedback */}
              <div className="p-5 rounded-xl border border-white/[0.08] bg-black/40 hover:border-[#C6A369]/40 transition-colors">
                <div className="flex items-center gap-2.5 mb-3 text-[#C6A369]">
                  <Megaphone className="w-5 h-5" />
                  <h3
                    className="font-bold text-white text-base"
                    style={{ fontFamily: "'Cairo', sans-serif" }}
                  >
                    {t("privacy.sections.s1.ads.title")}
                  </h3>
                </div>
                <ul
                  className="space-y-2 text-xs sm:text-sm text-[#9C8FA8]"
                  style={{ fontFamily: "'Tajawal', sans-serif" }}
                >
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A369] mt-2 shrink-0" />
                    <span>{t("privacy.sections.s1.ads.identifiers")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A369] mt-2 shrink-0" />
                    <span>{t("privacy.sections.s1.ads.interaction")}</span>
                  </li>
                </ul>

                <div className="mt-4 pt-3 border-t border-white/10">
                  <div className="flex items-center gap-2 text-xs font-semibold text-white mb-1">
                    <MessageSquare className="w-4 h-4 text-[#C6A369]" />
                    <span>{t("privacy.sections.s1.feedback.title")}</span>
                  </div>
                  <p
                    className="text-xs text-[#9C8FA8]"
                    style={{ fontFamily: "'Tajawal', sans-serif" }}
                  >
                    {t("privacy.sections.s1.feedback.submissions")}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: Purpose Matrix Table */}
          <section
            id="s2"
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-md group hover:border-[#C6A369]/30 transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl border border-[#C6A369]/30 bg-[#C6A369]/10 text-[#C6A369]">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <h2
                  className="text-xl sm:text-2xl font-bold text-white"
                  style={{ fontFamily: "'Cairo', sans-serif" }}
                >
                  {t("privacy.sections.s2.title")}
                </h2>
              </div>
            </div>

            <p
              className="text-sm sm:text-base text-[#9C8FA8] mb-6 leading-relaxed"
              style={{ fontFamily: "'Tajawal', sans-serif" }}
            >
              {t("privacy.sections.s2.intro")}
            </p>

            <div className="overflow-x-auto rounded-xl border border-white/10 bg-black/50">
              <table className="w-full text-left sm:text-right border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.04]">
                    <th
                      className="p-4 text-xs sm:text-sm font-bold text-[#C6A369]"
                      style={{ fontFamily: "'Cairo', sans-serif" }}
                    >
                      {isArabic ? "فئة البيانات" : "Category of Data"}
                    </th>
                    <th
                      className="p-4 text-xs sm:text-sm font-bold text-[#C6A369]"
                      style={{ fontFamily: "'Cairo', sans-serif" }}
                    >
                      {isArabic ? "الغرض والوظيفة" : "Purpose & Function"}
                    </th>
                  </tr>
                </thead>
                <tbody
                  className="divide-y divide-white/[0.06] text-xs sm:text-sm text-[#9C8FA8]"
                  style={{ fontFamily: "'Tajawal', sans-serif" }}
                >
                  {purposeTableData.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-white/[0.02] transition-colors"
                    >
                      <td className="p-4 font-semibold text-white whitespace-nowrap">
                        <span className="inline-flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#C6A369]" />
                          {row.category}
                        </span>
                      </td>
                      <td className="p-4 leading-relaxed">{row.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* SECTION 3: Third Party Services */}
          <section
            id="s3"
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-md group hover:border-[#C6A369]/30 transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl border border-[#C6A369]/30 bg-[#C6A369]/10 text-[#C6A369]">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h2
                  className="text-xl sm:text-2xl font-bold text-white"
                  style={{ fontFamily: "'Cairo', sans-serif" }}
                >
                  {t("privacy.sections.s3.title")}
                </h2>
              </div>
            </div>

            <p
              className="text-sm sm:text-base text-[#9C8FA8] mb-6 leading-relaxed"
              style={{ fontFamily: "'Tajawal', sans-serif" }}
            >
              {t("privacy.sections.s3.intro")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Google */}
              <div className="p-5 rounded-xl border border-white/[0.08] bg-black/40 flex flex-col justify-between">
                <div>
                  <h3
                    className="font-bold text-white text-base mb-2 flex items-center gap-2"
                    style={{ fontFamily: "'Cairo', sans-serif" }}
                  >
                    <span className="text-[#C6A369]">Google</span>
                    <span>
                      {t("privacy.sections.s3.google.title")}
                    </span>
                  </h3>
                  <p
                    className="text-xs sm:text-sm text-[#9C8FA8] mb-4"
                    style={{ fontFamily: "'Tajawal', sans-serif" }}
                  >
                    {t("privacy.sections.s3.google.purpose")}
                  </p>
                </div>

                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#C6A369] hover:underline"
                  style={{ fontFamily: "'Cairo', sans-serif" }}
                >
                  <span>{t("privacy.sections.s3.google.linkText")}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* MongoDB */}
              <div className="p-5 rounded-xl border border-white/[0.08] bg-black/40 flex flex-col justify-between">
                <div>
                  <h3
                    className="font-bold text-white text-base mb-2 flex items-center gap-2"
                    style={{ fontFamily: "'Cairo', sans-serif" }}
                  >
                    <Database className="w-4 h-4 text-[#C6A369]" />
                    <span>{t("privacy.sections.s3.mongo.title")}</span>
                  </h3>
                  <p
                    className="text-xs sm:text-sm text-[#9C8FA8] mb-4"
                    style={{ fontFamily: "'Tajawal', sans-serif" }}
                  >
                    {t("privacy.sections.s3.mongo.purpose")}
                  </p>
                </div>

                <a
                  href="https://www.mongodb.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#C6A369] hover:underline"
                  style={{ fontFamily: "'Cairo', sans-serif" }}
                >
                  <span>{t("privacy.sections.s3.mongo.linkText")}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </section>

          {/* SECTION 4: In-App Purchases & Financial Privacy */}
          <section
            id="s4"
            className="rounded-2xl border border-[#C6A369]/30 bg-gradient-to-br from-[#C6A369]/10 via-[#050308] to-black p-6 sm:p-8 backdrop-blur-md relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl border border-[#C6A369]/40 bg-[#C6A369]/20 text-[#EAD6A8]">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h2
                  className="text-xl sm:text-2xl font-bold text-white"
                  style={{ fontFamily: "'Cairo', sans-serif" }}
                >
                  {t("privacy.sections.s4.title")}
                </h2>
              </div>
            </div>

            <p
              className="text-sm sm:text-base text-[#EAE2D2] mb-6 leading-relaxed"
              style={{ fontFamily: "'Tajawal', sans-serif" }}
            >
              {t("privacy.sections.s4.p1")}
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3.5 rounded-xl border border-white/10 bg-black/60 text-xs sm:text-sm text-[#9C8FA8]">
                <CheckCircle2 className="w-5 h-5 text-[#C6A369] shrink-0 mt-0.5" />
                <span style={{ fontFamily: "'Tajawal', sans-serif" }}>
                  {t("privacy.sections.s4.bullet1")}
                </span>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-xl border border-white/10 bg-black/60 text-xs sm:text-sm text-[#9C8FA8]">
                <CheckCircle2 className="w-5 h-5 text-[#C6A369] shrink-0 mt-0.5" />
                <span style={{ fontFamily: "'Tajawal', sans-serif" }}>
                  {t("privacy.sections.s4.bullet2")}
                </span>
              </div>
            </div>
          </section>

          {/* SECTION 5: Advertising Choice Options */}
          <section
            id="s5"
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-md group hover:border-[#C6A369]/30 transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl border border-[#C6A369]/30 bg-[#C6A369]/10 text-[#C6A369]">
                <Megaphone className="w-6 h-6" />
              </div>
              <div>
                <h2
                  className="text-xl sm:text-2xl font-bold text-white"
                  style={{ fontFamily: "'Cairo', sans-serif" }}
                >
                  {t("privacy.sections.s5.title")}
                </h2>
              </div>
            </div>

            <p
              className="text-sm sm:text-base text-[#9C8FA8] mb-6 leading-relaxed"
              style={{ fontFamily: "'Tajawal', sans-serif" }}
            >
              {t("privacy.sections.s5.intro")}
            </p>

            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-white/[0.08] bg-black/40">
                <p
                  className="text-xs sm:text-sm text-[#EAE2D2]"
                  style={{ fontFamily: "'Tajawal', sans-serif" }}
                >
                  {t("privacy.sections.s5.nonPersonalized")}
                </p>
              </div>

              <div className="p-4 rounded-xl border border-white/[0.08] bg-black/40">
                <p
                  className="text-xs sm:text-sm text-[#EAE2D2] leading-relaxed"
                  style={{ fontFamily: "'Tajawal', sans-serif" }}
                >
                  {t("privacy.sections.s5.optOut")}
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 6: Data Security & Storage */}
          <section
            id="s6"
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-md group hover:border-[#C6A369]/30 transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl border border-[#C6A369]/30 bg-[#C6A369]/10 text-[#C6A369]">
                <Server className="w-6 h-6" />
              </div>
              <div>
                <h2
                  className="text-xl sm:text-2xl font-bold text-white"
                  style={{ fontFamily: "'Cairo', sans-serif" }}
                >
                  {t("privacy.sections.s6.title")}
                </h2>
              </div>
            </div>

            <p
              className="text-sm sm:text-base text-[#9C8FA8] mb-6 leading-relaxed"
              style={{ fontFamily: "'Tajawal', sans-serif" }}
            >
              {t("privacy.sections.s6.intro")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl border border-white/[0.08] bg-black/40 flex flex-col justify-start">
                <div className="flex items-center gap-2 text-[#C6A369] font-bold text-sm mb-2">
                  <Lock className="w-4 h-4" />
                  <span>HTTPS / TLS</span>
                </div>
                <p
                  className="text-xs text-[#9C8FA8] leading-relaxed"
                  style={{ fontFamily: "'Tajawal', sans-serif" }}
                >
                  {t("privacy.sections.s6.encryption")}
                </p>
              </div>

              <div className="p-4 rounded-xl border border-white/[0.08] bg-black/40 flex flex-col justify-start">
                <div className="flex items-center gap-2 text-[#C6A369] font-bold text-sm mb-2">
                  <Shield className="w-4 h-4" />
                  <span>SharedPreferences</span>
                </div>
                <p
                  className="text-xs text-[#9C8FA8] leading-relaxed"
                  style={{ fontFamily: "'Tajawal', sans-serif" }}
                >
                  {t("privacy.sections.s6.localStorage")}
                </p>
              </div>

              <div className="p-4 rounded-xl border border-white/[0.08] bg-black/40 flex flex-col justify-start">
                <div className="flex items-center gap-2 text-[#C6A369] font-bold text-sm mb-2">
                  <Key className="w-4 h-4" />
                  <span>Access Control</span>
                </div>
                <p
                  className="text-xs text-[#9C8FA8] leading-relaxed"
                  style={{ fontFamily: "'Tajawal', sans-serif" }}
                >
                  {t("privacy.sections.s6.access")}
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 7: Data Retention & Deletion Rights */}
          <section
            id="s7"
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-md group hover:border-[#C6A369]/30 transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl border border-[#C6A369]/30 bg-[#C6A369]/10 text-[#C6A369]">
                <Trash2 className="w-6 h-6" />
              </div>
              <div>
                <h2
                  className="text-xl sm:text-2xl font-bold text-white"
                  style={{ fontFamily: "'Cairo', sans-serif" }}
                >
                  {t("privacy.sections.s7.title")}
                </h2>
              </div>
            </div>

            {/* Retention */}
            <div className="mb-6">
              <h3
                className="text-base font-bold text-[#EAD6A8] mb-2"
                style={{ fontFamily: "'Cairo', sans-serif" }}
              >
                {t("privacy.sections.s7.retentionTitle")}
              </h3>
              <p
                className="text-sm text-[#9C8FA8] leading-relaxed"
                style={{ fontFamily: "'Tajawal', sans-serif" }}
              >
                {t("privacy.sections.s7.retentionDesc")}
              </p>
            </div>

            {/* Rights */}
            <div className="mb-6">
              <h3
                className="text-base font-bold text-[#EAD6A8] mb-3"
                style={{ fontFamily: "'Cairo', sans-serif" }}
              >
                {t("privacy.sections.s7.rightsTitle")}
              </h3>
              <p
                className="text-xs sm:text-sm text-[#9C8FA8] mb-3"
                style={{ fontFamily: "'Tajawal', sans-serif" }}
              >
                {t("privacy.sections.s7.rightsIntro")}
              </p>

              <ul
                className="space-y-2 text-xs sm:text-sm text-[#9C8FA8] mb-6"
                style={{ fontFamily: "'Tajawal', sans-serif" }}
              >
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C6A369] shrink-0" />
                  <span>{t("privacy.sections.s7.right1")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C6A369] shrink-0" />
                  <span>{t("privacy.sections.s7.right2")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C6A369] shrink-0" />
                  <span>{t("privacy.sections.s7.right3")}</span>
                </li>
              </ul>

              <div className="p-4 rounded-xl border border-white/10 bg-black/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p
                  className="text-xs sm:text-sm text-[#EAE2D2] leading-relaxed max-w-xl"
                  style={{ fontFamily: "'Tajawal', sans-serif" }}
                >
                  {t("privacy.sections.s7.contactNote")}
                </p>

                <a
                  href="mailto:deceit2026@gmail.com?subject=Account%20and%20Data%20Deletion%20Request"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#6B1B38] to-[#9C3357] hover:from-[#8B2348] hover:to-[#B83D68] text-white text-xs font-bold transition-all shadow-md shrink-0"
                  style={{ fontFamily: "'Cairo', sans-serif" }}
                >
                  <Mail className="w-4 h-4" />
                  <span>{t("privacy.sendEmail")}</span>
                </a>
              </div>
            </div>
          </section>

          {/* SECTION 8: Children's Privacy */}
          <section
            id="s8"
            className="rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-[#050308] to-black p-6 sm:p-8 backdrop-blur-md"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl border border-amber-500/30 bg-amber-500/20 text-amber-300">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h2
                  className="text-xl sm:text-2xl font-bold text-white"
                  style={{ fontFamily: "'Cairo', sans-serif" }}
                >
                  {t("privacy.sections.s8.title")}
                </h2>
              </div>
            </div>

            <p
              className="text-sm sm:text-base text-[#EAE2D2] leading-relaxed"
              style={{ fontFamily: "'Tajawal', sans-serif" }}
            >
              {t("privacy.sections.s8.content")}
            </p>
          </section>

          {/* SECTION 9: Changes to Privacy Policy */}
          <section
            id="s9"
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-md group hover:border-[#C6A369]/30 transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl border border-[#C6A369]/30 bg-[#C6A369]/10 text-[#C6A369]">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h2
                  className="text-xl sm:text-2xl font-bold text-white"
                  style={{ fontFamily: "'Cairo', sans-serif" }}
                >
                  {t("privacy.sections.s9.title")}
                </h2>
              </div>
            </div>

            <p
              className="text-sm sm:text-base text-[#9C8FA8] leading-relaxed"
              style={{ fontFamily: "'Tajawal', sans-serif" }}
            >
              {t("privacy.sections.s9.content")}
            </p>
          </section>

          {/* SECTION 10: Contact Us */}
          <section
            id="s10"
            className="rounded-2xl border border-[#C6A369]/40 bg-gradient-to-br from-[#C6A369]/15 via-[#6B1B38]/15 to-[#050308] p-6 sm:p-10 backdrop-blur-xl relative overflow-hidden shadow-[0_0_50px_rgba(198,163,105,0.15)]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3.5 rounded-2xl border border-[#C6A369]/50 bg-[#C6A369]/20 text-[#EAD6A8]">
                <Sparkles className="w-7 h-7" />
              </div>
              <div>
                <h2
                  className="text-2xl sm:text-3xl font-black text-white"
                  style={{ fontFamily: "'Cairo', sans-serif" }}
                >
                  {t("privacy.sections.s10.title")}
                </h2>
              </div>
            </div>

            <p
              className="text-sm sm:text-base text-[#EAE2D2] mb-6 leading-relaxed"
              style={{ fontFamily: "'Tajawal', sans-serif" }}
            >
              {t("privacy.sections.s10.content")}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center gap-3 px-6 py-4 rounded-xl border border-[#C6A369]/40 bg-black/70 text-white font-mono text-base font-bold w-full sm:w-auto justify-between sm:justify-start">
                <Mail className="w-5 h-5 text-[#C6A369]" />
                <span>deceit2026@gmail.com</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl border border-[#C6A369]/40 bg-[#C6A369]/10 hover:bg-[#C6A369]/20 text-[#EAD6A8] text-sm font-bold transition-all"
                  style={{ fontFamily: "'Cairo', sans-serif" }}
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">
                        {t("privacy.copied")}
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>{t("privacy.copyEmail")}</span>
                    </>
                  )}
                </button>

                <a
                  href="mailto:deceit2026@gmail.com"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-[#EAD6A8] via-[#C6A369] to-[#8B6914] text-[#050308] text-sm font-extrabold hover:scale-[1.02] transition-transform shadow-[0_0_20px_rgba(198,163,105,0.4)]"
                  style={{ fontFamily: "'Cairo', sans-serif" }}
                >
                  <Mail className="w-4 h-4" />
                  <span>{t("privacy.sendEmail")}</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
