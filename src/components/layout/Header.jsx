// src/components/layout/Header.jsx
import React, { useState } from "react";
import Container from "../common/Container";
import { ArrowRight, Menu, X } from "lucide-react";
import { useSmartResponsive } from "../../hooks/useSmartResponsive";
import logo from "../../assets/codevia-logo-c.png";
import logoSvg from "../../assets/codevia-logo.svg";

const links = [
  { label: "Hizmetlerimiz", href: "#services" },
  { label: "Projelerimiz", href: "#work" },
  { label: "Nasıl Çalışıyoruz?", href: "#process" },
  { label: "Hakkımızda", href: "#about" },
  { label: "İletişim", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { 
    isMobile, 
    isTablet, 
    isTouch, 
    spacing, 
    getTouchOptimizedSize 
  } = useSmartResponsive();

  // Dynamic sizing based on device
  const logoSize = isMobile ? 48 : 56;
  const headerPadding = spacing * 0.5;
  const buttonHeight = getTouchOptimizedSize(36);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <Container>
        <div 
          className="mt-2 sm:mt-3 md:mt-4 flex items-center justify-between rounded-full border border-white/10 bg-white/5 backdrop-blur-lg"
          style={{ 
            padding: `${headerPadding}px ${headerPadding * 1.5}px`,
            minHeight: `${buttonHeight + 8}px`
          }}
        >
          {/* Logo Section */}
          <a href="#home" className="flex items-center gap-2 flex-shrink-0">
            <div
              className="relative flex items-center justify-center overflow-hidden rounded-full"
              style={{ width: `${logoSize}px`, height: `${logoSize}px` }}
            >
              {/* Cam / açık taban */}
              <div className="absolute inset-0 rounded-full bg-white/30 border border-white/20 backdrop-blur-xl"
                   style={{
                     background: "radial-gradient(circle, rgba(255,248,230,0.85) 0%, rgba(255,248,230,0.55) 70%, rgba(255,248,230,0.25) 100%)"
                   }}
              />

              
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at 50% 48%, transparent 54%, rgba(218,213,202,0.95) 55%, rgba(218,213,202,0.55) 58%, transparent 64%)",
                  filter: "blur(1px)",
                  mixBlendMode: "screen",
                  opacity: 0.9
                }}
              />

              {/* Yakın halo */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at 50% 48%, transparent 50%, rgba(255, 248, 230, 0.48) 57%, rgba(215, 209, 195, 0.51) 64%, transparent 76%)",
                  filter: "blur(22px)",
                  mixBlendMode: "screen",
                  opacity: 0.75
                }}
              />

              {/* Uzak geniş halo */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at 50% 52%, transparent 48%, rgba(255, 241, 206, 0.5) 60%, rgba(237, 225, 194, 0.85) 70%, transparent 82%)",
                  filter: "blur(44px)",
                  mixBlendMode: "screen",
                  opacity: 0.45
                }}
              />

              {/* Logo */}
              <img
                src={logoSvg}
                alt="Codevia"
                className="h-full w-full object-contain"
                style={{ transform: 'scale(3.15)', transformOrigin: '50% 50%' }}
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
            </div>

            <span
              className="font-semibold tracking-tight text-white"
              style={{ fontSize: isMobile ? '14px' : '16px' }}
            >
              Codevia
            </span>
          </a>


          {/* Navigation - Hide on mobile and tablet */}
          {!isMobile && !isTablet && (
            <nav className="flex items-center gap-1 text-sm">
              {links.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  className="rounded-full px-3 py-2 text-slate-300 hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap"
                  style={{ 
                    minHeight: `${getTouchOptimizedSize(32)}px`,
                    padding: isTouch ? '8px 12px' : '6px 12px'
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          )}

          {/* CTA Button - Hide on mobile */}
          {!isMobile && (
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1f2a33] to-[#3e4a54] text-white shadow hover:opacity-90 transition-opacity whitespace-nowrap flex-shrink-0"
              style={{ 
                padding: isTouch ? '8px 16px' : '6px 16px',
                minHeight: `${buttonHeight}px`,
                fontSize: isMobile ? '14px' : '15px'
              }}
            >
              Teklif Al <ArrowRight className="h-4 w-4" />
            </a>
          )}

          {/* Mobile Menu Button */}
          {(isMobile || isTablet) && (
            <button
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 transition-transform active:scale-95"
              onClick={() => setOpen((o) => !o)}
              aria-label="Menüyü aç/kapat"
              style={{ 
                width: `${buttonHeight}px`, 
                height: `${buttonHeight}px` 
              }}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {open && (isMobile || isTablet) && (
          <div 
            className="mt-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg"
            style={{ padding: `${spacing * 0.5}px` }}
          >
            <nav className="grid gap-1">
              {links.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  className="rounded-xl px-3 py-2 text-slate-200 hover:bg-white/10 transition-colors" 
                  onClick={() => setOpen(false)}
                  style={{ 
                    minHeight: `${getTouchOptimizedSize(40)}px`,
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="#contact" 
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#1f2a33] to-[#3e4a54] text-white transition-opacity hover:opacity-90" 
                onClick={() => setOpen(false)}
                style={{ 
                  minHeight: `${getTouchOptimizedSize(44)}px`,
                  padding: '8px 16px'
                }}
              >
                Teklif Al <ArrowRight className="h-4 w-4" />
              </a>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}