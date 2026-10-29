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
    <div className={`relative overflow-hidden rounded-[24px] p-[1.5px] ${className}`}>
      
      {/* Animasi Garis Berputar (Conic Gradient) */}
      <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_60%,#818cf8_75%,#c084fc_90%,#e879f9_100%)]" />
      
      {/* Konten di dalamnya */}
      <div className="relative z-10 h-full w-full rounded-[22.5px] bg-white dark:bg-[#0f172a]">
        {children}
      </div>
      
    </div>
  );
}