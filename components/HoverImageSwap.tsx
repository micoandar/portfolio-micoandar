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

  // --- LOGIKA IDLE LOOPING ---
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isHovered) {
      setIsIdle(false);
      return;
    }

    if (isIdle) {
      timeout = setTimeout(() => {
        setIsIdle(false);
      }, 3000); // 3 detik fade out
    } else {
      timeout = setTimeout(() => {
        setIsIdle(true);
      }, 5000); // 5 detik fade in
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

  // Logika Transisi
  const imageBOpacity = (isIdle || isHovered) ? 1 : 0;
  const opacityDuration = isHovered 
    ? 0.2 // Jika hover, transisi cepat
    : (isIdle ? 0.8 : 0); // Jika Idle, fade smooth 0.8s. Jika lepas hover, langsung hilang (0)

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

      {/* LAYER 2: Gambar Kedua */}
      <motion.div
        style={{ 
          maskImage: isHovered ? maskImage : "none", 
          WebkitMaskImage: isHovered ? maskImage : "none",
          willChange: "mask-image, opacity"
        }}
        animate={{ opacity: imageBOpacity }}
        transition={{ duration: opacityDuration, ease: "easeInOut" }}
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