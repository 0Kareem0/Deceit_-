import { type ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-2 text-[12px] tracking-[0.35em] uppercase text-[#C6A369]/80"
      style={{ fontFamily: "'Cairo', sans-serif" }}
    >
      <span className="w-4 h-px bg-[#C6A369]/50" />
      {children}
      <span className="w-4 h-px bg-[#C6A369]/50" />
    </span>
  );
}
