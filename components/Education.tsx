"use client";

import { Award, BookOpen, GraduationCap } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/Reveal";
import { certifications, trainings } from "@/data/skills";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "next-themes"; // <-- Import
import BorderGlow from "@/components/BorderGlow"; // <-- Import

// ... (data education tetap sama)

export default function Education() {
  const { lang } = useLanguage();
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <Section id="pendidikan" title="Education & Certifications" className="bg-white dark:bg-slate-950">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-5">
          {education.map((item, i) => (
            <Reveal key={item.school} delay={i * 100}>
              <BorderGlow
                backgroundColor={isDark ? "#0f172a" : "#f8fafc"} // slate-50 / slate-900
                borderRadius={24}
                glowColor="270 80 70"
                colors={['#a78bfa', '#c084fc', '#818cf8']}
              >
                <div className="relative p-6 sm:p-7 rounded-[24px]">
                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-violet-600 text-white shadow-lg shadow-brand-500/25">
                      <GraduationCap size={20} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <h3 className="font-bold text-slate-900 dark:text-white">{item.degree[lang]}</h3>
                        <span className="rounded-full bg-brand-100 px-2.5 py-0.5 text-[11px] font-bold text-brand-700 dark:bg-brand-900/50 dark:text-brand-300">
                          {item.score[lang]}
                        </span>
                      </div>
                      <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">{item.school}</p>
                      <p className="mt-0.5 text-xs text-slate-400 dark:text-slate-500">
                        {item.period} · {item.location[lang]}
                      </p>

                      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        {item.details[lang].map((d) => (
                          <li key={d} className="flex gap-2.5">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </BorderGlow>
            </Reveal>
          ))}
        </div>

        <div className="space-y-6">
          <Reveal delay={120}>
            <BorderGlow
              backgroundColor={isDark ? "#0f172a" : "#ffffff"}
              borderRadius={24}
              glowColor="40 80 60"
              colors={['#fbbf24', '#f59e0b', '#f97316']}
            >
              <div className="p-6 sm:p-7 rounded-[24px]">
                <div className="mb-5 flex items-center gap-2.5">
                  <Award size={18} className="text-amber-500" />
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    {lang === "id" ? "Sertifikasi" : "Certifications"}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {certifications.map((c) => (
                    <li key={c.title.id} className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                          {c.title[lang]}
                        </p>
                        <p className="text-xs text-slate-400 dark:text-slate-500">{c.issuer}</p>
                      </div>
                      <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-bold text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                        {c.year}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </BorderGlow>
          </Reveal>

          <Reveal delay={200}>
            <BorderGlow
              backgroundColor={isDark ? "#0f172a" : "#ffffff"}
              borderRadius={24}
              glowColor="200 80 60"
              colors={['#38bdf8', '#0ea5e9', '#6366f1']}
            >
              <div className="p-6 sm:p-7 rounded-[24px]">
                <div className="mb-5 flex items-center gap-2.5">
                  <BookOpen size={18} className="text-sky-500" />
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    {lang === "id" ? "Pelatihan" : "Trainings"}
                  </h3>
                </div>
                <ul className="space-y-3.5">
                  {trainings.map((item) => (
                    <li key={item.title.id} className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                          {item.title[lang]}
                        </p>
                        <p className="text-xs text-slate-400 dark:text-slate-500">{item.issuer}</p>
                      </div>
                      <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-bold text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                        {item.year}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </BorderGlow>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}