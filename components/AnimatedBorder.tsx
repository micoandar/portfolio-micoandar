"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AnimatedBorder({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode; 
  className?: string; 
}) {
  return (
    <div className={`relative overflow-hidden rounded-[24px] bg-slate-200 dark:bg-slate-800 p-[1.5px] ${className}`}>
      
      {/* SVG Layer */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full pointer-events-none"
      >
        <defs>
          {/* Warna Gradient: Oranye -> Pink -> Cyan */}
          <linearGradient id="grad1" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="50%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
          
          {/* Efek Glow */}
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Garis 1: Kiri Bawah -> Kiri Atas -> Kanan Atas */}
        <motion.path
          d="M 0,100 L 0,0 L 100,0"
          fill="none"
          stroke="url(#grad1)"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          filter="url(#glow)"
          pathLength={1}
          strokeDasharray="1 1"
          initial={{ strokeDashoffset: 1 }}
          animate={{ strokeDashoffset: -1 }}
          transition={{ 
            duration: 6, // <-- Waktu diperlambat menjadi 6 detik
            repeat: Infinity, 
            ease: "linear" 
          }}
        />

        {/* Garis 2: Kiri Bawah -> Kanan Bawah -> Kanan Atas */}
        <motion.path
          d="M 0,100 L 100,100 L 100,0"
          fill="none"
          stroke="url(#grad1)"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          filter="url(#glow)"
          pathLength={1}
          strokeDasharray="1 1"
          initial={{ strokeDashoffset: 1 }}
          animate={{ strokeDashoffset: -1 }}
          transition={{ 
            duration: 6, // <-- Waktu diperlambat menjadi 6 detik
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
      </svg>

      {/* Konten di dalamnya */}
      <div className="relative z-10 h-full w-full rounded-[23px] bg-white dark:bg-[#0f172a]">
        {children}
      </div>
      
    </div>
  );
}