import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  Check,
  Crown,
  Info,
  Shield,
  Skull,
  Sparkles,
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
  const { t } = useTranslation();

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
        dir="rtl"
        className="min-h-screen bg-[#050308] text-[#EAE2D2] flex items-center justify-center px-6"
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
            <ArrowRight className="w-4 h-4" />
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
        return <Crown className="w-4 h-4" />;

      case "Shadows":
        return <Skull className="w-4 h-4" />;

      case "Neutral":
        return <Users className="w-4 h-4" />;

      default:
        return null;
    }
  };

  const handleBack = () => {
    navigate("/");

    setTimeout(() => {
      const rolesSection = document.getElementById("roles");

      if (rolesSection) {
        rolesSection.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 100);
  };

  const SectionCard = ({
    icon,
    title,
    children,
    className = "",
  }: {
    icon: React.ReactNode;
    title: string;
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <section
        className={`group relative overflow-hidden rounded-2xl border p-5 sm:p-7 transition-all duration-500 hover:-translate-y-1 ${className}`}
        style={{
          borderColor: `${factionColor}25`,
          background: `
            linear-gradient(
              135deg,
              ${factionColor}0D 0%,
              rgba(255,255,255,0.025) 50%,
              rgba(0,0,0,0.2) 100%
            )
          `,
          boxShadow: `0 15px 50px ${factionColor}08`,
        }}
      >
        {/* Ambient glow */}
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full blur-3xl opacity-10 transition-opacity duration-500 group-hover:opacity-20"
          style={{
            backgroundColor: factionColor,
          }}
        />

        {/* Top decorative line */}
        <div
          className="absolute left-0 right-0 top-0 h-px opacity-50"
          style={{
            background: `linear-gradient(90deg, transparent, ${factionColor}, transparent)`,
          }}
        />

        <div className="relative">
          <div className="flex items-center gap-3 mb-5">
            <div
              className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border"
              style={{
                color: factionColor,
                borderColor: `${factionColor}30`,
                backgroundColor: `${factionColor}0D`,
                boxShadow: `0 0 25px ${factionColor}10`,
              }}
            >
              <div
                className="absolute inset-0 rounded-xl blur-md opacity-40"
                style={{
                  backgroundColor: factionColor,
                }}
              />

              <div className="relative">{icon}</div>
            </div>

            <div>
              <p
                className="text-[9px] uppercase tracking-[0.3em] text-[#62596B]"
                style={{
                  fontFamily: "'Cairo', sans-serif",
                }}
              >
                DECEIT
              </p>

              <h2
                className="text-xl sm:text-2xl font-bold"
                style={{
                  fontFamily: "'Cairo', sans-serif",
                  color: factionColor,
                }}
              >
                {title}
              </h2>
            </div>
          </div>

          {children}
        </div>
      </section>
    );
  };

  return (
    <>
      <SEO characterName={character.name} />

      <Header />

      <main
        dir="rtl"
        className="relative min-h-screen overflow-hidden bg-[#050308] text-[#EAE2D2]"
      >
        {/* ============================================================
            BACKGROUND
        ============================================================ */}

        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          {/* Main faction glow */}
          <div
            className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full blur-[140px] opacity-[0.08]"
            style={{
              backgroundColor: factionColor,
            }}
          />

          <div
            className="absolute -left-40 -bottom-40 h-[500px] w-[500px] rounded-full blur-[140px] opacity-[0.06]"
            style={{
              backgroundColor: factionColor,
            }}
          />

          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: `
                linear-gradient(${factionColor} 1px, transparent 1px),
                linear-gradient(90deg, ${factionColor} 1px, transparent 1px)
              `,
              backgroundSize: "70px 70px",
            }}
          />

          {/* Vignette */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at center, transparent 20%, rgba(5,3,8,0.65) 100%)",
            }}
          />
        </div>

        {/* ============================================================
            PAGE
        ============================================================ */}

        <div className="relative pt-24 sm:pt-28 pb-20 px-4 sm:px-6">
          <div className="mx-auto max-w-6xl">

            {/* ========================================================
                HERO
            ======================================================== */}

            <div
              className="relative overflow-hidden rounded-[28px] border bg-[#09070D]/90 shadow-2xl backdrop-blur-xl"
              style={{
                borderColor: `${factionColor}20`,
                boxShadow: `
                  0 30px 100px rgba(0,0,0,0.45),
                  0 0 80px ${factionColor}08
                `,
              }}
            >
              {/* Hero background glow */}
              <div
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                  background: `
                    radial-gradient(
                      circle at 25% 40%,
                      ${factionColor}22,
                      transparent 35%
                    )
                  `,
                }}
              />

              {/* ======================================================
                  BACK BUTTON — NOW INSIDE THE HERO
              ====================================================== */}

              <div className="relative z-30 px-5 pt-5 sm:px-8 sm:pt-6">
                <button
                  onClick={handleBack}
                  className="group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs sm:text-sm transition-all duration-300 hover:-translate-x-1"
                  style={{
                    fontFamily: "'Cairo', sans-serif",
                    color: "#9C8FA8",
                    borderColor: "rgba(255,255,255,0.08)",
                    background: "rgba(0,0,0,0.25)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:-translate-x-1" />

                  {t("common.backToCharacters")}
                </button>
              </div>

              {/* ======================================================
                  HERO CONTENT
              ====================================================== */}

              <div className="grid lg:grid-cols-[1.35fr_1fr]">

                {/* ====================================================
                    CHARACTER IMAGE
                ==================================================== */}

                <div className="relative min-h-[390px] overflow-hidden sm:min-h-[500px] lg:min-h-[600px] lg:order-1">
                  {character.image && imageStatus !== "error" ? (
                    <>
                      <img
                        src={character.image}
                        alt={character.name}
                        loading="eager"
                        decoding="async"
                        onLoad={() => setImageStatus("loaded")}
                        onError={() => {
                          console.error(
                            `Unable to load character image: ${character.image}`
                          );

                          setImageStatus("error");
                        }}
                        className={`absolute inset-0 h-full w-full object-cover object-top transition-all duration-1000 ${
                          imageStatus === "loaded"
                            ? "scale-100 opacity-100"
                            : "scale-105 opacity-0"
                        }`}
                      />

                      {/* Dark image overlay */}
                      <div className="absolute inset-0 bg-gradient-to-l from-[#09070D] via-transparent to-transparent" />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#09070D] via-transparent to-transparent" />

                      {/* Faction glow */}
                      <div
                        className="absolute inset-0 opacity-20 mix-blend-screen"
                        style={{
                          background: `
                            radial-gradient(
                              circle at 50% 50%,
                              ${factionColor},
                              transparent 55%
                            )
                          `,
                        }}
                      />

                      {/* Bottom vignette */}
                      <div
                        className="absolute bottom-0 left-0 right-0 h-40"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(9,7,13,0.9), transparent)",
                        }}
                      />

                      {/* Character label */}
                      <div className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[9px] uppercase tracking-[0.25em] text-white/50 backdrop-blur-md">
                        DECEIT • CHARACTER
                      </div>

                      {/* Image corner decoration */}
                      <div
                        className="absolute bottom-5 right-5 h-10 w-10 rounded-full border opacity-50"
                        style={{
                          borderColor: `${factionColor}50`,
                        }}
                      >
                        <div
                          className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
                          style={{
                            backgroundColor: factionColor,
                            boxShadow: `0 0 12px ${factionColor}`,
                          }}
                        />
                      </div>

                      {/* Loading */}
                      {imageStatus === "loading" && (
                        <div className="absolute inset-0 flex items-center justify-center bg-[#09070D]">
                          <div className="text-center">
                            <div
                              className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-2 border-transparent"
                              style={{
                                borderTopColor: factionColor,
                                borderRightColor: `${factionColor}50`,
                              }}
                            />

                            <span
                              className="text-xs text-[#817688]"
                              style={{
                                fontFamily: "'Tajawal', sans-serif",
                              }}
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
                        background: `
                          radial-gradient(
                            circle at center,
                            ${factionColor}20,
                            #09070D 65%
                          )
                        `,
                      }}
                    >
                      <div className="relative text-8xl">
                        <div
                          className="absolute inset-0 blur-3xl opacity-40"
                          style={{
                            backgroundColor: factionColor,
                          }}
                        />

                        <span className="relative">
                          {character.icon}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* ====================================================
                    CHARACTER INFORMATION
                ==================================================== */}

                <div className="relative z-10 flex flex-col justify-center p-6 sm:p-10 lg:order-2 lg:p-12">

                  {/* Faction */}
                  <div
                    className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold"
                    style={{
                      color: factionColor,
                      borderColor: `${factionColor}35`,
                      backgroundColor: factionColorSoft,
                      fontFamily: "'Cairo', sans-serif",
                      boxShadow: `0 0 30px ${factionColor}08`,
                    }}
                  >
                    {getFactionIcon(character.team)}

                    {factionName}
                  </div>

                  {/* Character icon */}
                  <div className="relative mb-5 w-fit">
                    <div
                      className="absolute inset-0 scale-125 rounded-full blur-3xl opacity-30"
                      style={{
                        backgroundColor: factionColor,
                      }}
                    />

                    <div
                      className="relative flex h-20 w-20 items-center justify-center rounded-2xl border text-5xl"
                      style={{
                        borderColor: `${factionColor}30`,
                        background: `
                          linear-gradient(
                            135deg,
                            ${factionColor}18,
                            rgba(0,0,0,.3)
                          )
                        `,
                        boxShadow: `0 0 35px ${factionColor}10`,
                      }}
                    >
                      {character.icon}
                    </div>
                  </div>

                  {/* Name */}
                  <h1
                    className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
                    style={{
                      fontFamily: "'Aref Ruqaa', serif",
                      textShadow: `0 0 40px ${factionColor}20`,
                    }}
                  >
                    {t(`roles.${character.name}.name`)}
                  </h1>

                  {/* Decorative divider */}
                  <div className="mt-5 flex items-center gap-3">
                    <div
                      className="h-px w-16"
                      style={{
                        backgroundColor: factionColor,
                      }}
                    />

                    <Sparkles
                      className="h-4 w-4"
                      style={{
                        color: factionColor,
                      }}
                    />

                    <div
                      className="h-px w-8 opacity-40"
                      style={{
                        backgroundColor: factionColor,
                      }}
                    />
                  </div>

                  {/* Description */}
                  <p
                    className="mt-6 max-w-xl text-sm leading-8 text-[#A69BAF] sm:text-base"
                    style={{
                      fontFamily: "'Tajawal', sans-serif",
                    }}
                  >
                    {t(`roles.${character.name}.desc`)}
                  </p>

                  {/* ==================================================
                      META CARDS
                  ================================================== */}

                  <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">

                    {/* Faction */}
                    <div
                      className="rounded-xl border p-3 transition-all duration-300 hover:-translate-y-0.5"
                      style={{
                        borderColor: `${factionColor}18`,
                        backgroundColor: "rgba(255,255,255,0.025)",
                      }}
                    >
                      <div
                        className="mb-1 text-[9px] uppercase tracking-widest text-[#62596B]"
                        style={{
                          fontFamily: "'Cairo', sans-serif",
                        }}
                      >
                        الفريق
                      </div>

                      <div
                        className="flex items-center gap-2 text-sm font-semibold"
                        style={{
                          color: factionColor,
                          fontFamily: "'Cairo', sans-serif",
                        }}
                      >
                        {getFactionIcon(character.team)}

                        {factionName}
                      </div>
                    </div>

                    {/* Role */}
                    <div
                      className="rounded-xl border p-3 transition-all duration-300 hover:-translate-y-0.5"
                      style={{
                        borderColor: `${factionColor}18`,
                        backgroundColor: "rgba(255,255,255,0.025)",
                      }}
                    >
                      <div
                        className="mb-1 text-[9px] uppercase tracking-widest text-[#62596B]"
                        style={{
                          fontFamily: "'Cairo', sans-serif",
                        }}
                      >
                        الدور
                      </div>

                      <div
                        className="text-sm font-semibold text-[#EAE2D2]"
                        style={{
                          fontFamily: "'Cairo', sans-serif",
                        }}
                      >
                        {t(`roles.${character.name}.name`)}
                      </div>
                    </div>

                    {/* Status */}
                    <div
                      className="col-span-2 rounded-xl border p-3 transition-all duration-300 hover:-translate-y-0.5 sm:col-span-1"
                      style={{
                        borderColor: `${factionColor}18`,
                        backgroundColor: "rgba(255,255,255,0.025)",
                      }}
                    >
                      <div
                        className="mb-1 text-[9px] uppercase tracking-widest text-[#62596B]"
                        style={{
                          fontFamily: "'Cairo', sans-serif",
                        }}
                      >
                        الحالة
                      </div>

                      <div
                        className="flex items-center gap-2 text-sm font-semibold"
                        style={{
                          color: "#A9C69B",
                          fontFamily: "'Cairo', sans-serif",
                        }}
                      >
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8FAE76] opacity-50" />

                          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#8FAE76]" />
                        </span>

                        متاح
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ============================================================
                INFORMATION SECTIONS
            ============================================================ */}

            <div className="mt-8 grid gap-5 lg:grid-cols-2">

              {/* Ability */}
              <SectionCard
                icon={<Zap className="h-5 w-5" />}
                title={t("character.ability")}
              >
                <p
                  className="text-sm leading-8 text-[#C1B8C8] sm:text-base"
                  style={{
                    fontFamily: "'Tajawal', sans-serif",
                  }}
                >
                  {t(`roles.${character.name}.ability`)}
                </p>
              </SectionCard>

              {/* Cooldown */}
              {character.cooldown && (
                <SectionCard
                  icon={<Shield className="h-5 w-5" />}
                  title={t("character.cooldown")}
                >
                  <p
                    className="text-sm leading-8 text-[#C1B8C8] sm:text-base"
                    style={{
                      fontFamily: "'Tajawal', sans-serif",
                    }}
                  >
                    {t(`roles.${character.name}.cooldown`)}
                  </p>
                </SectionCard>
              )}

              {/* Constraints */}
              <SectionCard
                icon={<Info className="h-5 w-5" />}
                title={t("character.constraints")}
                className="lg:col-span-2"
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  {character.constraints.map((_, index) => (
                    <div
                      key={index}
                      className="group/item flex items-start gap-3 rounded-xl border border-white/[0.04] bg-white/[0.015] p-4 transition-all duration-300 hover:border-white/[0.08] hover:bg-white/[0.03]"
                    >
                      <div
                        className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                        style={{
                          backgroundColor: `${factionColor}12`,
                          color: factionColor,
                        }}
                      >
                        <Check className="h-3.5 w-3.5" />
                      </div>

                      <span
                        className="text-sm leading-7 text-[#A69BAF] transition-colors group-hover/item:text-[#D8D0DB]"
                        style={{
                          fontFamily: "'Tajawal', sans-serif",
                        }}
                      >
                        {t(
                          `roles.${character.name}.constraints.${index}`
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </SectionCard>
            </div>

            {/* ============================================================
                BOTTOM DECORATION
            ============================================================ */}

            <div className="mt-12 flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-white/[0.06] sm:w-32" />

              <div
                className="flex h-10 w-10 items-center justify-center rounded-full border"
                style={{
                  borderColor: `${factionColor}25`,
                  color: factionColor,
                  backgroundColor: `${factionColor}08`,
                }}
              >
                <Target className="h-4 w-4" />
              </div>

              <div className="h-px w-16 bg-white/[0.06] sm:w-32" />
            </div>

            <p
              className="mt-4 text-center text-[10px] uppercase tracking-[0.4em] text-[#e7e6e7]"
              style={{
                fontFamily: "'Cairo', sans-serif",
              }}
            >
              كل اختيار له عواقبه
            </p>
          </div>
        </div>
      </main>
    </>
  );
}