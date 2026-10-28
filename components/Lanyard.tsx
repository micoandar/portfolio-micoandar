"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";

export default function Lanyard() {
  const [isDesktop, setIsDesktop] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Deteksi device untuk mouse parallax (hanya desktop)
  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsDesktop(mediaQuery.matches);
  }, []);

  // --- LOGIKA MOUSE PARALLAX ---
  const mouseX = useMotionValue(0);
  const springConfig = { stiffness: 100, damping: 20 };
  const smoothMouseX = useSpring(mouseX, springConfig);

  // Batasan parallax: Translasi maksimal ±15px, Rotasi maksimal ±3°
  const parallaxX = useTransform(smoothMouseX, [-1000, 1000], [-15, 15]);
  const parallaxRotate = useTransform(smoothMouseX, [-1000, 1000], [-3, 3]);

  useEffect(() => {
    if (!isDesktop || shouldReduceMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Hitung jarak mouse dari tengah layar
      const centerX = window.innerWidth / 2;
      const offset = e.clientX - centerX;
      mouseX.set(offset);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isDesktop, shouldReduceMotion, mouseX]);

  // --- LOGIKA IDLE SWING (Goyangan Halus) ---
  // Jika reduced motion aktif, jangan goyang
  const idleSwing = shouldReduceMotion 
    ? {} 
    : { rotate: [-1.5, 1.5, -1.5] };

  return (
    <div className="relative flex w-full justify-center overflow-x-hidden pt-10 sm:pt-0">
      
      {/* WRAPPER UTAMA (Titik Gantung di Atas) */}
      <motion.div
        style={{
          x: isDesktop && !shouldReduceMotion ? parallaxX : 0,
          rotate: isDesktop && !shouldReduceMotion ? parallaxRotate : 0,
          transformOrigin: "top center",
        }}
        className="flex flex-col items-center will-change-transform"
      >
        
        {/* 1. ANIMASI MASUK (Entrance) */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.2 }}
          className="flex flex-col items-center w-full"
        >
          
          {/* 2. ANIMASI GOYANG (Idle Swing) */}
          <motion.div
            animate={idleSwing}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            style={{ transformOrigin: "top center" }}
            className="flex flex-col items-center w-full"
          >
            
            {/* TALI LANYARD (HTML/CSS) */}
            <div className="relative flex flex-col items-center z-10">
              {/* Tali Kain */}
              <div className="w-3 h-24 bg-gradient-to-b from-slate-800 to-slate-900 shadow-sm relative">
                {/* Tekstur Jahitan Halus */}
                <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,#fff_2px,#fff_4px)]" />
              </div>
              
              {/* Pengait Logam (Clip) */}
              <div className="w-8 h-7 -mt-2 bg-gradient-to-b from-slate-300 via-slate-100 to-slate-400 rounded-sm border border-slate-500 shadow-md flex justify-center items-center relative z-20">
                {/* Lubang pengait */}
                <div className="w-4 h-2 bg-slate-700/50 rounded-full shadow-inner" />
              </div>
            </div>

            {/* ID CARD (GAMBAR ASLI) */}
            <div className="mt-1 relative z-0">
              {/* Frame/Border Kartu (CSS) */}
              <div className="rounded-xl border-4 border-slate-800 bg-white shadow-2xl overflow-hidden">
                {/* 
                  Menggunakan tag img murni sesuai permintaan.
                  width: 100%, height: auto, object-fit: contain.
                */}
                <img
                  src="/id-card.png"
                  alt="ID Card Portfolio"
                  className="w-full max-w-[280px] h-auto object-contain block"
                />
              </div>
            </div>

          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}