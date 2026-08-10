interface BackgroundEffectsProps {
  progress: number;
}

export function BackgroundEffects({ progress }: BackgroundEffectsProps) {
  return (
    <>
      {/* طبقة خلفية ثابتة تضمن الظلام في كل الأحوال، خلف كل شيء */}
      <div className="fixed inset-0 -z-10 bg-[#050308]" />

      {/* حبيبات (grain) خفيفة لملمس سينمائي */}
      <svg className="fixed inset-0 w-full h-full opacity-[0.04] pointer-events-none z-[1] mix-blend-overlay">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency={0.9} numOctaves={2} stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>

      {/* تظليل حواف سينمائي */}
      <div className="fixed inset-0 pointer-events-none z-[1]" style={{ boxShadow: "inset 0 0 18vw rgba(0,0,0,0.75)" }} />

      {/* طبقة "خط الفجر" — الإضاءة الذهبية تتلاشى نحو ظلام أرجواني كلما نزلت في الصفحة */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute -top-40 right-[-10%] w-[70vw] h-[70vw] rounded-full blur-[130px]"
          style={{
            background: "radial-gradient(circle, #C6A369 0%, transparent 65%)",
            opacity: Math.max(0.05, 0.22 - progress * 0.2),
            transition: "opacity 0.2s linear",
          }}
        />
        <div
          className="absolute bottom-[-20%] left-[-10%] w-[80vw] h-[80vw] rounded-full blur-[140px]"
          style={{
            background: "radial-gradient(circle, #6B1B38 0%, transparent 65%)",
            opacity: Math.min(0.35, 0.06 + progress * 0.32),
            transition: "opacity 0.2s linear",
          }}
        />
      </div>
    </>
  );
}
