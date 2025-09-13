import React from "react";
import Container from "../common/Container";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";
import { useSmartResponsive } from "../../hooks/useSmartResponsive";
import { useTranslation } from "../../contexts/TranslationContext";
import logoSvg from "../../assets/codevia-logo.svg";

export default function Footer() {
  const { 
    isMobile, 
    isTablet, 
    spacing 
  } = useSmartResponsive();
  
  const { t } = useTranslation();

  const footerLinks = {
    services: {
      title: t('services'),
      links: [
        { name: t('webDev'), href: "#services" },
        { name: t('mobileDev'), href: "#services" },
        { name: t('aiData'), href: "#services" },
        { name: t('uiuxDesign'), href: "#services" }
      ]
    },
    company: {
      title: t('company'),
      links: [
        { name: t('about'), href: "#about" },
        { name: t('projectsNav'), href: "#work" },
        { name: t('processNav'), href: "#process" },
        { name: t('contact'), href: "#contact" }
      ]
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-4 w-4" />,
      value: "info@codevia.com.tr",
      href: "mailto:info@codevia.com.tr"
    },
    {
      icon: <Phone className="h-4 w-4" />,
      value: "+90 543 870 75 75",
      href: "tel:+905438707575"
    },
    {
      icon: <MapPin className="h-4 w-4" />,
      value: "Ankara Teknokent, Türkiye",
      href: "https://maps.google.com/?q=Ankara+Teknokent"
    }
  ];

  const socialLinks = [
    { 
      icon: <Github className="h-4 w-4" />, 
      href: "https://github.com/Codevia-tech-bilisim", 
      name: "GitHub" 
    },
    { 
      icon: <Linkedin className="h-4 w-4" />, 
      href: "https://www.linkedin.com/company/codeviatech/?viewAsMember=true", 
      name: "LinkedIn" 
    },
    { 
      icon: <Instagram className="h-4 w-4" />, 
      href: "https://www.instagram.com/codeviatech/", 
      name: "Instagram" 
    }
  ];

  const logoContainerSize = isMobile ? 52 : 60; // Footer logo container boyutu (Header'den biraz küçük)

  return (
    <footer className="border-t border-white/10 bg-white/[0.02] backdrop-blur-sm">
      <Container>
        <div 
          className="py-12"
          style={{ padding: `${spacing * 3}px ${spacing}px` }}
        >
          {/* Main Footer Content */}
          <div 
            className={`grid gap-8 ${isMobile ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-4'} mb-8`}
          >
            {/* Company Info */}
            <div className={`${isMobile ? '' : 'lg:col-span-2'} space-y-4`}>
              <div className="flex items-center gap-3">
                {/* Logo Container - Header stilinde */}
                <div
                  className="relative flex items-center justify-center rounded-full"
                  style={{ 
                    width: `${logoContainerSize}px`, 
                    height: `${logoContainerSize}px`,
                    background: `
                      radial-gradient(circle at 50% 40%, 
                        rgba(218,213,202,0.85) 0%, 
                        rgba(218,213,202,0.75) 40%, 
                        rgba(218,213,202,0.65) 70%, 
                        rgba(218,213,202,0.5) 100%
                      )
                    `,
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(218,213,202,0.25)',
                    boxShadow: `
                      0 3px 12px rgba(218,213,202,0.15),
                      inset 0 1px 0 rgba(255,255,255,0.25),
                      0 0 24px rgba(218,213,202,0.1)
                    `
                  }}
                >
                  {/* Subtle inner glow */}
                  <div 
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `
                        radial-gradient(circle at 30% 30%, 
                          rgba(255,255,255,0.3) 0%, 
                          transparent 50%
                        )
                      `,
                      mixBlendMode: 'overlay'
                    }}
                  />
                  
                  {/* SVG Logo - Header ile aynı scaling */}
                  <img
                    src={logoSvg}
                    alt="Codevia"
                    className="relative z-10 h-[76%] w-[76%] object-contain"
                    style={{ 
                      transform: 'scale(3.5)', 
                      transformOrigin: '50% 51%',
                      filter: 'contrast(1.1) saturate(1.2)'
                    }}
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                </div>
                
                <div>
                  <h3 
                    className="font-bold text-white"
                    style={{ fontSize: isMobile ? '18px' : '20px' }}
                  >
                    Codevia
                  </h3>
                  <p 
                    className="text-slate-400"
                    style={{ fontSize: isMobile ? '12px' : '13px' }}
                  >
                    {t('footerTagline')}
                  </p>
                </div>
              </div>

              <p 
                className="text-slate-300 leading-relaxed max-w-md"
                style={{ fontSize: isMobile ? '13px' : '14px' }}
              >
                {t('footerDescription')}
              </p>

              {/* Contact Info */}
              <div className="space-y-2">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-300"
                    style={{ fontSize: isMobile ? '13px' : '14px' }}
                  >
                    <div className="text-slate-400">
                      {info.icon}
                    </div>
                    {info.value}
                  </a>
                ))}
              </div>
            </div>

            {/* Services Links */}
            <div className="space-y-4">
              <h4 
                className="font-semibold text-white"
                style={{ fontSize: isMobile ? '15px' : '16px' }}
              >
                {footerLinks.services.title}
              </h4>
              <ul className="space-y-2">
                {footerLinks.services.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-slate-300 hover:text-white transition-colors duration-300"
                      style={{ fontSize: isMobile ? '13px' : '14px' }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div className="space-y-4">
              <h4 
                className="font-semibold text-white"
                style={{ fontSize: isMobile ? '15px' : '16px' }}
              >
                {footerLinks.company.title}
              </h4>
              <ul className="space-y-2">
                {footerLinks.company.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-slate-300 hover:text-white transition-colors duration-300"
                      style={{ fontSize: isMobile ? '13px' : '14px' }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div 
            className={`pt-6 border-t border-white/10 flex ${isMobile ? 'flex-col gap-4' : 'flex-row justify-between items-center'}`}
          >
            {/* Copyright - 2025 güncellemesi */}
            <p 
              className="text-slate-400"
              style={{ fontSize: isMobile ? '12px' : '13px' }}
            >
              © 2025 Codevia. {t('allRightsReserved')}.
            </p>

            {/* Social Links - GitHub, LinkedIn, Instagram */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="p-2 rounded-full bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}