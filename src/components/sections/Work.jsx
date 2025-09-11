import React, { useState } from "react";
import Section from "../common/Section";
import { ArrowRight, ChevronDown, ChevronUp, Heart, Shield, Users, Calendar, Zap, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Work() {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "HealthVia Platform",
      shortDesc: "Kapsamlı sağlık yönetim sistemi – randevu, hasta takibi, doktor paneli.",
      icon: <Heart className="h-8 w-8 text-red-400" />,
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
          { icon: <Shield className="h-4 w-4" />, text: "Enterprise Güvenlik" },
          { icon: <Users className="h-4 w-4" />, text: "Çoklu Kullanıcı Rolleri" },
          { icon: <Calendar className="h-4 w-4" />, text: "Akıllı Randevu Sistemi" },
          { icon: <Award className="h-4 w-4" />, text: "GDPR Uyumlu" }
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

  return (
    <Section id="work" eyebrow="Projelerimiz" title="Seçili işler" desc="Farklı sektörlerde hızlı etki yaratan çözümler.">
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <motion.div 
            key={project.id} 
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: project.id * 0.1 }}
          >
            {/* Proje Görseli */}
            <div className="aspect-[16/10] w-full bg-[radial-gradient(circle_at_top_left,rgba(31,42,51,0.35),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(62,74,84,0.35),transparent_45%)] flex items-center justify-center">
              {project.icon || (
                <div className="h-8 w-8 rounded-full bg-white/10 border border-white/20"></div>
              )}
            </div>
            
            {/* Proje Bilgileri */}
            <div className="p-5">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-base font-semibold text-white">{project.title}</h3>
                <span className={`px-2 py-1 rounded-full text-xs border ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>
              
              <p className="mt-1 text-sm text-slate-300 mb-3">{project.shortDesc}</p>
              
              {project.details ? (
                <button
                  onClick={() => toggleProject(project.id)}
                  className="inline-flex items-center gap-2 text-[#6b7b88] text-sm hover:text-white transition-colors"
                >
                  {expandedProject === project.id ? (
                    <>
                      Kapat <ChevronUp className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      İncele <ChevronDown className="h-4 w-4" />
                    </>
                  )}
                </button>
              ) : (
                <div className="inline-flex items-center gap-2 text-[#6b7b88] text-sm opacity-50">
                  Yakında <ArrowRight className="h-4 w-4" />
                </div>
              )}
            </div>

            {/* Expandable Detaylar */}
            <AnimatePresence>
              {expandedProject === project.id && project.details && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="border-t border-white/10 bg-white/[0.02] overflow-hidden"
                >
                  <div className="p-5 space-y-4">
                    {/* Proje Açıklaması */}
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Proje Hakkında</h4>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {project.details.description}
                      </p>
                    </div>

                    {/* Öne Çıkan Özellikler */}
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Öne Çıkan Özellikler</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {project.details.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                            <div className="text-[#6b7b88]">
                              {highlight.icon}
                            </div>
                            {highlight.text}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Temel Özellikler */}
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Teknik Özellikler</h4>
                      <ul className="space-y-1 max-h-24 overflow-y-auto">
                        {project.details.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                            <Zap className="h-3 w-3 text-[#6b7b88] mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Teknoloji Stack */}
                    <div className="pt-2 border-t border-white/5">
                      <h4 className="text-xs font-semibold text-slate-400 mb-1">Teknoloji Stack</h4>
                      <p className="text-xs text-slate-300">{project.details.techStack}</p>
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