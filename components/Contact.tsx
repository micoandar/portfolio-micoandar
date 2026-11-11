"use client";

import { ArrowUpRight, Github, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Reveal from "@/components/Reveal";
import { profile } from "@/data/profile";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { lang } = useLanguage();

  const contacts = [
    {
      label: "WhatsApp",
      value: profile.phone,
      href: profile.whatsapp,
      icon: MessageCircle,
      accent: "from-green-500 to-emerald-600",
      glow: "group-hover:shadow-green-500/20",
    },
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: Mail,
      accent: "from-brand-500 to-violet-600",
      glow: "group-hover:shadow-brand-500/20",
    },
    {
      label: "GitHub",
      value: profile.githubHandle,
      href: profile.github,
      icon: Github,
      accent: "from-slate-700 to-slate-900 dark:from-slate-600 dark:to-slate-800",
      glow: "group-hover:shadow-slate-700/20",
    },
    {
      label: "LinkedIn",
      value: profile.linkedinHandle,
      href: profile.linkedin,
      icon: Linkedin,
      accent: "from-sky-500 to-blue-600",
      glow: "group-hover:shadow-sky-500/20",
    },
  ];

  return (
    <Section id="kontak" title="Contact" className="relative">
      
      {/* Efek Pendaran di Belakang */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-500/10 dark:bg-brand-900/20 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        
        {/* KARTU KIRI (Besar) */}
        <Reveal>
          <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-violet-600 to-indigo-800 p-8 text-white shadow-2xl shadow-brand-500/20 ring-1 ring-white/20 dark:from-brand-800 dark:via-violet-900 dark:to-indigo-950 sm:p-10">
            
            {/* Pattern Ornamen di dalam Kartu */}
            <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-500/30 blur-3xl rounded-full pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-2xl font-bold leading-tight sm:text-3xl drop-shadow-sm">
                {lang === "id" ? "Mari bangun sesuatu bersama!" : "Let's build something together!"}
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-white/80 sm:text-base">
                {lang === "id" 
                  ? "Terbuka untuk kesempatan kerja, magang, maupun kolaborasi proyek di bidang Software Development. Saya siap menyambut peluang dan tantangan baru."
                  : "Open to job opportunities, internships, and project collaborations in Software Development. I'm ready to embrace new opportunities and challenges."}
              </p>
            </div>

            <div className="relative z-10 mt-10 space-y-4">
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="group relative flex items-center justify-between overflow-hidden rounded-2xl bg-white/10 px-5 py-4 backdrop-blur-md border border-white/10 transition-all duration-300 hover:bg-white/20 hover:scale-[1.02] hover:shadow-lg hover:shadow-black/20"
              >
                {/* Efek Kilau (Shine) saat Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none" />
                
                <span className="inline-flex items-center gap-3 text-sm font-semibold">
                  <div className="grid h-8 w-8 place-items-center rounded-full bg-white/20">
                    <MessageCircle size={16} />
                  </div>
                  {lang === "id" ? "Chat via WhatsApp" : "Chat on WhatsApp"}
                </span>
                <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              
              <p className="inline-flex items-center gap-2 px-2 text-xs font-medium text-white/70">
                <MapPin size={14} />
                {profile.location[lang]}
              </p>
            </div>
          </div>
        </Reveal>

        {/* KARTU KANAN (Grid 2x2 Premium) */}
        <div className="grid gap-4 sm:grid-cols-2">
          {contacts.map((c, i) => (
            <Reveal key={c.label} delay={i * 80} className="h-full">
              
              {/* Container luar untuk efek Gradient Border */}
              <div className={`group relative h-full rounded-3xl bg-slate-200/60 p-[1px] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${c.glow} dark:bg-slate-800/60`}>
                
                {/* Background Gradient yang menyala saat hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${c.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

                {/* Kartu Dalam (Kaca) */}
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="relative flex h-full flex-col justify-between overflow-hidden rounded-[calc(1.5rem-1px)] bg-white/90 p-6 backdrop-blur-xl transition-colors duration-300 dark:bg-[#0f0f13]/90"
                >
                  {/* Ikon Panah Muncul saat Hover */}
                  <div className="absolute right-6 top-6 opacity-0 -translate-x-2 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0">
                    <ArrowUpRight size={20} className="text-slate-400 dark:text-slate-500" />
                  </div>

                  <div className="relative z-10">
                    {/* Ikon dengan efek Glow di belakangnya */}
                    <div className="relative inline-flex">
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${c.accent} opacity-30 blur-lg transition-opacity duration-300 group-hover:opacity-60`} />
                      <div className={`relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${c.accent} text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}>
                        <c.icon size={20} />
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 mt-8">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 transition-colors duration-300 group-hover:text-slate-600 dark:group-hover:text-slate-300">
                      {c.label}
                    </p>
                    <p className="mt-1.5 break-all text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {c.value}
                    </p>
                  </div>
                </a>
              </div>

            </Reveal>
          ))}
        </div>

      </div>
    </Section>
  );
}