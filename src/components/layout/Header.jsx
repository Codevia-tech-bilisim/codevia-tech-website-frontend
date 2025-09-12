import React, { useState } from "react";
import Container from "../common/Container";
import { ArrowRight, Menu, X, Globe } from "lucide-react";
import { useSmartResponsive } from "../../hooks/useSmartResponsive";
import { useTranslation } from "../../contexts/TranslationContext";
import logo from "../../assets/codevia-logo-c.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { 
    isMobile, 
    isTablet, 
    isTouch, 
    spacing, 
    getTouchOptimizedSize 
  } = useSmartResponsive();
  
  const { t, language, toggleLanguage } = useTranslation();

  const links = [
    { label: t('services'), href: "#services" },
    { label: t('projectsNav'), href: "#work" },
    { label: t('processNav'), href: "#process" },
    { label: t('about'), href: "#about" },
    { label: t('contact'), href: "#contact" },
  ];

  // Dynamic sizing - Logo header ile aynı boyutta
  const headerHeight = getTouchOptimizedSize(48); // Header yüksekliği
  const logoSize = headerHeight - 8; // Logo header'dan biraz küçük (padding için)
  const headerPadding = spacing * 0.3;
  const buttonHeight = getTouchOptimizedSize(32);

  return (
    <>
      {/* Fixed Logo - Header ile aynı seviyede, sol başta */}
      <div 
        className="fixed top-4 left-4 z-50 flex items-center justify-center"
        style={{ height: `${headerHeight}px` }}
      >
        <a href="#home" className="block">
          <img
            src={logo}
            alt="Codevia"
            className="drop-shadow-lg hover:scale-105 transition-transform duration-300"
            style={{ 
              width: `${logoSize}px`, 
              height: `${logoSize}px` 
            }}
          />
        </a>
      </div>

      {/* Extended Header - Logodan başlayıp sağa uzanan */}
      <header className="fixed top-0 left-0 right-0 z-40">
        <div className="flex">
          {/* Logo Space - Logonun olduğu alan */}
          <div style={{ width: `${logoSize + 32}px` }} className="flex-shrink-0"></div>
          
          {/* Header Content - Logodan sonra başlayan kısım */}
          <div className="flex-1 pr-4 pt-4">
            <div 
              className="flex items-center justify-end rounded-full border border-white/10 bg-white/5 backdrop-blur-lg"
              style={{ 
                padding: `${headerPadding}px ${headerPadding * 1.2}px`,
                height: `${headerHeight}px`
              }}
            >
              {/* Desktop Navigation */}
              {!isMobile && (
                <nav className="flex items-center gap-1">
                  {links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="px-3 py-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
                      style={{ 
                        fontSize: isTablet ? '12px' : '13px',
                        minHeight: `${buttonHeight}px`
                      }}
                    >
                      {link.label}
                    </a>
                  ))}
                  
                  {/* Language Toggle */}
                  <button
                    onClick={toggleLanguage}
                    className="ml-2 px-2.5 py-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 flex items-center gap-1"
                    style={{ 
                      fontSize: isTablet ? '11px' : '12px',
                      minHeight: `${buttonHeight}px`
                    }}
                  >
                    <Globe className="h-4 w-4" />
                    {language.toUpperCase()}
                  </button>
                </nav>
              )}

              {/* Mobile Menu Button */}
              {isMobile && (
                <div className="flex items-center gap-2">
                  {/* Mobile Language Toggle */}
                  <button
                    onClick={toggleLanguage}
                    className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
                    style={{ minHeight: `${buttonHeight}px`, minWidth: `${buttonHeight}px` }}
                  >
                    <Globe className="h-3.5 w-3.5" />
                  </button>
                  
                  {/* Mobile Menu Toggle */}
                  <button
                    onClick={() => setOpen(!open)}
                    className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
                    style={{ minHeight: `${buttonHeight}px`, minWidth: `${buttonHeight}px` }}
                  >
                    {open ? <X className="h-3.5 w-3.5" /> : <Menu className="h-3.5 w-3.5" />}
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Navigation Menu */}
            {isMobile && open && (
              <div 
                className="mt-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg overflow-hidden"
                style={{ padding: `${spacing * 0.5}px` }}
              >
                <nav className="flex flex-col">
                  {links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between px-3 py-2.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300"
                      style={{ 
                        fontSize: '14px',
                        minHeight: `${getTouchOptimizedSize(44)}px`
                      }}
                    >
                      {link.label}
                      <ArrowRight className="h-3.5 w-3.5 opacity-50" />
                    </a>
                  ))}
                </nav>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}