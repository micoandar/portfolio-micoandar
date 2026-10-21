"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
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

  // --- LOGIKA FISIKA LANYARD ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Jarak awal dari ujung atas tali ke lubang kartu adalah 40px
  const initialLength = 40;

  // Menghitung panjang tali secara presisi menggunakan rumus Phytagoras
  const stringHeight = useTransform([x, y], ([latestX, latestY]) => {
    const dx = latestX as number;
    const dy = (latestY as number) + initialLength;
    return Math.sqrt(dx * dx + dy * dy);
  });

  // Menghitung sudut kemiringan tali secara presisi
  const stringRotate = useTransform([x, y], ([latestX, latestY]) => {
    const dx = latestX as number;
    const dy = (latestY as number) + initialLength;
    return Math.atan2(dx, dy) * (180 / Math.PI);
  });

  return (
    <section
      id="beranda"
      className="relative isolate flex min-h-screen items-center overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20"
    >
      {/* Background Ornaments */}
      <div className="absolute inset-0 -z-10 grid-pattern [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="absolute -left-24 top-10 -z-10 h-72 w-72 animate-float rounded-full bg-brand-300/40 blur-3xl dark:bg-brand-900/30" />
      <div className="absolute -right-16 bottom-0 -z-10 h-80 w-80 animate-float rounded-full bg-violet-300/40 blur-3xl dark:bg-violet-900/20 [animation-delay:2s]" />
      <div className="absolute left-1/2 top-1/3 -z-10 h-64 w-64 animate-float rounded-full bg-sky-200/50 blur-3xl dark:bg-sky-900/20 [animation-delay:4s]" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:gap-14 sm:px-8 lg:grid-cols-[1.25fr_0.75fr]">
        
        {/* Kolom Kiri: Teks & Tombol */}
        <div className="animate-fade-in">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-[11px] font-semibold text-emerald-700 dark:border-emerald-800/50 dark:bg-emerald-900/30 dark:text-emerald-400 sm:px-4 sm:text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {t.status}
          </span>

          <h1 className="mt-5 text-3xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white sm:mt-6 sm:text-4xl lg:text-6xl">
            {t.greeting} <span className="text-gradient">Micoandar</span> 👋
          </h1>

          <div className="mt-4 flex h-7 items-center text-base font-semibold text-slate-700 dark:text-slate-200 sm:mt-5 sm:h-8 sm:text-lg lg:text-xl">
            <span key={roleIndex} className="animate-fade-in">
              {roles[roleIndex]}
            </span>
          </div>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-500 dark:text-slate-400 sm:mt-6 sm:text-base lg:text-lg">
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
              className="inline-flex items-center justify-center gap-1.5 rounded-full border border-brand-200 bg-brand-50 px-4 py-3 text-xs font-semibold text-brand-700 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-300 hover:bg-brand-100 dark:border-brand-800/50 dark:bg-brand-900/30 dark:text-brand-300 dark:hover:bg-brand-900/50 sm:py-2.5 sm:text-[13px]"
            >
              <Download size={14} />
              {t.downloadCv}
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-3 text-xs font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-700 sm:py-2.5 sm:text-[13px]"
            >
              <Github size={14} />
              GitHub
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-3 text-xs font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-700 sm:py-2.5 sm:text-[13px]"
            >
              <Linkedin size={14} />
              LinkedIn
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500 dark:text-slate-400 sm:mt-8 sm:gap-x-6 sm:text-sm">
            <span className="inline-flex items-center gap-2">
              <MapPin size={14} className="text-brand-500 dark:text-brand-400" />
              {profile.location[lang]}
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 transition hover:text-brand-600 dark:hover:text-brand-400"
            >
              <Mail size={14} className="text-brand-500 dark:text-brand-400" />
              {profile.email}
            </a>
          </div>
        </div>

        {/* Kolom Kanan: Lanyard Card */}
        <div className="relative flex justify-center pt-10 sm:pt-0">
          
          {/* WRAPPER ANIMASI GOYANG (PENDULUM) */}
          <motion.div
            animate={{ rotate: [-1.5, 1.5, -1.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "top center" }}
            className="relative flex w-full flex-col items-center"
          >
            
            {/* TALI LANYARD DINAMIS */}
            <motion.div
              style={{
                height: stringHeight,
                rotate: stringRotate,
                transformOrigin: "top center",
              }}
              // left-1/2 dan -ml-1 memastikan tali tepat berada di tengah
              className="absolute top-0 left-1/2 z-0 -ml-1 w-2 rounded-b-md bg-gradient-to-b from-slate-800 to-brand-600 shadow-lg dark:from-slate-700 dark:to-brand-500"
            >
              {/* Klip Logam di Ujung Tali */}
              <div className="absolute -bottom-3 left-1/2 h-4 w-4 -translate-x-1/2 rounded-sm border-2 border-slate-400 bg-slate-200 dark:border-slate-500 dark:bg-slate-400" />
            </motion.div>

            {/* KARTU PROFIL YANG BISA DITARIK */}
            <motion.div
              drag
              dragSnapToOrigin={true}
              dragElastic={0.8}
              dragConstraints={{ top: -20, bottom: 200, left: -150, right: 150 }}
              dragTransition={{ bounceStiffness: 300, bounceDamping: 15 }}
              // Rotasi dan posisi kartu disinkronkan dengan tali
              style={{ x, y, rotate: stringRotate, transformOrigin: "top center" }}
              whileDrag={{ scale: 1.02 }}
              className="relative z-10 mt-[40px] w-full max-w-sm cursor-grab active:cursor-grabbing"
            >
              {/* Lubang Klip di Kartu */}
              <div className="absolute -top-3 left-1/2 z-20 h-6 w-12 -translate-x-1/2 rounded-full border-4 border-white bg-slate-900 shadow-inner dark:border-slate-800 dark:bg-slate-950" />

              <div className="rounded-[2rem] border border-white/60 bg-white/90 p-7 shadow-2xl shadow-brand-500/20 backdrop-blur-2xl dark:border-slate-700/60 dark:bg-slate-900/90 sm:p-8">
                {/* Foto Profil & Info */}
                <div className="flex flex-col items-center text-center">
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
                        <div className="grid h-full w-full place-items-center text-3xl font-black text-slate-300 dark:text-slate-600">
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
                  <p className="mt-1 text-sm font-medium text-brand-600 dark:text-brand-400">
                    {profile.role[lang]}
                  </p>
                </div>

                <div className="my-7 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-slate-700" />

                {/* Statistik */}
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

                {/* Tag Keahlian */}
                <div className="mt-7 flex flex-wrap justify-center gap-2">
                  {["Full Stack", "AI / CV", "Android"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-brand-100 bg-white px-3.5 py-1.5 text-xs font-semibold text-brand-700 shadow-sm transition hover:border-brand-300 hover:bg-brand-50 dark:border-brand-800/50 dark:bg-slate-800 dark:text-brand-300 dark:hover:border-brand-700 dark:hover:bg-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
            
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}