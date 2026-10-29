"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useMotionTemplate, useSpring } from "framer-motion";

interface HoverImageSwapProps {
  imageA: string;
  imageB: string;
  className?: string;
  objectFit?: "cover" | "contain";
  radius?: number;
  imageScale?: number; 
}

export default function HoverImageSwap({
  imageA,
  imageB,
  className = "relative w-full h-full rounded-3xl overflow-hidden",
  objectFit = "cover",
  radius = 80, 
  imageScale = 1,
}: HoverImageSwapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isIdle, setIsIdle] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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

  // --- LOGIKA IDLE LOOPING BARU ---
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isHovered) {
      // Jika disentuh mouse, hentikan animasi idle dan kembali ke gambar 1
      setIsIdle(false);
      return;
    }

    if (isIdle) {
      // Jika gambar 2 sedang tampil, tunggu 3 detik lalu fade out (gambar 1)
      timeout = setTimeout(() => {
        setIsIdle(false);
      }, 3000);
    } else {
      // Jika gambar 1 sedang tampil, tunggu 5 detik lalu fade in (gambar 2)
      timeout = setTimeout(() => {
        setIsIdle(true);
      }, 5000);
    }

    return () => clearTimeout(timeout);
  }, [isHovered, isIdle]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
    maskRadius.set(radius);
    
    if (!isHovered) setIsHovered(true);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
    maskRadius.set(radius);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    maskRadius.set(0);
    setIsHovered(false);
  };

  // Gambar B akan muncul jika sedang Idle (animasi) atau sedang disentuh (mask)
  const imageBOpacity = isIdle ? 1 : (isHovered ? 1 : 0);

  return (
    <div
      ref={containerRef}
      className={`group relative cursor-default ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {/* LAYER 1: Gambar Asli */}
      <div 
        className="absolute inset-0 w-full h-full flex items-center justify-center"
        style={{ transform: `scale(${imageScale})` }}
      >
        <div className="relative w-full h-full">
          <Image
            src={imageA}
            alt="Photo A"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className={`object-${objectFit} object-center`}
          />
        </div>
      </div>

      {/* LAYER 2: Gambar Kedua (Masking / Fade) */}
      <motion.div
        style={{ 
          maskImage: isIdle ? "none" : maskImage, 
          WebkitMaskImage: isIdle ? "none" : maskImage,
          willChange: "mask-image, opacity"
        }}
        animate={{ opacity: imageBOpacity }}
        transition={{ duration: 0.8, ease: "easeInOut" }} // Transisi Fade yang halus
        className="absolute inset-0 w-full h-full z-10 pointer-events-none"
      >
        <div 
          className="relative w-full h-full flex items-center justify-center"
          style={{ transform: `scale(${imageScale})` }}
        >
          <div className="relative w-full h-full">
            <Image
              src={imageB}
              alt="Photo B"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className={`object-${objectFit} object-center`}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}