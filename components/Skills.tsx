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

// Daftar logo yang berwarna gelap/hitam agar bisa di-invert di dark mode
const DARK_LOGOS = [
  "Next.js",
  "Three.js",
  "Express.js",
  "Git / GitHub",
  "Railway",
  "Vercel",
];

// Mapping icon kategori dari data skills.ts ke komponen Lucide
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
      <div className="flex flex-col gap-14 sm:gap-20">
        
        {skillGroups.map((group) => {
          const CategoryIcon = categoryIcons[group.icon] || Code2;

          return (
            <div key={group.title[lang]} className="relative">
              
              {/* ================= HEADER KATEGORI ================= */}
              <div className="mb-8 flex items-center gap-4 sm:gap-5">
                
                {/* Kotak Ikon Gradasi */}
                <div className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${group.accent} text-white shadow-lg sm:h-14 sm:w-14`}>
                  <div className="absolute inset-0 rounded-2xl bg-black/10 opacity-0 transition-opacity hover:opacity-100 dark:bg-white/10" />
                  <CategoryIcon size={24} strokeWidth={2.5} className="relative z-10 sm:h-7 sm:w-7" />
                </div>

                {/* Teks & Garis */}
                <div className="flex flex-1 flex-col justify-center">
                  <div className="flex items-center justify-between gap-4">
                    
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white sm:text-xl">
                        {group.title[lang]}
                      </h3>
                      {/* Badge Jumlah Tools */}
                      <span className="hidden rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-semibold text-slate-500 dark:bg-slate-800 dark:text-slate-400 sm:inline-block">
                        {group.items.length} {lang === "id" ? "Teknologi" : "Tools"}
                      </span>
                    </div>

                    {/* Garis Pemisah Kanan */}
                    <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent dark:from-slate-800 dark:to-transparent" />
                  </div>
                  
                  {/* Garis Aksen Kecil di Bawah Judul */}
                  <div className={`mt-1 h-1 w-10 rounded-full bg-gradient-to-r ${group.accent}`} />
                </div>

              </div>

              {/* ================= GRID SKILL ================= */}
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 md:grid-cols-5 lg:grid-cols-6">
                {group.items.map((skill, i) => (
                  <SkillCard key={skill.name} skill={skill} index={i} lang={lang} />
                ))}
              </div>

            </div>
          );
        })}

      </div>
    </Section>
  );
}