import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title?: string; // Dibuat opsional
  description?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section id={id} className={cn("relative py-16 sm:py-20 lg:py-28", className)}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
            {eyebrow && (
              <span className="mb-3 inline-block rounded-full bg-brand-50 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-brand-700 dark:bg-brand-900/30 dark:text-brand-300 sm:px-4 sm:text-xs">
                {eyebrow}
              </span>
            )}
            {/* Hanya render H2 jika title ada isinya */}
            {title && (
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl lg:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400 sm:mt-4 sm:text-base">
                {description}
              </p>
            )}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}