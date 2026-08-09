import { type ReactNode } from "react";
import { useReveal } from "../../hooks/useReveal";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      style={{ 
        transitionDelay: visible ? `${delay}ms` : "0ms",
        transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      className={`${
        visible 
          ? "opacity-100 translate-y-0 scale-100" 
          : "opacity-0 translate-y-12 scale-95"
      } ${className}`}
    >
      {children}
    </div>
  );
}
