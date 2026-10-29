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
  scale?: number; 
  offsetX?: number; 
  offsetY?: number; 
}

export default function HoverImageSwap({
  imageA,
  imageB,
  className = "relative w-full aspect-[4/5] rounded-3xl overflow-hidden",
  objectFit = "cover",
  radius = 130, // Ukuran sorot lingkaran
  scale = 1.4, // DIPERBESAR drastis (140%) agar topeng menutupi seluruh wajah asli
  offsetX = 0, // Posisi tepat di tengah
  offsetY = 0,
}: HoverImageSwapProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const maskRadius = useMotionValue(0);

  const springConfig = { stiffness: 120, damping: 25, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  const smoothRadius = useSpring(maskRadius, { stiffness: 150, damping: 25 });

  // Area tengah 90% solid (hitam), 10% terluar memudar
  const maskImage = useMotionTemplate`
    radial-gradient(
      circle ${smoothRadius}px at ${smoothX}px ${smoothY}px, 
      black 90%, 
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
      {/* LAYER 1: Foto A (Wajah Asli) */}
      <Image
        src={imageA}
        alt="Photo A"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
        className={`object-${objectFit} object-center`}
      />

      {/* LAYER 2: Foto B (Topeng) */}
      <motion.div
        style={{ 
          maskImage, 
          WebkitMaskImage: maskImage,
          willChange: "mask-image"
        }}
        className="absolute inset-0 w-full h-full z-10 pointer-events-none overflow-hidden"
      >
        <div 
          className="relative w-full h-full"
          style={{ 
            transform: `translateX(${offsetX}px) translateY(${offsetY}px) scale(${scale})`, 
            transformOrigin: "center center" 
          }}
        >
          <Image
            src={imageB}
            alt="Photo B"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className={`object-${objectFit} object-center`}
          />
        </div>
      </motion.div>
    </div>
  );
}