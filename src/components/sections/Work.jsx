import React, { useState } from "react";
import Section from "../common/Section";
import { ArrowRight, ChevronDown, ChevronUp, Heart, Shield, Users, Calendar, Zap, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSmartResponsive } from "../../hooks/useSmartResponsive";

export default function Work() {
  const [expandedProject, setExpandedProject] = useState(null);
  const { 
    isMobile, 
    isTouch, 
    spacing, 
    getTouchOptimizedSize 
  } = useSmartResponsive();

  const projects = [
    {
      id: 1,
      title: "HealthVia Platform",
      shortDesc: "Kapsamlı sağlık yönetim sistemi – randevu, hasta takibi, doktor paneli.",
      icon: <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-red-400" />,
      status: "Aktif Geliştirme",
      details: {
        description: "Modern sağlık sektörü için geliştirilmiş kapsamlı dijital platform. Hasta kayıt sisteminden randevu yönetimine, doktor panellerinden raporlamaya kadar tüm süreçleri dijitalleştiren enterprise-grade çözüm.",
        features: [
          "JWT tabanlı güvenli kimlik doğrulama sistemi",
          "Çoklu rol sistemi (Hasta, Doktor, Admin)",
          "Akıllı randevu slot yönetimi ve çakışma önleme",
          "Gerçek zamanlı durum takibi ve bildirimler",
          "Detaylı sağlık profili ve geçmiş yönetimi",
          "GDPR uyumlu veri koruması",
          "MongoDB optimizasyonu ve performans tuning",
          "RESTful API tasarımı ve comprehensive error handling"
        ],
        techStack: "Java 21, Spring Boot 3.5, MongoDB, React 19, JWT, Spring Security",
        highlights: [
          { icon: <Shield className="h-3 w-3 sm:h-4 sm:w-4" />, text: "Enterprise Güvenlik" },
          { icon: <Users className="h-3 w-3 sm:h-4 sm:w-4" />, text: "Çoklu Kullanıcı Rolleri" },
          { icon: <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />, text: "Akıllı Randevu Sistemi" },
          { icon: <Award className="h-3 w-3 sm:h-4 sm:w-4" />, text: "GDPR Uyumlu" }
        ]
      }
    },
    {
      id: 2,
      title: "Proje 2",
      shortDesc: "Kısa açıklama – teknoloji yığını, kullanıcıya sağlanan değer, KPI.",
      icon: null,
      status: "Yakında",
      details: null
    },
    {
      id: 3,
      title: "Proje 3", 
      shortDesc: "Kısa açıklama – teknoloji yığını, kullanıcıya sağlanan değer, KPI.",
      icon: null,
      status: "Yakında",
      details: null
    }
  ];

  const toggleProject = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Aktif Geliştirme': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'Yakında': return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  // For mobile, use horizontal scroll layout
  const containerClass = isMobile 
    ? "flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory" 
    : "grid gap-6 md:grid-cols-2 lg:grid-cols-3";

  const cardClass = isMobile 
    ? "flex-shrink-0 w-80 snap-center" 
    : "";

  const touchButtonSize = getTouchOptimizedSize(32);

  return (
    <Section id="work" eyebrow="Projelerimiz" title="Seçili işler" desc="Farklı sektörlerde hızlı etki yaratan çözümler.">
      <div className={containerClass}>
        {projects.map((project) => (
          <motion.div 
            key={project.id} 
            className={`group overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.04] shadow-sm ${cardClass}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: project.id * 0.1 }}
          >
            {/* Project Visual */}
            <div className="aspect-[16/10] w-full bg-[radial-gradient(circle_at_top_left,rgba(31,42,51,0.35),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(62,74,84,0.35),transparent_45%)] flex items-center justify-center">
              {project.icon || (
                <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-white/10 border border-white/20"></div>
              )}
            </div>
            
            {/* Project Info */}
            <div className="p-4 sm:p-5" style={{ padding: `${spacing * 0.8}px` }}>
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-sm sm:text-base font-semibold text-white pr-2">{project.title}</h3>
                <span className={`px-2 py-1 rounded-full text-xs border whitespace-nowrap ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>
              
              <p className="mt-1 text-xs sm:text-sm text-slate-300 mb-3 leading-relaxed">
                {project.shortDesc}
              </p>
              
              {project.details ? (
                <button
                  onClick={() => toggleProject(project.id)}
                  className={`inline-flex items-center gap-2 text-xs sm:text-sm text-[#6b7b88] hover:text-white transition-all duration-300 ${
                    isTouch ? 'active:scale-95' : ''
                  }`}
                  style={{ 
                    minHeight: `${touchButtonSize}px`,
                    padding: isTouch ? '8px 12px' : '4px 8px'
                  }}
                >
                  {expandedProject === project.id ? (
                    <>
                      Kapat <ChevronUp className="h-3 w-3 sm:h-4 sm:w-4" />
                    </>
                  ) : (
                    <>
                      İncele <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4" />
                    </>
                  )}
                </button>
              ) : (
                <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#6b7b88] opacity-50">
                  Yakında <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                </div>
              )}
            </div>

            {/* Smart Expandable Details */}
            <AnimatePresence>
              {expandedProject === project.id && project.details && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="border-t border-white/10 bg-white/[0.02] overflow-hidden"
                >
                  <div className="p-4 sm:p-5 space-y-3 sm:space-y-4">
                    {/* Project Description */}
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-white mb-2">Proje Hakkında</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {project.details.description}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-white mb-2">Öne Çıkan Özellikler</h4>
                      <div className="grid gap-2 grid-cols-2">
                        {project.details.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
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
                      <h4 className="text-xs sm:text-sm font-semibold text-white mb-2">Teknik Özellikler</h4>
                      <ul className="space-y-1 max-h-20 sm:max-h-24 overflow-y-auto">
                        {project.details.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                            <Zap className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-[#6b7b88] mt-0.5 flex-shrink-0" />
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technology Stack */}
                    <div className="pt-2 border-t border-white/5">
                      <h4 className="text-xs font-semibold text-slate-400 mb-1">Teknoloji Stack</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
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