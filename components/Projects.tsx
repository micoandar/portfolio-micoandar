import Section from "@/components/ui/Section";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <Section
      id="proyek"
      eyebrow="Portofolio"
      title="Proyek Pilihan"
      description="Kumpulan proyek yang saya bangun — dari sistem pemesanan, monitoring AI, sampai aplikasi Android."
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