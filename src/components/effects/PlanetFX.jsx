import React from "react";

export default function PlanetFX({ className = "" }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 ${className}`}
      aria-hidden="true"
      role="presentation"
    >
      {/* subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(50%_40%_at_100%_0%,rgba(62,130,197,0.18),transparent_30%)]" />

      {/* stars */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(rgba(2,6,23,0.95) 0%, transparent 1px)",
          backgroundSize: "2px 2px",
        }}
      />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(rgba(2,6,23,0.95) 0%, transparent 1px)",
          backgroundSize: "3px 3px",
          backgroundPosition: "12px 8px",
        }}
      />

      {/* planet body */}
      <div
        className="absolute left-1/2 top-[48%] -translate-x-1/2 h-[150vh] w-[150vh] rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(2,6,23,0.95) 0%, rgba(2,6,23,0.8) 55%, transparent 70%)",
          maskImage: "radial-gradient(140% 80% at 50% 40%, white, transparent 60%)",
          WebkitMaskImage: "radial-gradient(140% 80% at 50% 40%, white, transparent 60%)",
        }}
      />

      {/* atmosphere glow */}
      <div
        className="absolute left-1/2 top-[46%] -translate-x-1/2 h-[160vh] w-[160vh] rounded-full opacity-90"
        style={{
          background:
            "radial-gradient(circle at center, transparent 50%, rgba(62,74,84,0.6) 58%, transparent 72%)",
          filter: "blur(60px)",
          maskImage: "radial-gradient(140% 80% at 50% 40%, white, transparent 60%)",
          WebkitMaskImage: "radial-gradient(140% 80% at 50% 40%, white, transparent 60%)",
        }}
      />

      {/* bright rim - buz mavisi */}
      <div
        className="absolute left-1/2 top-[48%] -translate-x-1/2 h-[150vh] w-[200vh] rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, transparent 53%, rgba(147,197,253,0.98) 55%, rgba(59,130,246,0.45) 60%, transparent 65%)",
          maskImage: "radial-gradient(140% 80% at 50% 40%, white, transparent 60%)",
          WebkitMaskImage: "radial-gradient(140% 80% at 50% 40%, white, transparent 60%)",
          mixBlendMode: "screen",
          filter: "drop-shadow(0 0 40px rgba(147,197,253,0.18))",
        }}
      />

      {/* thin grid on rim */}
      <div
        className="absolute left-1/2 top-[48%] -translate-x-1/2 h-[150vh] w-[150vh] rounded-full opacity-20"
        style={{
          maskImage: "radial-gradient(140% 80% at 50% 40%, white, transparent 60%)",
          WebkitMaskImage: "radial-gradient(140% 80% at 50% 40%, white, transparent 60%)",
          backgroundImage:
            "linear-gradient(rgba(147,197,253,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(147,197,253,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
    </div>
  );
}
