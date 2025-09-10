import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Code2, Smartphone, Brain, Palette, Rocket,
  Hammer, CheckCircle2, Mail, Phone, MapPin,
  ArrowRight, PlayCircle,
} from "lucide-react";
import logo from "./assets/codevia-logo-big.png";
import TeknoKentLogo3D from "./components/TeknoKentLogo3D";

/* ---------- Layout helpers ---------- */
const Container = ({ children }) => (
  <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
);

const Section = ({ id, eyebrow, title, desc, children }) => (
  <section id={id} className="scroll-mt-28 py-20">
    <Container>
      <div className="mb-10 max-w-3xl">
        {eyebrow && (
          <span className="text-xs font-medium tracking-widest text-[#6b7b88]/90">{eyebrow}</span>
        )}
        {title && (
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight text-white">
            {title}
          </h2>
        )}
        {desc && <p className="mt-3 text-slate-300 text-base sm:text-lg">{desc}</p>}
      </div>
      {children}
    </Container>
  </section>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200 backdrop-blur">
    {children}
  </span>
);

/* ---------- Planet effect - Orijinal çalışan kod + buz mavisi ---------- */
const PlanetFX = () => (
  <div className="pointer-events-none absolute inset-0 z-0">
    {/* subtle vignette */}
    <div className="absolute inset-0 bg-[radial-gradient(50%_40%_at_100%_0%,rgba(62,130,197,0.18),transparent_30%)]" />

    {/* stars - CSS ile düzgün syntax */}
    <div 
      className="absolute inset-0 opacity-30" 
      style={{
        backgroundImage: 'radial-gradient(rgba(2,6,23,0.95) 0%, transparent 1px)',
        backgroundSize: '2px 2px'
      }} 
    />
    <div 
      className="absolute inset-0 opacity-20" 
      style={{
        backgroundImage: 'radial-gradient(rgba(2,6,23,0.95) 0%, transparent 1px)',
        backgroundSize: '3px 3px',
        backgroundPosition: '12px 8px'
      }} 
    />

    {/* planet body */}
    <div
      className="absolute left-1/2 top-[48%] -translate-x-1/2
                 h-[150vh] w-[150vh] rounded-full"
      style={{
        background: 'radial-gradient(circle at center, rgba(2,6,23,0.95) 0%, rgba(2,6,23,0.8) 55%, transparent 70%)',
        maskImage: 'radial-gradient(140% 80% at 50% 40%, white, transparent 60%)',
        WebkitMaskImage: 'radial-gradient(140% 80% at 50% 40%, white, transparent 60%)'
      }}
    />

    {/* atmosphere glow (brand-ish grey/blue) */}
    <div
      className="absolute left-1/2 top-[46%] -translate-x-1/2
                 h-[160vh] w-[160vh] rounded-full opacity-90"
      style={{
        background: 'radial-gradient(circle at center, transparent 50%, rgba(62,74,84,0.6) 58%, transparent 72%)',
        filter: 'blur(60px)',
        maskImage: 'radial-gradient(140% 80% at 50% 40%, white, transparent 60%)',
        WebkitMaskImage: 'radial-gradient(140% 80% at 50% 40%, white, transparent 60%)'
      }}
    />

    {/* bright rim - BUZ MAVİSİ */}
    <div
      className="absolute left-1/2 top-[48%] -translate-x-1/2
                 h-[150vh] w-[200vh] rounded-full"
      style={{
        background: 'radial-gradient(circle at center, transparent 53%, rgba(147,197,253,0.98) 55%, rgba(59,130,246,0.45) 60%, transparent 65%)',
        maskImage: 'radial-gradient(140% 80% at 50% 40%, white, transparent 60%)',
        WebkitMaskImage: 'radial-gradient(140% 80% at 50% 40%, white, transparent 60%)',
        mixBlendMode: 'screen',
        filter: 'drop-shadow(0 0 40px rgba(147,197,253,0.18))'
      }}
    />

    {/* thin grid on rim - BUZ MAVİSİ */}
    <div
      className="absolute left-1/2 top-[48%] -translate-x-1/2
                 h-[150vh] w-[150vh] rounded-full opacity-20"
      style={{
        maskImage: 'radial-gradient(140% 80% at 50% 40%, white, transparent 60%)',
        WebkitMaskImage: 'radial-gradient(140% 80% at 50% 40%, white, transparent 60%)',
        backgroundImage: 'linear-gradient(rgba(147,197,253,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(147,197,253,0.06) 1px, transparent 1px)',
        backgroundSize: '56px 56px'
      }}
    />
  </div>
);

