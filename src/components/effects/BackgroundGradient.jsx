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

   const ambientBackground = `
    radial-gradient(ellipse 800px 600px at 20% 10%, 
      rgba(67, 78, 81, 0.15) 0%,
      transparent 50%
    ),
    radial-gradient(ellipse 600px 400px at 80% 60%, 
      rgba(218, 213, 202, 0.08) 0%,
      transparent 50%
    ),
    radial-gradient(ellipse 700px 500px at 40% 90%, 
      rgba(67, 78, 81, 0.12) 0%,
      transparent 50%
    )
  `;
  
  return (
    <div 
      className={`pointer-events-none absolute inset-0 z-0 ${className}`} 
      style={{ background: backgroundBack }} 
    />
  );
}

