import React from "react";

export default function BackgroundGradient({ className = "" }) {
  const backgroundBack = `
  radial-gradient(ellipse 1200px 800px at 0% 0%, 
              rgba(67, 78, 81, 0.15) 0%,
              rgba(67, 78, 81, 0.08) 25%,
              transparent 50%
            ),
            radial-gradient(ellipse 1000px 600px at 100% 20%, 
              rgba(218, 213, 202, 0.08) 0%,
              rgba(218, 213, 202, 0.04) 30%,
              transparent 60%
            ),
            radial-gradient(ellipse 800px 400px at 50% 80%, 
              rgba(67, 78, 81, 0.12) 0%,
              rgba(67, 78, 81, 0.06) 40%,
              transparent 70%
            ),
            linear-gradient(180deg, 
              rgba(27, 27, 34, 0.95) 0%,
              rgba(27, 27, 34, 0.98) 100%
            )
  `;

  const starField = `
    radial-gradient(circle at 20% 15%, rgba(218,213,202,0.8) 0.4px, transparent 1px),
    radial-gradient(circle at 80% 25%, rgba(67,78,81,0.6) 0.3px, transparent 0.8px),
    radial-gradient(circle at 45% 40%, rgba(218,213,202,0.5) 0.4px, transparent 1px),
    radial-gradient(circle at 70% 60%, rgba(67,78,81,0.7) 0.3px, transparent 0.8px),
    radial-gradient(circle at 25% 75%, rgba(218,213,202,0.6) 0.4px, transparent 1px),
    radial-gradient(circle at 90% 80%, rgba(67,78,81,0.5) 0.3px, transparent 0.8px),
    radial-gradient(circle at 15% 50%, rgba(218,213,202,0.4) 0.3px, transparent 0.8px),
    radial-gradient(circle at 60% 10%, rgba(67,78,81,0.8) 0.4px, transparent 1px),
    radial-gradient(circle at 35% 85%, rgba(218,213,202,0.7) 0.3px, transparent 0.8px),
    radial-gradient(circle at 85% 45%, rgba(67,78,81,0.4) 0.4px, transparent 1px)
  `;

  const starFieldSizes = '120px 120px, 90px 90px, 150px 150px, 110px 110px, 130px 130px, 100px 100px, 80px 80px, 140px 140px, 95px 95px, 125px 125px';
  
  return (
    <div 
      className={`pointer-events-none absolute inset-0 z-0 ${className}`} 
      style={{ background: backgroundBack }} 
    >
      {/* 🌟 Yıldız katmanı - mevcut background'un üzerine */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: starField,
          backgroundSize: starFieldSizes
        }}
      />
    </div>
  );
}