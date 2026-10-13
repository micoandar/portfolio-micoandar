import { Award, BookOpen, GraduationCap, Presentation } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/Reveal";
import { certifications, seminars, trainings } from "@/data/skills";

const education = [
  {
    school: "Universitas Gunadarma",
    degree: "S1 Informatika",
    period: "2022 – 2026",
    location: "Bekasi, Jawa Barat, Indonesia",
    score: "IPK 3.76 / 4.00",
    details: [
      "Judul Skripsi: Penerapan YOLOv8 untuk Deteksi Bahan Makanan pada Sistem Rekomendasi Resep Diet Berbasis Android",
      "Judul Karya Tulis Ilmiah: Sistem Otomatisasi Tempat Sampah Menggunakan Ultrasonic Berbasis Internet of Things",
    ],
  },
  {
    school: "SMK Telekomunikasi Telesandi Bekasi",
    degree: "Teknik Komputer dan Jaringan",
    period: "2019 – 2022",
    location: "Bekasi, Jawa Barat",
    score: "Nilai Akhir 85,51",
    details: [
      "Praktik Kerja Industri di PPTIK ITB",
      "Laporan: Instalasi dan Konfigurasi DHCP Server pada Ubuntu 16.04 Menggunakan VirtualBox (Nilai 87)",
    ],
  },
];

export default function Education() {
  return (
    <Section
      id="pendidikan"
      eyebrow="Pendidikan & Sertifikasi"
      title="Latar Belakang Akademik"
      description="Perjalanan pendidikan, sertifikasi profesi, pelatihan, dan seminar yang saya ikuti."
      className="bg-white"
    >
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Education Timeline */}
        <div className="space-y-5">
          {education.map((item, i) => (
            <Reveal key={item.school} delay={i * 100}>
              <div className="relative rounded-3xl border border-slate-200 bg-slate-50/60 p-7">
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-violet-600 text-white shadow-lg shadow-brand-500/25">
                    <GraduationCap size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h3 className="font-bold text-slate-900">{item.degree}</h3>
                      <span className="rounded-full bg-brand-100 px-2.5 py-0.5 text-[11px] font-bold text-brand-700">
                        {item.score}
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-slate-600">{item.school}</p>
                    <p className="mt-0.5 text-xs text-slate-400">
                      {item.period} · {item.location}
                    </p>

                    <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-600">
                      {item.details.map((d) => (
                        <li key={d} className="flex gap-2.5">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Certifications / Trainings / Seminars */}
        <div className="space-y-6">
          <Reveal delay={120}>
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-5 flex items-center gap-2.5">
                <Award size={18} className="text-amber-500" />
                <h3 className="font-bold text-slate-900">Sertifikasi</h3>
              </div>
              <ul className="space-y-4">
                {certifications.map((c) => (
                  <li key={c.title} className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-slate-800">{c.title}</p>
                      <p className="text-xs text-slate-400">{c.issuer}</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-bold text-slate-500">
                      {c.year}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-5 flex items-center gap-2.5">
                <BookOpen size={18} className="text-sky-500" />
                <h3 className="font-bold text-slate-900">Pelatihan</h3>
              </div>
              <ul className="space-y-3.5">
                {trainings.map((t) => (
                  <li key={t.title} className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-slate-800">{t.title}</p>
                      <p className="text-xs text-slate-400">{t.issuer}</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-bold text-slate-500">
                      {t.year}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={280}>
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-5 flex items-center gap-2.5">
                <Presentation size={18} className="text-violet-500" />
                <h3 className="font-bold text-slate-900">Seminar</h3>
              </div>
              {seminars.map((s) => (
                <div key={s.title}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-slate-800">{s.title}</p>
                      <p className="text-xs text-slate-400">{s.issuer}</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-bold text-slate-500">
                      {s.year}
                    </span>
                  </div>
                  <p className="mt-3 rounded-xl bg-slate-50 px-4 py-3 text-xs italic leading-relaxed text-slate-500">
                    “{s.topic}”
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}