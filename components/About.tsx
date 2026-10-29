"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Section from "@/components/ui/Section";
import { translations } from "@/data/translations";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { lang } = useLanguage();
  const t = translations[lang].about;

  // Setup Motion Value untuk mendeteksi posisi mouse
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring untuk membuat gerakan lebih halus (smooth)
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  // Rotasi 3D untuk container utama
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  // Parallax translasi untuk Background (jbwkz.png)
  const bgX = useTransform(mouseXSpring, [-0.5, 0.5], ["-15%", "15%"]);
  const bgY = useTransform(mouseYSpring, [-0.5, 0.5], ["-15%", "15%"]);

  // Parallax translasi untuk Foreground (My-photo.png)
  const fgX = useTransform(mouseXSpring, [-0.5, 0.5], ["15%", "-15%"]);
  const fgY = useTransform(mouseYSpring, [-0.5, 0.5], ["15%", "-15%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Normalisasi posisi mouse dari -0.5 sampai 0.5
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    // Kembalikan ke tengah saat mouse keluar
    x.set(0);
    y.set(0);
  };

  return (
    <Section id="tentang" eyebrow={t.eyebrow} title={t.title}>
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        
        {/* KIRI: Interactive 3D Parallax Portrait */}
        <div
          className="relative flex justify-center perspective-[1000px]"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            style={{ 
              rotateX, 
              rotateY, 
              transformStyle: "preserve-3d" 
            }}
            className="relative w-full max-w-[450px] aspect-[4/5] rounded-3xl"
          >
            {/* Layer Belakang (jbwkz.png) */}
            <motion.div
              style={{ 
                x: bgX, 
                y: bgY, 
                transform: "translateZ(-50px) scale(1.1)" 
              }}
              className="absolute inset-0 overflow-hidden rounded-3xl bg-slate-200 dark:bg-slate-800 shadow-xl"
            >
              <Image
                src="/images/jbwkz.png"
                alt="Background Layer"
                fill
                className="object-cover opacity-90"
              />
            </motion.div>

            {/* Layer Depan (My-photo.png) */}
            <motion.div
              style={{ 
                x: fgX, 
                y: fgY, 
                transform: "translateZ(40px)" 
              }}
              className="absolute inset-0 flex items-end justify-center"
            >
              <Image
                src="/images/My-photo.png"
                alt="Micoandar Portrait"
                width={500}
                height={600}
                className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-3xl"
              />
            </motion.div>
          </motion.div>
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