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

      {/* Mystical atmospheric animation */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Floating mystical particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${(i * 3.7) % 100}%`,
              top: `${(i * 2.9) % 100}%`,
              width: `${2 + (i % 4)}px`,
              height: `${2 + (i % 4)}px`,
              background: i % 3 === 0 ? '#C6A369' : i % 3 === 1 ? '#9C3357' : '#8C82A0',
              opacity: 0.1 + (i % 5) * 0.15,
              animation: `mysticalFloat${i} ${8 + (i % 6)}s ease-in-out infinite`,
              animationDelay: `${(i * 0.4) % 3}s`,
              boxShadow: i % 3 === 0 ? '0 0 10px rgba(198,163,105,0.3)' : i % 3 === 1 ? '0 0 10px rgba(156,51,87,0.3)' : '0 0 10px rgba(140,130,160,0.3)',
            }}
          />
        ))}

        {/* Subtle geometric patterns - mystical symbols */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`symbol-${i}`}
            className="absolute"
            style={{
              left: `${15 + i * 15}%`,
              top: `${10 + (i * 12) % 80}%`,
              width: '40px',
              height: '40px',
              border: '1px solid',
              borderColor: i % 2 === 0 ? 'rgba(198,163,105,0.15)' : 'rgba(156,51,87,0.15)',
              transform: `rotate(${i * 30}deg)`,
              animation: `symbolRotate${i} ${20 + i * 5}s linear infinite`,
              opacity: 0.3,
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                border: '1px solid',
                borderColor: i % 2 === 0 ? 'rgba(198,163,105,0.1)' : 'rgba(156,51,87,0.1)',
                transform: 'rotate(45deg)',
              }}
            />
            <div
              className="absolute inset-2 rounded-full"
              style={{
                border: '1px solid',
                borderColor: i % 2 === 0 ? 'rgba(198,163,105,0.08)' : 'rgba(156,51,87,0.08)',
              }}
            />
          </div>
        ))}

        {/* Mysterious fog/mist layers */}
        <div
          className="absolute w-full h-full"
          style={{
            background: 'radial-gradient(ellipse at 30% 20%, rgba(198,163,105,0.05) 0%, transparent 50%)',
            animation: 'fogMove1 15s ease-in-out infinite',
          }}
        />
        <div
          className="absolute w-full h-full"
          style={{
            background: 'radial-gradient(ellipse at 70% 80%, rgba(156,51,87,0.05) 0%, transparent 50%)',
            animation: 'fogMove2 18s ease-in-out infinite',
          }}
        />
        <div
          className="absolute w-full h-full"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, rgba(140,130,160,0.03) 0%, transparent 60%)',
            animation: 'fogMove3 20s ease-in-out infinite',
          }}
        />

        {/* Subtle light rays */}
        {[...Array(4)].map((_, i) => (
          <div
            key={`ray-${i}`}
            className="absolute"
            style={{
              left: `${20 + i * 20}%`,
              top: '-10%',
              width: '2px',
              height: '40%',
              background: 'linear-gradient(to bottom, rgba(198,163,105,0.1), transparent)',
              transform: `rotate(${i * 15 - 30}deg)`,
              animation: `rayFade${i} ${8 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 1.5}s`,
            }}
          />
        ))}

        {/* Whispering shadows */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`shadow-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${10 + (i * 11) % 80}%`,
              top: `${15 + (i * 9) % 70}%`,
              width: `${60 + (i % 3) * 20}px`,
              height: `${60 + (i % 3) * 20}px`,
              background: 'radial-gradient(circle, rgba(107,27,56,0.1) 0%, transparent 70%)',
              animation: `shadowPulse${i} ${6 + (i % 4)}s ease-in-out infinite`,
              animationDelay: `${(i * 0.8) % 3}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        ${[...Array(30)].map((_, i) => `
          @keyframes mysticalFloat${i} {
            0%, 100% { transform: translate(0, 0) scale(1); opacity: ${0.1 + (i % 5) * 0.15}; }
            25% { transform: translate(${(i % 3) * 20 - 20}px, ${(i % 2) * 15 - 15}px) scale(1.2); }
            50% { transform: translate(${(i % 4) * 15 - 30}px, ${(i % 3) * 20 - 30}px) scale(0.8); }
            75% { transform: translate(${(i % 2) * 25 - 25}px, ${(i % 4) * 10 - 20}px) scale(1.1); }
          }
        `).join('')}
        ${[...Array(6)].map((_, i) => `
          @keyframes symbolRotate${i} {
            0%, 100% { transform: rotate(${i * 30}deg) scale(1); opacity: 0.3; }
            50% { transform: rotate(${i * 30 + 180}deg) scale(1.1); opacity: 0.5; }
          }
        `).join('')}
        @keyframes fogMove1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
          50% { transform: translate(30px, 20px) scale(1.2); opacity: 0.8; }
        }
        @keyframes fogMove2 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
          50% { transform: translate(-20px, 30px) scale(1.1); opacity: 0.7; }
        }
        @keyframes fogMove3 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
          50% { transform: translate(20px, -20px) scale(1.3); opacity: 0.6; }
        }
        ${[...Array(4)].map((_, i) => `
          @keyframes rayFade${i} {
            0%, 100% { opacity: 0; transform: rotate(${i * 15 - 30}deg) translateY(0); }
            50% { opacity: 0.3; transform: rotate(${i * 15 - 30}deg) translateY(20px); }
          }
        `).join('')}
        ${[...Array(8)].map((_, i) => `
          @keyframes shadowPulse${i} {
            0%, 100% { transform: scale(1); opacity: 0.1; }
            50% { transform: scale(1.3); opacity: 0.2; }
          }
        `).join('')}
      `}</style>
    </>
  );
}