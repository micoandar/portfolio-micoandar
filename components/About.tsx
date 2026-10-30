"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion"; // <-- Import framer-motion
import Section from "@/components/ui/Section";
import StarBorder from "@/components/StarBorder";
import { profile } from "@/data/profile";
import { translations } from "@/data/translations";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { lang } = useLanguage();
  const t = translations[lang].about;
  const { resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  return (
    <Section id="tentang" title="About Me">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr_1fr] lg:items-center lg:gap-8 pt-8">
        
        {/* KIRI: Teks Sapaan */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left z-10">
          <h1 className="text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl lg:text-5xl xl:text-6xl">
            <span className="text-blue-500">Hi, I'm</span> <br />
            <span className="text-slate-900 dark:text-white">
              Micoandar <br /> 
              Justinus <br />
              Marbun
            </span>
          </h1>
          
          <div className="mt-8">
            <StarBorder
              as="a"
              href={`mailto:${profile.email}`}
              className="rounded-xl px-8 py-4 text-sm font-semibold"
              backgroundColor={isDark ? "#1e1b4b" : "#eef2ff"}
              textColor={isDark ? "#a5b4fc" : "#4338ca"}
              color={isDark ? "#818cf8" : "#4f46e5"}
              theme={isDark ? "dark" : "light"}
              radius={12}
              glow={0.8}
              sparkle={true}
            >
              <Mail size={18} />
              Hubungi Saya
            </StarBorder>
          </div>
        </div>

        {/* TENGAH: Video 3D Premium dengan Background Bergerak */}
        <div className="relative flex justify-center items-center w-full mx-auto z-20 group">
          
          {/* BACKGROUND BERGERAK (Rotating & Pulsing Glow) */}
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.15, 1],
            }}
            transition={{
              rotate: { duration: 15, repeat: Infinity, ease: "linear" },
              scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute -inset-8 rounded-[3rem] bg-[conic-gradient(from_0deg,rgba(59,130,246,0.5)_0deg,rgba(139,92,246,0.5)_120deg,rgba(56,189,248,0.5)_240deg,rgba(59,130,246,0.5)_360deg)] opacity-60 blur-3xl transition-opacity duration-700 group-hover:opacity-100 dark:opacity-40 dark:group-hover:opacity-70"
          />
          
          {/* Bingkai Kaca (Glassmorphism Frame) */}
          <div className="relative w-full h-[450px] lg:h-[550px] rounded-[2rem] border border-white/20 bg-white/10 p-2 shadow-2xl backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-2 dark:border-slate-700/50 dark:bg-slate-900/40">
            
            {/* Video di dalamnya */}
            <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] bg-slate-900 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
              <video
                src="/images/3D.webm"
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              >
                Browser Anda tidak mendukung tag video.
              </video>
              
              {/* Overlay Gradasi Bawah */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/10 opacity-60 mix-blend-overlay" />
            </div>

            {/* Badge "3D Model" */}
            <div className="absolute right-4 top-4 z-30 flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-500" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                3D Model
              </span>
            </div>
          </div>
        </div>

        {/* KANAN: Deskripsi & Tombol Lihat Proyek */}
        <div className="flex flex-col justify-center gap-6 z-10">
          <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
            {t.desc}
          </p>

          <div className="mt-2">
            <StarBorder
              as="a"
              href="#proyek"
              className="rounded-xl px-8 py-4 text-sm font-semibold"
              backgroundColor={isDark ? "#0f172a" : "#ffffff"}
              textColor={isDark ? "#cbd5e1" : "#334155"}
              color={isDark ? "#38bdf8" : "#0ea5e9"}
              theme={isDark ? "dark" : "light"}
              radius={12}
              glow={0.8}
              sparkle={true}
            >
              <ArrowUpRight size={18} />
              Lihat Proyek
            </StarBorder>
          </div>
        </div>

      </div>
    </Section>
  );
}