"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform, animate } from "framer-motion";

export default function Lanyard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 200, damping: 20, mass: 1 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  // Menghitung posisi Y untuk ujung tali (ditambah 50px karena ada jarak ke kartu)
  const stringY2 = useTransform(smoothY, (val) => val + 50);

  const dragStart = useRef({ x: 0, y: 0, time: 0 });
  const MAX_STRETCH = 200; // Batas maksimal tarikan

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    dragStart.current = {
      x: e.clientX - x.get(),
      y: e.clientY - y.get(),
      time: Date.now(),
    };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    let newX = e.clientX - dragStart.current.x;
    let newY = e.clientY - dragStart.current.y;

    // Membatasi jarak tarikan agar tidak putus
    const distance = Math.sqrt(newX * newX + newY * newY);
    if (distance > MAX_STRETCH) {
      const angle = Math.atan2(newY, newX);
      newX = Math.cos(angle) * MAX_STRETCH;
      newY = Math.sin(angle) * MAX_STRETCH;
    }
    if (newY < 0) newY = 0; // Tidak bisa ditarik ke atas melewati tali

    x.set(newX);
    y.set(newY);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);

    // Cek apakah ini sebuah klik (bukan drag)
    const dragDuration = Date.now() - dragStart.current.time;
    const distanceDragged = Math.sqrt(x.get() ** 2 + y.get() ** 2);

    // Jika digeser kurang dari 10px dan kurang dari 200ms, anggap sebagai klik
    if (distanceDragged < 10 && dragDuration < 200) {
      setIsFlipped(!isFlipped);
    }

    // Memantul kembali ke tengah
    animate(x, 0, { type: "spring", stiffness: 120, damping: 15, mass: 1.2 });
    animate(y, 0, { type: "spring", stiffness: 120, damping: 15, mass: 1.2 });
  };

  return (
    <div className="relative flex w-full items-start justify-center pt-8">
      {/* TALI LANYARD KARET (SVG) */}
      <svg className="absolute top-0 left-1/2 z-0 h-[400px] w-8 -ml-4 overflow-visible pointer-events-none">
        <motion.line
          x1={16}
          y1={0}
          x2={smoothX}
          y2={stringY2} // <-- Menggunakan nilai yang sudah ditransformasi
          stroke="url(#stringGradient)"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="stringGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#4f46e5" />
          </linearGradient>
        </defs>
      </svg>

      {/* KARTU LANYARD (BISA DITARIK & DIKLIK) */}
      <motion.div
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        style={{
          x: smoothX,
          y: smoothY,
          touchAction: "none",
        }}
        className="relative z-10 mt-[50px] w-full max-w-[320px] cursor-grab active:cursor-grabbing"
      >
        {/* Container 3D Flip */}
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          style={{ transformStyle: "preserve-3d" }}
          className="relative aspect-[3/4] w-full"
        >
          {/* SISI DEPAN (.jpg) */}
          <div 
            className="absolute inset-0 rounded-3xl bg-white shadow-2xl"
            style={{ backfaceVisibility: "hidden" }}
          >
            <Image
              src="/images/lanyard.jpg"
              alt="Lanyard Front"
              fill
              className="rounded-3xl object-cover pointer-events-none"
              priority
            />
          </div>

          {/* SISI BELAKANG (.jpg) */}
          <div 
            className="absolute inset-0 rounded-3xl bg-slate-800 shadow-2xl"
            style={{ 
              backfaceVisibility: "hidden", 
              transform: "rotateY(180deg)" 
            }}
          >
            <Image
              src="/images/backlanyard.jpg"
              alt="Lanyard Back"
              fill
              className="rounded-3xl object-cover pointer-events-none"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}