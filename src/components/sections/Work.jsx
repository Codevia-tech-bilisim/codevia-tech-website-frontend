import React from "react";
import Section from "../common/Section";
import { ArrowRight } from "lucide-react";

export default function Work() {
  return (
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
  );
}
