export function BackgroundEffects() {
  return (
    <>
      {/* Base Dark Background Layer */}
      <div className="fixed inset-0 -z-10 bg-[#050508]" />

      {/* Cinematic Vignette */}
      <div className="fixed inset-0 pointer-events-none z-[1] bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.75)_100%)]" />

      {/* Ambient Gold & Midnight Crimson Radial Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_85%_-10%,rgba(212,175,55,0.22),transparent_40%),radial-gradient(circle_at_10%_110%,rgba(107,27,56,0.3),transparent_45%)]" />
    </>
  );
}
