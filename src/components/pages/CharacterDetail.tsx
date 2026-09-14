import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  Check,
  Crown,
  Info,
  Shield,
  Skull,
  Users,
  Zap,
  Target,
} from "lucide-react";
import { DETAILED_ROLES } from "../../data/gameData";
import { SEO } from "../ui/SEO";
import { Header } from "../sections/Header";
import { useTranslation } from "react-i18next";

export function CharacterDetail() {
  const { characterName } = useParams<{ characterName: string }>();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const [imageStatus, setImageStatus] = useState<
    "loading" | "loaded" | "error"
  >("loading");

  const character =
    DETAILED_ROLES[decodeURIComponent(characterName || "")];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!character) {
    return (
      <div
        dir={isArabic ? "rtl" : "ltr"}
        className="min-h-screen bg-[#050308] text-[#EAE2D2] flex items-center justify-center px-6 pt-24"
      >
        <div className="text-center">
          <div className="text-6xl mb-6">☠️</div>
          <h1
            className="text-2xl sm:text-3xl font-bold mb-4"
            style={{ fontFamily: "'Cairo', sans-serif" }}
          >
            {t("character.characterNotFound")}
          </h1>
          <Link
            to="/#roles"
            className="inline-flex items-center gap-2 text-[#C6A369] hover:text-[#EAD6A8] transition-colors"
            style={{ fontFamily: "'Cairo', sans-serif" }}
          >
            {t("common.backToCharacters")}
            <ArrowRight className={`w-4 h-4 ${isArabic ? "" : "rotate-180"}`} />
          </Link>
        </div>
      </div>
    );
  }

  const factionColor =
    character.team === "Kingdom"
      ? "#C6A369"
      : character.team === "Shadows"
        ? "#9C3357"
        : "#8C82A0";

  const factionColorSoft =
    character.team === "Kingdom"
      ? "rgba(198, 163, 105, 0.12)"
      : character.team === "Shadows"
        ? "rgba(156, 51, 87, 0.12)"
        : "rgba(140, 130, 160, 0.12)";

  const factionName = t(
    character.team === "Kingdom"
      ? "kingdom"
      : character.team === "Shadows"
        ? "shadows"
        : "neutral"
  );

  const getFactionIcon = (team: string) => {
    switch (team) {
      case "Kingdom":
        return <Crown className="w-3 h-3" />;
      case "Shadows":
        return <Skull className="w-3 h-3" />;
      case "Neutral":
        return <Users className="w-3 h-3" />;
      default:
        return null;
    }
  };

  const handleBack = () => {
    navigate("/");
    setTimeout(() => {
      const rolesSection = document.getElementById("roles");
      if (rolesSection) {
        rolesSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <>
      <SEO characterName={character.name} />
      <Header />

      <main
        dir={isArabic ? "rtl" : "ltr"}
        className="relative min-h-screen overflow-hidden bg-[#050308] text-[#EAE2D2]"
      >
        {/* Premium Background with Soft Glow */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          {/* Soft faction glow */}
          <div
            className="absolute -right-60 -top-60 h-[500px] w-[500px] rounded-full blur-[180px] opacity-[0.08]"
            style={{ backgroundColor: factionColor }}
          />
          <div
            className="absolute -left-60 -bottom-60 h-[500px] w-[500px] rounded-full blur-[180px] opacity-[0.05]"
            style={{ backgroundColor: factionColor }}
          />
          {/* Cinematic vignette */}
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(circle at center, transparent 35%, rgba(5,3,8,0.75) 100%)",
            }}
          />
        </div>

        {/* Main Content */}
        <div className="relative pt-20 sm:pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">

            {/* Compact Header */}
            <div className="mb-4 flex items-center justify-between">
              <button
                onClick={handleBack}
                className="group inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-300 hover:scale-105"
                style={{
                  fontFamily: "'Cairo', sans-serif",
                  color: "#8C82A0",
                  borderColor: `${factionColor}15`,
                  background: "rgba(0,0,0,0.25)",
                  backdropFilter: "blur(6px)",
                }}
              >
                <ArrowRight className={`h-3 w-3 transition-transform group-hover:-translate-x-0.5 ${isArabic ? "" : "rotate-180"}`} />
                {t("common.backToCharacters")}
              </button>
            </div>

            {/* Premium Main Card with Tight Layout */}
            <div
              className="relative overflow-hidden rounded-3xl border backdrop-blur-xl"
              style={{
                borderColor: `${factionColor}20`,
                background: `linear-gradient(135deg, ${factionColor}05 0%, rgba(0,0,0,0.3) 100%)`,
                boxShadow: `0 25px 80px rgba(0,0,0,0.6), 0 0 60px ${factionColor}15`,
              }}
            >
              {/* Soft ambient glow behind character */}
              <div
                className="pointer-events-none absolute inset-0 opacity-20"
                style={{
                  background: `radial-gradient(circle at 60% 50%, ${factionColor}30, transparent 50%)`,
                }}
              />

              <div className="grid lg:grid-cols-[1fr_1.1fr] gap-0">
                
                {/* Left: Character Info - Compact & Prominent */}
                <div className="relative z-10 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                  
                  {/* Subtle Faction Badge */}
                  <div className="mb-4">
                    <div
                      className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10px] font-medium tracking-wide"
                      style={{
                        color: factionColor,
                        borderColor: `${factionColor}25`,
                        backgroundColor: factionColorSoft,
                        fontFamily: "'Cairo', sans-serif",
                      }}
                    >
                      {getFactionIcon(character.team)}
                      {factionName}
                    </div>
                  </div>

                  {/* Luxury Character Name with Glow */}
                  <div className="relative mb-4">
                    {/* Soft glow behind name */}
                    <div
                      className="absolute -inset-4 rounded-full blur-3xl opacity-30"
                      style={{ backgroundColor: factionColor }}
                    />
                    
                    <h1
                      className="relative text-4xl sm:text-5xl lg:text-6xl font-black leading-tight"
                      style={{
                        fontFamily: isArabic ? "'Aref Ruqaa', serif" : "'Cinzel', serif",
                        background: `linear-gradient(135deg, ${factionColor} 0%, #E8D5A3 25%, ${factionColor} 50%, #B8941F 75%, ${factionColor} 100%)`,
                        backgroundSize: "200% 200%",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        animation: "shimmer 4s ease-in-out infinite",
                        filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.5))",
                      }}
                    >
                      {t(`roles.${character.name}.name`)}
                    </h1>
                    
                    {/* Elegant Gold Line */}
                    <div
                      className="relative mt-3 h-px w-32"
                      style={{
                        background: `linear-gradient(to right, ${factionColor}, transparent)`,
                      }}
                    />
                  </div>

                  {/* Description */}
                  <p
                    className="relative mb-5 text-sm sm:text-base leading-7 text-[#A69BAF]"
                    style={{ fontFamily: isArabic ? "'Tajawal', sans-serif" : "'Inter', sans-serif" }}
                  >
                    {t(`roles.${character.name}.desc`)}
                  </p>

                  {/* Compact Status Pills */}
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: isArabic ? "الفريق" : "FACTION", value: factionName, icon: getFactionIcon(character.team) },
                      { label: isArabic ? "الدور" : "ROLE", value: t(`roles.${character.name}.name`), icon: null },
                      { 
                        label: isArabic ? "الحالة" : "STATUS", 
                        value: isArabic ? "متاح" : "AVAILABLE", 
                        icon: (
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8FAE76] opacity-75" />
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#8FAE76]" />
                          </span>
                        ),
                        statusColor: "#A9C69B"
                      },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="rounded-lg border px-2.5 py-2 transition-all duration-300 hover:border-white/[0.1]"
                        style={{
                          borderColor: `${factionColor}12`,
                          backgroundColor: "rgba(255,255,255,0.02)",
                        }}
                      >
                        <div
                          className="mb-1 text-[8px] uppercase tracking-widest text-[#5C5265]"
                          style={{ fontFamily: "'Cairo', sans-serif" }}
                        >
                          {item.label}
                        </div>
                        <div
                          className="flex items-center gap-1.5 text-xs font-semibold"
                          style={{
                            color: item.statusColor || factionColor,
                            fontFamily: "'Cairo', sans-serif",
                          }}
                        >
                          {item.icon}
                          <span className="truncate">{item.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Character Image - Premium Frame */}
                <div className="relative min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
                  <div className="absolute inset-0 overflow-hidden"
                    style={{
                      borderLeft: `1px solid ${factionColor}15`,
                    }}
                  >
                    {character.image && imageStatus !== "error" ? (
                      <>
                        <img
                          src={character.image}
                          alt={character.name}
                          loading="eager"
                          decoding="async"
                          onLoad={() => setImageStatus("loaded")}
                          onError={() => setImageStatus("error")}
                          className={`h-full w-full object-cover object-top transition-all duration-1000 ${
                            imageStatus === "loaded" ? "scale-100 opacity-100" : "scale-105 opacity-0"
                          }`}
                        />
                        {/* Premium overlays */}
                        <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-transparent to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />
                        
                        {/* Subtle vignette */}
                        <div
                          className="absolute inset-0"
                          style={{
                            background: "radial-gradient(circle at center, transparent 45%, rgba(0,0,0,0.5) 100%)",
                          }}
                        />
                        
                        {/* Elegant character tag */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="rounded-full border border-white/5 bg-black/40 px-3 py-1.5 text-[9px] uppercase tracking-[0.25em] text-white/30 backdrop-blur-sm text-center"
                            style={{ fontFamily: "'Cairo', sans-serif" }}
                          >
                            DECEIT • CHARACTER
                          </div>
                        </div>

                        {imageStatus === "loading" && (
                          <div className="absolute inset-0 flex items-center justify-center bg-[#050308]">
                            <div className="text-center">
                              <div
                                className="mx-auto mb-3 h-8 w-8 animate-spin rounded-full border-2 border-transparent"
                                style={{
                                  borderTopColor: factionColor,
                                  borderRightColor: `${factionColor}30`,
                                }}
                              />
                              <span
                                className="text-xs text-[#62596B]"
                                style={{ fontFamily: "'Tajawal', sans-serif" }}
                              >
                                {t("character.loadingImage")}
                              </span>
                            </div>
                          </div>
                        )}
                      </>
                    ) : (
                      <div
                        className="absolute inset-0 flex items-center justify-center"
                        style={{
                          background: `radial-gradient(circle at center, ${factionColor}15, #050308 70%)`,
                        }}
                      >
                        <div className="relative text-7xl">
                          <div
                            className="absolute inset-0 blur-3xl opacity-30"
                            style={{ backgroundColor: factionColor }}
                          />
                          <span className="relative">{character.icon}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Information Sections - Closer & Fuller */}
            <div className="mt-6 grid gap-5 lg:grid-cols-2">
              
              {/* Ability Section */}
              <div
                className="relative overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:border-white/[0.1]"
                style={{
                  borderColor: `${factionColor}12`,
                  backgroundColor: "rgba(255,255,255,0.015)",
                }}
              >
                {/* Subtle top accent */}
                <div
                  className="absolute left-0 right-0 top-0 h-px opacity-25"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${factionColor}, transparent)`,
                  }}
                />
                
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg"
                    style={{
                      color: factionColor,
                      backgroundColor: `${factionColor}08`,
                    }}
                  >
                    <Zap className="h-3.5 w-3.5" />
                  </div>
                  <h2
                    className="text-base font-semibold"
                    style={{
                      fontFamily: "'Cairo', sans-serif",
                      color: factionColor,
                    }}
                  >
                    {t("character.ability")}
                  </h2>
                </div>
                <p
                  className="text-sm leading-6 text-[#9C8FA8]"
                  style={{ fontFamily: isArabic ? "'Tajawal', sans-serif" : "'Inter', sans-serif" }}
                >
                  {t(`roles.${character.name}.ability`)}
                </p>
              </div>

              {/* Cooldown Section */}
              {character.cooldown && (
                <div
                  className="relative overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:border-white/[0.1]"
                  style={{
                    borderColor: `${factionColor}12`,
                    backgroundColor: "rgba(255,255,255,0.015)",
                  }}
                >
                  {/* Subtle top accent */}
                  <div
                    className="absolute left-0 right-0 top-0 h-px opacity-25"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${factionColor}, transparent)`,
                    }}
                  />
                  
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg"
                      style={{
                        color: factionColor,
                        backgroundColor: `${factionColor}08`,
                      }}
                    >
                      <Shield className="h-3.5 w-3.5" />
                    </div>
                    <h2
                      className="text-base font-semibold"
                      style={{
                        fontFamily: "'Cairo', sans-serif",
                        color: factionColor,
                      }}
                    >
                      {t("character.cooldown")}
                    </h2>
                  </div>
                  <p
                    className="text-sm leading-6 text-[#9C8FA8]"
                    style={{ fontFamily: isArabic ? "'Tajawal', sans-serif" : "'Inter', sans-serif" }}
                  >
                    {t(`roles.${character.name}.cooldown`)}
                  </p>
                </div>
              )}

              {/* Rules Section - Full Width */}
              <div
                className="relative overflow-hidden rounded-2xl border p-5 lg:col-span-2 transition-all duration-300 hover:border-white/[0.1]"
                style={{
                  borderColor: `${factionColor}12`,
                  backgroundColor: "rgba(255,255,255,0.015)",
                }}
              >
                {/* Subtle top accent */}
                <div
                  className="absolute left-0 right-0 top-0 h-px opacity-25"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${factionColor}, transparent)`,
                  }}
                />
                
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg"
                    style={{
                      color: factionColor,
                      backgroundColor: `${factionColor}08`,
                    }}
                  >
                    <Info className="h-3.5 w-3.5" />
                  </div>
                  <h2
                    className="text-base font-semibold"
                    style={{
                      fontFamily: "'Cairo', sans-serif",
                      color: factionColor,
                    }}
                  >
                    {t("character.constraints")}
                  </h2>
                </div>
                
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {character.constraints.map((_, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 rounded-xl border border-white/[0.05] bg-white/[0.015] p-3.5 transition-all duration-300 hover:border-white/[0.1] hover:bg-white/[0.025]"
                    >
                      <div
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded"
                        style={{
                          backgroundColor: `${factionColor}12`,
                          color: factionColor,
                        }}
                      >
                        <Check className="h-3 w-3" />
                      </div>
                      <span
                        className="text-sm leading-5.5 text-[#9C8FA8]"
                        style={{ fontFamily: isArabic ? "'Tajawal', sans-serif" : "'Inter', sans-serif" }}
                      >
                        {t(`roles.${character.name}.constraints.${index}`)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Elegant Footer */}
            <div className="mt-8 flex flex-col items-center">
              <div className="flex items-center gap-4 mb-3">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#C6A369]/15" />
                <div
                  className="flex h-7 w-7 items-center justify-center rounded-full border"
                  style={{
                    borderColor: `${factionColor}15`,
                    color: factionColor,
                    backgroundColor: `${factionColor}05`,
                  }}
                >
                  <Target className="h-3 w-3" />
                </div>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#C6A369]/15" />
              </div>
              <p
                className="text-center text-[10px] uppercase tracking-[0.35em] text-[#5C5265]"
                style={{ fontFamily: "'Cairo', sans-serif" }}
              >
                {isArabic ? "كل اختيار له عواقبه" : "EVERY CHOICE HAS CONSEQUENCES"}
              </p>
            </div>

          </div>
        </div>

        {/* Shimmer Animation */}
        <style>{`
          @keyframes shimmer {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
        `}</style>
      </main>
    </>
  );
}