"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import type { Project } from "@/data/projects";
import { useLanguage } from "@/contexts/LanguageContext";

const categoryStyle: Record<Project["category"], string> = {
  Web: "bg-sky-50 text-sky-700 border-sky-100 dark:bg-sky-900/30 dark:text-sky-300 dark:border-sky-800",
  AI: "bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800",
  Mobile: "bg-amber-50 text-amber-700 border-amber-100 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800",
};

const categoryLabel: Record<Project["category"], string> = {
  Web: "Web App",
  AI: "AI / Computer Vision",
  Mobile: "Mobile App",
};

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const { lang } = useLanguage();

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-slate-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700">
      <div className={`relative h-44 shrink-0 overflow-hidden bg-gradient-to-br ${project.gradient} p-5 sm:h-56 sm:p-6`}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-105"
          priority={index < 2}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
        
        <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-6 z-10">
          <div className="flex items-start justify-between gap-3">
            <span className="rounded bg-black/50 px-2 py-0.5 font-mono text-[10px] font-bold tracking-widest text-white/90 backdrop-blur-md sm:text-xs">
              {String(index + 1).padStart(2, "0")} /
            </span>
            <span className="rounded-full border border-white/20 bg-black/50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white backdrop-blur-md sm:px-3 sm:text-[11px]">
              {categoryLabel[project.category]}
            </span>
          </div>
          <div>
            <h3 className="line-clamp-3 max-w-[95%] text-base font-bold leading-snug text-white drop-shadow-md sm:line-clamp-2 sm:max-w-[90%] sm:text-xl">
              {project.title}
            </h3>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs font-medium text-slate-500 dark:text-slate-400 sm:text-sm">
          {project.subtitle[lang]}
        </p>

        <ul className="mt-4 space-y-2.5 sm:mt-5">
          {project.highlights.map((point, i) => (
            <li
              key={i}
              className={`flex gap-2.5 text-xs leading-relaxed text-slate-600 dark:text-slate-300 sm:text-sm ${
                i >= 2 ? "hidden sm:flex" : ""
              }`}
            >
              <CheckCircle2
                size={15}
                className="mt-0.5 shrink-0 text-brand-500 sm:h-4 sm:w-4"
                aria-hidden="true"
              />
              <span>{point[lang]}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-1.5 border-t border-slate-100 pt-4 dark:border-slate-800 sm:mt-6 sm:pt-5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className={`rounded-md border px-2 py-0.5 text-[10px] font-semibold sm:px-2.5 sm:py-1 sm:text-[11px] ${categoryStyle[project.category]}`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}