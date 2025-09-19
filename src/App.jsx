import React from "react";
import BackgroundGradient from "./components/effects/BackgroundGradient";
import AmbientLighting from "./components/effects/AmbientLighting";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Hero, Services, Work, Process, About, Contact } from "./components/sections";
import { TranslationProvider } from "./contexts/TranslationContext";
import useSmoothScroll from "./hooks/useSmoothScroll";

export default function App() {
  // Custom smooth scroll handler - Contact için özel davranış
  React.useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;

      const href = target.getAttribute('href');
      if (href === '#') return;

      // Navigation menüsündeki Contact linkini tespit et (class veya parent'a bakarak)
      const isNavigationContactLink = target.closest('nav') || 
                                    target.closest('.mobile-menu') ||
                                    (target.textContent.includes('İletişim') || target.textContent.includes('Contact')) &&
                                    !target.textContent.includes('Al') &&
                                    !target.textContent.includes('Get');

      // Navigation'daki "İletişim/Contact" linkine basıldıysa sayfanın en altına git
      if (href === '#contact' && isNavigationContactLink) {
        e.preventDefault();
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
        });
        return;
      }

      // "Teklif Al" veya diğer #contact linkler için Contact section'a git
      if (href === '#contact') {
        e.preventDefault();
        const contactElement = document.getElementById('contact');
        if (contactElement) {
          contactElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
        return;
      }

      // Diğer linkler için normal smooth scroll
      const targetElement = document.querySelector(href);
      if (!targetElement) return;

      e.preventDefault();
      
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    };

    document.addEventListener('click', handleClick);
    
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <TranslationProvider>
      <div className="relative min-h-screen overflow-hidden bg-[#0b1020]">
        <BackgroundGradient />

        <div className="relative z-10 min-h-screen text-slate-100">
          <Header />

          <Hero />
          <Services />
          <Work />
          <Process />
          <About />
          <Contact />

          <Footer />
        </div>
      </div>
    </TranslationProvider>
  );
}