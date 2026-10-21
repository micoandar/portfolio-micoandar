"use client";

import { useState, ElementType } from "react";
import {
  Brain,
  Braces,
  Cloud,
  Database,
  LayoutTemplate,
  Server,
  Shield,
  Smartphone,
  Globe,
  Eye,
  ScanEye,
  Lock,
  Key,
  UserCheck,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/Reveal";
import { skillGroups, type SkillItem } from "@/data/skills";
import { translations } from "@/data/translations";
import { useLanguage } from "@/contexts/LanguageContext";

const iconMap = {
  braces: Braces,
  layout: LayoutTemplate,
  server: Server,
  brain: Brain,
  smartphone: Smartphone,
  database: Database,
  shield: Shield,
  cloud: Cloud,
} as const;

const fallbackIconMap: Record<string, ElementType> = {
  SQL: Database,
  "AJAX / Fetch API": Globe,
  "REST API": Globe,
  Recharts: LayoutTemplate,
  "Computer Vision": Eye,
  "YOLO (v8/v11/26)": ScanEye,
  Authentication: Key,
  RBAC: UserCheck,
  "CSRF Protection": ShieldCheck,
  "Password Hashing": Lock,
  "Cloud Deployment": Cloud,
};

function SkillIcon({ skill }: { skill: { name: string; logo?: string } }) {
  const [error, setError] = useState(false);

  if (skill.logo && !error) {
    return (
      <img
        src={skill.logo}
        alt={skill.name}
        width={20}
        height={20}
        loading="lazy"
        className="h-5 w-5 shrink-0 object-contain dark:brightness-110"
        onError={() => setError(true)}
      />
    );
  }

  const Fallback = fallbackIconMap[skill.name] || Braces;
  return <Fallback size={16} className="h-5 w-5 shrink-0 text-slate-500 dark:text-slate-400" />;
}

// Komponen terpisah untuk setiap baris agar bisa punya state buka/tutup sendiri
function SkillRow({ skill, lang }: { skill: SkillItem; lang: "id" | "en" }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="flex flex-col border-b border-slate-100 py-2.5 last:border-0 dark:border-slate-800/50">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group flex w-full items-center justify-between gap-3 text-left transition hover:opacity-80"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <SkillIcon skill={skill} />
          <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
            {skill.name}
          </span>
        </div>
        <ChevronDown
          size={16}
          className={`shrink-0 text-slate-400 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      
      {/* Deskripsi yang muncul/hilang dengan animasi smooth */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-2 pl-8 pr-4 pt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
            {skill.description[lang]}
          </p>
        </div>
      </div>
    </li>
  );
}

export default function Skills() {
  const { lang } = useLanguage();
  const t = translations[lang].skills;

  return (
    <Section id="keahlian" eyebrow={t.eyebrow} title={t.title} description={t.desc}>
      <div className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group, i) => {
          const Icon = iconMap[group.icon as keyof typeof iconMap];
          return (
            <Reveal key={group.title.id} delay={i * 60} className="h-full">
              <div className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:shadow-lg hover:shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900 sm:p-6">
                <div className="flex items-center gap-3">
                  <div
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${group.accent} text-white shadow-md sm:h-11 sm:w-11`}
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white sm:text-base">
                      {group.title[lang]}
                    </h3>
                    <p className="text-[11px] text-slate-400 dark:text-slate-500 sm:text-xs">
                      {group.items.length} {t.count}
                    </p>
                  </div>
                </div>

                <ul className="mt-4 border-t border-slate-100 pt-2 dark:border-slate-800">
                  {group.items.map((skill) => (
                    <SkillRow key={skill.name} skill={skill} lang={lang} />
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}