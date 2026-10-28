"use client";

import { 
  Sparkles, 
  Code2, 
  Server, 
  Cloud, 
  Cpu, 
  Layers 
} from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/Reveal";
import { profile } from "@/data/profile";
import { translations } from "@/data/translations";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { lang } = useLanguage();
  const t = translations[lang].about;

  // Mapping ikon untuk 5 services
  const serviceIcons = [
    <Server key="server" size={20} />,      // Full-Stack
    <Code2 key="code" size={20} />,         // Frontend
    <Cpu key="cpu" size={20} />,            // AI
    <Layers key="mobile" size={20} />,      // Android (Menggunakan Layers)
    <Cloud key="cloud" size={20} />         // DevOps
  ];

  return (
    <Section id="tentang" eyebrow={t.eyebrow} title={t.title}>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
        
        {/* BARIS 1: Bio & Highlight */}
        
        {/* Kotak Bio (Kiri - 7 Kolom) */}
        <Reveal className="md:col-span-7">
          <div className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-slate-900/50 sm:p-10">
            <div>
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 sm:text-xl">
                {t.desc}
              </p>
              <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
                {t.closing}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Kotak Highlight Rekayasa (Kanan - 5 Kolom) */}
        <Reveal delay={100} className="md:col-span-5">
          <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-7 text-white shadow-xl dark:from-brand-950 dark:to-slate-900 sm:p-10">
            {/* Ornamen Latar */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-500/20 blur-3xl" />
            
            <div className="relative z-10">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md">
                <Sparkles size={24} className="text-brand-300" />
              </div>
              <h3 className="text-2xl font-black tracking-tight text-white">
                {t.interestingTitle}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                {t.services[0].desc}
              </p>
            </div>
          </div>
        </Reveal>

        {/* BARIS 2: 4 Services + 1 Soft Skills */}
        
        {/* 4 Services */}
        {t.services.slice(1, 5).map((item, i) => (
          <Reveal key={item.title} delay={200 + i * 100} className="md:col-span-4">
            <div className="group h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-slate-700">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition-colors group-hover:bg-brand-100 group-hover:text-brand-600 dark:bg-slate-800 dark:text-slate-400 dark:group-hover:bg-brand-900/50 dark:group-hover:text-brand-400">
                {serviceIcons[i + 1]}
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                {item.title}
              </h4>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {item.desc}
              </p>
            </div>
          </Reveal>
        ))}

        {/* Kotak Soft Skills */}
        <Reveal delay={600} className="md:col-span-4">
          <div className="h-full rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/30">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
              <Layers size={20} />
            </div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Soft Skills
            </h4>
            <div className="mt-4 flex flex-wrap gap-2">
              {profile.softSkills[lang].map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-[11px] font-semibold text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

      </div>
    </Section>
  );
}