import React from "react";

export default function PlanetFX({ className = "" }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
    {/* ⭐️ Senin mevcut yıldız alanın – AYNI KALDI */}
    <div 
      className="absolute inset-0 opacity-80" 
      style={{
        backgroundImage: `
          radial-gradient(circle at 25% 25%, rgba(218,213,202,1) 0.5px, transparent 1px),
          radial-gradient(circle at 75% 75%, rgba(67,78,81,0.8) 0.5px, transparent 1px),
          radial-gradient(circle at 45% 85%, rgba(218,213,202,0.6) 0.5px, transparent 1px),
          radial-gradient(circle at 85% 15%, rgba(67,78,81,0.9) 0.5px, transparent 1px),
          radial-gradient(circle at 15% 65%, rgba(218,213,202,0.4) 0.5px, transparent 1px)
        `,
        backgroundSize: '100px 100px, 150px 150px, 80px 80px, 200px 200px, 120px 120px'
      }} 
    />

    {/* 🔵 Gezegen yayı – alt merkezden çıkan tek büyük yay */}
    <div className="absolute left-1/2 bottom-[-33vh] -translate-x-1/2">
      {/* Planet body (çok koyu) – yalnızca üst yay görünsün diye maske */}
      <div
        className="rounded-full"
        style={{
          width: "190vh",
          height: "190vh",
          background:
            "radial-gradient(circle at 50% 45%, #0f1218 0%, #141823 55%, #1b1b22 50%, #1b1b22 85%)",
          WebkitMaskImage:
            "radial-gradient(120% 70% at 50% 0%, transparent 0%, white 45%, white 70%, transparent 100%)",
          maskImage:
            "radial-gradient(120% 70% at 50% 0%, transparent 0%, white 45%, white 70%, transparent 100%)",
          filter: "contrast(1.05)"
        }}
      />

      {/* İnce parlak rim */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 43%, transparent 49%, rgba(218,213,202,0.95) 50%, rgba(218,213,202,0.55) 52%, transparent 56%)",
          WebkitMaskImage:
            "radial-gradient(120% 70% at 50% 0%, transparent 0%, white 45%, white 72%, transparent 100%)",
          maskImage:
            "radial-gradient(120% 70% at 50% 0%, transparent 0%, white 45%, white 72%, transparent 100%)",
          filter: "blur(0.6px)",
          mixBlendMode: "screen",
          opacity: 0.9
        }}
      />

      {/* Yakın atmosfer halo */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 43%, transparent 48%, rgba(67,78,81,0.55) 51%, rgba(67,78,81,0.25) 56%, transparent 68%)",
          WebkitMaskImage:
            "radial-gradient(120% 70% at 50% 0%, transparent 0%, white 40%, white 85%, transparent 100%)",
          maskImage:
            "radial-gradient(120% 70% at 50% 0%, transparent 0%, white 40%, white 85%, transparent 100%)",
          filter: "blur(28px)",
          mixBlendMode: "screen",
          opacity: 0.75
        }}
      />

      {/* Uzak, geniş halo (derinlik) */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 46%, transparent 45%, rgba(67,78,81,0.25) 55%, rgba(67,78,81,0.10) 62%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(120% 70% at 50% 0%, transparent 0%, white 35%, white 90%, transparent 100%)",
          maskImage:
            "radial-gradient(120% 70% at 50% 0%, transparent 0%, white 35%, white 90%, transparent 100%)",
          filter: "blur(60px)",
          mixBlendMode: "screen",
          opacity: 0.45
        }}
      />
    </div>

    {/* ⭐️ Üst parlak yıldızlar – AYNI KALDI */}
    <div 
      className="absolute inset-0 opacity-60" 
      style={{
        background: `
          radial-gradient(circle at 20% 30%, rgba(218,213,202,1) 0.5px, transparent 1.5px),
          radial-gradient(circle at 80% 70%, rgba(67,78,81,1) 0.5px, transparent 1.5px),
          radial-gradient(circle at 60% 20%, rgba(218,213,202,0.8) 0.5px, transparent 1.5px),
          radial-gradient(circle at 40% 90%, rgba(67,78,81,0.9) 0.5px, transparent 1.5px),
          radial-gradient(circle at 10% 80%, rgba(218,213,202,0.6) 0.5px, transparent 1.5px),
          radial-gradient(circle at 90% 30%, rgba(67,78,81,0.7) 0.5px, transparent 1.5px)
        `,
        backgroundSize: '200px 200px, 180px 180px, 250px 250px, 220px 220px, 160px 160px, 190px 190px'
      }} 
    />
  </div>
  );
}
