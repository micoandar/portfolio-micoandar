"use client";

import {
  Braces, Cloud, Database, LayoutTemplate, Server, Smartphone,
  Globe, Eye, ScanEye, Lock, Key, UserCheck, ShieldCheck
} from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/Reveal";
import { skillGroups } from "@/data/skills";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

// Fallback icon jika gambar logo tidak tersedia (contoh: YOLO tidak punya link logo)
const fallbackIconMap: Record<string, React.ElementType> = {
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

function SkillIcon({ skill }: { skill: { name: string; logo?: string } }) {
  const [error, setError] = useState(false);

  // Jika ada logo dan gambarnya tidak error, tampilkan gambar
  if (skill.logo && !error) {
    return (
      <img
        src={skill.logo}
        alt={skill.name}
        loading="lazy"
        className="h-10 w-10 object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-110 group-active:scale-110 sm:h-14 sm:w-14"
        onError={() => setError(true)}
      />
    );
  }

  // Jika tidak ada logo atau error, tampilkan ikon fallback
  const Fallback = fallbackIconMap[skill.name] || Braces;
  return (
    <Fallback 
      className="h-10 w-10 text-slate-500 transition-transform duration-300 group-hover:scale-110 group-active:scale-110 dark:text-slate-400 sm:h-14 sm:w-14" 
    />
  );
}

export default function Skills() {
  const { lang } = useLanguage();

  // Menggabungkan SEMUA skill (Frontend, Backend, DB, dll) menjadi satu list panjang
  const allSkills = skillGroups.flatMap((group) => group.items);

  return (
    <Section id="keahlian" title="Skills">
      
      {/* Grid: 3 kolom di HP, maksimal 6 kolom di Desktop */}
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 md:grid-cols-5 lg:grid-cols-6">
        {allSkills.map((skill, i) => (
          <Reveal key={skill.name} delay={i * 30}>
            <div
              tabIndex={0}
              // aspect-square memastikan bentuknya selalu persegi sempurna
              className="group relative flex aspect-square flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand-500 active:scale-95 dark:border-slate-800 dark:bg-[#121217] dark:hover:border-slate-600 dark:focus:ring-brand-400"
            >
              
              {/* Tampilan Depan: Logo & Nama */}
              <div className="flex flex-col items-center gap-2 sm:gap-3 transition-all duration-300 group-hover:opacity-0 group-focus:opacity-0 group-active:opacity-0">
                <SkillIcon skill={skill} />
                <span className="text-center text-[10px] font-bold tracking-wide text-slate-700 dark:text-slate-300 sm:text-xs">
                  {skill.name}
                </span>
              </div>

              {/* Tampilan Belakang: Deskripsi (Muncul saat disentuh / hover) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-white/95 p-2 text-center opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100 dark:bg-[#121217]/95 sm:p-3">
                <span className="mb-1 text-[10px] font-bold text-brand-600 dark:text-brand-400">
                  {skill.name}
                </span>
                <p className="text-[9px] leading-tight text-slate-600 dark:text-slate-400 sm:text-[11px] sm:leading-relaxed">
                  {skill.description[lang]}
                </p>
              </div>

            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}