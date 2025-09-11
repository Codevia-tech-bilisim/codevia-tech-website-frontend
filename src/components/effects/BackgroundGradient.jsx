import React from "react";

export default function BackgroundGradient({ className = "" }) {
  return (
    <div
      className={`fixed inset-0 z-0 ${className}`}
      aria-hidden="true"
      role="presentation"
      style={{
        background: `
          radial-gradient(ellipse 1200px 800px at 0% 0%, 
            rgba(59, 130, 246, 0.15) 0%,
            rgba(99, 102, 241, 0.10) 25%,
            transparent 50%
          ),
          radial-gradient(ellipse 1000px 600px at 100% 20%, 
            rgba(168, 85, 247, 0.12) 0%,
            rgba(139, 92, 246, 0.08) 30%,
            transparent 60%
          ),
          radial-gradient(ellipse 800px 400px at 50% 80%, 
            rgba(236, 72, 153, 0.08) 0%,
            rgba(219, 39, 119, 0.05) 40%,
            transparent 70%
          ),
          radial-gradient(ellipse 1400px 900px at 80% 100%, 
            rgba(31, 42, 51, 0.4) 0%,
            rgba(62, 74, 84, 0.2) 50%,
            transparent 80%
          ),
          linear-gradient(180deg, 
            rgba(15, 23, 42, 0.95) 0%,
            rgba(15, 23, 42, 0.98) 100%
          )
        `,
      }}
    />
  );
}
