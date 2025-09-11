// src/components/layout/Header.jsx
import React, { useState } from "react";
import Container from "../common/Container";
import { ArrowRight, Menu, X } from "lucide-react";
import logo from "../../assets/codevia-logo-c.png";

const links = [
  { label: "Hizmetlerimiz", href: "#services" },
  { label: "Projelerimiz", href: "#work" },
  { label: "Nasıl Çalışıyoruz?", href: "#process" },
  { label: "Hakkımızda", href: "#about" },
  { label: "İletişim", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <Container>
        <div className="mt-4 flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-lg">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-[#1f2a33] to-[#3e4a54] flex items-center justify-center">
              <img
                src={logo}
                alt="Codevia"
                className="h-5 w-5 object-contain"
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
            </div>
            <span className="text-base font-semibold tracking-tight">Codevia Tech</span>
          </a>

          <nav className="hidden md:flex items-center gap-1 text-sm">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="rounded-full px-3 py-2 text-slate-300 hover:text-white hover:bg-white/10 transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1f2a33] to-[#3e4a54] px-4 py-2 text-white shadow hover:opacity-90">
              Teklif Al <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menüyü aç/kapat"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-lg">
            <nav className="grid">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="rounded-xl px-3 py-2 text-slate-200 hover:bg-white/10" onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              ))}
              <a href="#contact" className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#1f2a33] to-[#3e4a54] px-3 py-2 text-white" onClick={() => setOpen(false)}>
                Teklif Al <ArrowRight className="h-4 w-4" />
              </a>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}

