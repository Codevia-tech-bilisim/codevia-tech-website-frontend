// src/hooks/useSmartResponsive.js
import { useState, useEffect } from 'react';

export const useSmartResponsive = () => {
  const [viewport, setViewport] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
    height: typeof window !== 'undefined' ? window.innerHeight : 768,
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isTouch: false,
    columns: 4,
    fontSize: 16,
    spacing: 24,
    contentLevel: 'full' // 'minimal', 'medium', 'full'
  });

  useEffect(() => {
    const calculateResponsiveValues = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Device Type Detection
      const isMobile = width < 768;
      const isTablet = width >= 768 && width < 1024;
      const isDesktop = width >= 1024;
      
      // Touch Detection (improved)
      const isTouch = 'ontouchstart' in window || 
                     navigator.maxTouchPoints > 0 || 
                     navigator.msMaxTouchPoints > 0;
      
      // Smart Column Calculation
      const idealCardWidth = 280; // Minimum card width
      const maxColumns = 4;
      const minColumns = 1;
      const availableWidth = width - (width * 0.1); // 10% for padding
      const calculatedColumns = Math.max(
        minColumns, 
        Math.min(maxColumns, Math.floor(availableWidth / idealCardWidth))
      );
      
      // Dynamic Font Scaling
      const baseFontSize = 16;
      const fontScale = Math.max(0.8, Math.min(1.4, width / 1000));
      const dynamicFontSize = Math.round(baseFontSize * fontScale);
      
      // Smart Spacing
      const baseSpacing = 24;
      const spacingScale = Math.max(0.5, Math.min(1.5, width / 800));
      const dynamicSpacing = Math.round(baseSpacing * spacingScale);
      
      // Content Adaptation Level
      let contentLevel = 'full';
      if (width < 480) contentLevel = 'minimal';
      else if (width < 768) contentLevel = 'medium';
      
      setViewport({
        width,
        height,
        isMobile,
        isTablet,
        isDesktop,
        isTouch,
        columns: calculatedColumns,
        fontSize: dynamicFontSize,
        spacing: dynamicSpacing,
        contentLevel
      });
    };

    calculateResponsiveValues();
    
    const handleResize = () => {
      calculateResponsiveValues();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  // Helper functions
  const getTextContent = (texts) => {
    const { minimal, medium, full } = texts;
    switch(viewport.contentLevel) {
      case 'minimal': return minimal || medium || full;
      case 'medium': return medium || full;
      default: return full;
    }
  };

  const getTouchOptimizedSize = (baseSize) => {
    return viewport.isTouch ? Math.max(44, baseSize) : baseSize;
  };

  const getResponsiveValue = (mobile, tablet, desktop) => {
    if (viewport.isMobile) return mobile;
    if (viewport.isTablet) return tablet;
    return desktop;
  };

  return {
    ...viewport,
    getTextContent,
    getTouchOptimizedSize,
    getResponsiveValue
  };
};