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
      setVisible(y > 400 && y > max * 0.55);
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
        "fixed bottom-4 right-4 z-40 grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand-600 to-violet-600 text-white shadow-xl shadow-brand-500/30 ring-1 ring-white/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-brand-500/50 sm:bottom-6 sm:right-6 sm:h-12 sm:w-12",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      )}
    >
      <ArrowUp size={16} className="sm:h-[18px] sm:w-[18px]" />
    </button>
  );
}