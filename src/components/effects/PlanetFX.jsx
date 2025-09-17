import React from "react";
import { useSmartResponsive } from "../../hooks/useSmartResponsive";

export default function PlanetFX({ className = "" }) {
  const { isMobile, isTablet } = useSmartResponsive();

  // Mobil için gezegen pozisyonunu ve boyutunu ayarla
  const getPlanetStyles = () => {
    if (isMobile) {
      return {
        // Mobilde gezegen daha yukarıda ve çok daha küçük
        bottom: '-12vh', // Daha da yukarı
        width: '70vh', // Daha da küçük
        height: '70vh'
      };
    } else if (isTablet) {
      return {
        bottom: '-35vh',
        width: '160vh',
        height: '160vh'
      };
    } else {
      return {
        // Desktop'ta eski büyük boyut korundu
        bottom: '-39vh',
        width: '170vh',
        height: '170vh'
      };
    }
  };

  const planetStyles = getPlanetStyles();

  // Mobil için maske ayarları - gezegen daha fazla görünsün
  const getMaskImage = () => {
    if (isMobile) {
      return "radial-gradient(120% 80% at 50% 0%, transparent 0%, white 35%, white 75%, transparent 100%)";
    } else {
      return "radial-gradient(120% 70% at 50% 0%, transparent 0%, white 45%, white 70%, transparent 100%)";
    }
  };

  const maskImage = getMaskImage();

  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      {/* ⭐️ Yıldız alanı - mobilde daha az yoğun */}
      <div 
        className={`absolute inset-0 ${isMobile ? 'opacity-60' : 'opacity-80'}`}
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(218,213,202,1) 0.5px, transparent 1px),
            radial-gradient(circle at 75% 75%, rgba(67,78,81,0.8) 0.5px, transparent 1px),
            radial-gradient(circle at 45% 85%, rgba(218,213,202,0.6) 0.5px, transparent 1px),
            radial-gradient(circle at 85% 15%, rgba(67,78,81,0.9) 0.5px, transparent 1px),
            radial-gradient(circle at 15% 65%, rgba(218,213,202,0.4) 0.5px, transparent 1px)
          `,
          backgroundSize: isMobile 
            ? '80px 80px, 120px 120px, 60px 60px, 160px 160px, 100px 100px'
            : '100px 100px, 150px 150px, 80px 80px, 200px 200px, 120px 120px'
        }} 
      />

      {/* 🔵 Gezegen yayı */}
      <div 
        className="absolute left-1/2 -translate-x-1/2"
        style={{ 
          bottom: planetStyles.bottom
        }}
      >
        {/* Planet body */}
        <div
          className="rounded-full"
          style={{
            width: planetStyles.width,
            height: planetStyles.height,
            background:
              "radial-gradient(circle at 50% 45%, #0f1218 0%, #141823 55%, #1b1b22 50%, #1b1b22 85%)",
            WebkitMaskImage: maskImage,
            maskImage: maskImage,
            filter: "contrast(1.05)"
          }}
        />

        {/* İnce parlak rim */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 50% 43%, transparent 49%, rgba(218,213,202,0.95) 50%, rgba(218,213,202,0.55) 52%, transparent 56%)",
            WebkitMaskImage: maskImage,
            maskImage: maskImage,
            filter: "blur(0.6px)",
            mixBlendMode: "screen",
            opacity: isMobile ? 0.8 : 0.9 // Mobilde biraz daha az parlak
          }}
        />

        {/* Yakın atmosfer halo */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 50% 43%, transparent 48%, rgba(67,78,81,0.55) 51%, rgba(67,78,81,0.25) 56%, transparent 68%)",
            WebkitMaskImage: isMobile
              ? "radial-gradient(120% 80% at 50% 0%, transparent 0%, white 30%, white 90%, transparent 100%)"
              : "radial-gradient(120% 70% at 50% 0%, transparent 0%, white 40%, white 85%, transparent 100%)",
            maskImage: isMobile
              ? "radial-gradient(120% 80% at 50% 0%, transparent 0%, white 30%, white 90%, transparent 100%)"
              : "radial-gradient(120% 70% at 50% 0%, transparent 0%, white 40%, white 85%, transparent 100%)",
            filter: `blur(${isMobile ? '20px' : '28px'})`, // Mobilde daha az blur
            mixBlendMode: "screen",
            opacity: isMobile ? 0.6 : 0.75
          }}
        />

        {/* Uzak, geniş halo */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 50% 46%, transparent 45%, rgba(67,78,81,0.25) 55%, rgba(67,78,81,0.10) 62%, transparent 75%)",
            WebkitMaskImage: isMobile
              ? "radial-gradient(120% 80% at 50% 0%, transparent 0%, white 25%, white 95%, transparent 100%)"
              : "radial-gradient(120% 70% at 50% 0%, transparent 0%, white 35%, white 90%, transparent 100%)",
            maskImage: isMobile
              ? "radial-gradient(120% 80% at 50% 0%, transparent 0%, white 25%, white 95%, transparent 100%)"
              : "radial-gradient(120% 70% at 50% 0%, transparent 0%, white 35%, white 90%, transparent 100%)",
            filter: `blur(${isMobile ? '40px' : '60px'})`, // Mobilde daha az blur
            mixBlendMode: "screen",
            opacity: isMobile ? 0.3 : 0.45
          }}
        />
      </div>

      {/* ⭐️ Üst parlak yıldızlar */}
      <div 
        className={`absolute inset-0 ${isMobile ? 'opacity-40' : 'opacity-60'}`}
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(218,213,202,1) 0.5px, transparent 1.5px),
            radial-gradient(circle at 80% 70%, rgba(67,78,81,1) 0.5px, transparent 1.5px),
            radial-gradient(circle at 60% 20%, rgba(218,213,202,0.8) 0.5px, transparent 1.5px),
            radial-gradient(circle at 40% 90%, rgba(67,78,81,0.9) 0.5px, transparent 1.5px),
            radial-gradient(circle at 10% 80%, rgba(218,213,202,0.6) 0.5px, transparent 1.5px),
            radial-gradient(circle at 90% 30%, rgba(67,78,81,0.7) 0.5px, transparent 1.5px)
          `,
          backgroundSize: isMobile 
            ? '160px 160px, 140px 140px, 200px 200px, 180px 180px, 120px 120px, 150px 150px'
            : '200px 200px, 180px 180px, 250px 250px, 220px 220px, 160px 160px, 190px 190px'
        }} 
      />
    </div>
  );
}