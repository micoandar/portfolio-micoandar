"use client";

import { createContext, useContext, useEffect, useState, useRef } from "react";

type SfxContextType = {
  isSfxEnabled: boolean;
  toggleSfx: () => void;
};

const SfxContext = createContext<SfxContextType | null>(null);

export function SfxProvider({ children }: { children: React.ReactNode }) {
  const [isSfxEnabled, setIsSfxEnabled] = useState(true); 
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Pastikan file sfx.mp3 ada di folder public
    audioRef.current = new Audio("/sfx.mp3");
    
    // PERBAIKAN: Volume dikecilkan dari 1.0 menjadi 0.35 agar tidak terlalu keras
    audioRef.current.volume = 0.5; 

    const handleClick = (e: MouseEvent) => {
      if (!isSfxEnabled || !audioRef.current) return;
      
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('button, a, [role="button"]');
      
      if (isInteractive) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {});
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [isSfxEnabled]);

  const toggleSfx = () => setIsSfxEnabled((prev) => !prev);

  return (
    <SfxContext.Provider value={{ isSfxEnabled, toggleSfx }}>
      {children}
    </SfxContext.Provider>
  );
}

export function useSfx() {
  const ctx = useContext(SfxContext);
  if (!ctx) throw new Error("useSfx must be used within SfxProvider");
  return ctx;
}