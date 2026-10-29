"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";
import { cn } from "@/lib/utils";

export default function BackToTop() {
  const { lang } = useLanguage();
  const t = translations[lang].backToTop;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setVisible(y > 400 && y > max * 0.4); // Muncul saat scroll mendekati bawah
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={t}
      className={cn(
        // PERBAIKAN: bottom dinaikkan menjadi 20/24 di mobile agar tidak terpotong
        "fixed bottom-20 right-4 z-[100] grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-brand-600 to-violet-600 text-white shadow-xl shadow-brand-500/30 ring-1 ring-white/40 transition-all duration-300 hover:-translate-y-1 sm:bottom-10 sm:right-6",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      )}
    >
      <ArrowUp size={20} />
    </button>
  );
}