"use client";

import { Award, BookOpen, GraduationCap } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/Reveal";
import { certifications, trainings } from "@/data/skills";
import { translations } from "@/data/translations";
import { useLanguage } from "@/contexts/LanguageContext";

const education = [
  {
    school: "Universitas Gunadarma",
    degree: { id: "S1 Informatika", en: "Bachelor of Informatics" },
    period: "2022 – 2026",
    location: { id: "Bekasi, Jawa Barat, Indonesia", en: "Bekasi, West Java, Indonesia" },
    score: { id: "IPK 3.76 / 4.00", en: "GPA 3.76 / 4.00" },
    details: {
      id: [
        "Judul Skripsi: Penerapan YOLOv8 untuk Deteksi Bahan Makanan pada Sistem Rekomendasi Resep Diet Berbasis Android",
        "Judul Karya Tulis Ilmiah: Sistem Otomatisasi Tempat Sampah Menggunakan Ultrasonic Berbasis Internet of Things",
      ],
      en: [
        "Thesis: Implementation of YOLOv8 for Food Ingredient Detection in an Android-based Diet Recipe Recommendation System",
        "Scientific Paper: Automated Trash Bin System Using Ultrasonic Sensors Based on the Internet of Things",
      ],
    },
  },
  {
    school: "SMK Telekomunikasi Telesandi Bekasi",
    degree: { id: "Teknik Komputer dan Jaringan", en: "Computer & Network Engineering" },
    period: "2019 – 2022",
    location: { id: "Bekasi, Jawa Barat", en: "Bekasi, West Java" },
    score: { id: "Nilai Akhir 85,51", en: "Final Score 85.51" },
    details: {
      id: [
        "Praktik Kerja Industri di PPTIK ITB",
        "Laporan: Instalasi dan Konfigurasi DHCP Server pada Ubuntu 16.04 Menggunakan VirtualBox (Nilai 87)",
      ],
      en: [
        "Internship at PPTIK ITB",
        "Report: Installation and Configuration of DHCP Server on Ubuntu 16.04 Using VirtualBox (Score 87)",
      ],
    },
  },
];

export default function Education() {
  const { lang } = useLanguage();
  const t = translations[lang].education;

  return (
    <Section
      id="pendidikan"
      eyebrow={t.eyebrow}
      title={t.title}
      description={t.desc}
      className="bg-white"
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-5">
          {education.map((item, i) => (
            <Reveal key={item.school} delay={i * 100}>
              <div className="relative rounded-3xl border border-slate-200 bg-slate-50/60 p-6 sm:p-7">
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-violet-600 text-white shadow-lg shadow-brand-500/25">
                    <GraduationCap size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h3 className="font-bold text-slate-900">{item.degree[lang]}</h3>
                      <span className="rounded-full bg-brand-100 px-2.5 py-0.5 text-[11px] font-bold text-brand-700">
                        {item.score[lang]}
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-slate-600">{item.school}</p>
                    <p className="mt-0.5 text-xs text-slate-400">
                      {item.period} · {item.location[lang]}
                    </p>

                    <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-600">
                      {item.details[lang].map((d) => (
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

        <div className="space-y-6">
          <Reveal delay={120}>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
              <div className="mb-5 flex items-center gap-2.5">
                <Award size={18} className="text-amber-500" />
                <h3 className="font-bold text-slate-900">{t.certs}</h3>
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
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
              <div className="mb-5 flex items-center gap-2.5">
                <BookOpen size={18} className="text-sky-500" />
                <h3 className="font-bold text-slate-900">{t.trainings}</h3>
              </div>
              <ul className="space-y-3.5">
                {trainings.map((item) => (
                  <li key={item.title} className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-slate-800">{item.title}</p>
                      <p className="text-xs text-slate-400">{item.issuer}</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-bold text-slate-500">
                      {item.year}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}