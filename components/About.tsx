"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Mail, Sparkles } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Section from "@/components/ui/Section";
import StarBorder from "@/components/StarBorder";
import { profile } from "@/data/profile";
import { translations } from "@/data/translations";
import { useLanguage } from "@/contexts/LanguageContext";
import { scrollToSection } from "@/lib/utils";
import LightRays from "./LightRays";
import TextType from "./TextType"; 
import SplitText from "./SplitText"; 

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
  
  const [isHolding, setIsHolding] = useState(false);

  // --- FUNGSI LIHAT PROYEK ---
  const handleViewProjects = () => {
    window.dispatchEvent(new CustomEvent("switch-portfolio-tab", { detail: 0 }));
    scrollToSection("portfolio");
  };

  // --- LOGIKA SIMULASI KLIK OTOMATIS PADA CAHAYA (MOBILE) ---
  useEffect(() => {
    if (window.innerWidth >= 768) return; 

    const interval = setInterval(() => {
      const el = wrapRef.current;
      if (!el) return;

      const lightRays = el.querySelector('.light-rays');
      if (!lightRays) return;

      const rect = lightRays.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      const event = new PointerEvent('pointerdown', {
        clientX: x,
        clientY: y,
        bubbles: true,
        cancelable: true,
      });
      
      (event as any).isSimulated = true;
      
      window.dispatchEvent(event);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // --- LOGIKA DESKTOP: TEKAN & TAHAN ---
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (window.innerWidth < 768) return; 
    e.currentTarget.setPointerCapture(e.pointerId);
    setIsHolding(true); 
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.5; 
      videoRef.current.play().catch(() => {}); 
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (window.innerWidth < 768) return; 
    e.currentTarget.releasePointerCapture(e.pointerId);
    setIsHolding(false); 
    if (videoRef.current) {
      videoRef.current.playbackRate = 1; 
    }
  };

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

        {/* ================= KIRI: Teks Sapaan (Diperbaiki) ================= */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left z-10 relative">
          
          <div className="hidden lg:block absolute -top-10 -left-10 w-48 h-48 bg-blue-500/10 dark:bg-indigo-500/10 blur-[50px] rounded-full pointer-events-none -z-10" />

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 mb-5">
            <Sparkles size={14} className="text-blue-500 dark:text-indigo-400" />
            <span className="text-[10px] font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400">
              Welcome
            </span>
          </div>

          <div className="flex flex-col gap-1">
            {/* SplitText untuk "Hi, I'm" */}
            <SplitText
              tag="h1"
              text="Hi, I'm"
              className="text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl lg:text-5xl xl:text-6xl text-blue-500 dark:text-indigo-400 drop-shadow-sm cursor-default"
              effect="rise"
              splitType="chars"
              delay={30}
              duration={1}
              textAlign="left"
              trigger="view"
              hoverEffect="lift"
            />
            
            {/* SplitText untuk NAMA (Dipecah jadi 3 baris agar tidak terpotong) */}
            <div className="flex flex-col">
              <SplitText
                tag="h1"
                text="Micoandar"
                className="text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl lg:text-5xl xl:text-6xl bg-gradient-to-br from-slate-900 via-slate-700 to-slate-500 dark:from-white dark:via-slate-200 dark:to-slate-400 bg-clip-text text-transparent cursor-default"
                effect="rise"
                splitType="chars"
                delay={30}
                duration={1}
                textAlign="left"
                trigger="view"
                hoverEffect="lift"
              />
              <SplitText
                tag="h1"
                text="Justinus"
                className="text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl lg:text-5xl xl:text-6xl bg-gradient-to-br from-slate-900 via-slate-700 to-slate-500 dark:from-white dark:via-slate-200 dark:to-slate-400 bg-clip-text text-transparent cursor-default"
                effect="rise"
                splitType="chars"
                delay={30}
                duration={1}
                textAlign="left"
                trigger="view"
                hoverEffect="lift"
              />
              <SplitText
                tag="h1"
                text="Marbun"
                className="text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl lg:text-5xl xl:text-6xl bg-gradient-to-br from-slate-900 via-slate-700 to-slate-500 dark:from-white dark:via-slate-200 dark:to-slate-400 bg-clip-text text-transparent cursor-default"
                effect="rise"
                splitType="chars"
                delay={30}
                duration={1}
                textAlign="left"
                trigger="view"
                hoverEffect="lift"
              />
            </div>
          </div>

          <div className="mt-10">
            <StarBorder
              as="a"
              href={`mailto:${profile.email}`}
              className="rounded-xl px-8 py-4 text-sm font-semibold shadow-lg shadow-blue-500/10 dark:shadow-indigo-500/10"
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

        {/* ================= TENGAH: Video 3D ================= */}
        <div
          ref={wrapRef}
          className="relative w-full mx-auto z-20 flex justify-center py-6 sm:py-10"
          style={{ perspective: "1200px" }}
          onPointerDown={(e) => {
            if (window.innerWidth < 768) e.stopPropagation();
          }}
        >
          <div
            className="absolute -inset-6 rounded-[3rem] pointer-events-none sm:animate-glow-pulse motion-reduce:animate-none -z-10"
            style={{
              background: isDark
                ? "radial-gradient(ellipse at center, rgba(79,70,229,0.6) 0%, rgba(139,92,246,0.4) 40%, rgba(14,165,233,0.15) 65%, transparent 80%)"
                : "radial-gradient(ellipse at center, rgba(99,102,241,0.5) 0%, rgba(139,92,246,0.3) 40%, rgba(14,165,233,0.15) 65%, transparent 80%)",
            }}
          />

          <div className="hidden sm:block absolute -bottom-8 w-[80%] h-8 bg-black/40 dark:bg-black/60 blur-xl rounded-[100%] animate-float motion-reduce:animate-none" />

          <div className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-full sm:animate-float motion-reduce:animate-none">
            
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX: rotateX,
                rotateY: rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative w-full will-change-transform"
            >
              
              <div 
                style={{ transform: "translateZ(30px)" }}
                className="relative w-full h-[320px] sm:h-[420px] lg:h-[550px] rounded-[2rem] p-[3px] 
                  bg-gradient-to-br from-[#1a1a2e] to-[#0f0f13]
                  shadow-[0_0_50px_-10px_rgba(99,102,241,0.6)] dark:shadow-[0_0_60px_-8px_rgba(139,92,246,0.8)]
                  border border-indigo-500/30 dark:border-violet-500/30"
              >
                
                <div className="hidden sm:block absolute inset-0 rounded-[2rem] pointer-events-none z-20 overflow-hidden">
                  <div 
                    className="absolute inset-0 rounded-[2rem] opacity-90"
                    style={{
                      padding: '2px',
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                  >
                    <div className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_280deg,rgba(167,139,250,0.8)_340deg,rgba(255,255,255,1)_360deg)]" />
                  </div>
                </div>

                <div className="relative h-full w-full overflow-hidden rounded-[calc(2rem-3px)] bg-[#020617]">
                  
                  <LightRays 
                    raysOrigin="top-center"
                    raysColor={isDark ? "#818cf8" : "#4f46e5"} 
                    raysSpeed={1.2}
                    lightSpread={0.6}
                    rayLength={2.5}
                    followMouse={true}
                    mouseInfluence={0.1}
                    noiseAmount={0.05}
                    distortion={0.05}
                    className="z-0" 
                  />

                  <div 
                    onPointerDown={handlePointerDown}
                    onPointerUp={handlePointerUp}
                    onPointerLeave={handlePointerUp}
                    onPointerCancel={handlePointerUp}
                    className={`absolute inset-0 z-10 overflow-hidden touch-none pointer-events-none md:pointer-events-auto ${
                      isHolding ? "cursor-grabbing" : "md:cursor-grab"
                    }`}
                  >
                    {loadVideo && (
                      <div className="h-full w-full mix-blend-screen opacity-90">
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
                  </div>

                  {!isVideoReady && (
                    <div className="absolute inset-0 z-10 bg-transparent flex items-center justify-center pointer-events-none">
                        <div className="w-32 h-32 rounded-full bg-indigo-500/10 blur-3xl animate-pulse" />
                    </div>
                  )}

                  <motion.div
                    className="absolute inset-0 pointer-events-none z-30 opacity-0 dark:opacity-30 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background: useTransform(
                        [glareX, glareY],
                        ([gx, gy]) => `radial-gradient(circle at ${gx} ${gy}, rgba(255,255,255,0.4) 0%, transparent 60%)`
                      ),
                    }}
                  />
                  
                  <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </div>

            </motion.div>
          </div>
        </div>

        {/* ================= KANAN: Deskripsi ================= */}
        <div className="flex flex-col justify-center gap-6 z-10 relative w-full">
          
          <div className="relative p-6 sm:p-7 min-h-[180px] flex items-center rounded-3xl bg-white/40 dark:bg-[#121217]/60 backdrop-blur-xl border border-slate-200/60 dark:border-white/10 shadow-xl shadow-slate-200/20 dark:shadow-black/40">
            
            <div className="absolute top-6 bottom-6 left-0 w-[3px] rounded-r-full bg-gradient-to-b from-blue-500 via-indigo-500 to-transparent opacity-80" />
            
            <TextType
              as="p"
              text={t.desc}
              typingSpeed={15} 
              initialDelay={600} 
              pauseDuration={9999999} 
              loop={false} 
              showCursor={true}
              cursorStyle="bar"
              cursorBlinkDuration={0.6}
              startOnVisible={true}
              className="block text-sm sm:text-base leading-relaxed tracking-normal text-slate-600 dark:text-slate-300 pl-4 w-full"
              style={{ 
                fontFamily: "Inter, system-ui, sans-serif", 
                whiteSpace: "normal" 
              }}
            />
          </div>

          <div className="mt-2 pl-2">
            <StarBorder
              as="button"
              onClick={handleViewProjects}
              className="rounded-xl px-8 py-4 text-sm font-semibold hover:scale-105 transition-transform duration-300"
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