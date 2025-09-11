import React from "react";
import Section from "../common/Section";
import { motion } from "framer-motion";
import { Code2, Smartphone, Brain, Palette, ArrowRight } from "lucide-react";

export default function Services() {
  const items = [
    { icon: <Code2 className="h-5 w-5" />, title: "Web Geliştirme", desc: "React/Next ile hızlı ve ölçeklenebilir web uygulamaları." },
    { icon: <Smartphone className="h-5 w-5" />, title: "Mobil Uygulama", desc: "Kotlin Compose ile modern Android deneyimleri." },
    { icon: <Brain className="h-5 w-5" />, title: "AI & Veri", desc: "ML destekli özellikler, veri panelleri ve otomasyon." },
    { icon: <Palette className="h-5 w-5" />, title: "UI / UX Tasarım", desc: "Şık, erişilebilir ve tutarlı arayüzler." },
  ];

  return (
    <Section
      id="services"
      eyebrow="Hizmetlerimiz"
      title="İhtiyacınıza odaklanan çözümler"
      desc="MVP'den üretime, tasarımdan teslimata. Gereksiz karmaşa yok, net sonuç var."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((s, i) => (
          <motion.div
            key={s.title}
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
  );
}
