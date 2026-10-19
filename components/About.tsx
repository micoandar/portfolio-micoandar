"use client";

import { Sparkles, Quote } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/Reveal";
import { profile } from "@/data/profile";
import { translations } from "@/data/translations";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { lang } = useLanguage();
  const t = translations[lang].about;

  return (
    <Section id="tentang" eyebrow={t.eyebrow} title={t.title}>
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        
        {/* KOTAK KIRI (Putih) */}
        <Reveal>
          <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            {/* Hiasan Tanda Kutip Transparan di Belakang */}
            <Quote className="absolute -right-4 -top-4 h-32 w-32 text-slate-100/70" />
            
            <div className="relative z-10 space-y-5">
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                {t.desc}
              </p>
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                {t.closing}
              </p>
            </div>

            {/* Soft Skills ditaruh di paling bawah */}
            <div className="relative z-10 mt-8 flex flex-wrap gap-2">
              {profile.softSkills[lang].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-brand-100 bg-brand-50 px-4 py-1.5 text-xs font-semibold text-brand-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* KOTAK KANAN (Hitam) */}
        <Reveal delay={120}>
          <div className="h-full rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white shadow-xl shadow-slate-900/20 sm:p-8">
            <Sparkles className="text-brand-300" size={22} />
            <h3 className="mt-5 text-lg font-bold">{t.interestingTitle}</h3>
            
            <ul className="mt-5 space-y-4 text-sm leading-relaxed text-slate-300">
              {t.services.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                  <div className="flex flex-col gap-1">
                    <span className="font-bold text-white">{item.title}</span>
                    <span className="text-slate-300">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

      </div>
    </Section>
  );
}