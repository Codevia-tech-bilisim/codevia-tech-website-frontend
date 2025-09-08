import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Code2, Smartphone, Brain, Palette, Rocket,
  Hammer, CheckCircle2, Mail, Phone, MapPin,
  ArrowRight, PlayCircle,
} from "lucide-react";
import logo from "./assets/codevia-logo-big.png";

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

/* ---------- Planet effect (stars + horizon + bright rim) ---------- */
const PlanetFX = () => (
  <div className="pointer-events-none absolute inset-0 z-0">
    {/* subtle vignette */}
    <div className="absolute inset-0 bg-[radial-gradient(50%_40%_at_100%_0%,rgba(62,130,197,0.18),transparent_30%)]" />

    {/* stars */}
    <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(2,6,23,0.95)_0%)_1px,transparent_1px)] bg-[size:2px_2px]" />
    <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(rgba(2,6,23,0.95)_0%_1px,transparent_1px)] bg-[size:3px_3px] bg-[position:12px_8px]" />

    {/* planet body */}
    <div
      className="absolute left-1/2 top-[48%] -translate-x-1/2
                 h-[150vh] w-[150vh] rounded-full
                 bg-[radial-gradient(circle_at_center,rgba(2,6,23,0.95)_0%,rgba(2,6,23,0.8)_55%,transparent_70%)]
                 [mask-image:radial-gradient(140%_80%_at_50%_40%,white,transparent_60%)]
                 [-webkit-mask-image:radial-gradient(140%_80%_at_50%_40%,white,transparent_60%)]"
    />

    {/* atmosphere glow (brand-ish grey/blue) */}
    <div
      className="absolute left-1/2 top-[46%] -translate-x-1/2
                 h-[160vh] w-[160vh] rounded-full blur-[60px] opacity-90
                 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(62,74,84,0.6)_58%,transparent_72%)]
                 [mask-image:radial-gradient(140%_80%_at_50%_40%,white,transparent_60%)]
                 [-webkit-mask-image:radial-gradient(140%_80%_at_50%_40%,white,transparent_60%)]"
    />

    {/* bright rim */}
    <div
      className="absolute left-1/2 top-[48%] -translate-x-1/2
                 h-[150vh] w-[200vh] rounded-full
                 bg-[radial-gradient(circle_at_center,transparent_53%,rgba(220,235,245,0.98)_55%,rgba(220,235,245,0.45)_60%,transparent_65%)]
                 [mask-image:radial-gradient(140%_80%_at_50%_40%,white,transparent_60%)]
                 [-webkit-mask-image:radial-gradient(140%_80%_at_50%_40%,white,transparent_60%)]
                 mix-blend-screen drop-shadow-[0_0_40px_rgba(220,235,245,0.18)]"
    />

    {/* thin grid on rim */}
    <div
      className="absolute left-1/2 top-[48%] -translate-x-1/2
                 h-[150vh] w-[150vh] rounded-full opacity-20
                 [mask-image:radial-gradient(140%_80%_at_50%_40%,white,transparent_60%)]
                 [-webkit-mask-image:radial-gradient(140%_80%_at_50%_40%,white,transparent_60%)]
                 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]
                 bg-[size:56px_56px]"
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
    <div className="min-h-screen bg-[#0b1020] text-slate-100">
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
                  className="rounded-full px-3 py-2 text-slate-300 hover:text-white hover:bg-white/10"
                >
                  {label}
                </a>
              ))}
            </nav>
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1f2a33] to-[#3e4a54] px-4 py-2 text-white shadow hover:opacity-90"
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

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-3 text-base font-medium text-white hover:bg-white/15">
                <PlayCircle className="h-5 w-5" /> Watch demo
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1f2a33] to-[#3e4a54] px-5 py-3 text-base font-medium text-white shadow hover:opacity-90">
                Get started for free
              </a>
            </div>

            <p className="mt-6 text-sm text-slate-400">500+ şirket tarafından güveniliyor</p>
            <div className="mt-3 flex items-center justify-center gap-8 opacity-60">
              <div className="h-4 w-16 rounded bg-white/10" />
              <div className="h-4 w-16 rounded bg-white/10" />
              <div className="h-4 w-16 rounded bg-white/10" />
              <div className="h-4 w-16 rounded bg-white/10" />
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

      {/* Tech */}
      <Section id="about" eyebrow="Hakkımızda" title="Biz Kimiz?">
        <div className="flex flex-wrap gap-3">
          {["React", "Next.js", "TypeScript", "Node.js", "Express", "Python", "FastAPI", "PostgreSQL", "MongoDB", "Kotlin", "Jetpack Compose", "Tailwind", "Vercel", "Docker"].map((t, i) => (
            <span key={i} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-slate-200 shadow-sm">
              {t}
            </span>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="relative">
        <Container>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-[#1f2a33]/40 to-[#3e4a54]/40 p-8 text-white shadow-sm">
            <div className="grid gap-6 md:grid-cols-2 md:items-center">
              <div>
                <h3 className="text-2xl font-semibold">3 saatte göz alıcı bir siteye hazır mısınız?</h3>
                <p className="mt-2 text-white/90">Taslakları birlikte netleştirelim, bugün yayına alalım. Sonra adım adım temelini sağlamlaştırırız.</p>
              </div>
              <div className="flex gap-3 md:justify-end">
                <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-medium text-indigo-700 shadow hover:opacity-90">
                  Teklif Al <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#work" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 font-medium text-white hover:bg-white/10">
                  İşlere Göz At
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

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
                <span className="font-medium text-white">+90 (5xx) xxx xx xx</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-xl border border-white/10 bg-white/5 p-2 text-[#6b7b88]"><MapPin className="h-5 w-5" /></div>
              <div>
                <p className="text-sm text-slate-400">Ofis</p>
                <span className="font-medium text-white">Ankara, Türkiye</span>
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
  );
}
