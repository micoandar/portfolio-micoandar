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
  const [isHovered, setIsHovered] = useState(false);
  
  // State Machine untuk Idle Animation
  const [idleState, setIdleState] = useState<'idle' | 'fadingIn' | 'visible' | 'fadingOut'>('idle');

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

  // --- LOGIKA IDLE LOOPING (STATE MACHINE) ---
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isHovered) {
      setIdleState('idle');
      return;
    }

    if (idleState === 'idle') {
      // 1. Menunggu 6 detik sebelum Fade In
      timeout = setTimeout(() => setIdleState('fadingIn'), 6000);
    } else if (idleState === 'fadingIn') {
      // 2. Durasi animasi Fade In (0.6 detik)
      timeout = setTimeout(() => setIdleState('visible'), 600);
    } else if (idleState === 'visible') {
      // 3. Gambar 2 diam selama 2 detik
      timeout = setTimeout(() => setIdleState('fadingOut'), 2000);
    } else if (idleState === 'fadingOut') {
      // 4. Durasi animasi Fade Out (0.2 detik - sangat cepat)
      timeout = setTimeout(() => setIdleState('idle'), 200);
    }

    return () => clearTimeout(timeout);
  }, [isHovered, idleState]);

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

  // Tentukan Opacity berdasarkan state
  let opacity = 0;
  if (isHovered || idleState === 'fadingIn' || idleState === 'visible') {
    opacity = 1;
  } else if (idleState === 'fadingOut') {
    opacity = 0; 
  }

  // Tentukan Durasi berdasarkan state (Fade out dibuat sangat cepat)
  let duration = 0;
  if (!isHovered) {
    if (idleState === 'fadingIn') duration = 0.6;  // Fade in halus
    if (idleState === 'fadingOut') duration = 0.2; // Fade out cepat (tidak lama)
  } else {
    duration = 0; // Saat disentuh mouse, transisi instan
  }

  // Style untuk garis tepi / outline pada gambar
  const outlineStyle = {
    filter: `
      drop-shadow(0 0 2px rgba(0,0,0,0.5)) 
      drop-shadow(0 0 8px rgba(0,0,0,0.2))
    `
  };

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
            style={outlineStyle}
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
        animate={{ opacity }}
        transition={{ duration, ease: "easeInOut" }}
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
              style={outlineStyle}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}