import React from "react";

export default function AmbientLighting({ className = "", opacity = 0.3 }) {
  return (
    
      
    <div className={`pointer-events-none absolute inset-0 z-0 ${className}`} 
      style={{ 
        background: `
          radial-gradient(ellipse 800px 600px at 20% 10%, 
            rgba(67, 78, 81, ${opacity}) 0%,
            transparent 50%
          ),
          radial-gradient(ellipse 600px 400px at 80% 60%, 
            rgba(218, 213, 202, ${opacity * 0.5}) 0%,
            transparent 50%
          ),
          radial-gradient(ellipse 700px 500px at 40% 90%, 
            rgba(67, 78, 81, ${opacity * 0.8}) 0%,
            transparent 50%
          )

        `
      }}
    />

  );
}