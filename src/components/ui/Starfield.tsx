import { useMemo } from "react";

export function Starfield({ count = 85 }: { count?: number }) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }, () => {
        const isGold = Math.random() > 0.45;
        const color = isGold ? "#F0D78C" : "#D4CDFF";
        const animName = isGold ? "starTwinkleGold" : "starTwinklePurple";
        const size = Math.random() * 1.8 + 0.8;
        const dur = 4.5 + Math.random() * 5.5; // 4.5s to 10s smooth slow transition
        const delay = Math.random() * 8; // 0s to 8s independent offsets

        return {
          top: Math.random() * 100,
          left: Math.random() * 100,
          size,
          dur,
          delay,
          color,
          animName,
        };
      }),
    [count]
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((s, i) => (
        <span
          key={i}
          className="starfield-star absolute rounded-full"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            backgroundColor: s.color,
            animation: `${s.animName} ${s.dur}s ease-in-out ${s.delay}s infinite`,
            willChange: "opacity",
            transform: "translateZ(0)",
            contain: "strict",
          }}
        />
      ))}
    </div>
  );
}
