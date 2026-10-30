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
    // Memantau section kontak
    const contactSection = document.getElementById("kontak");
    if (!contactSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Muncul jika area kontak mulai terlihat, atau jika kita sudah scroll melewatinya
        setVisible(entry.isIntersecting || entry.boundingClientRect.top < 0);
      },
      { threshold: 0.1 } // Terpicu saat 10% area kontak terlihat
    );

    observer.observe(contactSection);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isDark = resolvedTheme === "dark";

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
        
        // --- UKURAN DIPERKECIL ---
        size={44} // Sebelumnya 56, sekarang diperkecil agar lebih ringkas
        
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

        // --- WARNA TETAP (LIGHT/DARK MODE) ---
        padColor={isDark ? "#f5f5f5" : "#18181b"}
        iconColor={isDark ? "#18181b" : "#ffffff"}
        accentColor={isDark ? "#f5f5f5" : "#18181b"}
        wellColor={isDark ? "#27272a" : "#e4e4e7"}
        bandColor={isDark ? "#52525b" : "#a1a1aa"}
      />
    </div>
  );
}