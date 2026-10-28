"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform, animate } from "framer-motion";

export default function Lanyard() {
  const [isDragging, setIsDragging] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // KONFIGURASI KARET: Stiffness & Damping diturunkan agar lebih elastis
  const springConfig = { stiffness: 80, damping: 12, mass: 1 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const initialGap = 100;
  const strapX = smoothX;
  const strapY = useTransform(smoothY, (val) => val + initialGap);
  
  const strapLength = useTransform([strapX, strapY], ([lx, ly]) => {
    return Math.sqrt((lx as number) ** 2 + (ly as number) ** 2);
  });
  const strapAngle = useTransform([strapX, strapY], ([lx, ly]) => {
    return Math.atan2(lx as number, ly as number) * (180 / Math.PI);
  });

  // Rotasi kartu lebih dinamis saat ditarik
  const cardRotate = useTransform(smoothX, [-200, 200], [-20, 20]);

  const dragStart = useRef({ x: 0, y: 0 });
  const MAX_STRETCH = 250; // Tarikan bisa lebih panjang

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    dragStart.current = {
      x: e.clientX - x.get(),
      y: e.clientY - y.get(),
    };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    let newX = e.clientX - dragStart.current.x;
    let newY = e.clientY - dragStart.current.y;

    const distance = Math.sqrt(newX ** 2 + newY ** 2);
    if (distance > MAX_STRETCH) {
      const angle = Math.atan2(newY, newX);
      newX = Math.cos(angle) * MAX_STRETCH;
      newY = Math.sin(angle) * MAX_STRETCH;
    }

    if (newY < 0) newY = 0;

    x.set(newX);
    y.set(newY);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
    
    // Pantulan dilepas juga dibuat lebih elastis
    animate(x, 0, { type: "spring", stiffness: 80, damping: 12, mass: 1 });
    animate(y, 0, { type: "spring", stiffness: 80, damping: 12, mass: 1 });
  };

  return (
    <div className="relative flex flex-col items-center justify-start pt-4 w-full">
      
      {/* TALI LANYARD */}
      <motion.div
        style={{
          height: strapLength,
          rotate: strapAngle,
          transformOrigin: "top center",
        }}
        className="absolute top-0 w-8 z-0 rounded-b-sm bg-gradient-to-b from-[#111] via-[#222] to-[#333] shadow-[2px_0_10px_rgba(0,0,0,0.5)] border-x border-white/5"
      >
        <div className="absolute inset-0 opacity-30 [background-image:repeating-linear-gradient(45deg,transparent,transparent_2px,#fff_2px,#fff_4px)]" />
        <div className="absolute inset-0 opacity-20 [background-image:repeating-linear-gradient(-45deg,transparent,transparent_3px,#000_3px,#000_5px)]" />
        
        <div className="absolute inset-0 flex items-center justify-center pt-4">
          <span className="text-[10px] font-bold tracking-[0.3em] text-white/40" style={{ writingMode: "vertical-rl" }}>
            SOFTWARE ENGINEER
          </span>
        </div>
      </motion.div>

      {/* KARTU ID (BISA DI-DRAG) */}
      <motion.div
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        style={{
          x: smoothX,
          y: smoothY,
          rotate: cardRotate,
          touchAction: "none",
        }}
        className="relative z-10 mt-[100px] w-full max-w-[320px] cursor-grab active:cursor-grabbing group"
      >
        {/* PENGAIT LOGAM (ATAS) */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
          <div className="h-4 w-8 rounded-t-sm bg-gradient-to-r from-gray-400 via-gray-200 to-gray-500 border border-gray-500 shadow-md" />
          <div className="h-3 w-6 bg-gradient-to-b from-gray-300 to-gray-500 rounded-b-md shadow-inner" />
        </div>

        {/* BINGKAI ID CARD */}
        <div className="relative w-full overflow-hidden rounded-[1.5rem] border-[6px] border-[#1a1a1a] bg-[#2a2a2a] shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          
          {/* Lubang Klip (Eyelet) */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-4 bg-[#0a0a0a] rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] border border-gray-600 z-20 flex justify-center items-center">
            <div className="w-8 h-1 bg-gray-500/50 rounded-full" />
          </div>

          {/* GAMBAR ID CARD */}
          <div className="relative w-full aspect-[832/1285] bg-slate-800 flex items-center justify-center">
            <Image
              src="/id-card.png"
              alt="Micoandar ID Card"
              fill
              className="object-contain pointer-events-none p-1 rounded-xl"
              priority
            />
          </div>

          {/* Efek Highlight Kaca */}
          <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-tr from-white/0 via-white/5 to-white/20" />
        </div>
      </motion.div>
    </div>
  );
}