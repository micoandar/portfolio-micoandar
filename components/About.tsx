"use client";

import Section from "@/components/ui/Section";
import HoverImageSwap from "@/components/HoverImageSwap";
import { translations } from "@/data/translations";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { lang } = useLanguage();
  const t = translations[lang].about;

  return (
    <Section id="tentang" eyebrow={t.eyebrow} title={t.title}>
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        
        {/* KIRI: Image Spotlight Swap */}
        <div className="relative w-full max-w-[450px] mx-auto">
          <HoverImageSwap
            imageA="/images/My-photo.png"
            imageB="/images/jbwkz.png"
            objectFit="cover"
            radius={140}     // Ukuran area sorotan
            scale={1.25}     // Diperbesar 25% agar menutupi pinggiran
            offsetX={-15}    // Digeser ke kiri 15px agar seimbang
            offsetY={0}      // Posisi vertikal tetap
            className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
          />
        </div>

        {/* KANAN: Deskripsi About Me */}
        <div className="flex flex-col justify-center gap-6 lg:pl-10">
          <div className="h-1 w-20 rounded-full bg-brand-500 mb-2" />
          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 sm:text-xl">
            {t.desc}
          </p>
        </div>

      </div>
    </Section>
  );
}