"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Section from "@/components/ui/Section";
import StarBorder from "@/components/StarBorder";
import { profile } from "@/data/profile";
import { translations } from "@/data/translations";
import { useLanguage } from "@/contexts/LanguageContext";
import { scrollToSection } from "@/lib/utils";
import LightRays from "./LightRays";

export default function About() {
  const { lang } = useLanguage();
  const t = translations[lang].about;
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const [loadVideo, setLoadVideo] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // --- LOGIKA 3D TILT ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || window.innerWidth < 768) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

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
      { rootMargin: "1000px 0px" }
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

        {/* TENGAH: Video 3D */}
        <div
          ref={wrapRef}
          className="relative w-full mx-auto z-20 flex justify-center py-6 sm:py-10"
          style={{ perspective: "1200px" }}
        >
          {/* Glow Berdenyut di belakang */}
          <div
            className="absolute -inset-4 rounded-[2.5rem] pointer-events-none sm:animate-glow-pulse motion-reduce:animate-none -z-10"
            style={{
              background: isDark
                ? "radial-gradient(ellipse at center, rgba(79,70,229,0.5) 0%, rgba(139,92,246,0.3) 40%, rgba(14,165,233,0.12) 65%, transparent 80%)"
                : "radial-gradient(ellipse at center, rgba(99,102,241,0.4) 0%, rgba(139,92,246,0.25) 40%, rgba(14,165,233,0.12) 65%, transparent 80%)",
            }}
          />

          {/* Bayangan Melayang */}
          <div className="hidden sm:block absolute -bottom-8 w-[80%] h-8 bg-black/40 dark:bg-black/60 blur-xl rounded-[100%] animate-float motion-reduce:animate-none" />

          {/* Kartu 3D */}
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX: rotateX,
              rotateY: rotateY,
              transformStyle: "preserve-3d",
            }}
            className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-full sm:animate-float motion-reduce:animate-none will-change-transform"
          >
            
            <div 
              style={{ transform: "translateZ(30px)" }}
              className="relative w-full h-[320px] sm:h-[420px] lg:h-[550px] rounded-[2rem] border border-white/20 bg-slate-900/40 p-2 shadow-2xl backdrop-blur-sm dark:border-white/10"
            >
              
              <div className="hidden sm:block absolute inset-0 rounded-[2rem] border-2 border-indigo-400/40 dark:border-violet-400/40 pointer-events-none sm:animate-border-pulse motion-reduce:animate-none" />

              <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] bg-[#020617]">
                
                {/* Light Rays (Warna disamakan dengan tema brand) */}
                <LightRays 
                  raysOrigin="top-center"
                  raysColor={isDark ? "#818cf8" : "#4f46e5"} // Violet di Dark Mode, Indigo di Light Mode
                  raysSpeed={1.2}
                  lightSpread={0.6}
                  rayLength={2.5}
                  followMouse={true}
                  mouseInfluence={0.1}
                  noiseAmount={0.05}
                  distortion={0.05}
                  className="z-0" 
                />

                {/* Video (Menggunakan mix-blend-screen agar menyatu dengan cahaya) */}
                {loadVideo && (
                  <div className="relative z-10 h-full w-full mix-blend-screen opacity-90">
                    <video
                      ref={videoRef}
                      src="/api/video/3d"
                      autoPlay={!reducedMotion}
                      loop
                      muted
                      playsInline
                      preload="auto" 
                      disablePictureInPicture
                      controlsList="nodownload noremoteplayback noplaybackrate"
                      onContextMenu={(e) => e.preventDefault()}
                      onDragStart={(e) => e.preventDefault()}
                      draggable={false}
                      onCanPlay={() => setIsVideoReady(true)}
                      className={`h-full w-full object-cover select-none pointer-events-none transition-opacity duration-300 ${
                        isVideoReady ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      Browser Anda tidak mendukung tag video.
                    </video>
                  </div>
                )}

                {/* Placeholder */}
                {!isVideoReady && (
                  <div className="absolute inset-0 z-10 bg-transparent flex items-center justify-center pointer-events-none">
                     <div className="w-32 h-32 rounded-full bg-indigo-500/10 blur-3xl animate-pulse" />
                  </div>
                )}

                {/* Pantulan Cahaya Dinamis (Glare) */}
                <motion.div
                  className="absolute inset-0 pointer-events-none z-30 opacity-0 dark:opacity-30 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: useTransform(
                      [glareX, glareY],
                      ([gx, gy]) => `radial-gradient(circle at ${gx} ${gy}, rgba(255,255,255,0.4) 0%, transparent 60%)`
                    ),
                  }}
                />
                
                {/* Overlay Gelap Bawah */}
                <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* KANAN */}
        <div className="flex flex-col justify-center gap-6 z-10">
          <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
            {t.desc}
          </p>

          <div className="mt-2">
            <StarBorder
              as="button"
              onClick={() => scrollToSection("proyek")}
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