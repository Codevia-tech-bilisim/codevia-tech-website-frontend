import React from "react";
import Container from "../common/Container";
import PlanetFX from "../effects/PlanetFX";
import TeknoKentExtrude3D from "../TeknoKentExtrude3D";
import { useSmartResponsive } from "../../hooks/useSmartResponsive";

export default function Hero() {
  const { 
    width, 
    height, 
    isMobile, 
    isTablet, 
    spacing 
  } = useSmartResponsive();

  // Dynamic sizing based on viewport
  const getResponsive3DSize = () => {
    if (isMobile) {
      return { width: Math.min(width - 40, 300), height: 120 };
    } else if (isTablet) {
      return { width: Math.min(width - 80, 400), height: 180 };
    } else {
      return { width: Math.min(width - 200, 560), height: 240 };
    }
  };

  const { width: modelWidth, height: modelHeight } = getResponsive3DSize();

  // Dynamic text sizing
  const getTextSizes = () => {
    if (isMobile) {
      return {
        h1: 'text-3xl',
        p: 'text-base',
        maxWidth: 'max-w-full'
      };
    } else if (isTablet) {
      return {
        h1: 'text-4xl md:text-5xl',
        p: 'text-lg',
        maxWidth: 'max-w-2xl'
      };
    } else {
      return {
        h1: 'text-4xl md:text-5xl lg:text-6xl',
        p: 'text-lg',
        maxWidth: 'max-w-2xl'
      };
    }
  };

  const textSizes = getTextSizes();

  // Dynamic padding
  const sectionPadding = {
    paddingTop: isMobile ? spacing * 5 : isTablet ? spacing * 7 : spacing * 8,
    paddingBottom: spacing * 2
  };

  return (
    <section 
      id="home" 
      className="relative isolate overflow-hidden min-h-screen"
      style={sectionPadding}
    >
      {/* PlanetFX (gezegen efekti) Hero'da kalıyor */}
      <PlanetFX />
      <Container>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className={`${textSizes.h1} font-bold leading-[1.1] tracking-tight`}>
            Fikirler Sizden, Kod Bizden
            <br className="hidden sm:block" />
            <span className="text-white/90">Geleceği Birlikte Yazıyoruz</span>
          </h1>

          <p 
            className={`mx-auto mt-4 sm:mt-5 ${textSizes.maxWidth} ${textSizes.p} text-slate-300`}
            style={{ paddingLeft: spacing, paddingRight: spacing }}
          >
            Codevia; kendi kendine servis edilebilen ekip araçları, analitik ve modern arayüzlerle yöneticilerinizi
            güçlendirir, çalışanlarınızı her yerden bağlı tutar.
          </p>

          <div 
            className="flex justify-center"
            style={{ 
              marginTop: spacing / 2004564654656454645635537373735753,
              padding: `0 ${spacing}px`
            }}
          >
            <div 
              className="flex items-center justify-center"
              style={{ 
                width: '100%',
                maxWidth: `${modelWidth}px`
              }}
            >
              <TeknoKentExtrude3D 
                width={modelWidth} 
                height={modelHeight}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}