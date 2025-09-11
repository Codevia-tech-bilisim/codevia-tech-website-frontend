import React from "react";
import Section from "../common/Section";

export default function About() {
  const techs = ["React", "Next.js", "TypeScript", "Node.js", "Express", "Python", "FastAPI", "PostgreSQL", "MongoDB", "Kotlin", "Jetpack Compose", "Tailwind", "Vercel", "Docker"];

  return (
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
              <p className="text-sm text-slate-300">Üniversite temelli girişim ruhumuzla teknoloji alanında Türkiye'nin öncü şirketlerinden biri olmak.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <h4 className="text-lg font-semibold text-white mb-3">Misyonumuz</h4>
              <p className="text-sm text-slate-300">İş ortaklarımıza şeffaf, sürdürülebilir ve yüksek kaliteli dijital çözümler sunarak uzun vadeli değer yaratmak.</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h4 className="text-lg font-semibold text-white mb-4">Teknoloji Yığınımız</h4>
          <div className="flex flex-wrap gap-3">
            {techs.map((t) => (
              <span key={t} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-slate-200 shadow-sm">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
