"use client";

import Section from "@/components/ui/Section";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Projects() {
  const { lang } = useLanguage();

  return (
    <Section
      id="proyek"
      title="Portfolio"
      className="bg-white dark:bg-[#0a0a0a]"
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