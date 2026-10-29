"use client";

import React from "react";

export default function AnimatedBorder({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode; 
  className?: string; 
}) {
  return (
    <div className={`relative overflow-hidden rounded-[24px] bg-slate-200 dark:bg-slate-800/50 ${className}`}>
      
      {/* Animasi SVG */}
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
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        {/* Garis 1: Kiri Bawah -> Kiri Atas -> Kanan Atas */}
        <path
          d="M 0,100 L 0,10 A 10,10 0 0,1 10,0 L 100,0"
          fill="none"
          stroke="url(#grad1)"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          filter="url(#glow)"
          pathLength="100"
          strokeDasharray="100"
          strokeDashoffset="100"
          className="animate-[drawPath_4s_ease-in-out_infinite]"
        />
        
        {/* Garis 2: Kiri Bawah -> Kanan Bawah -> Kanan Atas */}
        <path
          d="M 0,100 L 90,100 A 10,10 0 0,1 100,90 L 100,0"
          fill="none"
          stroke="url(#grad1)"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          filter="url(#glow)"
          pathLength="100"
          strokeDasharray="100"
          strokeDashoffset="100"
          className="animate-[drawPath_4s_ease-in-out_infinite]"
        />
      </svg>

      {/* Konten di dalamnya */}
      <div className="relative z-10 h-full w-full rounded-[22px] bg-white dark:bg-[#0f172a]">
        {children}
      </div>
    </div>
  );
}