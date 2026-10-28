"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, ChevronDown } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
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

  // --- LOGIKA 3D TILT ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const tiltConfig = { stiffness: 100, damping: 30 };
  const smoothMouseX = useSpring(mouseX, tiltConfig);
  const smoothMouseY = useSpring(mouseY, tiltConfig);

  const rotateX = useTransform(smoothMouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(smoothMouseX, [-300, 300], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="beranda"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#050914] text-white"
    >
      {/* Background Bintang & Glow Biru (TIDAK DIUBAH) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[50%] w-full max-w-4xl bg-blue-600/20 blur-[120px] rounded-t-full" />
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent bg-[size:20px_20px] bg-repeat" />
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_center,white_1px,transparent_0)] [background-size:100px_100px]" />
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_center,white_1px,transparent_0)] [background-size:150px_150px] [background-position:50px_50px]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        
        {/* Kolom Kiri */}
        <div className="animate-fade-in z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-slate-300 shadow-sm backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {t.status}
          </span>

          <h1 className="mt-8 text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {t.greeting} <br />
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Micoandar.
            </span>
          </h1>

          <div className="mt-6 flex h-8 items-center text-lg font-semibold text-slate-300 sm:text-2xl">
            <span key={roleIndex} className="animate-fade-in">
              {roles[roleIndex]}
            </span>
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            {profile.summary[lang]}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#proyek"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 shadow-xl transition-all hover:-translate-y-1 hover:shadow-white/20"
            >
              {t.viewProjects}
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </a>

            <div className="relative" ref={cvRef}>
              <button
                type="button"
                onClick={() => setIsCvOpen(!isCvOpen)}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white shadow-sm backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white/10"
              >
                <Download size={16} />
                {t.downloadCv}
                <ChevronDown size={14} className={`transition-transform duration-200 ${isCvOpen ? "rotate-180" : ""}`} />
              </button>

              {isCvOpen && (
                <div className="absolute left-0 top-full mt-2 w-56 overflow-hidden rounded-xl border border-white/10 bg-[#0a0f1c] p-1.5 shadow-2xl backdrop-blur-xl z-50 animate-in fade-in slide-in-from-top-2">
                  <a
                    href={profile.cvFullStack}
                    download
                    onClick={() => setIsCvOpen(false)}
                    className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
                  >
                    <Download size={14} className="text-slate-500" />
                    {t.cvFullStack}
                  </a>
                  <a
                    href={profile.cvSoftware}
                    download
                    onClick={() => setIsCvOpen(false)}
                    className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
                  >
                    <Download size={14} className="text-slate-500" />
                    {t.cvSoftware}
                  </a>
                </div>
              )}
            </div>

            <div className="flex items-center gap-3 ml-2">
              <a href={profile.github} target="_blank" rel="noreferrer" className="text-slate-500 transition hover:text-white">
                <Github size={24} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-slate-500 transition hover:text-blue-400">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500">
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} className="text-blue-500" />
              {profile.location[lang]}
            </span>
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 transition hover:text-blue-400">
              <Mail size={16} className="text-blue-500" />
              {profile.email}
            </a>
          </div>
        </div>

        {/* Kolom Kanan: Lanyard 3D Container */}
        <div 
          className="relative flex justify-center pt-10 sm:pt-0 perspective-[1000px]"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="w-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [-1, 1, -1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="w-full flex justify-center"
            >
              <Lanyard />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}