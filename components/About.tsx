"use client";

import { Sparkles, Code2, Cpu, Database, Cloud } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/Reveal";
import { profile } from "@/data/profile";
import { translations } from "@/data/translations";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { lang } = useLanguage();
  const t = translations[lang].about;

  return (
    <Section id="tentang" eyebrow={t.eyebrow} title={t.title}>
      {/* Bento Grid Layout */}
      <div className="grid gap-4 md:grid-cols-3 lg:gap-6">
        
        {/* Kotak 1: Bio & Foto (Span 2 Kolom) */}
        <Reveal className="md:col-span-2">
          <div className="h-full rounded-3xl border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <div className="flex-1">
                <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
                  {t.desc}
                </p>
                <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
                  {t.closing}
                </p>
              </div>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-2">
              {profile.softSkills[lang].map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Kotak 2: Highlight AI (Span 1 Kolom) */}
        <Reveal delay={100} className="md:col-span-1">
          <div className="h-full flex flex-col justify-between rounded-3xl border border-brand-200 bg-gradient-to-br from-brand-50 to-white p-7 shadow-sm dark:border-brand-900/50 dark:from-slate-900 dark:to-slate-800 sm:p-8">
            <Sparkles className="text-brand-500 mb-6" size={32} />
            <div>
              <h3 className="text-xl font-black text-slate-900 dark:text-white">
                {t.interestingTitle}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {t.services[0].desc} {t.services[3].desc}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Kotak 3 & 4 & 5: Services (3 Kolom di bawah) */}
        {t.services.slice(1, 4).map((item, i) => (
          <Reveal key={item.title} delay={200 + i * 100}>
            <div className="group h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700">
              <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-slate-100 text-slate-600 group-hover:bg-brand-100 group-hover:text-brand-600 dark:bg-slate-800 dark:text-slate-400 transition-colors">
                {i === 0 ? <Code2 size={20} /> : i === 1 ? <Database size={20} /> : <Cloud size={20} />}
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">{item.title}</h4>
              <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400">{item.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}