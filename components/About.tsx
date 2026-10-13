import { Sparkles } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/Reveal";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <Section
      id="tentang"
      eyebrow="Tentang Saya"
      title="Membangun produk dari ide sampai deploy"
      description="Saya menikmati proses merancang sistem secara utuh — mulai dari struktur data, API, tampilan, sampai aplikasi berjalan di production."
    >
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <div className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-base leading-relaxed text-slate-600">{profile.summary}</p>

            <p className="mt-5 text-base leading-relaxed text-slate-600">
              Saya tertarik pada bidang{" "}
              <strong className="font-semibold text-slate-900">Full Stack Development</strong> serta
              pengembangan sistem cerdas berbasis AI, dan siap berkontribusi secara maksimal bagi
              perusahaan.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {profile.softSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-brand-100 bg-brand-50 px-4 py-1.5 text-xs font-semibold text-brand-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="h-full rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white shadow-xl shadow-slate-900/20">
            <Sparkles className="text-brand-300" size={22} />
            <h3 className="mt-5 text-lg font-bold">Yang saya kerjakan</h3>
            <ul className="mt-5 space-y-4 text-sm leading-relaxed text-slate-300">
              {[
                "Perancangan database & REST API yang rapi dan modular",
                "Antarmuka responsif dengan fokus pada pengalaman pengguna",
                "Autentikasi, RBAC, dan praktik keamanan aplikasi",
                "Model computer vision: YOLO, PyTorch, TensorFlow Lite",
                "Deployment ke cloud (Vercel, Railway, Docker)",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}