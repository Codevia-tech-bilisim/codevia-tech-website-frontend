import React from "react";
import Section from "../common/Section";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useSmartResponsive } from "../../hooks/useSmartResponsive";

export default function Contact() {
  const { 
    isMobile, 
    isTablet, 
    isTouch, 
    spacing, 
    getTouchOptimizedSize 
  } = useSmartResponsive();

  // Dynamic layout: mobile = stacked, desktop = side by side
  const containerClass = isMobile ? "space-y-6" : "grid gap-8 md:grid-cols-2";
  
  // Touch-optimized input and button sizes
  const inputHeight = getTouchOptimizedSize(44);
  const buttonHeight = getTouchOptimizedSize(48);

  return (
    <Section 
      id="contact" 
      eyebrow="İletişim" 
      title="Projelerinizi Konuşalım" 
      desc="Fikirlerinizi gerçeğe dönüştürmek için buradayız. Hemen iletişime geçin!"
    >
      <div className={containerClass}>
        {/* Contact Form */}
        <div>
          <form 
            className="space-y-4" 
            style={{ gap: `${spacing * 0.8}px` }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium text-slate-300 mb-2"
                  style={{ fontSize: isMobile ? '13px' : '14px' }}
                >
                  İsim Soyisim
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 backdrop-blur focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/10"
                  placeholder="Adınızı yazın"
                  style={{ 
                    height: `${inputHeight}px`,
                    fontSize: isMobile ? '14px' : '16px',
                    padding: isTouch ? '8px 16px' : '6px 16px'
                  }}
                />
              </div>
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-slate-300 mb-2"
                  style={{ fontSize: isMobile ? '13px' : '14px' }}
                >
                  E-posta
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 backdrop-blur focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/10"
                  placeholder="email@example.com"
                  style={{ 
                    height: `${inputHeight}px`,
                    fontSize: isMobile ? '14px' : '16px',
                    padding: isTouch ? '8px 16px' : '6px 16px'
                  }}
                />
              </div>
            </div>
            <div>
              <label 
                htmlFor="subject" 
                className="block text-sm font-medium text-slate-300 mb-2"
                style={{ fontSize: isMobile ? '13px' : '14px' }}
              >
                Konu
              </label>
              <input
                type="text"
                id="subject"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 backdrop-blur focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/10"
                placeholder="Proje konusu"
                style={{ 
                  height: `${inputHeight}px`,
                  fontSize: isMobile ? '14px' : '16px',
                  padding: isTouch ? '8px 16px' : '6px 16px'
                }}
              />
            </div>
            <div>
              <label 
                htmlFor="message" 
                className="block text-sm font-medium text-slate-300 mb-2"
                style={{ fontSize: isMobile ? '13px' : '14px' }}
              >
                Mesaj
              </label>
              <textarea
                id="message"
                rows={isMobile ? 4 : 5}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 backdrop-blur focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/10 resize-none"
                placeholder="Projeniz hakkında detayları yazın..."
                style={{ 
                  fontSize: isMobile ? '14px' : '16px',
                  padding: isTouch ? '12px 16px' : '8px 16px'
                }}
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#1f2a33] to-[#3e4a54] text-white font-medium shadow-lg hover:opacity-90 transition-all duration-300"
              style={{ 
                height: `${buttonHeight}px`,
                fontSize: isMobile ? '14px' : '16px',
                transform: isTouch ? 'scale(1)' : 'scale(1)',
                padding: isTouch ? '12px 24px' : '8px 24px'
              }}
              onTouchStart={isTouch ? (e) => e.currentTarget.style.transform = 'scale(0.98)' : undefined}
              onTouchEnd={isTouch ? (e) => e.currentTarget.style.transform = 'scale(1)' : undefined}
            >
              <Send className="h-4 w-4" />
              Mesaj Gönder
            </button>
            <p 
              className="text-xs text-slate-400 text-center"
              style={{ fontSize: isMobile ? '11px' : '12px' }}
            >
            </p>
          </form>
        </div>

        {/* Contact Information */}
        <div 
          className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.04] shadow-sm"
          style={{ padding: `${spacing}px` }}
        >
          <div className="flex items-start gap-3">
            <div 
              className="rounded-xl border border-white/10 bg-white/5 p-2 text-[#6b7b88] flex-shrink-0"
              style={{ 
                width: getTouchOptimizedSize(40), 
                height: getTouchOptimizedSize(40),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Mail className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <p 
                className="text-slate-400 mb-1"
                style={{ fontSize: isMobile ? '12px' : '14px' }}
              >
                E-posta
              </p>
              <a 
                href="mailto:info@codevia.tech" 
                className="font-medium text-white hover:underline break-all"
                style={{ fontSize: isMobile ? '14px' : '16px' }}
              >
                info@codevia.tech
              </a>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div 
              className="rounded-xl border border-white/10 bg-white/5 p-2 text-[#6b7b88] flex-shrink-0"
              style={{ 
                width: getTouchOptimizedSize(40), 
                height: getTouchOptimizedSize(40),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Phone className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <p 
                className="text-slate-400 mb-1"
                style={{ fontSize: isMobile ? '12px' : '14px' }}
              >
                Telefon
              </p>
              <a 
                href="tel:+905438707575" 
                className="font-medium text-white hover:text-blue-300 transition-colors"
                style={{ 
                  fontSize: isMobile ? '14px' : '16px',
                  minHeight: isTouch ? '44px' : 'auto',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                +90 (543) 870 75 75
              </a>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div 
              className="rounded-xl border border-white/10 bg-white/5 p-2 text-[#6b7b88] flex-shrink-0"
              style={{ 
                width: getTouchOptimizedSize(40), 
                height: getTouchOptimizedSize(40),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <MapPin className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <p 
                className="text-slate-400 mb-1"
                style={{ fontSize: isMobile ? '12px' : '14px' }}
              >
                Ofis
              </p>
              <div 
                className="font-medium text-white"
                style={{ fontSize: isMobile ? '13px' : '16px' }}
              >
                <p>Bahçelievler Mah. Doktor Cevdet Kara Cad.</p>
                <p>E Blok No: 35 E /B22</p>
                <p className="text-slate-300">Ankara Üniversitesi Teknokent</p>
                <p className="text-slate-300">Ankara, Türkiye</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}