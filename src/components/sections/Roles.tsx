import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Reveal, Eyebrow, CharacterCard } from "../ui";
import { KINGDOM_ROLES, SHADOW_ROLES, NEUTRAL_ROLES, Character } from "../../data/gameData";

export function Roles() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("all");

  const allCharacters: Character[] = [
    ...KINGDOM_ROLES.map((r) => ({ ...r, faction: "المملكة", color: "#C6A369" })),
    ...SHADOW_ROLES.map((r) => ({ ...r, faction: "الظلال", color: "#9C3357" })),
    ...NEUTRAL_ROLES.map((r) => ({ ...r, faction: "محايدون", color: "#8C82A0" })),
  ];
  const filtered = filter === "all" ? allCharacters : allCharacters.filter((c) => c.faction === (filter === "kingdom" ? "المملكة" : filter === "shadows" ? "الظلال" : "محايدون"));

  return (
    <section id="roles" className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-20 scroll-mt-16">
      <Reveal className="text-center mb-10">
        <Eyebrow>{t('roles.subtitle')}</Eyebrow>
        <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold" style={{ fontFamily: "'Cairo', sans-serif" }}>
          {t('roles.title')}
        </h2>
        <p className="mt-4 text-[#8C82A0] max-w-2xl mx-auto" style={{ fontFamily: "'Tajawal', sans-serif" }}>
          {t('roles.description')}
        </p>
      </Reveal>

      <Reveal className="flex flex-wrap justify-center gap-3 mb-10">
        {["all", "kingdom", "shadows", "neutral"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-full text-sm border transition-all duration-300 hover:scale-110 ${
              filter === f
                ? "bg-[#C6A369] text-[#050308] border-[#C6A369] font-bold shadow-[0_4px_20px_-8px_rgba(198,163,105,0.5)]"
                : "border-white/10 text-[#8C82A0] hover:text-[#EAE2D2] hover:border-white/25 hover:bg-white/[0.05]"
            }`}
            style={{ fontFamily: "'Cairo', sans-serif" }}
          >
            {t(`roles.filter.${f}`)}
          </button>
        ))}
      </Reveal>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 items-stretch">
        {filtered.map((c, i) => (
          <Reveal key={c.name + i} delay={(i % 4) * 80} className="h-full">
            <CharacterCard item={c} factionColor={c.color} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
