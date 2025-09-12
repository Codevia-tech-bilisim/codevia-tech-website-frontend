import React, { useState } from "react";
import Section from "../common/Section";
import { 
  Code2, 
  Smartphone, 
  Brain, 
  Palette,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Database,
  Cloud,
  Zap,
  Users,
  Figma,
  PaintBucket,
  Layers
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSmartResponsive } from "../../hooks/useSmartResponsive";
import { useTranslation } from "../../contexts/TranslationContext";

export default function Services() {
  const [showAllDetails, setShowAllDetails] = useState(false);
  const [expandedService, setExpandedService] = useState(null);
  
  const { 
    columns, 
    spacing, 
    isMobile, 
    isTablet, 
    getTouchOptimizedSize 
  } = useSmartResponsive();
  
  const { t } = useTranslation();

  const services = [
    { 
      icon: <Code2 className="h-4 w-4 sm:h-5 sm:w-5" />, 
      title: t('webDev'), 
      descriptions: {
        minimal: t('webDevDescMinimal'),
        medium: t('webDevDescMedium'),
        full: t('webDevDescFull')
      },
      details: {
        description: {
          minimal: t('webDevDetailMinimal'),
          medium: t('webDevDetailMedium'),
          full: t('webDevDetailFull')
        },
        technologies: ["React", "Next.js", "TypeScript", "Node.js", "Express", "PostgreSQL"],
        features: [
          t('webDevFeature1'),
          t('webDevFeature2'),
          t('webDevFeature3'),
          t('webDevFeature4'),
          t('webDevFeature5'),
          t('webDevFeature6')
        ],
        highlights: [
          { icon: <Zap className="h-3 w-3 sm:h-4 sm:w-4" />, text: t('webDevHighlight1') },
          { icon: <Cloud className="h-3 w-3 sm:h-4 sm:w-4" />, text: t('webDevHighlight2') },
          { icon: <Database className="h-3 w-3 sm:h-4 sm:w-4" />, text: t('webDevHighlight3') }
        ]
      }
    },
    { 
      icon: <Smartphone className="h-4 w-4 sm:h-5 sm:w-5" />, 
      title: t('mobileDev'), 
      descriptions: {
        minimal: t('mobileDevDescMinimal'),
        medium: t('mobileDevDescMedium'),
        full: t('mobileDevDescFull')
      },
      details: {
        description: {
          minimal: t('mobileDevDetailMinimal'),
          medium: t('mobileDevDetailMedium'),
          full: t('mobileDevDetailFull')
        },
        technologies: ["Kotlin", "Jetpack Compose", "Room Database", "Retrofit", "Hilt", "Coroutines"],
        features: [
          t('mobileDevFeature1'),
          t('mobileDevFeature2'),
          t('mobileDevFeature3'),
          t('mobileDevFeature4'),
          t('mobileDevFeature5'),
          t('mobileDevFeature6')
        ],
        highlights: [
          { icon: <Smartphone className="h-3 w-3 sm:h-4 sm:w-4" />, text: t('mobileDevHighlight1') },
          { icon: <Database className="h-3 w-3 sm:h-4 sm:w-4" />, text: t('mobileDevHighlight2') },
          { icon: <Layers className="h-3 w-3 sm:h-4 sm:w-4" />, text: t('mobileDevHighlight3') }
        ]
      }
    },
    { 
      icon: <Brain className="h-4 w-4 sm:h-5 sm:w-5" />, 
      title: t('aiData'), 
      descriptions: {
        minimal: t('aiDataDescMinimal'),
        medium: t('aiDataDescMedium'),
        full: t('aiDataDescFull')
      },
      details: {
        description: {
          minimal: t('aiDataDetailMinimal'),
          medium: t('aiDataDetailMedium'),
          full: t('aiDataDetailFull')
        },
        technologies: ["Python", "TensorFlow", "PyTorch", "FastAPI", "PostgreSQL", "Redis"],
        features: [
          t('aiDataFeature1'),
          t('aiDataFeature2'),
          t('aiDataFeature3'),
          t('aiDataFeature4'),
          t('aiDataFeature5'),
          t('aiDataFeature6')
        ],
        highlights: [
          { icon: <Brain className="h-3 w-3 sm:h-4 sm:w-4" />, text: t('aiDataHighlight1') },
          { icon: <Database className="h-3 w-3 sm:h-4 sm:w-4" />, text: t('aiDataHighlight2') },
          { icon: <Zap className="h-3 w-3 sm:h-4 sm:w-4" />, text: t('aiDataHighlight3') }
        ]
      }
    },
    { 
      icon: <Palette className="h-4 w-4 sm:h-5 sm:w-5" />, 
      title: t('uiuxDesign'), 
      descriptions: {
        minimal: t('uiuxDesignDescMinimal'),
        medium: t('uiuxDesignDescMedium'),
        full: t('uiuxDesignDescFull')
      },
      details: {
        description: {
          minimal: t('uiuxDesignDetailMinimal'),
          medium: t('uiuxDesignDetailMedium'),
          full: t('uiuxDesignDetailFull')
        },
        technologies: ["Figma", "Adobe XD", "Principle", "Framer", "Miro", "InVision"],
        features: [
          t('uiuxDesignFeature1'),
          t('uiuxDesignFeature2'),
          t('uiuxDesignFeature3'),
          t('uiuxDesignFeature4'),
          t('uiuxDesignFeature5'),
          t('uiuxDesignFeature6')
        ],
        highlights: [
          { icon: <Users className="h-3 w-3 sm:h-4 sm:w-4" />, text: t('uiuxDesignHighlight1') },
          { icon: <Figma className="h-3 w-3 sm:h-4 sm:w-4" />, text: t('uiuxDesignHighlight2') },
          { icon: <PaintBucket className="h-3 w-3 sm:h-4 sm:w-4" />, text: t('uiuxDesignHighlight3') }
        ]
      }
    },
  ];

  const toggleDetails = () => {
    setShowAllDetails(!showAllDetails);
  };

  // Dynamic grid styling based on calculated columns
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
    gap: `${spacing}px`,
  };

  // Touch-optimized button size
  const buttonHeight = getTouchOptimizedSize(32);

  return (
    <Section
      id="services"
      eyebrow={t('servicesEyebrow')}
      title={t('servicesTitle')}
      desc={t('servicesDescription')}
    >
      <div style={gridStyle}>
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="group relative rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] transition-all duration-500 overflow-hidden backdrop-blur-sm"
            style={{ padding: `${spacing}px` }}
            whileHover={{ 
              scale: isMobile ? 1 : 1.02,
              y: isMobile ? 0 : -4 
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Service Header */}
            <div className="flex items-start justify-between mb-4">
              <div 
                className="rounded-xl bg-white/10 text-slate-300 group-hover:text-white group-hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
                style={{ 
                  padding: `${spacing * 0.5}px`,
                  minWidth: getTouchOptimizedSize(32),
                  minHeight: getTouchOptimizedSize(32)
                }}
              >
                {service.icon}
              </div>
            </div>

            {/* Service Content */}
            <div className="space-y-3">
              <h3 
                className="font-semibold text-white group-hover:text-slate-50 transition-colors duration-300"
                style={{ fontSize: isMobile ? '16px' : '18px' }}
              >
                {service.title}
              </h3>
              
              <p 
                className="text-slate-300 leading-relaxed"
                style={{ 
                  fontSize: isMobile ? '13px' : '14px',
                  lineHeight: '1.5'
                }}
              >
                {service.descriptions[
                  isMobile ? 'minimal' : 
                  isTablet ? 'medium' : 
                  'full'
                ]}
              </p>

              {/* Details Toggle */}
              <button
                onClick={() => setExpandedService(expandedService === index ? null : index)}
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group/btn"
                style={{ 
                  fontSize: isMobile ? '12px' : '13px',
                  minHeight: `${buttonHeight}px`
                }}
              >
                <span className="group-hover/btn:underline">{t('details')}</span>
                <ArrowRight className="h-3 w-3 group-hover/btn:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Expanded Details */}
            <AnimatePresence>
              {expandedService === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden border-t border-white/10 mt-4"
                  style={{ paddingTop: `${spacing * 0.75}px` }}
                >
                  <div className="space-y-4">
                    {/* Detailed Description */}
                    <div>
                      <h4 
                        className="font-semibold text-white mb-2"
                        style={{ fontSize: isMobile ? '13px' : '14px' }}
                      >
                        {t('aboutProject')}
                      </h4>
                      <p 
                        className="text-slate-300 leading-relaxed"
                        style={{ fontSize: isMobile ? '12px' : '13px' }}
                      >
                        {service.details.description[
                          isMobile ? 'minimal' : 
                          isTablet ? 'medium' : 
                          'full'
                        ]}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h4 
                        className="font-semibold text-white mb-2"
                        style={{ fontSize: isMobile ? '13px' : '14px' }}
                      >
                        {t('highlights')}
                      </h4>
                      <div className="grid gap-2 grid-cols-1">
                        {service.details.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-slate-300"
                               style={{ fontSize: isMobile ? '11px' : '12px' }}>
                            <div className="text-[#6b7b88] flex-shrink-0">
                              {highlight.icon}
                            </div>
                            <span>{highlight.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="pt-2 border-t border-white/5">
                      <h4 
                        className="font-semibold text-slate-400 mb-1"
                        style={{ fontSize: isMobile ? '11px' : '12px' }}
                      >
                        {t('techStack')}
                      </h4>
                      <p 
                        className="text-slate-300 leading-relaxed"
                        style={{ fontSize: isMobile ? '11px' : '12px' }}
                      >
                        {service.details.technologies.join(', ')}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}