"use client";

import Carousel from "@/components/Carousel";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Projects() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const carouselItems = projects.map((project, i) => (
    <div key={project.slug} className="w-full h-full">
      <ProjectCard project={project} index={i} />
    </div>
  ));

  return (
    <div id="proyek" className="flex w-full justify-center py-4 px-2 sm:px-0">
      {mounted && (
        <div className="w-full max-w-full flex justify-center">
          <Carousel
            items={carouselItems}
            // PERBAIKAN: Kartu dibuat lebih besar di desktop (540px) & rasio mendekati kotak (0.95)
            baseWidth={isMobile ? 340 : 540}
            aspectRatio={isMobile ? 0.65 : 0.95} 
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