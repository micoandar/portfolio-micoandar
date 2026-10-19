"use client";

import { useRef, useState } from "react";
import { Music, Pause } from "lucide-react";
import { cn } from "@/lib/utils";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // Set volume ke 30% agar tidak terlalu keras
        audioRef.current.volume = 0.3; 
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      {/* Audio Element Tersembunyi */}
      <audio
        ref={audioRef}
        src="/audio/bg-music.mp3"
        loop
        preload="none"
      />

      {/* Tombol Play/Pause Mengapung di Kiri Bawah */}
      <button
        type="button"
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause Music" : "Play Music"}
        className={cn(
          "fixed bottom-4 left-4 z-40 grid h-11 w-11 place-items-center rounded-full border shadow-xl transition-all duration-300 sm:bottom-6 sm:left-6 sm:h-12 sm:w-12",
          isPlaying
            ? "border-brand-500 bg-brand-600 text-white shadow-brand-500/30 hover:bg-brand-700"
            : "border-slate-200 bg-white text-slate-600 shadow-slate-900/10 hover:border-brand-300 hover:text-brand-600"
        )}
      >
        {/* Ikon berputar jika musik menyala */}
        <div className={cn(isPlaying && "animate-[spin_4s_linear_infinite]")}>
          {isPlaying ? (
            <Pause size={18} className="animate-none" /> 
          ) : (
            <Music size={18} />
          )}
        </div>
      </button>
    </>
  );
}