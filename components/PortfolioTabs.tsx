"use client";

import { useState, useEffect } from "react";
import { Code2, Award, Cpu } from "lucide-react";
import { useTheme } from "next-themes";
import Section from "@/components/ui/Section";
import GooeyNav from "@/components/GooeyNav";

import Projects from "./Projects";
import Skills from "./Skills";
import Education from "./Education";

export default function PortfolioTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#proyek') setActiveTab(0);
      else if (hash === '#pendidikan') setActiveTab(1);
      else if (hash === '#keahlian') setActiveTab(2);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navItems = [
    { label: "Projects", icon: <Code2 size={16} /> },
    { label: "Education & Certs", icon: <Award size={16} /> },
    { label: "Tech Stack", icon: <Cpu size={16} /> },
  ];

  return (
    <Section id="portfolio" title="Portfolio">
      {/* PERBAIKAN: Wrapper overflow-x-auto agar navbar aman & tidak merusak layout di HP */}
      <div className="mb-10 flex w-full justify-center overflow-x-auto pb-4 sm:mb-12">
        <div className="min-w-max px-4">
          <GooeyNav
            items={navItems}
            activeIndex={activeTab}
            onChange={(index) => setActiveTab(index)}
            theme={resolvedTheme === "dark" ? "dark" : "light"}
            color={resolvedTheme === "dark" ? "#ffffff" : "#000000"}
            size="sm" // <-- Ukuran lebih kecil untuk mobile
            frame={true}
            particleCount={15}
            animationTime={600}
          />
        </div>
      </div>

      <div className="min-h-[500px]">
        {activeTab === 0 && <Projects />}
        {activeTab === 1 && <Education />}
        {activeTab === 2 && <Skills />}
      </div>
    </Section>
  );
}