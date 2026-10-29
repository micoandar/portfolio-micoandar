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
  radius = 120,
}: HoverImageSwapProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Posisi kursor
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Radius sorot
  const maskRadius = useMotionValue(0);

  // Spring Physics
  const springConfig = { stiffness: 120, damping: 25, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  const smoothRadius = useSpring(maskRadius, { stiffness: 150, damping: 25 });

  // Menggunakan radial-gradient dengan area solid (black) yang lebih lebar (60%)
  // agar gambar kedua benar-benar menutupi gambar pertama dan hanya memudar di ujung.
  const maskImage = useMotionTemplate`
    radial-gradient(
      circle ${smoothRadius}px at ${smoothX}px ${smoothY}px, 
      black 60%, 
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
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
    maskRadius.set(radius);
  };

  const handleMouseLeave = () => {
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
      {/* LAYER 1: Foto A */}
      <Image
        src={imageA}
        alt="Photo A"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
        className={`object-${objectFit} object-center`}
      />

      {/* LAYER 2: Foto B (Masking + Efek Zoom/Pop-out) */}
      <motion.div
        style={{ 
          maskImage, 
          WebkitMaskImage: maskImage,
          willChange: "mask-image, transform"
        }}
        // Sedikit diperbesar agar terasa lebih "real" ketika disentuh
        animate={{ scale: maskRadius.get() > 0 ? 1.04 : 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
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