"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { useTheme } from "next-themes";
import Section from "@/components/ui/Section";
import StarBorder from "@/components/StarBorder";
import { profile } from "@/data/profile";
import { translations } from "@/data/translations";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { lang } = useLanguage();
  const t = translations[lang].about;
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [loadVideo, setLoadVideo] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Deteksi prefers-reduced-motion sekali
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  // Lazy-load video + pause saat tidak terlihat
  useEffect(() => {
    const el = wrapRef.current;
    const v = videoRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadVideo(true);
          if (v && !reducedMotion) v.play().catch(() => {});
        } else {
          v?.pause();
        }
      },
      { rootMargin: "300px 0px" }
    );
    io.observe(el);

    const onVis = () => {
      if (document.hidden) v?.pause();
      else if (v && !reducedMotion) v.play().catch(() => {});
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [reducedMotion, loadVideo]);

  return (
    <Section id="tentang" title="About Me">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr_1fr] lg:items-center lg:gap-8 pt-8">

        {/* KIRI */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left z-10">
          <h1 className="text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl lg:text-5xl xl:text-6xl">
            <span className="text-blue-500">Hi, I'm</span> <br />
            <span className="text-slate-900 dark:text-white">
              Micoandar <br />
              Justinus <br />
              Marbun
            </span>
          </h1>

          <div className="mt-8">
            <StarBorder
              as="a"
              href={`mailto:${profile.email}`}
              className="rounded-xl px-8 py-4 text-sm font-semibold"
              backgroundColor={isDark ? "#1e1b4b" : "#eef2ff"}
              textColor={isDark ? "#a5b4fc" : "#4338ca"}
              color={isDark ? "#818cf8" : "#4f46e5"}
              theme={isDark ? "dark" : "light"}
              radius={12}
              glow={0.8}
              sparkle={true}
            >
              <Mail size={18} />
              Hubungi Saya
            </StarBorder>
          </div>
        </div>

        {/* TENGAH: video 3D dengan animasi melayang */}
        <div
          ref={wrapRef}
          className="relative flex justify-center items-center w-full mx-auto z-20"
        >
          {/* Glow statis */}
          <div
            className="absolute -inset-4 rounded-[2.5rem] pointer-events-none"
            style={{
              background: isDark
                ? "radial-gradient(ellipse at center, rgba(79,70,229,0.28) 0%, rgba(139,92,246,0.16) 40%, rgba(14,165,233,0.08) 65%, transparent 80%)"
                : "radial-gradient(ellipse at center, rgba(99,102,241,0.22) 0%, rgba(139,92,246,0.14) 40%, rgba(14,165,233,0.08) 65%, transparent 80%)",
            }}
          />

          {/* WRAPPER: animasi melayang naik-turun */}
          <div
            className="w-full animate-float motion-reduce:animate-none"
            style={{ willChange: "transform" }}
          >
            {/* Frame */}
            <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[550px] rounded-[2rem] border border-white/20 bg-white/10 p-2 shadow-lg dark:border-slate-700/50 dark:bg-slate-900/40">
              <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] bg-slate-900">
                {loadVideo ? (
                  <video
                    ref={videoRef}
                    src="/images/3D.webm"
                    poster="/images/My-photo.png"
                    autoPlay={!reducedMotion}
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    disablePictureInPicture
                    className="h-full w-full object-cover"
                    style={{ transform: "translateZ(0)" }}
                  >
                    Browser Anda tidak mendukung tag video.
                  </video>
                ) : (
                  <img
                    src="/images/My-photo.png"
                    alt="Preview"
                    className="h-full w-full object-cover opacity-60"
                  />
                )}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* KANAN */}
        <div className="flex flex-col justify-center gap-6 z-10">
          <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
            {t.desc}
          </p>

          <div className="mt-2">
            <StarBorder
              as="a"
              href="#proyek"
              className="rounded-xl px-8 py-4 text-sm font-semibold"
              backgroundColor={isDark ? "#0f172a" : "#ffffff"}
              textColor={isDark ? "#cbd5e1" : "#334155"}
              color={isDark ? "#38bdf8" : "#0ea5e9"}
              theme={isDark ? "dark" : "light"}
              radius={12}
              glow={0.8}
              sparkle={true}
            >
              <ArrowUpRight size={18} />
              Lihat Proyek
            </StarBorder>
          </div>
        </div>

      </div>
    </Section>
  );
}