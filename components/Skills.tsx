"use client";

import {
  Brain,
  Braces,
  Cloud,
  Database,
  LayoutTemplate,
  Server,
  Shield,
  Smartphone,
} from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/Reveal";
import { skillGroups, type SkillLevel } from "@/data/skills";
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

const levelStyle: Record<SkillLevel, string> = {
  Mahir: "bg-emerald-50 text-emerald-700 border-emerald-100",
  Menengah: "bg-sky-50 text-sky-700 border-sky-100",
  Dasar: "bg-amber-50 text-amber-700 border-amber-100",
};

export default function Skills() {
  const { lang } = useLanguage();
  const t = translations[lang].skills;

  return (
    <Section id="keahlian" eyebrow={t.eyebrow} title={t.title} description={t.desc}>
      <div className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group, i) => {
          const Icon = iconMap[group.icon as keyof typeof iconMap];
          return (
            <Reveal key={group.title} delay={i * 60} className="h-full">
              <div className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:shadow-lg hover:shadow-slate-900/5 sm:p-6">
                <div className="flex items-center gap-3">
                  <div
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${group.accent} text-white shadow-md sm:h-11 sm:w-11`}
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 sm:text-base">
                      {group.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 sm:text-xs">
                      {group.items.length} {t.count}
                    </p>
                  </div>
                </div>

                <ul className="mt-5 space-y-3 border-t border-slate-100 pt-4">
                  {group.items.map((skill) => (
                    <li key={skill.name}>
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-sm font-semibold leading-tight text-slate-800">
                          {skill.name}
                        </p>
                        <span
                          className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${levelStyle[skill.level]}`}
                        >
                          {skill.level}
                        </span>
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-slate-500">
                        {skill.description}
                      </p>
                    </li>
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