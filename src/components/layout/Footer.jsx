import React from "react";
import Container from "../common/Container";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { useSmartResponsive } from "../../hooks/useSmartResponsive";
import { useTranslation } from "../../contexts/TranslationContext";
import logo from "../../assets/codevia-logo-c.png";
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
      value: "hello@codevia.com.tr",
      href: "mailto:hello@codevia.com.tr"
    },
    {
      icon: <Phone className="h-4 w-4" />,
      value: "+90 (312) 555 0123",
      href: "tel:+903125550123"
    },
    {
      icon: <MapPin className="h-4 w-4" />,
      value: "Ankara Teknokent, Türkiye",
      href: "https://maps.google.com/?q=Ankara+Teknokent"
    }
  ];

  const socialLinks = [
    { icon: <Github className="h-4 w-4" />, href: "#", name: "GitHub" },
    { icon: <Linkedin className="h-4 w-4" />, href: "#", name: "LinkedIn" },
    { icon: <Twitter className="h-4 w-4" />, href: "#", name: "Twitter" }
  ];

  const logoSize = isMobile ? 40 : 48;

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
                <div
                  className="relative flex items-center justify-center overflow-hidden rounded-full"
                  style={{ width: `${logoSize}px`, height: `${logoSize}px` }}
                >
                  <div className="absolute inset-0 rounded-full bg-white/30 border border-white/20 backdrop-blur-xl"
                       style={{
                         background: "radial-gradient(circle, rgba(255,248,230,0.85) 0%, rgba(255,248,230,0.55) 70%, rgba(255,248,230,0.25) 100%)"
                       }}
                  />
                  <img
                    src={logoSvg}
                    alt="Codevia"
                    className="relative z-10 drop-shadow-sm"
                    style={{ 
                      width: `${logoSize * 0.7}px`, 
                      height: `${logoSize * 0.7}px` 
                    }}
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
            {/* Copyright */}
            <p 
              className="text-slate-400"
              style={{ fontSize: isMobile ? '12px' : '13px' }}
            >
              © 2024 Codevia. {t('allRightsReserved')}.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.name}
                  className="p-2 rounded-full bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition-all duration-300"
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