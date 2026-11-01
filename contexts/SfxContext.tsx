"use client";

import { createContext, useContext, useEffect, useState, useRef } from "react";

type SfxContextType = {
  isSfxEnabled: boolean;
  toggleSfx: () => void;
};

const SfxContext = createContext<SfxContextType | null>(null);

export function SfxProvider({ children }: { children: React.ReactNode }) {
  const [isSfxEnabled, setIsSfxEnabled] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Pastikan file sfx.mp3 ada di folder public
    audioRef.current = new Audio("/sfx.mp3");
    audioRef.current.volume = 0.5; // Volume SFX (bisa disesuaikan)

    const handleClick = (e: MouseEvent) => {
      if (!isSfxEnabled || !audioRef.current) return;
      
      // Deteksi apakah yang diklik adalah tombol, link, atau elemen interaktif
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('button, a, [role="button"]');
      
      if (isInteractive) {
        // Reset waktu ke 0 agar bisa diputar berulang kali dengan cepat
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