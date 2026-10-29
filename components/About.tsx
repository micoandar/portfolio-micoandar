"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import Section from "@/components/ui/Section";
import HoverImageSwap from "@/components/HoverImageSwap";
import { profile } from "@/data/profile";
import { translations } from "@/data/translations";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { lang } = useLanguage();
  const t = translations[lang].about;

  return (
    <Section id="tentang" title="About Me">
      {/* Grid diubah agar kolom tengah lebih lebar (1.2fr) dibanding kolom teks (1fr) */}
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr_1fr] lg:items-center lg:gap-8 -mt-8 lg:-mt-12">
        
        {/* KIRI: Teks Sapaan */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left z-10">
          <h1 className="text-5xl font-black leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-blue-500">Hi, I'm</span> <br />
            <span className="text-slate-900 dark:text-white">
              Micoandar <br /> 
              Justinus <br />
              Marbun
            </span>
          </h1>
          
          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-1 hover:bg-blue-600 hover:shadow-blue-500/50"
          >
            <Mail size={18} />
            Hubungi Saya
          </a>
        </div>

        {/* TENGAH: Foto Raksasa */}
        <div className="relative flex justify-center w-full mx-auto z-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square rounded-full border border-white/10 bg-gradient-to-br from-blue-500/20 to-transparent blur-2xl -z-10" />
          
          <HoverImageSwap
            imageA="/images/My-photo.png"
            imageB="/images/jbwkz.png"
            objectFit="contain"
            radius={80} 
            imageScale={1.5} // <-- Diperbesar menjadi 150%
            className="relative w-full h-[600px] lg:h-[800px]" // <-- Tinggi ditambah
          />
        </div>

        {/* KANAN: Deskripsi & Tombol */}
        <div className="flex flex-col justify-center gap-6 z-10">
          <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
            {t.desc}
          </p>

          <div className="mt-2">
            <a
              href="#proyek"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-500/30 bg-blue-500/5 px-8 py-4 text-sm font-semibold text-blue-600 transition-all hover:-translate-y-1 hover:bg-blue-500/10 dark:text-blue-400"
            >
              <ArrowUpRight size={18} />
              Lihat Proyek
            </a>
          </div>
        </div>

      </div>
    </Section>
  );
}