import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Reveal, Eyebrow, CharacterCard } from "../ui";
import { KINGDOM_ROLES, SHADOW_ROLES, NEUTRAL_ROLES, Character } from "../../data/gameData";

interface ExtendedCharacter extends Character {
  translatedName: string;
  translatedDesc: string;
}

export function Roles() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("all");

  const allCharacters: ExtendedCharacter[] = [
    ...KINGDOM_ROLES.map((r) => ({ ...r, faction: "kingdom", color: "#C6A369", translatedName: t(`roles.${r.name}.name`), translatedDesc: t(`roles.${r.name}.desc`) })),
    ...SHADOW_ROLES.map((r) => ({ ...r, faction: "shadows", color: "#9C3357", translatedName: t(`roles.${r.name}.name`), translatedDesc: t(`roles.${r.name}.desc`) })),
    ...NEUTRAL_ROLES.map((r) => ({ ...r, faction: "neutral", color: "#8C82A0", translatedName: t(`roles.${r.name}.name`), translatedDesc: t(`roles.${r.name}.desc`) })),
  ];
  const filtered = filter === "all" ? allCharacters : allCharacters.filter((c) => c.faction === filter);

  return (
    <section id="roles" className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-20 scroll-mt-16">
      <Reveal className="text-center mb-10">
        <Eyebrow>{t('roles.subtitle')}</Eyebrow>
        <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold" style={{ fontFamily: "'Cairo', sans-serif" }}>
          {t('roles.title')}
        </h2>
        <p className="mt-4 text-[#9C8FA8] max-w-2xl mx-auto" style={{ fontFamily: "'Tajawal', sans-serif", textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}>
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

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch">
        {filtered.map((c, i) => (
          <Reveal key={c.name + i} delay={(i % 4) * 80} className="h-full">
            <CharacterCard item={c} factionColor={c.color} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
