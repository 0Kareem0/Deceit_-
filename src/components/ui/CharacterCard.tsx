import { Role } from "../../data/gameData";

interface CharacterCardProps {
  item: Role;
  factionColor: string;
}

export function CharacterCard({ item, factionColor }: CharacterCardProps) {
  return (
    <div
      className="group relative rounded-2xl border p-5 bg-gradient-to-b from-white/[0.03] to-transparent overflow-hidden"
      style={{ 
        borderColor: factionColor + "2A",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
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
      <div className="relative w-full aspect-square rounded-xl mb-4 overflow-hidden">
        {item.image ? (
          <>
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              style={{
                border: `1px solid ${factionColor}40`,
              }}
            />
            {/* Gradient overlay on hover */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: `linear-gradient(to top, ${factionColor}30, transparent)`,
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
        {item.name}
      </h4>
      <p 
        className="text-sm text-[#8C82A0] leading-relaxed transition-colors duration-300 group-hover:text-[#EAE2D2]/80"
        style={{ fontFamily: "'Tajawal', sans-serif" }}
      >
        {item.desc}
      </p>
      
      {/* Glow effect on card */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${factionColor}15, transparent 70%)`,
        }}
      />
    </div>
  );
}
