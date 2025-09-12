import React from "react";
import Section from "../common/Section";
import { Hammer, Rocket, CheckCircle2, Code2 } from "lucide-react";
import { useTranslation } from "../../contexts/TranslationContext";

export default function Process() {
  const { t } = useTranslation();

  const steps = [
    { icon: <Hammer className="h-5 w-5" />, title: t('step1Title'), desc: t('step1Desc') },
    { icon: <Rocket className="h-5 w-5" />, title: t('step2Title'), desc: t('step2Desc') },
    { icon: <CheckCircle2 className="h-5 w-5" />, title: t('step3Title'), desc: t('step3Desc') },
    { icon: <Code2 className="h-5 w-5" />, title: t('step4Title'), desc: t('step4Desc') },
  ];

  return (
    <Section 
      id="process" 
      eyebrow={t('processEyebrow')} 
      title={t('processTitle')} 
      desc={t('processDescription')}
    >
      <ol className="grid gap-6 md:grid-cols-4">
        {steps.map((step) => (
          <li key={step.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-sm">
            <div className="mb-3 inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-[#6b7b88]">
              {step.icon}
            </div>
            <p className="font-medium text-white">{step.title}</p>
            <p className="mt-1 text-sm text-slate-300">{step.desc}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}