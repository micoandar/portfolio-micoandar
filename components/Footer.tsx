"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      {/* PERBAIKAN: pb-24 di HP agar tidak tertutup tombol BackToTop */}
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 pb-24 pt-10 sm:flex-row sm:px-8 sm:pb-10">
        <div className="text-center sm:text-left">
          <p className="text-sm font-bold text-slate-900 dark:text-white">
            {profile.name}
            <span className="text-brand-600 dark:text-brand-400">.</span>
          </p>
          <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
            © {new Date().getFullYear()} MicDev. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {[
            { href: profile.github, icon: Github, label: "GitHub" },
            { href: profile.linkedin, icon: Linkedin, label: "LinkedIn" },
            { href: `mailto:${profile.email}`, icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-500 transition hover:-translate-y-0.5 hover:border-brand-200 hover:bg-brand-50 hover:text-brand-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-brand-800/50 dark:hover:bg-brand-900/30 dark:hover:text-brand-400"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}