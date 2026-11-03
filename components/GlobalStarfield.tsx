"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Starfield } from "@/components/ui/Starfield";

export default function GlobalStarfield() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Starfield 
        key={resolvedTheme} // PERBAIKAN 1: Memaksa Canvas di-reset saat tema berubah
        starColor={
          isDark 
            ? "rgba(255,255,255,0.7)" 
            : "rgba(0,0,0,0.8)" // PERBAIKAN 2: Hitam dibuat lebih pekat agar terlihat di Light Mode
        } 
        bgColor="transparent" 
        quantity={400} 
        speed={1.2} 
        mouseAdjust={true} 
      />
    </div>
  );
}