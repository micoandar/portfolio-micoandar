"use client";

import { ArrowUpRight, Github, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/Reveal";
import { profile } from "@/data/profile";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "next-themes";
import BorderGlow from "@/components/BorderGlow";

export default function Contact() {
  const { lang } = useLanguage();
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  // PERBAIKAN: Variabel 'contacts' didefinisikan dengan lengkap di sini
  const contacts = [
    {
      label: "WhatsApp",
      value: profile.phone,
      href: profile.whatsapp,
      icon: MessageCircle,
      accent: "from-green-500 to-emerald-600",
    },
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: Mail,
      accent: "from-brand-500 to-violet-600",
    },
    {
      label: "GitHub",
      value: profile.githubHandle,
      href: profile.github,
      icon: Github,
      accent: "from-slate-700 to-slate-900 dark:from-slate-600 dark:to-slate-800",
    },
    {
      label: "LinkedIn",
      value: profile.linkedinHandle,
      href: profile.linkedin,
      icon: Linkedin,
      accent: "from-sky-500 to-blue-600",
    },
  ];

  return (
    <Section id="kontak" title="Contact">
      <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <div className="flex h-full flex-col justify-between rounded-3xl bg-gradient-to-br from-brand-600 via-violet-600 to-indigo-700 p-6 text-white shadow-xl shadow-brand-500/20 dark:from-brand-800 dark:via-violet-900 dark:to-indigo-950 sm:p-8">
            <div>
              <h3 className="text-xl font-bold leading-snug sm:text-2xl">
                {lang === "id" ? "Punya proyek atau posisi yang cocok?" : "Have a project or a fitting role?"}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/80">
                {lang === "id" 
                  ? "Kirim pesan dan saya akan merespons secepat mungkin. Saya siap berkontribusi secara maksimal untuk tim Anda."
                  : "Send a message and I'll respond as soon as possible. I'm ready to contribute fully to your team."}
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-2xl bg-white/10 px-5 py-4 backdrop-blur transition hover:bg-white/20"
              >
                <span className="inline-flex items-center gap-3 text-sm font-semibold">
                  <MessageCircle size={17} />
                  {lang === "id" ? "Chat via WhatsApp" : "Chat on WhatsApp"}
                </span>
                <ArrowUpRight size={17} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <p className="inline-flex items-center gap-2 px-1 text-xs text-white/70">
                <MapPin size={13} />
                {profile.location[lang]}
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {/* Mapping contacts di sini */}
          {contacts.map((c, i) => (
            <Reveal key={c.label} delay={i * 80}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex h-full flex-col justify-between"
              >
                <BorderGlow
                  backgroundColor={isDark ? "#0f172a" : "#ffffff"}
                  borderRadius={24}
                  className="h-full w-full"
                  glowColor="140 80 60"
                  colors={['#34d399', '#3b82f6', '#818cf8']}
                >
                  <div className="flex h-full flex-col justify-between p-6 rounded-[24px]">
                    <div className={`grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br ${c.accent} text-white shadow-md`}>
                      <c.icon size={18} />
                    </div>
                    <div className="mt-6">
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
                        {c.label}
                      </p>
                      <p className="mt-1 break-all text-sm font-semibold text-slate-800 transition group-hover:text-brand-700 dark:text-slate-200 dark:group-hover:text-brand-400">
                        {c.value}
                      </p>
                    </div>
                  </div>
                </BorderGlow>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}