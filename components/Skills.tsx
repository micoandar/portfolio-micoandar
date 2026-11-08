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
        className={`h-10 w-10 object-contain drop-shadow-sm sm:h-12 sm:w-12 ${
          needsInvert ? "dark:invert" : ""
        }`}
        onError={() => setError(true)}
      />
    );
  }

  const Fallback = fallbackIconMap[skill.name] || Braces;
  return <Fallback className="h-10 w-10 text-slate-500 dark:text-slate-400 sm:h-12 sm:w-12" />;
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
        className="group relative flex aspect-square cursor-pointer flex-col items-center justify-center rounded-2xl border border-slate-200/60 bg-white/50 p-2 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg focus:outline-none dark:border-slate-800/60 dark:bg-slate-900/50 dark:hover:border-slate-600"
      >
        <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-300 ${isFlipped ? "opacity-0 scale-90 pointer-events-none" : "opacity-100 scale-100"}`}>
          <SkillIcon skill={skill} />
          <span className="mt-2 text-center text-[10px] font-bold tracking-wide text-slate-700 dark:text-slate-300 sm:text-xs">
            {skill.name}
          </span>
        </div>

        <div className={`absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-slate-50/95 p-2 text-center transition-all duration-300 dark:bg-[#121217]/95 sm:p-3 ${isFlipped ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 pointer-events-none -z-10"}`}>
          <span className="mb-1 text-[10px] font-bold text-brand-600 dark:text-brand-400">
            {skill.name}
          </span>
          <p className="text-[9px] leading-tight text-slate-600 dark:text-slate-400 sm:text-[11px] sm:leading-relaxed">
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
      <div className="flex flex-col gap-8 sm:gap-10">
        
        {skillGroups.map((group, groupIndex) => {
          const CategoryIcon = categoryIcons[group.icon] || Code2;
          const numberStr = String(groupIndex + 1).padStart(2, "0");

          return (
            <Reveal key={group.title[lang]} delay={groupIndex * 100}>
              
              {/* KOTAK KATEGORI (BENTO STYLE) */}
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/60 bg-white/40 p-5 shadow-sm backdrop-blur-xl transition-all duration-500 hover:bg-white/60 hover:shadow-md dark:border-white/5 dark:bg-white/[0.02] dark:hover:bg-white/[0.04] sm:p-8">
                
                {/* Nomor Raksasa sebagai Background Watermark */}
                <div className="pointer-events-none absolute -right-4 -top-8 select-none text-[8rem] font-black leading-none text-slate-900/[0.03] dark:text-white/[0.02] sm:-right-2 sm:-top-12 sm:text-[12rem]">
                  {numberStr}
                </div>

                {/* Header Kategori */}
                <div className="relative z-10 mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4 sm:gap-5">
                    
                    {/* Ikon dengan Efek Glow */}
                    <div className="relative">
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${group.accent} opacity-40 blur-xl transition-opacity duration-500 group-hover:opacity-70`} />
                      <div className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${group.accent} text-white shadow-lg sm:h-14 sm:w-14`}>
                        <CategoryIcon size={24} className="sm:h-7 sm:w-7" strokeWidth={2} />
                      </div>
                    </div>

                    <div>
                      {/* Judul & Badge */}
                      <div className="flex items-center gap-3">
                        <h3 className={`bg-gradient-to-r ${group.accent} bg-clip-text text-xl font-extrabold tracking-tight text-transparent sm:text-2xl`}>
                          {group.title[lang]}
                        </h3>
                        <span className="hidden rounded-full border border-slate-200/50 bg-white/50 px-2.5 py-0.5 text-[10px] font-bold text-slate-500 backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-800/50 dark:text-slate-400 sm:inline-block">
                          {group.items.length} {lang === "id" ? "Teknologi" : "Tools"}
                        </span>
                      </div>
                      {/* Garis Aksen Kecil */}
                      <div className={`mt-1.5 h-1 w-12 rounded-full bg-gradient-to-r ${group.accent} opacity-80`} />
                    </div>
                  </div>
                </div>

                {/* Grid Keahlian */}
                <div className="relative z-10 grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 md:grid-cols-5 lg:grid-cols-6">
                  {group.items.map((skill, i) => (
                    <SkillCard key={skill.name} skill={skill} index={i} lang={lang} />
                  ))}
                </div>

              </div>
            </Reveal>
          );
        })}

      </div>
    </Section>
  );
}