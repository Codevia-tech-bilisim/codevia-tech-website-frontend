// src/hooks/useSmoothScroll.js
import { useEffect } from "react";

export default function useSmoothScroll(enabled = true) {
  useEffect(() => {
    if (!enabled) return;
    const el = document.documentElement;
    const prev = el.style.scrollBehavior;
    el.style.scrollBehavior = "smooth";
    return () => { el.style.scrollBehavior = prev || "auto"; };
  }, [enabled]);
}
