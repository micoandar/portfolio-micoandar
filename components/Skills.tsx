"use client";

import {
  Braces, Cloud, Database, LayoutTemplate, Server, Smartphone,
  Globe, Eye, ScanEye, Lock, Key, UserCheck, ShieldCheck,
  Code2
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

// Daftar logo yang berwarna gelap/hitam agar bisa di-invert di dark mode
const DARK_LOGOS = [
  "Next.js",
  "Three.js",
  "Express.js",
  "Git / GitHub",
  "Railway",
  "Vercel",
];

function SkillIcon({ skill }: { skill: { name: string; logo?: string } }) {
  const [error, setError] = useState(false);
  
  const needsInvert = DARK_LOGOS.includes(skill.name);

  if (skill.logo && !error) {
    return (
      <img
        src={skill.logo}
        alt={skill.name}
        loading="lazy"
        className={`h-10 w-10 object-contain drop-shadow-sm sm:h-14 sm:w-14 ${
          needsInvert ? "dark:invert" : ""
        }`}
        onError={() => setError(true)}
      />
    );
  }

  const Fallback = fallbackIconMap[skill.name] || Braces;
  return (
    <Fallback 
      className="h-10 w-10 text-slate-500 dark:text-slate-400 sm:h-14 sm:w-14" 
    />
  );
}

function SkillCard({ skill, index, lang }: { skill: any; index: number; lang: "id" | "en" }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleToggle = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <Reveal delay={index * 30}>
      <div
        onClick={handleToggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleToggle();
          }
        }}
        tabIndex={0}
        role="button"
        aria-pressed={isFlipped}
        className="group relative flex aspect-square cursor-pointer flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-md focus:outline-none dark:border-slate-800 dark:bg-[#121217] dark:hover:border-slate-600"
      >
        
        {/* Tampilan Depan: Logo & Nama */}
        <div 
          className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-300 ${
            isFlipped ? "opacity-0 scale-90 pointer-events-none" : "opacity-100 scale-100"
          }`}
        >
          <SkillIcon skill={skill} />
          <span className="mt-2 text-center text-[10px] font-bold tracking-wide text-slate-700 dark:text-slate-300 sm:text-xs">
            {skill.name}
          </span>
        </div>

        {/* Tampilan Belakang: Deskripsi */}
        <div 
          className={`absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-slate-50/95 p-2 text-center transition-all duration-300 dark:bg-[#121217]/95 sm:p-3 ${
            isFlipped ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 pointer-events-none -z-10"
          }`}
        >
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
      {/* Container utama dengan jarak antar kategori */}
      <div className="flex flex-col gap-12 sm:gap-16">
        
        {/* Looping per kategori dari data skillGroups */}
        {skillGroups.map((group) => (
          <div key={group.title[lang]} className="relative">
            
            {/* Header Kategori */}
            <div className="mb-6 flex items-center gap-3">
              <div className={`h-2.5 w-2.5 rounded-full bg-gradient-to-r ${group.accent}`} />
              <h3 className={`text-lg font-bold bg-gradient-to-r ${group.accent} bg-clip-text text-transparent sm:text-xl`}>
                {group.title[lang]}
              </h3>
              {/* Garis pemisah */}
              <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent dark:from-slate-800 dark:to-transparent" />
            </div>

            {/* Grid Khusus Kategori Ini */}
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 md:grid-cols-5 lg:grid-cols-6">
              {group.items.map((skill, i) => (
                <SkillCard key={skill.name} skill={skill} index={i} lang={lang} />
              ))}
            </div>

          </div>
        ))}

      </div>
    </Section>
  );
}