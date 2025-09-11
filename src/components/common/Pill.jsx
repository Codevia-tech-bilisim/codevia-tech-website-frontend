import React from "react";

export default function Pill({ children, className = "" }) {
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200 backdrop-blur ${className}`}>
      {children}
    </span>
  );
}
