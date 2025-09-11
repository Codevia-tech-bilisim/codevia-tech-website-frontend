import React from "react";
import Section from "../common/Section";
import { Hammer, Rocket, CheckCircle2, Code2 } from "lucide-react";

export default function Process() {
  const steps = [
    { icon: <Hammer className="h-5 w-5" />, t: "1. Keşif", d: "Kapsam, hedef, süre. 30 dk odaklı görüşme." },
    { icon: <Rocket className="h-5 w-5" />, t: "2. MVP", d: "3 saatte landing + temel akışlar." },
    { icon: <CheckCircle2 className="h-5 w-5" />, t: "3. Doğrulama", d: "Hızlı geri bildirim ve iyileştirme." },
    { icon: <Code2 className="h-5 w-5" />, t: "4. Üretim", d: "Ölçeklenebilir altyapı ve kalite süreçleri." },
  ];

  return (
    <Section id="process" eyebrow="Nasıl Çalışıyoruz?" title="Basit, şeffaf ve hızlı" desc="Net adımlar, tahmin edilebilir teslimatlar.">
      <ol className="grid gap-6 md:grid-cols-4">
        {steps.map((step) => (
          <li key={step.t} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-sm">
            <div className="mb-3 inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-[#6b7b88]">
              {step.icon}
            </div>
            <p className="font-medium text-white">{step.t}</p>
            <p className="mt-1 text-sm text-slate-300">{step.d}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
