"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { translations } from "@/data/translations";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang].hero;
  const [roleIndex, setRoleIndex] = useState(0);
  const [imgError, setImgError] = useState(false);

  const roles = profile.roles[lang];

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2600);
    return () => clearInterval(id);
  }, [roles.length]);

  return (
    <section
      id="beranda"
      className="relative isolate flex min-h-screen items-center overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20"
    >
      {/* Background Ornaments */}
      <div className="absolute inset-0 -z-10 grid-pattern [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="absolute -left-24 top-10 -z-10 h-72 w-72 animate-float rounded-full bg-brand-300/40 blur-3xl" />
      <div className="absolute -right-16 bottom-0 -z-10 h-80 w-80 animate-float rounded-full bg-violet-300/40 blur-3xl [animation-delay:2s]" />
      <div className="absolute left-1/2 top-1/3 -z-10 h-64 w-64 animate-float rounded-full bg-sky-200/50 blur-3xl [animation-delay:4s]" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:gap-14 sm:px-8 lg:grid-cols-[1.25fr_0.75fr]">
        {/* Kolom Kiri: Teks & Tombol */}
        <div className="animate-fade-in">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-[11px] font-semibold text-emerald-700 sm:px-4 sm:text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {t.status}
          </span>

          <h1 className="mt-5 text-3xl font-black leading-[1.1] tracking-tight text-slate-900 sm:mt-6 sm:text-4xl lg:text-6xl">
            {t.greeting} <span className="text-gradient">Micoandar</span> 👋
          </h1>

          <div className="mt-4 flex h-7 items-center text-base font-semibold text-slate-700 sm:mt-5 sm:h-8 sm:text-lg lg:text-xl">
            <span key={roleIndex} className="animate-fade-in">
              {roles[roleIndex]}
            </span>
          </div>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-500 sm:mt-6 sm:text-base lg:text-lg">
            {profile.summary[lang]}
          </p>

          {/* Tombol */}
          <div className="mt-7 grid grid-cols-2 gap-2.5 sm:mt-8 sm:flex sm:flex-wrap sm:items-center sm:gap-2.5">
            <a
              href="#proyek"
              className="group inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-brand-600 to-violet-600 px-4 py-3 text-xs font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:-translate-y-0.5 hover:shadow-brand-500/35 sm:py-2.5 sm:text-[13px]"
            >
              {t.viewProjects}
              <ArrowRight size={14} className="transition group-hover:translate-x-0.5" />
            </a>

            <a
              href={profile.cvPath}
              download
              className="inline-flex items-center justify-center gap-1.5 rounded-full border border-brand-200 bg-brand-50 px-4 py-3 text-xs font-semibold text-brand-700 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-300 hover:bg-brand-100 sm:py-2.5 sm:text-[13px]"
            >
              <Download size={14} />
              {t.downloadCv}
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-3 text-xs font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 sm:py-2.5 sm:text-[13px]"
            >
              <Github size={14} />
              GitHub
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-3 text-xs font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 sm:py-2.5 sm:text-[13px]"
            >
              <Linkedin size={14} />
              LinkedIn
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500 sm:mt-8 sm:gap-x-6 sm:text-sm">
            <span className="inline-flex items-center gap-2">
              <MapPin size={14} className="text-brand-500" />
              {profile.location[lang]}
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 transition hover:text-brand-600"
            >
              <Mail size={14} className="text-brand-500" />
              {profile.email}
            </a>
          </div>
        </div>

        {/* Kolom Kanan: Card Premium dengan Animasi Frame */}
        <div className="animate-fade-in [animation-delay:200ms]">
          {/* Group wrapper: Akan trigger animasi saat disentuh (mobile) atau hover (desktop) */}
          <div className="group relative mx-auto max-w-sm transition-all duration-500 hover:-translate-y-1.5 active:scale-[0.98]">
            
            {/* Glow di belakang card */}
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-brand-400/20 via-violet-400/20 to-sky-400/20 opacity-70 blur-2xl transition duration-500 group-hover:opacity-100 group-active:opacity-100" />
            
            {/* Animasi Frame (Rotating Gradient) - Muncul saat disentuh/hover */}
            <div className="absolute -inset-[2px] overflow-hidden rounded-[2.1rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-active:opacity-100">
              <div className="absolute -inset-[200%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_270deg,#8b5cf6_360deg)]" />
            </div>

            {/* Card Utama */}
            <div className="relative rounded-[2rem] border border-white/60 bg-white/90 p-7 shadow-2xl shadow-brand-500/10 backdrop-blur-2xl sm:p-8">
              
              {/* Foto Profil & Info */}
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  {/* Ring gradient luar */}
                  <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-brand-500 via-violet-500 to-sky-400 opacity-80 blur-sm" />
                  
                  {/* Foto */}
                  <div className="relative h-28 w-28 overflow-hidden rounded-full bg-slate-100 ring-4 ring-white sm:h-32 sm:w-32">
                    {!imgError ? (
                      <Image
                        src="/images/foto-profil.jpg"
                        alt={profile.name}
                        fill
                        sizes="(max-width: 640px) 112px, 128px"
                        className="object-cover"
                        priority
                        onError={() => setImgError(true)}
                      />
                    ) : (
                      <div className="grid h-full w-full place-items-center text-3xl font-black text-slate-300">
                        {profile.initials}
                      </div>
                    )}
                  </div>
                  
                  {/* Badge Online */}
                  <span className="absolute bottom-1 right-1 grid h-7 w-7 place-items-center rounded-full bg-white shadow-lg sm:bottom-2 sm:right-2">
                    <span className="h-4 w-4 rounded-full bg-emerald-500 ring-2 ring-white" />
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black tracking-tight text-slate-900 sm:text-2xl">
                  {profile.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-brand-600">
                  {profile.role[lang]}
                </p>
              </div>

              {/* Garis Pemisah */}
              <div className="my-7 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

              {/* Statistik */}
              <div className="flex w-full items-center justify-between divide-x divide-slate-200/60 rounded-2xl border border-slate-100 bg-white/60 py-3 shadow-sm">
                {profile.stats.map((stat) => (
                  <div key={stat.label.id} className="flex w-full flex-col items-center px-2">
                    <p className="text-lg font-black text-slate-900 sm:text-xl">
                      {stat.value}
                      <span className="ml-0.5 text-xs font-semibold text-slate-400">
                        {stat.suffix}
                      </span>
                    </p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      {stat.label[lang]}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tag Keahlian */}
              <div className="mt-7 flex flex-wrap justify-center gap-2">
                {["Full Stack", "AI / CV", "Android"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-brand-100 bg-white px-3.5 py-1.5 text-xs font-semibold text-brand-700 shadow-sm transition hover:border-brand-300 hover:bg-brand-50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}