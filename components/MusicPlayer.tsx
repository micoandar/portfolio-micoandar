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
        audioRef.current.volume = 0.6;
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/bg-music.mp3" loop preload="none" />

      <button
        type="button"
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause Music" : "Play Music"}
        className={cn(
          "fixed bottom-4 left-4 z-40 grid h-11 w-11 place-items-center rounded-full border shadow-xl transition-colors duration-300 [contain:layout_style_paint] sm:bottom-6 sm:left-6 sm:h-12 sm:w-12",
          isPlaying
            ? "border-brand-500 bg-brand-600 text-white shadow-brand-500/30 hover:bg-brand-700"
            : "border-slate-200 bg-white text-slate-600 shadow-slate-900/10 hover:border-brand-300 hover:text-brand-600"
        )}
        style={{ transform: "translateZ(0)" }}
      >
        {isPlaying ? <Pause size={18} /> : <Music size={18} />}
      </button>
    </>
  );
}