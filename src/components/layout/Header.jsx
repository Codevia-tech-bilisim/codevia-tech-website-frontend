import React, { useState, useEffect } from "react";
import { ArrowRight, Menu, X, Globe } from "lucide-react";
import { useSmartResponsive } from "../../hooks/useSmartResponsive";
import { useTranslation } from "../../contexts/TranslationContext";
// SVG logo import
import logoSvg from "../../assets/codevia-logo.svg";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isMobile, isTablet, spacing, getTouchOptimizedSize } = useSmartResponsive();
  const { t, language, toggleLanguage } = useTranslation();

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 80); // 50px scroll sonrası background değişir
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: t("services"), href: "#services" },
    { label: t("projectsNav"), href: "#work" },
    { label: t("processNav"), href: "#process" },
    { label: t("about"), href: "#about" },
    { label: t("contact"), href: "#contact" },
  ];

  // Dynamic sizing
  const headerHeight = getTouchOptimizedSize(48);
  const logoContainerSize = headerHeight + 20; // Logo container boyutu
  const headerPadding = spacing * 0.3;
  const buttonHeight = getTouchOptimizedSize(32);
  
  // Logo bitiminden header başlangıcına kadar boşluk
  const gapBetweenLogoAndHeader = 16; // 16px boşluk
  const headerStartPosition = logoContainerSize + gapBetweenLogoAndHeader + 24; // Logo + boşluk + sol padding

  return (
    <>
      {/* LOGO: Yuvarlak krem renkli container ile */}
      <div
        className="fixed top-6 left-6 z-50 flex items-center justify-center"
        style={{ 
          width: `${logoContainerSize}px`, 
          height: `${logoContainerSize}px` 
        }}
      >
        <a 
          href="#home" 
          className="relative flex items-center justify-center rounded-full transition-transform duration-300 hover:scale-105"
          style={{
            width: `${logoContainerSize}px`,
            height: `${logoContainerSize}px`,
            background: `
              radial-gradient(circle at 50% 40%, 
                rgba(218,213,202,0.95) 0%, 
                rgba(218,213,202,0.85) 40%, 
                rgba(218,213,202,0.75) 70%, 
                rgba(218,213,202,0.6) 100%
              )
            `,
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(218,213,202,0.3)',
            boxShadow: `
              0 4px 16px rgba(218,213,202,0.2),
              inset 0 1px 0 rgba(255,255,255,0.3),
              0 0 32px rgba(218,213,202,0.15)
            `
          }}
        >
          {/* Subtle inner glow */}
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: `
                radial-gradient(circle at 30% 30%, 
                  rgba(255,255,255,0.4) 0%, 
                  transparent 50%
                )
              `,
              mixBlendMode: 'overlay'
            }}
          />
          
          {/* SVG Logo - 3.65x büyütülmüş */}
          <img
            src={logoSvg}
            alt="Codevia"
            className="relative z-10 h-[76%] w-[76%] object-contain"
            style={{ 
              transform: 'scale(3.65)', 
              transformOrigin: '50% 51%',
              filter: 'contrast(1.1) saturate(1.2)'
            }}
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
        </a>
      </div>

      {/* HEADER BAR - Logo ile aynı merkez hizasında + Scroll-based background */}
      <header 
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? 'rgba(27, 27, 34, 0.98)' : 'transparent',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
          paddingBottom: scrolled ? '24px' : '0px' // Alt boşluk eklendi
        }}
      >
        <div 
          className="flex items-center"
          style={{ 
            paddingTop: '24px', // Logo ile aynı top pozisyonu
            paddingLeft: `${headerStartPosition}px` // Logo bitiminden sonra başla
          }}
        >
          {/* Blurlu Header Container */}
          <div className="flex-1 pr-6">
            <div
              className="rounded-full border border-white/10 bg-white/5 backdrop-blur-lg flex items-center justify-between"
              style={{
                padding: `${headerPadding}px ${headerPadding * 2}px`,
                height: `${logoContainerSize}px`, // Logo ile aynı yükseklik
              }}
            >
              {/* Sol: Codevia yazısı - logo ile aynı merkez hizasında */}
              <div 
                className="text-white font-bold text-xl select-none flex items-center justify-center"
                style={{ height: '100%' }}
              >
                Codevia
              </div>

              {/* Orta: Navigation - sadece desktop'ta */}
              {!isMobile && (
                <nav className="flex items-center gap-6">
                  {links.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="text-white/80 hover:text-white transition-colors duration-200 font-medium"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              )}

              {/* Sağ: Dil + Teklif Al butonu */}
              <div className="flex items-center gap-3">
                {/* Language Toggle */}
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
                  style={{ height: `${buttonHeight}px` }}
                >
                  <Globe className="h-4 w-4" />
                  <span className="text-sm font-medium">
                    {language === 'tr' ? 'EN' : 'TR'}
                  </span>
                </button>

                {/* Teklif Al butonu - Logo ışıması renklerinde */}
                <a
                  href="#contact"
                  className="flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 font-medium text-slate-800 hover:scale-105"
                  style={{ 
                    height: `${buttonHeight + 4}px`,
                    background: `
                      radial-gradient(circle at 50% 40%, 
                        rgba(218,213,202,0.95) 0%, 
                        rgba(218,213,202,0.85) 40%, 
                        rgba(218,213,202,0.75) 70%, 
                        rgba(218,213,202,0.6) 100%
                      )
                    `,
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(218,213,202,0.4)',
                    boxShadow: `
                      0 4px 12px rgba(218,213,202,0.25),
                      inset 0 1px 0 rgba(255,255,255,0.4),
                      0 0 20px rgba(218,213,202,0.15)
                    `
                  }}
                >
                  <span className="text-sm font-semibold">
                    {language === 'tr' ? 'Teklif Al' : 'Get Quote'}
                  </span>
                </a>

                {/* Mobile menu button */}
                {isMobile && (
                  <button
                    onClick={() => setOpen(!open)}
                    className="flex items-center justify-center text-white hover:text-white/80 transition-colors duration-200 ml-2"
                    style={{ 
                      width: `${buttonHeight}px`, 
                      height: `${buttonHeight}px` 
                    }}
                  >
                    {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobile && open && (
          <div className="absolute top-full left-4 right-4 mt-2 p-4 rounded-2xl bg-black/80 backdrop-blur-lg border border-white/10">
            <nav className="flex flex-col gap-3">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl text-white/80 hover:text-white hover:bg-white/5 transition-all duration-200"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}