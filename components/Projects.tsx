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
    <div id="proyek" className="flex w-full justify-center py-4">
      {mounted && (
        <Carousel
          items={carouselItems}
          baseWidth={380}          
          aspectRatio={0.6}        // <-- PERBAIKAN: Diubah dari 0.75 ke 0.6 agar lebih tinggi
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
      )}
    </div>
  );
}