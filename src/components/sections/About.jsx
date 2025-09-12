import React from "react";
import Section from "../common/Section";
import { useSmartResponsive } from "../../hooks/useSmartResponsive";
import { useTranslation } from "../../contexts/TranslationContext";

export default function About() {
  const { 
    columns, 
    spacing, 
    isMobile, 
    isTablet 
  } = useSmartResponsive();
  
  const { t } = useTranslation();

  const techs = [
    "React", "Next.js", "TypeScript", "Node.js", "Express", 
    "Python", "FastAPI", "PostgreSQL", "MongoDB", "Kotlin", 
    "Jetpack Compose", "Tailwind", "Vercel", "Docker"
  ];

  // Dynamic grid for vision/mission cards
  const visionMissionCols = isMobile ? 1 : 2;
  
  // Dynamic tech tags - show more on larger screens
  const visibleTechs = isMobile ? techs.slice(0, 8) : techs;

  return (
    <Section id="about" eyebrow={t('aboutEyebrow')} title={t('aboutTitle')}>
      <div className="max-w-4xl">
        <div className="prose prose-invert max-w-none">
          <p 
            className="text-lg leading-relaxed text-slate-300 mb-6"
            style={{ fontSize: isMobile ? '16px' : '18px' }}
          >
            {t('aboutDescription1')}
          </p>
          <p 
            className="text-base leading-relaxed text-slate-300 mb-6"
            style={{ fontSize: isMobile ? '14px' : '16px' }}
          >
            {t('aboutDescription2')}
          </p>

          {/* Vision & Mission Cards */}
          <div 
            className="mt-8"
            style={{ 
              display: 'grid',
              gridTemplateColumns: `repeat(${visionMissionCols}, 1fr)`,
              gap: `${spacing}px`
            }}
          >
            <div 
              className="rounded-2xl border border-white/10 bg-white/[0.04]"
              style={{ padding: `${spacing}px` }}
            >
              <h4 
                className="font-semibold text-white mb-3"
                style={{ fontSize: isMobile ? '16px' : '18px' }}
              >
                {t('visionTitle')}
              </h4>
              <p 
                className="text-slate-300"
                style={{ fontSize: isMobile ? '13px' : '14px' }}
              >
                {t('visionDescription')}
              </p>
            </div>
            <div 
              className="rounded-2xl border border-white/10 bg-white/[0.04]"
              style={{ padding: `${spacing}px` }}
            >
              <h4 
                className="font-semibold text-white mb-3"
                style={{ fontSize: isMobile ? '16px' : '18px' }}
              >
                {t('missionTitle')}
              </h4>
              <p 
                className="text-slate-300"
                style={{ fontSize: isMobile ? '13px' : '14px' }}
              >
                {t('missionDescription')}
              </p>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mt-8">
          <h4 
            className="font-semibold text-white mb-4"
            style={{ fontSize: isMobile ? '16px' : '18px' }}
          >
            {t('techStackTitle')}
          </h4>
          <div 
            className="flex flex-wrap"
            style={{ gap: `${spacing * 0.5}px` }}
          >
            {visibleTechs.map((tech) => (
              <span 
                key={tech} 
                className="rounded-full border border-white/10 bg-white/[0.04] text-slate-200 shadow-sm"
                style={{ 
                  padding: isMobile ? '4px 12px' : '6px 12px',
                  fontSize: isMobile ? '12px' : '14px'
                }}
              >
                {tech}
              </span>
            ))}
            {isMobile && techs.length > 8 && (
              <span 
                className="rounded-full border border-white/10 bg-white/[0.04] text-slate-400 shadow-sm"
                style={{ 
                  padding: '4px 12px',
                  fontSize: '12px'
                }}
              >
                +{techs.length - 8} {t('moreText')}
              </span>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}