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
      <div className="absolute inset-0 -z-10 grid-pattern [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="absolute -left-24 top-10 -z-10 h-72 w-72 animate-float rounded-full bg-brand-300/40 blur-3xl" />
      <div className="absolute -right-16 bottom-0 -z-10 h-80 w-80 animate-float rounded-full bg-violet-300/40 blur-3xl [animation-delay:2s]" />
      <div className="absolute left-1/2 top-1/3 -z-10 h-64 w-64 animate-float rounded-full bg-sky-200/50 blur-3xl [animation-delay:4s]" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:gap-14 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
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

          {/* Tombol — satu baris sejajar, wrap otomatis di mobile */}
          <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8">
            <a
              href="#proyek"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-brand-500/25 transition hover:-translate-y-0.5 hover:shadow-brand-500/35"
            >
              {t.viewProjects}
              <ArrowRight size={15} className="transition group-hover:translate-x-1" />
            </a>

            <a
              href={profile.cvPath}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-700 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-300 hover:bg-brand-100"
            >
              <Download size={15} />
              {t.downloadCv}
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300"
            >
              <Github size={15} />
              GitHub
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300"
            >
              <Linkedin size={15} />
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

        {/* Card */}
        <div className="animate-fade-in [animation-delay:200ms]">
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand-400/30 via-violet-400/20 to-sky-400/30 blur-2xl" />
            <div className="relative rounded-[1.75rem] border border-white/70 bg-white/80 p-6 shadow-2xl shadow-slate-900/5 backdrop-blur-xl sm:p-7">
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-brand-500 via-violet-500 to-sky-400 opacity-70 blur-md" />
                  <div className="relative h-28 w-28 overflow-hidden rounded-full bg-gradient-to-br from-brand-500 to-violet-600 shadow-xl shadow-brand-500/30 ring-4 ring-white sm:h-32 sm:w-32">
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
                      <div className="grid h-full w-full place-items-center text-3xl font-black text-white">
                        {profile.initials}
                      </div>
                    )}
                  </div>
                  <span className="absolute bottom-1.5 right-1.5 grid h-6 w-6 place-items-center rounded-full bg-white shadow-md sm:bottom-2 sm:right-2">
                    <span className="h-3.5 w-3.5 rounded-full bg-emerald-500 ring-2 ring-white" />
                  </span>
                </div>

                <p className="mt-4 text-base font-bold text-slate-900 sm:mt-5 sm:text-lg">
                  {profile.name}
                </p>
                <p className="mt-0.5 text-xs text-slate-500 sm:text-sm">
                  {profile.role[lang]}
                </p>
              </div>

              <div className="my-5 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent sm:my-6" />

              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {profile.stats.map((stat) => (
                  <div
                    key={stat.label.id}
                    className="rounded-2xl bg-slate-50 px-1.5 py-3 text-center sm:px-2 sm:py-3.5"
                  >
                    <p className="text-lg font-black text-slate-900 sm:text-xl">
                      {stat.value}
                      <span className="text-[10px] font-semibold text-slate-400 sm:text-xs">
                        {stat.suffix}
                      </span>
                    </p>
                    <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wide text-slate-400 sm:text-[11px]">
                      {stat.label[lang]}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap justify-center gap-1.5 sm:mt-6 sm:gap-2">
                {["Full Stack", "AI / CV", "Android"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-brand-50 px-3 py-1.5 text-[11px] font-semibold text-brand-700 sm:text-xs"
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