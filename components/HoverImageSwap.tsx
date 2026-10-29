"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface HoverImageSwapProps {
  imageA: string;
  imageB: string;
  className?: string;
  duration?: number;
  objectFit?: "cover" | "contain";
}

export default function HoverImageSwap({
  imageA,
  imageB,
  className = "relative w-full aspect-[4/5] rounded-3xl overflow-hidden",
  duration = 0.45,
  objectFit = "cover",
}: HoverImageSwapProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  // Desktop: Mouse Enter & Leave
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  // Mobile: Tap Toggle
  const handleClick = () => {
    // Hanya jalankan toggle jika perangkat menggunakan sentuhan (mobile/tablet)
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsToggled(!isToggled);
    }
  };

  // State penentu kapan foto B harus muncul
  const showB = isHovered || isToggled;

  // Easing curve khusus untuk transisi yang sangat premium dan halus
  const transitionConfig = { 
    duration, 
    ease: [0.22, 1, 0.36, 1] as const
  };

  return (
    <div
      className={`group cursor-pointer md:cursor-default ${className}`}
      onPointerEnter={handleMouseEnter}
      onPointerLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {/* LAYER 1: Foto A (Awal) */}
      <motion.div
        initial={false}
        animate={{ 
          opacity: showB ? 0 : 1, 
          scale: showB ? 1.015 : 1, // Efek zoom out/in yang sangat tipis
          filter: showB ? "blur(4px)" : "blur(0px)" // Blur halus saat memudar
        }}
        transition={transitionConfig}
        style={{ willChange: "transform, opacity, filter" }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src={imageA}
          alt="Photo A"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`object-${objectFit} object-center`}
        />
      </motion.div>

      {/* LAYER 2: Foto B (Hover/Tap) */}
      <motion.div
        initial={false}
        animate={{ 
          opacity: showB ? 1 : 0, 
          scale: showB ? 1 : 1.015, // Sedikit lebih kecil saat tersembunyi
          filter: showB ? "blur(0px)" : "blur(4px)" 
        }}
        transition={transitionConfig}
        style={{ willChange: "transform, opacity, filter" }}
        className="absolute inset-0 w-full h-full"
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