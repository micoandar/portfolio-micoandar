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
    // Title dihapus agar langsung masuk ke konten seperti referensi
    <Section id="tentang">
      <div className="grid gap-12 lg:grid-cols-3 lg:items-center lg:gap-8">
        
        {/* ================= KIRI: Teks Sapaan ================= */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left z-10">
          <h1 className="text-5xl font-black leading-[1.1] tracking-tight sm:text-6xl">
            <span className="text-blue-500">Hi, I'm</span> <br />
            <span className="text-slate-900 dark:text-white">
              Micoandar <br className="hidden lg:block"/> 
              Justinus Marbun
            </span>
          </h1>
          
          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-1 hover:bg-blue-600 hover:shadow-blue-500/50"
          >
            <Mail size={18} />
            Hubungi Saya
          </a>
        </div>

        {/* ================= TENGAH: Foto Interaktif ================= */}
        <div className="relative flex justify-center w-full max-w-[350px] mx-auto lg:max-w-none z-0">
          {/* Lingkaran Glow di belakang foto (seperti referensi) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square rounded-full border border-slate-200/50 dark:border-slate-800/50 bg-gradient-to-br from-blue-500/10 to-transparent blur-sm -z-10" />
          
          <HoverImageSwap
            imageA="/images/My-photo.png"
            imageB="/images/jbwkz.png"
            objectFit="contain" // Gunakan contain agar seluruh badan terlihat
            radius={140}
            className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden"
          />
        </div>

        {/* ================= KANAN: Deskripsi & Tombol ================= */}
        <div className="flex flex-col justify-center gap-6 z-10">
          {/* Paragraf 1 (Dari Data) */}
          <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
            {t.desc}
          </p>
          
          {/* Paragraf 2 (Tambahan narasi seperti referensi) */}
          <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
            Dengan pengalaman dalam pengembangan web full-stack dan integrasi sistem cerdas, saya mengubah ide menjadi pengalaman digital yang fungsional, responsif, dan berdampak.
          </p>

          <div className="mt-2">
            <a
              href="#proyek"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-500/30 bg-blue-500/10 px-6 py-3 text-sm font-semibold text-blue-600 transition-all hover:-translate-y-1 hover:bg-blue-500/20 dark:text-blue-400"
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