import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowRight, Shield, Zap, Info, Sparkles, Crown, Skull, Users } from "lucide-react";
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

  // Add entrance animation
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-mount');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('animate-in');
      }, index * 100);
    });
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

  // Get faction icon
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

  return (
    <>
      <SEO characterName={character.name} />
      <Header />
      <div 
        className="min-h-screen bg-[#050308] text-[#EAE2D2] pt-24 pb-16 px-5"
        style={{ background: getFactionBackground(character.team) }}
      >
        <div className="max-w-4xl mx-auto">
          <style>{`
            .animate-on-mount {
              opacity: 0;
              transform: translateY(20px);
              transition: opacity 0.6s ease-out, transform 0.6s ease-out;
            }
            .animate-in {
              opacity: 1;
              transform: translateY(0);
            }
          `}</style>
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
        <div className="mb-6 sm:mb-8 animate-on-mount">
          <div className="flex items-center gap-3 mb-4">
            <div className="relative">
              <div className="absolute inset-0 blur-xl opacity-50" style={{ backgroundColor: factionColor }} />
              <span className="relative text-4xl sm:text-5xl lg:text-6xl">{character.icon}</span>
            </div>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#EAE2D2]"
              style={{ fontFamily: "'Aref Ruqaa', serif" }}
            >
              {t(`roles.${character.name}.name`)}
            </h1>
          </div>
          <div
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold cursor-default hover:scale-105 transition-transform"
            style={{
              fontFamily: "'Cairo', sans-serif",
              backgroundColor: factionColor + "20",
              color: factionColor,
              border: `1px solid ${factionColor}40`,
              boxShadow: `0 0 20px ${factionColor}30`
            }}
          >
            {getFactionIcon(character.team)}
            {t(character.team === 'Kingdom' ? 'kingdom' : character.team === 'Shadows' ? 'shadows' : 'neutral')}
          </div>
        </div>

        {/* Character Image */}
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-8 border-2 group"
             style={{ 
               borderColor: factionColor + "40",
               boxShadow: `0 0 40px ${factionColor}20, inset 0 0 60px rgba(0,0,0,0.3)`
             }}>
          {character.image && imageStatus !== "error" ? (
            <>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
              <img
                src={character.image}
                alt={character.name}
                loading="eager"
                decoding="async"
                onLoad={() => setImageStatus("loaded")}
                onError={handleImageError}
                className={`w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105 ${
                  imageStatus === "loaded" ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              />
              {imageStatus === "loading" && (
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-xs text-[#EAE2D2]/70 z-20"
                  style={{ background: `radial-gradient(circle at 50% 30%, ${factionColor}2E, #0A0710)` }}
                  role="status"
                >
                  <div className="relative">
                    <div className="absolute inset-0 blur-xl opacity-50" style={{ backgroundColor: factionColor }} />
                    <span
                      className="relative h-16 w-16 animate-spin rounded-full border-4 border-t-transparent"
                      style={{ borderColor: `${factionColor} transparent ${factionColor} ${factionColor}` }}
                    />
                  </div>
                  <span style={{ fontFamily: "'Tajawal', sans-serif" }}>{t('character.loadingImage')}</span>
                </div>
              )}
              <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Sparkles className="w-6 h-6" style={{ color: factionColor }} />
              </div>
            </>
          ) : (
            <div
              className="w-full h-full border border-dashed flex items-center justify-center text-6xl"
              style={{
                borderColor: factionColor + "40",
                background: `radial-gradient(circle at 50% 30%, ${factionColor}1F, transparent 70%)`,
              }}
            >
              <div className="relative">
                <div className="absolute inset-0 blur-2xl opacity-50" style={{ backgroundColor: factionColor }} />
                <span className="relative">{character.icon}</span>
              </div>
            </div>
          )}
        </div>

        {/* Description */}
        <div
          className="mb-6 sm:mb-8 p-5 sm:p-7 rounded-xl border backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300 hover:shadow-lg"
          style={{
            borderColor: factionColor + "3A",
            background: `linear-gradient(135deg, ${factionColor}10 0%, rgba(255,255,255,0.02) 100%)`,
            boxShadow: `0 4px 20px ${factionColor}15`
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
          className="mb-6 sm:mb-8 p-5 sm:p-7 rounded-xl border backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300 hover:shadow-lg"
          style={{
            borderColor: factionColor + "3A",
            background: `linear-gradient(135deg, ${factionColor}10 0%, rgba(255,255,255,0.02) 100%)`,
            boxShadow: `0 4px 20px ${factionColor}15`
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="relative">
              <div className="absolute inset-0 blur-lg opacity-50" style={{ backgroundColor: factionColor }} />
              <Zap className="relative w-6 h-6 sm:w-7 sm:h-7" style={{ color: factionColor }} />
            </div>
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
            {t(`roles.${character.name}.ability`)}
          </p>
        </div>

        {/* Cooldown Section */}
        {character.cooldown && (
          <div
            className="mb-6 sm:mb-8 p-5 sm:p-7 rounded-xl border backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300 hover:shadow-lg"
            style={{
              borderColor: factionColor + "3A",
              background: `linear-gradient(135deg, ${factionColor}10 0%, rgba(255,255,255,0.02) 100%)`,
              boxShadow: `0 4px 20px ${factionColor}15`
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="absolute inset-0 blur-lg opacity-50" style={{ backgroundColor: factionColor }} />
                <Shield className="relative w-6 h-6 sm:w-7 sm:h-7" style={{ color: factionColor }} />
              </div>
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
              {t(`roles.${character.name}.cooldown`)}
            </p>
          </div>
        )}

        {/* Constraints Section */}
        <div
          className="p-5 sm:p-7 rounded-xl border backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300 hover:shadow-lg"
          style={{
            borderColor: factionColor + "3A",
            background: `linear-gradient(135deg, ${factionColor}10 0%, rgba(255,255,255,0.02) 100%)`,
            boxShadow: `0 4px 20px ${factionColor}15`
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="relative">
              <div className="absolute inset-0 blur-lg opacity-50" style={{ backgroundColor: factionColor }} />
              <Info className="relative w-6 h-6 sm:w-7 sm:h-7" style={{ color: factionColor }} />
            </div>
            <h2
              className="text-xl sm:text-2xl font-bold"
              style={{ fontFamily: "'Cairo', sans-serif", color: factionColor }}
            >
              {t('character.constraints')}
            </h2>
          </div>
          <ul className="space-y-4">
            {character.constraints.map((constraint, index) => (
              <li
                key={index}
                className="flex items-start gap-3 group"
                style={{ fontFamily: "'Tajawal', sans-serif" }}
              >
                <div className="relative mt-2 flex-shrink-0">
                  <div className="absolute inset-0 blur-md opacity-50 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: factionColor }} />
                  <span
                    className="relative w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: factionColor }}
                  />
                </div>
                <span className="text-sm sm:text-base text-[#9C8FA8] leading-relaxed group-hover:text-[#EAE2D2] transition-colors" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}>{t(`roles.${character.name}.constraints.${index}`)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}