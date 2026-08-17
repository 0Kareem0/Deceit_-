import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowRight, Shield, Zap, Info } from "lucide-react";
import { DETAILED_ROLES } from "../../data/gameData";
import { SEO } from "../ui/SEO";
import { Header } from "../sections/Header";
import { useTranslation } from "react-i18next";

export function CharacterDetail() {
  const { characterName } = useParams<{ characterName: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [imageStatus, setImageStatus] = useState<"loading" | "loaded" | "error">("loading");

  const character = DETAILED_ROLES[decodeURIComponent(characterName || "")];

  const handleBack = () => {
    navigate('/');
    setTimeout(() => {
      const rolesSection = document.getElementById('roles');
      if (rolesSection) {
        rolesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Get faction-specific background
  const getFactionBackground = (team: string) => {
    switch (team) {
      case "Kingdom":
        return "radial-gradient(circle at top right, rgba(198, 163, 105, 0.1), transparent 50%), radial-gradient(circle at bottom left, rgba(198, 163, 105, 0.05), transparent 50%)";
      case "Shadows":
        return "radial-gradient(circle at top right, rgba(156, 51, 87, 0.1), transparent 50%), radial-gradient(circle at bottom left, rgba(156, 51, 87, 0.05), transparent 50%)";
      case "Neutral":
        return "radial-gradient(circle at top right, rgba(140, 130, 160, 0.1), transparent 50%), radial-gradient(circle at bottom left, rgba(140, 130, 160, 0.05), transparent 50%)";
      default:
        return "none";
    }
  };

  if (!character) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[#EAE2D2]">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Cairo', sans-serif" }}>
              {t('character.characterNotFound')}
            </h1>
            <Link 
              to="/#roles" 
              className="text-[#C6A369] hover:text-[#EAD6A8] transition-colors"
              style={{ fontFamily: "'Cairo', sans-serif" }}
            >
              {t('common.backToCharacters')}
            </Link>
        </div>
      </div>
    );
  }

  const factionColor = character.team === "Kingdom" ? "#C6A369" : 
                      character.team === "Shadows" ? "#9C3357" : "#8C82A0";

  const handleImageError = () => {
    console.error(`Unable to load character image: ${character.image}`);
    setImageStatus("error");
  };

  return (
    <>
      <SEO characterName={character.name} />
      <Header />
      <div 
        className="min-h-screen bg-[#050308] text-[#EAE2D2] pt-24 pb-16 px-5"
        style={{ background: getFactionBackground(character.team) }}
      >
        <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="inline-flex items-center gap-2 text-[#8C82A0] hover:text-[#C6A369] transition-colors mb-8 bg-transparent border-none cursor-pointer"
          style={{ fontFamily: "'Cairo', sans-serif" }}
        >
          <ArrowRight className="w-5 h-5 rotate-180" />
          {t('common.backToCharacters')}
        </button>

        {/* Character Header */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl sm:text-4xl">{character.icon}</span>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#EAE2D2]"
              style={{ fontFamily: "'Aref Ruqaa', serif" }}
            >
              {t(`roles.${character.name}.name`)}
            </h1>
          </div>
          <div
            className="inline-block px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold"
            style={{
              fontFamily: "'Cairo', sans-serif",
              backgroundColor: factionColor + "20",
              color: factionColor,
              border: `1px solid ${factionColor}40`
            }}
          >
            {t(character.team === 'Kingdom' ? 'kingdom' : character.team === 'Shadows' ? 'shadows' : 'neutral')}
          </div>
        </div>

        {/* Character Image */}
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-8 border-2"
             style={{ borderColor: factionColor + "40" }}>
          {character.image && imageStatus !== "error" ? (
            <>
              <img
                src={character.image}
                alt={character.name}
                loading="eager"
                decoding="async"
                onLoad={() => setImageStatus("loaded")}
                onError={handleImageError}
                className={`w-full h-full object-cover object-top transition-opacity duration-500 ${
                  imageStatus === "loaded" ? "opacity-100" : "opacity-0"
                }`}
              />
              {imageStatus === "loading" && (
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-xs text-[#EAE2D2]/70"
                  style={{ background: `radial-gradient(circle at 50% 30%, ${factionColor}2E, #0A0710)` }}
                  role="status"
                >
                  <span
                    className="h-12 w-12 animate-spin rounded-full border-2 border-t-transparent"
                    style={{ borderColor: `${factionColor} transparent ${factionColor} ${factionColor}` }}
                  />
                  <span style={{ fontFamily: "'Tajawal', sans-serif" }}>{t('character.loadingImage')}</span>
                </div>
              )}
            </>
          ) : (
            <div
              className="w-full h-full border border-dashed flex items-center justify-center text-6xl"
              style={{
                borderColor: factionColor + "40",
                background: `radial-gradient(circle at 50% 30%, ${factionColor}1F, transparent 70%)`,
              }}
            >
              {character.icon}
            </div>
          )}
        </div>

        {/* Description */}
        <div
          className="mb-6 sm:mb-8 p-4 sm:p-6 rounded-xl border"
          style={{
            borderColor: factionColor + "2A",
            background: "linear-gradient(to bottom, rgba(255,255,255,0.03), transparent)"
          }}
        >
          <p
            className="text-base sm:text-lg leading-relaxed"
            style={{ fontFamily: "'Tajawal', sans-serif", textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}
          >
            {t(`roles.${character.name}.desc`)}
          </p>
        </div>

        {/* Ability Section */}
        <div
          className="mb-6 sm:mb-8 p-4 sm:p-6 rounded-xl border"
          style={{
            borderColor: factionColor + "2A",
            background: "linear-gradient(to bottom, rgba(255,255,255,0.03), transparent)"
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Zap className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: factionColor }} />
            <h2
              className="text-xl sm:text-2xl font-bold"
              style={{ fontFamily: "'Cairo', sans-serif", color: factionColor }}
            >
              {t('character.ability')}
            </h2>
          </div>
          <p
            className="text-base sm:text-lg leading-relaxed"
            style={{ fontFamily: "'Tajawal', sans-serif", textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}
          >
            {character.ability}
          </p>
        </div>

        {/* Cooldown Section */}
        {character.cooldown && (
          <div
            className="mb-6 sm:mb-8 p-4 sm:p-6 rounded-xl border"
            style={{
              borderColor: factionColor + "2A",
              background: "linear-gradient(to bottom, rgba(255,255,255,0.03), transparent)"
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: factionColor }} />
              <h2
                className="text-xl sm:text-2xl font-bold"
                style={{ fontFamily: "'Cairo', sans-serif", color: factionColor }}
              >
                {t('character.cooldown')}
              </h2>
            </div>
            <p
              className="text-base sm:text-lg leading-relaxed"
              style={{ fontFamily: "'Tajawal', sans-serif", textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}
            >
              {character.cooldown}
            </p>
          </div>
        )}

        {/* Constraints Section */}
        <div
          className="p-4 sm:p-6 rounded-xl border"
          style={{
            borderColor: factionColor + "2A",
            background: "linear-gradient(to bottom, rgba(255,255,255,0.03), transparent)"
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Info className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: factionColor }} />
            <h2
              className="text-xl sm:text-2xl font-bold"
              style={{ fontFamily: "'Cairo', sans-serif", color: factionColor }}
            >
              {t('character.constraints')}
            </h2>
          </div>
          <ul className="space-y-3">
            {character.constraints.map((constraint, index) => (
              <li
                key={index}
                className="flex items-start gap-3"
                style={{ fontFamily: "'Tajawal', sans-serif" }}
              >
                <span
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: factionColor }}
                />
                <span className="text-sm sm:text-base text-[#9C8FA8] leading-relaxed" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}>{constraint}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}