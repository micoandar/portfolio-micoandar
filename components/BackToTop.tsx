"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";
import { cn } from "@/lib/utils";
import SlingButton from "./SlingButton"; // Import komponen baru

export default function BackToTop() {
  const { lang } = useLanguage();
  const t = translations[lang].backToTop;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      // Muncul saat scroll melewati 400px dan mendekati bawah
      setVisible(y > 400 && y > max * 0.2); 
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
        // Posisi fixed di kanan bawah (sedikit lebih besar dari tombol biasa agar muat animasi tariknya)
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
        size={52}
        strokeWidth={3}
        // Kustomisasi warna tema (Light/Dark)
        padColor="#4f46e5" // Warna utama tombol (brand-600)
        iconColor="#ffffff" // Warna ikon
        accentColor="#38bdf8" // Warna efek tarikan (sky-400)
        wellColor="#1e1b4b" // Warna lubang (brand-900)
        bandColor="#312e81" // Warna karet (brand-800)
        
        // Konfigurasi fisika katapel
        armAt={40} // Tarikan minimal untuk memicu tembakan (pixel)
        maxPull={120} // Seberapa jauh bisa ditarik
        launchSpeed={2000} // Kecepatan luncur
        recoil={0.4} // Efek memantul saat dilepas
        flight={140} // Jarak terbang partikel
        particles={12} // Jumlah partikel
        spread={45} // Sudut sebaran partikel (derajat)
        axis="vertical" // Hanya bisa ditarik ke atas/bawah (lebih natural untuk Back to Top)
        tapSends // Tetap bisa diklik langsung tanpa ditarik
      >
        {/* Kita timpa ikon bawaan Hugeicons dengan Lucide agar konsisten dengan project */}
        <ArrowUp size={22} strokeWidth={3} />
      </SlingButton>
    </div>
  );
}