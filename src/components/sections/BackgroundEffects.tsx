export function BackgroundEffects() {
  return (
    <>
      {/* Dark Background */}
      <div className="fixed inset-0 -z-20 bg-[#050508]" />

      {/* Soft Vignette Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[1] bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(5,5,8,0.9)_100%)]" />
    </>
  );
}
