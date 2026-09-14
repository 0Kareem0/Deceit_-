import { useState } from "react";
import { Link } from "react-router-dom";
import { Role } from "../../data/gameData";
import { useTranslation } from "react-i18next";

interface CharacterCardProps {
  item: Role & { translatedName?: string; translatedDesc?: string };
  factionColor: string;
}

export function CharacterCard({ item, factionColor }: CharacterCardProps) {
  const { t } = useTranslation();
  const [imageStatus, setImageStatus] = useState<"loading" | "loaded" | "error">("loading");

  const handleImageError = () => {
    console.error(`Unable to load character image: ${item.image}`);
    setImageStatus("error");
  };

  return (
    <Link 
      to={`/character/${encodeURIComponent(item.name)}`}
      className="group relative rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] via-black/40 to-black/80 backdrop-blur-xl p-3.5 sm:p-5 overflow-hidden flex flex-col h-full cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/60 hover:shadow-[0_20px_50px_-15px_rgba(212,175,55,0.35)] active:scale-98"
      style={{ 
        borderColor: factionColor + "2A",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        minHeight: "310px",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
        e.currentTarget.style.boxShadow = `0 20px 40px -12px ${factionColor}40`;
        e.currentTarget.style.borderColor = factionColor + "50";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0) scale(1)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.borderColor = factionColor + "2A";
      }}
    >
      <div
        className="absolute inset-x-5 top-0 h-px opacity-60"
        style={{ background: `linear-gradient(to right, transparent, ${factionColor}, transparent)` }}
      />
      
      {/* Image container with hover effect */}
      <div 
        className="relative w-full aspect-[3/4] rounded-xl mb-4 overflow-hidden flex items-center justify-center bg-black/40"
        style={{
          border: `1px solid ${factionColor}30`,
          boxShadow: `inset 0 0 20px ${factionColor}15`,
        }}
      >
        {item.image && imageStatus !== "error" ? (
          <>
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              decoding="async"
              onLoad={() => setImageStatus("loaded")}
              onError={handleImageError}
              className={`w-full h-full object-contain transition-[opacity,transform] duration-500 ease-out group-hover:scale-105 ${
                imageStatus === "loaded" ? "opacity-100" : "opacity-0"
              }`}
            />
            {imageStatus === "loading" && (
              <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-xs text-[#EAE2D2]/70"
                style={{ background: `radial-gradient(circle at 50% 30%, ${factionColor}2E, #0A0710)` }}
                role="status"
                aria-label={`${t('character.loadingImage')} ${item.name}`}
              >
                <span
                  className="h-8 w-8 animate-spin rounded-full border-2 border-t-transparent"
                  style={{ borderColor: `${factionColor} transparent ${factionColor} ${factionColor}` }}
                />
                <span style={{ fontFamily: "'Tajawal', sans-serif" }}>{t('character.loadingImage')}</span>
              </div>
            )}
            {/* Subtle glow overlay on hover */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background: `radial-gradient(circle at center, ${factionColor}20, transparent 75%)`,
              }}
            />
          </>
        ) : (
          <div
            className="w-full h-full border border-dashed flex items-center justify-center text-4xl transition-all duration-300 group-hover:scale-105"
            style={{
              borderColor: factionColor + "40",
              background: `radial-gradient(circle at 50% 30%, ${factionColor}1F, transparent 70%)`,
            }}
          >
            {item.icon}
          </div>
        )}
      </div>
      
      <h4
        className="text-lg font-bold text-[#EAE2D2] mb-1 transition-colors duration-300 group-hover:text-[#C6A369]"
        style={{ fontFamily: "'Aref Ruqaa', serif" }}
      >
        {"translatedName" in item ? item.translatedName : item.name}
      </h4>
      <p
        className="text-sm text-[#8C82A0] leading-relaxed transition-colors duration-300 group-hover:text-[#EAE2D2]/80 flex-grow"
        style={{ fontFamily: "'Tajawal', sans-serif" }}
      >
        {"translatedDesc" in item ? item.translatedDesc : item.desc}
      </p>
      
      {/* Glow effect on card */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${factionColor}15, transparent 70%)`,
        }}
      />
    </Link>
  );
}
