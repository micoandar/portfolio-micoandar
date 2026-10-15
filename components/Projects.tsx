"use client";

import Section from "@/components/ui/Section";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { translations } from "@/data/translations";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Projects() {
  const { lang } = useLanguage();
  const t = translations[lang].projects;

  return (
    <Section
      id="proyek"
      eyebrow={t.eyebrow}
      title={t.title}
      description={t.desc}
      className="bg-white"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 90} className="h-full">
            <ProjectCard project={project} index={i} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}