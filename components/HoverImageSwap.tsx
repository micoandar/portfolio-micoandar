"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useMotionTemplate, useSpring } from "framer-motion";

interface HoverImageSwapProps {
  imageA: string;
  imageB: string;
  className?: string;
  objectFit?: "cover" | "contain";
  radius?: number; // Radius saat disentuh mouse
  idleRadius?: number; // Radius saat animasi otomatis (idle)
}

export default function HoverImageSwap({
  imageA,
  imageB,
  className = "relative w-full aspect-[4/5] rounded-3xl overflow-hidden",
  objectFit = "cover",
  radius = 80, // Diperkecil (sebelumnya 140) sesuai permintaan
  idleRadius = 160, // Ukuran sorot saat animasi idle
}: HoverImageSwapProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const maskRadius = useMotionValue(0);

  const springConfig = { stiffness: 100, damping: 25, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  const smoothRadius = useSpring(maskRadius, { stiffness: 150, damping: 25 });

  const maskImage = useMotionTemplate`
    radial-gradient(
      circle ${smoothRadius}px at ${smoothX}px ${smoothY}px, 
      black 75%, 
      transparent 100%
    )
  `;

  // State & Ref untuk Idle Timer
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null);
  const fadeOutTimerRef = useRef<NodeJS.Timeout | null>(null);

  const resetIdleTimer = () => {
    // Hapus timer yang sedang berjalan
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    if (fadeOutTimerRef.current) clearTimeout(fadeOutTimerRef.current);

    // Sembunyikan jika sedang dalam mode idle
    maskRadius.set(0);

    // Set timer baru: 5 detik (5000ms)
    idleTimerRef.current = setTimeout(() => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      
      // Posisikan sorotan di tengah gambar
      mouseX.set(rect.width / 2);
      mouseY.set(rect.height / 2);
      maskRadius.set(idleRadius);

      // Set timer fade out: 2 detik (2000ms) setelah muncul
      fadeOutTimerRef.current = setTimeout(() => {
        maskRadius.set(0);
      }, 2000);
      
    }, 5000);
  };

  // Mulai timer saat komponen di-mount
  useEffect(() => {
    resetIdleTimer();
    return () => {
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      if (fadeOutTimerRef.current) clearTimeout(fadeOutTimerRef.current);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
    
    // Reset timer setiap kali mouse bergerak
    resetIdleTimer();
    maskRadius.set(radius);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
    maskRadius.set(radius);
    resetIdleTimer();
  };

  const handleMouseLeave = () => {
    maskRadius.set(0);
    resetIdleTimer();
  };

  return (
    <div
      ref={containerRef}
      className={`group relative cursor-crosshair ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <Image
        src={imageA}
        alt="Photo A"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
        className={`object-${objectFit} object-center`}
      />

      <motion.div
        style={{ 
          maskImage, 
          WebkitMaskImage: maskImage,
          willChange: "mask-image"
        }}
        className="absolute inset-0 w-full h-full z-10 pointer-events-none"
      >
        <Image
          src={imageB}
          alt="Photo B"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`object-${objectFit} object-center`}
        />
      </motion.div>
    </div>
  );
}