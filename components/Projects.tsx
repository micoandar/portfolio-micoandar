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

  const carouselItems = projects.map((project, i) => (
    <div key={project.slug} className="w-full h-full">
      <ProjectCard project={project} index={i} />
    </div>
  ));

  return (
    <div id="proyek" className="flex w-full justify-center py-4 px-2 sm:px-0">
      {mounted && (
        // Tambahkan max-w-full agar tidak pernah melebihi lebar layar HP
        <div className="w-full max-w-full flex justify-center">
          <Carousel
            items={carouselItems}
            baseWidth={360}          // Sedikit dikecilkan dari 380 agar aman di HP kecil
            aspectRatio={0.65}       // Sedikit dilonggarkan dari 0.6
            effect="tilt"            
            indicator="dots"         
            frame={true}             
            arrows={true}            
            loop={true}              
            autoplay={true}          
            autoplayDelay={4000}     
            pauseOnHover={true}      
            draggable={true}         
            theme={resolvedTheme === "dark" ? "dark" : "light"} 
          />
        </div>
      )}
    </div>
  );
}