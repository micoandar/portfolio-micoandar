"use client";

import Carousel from "@/components/Carousel";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Projects() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Membungkus ProjectCard menjadi elemen ReactNode untuk Carousel
  const carouselItems = projects.map((project, i) => (
    <div key={project.slug} className="w-full h-full">
      <ProjectCard project={project} index={i} />
    </div>
  ));

  return (
    <div id="proyek" className="flex w-full justify-center py-4">
      {mounted && (
        <Carousel
          items={carouselItems}
          baseWidth={380}          // Lebar kartu (responsif, akan mengecil di HP)
          aspectRatio={0.75}       // Tinggi kartu (karena ProjectCard memanjang ke bawah)
          effect="tilt"            // Efek 3D miring yang keren
          indicator="dots"         // Navigasi titik di bawah
          frame={true}             // Panel kaca di latar belakang
          arrows={true}            // Tombol panah kiri/kanan
          loop={true}              // Bisa diputar tanpa henti
          autoplay={true}          // Berputar otomatis
          autoplayDelay={4000}     // Jeda 4 detik
          pauseOnHover={true}      // Berhenti saat kursor diarahkan
          draggable={true}         // Bisa di-swipe (mobile) atau di-drag (desktop)
          theme={resolvedTheme === "dark" ? "dark" : "light"} // Sinkronisasi tema
        />
      )}
    </div>
  );
}