"use client";

import { Award, BookOpen, GraduationCap, FileText, ExternalLink } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/Reveal";
import { certifications, trainings } from "@/data/skills";
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

  return (
    <Section id="pendidikan" title="Education & Certifications" className="bg-white dark:bg-slate-950">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
        
        {/* ================= KIRI: PENDIDIKAN (Timeline Style) ================= */}
        <div className="relative space-y-6 before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent dark:before:via-slate-800">
          {education.map((item, i) => (
            <Reveal key={item.school} delay={i * 100}>
              <div className="relative flex items-start gap-5 sm:gap-6">
                {/* Ikon Timeline */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-violet-600 text-white shadow-lg shadow-brand-500/30 ring-4 ring-white dark:ring-slate-950">
                  <GraduationCap size={22} />
                </div>
                
                {/* Kartu Pendidikan */}
                <div className="flex-1 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/60 sm:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {item.degree[lang]}
                    </h3>
                    <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700 border border-brand-100 dark:bg-brand-900/30 dark:text-brand-300 dark:border-brand-800">
                      {item.score[lang]}
                    </span>
                  </div>
                  
                  <p className="text-sm font-semibold text-brand-600 dark:text-brand-400">
                    {item.school}
                  </p>
                  <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                    {item.period} <span className="mx-1">•</span> {item.location[lang]}
                  </p>

                  <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {item.details[lang].map((d) => (
                      <li key={d} className="flex gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300 dark:bg-slate-600" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ================= KANAN: SERTIFIKASI & PELATIHAN ================= */}
        <div className="space-y-6">
          
          {/* SERTIFIKASI */}
          <Reveal delay={120}>
            <div className="group rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-amber-300 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-amber-700/50">
              <div className="flex items-center gap-3 border-b border-slate-100 px-6 py-5 dark:border-slate-800">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-amber-50 text-amber-500 dark:bg-amber-500/10">
                  <Award size={20} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {lang === "id" ? "Sertifikasi" : "Certifications"}
                </h3>
              </div>
              
              <ul className="divide-y divide-slate-100 dark:divide-slate-800 p-2">
                {certifications.map((c) => (
                  <li key={c.title.id}>
                    <a 
                      href={c.fileUrl || undefined}
                      target={c.fileUrl ? "_blank" : undefined}
                      rel="noreferrer"
                      className={`group/item flex items-start justify-between gap-4 rounded-2xl p-4 transition-all duration-200 ${
                        c.fileUrl ? "hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer" : "cursor-default"
                      }`}
                    >
                      <div className="flex gap-4">
                        {c.fileUrl && (
                          <div className="mt-0.5 grid h-8 w-8 place-items-center rounded-lg bg-slate-100 text-slate-400 group-hover/item:bg-amber-100 group-hover/item:text-amber-600 transition-colors dark:bg-slate-800 dark:group-hover/item:bg-amber-500/20 dark:group-hover/item:text-amber-400">
                            <FileText size={16} />
                          </div>
                        )}
                        <div>
                          <p className={`text-sm font-semibold text-slate-800 dark:text-slate-200 transition-colors ${c.fileUrl ? "group-hover/item:text-amber-600 dark:group-hover/item:text-amber-400" : ""}`}>
                            {c.title[lang]}
                          </p>
                          <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">{c.issuer}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-end gap-2 shrink-0">
                        <span className="rounded-md bg-slate-100 px-2 py-1 text-[10px] font-bold text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                          {c.year}
                        </span>
                        {c.fileUrl && (
                          <ExternalLink size={14} className="text-slate-300 group-hover/item:text-amber-500 transition-colors opacity-0 group-hover/item:opacity-100" />
                        )}
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* PELATIHAN */}
          <Reveal delay={200}>
            <div className="group rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-sky-300 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-sky-700/50">
              <div className="flex items-center gap-3 border-b border-slate-100 px-6 py-5 dark:border-slate-800">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-sky-50 text-sky-500 dark:bg-sky-500/10">
                  <BookOpen size={20} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {lang === "id" ? "Pelatihan" : "Trainings"}
                </h3>
              </div>
              
              <ul className="divide-y divide-slate-100 dark:divide-slate-800 p-2">
                {trainings.map((item) => (
                  <li key={item.title}>
                    <a 
                      href={item.fileUrl || undefined}
                      target={item.fileUrl ? "_blank" : undefined}
                      rel="noreferrer"
                      className={`group/item flex items-start justify-between gap-4 rounded-2xl p-4 transition-all duration-200 ${
                        item.fileUrl ? "hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer" : ""
                      }`}
                    >
                      <div className="flex gap-4">
                        {item.fileUrl && (
                          <div className="mt-0.5 grid h-8 w-8 place-items-center rounded-lg bg-slate-100 text-slate-400 group-hover/item:bg-sky-100 group-hover/item:text-sky-600 transition-colors dark:bg-slate-800 dark:group-hover/item:bg-sky-500/20 dark:group-hover/item:text-sky-400">
                            <FileText size={16} />
                          </div>
                        )}
                        <div>
                          <p className={`text-sm font-semibold text-slate-800 dark:text-slate-200 transition-colors ${item.fileUrl ? "group-hover/item:text-sky-600 dark:group-hover/item:text-sky-400" : ""}`}>
                            {item.title}
                          </p>
                          <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">{item.issuer}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-end gap-2 shrink-0">
                        <span className="rounded-md bg-slate-100 px-2 py-1 text-[10px] font-bold text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                          {item.year}
                        </span>
                        {item.fileUrl && (
                          <ExternalLink size={14} className="text-slate-300 group-hover/item:text-sky-500 transition-colors opacity-0 group-hover/item:opacity-100" />
                        )}
                      </div>
                    </a>
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