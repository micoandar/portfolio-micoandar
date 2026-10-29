"use client";

import Section from "@/components/ui/Section";
import InteractivePhotoScene from "@/components/InteractivePhotoScene";
import { translations } from "@/data/translations";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { lang } = useLanguage();
  const t = translations[lang].about;

  return (
    <Section id="tentang" eyebrow={t.eyebrow} title={t.title}>
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        
        {/* KIRI: Interactive 3D Scene */}
        <div className="relative w-full flex justify-center">
          <InteractivePhotoScene 
            intensity={25}       // Seberapa jauh pergeseran parallax
            rotationLimit={6}    // Batas rotasi agar wajah tidak terlalu miring
            springStiffness={120} // Kekakuan pegas
            springDamping={25}    // Redaman agar tidak memantul berlebihan
            scaleDepth={1.02}     // Skala gambar depan
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