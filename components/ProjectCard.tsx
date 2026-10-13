import { CheckCircle2 } from "lucide-react";
import type { Project } from "@/data/projects";

const categoryStyle: Record<Project["category"], string> = {
  Web: "bg-sky-50 text-sky-700 border-sky-100",
  AI: "bg-emerald-50 text-emerald-700 border-emerald-100",
  Mobile: "bg-amber-50 text-amber-700 border-amber-100",
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
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/5">
      {/* Header */}
      <div
        className={`relative h-32 shrink-0 overflow-hidden bg-gradient-to-br ${project.gradient} p-5 sm:h-40 sm:p-6`}
      >
        <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:16px_16px]" />
        <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/20 blur-3xl transition duration-500 group-hover:bg-white/30" />

        <div className="relative flex h-full flex-col justify-between">
          <div className="flex items-start justify-between gap-3">
            <span className="font-mono text-[10px] font-bold tracking-widest text-white/70 sm:text-xs">
              {String(index + 1).padStart(2, "0")} /
            </span>
            <span className="rounded-full border border-white/30 bg-white/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white backdrop-blur sm:px-3 sm:text-[11px]">
              {categoryLabel[project.category]}
            </span>
          </div>

          <div>
            <h3 className="line-clamp-3 max-w-[95%] text-base font-bold leading-snug text-white drop-shadow-sm sm:line-clamp-2 sm:max-w-[90%] sm:text-lg">
              {project.title}
            </h3>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs font-medium text-slate-500 sm:text-sm">{project.subtitle}</p>

        <ul className="mt-4 space-y-2.5 sm:mt-5">
          {project.highlights.map((point, i) => (
            <li
              key={i}
              className={`flex gap-2.5 text-xs leading-relaxed text-slate-600 sm:text-sm ${
                i >= 2 ? "hidden sm:flex" : ""
              }`}
            >
              <CheckCircle2
                size={15}
                className="mt-0.5 shrink-0 text-brand-500 sm:h-4 sm:w-4"
                aria-hidden="true"
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-1.5 border-t border-slate-100 pt-4 sm:mt-6 sm:pt-5">
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