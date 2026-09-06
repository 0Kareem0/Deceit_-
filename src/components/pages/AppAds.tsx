import { useEffect } from "react";

export function AppAds() {
  useEffect(() => {
    document.title = "app-ads.txt";
  }, []);

  return (
    <div className="min-h-screen bg-[#050308] text-white p-6 font-mono text-sm leading-relaxed selection:bg-[#C6A369]/30">
      <pre className="whitespace-pre-wrap break-all bg-black/50 p-4 rounded-lg border border-white/10 text-gray-200">
        google.com, pub-9285127882501166, DIRECT, f08c47fec0942fa0
      </pre>
    </div>
  );
}
