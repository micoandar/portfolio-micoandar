"use client";

import {
  Brain, Braces, Cloud, Database, LayoutTemplate, Server, Shield, Smartphone,
  Globe, Eye, ScanEye, Lock, Key, UserCheck, ShieldCheck,
} from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/Reveal";
import { skillGroups } from "@/data/skills";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import AnimatedBorder from "@/components/AnimatedBorder"; // <-- Import

const iconMap = {
  braces: Braces, layout: LayoutTemplate, server: Server, brain: Brain,
  smartphone: Smartphone, database: Database, shield: Shield, cloud: Cloud,
} as const;

const fallbackIconMap: Record<string, React.ElementType> = {
  SQL: Database, "AJAX / Fetch API": Globe, "REST API": Globe, Recharts: LayoutTemplate,
  "Computer Vision": Eye, "YOLO (v8/v11/26)": ScanEye, Authentication: Key, RBAC: UserCheck,
  "CSRF Protection": ShieldCheck, "Password Hashing": Lock, "Cloud Deployment": Cloud,
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

export default function Skills() {
  const { lang } = useLanguage();

  return (
    <Section id="keahlian" title="Skills">
      <div className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group, i) => {
          const Icon = iconMap[group.icon as keyof typeof iconMap];
          return (
            <Reveal key={group.title.id} delay={i * 60} className="h-full">
              <AnimatedBorder className="h-full">
                <div className="flex h-full flex-col p-5 sm:p-6 rounded-[22px]">
                  <div className="flex items-center gap-3">
                    <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${group.accent} text-white shadow-md sm:h-11 sm:w-11`}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white sm:text-base">
                        {group.title[lang]}
                      </h3>
                      <p className="text-[11px] text-slate-400 dark:text-slate-500 sm:text-xs">
                        {group.items.length} technologies
                      </p>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-3 border-t border-slate-100 pt-4 dark:border-slate-800">
                    {group.items.map((skill) => (
                      <li key={skill.name} className="flex items-start gap-3">
                        <SkillIcon skill={skill} />
                        <div>
                          <p className="text-sm font-semibold leading-tight text-slate-800 dark:text-slate-200">
                            {skill.name}
                          </p>
                          <p className="mt-0.5 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                            {skill.description[lang]}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedBorder>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}