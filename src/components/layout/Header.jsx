import React, { useState, useEffect } from "react";
import { ArrowRight, Menu, X, Globe } from "lucide-react";
import { useSmartResponsive } from "../../hooks/useSmartResponsive";
import { useTranslation } from "../../contexts/TranslationContext";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isMobile, isTablet, spacing, getTouchOptimizedSize } = useSmartResponsive();
  const { t, language, toggleLanguage } = useTranslation();

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Contact butonuna basınca sayfanın en altına git
  const handleContactScroll = (e) => {
    e.preventDefault();
    
    // Sayfanın en altına smooth scroll
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
    
    // Mobil menüyü kapat
    setOpen(false);
  };

  const links = [
    { label: t("services"), href: "#services" },
    { label: t("projectsNav"), href: "#work" },
    { label: t("processNav"), href: "#process" },
    { label: t("about"), href: "#about" },
    { label: t("contact"), href: "#contact" },
  ];

  // Dynamic sizing
  const headerHeight = getTouchOptimizedSize(48);
  const logoContainerSize = headerHeight + 20;
  const headerPadding = spacing * 0.3;
  const buttonHeight = getTouchOptimizedSize(32);
  
  const gapBetweenLogoAndHeader = 16;
  const headerStartPosition = logoContainerSize + gapBetweenLogoAndHeader + 24;

  return (
    <>
      {/* LOGO - PNG ile güncellendi */}
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
          
          {/* ✅ PNG logo - scaling kaldırıldı, container'a tam ortalandı */}
          <img
            src="/codevia-logo.png"
            alt="Codevia"
            className="relative z-10 w-[110%] h-[110%] sm:w-[100%] sm:h-[100%] object-contain"
            style={{ 
              filter: 'contrast(1.1) saturate(1.2)'
            }}
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
        </a>
      </div>

      {/* HEADER BAR - Değişiklik yok */}
      <header 
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? 'rgba(27, 27, 34, 0.98)' : 'transparent',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
          paddingBottom: scrolled ? '24px' : '0px'
        }}
      >
        <div 
          className="flex items-center"
          style={{ 
            paddingTop: '24px',
            paddingLeft: `${headerStartPosition}px`,
            paddingRight: '1.5rem'
          }}
        >
          <div className="flex-1 pr-6">
            <div
              className="rounded-full border border-white/10 bg-white/5 backdrop-blur-lg flex items-center justify-between"
              style={{
                padding: `${headerPadding}px ${headerPadding * 2}px`,
                height: `${logoContainerSize}px`,
              }}
            >
              {/* Sol: Codevia yazısı */}
              <div 
                className="text-white font-bold select-none flex items-center justify-center"
                style={{ 
                  height: '100%',
                  fontSize: (isMobile || isTablet) ? '16px' : '20px'
                }}
              >
                Codevia
              </div>

              {/* Orta: Navigation - sadece desktop */}
              {!isMobile && !isTablet && (
                <nav className="flex items-center gap-6">
                  {links.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      onClick={link.href === "#contact" ? handleContactScroll : undefined}
                      className="text-white/80 hover:text-white transition-colors duration-200 font-medium"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              )}

              {/* Sağ taraf */}
              <div className="flex items-center">
                {/* Desktop: Dil + Teklif Al */}
                {!isMobile && !isTablet && (
                  <>
                    <button
                      onClick={toggleLanguage}
                      className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 mr-3"
                      style={{ height: `${buttonHeight}px` }}
                    >
                      <Globe className="h-4 w-4" />
                      <span className="text-sm font-medium">
                        {language === 'tr' ? 'EN' : 'TR'}
                      </span>
                    </button>
                    
                    <a
                      href="#contact"
                      onClick={handleContactScroll}
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
                  </>
                )}

                {/* Mobil: Sadece Hamburger */}
                {(isMobile || isTablet) && (
                  <button
                    onClick={() => setOpen(!open)}
                    className="flex items-center justify-center text-white hover:text-white/80 transition-colors duration-200"
                    style={{ 
                      width: `${Math.max(buttonHeight, 44)}px`,
                      height: `${Math.max(buttonHeight, 44)}px`,
                    }}
                  >
                    {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Değişiklik yok */}
        {(isMobile || isTablet) && open && (
          <div 
            className="absolute mt-2 p-4 rounded-2xl bg-black/80 backdrop-blur-lg border border-white/10 shadow-2xl"
            style={{
              top: 'calc(100% + 8px)',
              left: '1rem',
              right: '1rem',
              maxHeight: '80vh',
              overflowY: 'auto'
            }}
          >
            {/* Menu Header */}
            <div className="border-b border-white/10 px-6 py-4">
              <div className="flex items-center justify-between">
                <span className="text-white font-semibold text-lg">Menu</span>
                
                <div className="flex items-center space-x-3">
                  <button
                    onClick={toggleLanguage}
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 rounded-lg px-3 py-2 transition-colors duration-200"
                  >
                    <Globe className="w-4 h-4 text-white/70" />
                    <span className="text-white text-sm font-medium">
                      {language === 'tr' ? 'EN' : 'TR'}
                    </span>
                  </button>
                  
                  <button 
                    onClick={() => setOpen(false)}
                    className="text-white/70 hover:text-white transition-colors p-2"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
{/* Menu Items */}
            <nav className="py-6 flex flex-col gap-3 px-6">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={link.href === "#contact" ? handleContactScroll : () => setOpen(false)}
                  className="flex items-center justify-between p-4 rounded-xl text-white/80 hover:text-white hover:bg-white/5 transition-all duration-200"
                  style={{ minHeight: '52px' }}
                >
                  <span className="font-medium text-lg">{link.label}</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              ))}
              {/* Teklif Al butonu */}
              <div className="pt-4 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={handleContactScroll}
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-semibold text-slate-800 transition-all duration-200"
                  style={{
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
                    `,
                    minHeight: '52px'
                  }}
                >
                  <span>{language === 'tr' ? 'Teklif Al' : 'Get Quote'}</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}