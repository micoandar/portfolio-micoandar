"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Starfield } from "@/components/ui/Starfield";

export default function GlobalStarfield() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted || resolvedTheme !== "dark") return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Starfield 
        starColor="rgba(255,255,255,0.7)" 
        bgColor="transparent" 
        quantity={400} 
        speed={1.2} 
        mouseAdjust={true} 
      />
    </div>
  );
}