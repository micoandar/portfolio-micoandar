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
    <div className={`relative overflow-hidden rounded-[24px] p-[2px] ${className}`}>
      
      {/* 
        EFEK GLOW (BLUR)
        Warna: Oranye (#f97316), Pink (#ec4899), Cyan (#38bdf8)
      */}
      <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_60%,#f97316_70%,#ec4899_75%,#38bdf8_80%,transparent_90%)] opacity-80 blur-md" />
      
      {/* 
        GARIS BORDER TAJAM (TANPA BLUR)
        Membuat inti cahayanya terlihat jelas
      */}
      <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_60%,#f97316_70%,#ec4899_75%,#38bdf8_80%,transparent_90%)]" />

      {/* Konten di dalamnya */}
      <div className="relative z-10 h-full w-full rounded-[22px] bg-white dark:bg-[#0f172a]">
        {children}
      </div>
      
    </div>
  );
}