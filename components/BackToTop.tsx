"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";
import { cn } from "@/lib/utils";
import SlingButton from "./SlingButton";

export default function BackToTop() {
  const { lang } = useLanguage();
  const t = translations[lang].backToTop;
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  // Mencegah hydration mismatch pada tema
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setVisible(y > 400 && y > max * 0.1); 
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isDark = resolvedTheme === "dark";

  // Jangan render apapun sebelum komponen ter-mount untuk mengecek tema
  if (!mounted) return null;

  return (
    <div
      className={cn(
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
        
        // --- WARNA KONDISIONAL (LIGHT / DARK) ---
        // Di Light Mode: Tombol Hitam, Ikon Putih, Lubang Light Gray
        // Di Dark Mode: Kembali ke gaya asli React Bits
        padColor={isDark ? "#f5f5f5" : "#18181b"}
        iconColor={isDark ? "#18181b" : "#ffffff"}
        accentColor={isDark ? "#f5f5f5" : "#18181b"}
        wellColor={isDark ? "#27272a" : "#e4e4e7"}
        bandColor={isDark ? "#52525b" : "#a1a1aa"}
        
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