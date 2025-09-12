import React from "react";
import Container from "../common/Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-transparent">
      <Container>
        <div className="flex flex-col items-center justify-between gap-3 py-6 text-sm text-slate-400 md:flex-row">
          <p>© {new Date().getFullYear()} Codevia Bilişim Ve Yazılım A.Ş. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-3">
            <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <span>Her zaman açık ve hizmetinizdeyiz.</span>   
          </div>
        </div>
      </Container>
    </footer>
  );
}
