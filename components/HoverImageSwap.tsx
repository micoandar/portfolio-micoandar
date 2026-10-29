"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useMotionTemplate, useSpring } from "framer-motion";

interface HoverImageSwapProps {
  imageA: string;
  imageB: string;
  className?: string;
  objectFit?: "cover" | "contain";
  radius?: number; // Ukuran area sorot (lingkaran)
  blurEdge?: number; // Kelembutan tepi (makin besar makin halus memudarnya)
}

export default function HoverImageSwap({
  imageA,
  imageB,
  className = "relative w-full aspect-[4/5] rounded-3xl overflow-hidden",
  objectFit = "cover",
  radius = 180, // Ukuran lingkaran sorot
  blurEdge = 80, // Area pudar di pinggir lingkaran
}: HoverImageSwapProps) {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Nilai posisi mouse
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics: Stiffness diturunkan, damping dinaikkan agar sangat mulus & tidak kaku
  const springConfig = { stiffness: 60, damping: 20, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Menggunakan Mask Image (Radial Gradient) agar ujungnya memudar (soft edge)
  // Fungsi: area tengah solid hitam, lalu memudar transparan secara bertahap
  const maskImage = useMotionTemplate`
    radial-gradient(
      circle ${isHovered ? radius : 0}px at ${smoothX}px ${smoothY}px, 
      black ${isHovered ? "40%" : "0%"}, 
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
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      ref={containerRef}
      className={`group relative cursor-crosshair ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {/* LAYER 1: Foto A (Base Image) */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={imageA}
          alt="Photo A"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`object-${objectFit} object-center`}
        />
      </div>

      {/* LAYER 2: Foto B (Hanya muncul di area mask) */}
      <motion.div
        style={{ 
          maskImage, 
          WebkitMaskImage: maskImage, // Untuk dukungan browser Safari
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