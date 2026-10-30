"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { useTheme } from "next-themes";
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
      {/* Grid disesuaikan: Kiri (1fr), Tengah (1.5fr), Kanan (1fr) */}
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

        {/* TENGAH: Video 3D Looping */}
        <div className="relative flex justify-center items-center w-full mx-auto z-20">
          {/* Glow di belakang video */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square rounded-full border border-white/10 bg-gradient-to-br from-blue-500/20 to-transparent blur-2xl -z-10" />
          
          <div className="relative w-full h-[450px] lg:h-[550px] rounded-[24px] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-[#0f172a]">
            <video
              src="/images/3D.webm"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              Browser Anda tidak mendukung tag video.
            </video>
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