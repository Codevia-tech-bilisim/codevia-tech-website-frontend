import React from "react";
import Container from "../common/Container";
import PlanetFX from "../effects/PlanetFX";
import TeknoKentExtrude3D from "../TeknoKentExtrude3D";
import { useSmartResponsive } from "../../hooks/useSmartResponsive";
import { useTranslation } from "../../contexts/TranslationContext";

export default function Hero() {
  const { 
    width, 
    height, 
    isMobile, 
    isTablet, 
    spacing 
  } = useSmartResponsive();
  
  const { t } = useTranslation();

  // Dynamic sizing based on viewport - MOBİLDE DAHA KOMPAKT
  const getResponsive3DSize = () => {
    if (isMobile) {
      return { width: Math.min(width - 40, 280), height: 100 }; // Daha küçük
    } else if (isTablet) {
      return { width: Math.min(width - 80, 400), height: 180 };
    } else {
      return { width: Math.min(width - 200, 560), height: 240 };
    }
  };

  const { width: modelWidth, height: modelHeight } = getResponsive3DSize();

  // Dynamic text sizing - MOBİLDE DAHA KÜÇÜK
  const getTextSizes = () => {
    if (isMobile) {
      return {
        h1: 'text-2xl sm:text-3xl', // Daha küçük başlık
        p: 'text-sm', // Daha küçük paragraf
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

  // ORİJİNAL PADDING - SADECE VIEWPORT YÜKSEKLIĞI EKLENDİ
  const sectionPadding = {
    paddingTop: isMobile ? spacing * 12 : isTablet ? spacing * 7 : spacing * 8, // ORİJİNAL MOBİL 15X
    paddingBottom: spacing * 2, // ORİJİNAL
    minHeight: isMobile ? '65vh' : '100vh', // MOBİLDE KÜÇÜK MIN-HEIGHT
    maxHeight: isMobile ? '75vh' : 'none' // MOBİLDE MAX-HEIGHT SINIRI
  };

  return (
    <section 
      id="home" 
      className="relative isolate overflow-hidden flex items-center"
      style={sectionPadding}
    >
      {/* PlanetFX - ORİJİNAL KORUNDU */}
      <PlanetFX />
      
      {/* MOBİL İÇİN KONTRAST OVERLAYİ */}
      {isMobile && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-slate-800/20 to-slate-700/30 pointer-events-none" />
      )}
      
      <Container>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 
            className={`${textSizes.h1} font-bold leading-[1.1] tracking-tight`}
            style={{
              textShadow: isMobile ? '0 2px 4px rgba(0,0,0,0.8), 0 4px 8px rgba(0,0,0,0.3)' : undefined
            }}
          >
            {t('heroTitle')}
            <br className="hidden sm:block" />
            <span 
              className="text-white/90"
              style={{
                textShadow: isMobile ? '0 1px 3px rgba(0,0,0,0.7)' : undefined
              }}
            >
              {t('heroSubtitle')}
            </span>
          </h1>

          <p 
            className={`mx-auto mt-4 sm:mt-5 ${textSizes.maxWidth} ${textSizes.p} text-slate-300`}
            style={{ 
              paddingLeft: spacing, 
              paddingRight: spacing,
              textShadow: isMobile ? '0 1px 2px rgba(0,0,0,0.6)' : undefined,
              lineHeight: isMobile ? '1.6' : undefined // ORİJİNAL 1.6
            }}
          >
            {t('heroDescription')}
          </p>

          {/* TeknoKent 3D Logo - ORİJİNAL MARGIN */}
          <div className="mt-6 sm:mt-8 flex justify-center">
            <TeknoKentExtrude3D
              width={modelWidth}
              height={modelHeight}
              bg="transparent"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}