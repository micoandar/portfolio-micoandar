"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, ChevronDown } from "lucide-react";
import { profile } from "@/data/profile";
import { translations } from "@/data/translations";
import { useLanguage } from "@/contexts/LanguageContext";
import Lanyard from "@/components/Lanyard";

export default function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang].hero;
  const [roleIndex, setRoleIndex] = useState(0);
  const [isCvOpen, setIsCvOpen] = useState(false);
  const cvRef = useRef<HTMLDivElement>(null);

  const roles = profile.roles[lang];

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2600);
    return () => clearInterval(id);
  }, [roles.length]);

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
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-50 dark:bg-[#0a0a0a] text-slate-900 dark:text-white pt-20"
    >
      {/* Background Pattern & Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-pattern [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
        <div className="absolute -left-24 top-10 -z-10 h-[30rem] w-[30rem] animate-float rounded-full bg-brand-300/30 blur-[100px] dark:bg-brand-900/20" />
        <div className="absolute -right-16 bottom-0 -z-10 h-[30rem] w-[30rem] animate-float rounded-full bg-violet-300/30 blur-[100px] dark:bg-violet-900/20 [animation-delay:2s]" />
      </div>

      {/* Grid Layout: 2 Kolom */}
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-2">
        
        {/* KOLOM KIRI: Teks & Tombol */}
        <div className="animate-fade-in z-10 flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {t.status}
          </span>

          <h1 className="mt-8 text-4xl font-black leading-[1.05] tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl">
            {t.greeting} <br />
            <span className="bg-gradient-to-r from-brand-600 to-violet-600 bg-clip-text text-transparent dark:from-brand-400 dark:to-violet-400">
              Micoandar.
            </span>
          </h1>

          <div className="mt-6 flex h-8 items-center text-lg font-semibold text-slate-700 dark:text-slate-300 sm:text-2xl">
            <span key={roleIndex} className="animate-fade-in">
              {roles[roleIndex]}
            </span>
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
            {profile.summary[lang]}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#proyek"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-xl transition-all hover:-translate-y-1 hover:shadow-slate-900/30 dark:bg-white dark:text-slate-900 dark:hover:shadow-white/20"
            >
              {t.viewProjects}
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </a>

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

        {/* KOLOM KANAN: Lanyard (Ditarik ke atas) */}
        <div className="relative flex w-full justify-center h-[600px] lg:h-[800px] -mt-20 lg:-mt-32">
          <Lanyard
            frontImage="/images/id-card.png"
            imageFit="contain"
            size={0.8} // Kartu lebih besar
            strapLength={0.7} // Tali lebih panjang
            strapColor="#111111" // Tali hitam
            interactive={true}
            anchor="center"
          />
        </div>

      </div>
    </section>
  );
}