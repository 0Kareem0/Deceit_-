export function BackgroundEffects() {
  return (
    <>
      {/* طبقة خلفية ثابتة تضمن الظلام في كل الأحوال، خلف كل شيء */}
      <div className="fixed inset-0 -z-10 bg-[#050308]" />

      {/* تظليل حواف سينمائي */}
      <div className="fixed inset-0 pointer-events-none z-[1] bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.55)_100%)]" />

      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_85%_-10%,rgba(198,163,105,0.18),transparent_38%),radial-gradient(circle_at_8%_110%,rgba(107,27,56,0.25),transparent_42%)]" />
    </>
  );
}
