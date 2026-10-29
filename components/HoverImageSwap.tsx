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

  const idleTimerRef = useRef<NodeJS.Timeout | null>(null);
  const fadeOutTimerRef = useRef<NodeJS.Timeout | null>(null);

  const resetIdleTimer = () => {
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    if (fadeOutTimerRef.current) clearTimeout(fadeOutTimerRef.current);
    setIsIdle(false);

    idleTimerRef.current = setTimeout(() => {
      setIsIdle(true);
      fadeOutTimerRef.current = setTimeout(() => {
        setIsIdle(false);
      }, 2000);
    }, 5000);
  };

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
    maskRadius.set(radius);
    
    if (!isHovered) setIsHovered(true);
    resetIdleTimer();
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
    maskRadius.set(radius);
    setIsHovered(true);
    resetIdleTimer();
  };

  const handleMouseLeave = () => {
    maskRadius.set(0);
    setIsHovered(false);
    resetIdleTimer();
  };

  const imageBOpacity = isIdle ? 1 : (isHovered ? 1 : 0);

  return (
    <div
      ref={containerRef}
      // MENGUBAH CURSOR-CROSSHAIR MENJADI CURSOR-DEFAULT
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
        transition={{ duration: 0.6, ease: "easeInOut" }}
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