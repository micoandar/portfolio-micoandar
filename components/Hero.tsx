"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, ChevronDown } from "lucide-react";
import { profile } from "@/data/profile";
import { translations } from "@/data/translations";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang].hero;
  const [roleIndex, setRoleIndex] = useState(0);
  const [imgError, setImgError] = useState(false);
  
  // State untuk Dropdown CV
  const [isCvOpen, setIsCvOpen] = useState(false);
  const cvRef = useRef<HTMLDivElement>(null);

  const roles = profile.roles[lang];

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2600);
    return () => clearInterval(id);
  }, [roles.length]);

  // Menutup dropdown jika klik di luar area
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cvRef.current && !cvRef.current.contains(event.target as Node)) {
        setIsCvOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section
      id="beranda"
      className="relative isolate flex min-h-screen items-center overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 bg-noise"
    >
      {/* Background Ornaments */}
      <div className="absolute inset-0 -z-10 grid-pattern [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      <div className="absolute -left-24 top-10 -z-10 h-[30rem] w-[30rem] animate-float rounded-full bg-brand-300/30 blur-[100px] dark:bg-brand-900/20" />
      <div className="absolute -right-16 bottom-0 -z-10 h-[30rem] w-[30rem] animate-float rounded-full bg-violet-300/30 blur-[100px] dark:bg-violet-900/20 [animation-delay:2s]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        
        {/* Kolom Kiri: Teks & Tombol */}
        <div className="animate-fade-in">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/50 px-4 py-1.5 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {t.status}
          </span>

          <h1 className="mt-8 text-5xl font-black leading-[1.05] tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl">
            {t.greeting} <br />
            <span className="text-gradient-brand">Micoandar.</span>
          </h1>

          <div className="mt-6 flex h-8 items-center text-xl font-semibold text-slate-700 dark:text-slate-300 sm:text-2xl">
            <span key={roleIndex} className="animate-fade-in">
              {roles[roleIndex]}
            </span>
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
            {profile.summary[lang]}
          </p>

          {/* Tombol */}
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#proyek"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-xl transition-all hover:-translate-y-1 hover:shadow-slate-900/30 dark:bg-white dark:text-slate-900 dark:hover:shadow-white/20"
            >
              {t.viewProjects}
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </a>

            {/* Dropdown CV */}
            <div className="relative" ref={cvRef}>
              <button
                type="button"
                onClick={() => setIsCvOpen(!isCvOpen)}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:-translate-y-1 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-700"
              >
                <Download size={16} />
                {t.downloadCv}
                <ChevronDown size={14} className={`transition-transform duration-200 ${isCvOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Menu Dropdown */}
              {isCvOpen && (
                <div className="absolute left-0 top-full mt-2 w-56 overflow-hidden rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl dark:border-slate-800 dark:bg-slate-900 z-50 animate-in fade-in slide-in-from-top-2">
                  <a
                    href={profile.cvFullStack}
                    download
                    onClick={() => setIsCvOpen(false)}
                    className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                  >
                    <Download size={14} className="text-slate-400" />
                    {t.cvFullStack}
                  </a>
                  <a
                    href={profile.cvSoftware}
                    download
                    onClick={() => setIsCvOpen(false)}
                    className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                  >
                    <Download size={14} className="text-slate-400" />
                    {t.cvSoftware}
                  </a>
                </div>
              )}
            </div>

            <div className="flex items-center gap-3 ml-2">
              <a href={profile.github} target="_blank" rel="noreferrer" className="text-slate-400 transition hover:text-slate-900 dark:hover:text-white">
                <Github size={24} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 transition hover:text-brand-600 dark:hover:text-brand-400">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} className="text-brand-500" />
              {profile.location[lang]}
            </span>
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 transition hover:text-brand-600">
              <Mail size={16} className="text-brand-500" />
              {profile.email}
            </a>
          </div>
        </div>

        {/* Kolom Kanan: Lanyard Card */}
        <div className="relative flex justify-center pt-10 sm:pt-0">
          <motion.div
            animate={{ rotate: [-2, 2, -2], y: [0, -5, 0] }}
            transition={{ 
              rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{ transformOrigin: "top center" }}
            className="relative flex w-full max-w-sm flex-col items-center"
          >
            {/* TALI LANYARD */}
            <div className="absolute top-0 z-0 h-[90px] w-8 overflow-hidden rounded-b-sm border-x border-slate-900/20 bg-gradient-to-b from-slate-800 via-indigo-900 to-brand-600 shadow-xl dark:from-slate-700 dark:via-indigo-950 dark:to-brand-600">
              <div className="absolute inset-0 opacity-20 [background-image:repeating-linear-gradient(45deg,transparent,transparent_2px,#fff_2px,#fff_4px)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[9px] font-bold tracking-widest text-white/50" style={{ writingMode: "vertical-rl" }}>
                  MICOANDAR
                </span>
              </div>
              <div className="absolute -bottom-1 left-1/2 flex h-6 w-5 -translate-x-1/2 flex-col items-center rounded-sm border border-slate-400 bg-gradient-to-b from-slate-100 to-slate-400 shadow-sm">
                <div className="mt-1 h-1 w-3 rounded-full bg-slate-600/50" />
              </div>
            </div>

            {/* KLIP ATAS */}
            <div className="absolute top-0 left-1/2 z-10 -ml-3 h-7 w-6 -translate-y-1/2 rounded-sm border border-slate-500 bg-gradient-to-b from-slate-200 via-white to-slate-400 shadow-md">
              <div className="absolute bottom-1 left-1/2 h-2 w-3 -translate-x-1/2 rounded-sm bg-slate-800/20" />
            </div>

            {/* KARTU PROFIL */}
            <div className="relative z-10 mt-[90px] w-full select-none">
              <div className="absolute -top-4 left-1/2 z-20 flex h-8 w-14 -translate-x-1/2 items-center justify-center rounded-full border-[3px] border-slate-300 bg-slate-900 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] dark:border-slate-600 dark:bg-slate-950">
                <div className="h-1.5 w-8 rounded-full bg-white/20" />
              </div>

              <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/80 p-7 shadow-2xl backdrop-blur-2xl dark:border-slate-700/60 dark:bg-slate-900/80 sm:p-8">
                <div className="pointer-events-none absolute -left-1/2 -top-1/2 h-[200%] w-[200%] bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-50" />

                <div className="relative flex flex-col items-center text-center">
                  <div className="relative mt-2">
                    <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-brand-500 via-violet-500 to-sky-400 opacity-80 blur-sm" />
                    <div className="relative h-28 w-28 overflow-hidden rounded-full bg-slate-100 ring-4 ring-white dark:bg-slate-800 dark:ring-slate-900 sm:h-32 sm:w-32">
                      {!imgError ? (
                        <Image
                          src="/images/foto-profil.jpg"
                          alt={profile.name}
                          fill
                          sizes="(max-width: 640px) 112px, 128px"
                          className="pointer-events-none object-cover"
                          priority
                          onError={() => setImgError(true)}
                        />
                      ) : (
                        <div className="grid h-full w-full place-items-center text-3xl font-black text-slate-300">
                          {profile.initials}
                        </div>
                      )}
                    </div>
                    <span className="absolute bottom-1 right-1 grid h-7 w-7 place-items-center rounded-full bg-white shadow-lg dark:bg-slate-800 sm:bottom-2 sm:right-2">
                      <span className="h-4 w-4 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-slate-800" />
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-black tracking-tight text-slate-900 dark:text-white sm:text-2xl">
                    {profile.name}
                  </h3>
                  
                  {/* BAGIAN YANG DIUBAH: Menampilkan dua role */}
                  <div className="mt-2 flex flex-col items-center gap-1 sm:flex-row sm:gap-2">
                    <span className="text-sm font-bold text-brand-600 dark:text-brand-400">
                      {profile.roles[lang][0]}
                    </span>
                    <span className="hidden text-slate-300 sm:inline dark:text-slate-600">•</span>
                    <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                      {profile.roles[lang][1]}
                    </span>
                  </div>

                </div>

                <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-slate-700" />

                <div className="flex w-full items-center justify-between divide-x divide-slate-200/60 rounded-2xl border border-slate-100 bg-white/60 py-3 shadow-sm dark:divide-slate-700/60 dark:border-slate-800 dark:bg-slate-800/50">
                  {profile.stats.map((stat) => (
                    <div key={stat.label.id} className="flex w-full flex-col items-center px-2">
                      <p className="text-lg font-black text-slate-900 dark:text-white sm:text-xl">
                        {stat.value}
                        <span className="ml-0.5 text-xs font-semibold text-slate-400 dark:text-slate-500">
                          {stat.suffix}
                        </span>
                      </p>
                      <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                        {stat.label[lang]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}