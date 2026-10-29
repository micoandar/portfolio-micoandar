"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface InteractivePhotoSceneProps {
  // Konfigurasi
  intensity?: number;
  perspective?: number;
  rotationLimit?: number;
  springStiffness?: number;
  springDamping?: number;
  scaleDepth?: number;
}

export default function InteractivePhotoScene({
  intensity = 20,
  perspective = 1000,
  rotationLimit = 8,
  springStiffness = 150,
  springDamping = 20,
  scaleDepth = 1.05,
}: InteractivePhotoSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Motion values untuk menyimpan posisi mouse (-0.5 sampai 0.5)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics agar gerakan tidak kaku (smooth & natural)
  const springConfig = { stiffness: springStiffness, damping: springDamping };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Mapping posisi mouse ke Rotasi 3D Scene
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [rotationLimit, -rotationLimit]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-rotationLimit, rotationLimit]);

  // Mapping posisi mouse ke Parallax Layer Belakang (jbwkz)
  const bgX = useTransform(smoothX, [-0.5, 0.5], [intensity, -intensity]);
  const bgY = useTransform(smoothY, [-0.5, 0.5], [intensity, -intensity]);

  // Mapping posisi mouse ke Parallax Layer Depan (My-photo)
  // Dibalik arahnya dan dibuat lebih besar agar terasa depth-nya
  const fgX = useTransform(smoothX, [-0.5, 0.5], [-intensity * 1.5, intensity * 1.5]);
  const fgY = useTransform(smoothY, [-0.5, 0.5], [-intensity * 1.5, intensity * 1.5]);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    // Hitung posisi mouse relatif terhadap container (0 sampai 1)
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    // Normalisasi ke -0.5 sampai 0.5
    mouseX.set(x - 0.5);
    mouseY.set(y - 0.5);
  };

  const handlePointerLeave = () => {
    // Kembali ke posisi natural secara perlahan saat kursor keluar
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerCancel={handlePointerLeave}
      className="relative flex w-full h-full min-h-[400px] sm:min-h-[500px] items-center justify-center overflow-hidden rounded-3xl"
      style={{ 
        perspective: `${perspective}px`,
        touchAction: "none" // Mencegah scroll saat drag di mobile
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
        className="relative w-full max-w-[450px] aspect-[4/5] flex items-center justify-center"
      >
        {/* LAYER BELAKANG (jbwkz.png) */}
        <motion.div
          style={{
            x: bgX,
            y: bgY,
            transform: "translateZ(-50px)", // Diletakkan lebih jauh
            willChange: "transform",
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-lg border border-white/10">
            <Image
              src="/images/jbwkz.png"
              alt="Background Layer"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover opacity-90"
              priority
            />
            {/* Overlay gelap tipis agar terkesan lighting */}
            <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
          </div>
        </motion.div>

        {/* LAYER DEPAN (My-photo.png) */}
        <motion.div
          style={{
            x: fgX,
            y: fgY,
            transform: `translateZ(60px) scale(${scaleDepth})`, // Lebih dekat ke viewer & sedikit membesar
            willChange: "transform",
          }}
          className="absolute inset-0 flex items-end justify-center pointer-events-none"
        >
          <Image
            src="/images/My-photo.png"
            alt="Foreground Portrait"
            width={500}
            height={600}
            className="w-[90%] h-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.6)]"
            priority
          />
        </motion.div>
      </motion.div>
    </div>
  );
}