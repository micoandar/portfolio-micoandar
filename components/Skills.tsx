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
import { skillGroups } from "@/data/skills";

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

export default function Skills() {
  return (
    <Section
      id="keahlian"
      eyebrow="Keahlian"
      title="Teknologi & Tools"
      description="Stack yang saya gunakan sehari-hari untuk membangun aplikasi end-to-end."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, i) => {
          const Icon = iconMap[group.icon as keyof typeof iconMap];
          return (
            <Reveal key={group.title} delay={i * 60}>
              <div className="group h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/5">
                <div
                  className={`grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br ${group.accent} text-white shadow-md`}
                >
                  <Icon size={19} />
                </div>
                <h3 className="mt-5 text-sm font-bold text-slate-900">{group.title}</h3>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600 transition group-hover:bg-slate-200/70"
                    >
                      {item}
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