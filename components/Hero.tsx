"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform, useSpring, animate } from "framer-motion";
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

  // --- LOGIKA FISIKA LANYARD (REALISTIS) ---
  const [isDragging, setIsDragging] = useState(false);
  
  // Posisi kartu (X dan Y)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring untuk pergerakan yang berat dan mulus
  const springConfig = { stiffness: 150, damping: 18, mass: 1 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const dragStart = useRef({ x: 0, y: 0 });

  // Batas maksimal tarikan tali (radius dalam pixel)
  const MAX_STRETCH = 220; 

  // Menghitung rotasi kartu (kartu tidak ikut miring penuh, ada efek gravitasi)
  const cardRotate = useTransform(smoothX, [-MAX_STRETCH, MAX_STRETCH], [-15, 15]);

  // Menghitung rotasi untuk bayangan/glow di belakang kartu
  const glowRotate = useTransform(smoothX, [-MAX_STRETCH, MAX_STRETCH], [-30, 30]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    dragStart.current = {
      x: e.clientX - x.get(),
      y: e.clientY - y.get(),
    };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    let newX = e.clientX - dragStart.current.x;
    let newY = e.clientY - dragStart.current.y;

    // Menghitung jarak tarikan dari titik tengah atas (0,0)
    const distance = Math.sqrt(newX * newX + newY * newY);

    // Membatasi tarikan agar talinya tidak putus (maksimal MAX_STRETCH)
    if (distance > MAX_STRETCH) {
      const angle = Math.atan2(newY, newX);
      newX = Math.cos(angle) * MAX_STRETCH;
      newY = Math.sin(angle) * MAX_STRETCH;
    }

    // Kartu tidak bisa ditarik ke atas melewati tali gantungan
    if (newY < 0) newY = 0;

    x.set(newX);
    y.set(newY);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
    
    // Pantulan kembali ke tengah yang sangat elegan
    animate(x, 0, { type: "spring", stiffness: 100, damping: 15, mass: 1.2 });
    animate(y, 0, { type: "spring", stiffness: 100, damping: 15, mass: 1.2 });
  };

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
          
          <motion.div
            animate={{ rotate: [-1, 1, -1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "top center" }}
            className="relative flex w-full max-w-sm flex-col items-center"
          >
            
            {/* TALI LANYARD (MENGGUNAKAN SVG AGAR MENYAMBUNG SEMPURNA) */}
            <svg className="absolute top-0 left-0 h-[400px] w-full overflow-visible pointer-events-none z-0">
              <motion.line
                x1="50%"
                y1="0"
                // SVG line ini akan otomatis terhubung ke lubang klip kartu
                x2={smoothX}
                y2={smoothY}
                stroke="url(#stringGradient)"
                strokeWidth="6"
                strokeLinecap="round"
                className="drop-shadow-md"
              />
              <defs>
                <linearGradient id="stringGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1e293b" />
                  <stop offset="100%" stopColor="#4f46e5" />
                </linearGradient>
              </defs>
            </svg>

            {/* Klip Logam Atas (Tempat Tali Menggantung) */}
            <div className="absolute top-0 left-1/2 -ml-[10px] z-10 h-5 w-5 rounded-sm border-2 border-slate-400 bg-slate-200 shadow-sm dark:border-slate-500 dark:bg-slate-400" />

            {/* KARTU PROFIL */}
            <motion.div
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              style={{
                x: smoothX,
                y: smoothY,
                rotate: cardRotate, // Menggunakan rotasi teredam
                touchAction: "none", 
              }}
              animate={{ scale: isDragging ? 1.02 : 1 }}
              transition={{ duration: 0.2 }}
              className="relative z-10 mt-[40px] w-full cursor-grab active:cursor-grabbing select-none"
            >
              
              {/* Glow di belakang kartu */}
              <motion.div 
                style={{ rotate: glowRotate }}
                className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-br from-brand-500/30 to-violet-500/30 blur-xl dark:from-brand-500/20 dark:to-violet-500/20" 
              />

              <div className="relative rounded-[2rem] border border-white/60 bg-white/90 p-7 shadow-2xl shadow-slate-900/10 backdrop-blur-2xl dark:border-slate-700/60 dark:bg-slate-900/90 sm:p-8">
                
                {/* Lubang Klip di Kartu */}
                <div className="absolute -top-3 left-1/2 z-20 h-6 w-12 -translate-x-1/2 rounded-full border-4 border-white bg-slate-900 shadow-inner dark:border-slate-800 dark:bg-slate-950" />

                {/* Foto Profil & Info */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative mt-2">
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