/* ---------- App ---------- */
export default function App() {
  // smooth scroll
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => (document.documentElement.style.scrollBehavior = "auto");
  }, []);

  return (
    // Ana container - tüm sayfa background'u
    <div className="relative min-h-screen overflow-hidden bg-[#0b1020]">
      {/* Tüm sayfa için Profico tarzı gradient background */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 1200px 800px at 0% 0%, 
              rgba(59, 130, 246, 0.15) 0%,
              rgba(99, 102, 241, 0.10) 25%,
              transparent 50%
            ),
            radial-gradient(ellipse 1000px 600px at 100% 20%, 
              rgba(168, 85, 247, 0.12) 0%,
              rgba(139, 92, 246, 0.08) 30%,
              transparent 60%
            ),
            radial-gradient(ellipse 800px 400px at 50% 80%, 
              rgba(236, 72, 153, 0.08) 0%,
              rgba(219, 39, 119, 0.05) 40%,
              transparent 70%
            ),
            radial-gradient(ellipse 1400px 900px at 80% 100%, 
              rgba(31, 42, 51, 0.4) 0%,
              rgba(62, 74, 84, 0.2) 50%,
              transparent 80%
            ),
            linear-gradient(180deg, 
              rgba(15, 23, 42, 0.95) 0%,
              rgba(15, 23, 42, 0.98) 100%
            )
          `
        }}
      />

      {/* İçerik - relative positioning ile background üstünde */}
      <div className="relative z-10 min-h-screen text-slate-100">
        {/* Header */}
        <header className="sticky top-4 z-50">
          <Container>
            <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-lg">
              <a href="#home" className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-[#1f2a33] to-[#3e4a54] flex items-center justify-center">
                  <img src={logo} alt="Codevia" className="h-5 w-5 object-contain" />
                </div>
                <span className="text-base font-semibold tracking-tight">Codevia Tech</span>
              </a>
              <nav className="hidden md:flex items-center gap-1 text-sm">
                {["Hizmetlerimiz", "Projelerimiz", "Nasıl Çalışıyoruz?", "Hakkımızda", "İletişim"].map((label, idx) => (
                  <a
                    key={idx}
                    href={["#services", "#work", "#process", "#about", "#contact"][idx]}
                    className="rounded-full px-3 py-2 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    {label}
                  </a>
                ))}
              </nav>
              <a
                href="#contact"
                className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1f2a33] to-[#3e4a54] px-4 py-2 text-white shadow hover:opacity-90 transition-opacity"
              >
                Teklif Al <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Container>
        </header>

        {/* Hero (planet background) */}
        <section id="home" className="relative isolate overflow-hidden min-h-[90vh] pb-10 pt-24 md:pt-32">
          <PlanetFX />
          <Container>
            <div className="relative z-10 mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200">
                <span className="rounded-full bg-[#3e4a54]/80 px-2 py-0.5 text-[10px] uppercase tracking-wider">New</span>
                <span>Takım panelini keşfedin</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </div>

              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
                Fikirler Sizden, Kod Bizden
                <br className="hidden sm:block" />
                <span className="text-white/90">Geleceği Birlikte Yazıyoruz</span>
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
                Codevia Tech; kendi kendine servis edilebilen ekip araçları, analitik ve modern arayüzlerle yöneticilerinizi
                güçlendirir, çalışanlarınızı her yerden bağlı tutar.
              </p>


              {/* 3D Logo buraya geldi */}
              <div className="mt-8 flex justify-center">
                <div style={{ width: "500px", height: "300px" }}>
                  <TeknoKentLogo3D />
                </div>
              </div>

            </div>
          </Container>
        </section>

        {/* Services */}
        <Section
          id="services"
          eyebrow="Hizmetlerimiz"
          title="İhtiyacınıza odaklanan çözümler"
          desc="MVP'den üretime, tasarımdan teslimata. Gereksiz karmaşa yok, net sonuç var."
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: <Code2 className="h-5 w-5" />, title: "Web Geliştirme", desc: "React/Next ile hızlı ve ölçeklenebilir web uygulamaları." },
              { icon: <Smartphone className="h-5 w-5" />, title: "Mobil Uygulama", desc: "Kotlin Compose ile modern Android deneyimleri." },
              { icon: <Brain className="h-5 w-5" />, title: "AI & Veri", desc: "ML destekli özellikler, veri panelleri ve otomasyon." },
              { icon: <Palette className="h-5 w-5" />, title: "UI / UX Tasarım", desc: "Şık, erişilebilir ve tutarlı arayüzler." },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset] backdrop-blur hover:bg-white/[0.06]"
              >
                <div className="mb-3 inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-[#6b7b88]">
                  {s.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-1 text-sm text-slate-300">{s.desc}</p>
                <div className="mt-4 flex items-center gap-2 text-sm text-[#6b7b88] opacity-0 transition-opacity group-hover:opacity-100">
                  Detaylar <ArrowRight className="h-4 w-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Work / Projects */}
        <Section id="work" eyebrow="Projelerimiz" title="Seçili işler" desc="Farklı sektörlerde hızlı etki yaratan çözümler.">
          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div key={n} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-sm">
                <div className="aspect-[16/10] w-full bg-[radial-gradient(circle_at_top_left,rgba(31,42,51,0.35),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(62,74,84,0.35),transparent_45%)]" />
                <div className="p-5">
                  <h3 className="text-base font-semibold text-white">Proje {n}</h3>
                  <p className="mt-1 text-sm text-slate-300">Kısa açıklama – teknoloji yığını, kullanıcıya sağlanan değer, KPI.</p>
                  <div className="mt-3 inline-flex items-center gap-2 text-[#6b7b88] text-sm">
                    İncele <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Process */}
        <Section id="process" eyebrow="Nasıl Çalışıyoruz?" title="Basit, şeffaf ve hızlı" desc="Net adımlar, tahmin edilebilir teslimatlar.">
          <ol className="grid gap-6 md:grid-cols-4">
            {[
              { icon: <Hammer className="h-5 w-5" />, t: "1. Keşif", d: "Kapsam, hedef, süre. 30 dk odaklı görüşme." },
              { icon: <Rocket className="h-5 w-5" />, t: "2. MVP", d: "3 saatte landing + temel akışlar." },
              { icon: <CheckCircle2 className="h-5 w-5" />, t: "3. Doğrulama", d: "Hızlı geri bildirim ve iyileştirme." },
              { icon: <Code2 className="h-5 w-5" />, t: "4. Üretim", d: "Ölçeklenebilir altyapı ve kalite süreçleri." },
            ].map((step, i) => (
              <li key={i} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-sm">
                <div className="mb-3 inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-[#6b7b88]">
                  {step.icon}
                </div>
                <p className="font-medium text-white">{step.t}</p>
                <p className="mt-1 text-sm text-slate-300">{step.d}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* About */}
        <Section id="about" eyebrow="Hakkımızda" title="Biz Kimiz?">
          <div className="max-w-4xl">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-slate-300 mb-6">
                Codevia, <strong className="text-white">Ankara Üniversitesi kökenli genç ve dinamik bir ekibin</strong> girişimi olarak Ankara Teknokent'te kurulmuş bir teknoloji şirketidir. Amacımız, işletmelere ve girişimlere <strong className="text-white">güvenilir, ölçeklenebilir ve modern yazılım çözümleri</strong> sunarak iş süreçlerini dijital dünyada daha güçlü hale getirmektir.
              </p>
              
              <p className="text-base leading-relaxed text-slate-300 mb-6">
                Ekibimiz; bulut bilişim, DevOps, yapay zekâ ve mobil uygulama geliştirme konularında uzman mühendislerden oluşmaktadır. Akademik altyapımızı, yenilikçi bakış açımızla birleştirerek, hem Türkiye'de hem de küresel ölçekte fark yaratan projeler üretmeyi hedefliyoruz.
              </p>

              <div className="grid gap-6 md:grid-cols-2 mt-8">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Vizyonumuz</h4>
                  <p className="text-sm text-slate-300">
                    Üniversite temelli girişim ruhumuzla teknoloji alanında Türkiye'nin öncü şirketlerinden biri olmak.
                  </p>
                </div>
                
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Misyonumuz</h4>
                  <p className="text-sm text-slate-300">
                    İş ortaklarımıza şeffaf, sürdürülebilir ve yüksek kaliteli dijital çözümler sunarak uzun vadeli değer yaratmak.
                  </p>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-4">Teknoloji Yığınımız</h4>
              <div className="flex flex-wrap gap-3">
                {["React", "Next.js", "TypeScript", "Node.js", "Express", "Python", "FastAPI", "PostgreSQL", "MongoDB", "Kotlin", "Jetpack Compose", "Tailwind", "Vercel", "Docker"].map((tech, i) => (
                  <span key={i} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-slate-200 shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" eyebrow="İletişim" title="Birlikte üretelim" desc="Kısa bir mesaj bırakın; 15 dakika içinde dönüş yapalım (mesai saatleri içinde).">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-sm">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const name = e.currentTarget.name.value;
                  const email = e.currentTarget.email.value;
                  const msg = e.currentTarget.message.value;
                  const subject = encodeURIComponent("Codevia Tech — Hızlı Teklif");
                  const body = encodeURIComponent(`Ad: ${name}\nE-posta: ${email}\nMesaj: ${msg}`);
                  window.location.href = `mailto:info@codevia.tech?subject=${subject}&body=${body}`;
                }}
                className="grid gap-4"
              >
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-200">Ad Soyad</label>
                  <input name="name" required placeholder="Adınız" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-[#3e4a54]" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-200">E-posta</label>
                  <input type="email" name="email" required placeholder="ornek@eposta.com" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-[#3e4a54]" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-200">Mesaj</label>
                  <textarea name="message" rows={4} required placeholder="Kısa bir özet..." className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-[#3e4a54]" />
                </div>
                <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#1f2a33] to-[#3e4a54] px-5 py-3 font-medium text-white shadow hover:opacity-90">
                  Gönder <Mail className="h-4 w-4" />
                </button>
                <p className="text-xs text-slate-400">Form, e-posta istemcinizi açar. İsterseniz daha sonra gerçek bir API ile bağlarız.</p>
              </form>
            </div>

            <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-2 text-[#6b7b88]"><Mail className="h-5 w-5" /></div>
                <div>
                  <p className="text-sm text-slate-400">E-posta</p>
                  <a href="mailto:info@codevia.tech" className="font-medium text-white hover:underline">info@codevia.tech</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-2 text-[#6b7b88]"><Phone className="h-5 w-5" /></div>
                <div>
                  <p className="text-sm text-slate-400">Telefon</p>
                  <a href="tel:+905438707575" className="font-medium text-white hover:text-blue-300 transition-colors">+90 (543) 870 75 75</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-2 text-[#6b7b88]"><MapPin className="h-5 w-5" /></div>
                <div>
                  <p className="text-sm text-slate-400">Ofis</p>
                  <div className="font-medium text-white">
                    <p>Bahçelievler Mah. Doktor Cevdet Kara Cad.</p>
                    <p>E Blok No: 35 E /B22</p>
                    <p className="text-slate-300">Ankara Üniversitesi Teknokent</p>
                    <p className="text-slate-300">Ankara, Türkiye</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-transparent">
          <Container>
            <div className="flex flex-col items-center justify-between gap-3 py-6 text-sm text-slate-400 md:flex-row">
              <p>© {new Date().getFullYear()} Codevia Tech. Tüm hakları saklıdır.</p>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                <span>Hazır: Yayına al</span>
              </div>
            </div>
          </Container>
        </footer>
      </div>
    </div>
  );
}