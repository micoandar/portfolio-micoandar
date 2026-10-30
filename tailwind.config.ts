import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc",
          400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca",
          800: "#3730a3", 900: "#312e81",
        },
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        breathe: {
          "0%, 100%": { transform: "translateY(0px) scale(1)" },
          "50%": { transform: "translateY(-10px) scale(1.15)" },
        },
        // ANIMASI BARU UNTUK DESKTOP (Melayang + Rotasi 3D tipis)
        levitate: {
          "0%, 100%": { transform: "translateY(0px) rotateX(0deg) rotateY(0deg) scale(1)" },
          "25%": { transform: "translateY(-12px) rotateX(2deg) rotateY(-2deg) scale(1.03)" },
          "50%": { transform: "translateY(-20px) rotateX(0deg) rotateY(0deg) scale(1.06)" },
          "75%": { transform: "translateY(-12px) rotateX(-2deg) rotateY(2deg) scale(1.03)" },
        },
        "levitate-shadow": {
          "0%, 100%": { transform: "scale(1) translateY(0px)", opacity: "0.5" },
          "50%": { transform: "scale(0.85) translateY(20px)", opacity: "0.1" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.45", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.08)" },
        },
        "border-pulse": {
          "0%, 100%": { opacity: "0.15" },
          "50%": { opacity: "0.9" },
        },
        scanline: {
          "0%": { transform: "translateY(-600px)", opacity: "0" },
          "10%": { opacity: "0.7" },
          "90%": { opacity: "0.7" },
          "100%": { transform: "translateY(600px)", opacity: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        breathe: "breathe 4s cubic-bezier(0.45, 0, 0.55, 1) infinite",
        levitate: "levitate 6s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        "levitate-shadow": "levitate-shadow 6s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        "glow-pulse": "glow-pulse 6s ease-in-out infinite",
        "border-pulse": "border-pulse 6s ease-in-out infinite",
        scanline: "scanline 4s linear infinite",
        "fade-in": "fade-in 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;