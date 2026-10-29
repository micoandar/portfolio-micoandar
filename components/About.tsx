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
    // ID "tentang" memastikan Navbar About berfungsi
    <Section id="tentang">
      <div className="grid gap-12 lg:grid-cols-3 lg:items-center lg:gap-8">
        
        {/* KIRI: Teks Sapaan */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left z-10">
          <h1 className="text-5xl font-black leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-brand-600 to-violet-600 bg-clip-text text-transparent dark:from-brand-400 dark:to-violet-400">
              Hi, I'm
            </span> <br />
            <span className="text-slate-900 dark:text-white">
              Micoandar <br className="hidden lg:block"/> 
              Justinus Marbun
            </span>
          </h1>
          
          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-all hover:-translate-y-1 hover:bg-brand-700 hover:shadow-brand-500/50"
          >
            <Mail size={18} />
            Hubungi Saya
          </a>
        </div>

        {/* TENGAH: Foto Interaktif (Diperbesar & Lebih Tinggi) */}
        <div className="relative flex justify-center w-full mx-auto z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square rounded-full border border-brand-200/50 dark:border-brand-800/50 bg-gradient-to-br from-brand-500/10 to-transparent blur-sm -z-10" />
          
          <HoverImageSwap
            imageA="/images/My-photo.png"
            imageB="/images/jbwkz.png"
            objectFit="contain"
            radius={80} 
            // Tinggi gambar dibuat spesifik agar lebih tinggi dari teks
            className="relative w-full max-w-[450px] h-[500px] lg:h-[650px] rounded-3xl overflow-hidden"
          />
        </div>

        {/* KANAN: Deskripsi */}
        <div className="flex flex-col justify-center gap-6 z-10">
          <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
            {t.desc}
          </p>

          <div className="mt-2">
            <a
              href="#proyek"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-brand-500/30 bg-brand-500/10 px-6 py-3 text-sm font-semibold text-brand-600 transition-all hover:-translate-y-1 hover:bg-brand-500/20 dark:text-brand-400"
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