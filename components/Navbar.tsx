"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Languages, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { profile } from "@/data/profile";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { lang, toggle: toggleLang } = useLanguage();
  const { theme, setTheme } = useTheme();

  const links = [
    { href: "#tentang", label: "About" },
    { href: "#proyek", label: "Projects" },
    { href: "#keahlian", label: "Skills" },
    { href: "#pendidikan", label: "Education" },
    { href: "#kontak", label: "Contact" },
  ];

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      {/* Navbar Kapsul (Floating Pill) */}
      <nav className="flex pointer-events-auto items-center gap-2 rounded-full border border-slate-200/50 bg-white/80 px-4 py-2 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-black/60 sm:px-6 sm:py-3">
        
        {/* Logo MJ */}
        <Link href="#beranda" className="mr-2 hidden sm:flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-500 text-xs font-black text-white">
            {profile.initials}
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div className="mx-2 hidden h-6 w-px bg-slate-300 dark:bg-slate-700 md:block" />

        {/* Toggles & CTA */}
        <div className="flex items-center gap-2">
          {mounted && (
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle Theme"
              className="grid h-9 w-9 place-items-center rounded-full text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}

          <button
            type="button"
            onClick={toggleLang}
            aria-label="Toggle language"
            className="inline-flex h-9 items-center gap-1.5 rounded-full px-3 text-xs font-bold uppercase tracking-wide text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10"
          >
            <Languages size={16} />
            {lang === "id" ? "ID" : "EN"}
          </button>

          <a
            href={`mailto:${profile.email}`}
            className="hidden rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 lg:inline-block"
          >
            Get in touch
          </a>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="grid h-9 w-9 place-items-center rounded-full text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10 md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="pointer-events-auto absolute top-full left-4 right-4 mt-2 overflow-hidden rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/95 md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
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