"use client";

import { useEffect, useState, useRef } from "react";
import { Menu, X, Languages, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/contexts/LanguageContext";
import GooeyNav from "@/components/GooeyNav";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const isClicking = useRef(false);

  const { lang, toggle: toggleLang } = useLanguage();
  const { resolvedTheme, setTheme } = useTheme();

  const links = [
    { label: "Home", href: "#beranda" },
    { label: "About", href: "#tentang" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#kontak" },
  ];

  const sectionIds = ["beranda", "tentang", "portfolio", "kontak"];

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => {
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
      setActiveIndex(sectionIds.indexOf(currentId));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (index: number) => {
    setActiveIndex(index);
    isClicking.current = true;
    setTimeout(() => { isClicking.current = false; }, 1000);
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none will-change-transform">
      <div className="flex pointer-events-auto items-center justify-between gap-3">

        {/* GooeyNav desktop */}
        <div className="hidden md:flex items-center rounded-full bg-white/50 md:backdrop-blur-md p-1.5 dark:bg-black/50 shadow-lg border border-white/10">
          <GooeyNav
            items={links}
            activeIndex={activeIndex}
            onChange={handleNavClick}
            theme={resolvedTheme === "dark" ? "dark" : "light"}
            color={resolvedTheme === "dark" ? "#ffffff" : "#000000"}
            size="sm"
            frame={false}
            particleCount={12}
            animationTime={500}
          />
        </div>

        {/* Toggles & mobile menu button */}
        <div className="flex items-center gap-2 rounded-full bg-white/90 md:bg-white/50 md:backdrop-blur-md px-3 py-2 dark:bg-slate-900/90 md:dark:bg-black/50 shadow-lg border border-white/10">
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

      {open && (
        <div className="pointer-events-auto absolute top-full left-4 right-4 mt-2 overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl dark:border-slate-800 dark:bg-slate-950 md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link, index) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => {
                    setOpen(false);
                    handleNavClick(index);
                  }}
                  className={`block rounded-xl px-4 py-3 text-sm font-medium transition ${
                    activeIndex === index
                      ? "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white"
                      : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}