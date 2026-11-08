"use client";

import {
  Braces, Cloud, Database, LayoutTemplate, Server, Smartphone,
  Globe, Eye, ScanEye, Lock, Key, UserCheck, ShieldCheck,
  Code2, Brain
} from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/Reveal";
import { skillGroups } from "@/data/skills";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

const fallbackIconMap: Record<string, React.ElementType> = {
  "Vanilla JS": Code2, 
  "YOLO (v8/v11/26)": ScanEye, 
  "SQL": Database, 
  "AJAX / Fetch API": Globe, 
  "REST API": Globe, 
  "Recharts": LayoutTemplate,
  "Computer Vision": Eye, 
  "Authentication": Key, 
  "RBAC": UserCheck,
  "CSRF Protection": ShieldCheck, 
  "Password Hashing": Lock, 
  "Cloud Deployment": Cloud,
};

const DARK_LOGOS = [
  "Next.js",
  "Three.js",
  "Express.js",
  "Git / GitHub",
  "Railway",
  "Vercel",
];

const categoryIcons: Record<string, React.ElementType> = {
  layout: LayoutTemplate,
  server: Server,
  database: Database,
  cloud: Cloud,
  brain: Brain,
  smartphone: Smartphone,
};

function SkillIcon({ skill }: { skill: { name: string; logo?: string } }) {
  const [error, setError] = useState(false);
  const needsInvert = DARK_LOGOS.includes(skill.name);

  if (skill.logo && !error) {
    return (
      <img
        src={skill.logo}
        alt={skill.name}
        loading="lazy"
        className={`h-10 w-10 object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-110 sm:h-12 sm:w-12 ${
          needsInvert ? "dark:invert" : ""
        }`}
        onError={() => setError(true)}
      />
    );
  }

  const Fallback = fallbackIconMap[skill.name] || Braces;
  return <Fallback className="h-10 w-10 text-slate-500 drop-shadow-md transition-transform duration-500 group-hover:scale-110 dark:text-slate-400 sm:h-12 sm:w-12" />;
}

function SkillCard({ skill, index, lang }: { skill: any; index: number; lang: "id" | "en" }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <Reveal delay={index * 30}>
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsFlipped(!isFlipped);
          }
        }}
        tabIndex={0}
        role="button"
        aria-pressed={isFlipped}
        className="group relative flex aspect-square cursor-pointer flex-col items-center justify-center rounded-2xl border border-slate-200/50 bg-slate-50/50 p-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-lg focus:outline-none dark:border-white/5 dark:bg-white/[0.02] dark:hover:border-white/20 dark:hover:bg-white/[0.05]"
      >
        {/* Efek Kilau di Pojok Kanan Atas */}
        <div className="absolute -right-10 -top-10 h-20 w-20 rounded-full bg-white/40 blur-2xl transition-opacity duration-300 group-hover:opacity-100 dark:bg-white/10 opacity-0" />

        {/* Tampilan Depan */}
        <div className={`absolute inset-0 z-10 flex flex-col items-center justify-center transition-all duration-300 ${isFlipped ? "pointer-events-none scale-90 opacity-0" : "scale-100 opacity-100"}`}>
          <SkillIcon skill={skill} />
          <span className="mt-2 text-center text-[10px] font-bold tracking-wide text-slate-600 dark:text-slate-300 sm:text-xs">
            {skill.name}
          </span>
        </div>

        {/* Tampilan Belakang */}
        <div className={`absolute inset-0 z-20 flex flex-col items-center justify-center rounded-2xl bg-slate-900/95 p-2 text-center backdrop-blur-md transition-all duration-300 dark:bg-[#0a0a0a]/95 sm:p-3 ${isFlipped ? "pointer-events-auto scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"}`}>
          <span className="mb-1 text-[10px] font-extrabold tracking-wider text-brand-400 sm:text-xs">
            {skill.name}
          </span>
          <p className="text-[9px] leading-tight text-slate-300 sm:text-[11px] sm:leading-relaxed">
            {skill.description[lang]}
          </p>
        </div>
      </div>
    </Reveal>
  );
}

export default function Skills() {
  const { lang } = useLanguage();

  return (
    <Section id="keahlian" title="Skills">
      <div className="flex flex-col gap-10 sm:gap-14">
        
        {skillGroups.map((group, groupIndex) => {
          const CategoryIcon = categoryIcons[group.icon] || Code2;

          return (
            <Reveal key={group.title[lang]} delay={groupIndex * 100}>
              
              {/* Container Kategori dengan Gradient Border */}
              <div className="relative rounded-[2rem] bg-gradient-to-b from-slate-200/80 to-slate-100/30 p-[1px] dark:from-white/10 dark:to-transparent">
                
                {/* Inner Container dengan Grid Pattern */}
                <div className="relative overflow-hidden rounded-[calc(2rem-1px)] bg-slate-50/80 px-5 py-8 backdrop-blur-2xl dark:bg-[#050505]/80 sm:px-8 sm:py-10">
                  
                  {/* Background Grid Tekstur */}
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]" />

                  {/* Header Kategori */}
                  <div className="relative z-10 mb-8 flex items-end justify-between gap-4 border-b border-slate-200/50 pb-6 dark:border-white/5">
                    <div className="flex items-center gap-4 sm:gap-5">
                      
                      {/* Ikon Kategori */}
                      <div className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${group.accent} text-white shadow-xl sm:h-14 sm:w-14`}>
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${group.accent} opacity-50 blur-lg`} />
                        <CategoryIcon size={24} className="relative z-10 sm:h-7 sm:w-7" strokeWidth={2} />
                      </div>

                      <div>
                        {/* Judul Uppercase & Tracking Lebar */}
                        <h3 className="text-xl font-black uppercase tracking-widest text-slate-900 dark:text-white sm:text-2xl">
                          {group.title[lang]}
                        </h3>
                        {/* Subtitle / Jumlah */}
                        <p className="mt-0.5 font-mono text-[10px] font-semibold tracking-wider text-slate-400 dark:text-slate-500 sm:text-xs">
                          &lt; {group.items.length} {lang === "id" ? "TEKNOLOGI" : "TECHNOLOGIES"} /&gt;
                        </p>
                      </div>
                    </div>

                    {/* Ornamen Garis Kanan */}
                    <div className="hidden flex-1 items-center gap-2 sm:flex">
                      <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent dark:from-white/10 dark:to-transparent" />
                      <div className={`h-2 w-2 rotate-45 bg-gradient-to-br ${group.accent}`} />
                    </div>
                  </div>

                  {/* Grid Keahlian */}
                  <div className="relative z-10 grid grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-4 md:grid-cols-5 lg:grid-cols-6">
                    {group.items.map((skill, i) => (
                      <SkillCard key={skill.name} skill={skill} index={i} lang={lang} />
                    ))}
                  </div>

                </div>
              </div>
            </Reveal>
          );
        })}

      </div>
    </Section>
  );
}