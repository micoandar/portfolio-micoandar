"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useMotionTemplate, useSpring } from "framer-motion";

interface HoverImageSwapProps {
  imageA: string;
  imageB: string;
  className?: string;
  objectFit?: "cover" | "contain";
  radius?: number; 
}

export default function HoverImageSwap({
  imageA,
  imageB,
  className = "relative w-full aspect-[4/5] rounded-3xl overflow-hidden",
  objectFit = "cover",
  radius = 120, // Ukuran default (lebih kecil dan pas)
}: HoverImageSwapProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Posisi kursor
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Radius sorot
  const maskRadius = useMotionValue(0);

  // Spring Physics untuk pergerakan yang smooth (tidak kaku)
  const springConfig = { stiffness: 120, damping: 25, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  
  // Spring untuk radius agar saat mouse keluar, lingkarannya mengecil dengan halus
  const smoothRadius = useSpring(maskRadius, { stiffness: 150, damping: 25 });

  // Kombinasi Mask Image (Lingkaran dengan tepi yang memudar)
  const maskImage = useMotionTemplate`
    radial-gradient(
      circle ${smoothRadius}px at ${smoothX}px ${smoothY}px, 
      black 20%, 
      transparent 100%
    )
  `;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    // Set posisi awal tepat di pintu masuk mouse agar tidak melompat dari pojok
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
    
    // Munculkan sorotan
    maskRadius.set(radius);
  };

  const handleMouseLeave = () => {
    // Sembunyikan sorotan (kembali normal)
    maskRadius.set(0);
  };

  return (
    <div
      ref={containerRef}
      className={`group relative cursor-crosshair ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {/* LAYER 1: Foto A (Base) */}
      <Image
        src={imageA}
        alt="Photo A"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
        className={`object-${objectFit} object-center`}
      />

      {/* LAYER 2: Foto B (Hanya muncul di area mask) */}
      <motion.div
        style={{ 
          maskImage, 
          WebkitMaskImage: maskImage, // Untuk Safari
          willChange: "mask-image"
        }}
        className="absolute inset-0 w-full h-full z-10 pointer-events-none"
      >
        {/* object-cover dan object-center memastikan gambar sejajar sempurna */}
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