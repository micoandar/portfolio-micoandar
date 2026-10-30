"use client";

import { useEffect, useState, useRef } from "react";
import { Menu, X, Languages, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/contexts/LanguageContext";
import GooeyNav from "@/components/GooeyNav";
import { scrollToSection } from "@/lib/utils"; // Import fungsi baru

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const isClicking = useRef(false);
  const rafRef = useRef<number | null>(null);

  const { lang, toggle: toggleLang } = useLanguage();
  const { resolvedTheme, setTheme } = useTheme();

  // Ubah href menjadi id (agar GooeyNav merender tombol, bukan link #)
  const links = [
    { label: "Home", id: "beranda" },
    { label: "About", id: "tentang" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Contact", id: "kontak" },
  ];

  const sectionIds = ["beranda", "tentang", "portfolio", "kontak"];

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const compute = () => {
      rafRef.current = null;
      if (isClicking.current) return;
      const scrollPosition = window.scrollY + 250;
      let currentId = "beranda";
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && scrollPosition >= section.offsetTop) {
          currentId = sectionIds[i];
          break;
        }
      }
      const idx = sectionIds.indexOf(currentId);
      setActiveIndex((prev) => (prev === idx ? prev : idx));
    };

    const handleScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(compute);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    compute();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleNavClick = (index: number) => {
    setActiveIndex(index);
    isClicking.current = true;
    scrollToSection(links[index].id); // Panggil smooth scroll
    setTimeout(() => { isClicking.current = false; }, 1000);
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="absolute md:fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="flex pointer-events-auto items-center justify-between gap-3">

        {/* GooeyNav — Desktop only */}
        <div className="hidden md:flex items-center rounded-full bg-white/50 backdrop-blur-md p-1.5 dark:bg-black/50 shadow-lg border border-white/10 min-w-[300px] justify-center">
          {mounted && (
            <GooeyNav
              key={resolvedTheme}
              items={links} // Hanya passing label (tanpa href) agar jadi button
              activeIndex={activeIndex}
              onChange={handleNavClick}
              theme={resolvedTheme === "dark" ? "dark" : "light"}
              color={resolvedTheme === "dark" ? "#ffffff" : "#000000"}
              size="sm"
              frame={false}
              particleCount={12}
              animationTime={500}
            />
          )}
        </div>

        {/* Toggles */}
        <div className="flex items-center gap-2 rounded-full bg-white px-3 py-2 dark:bg-slate-900 md:bg-white/50 md:backdrop-blur-md md:dark:bg-black/50 shadow-lg border border-white/10">
          {mounted && (
            <button
              type="button"
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="grid h-8 w-8 place-items-center rounded-full text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10"
            >
              {resolvedTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}

          <button
            type="button"
            onClick={toggleLang}
            className="inline-flex h-8 items-center gap-1.5 rounded-full px-2 text-xs font-bold uppercase tracking-wide text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10"
          >
            <Languages size={14} />
            {lang === "id" ? "ID" : "EN"}
          </button>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="grid h-8 w-8 place-items-center rounded-full text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10 md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="pointer-events-auto absolute top-full left-4 right-4 mt-2 overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl dark:border-slate-800 dark:bg-slate-950 md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link, index) => (
              <li key={link.id}>
                {/* Ubah <a> menjadi <button> agar URL tidak berubah */}
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    handleNavClick(index);
                  }}
                  className={`w-full text-left block rounded-xl px-4 py-3 text-sm font-medium transition ${
                    activeIndex === index
                      ? "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white"
                      : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}