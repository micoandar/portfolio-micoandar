"use client";

import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div id="proyek" className="grid gap-6 md:grid-cols-2">
      {projects.map((project, i) => (
        <Reveal key={project.slug} delay={i * 90} className="h-full">
          <ProjectCard project={project} index={i} />
        </Reveal>
      ))}
    </div>
  );
}