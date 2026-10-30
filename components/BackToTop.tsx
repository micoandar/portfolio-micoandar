"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";
import { cn } from "@/lib/utils";
import SlingButton from "./SlingButton"; // Pastikan path ini benar

export default function BackToTop() {
  const { lang } = useLanguage();
  const t = translations[lang].backToTop;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      // Muncul saat scroll melewati 400px
      setVisible(y > 400 && y > max * 0.1); 
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={cn(
        // Posisi fixed di kanan bawah
        "fixed bottom-20 right-4 z-[100] flex items-center justify-center sm:bottom-10 sm:right-6",
        "transition-all duration-500 ease-out",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-10 opacity-0"
      )}
    >
      <SlingButton
        onSend={scrollToTop}
        ariaLabel={t}
        
        // --- WARNA & EFEK SAMA PERSIS DENGAN CONTOH ---
        padColor="#f5f5f5"
        iconColor="#18181b"
        accentColor="#f5f5f5"
        wellColor="#27272a"
        bandColor="#52525b"
        size={56}
        strokeWidth={3}
        armAt={48}
        maxPull={160}
        launchSpeed={2600}
        recoil={0.2}
        flight={120}
        particles={14}
        spread={60}
        axis="any"
        tapSends
      />
    </div>
  );
}