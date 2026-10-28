"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// Konfigurasi utama
const lanyardConfig = {
  width: "clamp(180px, 30vw, 420px)", // Responsive width
  rotation: 0,
  x: 0,
  y: 0,
  mouseStrength: 1,
  swingStrength: 1,
  animationDuration: 1.2,
};

interface LanyardProps {
  align?: "left" | "center" | "right";
  children?: React.ReactNode; // Area kosong jika kamu ingin menaruh ID Card buatanmu sendiri di bawah
}

export default function Lanyard({ align = "center", children }: LanyardProps) {
  const [isDesktop, setIsDesktop] = useState(false);

  // Deteksi device untuk mouse interaction (hanya desktop)
  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsDesktop(mediaQuery.matches);
  }, []);

  // Logika Mouse Parallax
  const mouseX = useMotionValue(0);
  const springConfig = { stiffness: 100, damping: 20 };
  const smoothMouseX = useSpring(mouseX, springConfig);

  // Batasan tilt (maksimal 3 derajat) dan geser (maksimal 15px)
  const rotate = useTransform(
    smoothMouseX,
    [-500, 500],
    [-3 * lanyardConfig.mouseStrength, 3 * lanyardConfig.mouseStrength]
  );
  const translateX = useTransform(
    smoothMouseX,
    [-500, 500],
    [-15 * lanyardConfig.mouseStrength, 15 * lanyardConfig.mouseStrength]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktop) return;
    // Mengukur posisi mouse dari tengah layar
    const { clientX } = e;
    const { innerWidth } = window;
    const offset = clientX - innerWidth / 2;
    mouseX.set(offset);
  };

  const handleMouseLeave = () => {
    // Kembali ke tengah
    mouseX.set(0);
  };

  // Penentuan posisi alignment
  const alignClass = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  }[align];

  return (
    <div
      className={`relative flex w-full overflow-x-hidden ${alignClass}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        paddingTop: "2rem", // Jarak aman dari atas
        zIndex: 10,
        ...({ "--swing-strength": lanyardConfig.swingStrength } as React.CSSProperties),
      }}
    >
      {/* 
        Wrapper Animasi Masuk (Entrance) 
        Masuk dari atas dengan sedikit overshoot (spring)
      */}
      <motion.div
        initial={{ y: "-20%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 15,
          duration: lanyardConfig.animationDuration,
        }}
        style={{
          width: lanyardConfig.width,
          x: lanyardConfig.x,
          y: lanyardConfig.y,
          rotate: lanyardConfig.rotation,
          transformOrigin: "top center",
        }}
        className="relative flex flex-col items-center will-change-transform"
      >
        {/* 
          Wrapper Idle Swing 
          Goyangan sangat halus (±1.5 derajat) seperti tertiup angin
        */}
        <motion.div
          animate={{
            rotate: [-1.5 * lanyardConfig.swingStrength, 1.5 * lanyardConfig.swingStrength, -1.5 * lanyardConfig.swingStrength],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "top center" }}
          className="w-full will-change-transform"
        >
          {/* 
            Wrapper Mouse Parallax 
            Merespons pergerakan kursor mouse (Desktop only)
          */}
          <motion.div
            style={{
              rotate,
              x: translateX,
              transformOrigin: "top center",
            }}
            className="w-full will-change-transform flex flex-col items-center"
          >
            {/* Gambar Lanyard Asli */}
            <img
              src="/lanyard.png"
              alt="Decorative lanyard"
              aria-hidden="true"
              className="w-full h-auto object-contain pointer-events-none"
            />

            {/* Area kosong untuk ID Card (jika lanyard.png hanya berisi tali) */}
            {children && (
              <div className="absolute bottom-0 w-full flex justify-center translate-y-[90%]">
                {children}
              </div>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}