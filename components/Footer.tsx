import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
        <div className="text-center sm:text-left">
          <p className="text-sm font-bold text-slate-900">
            {profile.name}
            <span className="text-brand-600">.</span>
          </p>
          <p className="mt-1 text-xs text-slate-400">
            © {new Date().getFullYear()} — Dibuat dengan Next.js & Tailwind CSS
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
              className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-500 transition hover:-translate-y-0.5 hover:border-brand-200 hover:bg-brand-50 hover:text-brand-600"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}