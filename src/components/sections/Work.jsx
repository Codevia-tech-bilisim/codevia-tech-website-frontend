
import React, { useState } from "react";
import Section from "../common/Section";
import { 
  ArrowRight,
  ExternalLink,
  Clock,
  Zap,
  Shield,
  Users,
  Calendar,
  Stethoscope,
  Building,
  Home,
  Briefcase
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSmartResponsive } from "../../hooks/useSmartResponsive";
import { useTranslation } from "../../contexts/TranslationContext";

export default function Work() {
  const [expandedProject, setExpandedProject] = useState(null);
  
  const { 
    columns, 
    spacing, 
    isMobile, 
    isTablet, 
    getTouchOptimizedSize 
  } = useSmartResponsive();
  
  const { t } = useTranslation();

  const projects = [
    {
      title: "HealthVia",
      category: t('healthTech'),
      status: t('activeStatus'),
      statusColor: "bg-emerald-500/20 text-emerald-300",
      description: t('healthViaDesc'),
      icon: <Stethoscope className="h-4 w-4" />,
      details: {
        description: t('healthViaDetailDesc'),
        highlights: [
          { icon: <Shield className="h-3 w-3" />, text: t('healthViaHighlight1') },
          { icon: <Calendar className="h-3 w-3" />, text: t('healthViaHighlight2') },
          { icon: <Users className="h-3 w-3" />, text: t('healthViaHighlight3') },
          { icon: <Zap className="h-3 w-3" />, text: t('healthViaHighlight4') }
        ],
        features: [
          t('healthViaFeature1'),
          t('healthViaFeature2'),
          t('healthViaFeature3'),
          t('healthViaFeature4'),
          t('healthViaFeature5'),
          t('healthViaFeature6')
        ],
        techStack: t('healthViaTechStack')
      }
    },
    {
      title: "PropTech Suite",
      category: t('propTech'),
      status: t('comingSoon'),
      statusColor: "bg-amber-500/20 text-amber-300",
      description: t('propTechDesc'),
      icon: <Building className="h-4 w-4" />,
      details: {
        description: t('propTechDetailDesc'),
        highlights: [
          { icon: <Home className="h-3 w-3" />, text: t('propTechHighlight1') },
          { icon: <Briefcase className="h-3 w-3" />, text: t('propTechHighlight2') },
          { icon: <Shield className="h-3 w-3" />, text: t('propTechHighlight3') },
          { icon: <Zap className="h-3 w-3" />, text: t('propTechHighlight4') }
        ],
        features: [
          t('propTechFeature1'),
          t('propTechFeature2'),
          t('propTechFeature3'),
          t('propTechFeature4'),
          t('propTechFeature5'),
          t('propTechFeature6')
        ],
        techStack: t('propTechTechStack')
      }
    }
  ];

  // Dynamic grid styling
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
    gap: `${spacing}px`,
  };

  return (
    <Section
      id="work"
      eyebrow={t('workEyebrow')}
      title={t('workTitle')}
      desc={t('workDescription')}
    >
      <div style={gridStyle}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="group relative rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] transition-all duration-500 overflow-hidden"
            style={{ padding: `${spacing}px` }}
            whileHover={{ 
              scale: isMobile ? 1 : 1.02,
              y: isMobile ? 0 : -4 
            }}
          >
            {/* Project Header */}
            <div className="flex items-start justify-between mb-4">
              <div 
                className="rounded-xl bg-white/10 text-slate-300 group-hover:text-white transition-all duration-300 flex items-center justify-center"
                style={{ 
                  padding: `${spacing * 0.5}px`,
                  minWidth: getTouchOptimizedSize(32),
                  minHeight: getTouchOptimizedSize(32)
                }}
              >
                {project.icon}
              </div>
              
              <div 
                className={`rounded-full px-2 py-1 text-xs font-medium ${project.statusColor}`}
                style={{ fontSize: isMobile ? '10px' : '11px' }}
              >
                {project.status}
              </div>
            </div>

            {/* Project Content */}
            <div className="space-y-3">
              <div>
                <h3 
                  className="font-semibold text-white mb-1"
                  style={{ fontSize: isMobile ? '16px' : '18px' }}
                >
                  {project.title}
                </h3>
                <p 
                  className="text-slate-400"
                  style={{ fontSize: isMobile ? '12px' : '13px' }}
                >
                  {project.category}
                </p>
              </div>
              
              <p 
                className="text-slate-300 leading-relaxed"
                style={{ 
                  fontSize: isMobile ? '13px' : '14px',
                  lineHeight: '1.5'
                }}
              >
                {project.description}
              </p>

              {/* Details Toggle */}
              <button
                onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group/btn"
                style={{ 
                  fontSize: isMobile ? '12px' : '13px',
                  minHeight: `${getTouchOptimizedSize(32)}px`
                }}
              >
                <span className="group-hover/btn:underline">{t('showDetails')}</span>
                <ArrowRight className="h-3 w-3 group-hover/btn:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Expanded Details */}
            <AnimatePresence>
              {expandedProject === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden border-t border-white/10 mt-4"
                  style={{ paddingTop: `${spacing * 0.75}px` }}
                >
                  <div className="space-y-3">
                    {/* Project Description */}
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
                        {project.details.description}
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
                      <div className="grid gap-2 grid-cols-2">
                        {project.details.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-slate-300"
                               style={{ fontSize: isMobile ? '11px' : '12px' }}>
                            <div className="text-[#6b7b88] flex-shrink-0">
                              {highlight.icon}
                            </div>
                            <span className="truncate">{highlight.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technical Features */}
                    <div>
                      <h4 
                        className="font-semibold text-white mb-2"
                        style={{ fontSize: isMobile ? '13px' : '14px' }}
                      >
                        {t('technicalFeatures')}
                      </h4>
                      <ul className="space-y-1 max-h-20 sm:max-h-24 overflow-y-auto">
                        {project.details.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="text-slate-300 flex items-start gap-2"
                              style={{ fontSize: isMobile ? '11px' : '12px' }}>
                            <Zap className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-[#6b7b88] mt-0.5 flex-shrink-0" />
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technology Stack */}
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
                        {project.details.techStack}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      
      {/* Mobile scroll indicator */}
      {isMobile && (
        <div className="flex justify-center mt-4">
          <div className="flex gap-1">
            {projects.map((_, idx) => (
              <div key={idx} className="h-1 w-8 rounded-full bg-white/20"></div>
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}