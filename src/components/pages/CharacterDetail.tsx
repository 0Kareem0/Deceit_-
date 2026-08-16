import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowRight, Shield, Zap, Info } from "lucide-react";
import { DETAILED_ROLES } from "../../data/gameData";
import { SEO } from "../ui/SEO";
import { Header } from "../sections/Header";

export function CharacterDetail() {
  const { characterName } = useParams<{ characterName: string }>();
  const navigate = useNavigate();
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

  if (!character) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[#EAE2D2]">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Cairo', sans-serif" }}>
            الشخصية غير موجودة
          </h1>
          <Link 
            to="/#roles" 
            className="text-[#C6A369] hover:text-[#EAD6A8] transition-colors"
            style={{ fontFamily: "'Cairo', sans-serif" }}
          >
            العودة إلى الشخصيات
          </Link>
        </div>
      </div>
    );
  }

  const factionColor = character.team === "المملكة" ? "#C6A369" : 
                      character.team === "الظلال" ? "#9C3357" : "#8C82A0";

  const handleImageError = () => {
    console.error(`Unable to load character image: ${character.image}`);
    setImageStatus("error");
  };

  return (
    <>
      <SEO characterName={character.name} />
      <Header />
      <div className="min-h-screen bg-[#050308] text-[#EAE2D2] pt-24 pb-16 px-5">
        <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button 
          onClick={handleBack}
          className="inline-flex items-center gap-2 text-[#8C82A0] hover:text-[#C6A369] transition-colors mb-8 bg-transparent border-none cursor-pointer"
          style={{ fontFamily: "'Cairo', sans-serif" }}
        >
          <ArrowRight className="w-5 h-5 rotate-180" />
          العودة إلى الشخصيات
        </button>

        {/* Character Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">{character.icon}</span>
            <h1 
              className="text-4xl sm:text-5xl font-bold text-[#EAE2D2]"
              style={{ fontFamily: "'Aref Ruqaa', serif" }}
            >
              {character.name}
            </h1>
          </div>
          <div 
            className="inline-block px-4 py-2 rounded-full text-sm font-bold"
            style={{ 
              fontFamily: "'Cairo', sans-serif",
              backgroundColor: factionColor + "20",
              color: factionColor,
              border: `1px solid ${factionColor}40`
            }}
          >
            {character.team}
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
                  <span style={{ fontFamily: "'Tajawal', sans-serif" }}>جارٍ تحميل الصورة</span>
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
          className="mb-8 p-6 rounded-xl border"
          style={{ 
            borderColor: factionColor + "2A",
            background: "linear-gradient(to bottom, rgba(255,255,255,0.03), transparent)"
          }}
        >
          <p 
            className="text-lg leading-relaxed"
            style={{ fontFamily: "'Tajawal', sans-serif" }}
          >
            {character.desc}
          </p>
        </div>

        {/* Ability Section */}
        <div 
          className="mb-8 p-6 rounded-xl border"
          style={{ 
            borderColor: factionColor + "2A",
            background: "linear-gradient(to bottom, rgba(255,255,255,0.03), transparent)"
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Zap className="w-6 h-6" style={{ color: factionColor }} />
            <h2 
              className="text-2xl font-bold"
              style={{ fontFamily: "'Cairo', sans-serif", color: factionColor }}
            >
              القدرة
            </h2>
          </div>
          <p 
            className="text-lg leading-relaxed"
            style={{ fontFamily: "'Tajawal', sans-serif" }}
          >
            {character.ability}
          </p>
        </div>

        {/* Cooldown Section */}
        {character.cooldown && (
          <div 
            className="mb-8 p-6 rounded-xl border"
            style={{ 
              borderColor: factionColor + "2A",
              background: "linear-gradient(to bottom, rgba(255,255,255,0.03), transparent)"
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6" style={{ color: factionColor }} />
              <h2 
                className="text-2xl font-bold"
                style={{ fontFamily: "'Cairo', sans-serif", color: factionColor }}
              >
                فترة الانتظار
              </h2>
            </div>
            <p 
              className="text-lg leading-relaxed"
              style={{ fontFamily: "'Tajawal', sans-serif" }}
            >
              {character.cooldown}
            </p>
          </div>
        )}

        {/* Constraints Section */}
        <div 
          className="p-6 rounded-xl border"
          style={{ 
            borderColor: factionColor + "2A",
            background: "linear-gradient(to bottom, rgba(255,255,255,0.03), transparent)"
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Info className="w-6 h-6" style={{ color: factionColor }} />
            <h2 
              className="text-2xl font-bold"
              style={{ fontFamily: "'Cairo', sans-serif", color: factionColor }}
            >
              القيود والتفاصيل
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
                <span className="text-[#EAE2D2]/90 leading-relaxed">{constraint}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}