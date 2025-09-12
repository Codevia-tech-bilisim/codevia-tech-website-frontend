import React, { useState } from "react";
import Section from "../common/Section";
import { motion, AnimatePresence } from "framer-motion";
import { useSmartResponsive } from "../../hooks/useSmartResponsive";
import { 
  Code2, Smartphone, Brain, Palette, 
  ChevronDown, ChevronUp, Zap, Globe, 
  Layers, Monitor, Database, Cloud,
  Figma, PaintBucket, Users, Target
} from "lucide-react";

export default function Services() {
  const [showAllDetails, setShowAllDetails] = useState(false);
  const { 
    columns, 
    isTouch, 
    spacing, 
    getTextContent, 
    getTouchOptimizedSize,
    contentLevel,
    isMobile 
  } = useSmartResponsive();

  const services = [
    { 
      icon: <Code2 className="h-4 w-4 sm:h-5 sm:w-5" />, 
      title: "Web Geliştirme", 
      descriptions: {
        minimal: "React/Next web apps",
        medium: "React/Next ile hızlı web uygulamaları",
        full: "React/Next ile hızlı ve ölçeklenebilir web uygulamaları."
      },
      details: {
        description: {
          minimal: "Modern web teknolojileriyle performanslı web uygulamaları geliştiriyoruz.",
          medium: "Modern web teknolojileriyle performanslı, SEO-uyumlu web uygulamaları geliştiriyoruz. Responsive tasarımdan API entegrasyonuna kadar çözümler.",
          full: "Modern web teknolojileriyle performanslı, SEO-uyumlu ve kullanıcı dostu web uygulamaları geliştiriyoruz. Responsive tasarımdan API entegrasyonuna kadar tam kapsamlı çözümler sunuyoruz."
        },
        technologies: ["React 19", "Next.js 14", "TypeScript", "Tailwind CSS", "Node.js", "Express"],
        features: [
          "Server-Side Rendering (SSR) optimizasyonu",
          "Progressive Web App (PWA) desteği", 
          "RESTful API ve GraphQL entegrasyonu",
          "Responsive ve mobile-first tasarım",
          "SEO optimizasyonu ve performans tuning",
          "Modern CI/CD deployment pipeline"
        ],
        highlights: [
          { icon: <Globe className="h-3 w-3 sm:h-4 sm:w-4" />, text: "Global Erişim" },
          { icon: <Zap className="h-3 w-3 sm:h-4 sm:w-4" />, text: "Yüksek Performans" },
          { icon: <Monitor className="h-3 w-3 sm:h-4 sm:w-4" />, text: "Responsive Tasarım" }
        ]
      }
    },
    { 
      icon: <Smartphone className="h-4 w-4 sm:h-5 sm:w-5" />, 
      title: "Mobil Uygulama", 
      descriptions: {
        minimal: "Kotlin Android apps",
        medium: "Kotlin Compose ile modern Android uygulamaları",
        full: "Kotlin Compose ile modern Android deneyimleri."
      },
      details: {
        description: {
          minimal: "Native Android uygulamaları ile mobil dünyada fark yaratıyoruz.",
          medium: "Native Android uygulamaları ve modern UI/UX tasarımlarıyla mobil dünyada fark yaratıyoruz.",
          full: "Native Android uygulamaları ve cross-platform çözümlerle mobil dünyada fark yaratıyoruz. Modern UI/UX tasarımlarıyla kullanıcı deneyimini ön planda tutuyoruz."
        },
        technologies: ["Kotlin", "Jetpack Compose", "Room Database", "Retrofit", "Hilt", "Coroutines"],
        features: [
          "Jetpack Compose ile modern UI geliştirme",
          "Offline-first architecture ve local storage",
          "Push notifications ve real-time updates",
          "Camera, GPS ve sensor entegrasyonları",
          "Güvenli ödeme sistemleri entegrasyonu",
          "Play Store optimize ve deployment"
        ],
        highlights: [
          { icon: <Smartphone className="h-3 w-3 sm:h-4 sm:w-4" />, text: "Native Performance" },
          { icon: <Database className="h-3 w-3 sm:h-4 sm:w-4" />, text: "Offline Desteği" },
          { icon: <Layers className="h-3 w-3 sm:h-4 sm:w-4" />, text: "Modern Architecture" }
        ]
      }
    },
    { 
      icon: <Brain className="h-4 w-4 sm:h-5 sm:w-5" />, 
      title: "AI & Veri", 
      descriptions: {
        minimal: "ML ve veri analizi",
        medium: "ML destekli özellikler ve veri panelleri",
        full: "ML destekli özellikler, veri panelleri ve otomasyon."
      },
      details: {
        description: {
          minimal: "Yapay zeka ve veri analizi ile işletmenizin karar verme süreçlerini güçlendiriyoruz.",
          medium: "Yapay zeka ve veri analizi ile işletmenizin karar verme süreçlerini güçlendiriyoruz. Predictive analytics'ten chatbot'lara kadar geniş çözüm yelpazesi.",
          full: "Yapay zeka ve veri analizi ile işletmenizin karar verme süreçlerini güçlendiriyoruz. Predictive analytics'ten chatbot'lara kadar geniş AI çözüm yelpazesi sunuyoruz."
        },
        technologies: ["Python", "TensorFlow", "scikit-learn", "Pandas", "FastAPI", "PostgreSQL"],
        features: [
          "Predictive analytics ve forecasting modelleri",
          "Natural Language Processing (NLP) çözümleri",
          "Computer vision ve image processing",
          "Real-time data dashboard'ları",
          "Automated report generation",
          "Custom AI model training ve deployment"
        ],
        highlights: [
          { icon: <Brain className="h-3 w-3 sm:h-4 sm:w-4" />, text: "Smart Algorithms" },
          { icon: <Target className="h-3 w-3 sm:h-4 sm:w-4" />, text: "Predictive Analytics" },
          { icon: <Cloud className="h-3 w-3 sm:h-4 sm:w-4" />, text: "Cloud AI Services" }
        ]
      }
    },
    { 
      icon: <Palette className="h-4 w-4 sm:h-5 sm:w-5" />, 
      title: "UI / UX Tasarım", 
      descriptions: {
        minimal: "Modern UI/UX tasarım",
        medium: "Şık ve erişilebilir arayüzler",
        full: "Şık, erişilebilir ve tutarlı arayüzler."
      },
      details: {
        description: {
          minimal: "Kullanıcı odaklı tasarım prensipleriyle modern arayüzler tasarlıyoruz.",
          medium: "Kullanıcı odaklı tasarım prensipleriyle modern, accessible arayüzler tasarlıyoruz. Design system'lerden prototyping'e kadar tasarım süreci yönetimi.",
          full: "Kullanıcı odaklı tasarım prensipleriyle modern, accessible ve conversion-optimized arayüzler tasarlıyoruz. Design system'lerden prototyping'e kadar tam tasarım süreci yönetimi."
        },
        technologies: ["Figma", "Adobe XD", "Principle", "Framer", "Miro", "InVision"],
        features: [
          "User research ve persona development",
          "Wireframing ve interactive prototyping",
          "Design system ve component library",
          "Accessibility (WCAG) compliance",
          "A/B testing ve conversion optimization",
          "Responsive ve mobile-first yaklaşım"
        ],
        highlights: [
          { icon: <Users className="h-3 w-3 sm:h-4 sm:w-4" />, text: "User-Centered" },
          { icon: <Figma className="h-3 w-3 sm:h-4 sm:w-4" />, text: "Design Systems" },
          { icon: <PaintBucket className="h-3 w-3 sm:h-4 sm:w-4" />, text: "Modern UI/UX" }
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
      eyebrow="Hizmetlerimiz"
      title="İhtiyacınıza odaklanan çözümler"
      desc="MVP'den üretime, tasarımdan teslimata. Gereksiz karmaşa yok, net sonuç var."
    >
      <div style={gridStyle} className="w-full">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.04] shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset] backdrop-blur hover:bg-white/[0.06]"
          >
            <div className={`p-4 sm:p-5`} style={{ padding: `${spacing * 0.8}px` }}>
              <div className="mb-3 inline-flex items-center justify-center rounded-lg sm:rounded-xl border border-white/10 bg-white/5 p-2 text-[#6b7b88]">
                {service.icon}
              </div>
              
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                {service.title}
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                {getTextContent(service.descriptions)}
              </p>
              
              <button
                onClick={toggleDetails}
                className={`flex items-center gap-2 text-xs sm:text-sm text-[#6b7b88] opacity-0 transition-all duration-300 group-hover:opacity-100 hover:text-white ${
                  isTouch ? 'active:scale-95' : ''
                }`}
                style={{ 
                  minHeight: `${buttonHeight}px`,
                  padding: isTouch ? '8px 12px' : '4px 8px'
                }}
              >
                {showAllDetails ? (
                  <>
                    Kapat <ChevronUp className="h-3 w-3 sm:h-4 sm:w-4" />
                  </>
                ) : (
                  <>
                    Detaylar <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4" />
                  </>
                )}
              </button>
            </div>

            {/* Smart Details Section */}
            <AnimatePresence>
              {showAllDetails && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="border-t border-white/10 bg-white/[0.02] overflow-hidden"
                >
                  <div className="p-4 sm:p-5 space-y-3 sm:space-y-4">
                    {/* Adaptive Service Description */}
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-white mb-2">Hizmet Detayı</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {getTextContent(service.details.description)}
                      </p>
                    </div>

                    {/* Highlights - Always show on mobile for quick overview */}
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-white mb-2">Öne Çıkan Özellikler</h4>
                      <div className="grid grid-cols-1 gap-1 sm:gap-2">
                        {service.details.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                            <div className="text-[#6b7b88] flex-shrink-0">
                              {highlight.icon}
                            </div>
                            <span className="truncate">{highlight.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Features - Show limited on mobile */}
                    {(contentLevel !== 'minimal') && (
                      <div>
                        <h4 className="text-xs sm:text-sm font-semibold text-white mb-2">Ana Özellikler</h4>
                        <ul className="space-y-1 max-h-24 sm:max-h-32 overflow-y-auto">
                          {service.details.features
                            .slice(0, contentLevel === 'medium' ? 3 : 4)
                            .map((feature, idx) => (
                            <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                              <Zap className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-[#6b7b88] mt-0.5 flex-shrink-0" />
                              <span className="leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Technologies - Adaptive count */}
                    <div className="pt-2 border-t border-white/5">
                      <h4 className="text-xs font-semibold text-slate-400 mb-1">Teknolojiler</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.details.technologies
                          .slice(0, contentLevel === 'minimal' ? 2 : contentLevel === 'medium' ? 3 : 4)
                          .map((tech, idx) => (
                          <span key={idx} className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 whitespace-nowrap">
                            {tech}
                          </span>
                        ))}
                      </div>
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