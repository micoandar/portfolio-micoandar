"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Lanyard() {
  return (
    <div className="relative flex w-full justify-center">
      <motion.div
        // Animasi goyang tertiup angin
        animate={{ rotate: [-2, 2, -2] }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        style={{ transformOrigin: "top center" }}
        className="flex w-64 flex-col items-center sm:w-72"
      >
        {/* TALI LANYARD */}
        <div className="relative z-0 h-40 w-4 rounded-b-sm bg-gradient-to-b from-slate-800 via-slate-700 to-slate-900 shadow-lg">
          {/* Tekstur kain tali */}
          <div className="absolute inset-0 opacity-20 [background-image:repeating-linear-gradient(45deg,transparent,transparent_2px,#fff_2px,#fff_4px)]" />
        </div>

        {/* KLIP LOGAM */}
        <div className="relative z-10 -mt-2 flex h-6 w-8 items-center justify-center rounded-sm border border-slate-500 bg-gradient-to-b from-slate-300 via-slate-100 to-slate-400 shadow-md">
          <div className="h-1.5 w-4 rounded-full bg-slate-700/40" />
        </div>

        {/* KARTU ID */}
        <div className="relative z-0 mt-1 w-full overflow-hidden rounded-2xl border-4 border-white bg-slate-100 shadow-2xl ring-1 ring-slate-900/10">
          {/* Rasio asli 832 : 1285 */}
          <div className="relative aspect-[832/1285] w-full">
            <Image
              src="/images/id-card.png"
              alt="Micoandar ID Card"
              fill
              className="object-contain pointer-events-none"
              priority
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}