"use client";

import { useState, useEffect } from "react";
import { Code2, Award, Cpu } from "lucide-react";
import { useTheme } from "next-themes";
import Section from "@/components/ui/Section";
import GooeyNav from "@/components/GooeyNav"; // <-- Import komponen GooeyNav

// Import komponen konten
import Projects from "./Projects";
import Skills from "./Skills";
import Education from "./Education";

export default function PortfolioTabs() {
  // Menggunakan angka (index) untuk state agar sinkron dengan GooeyNav (0, 1, 2)
  const [activeTab, setActiveTab] = useState(0);
  const { theme } = useTheme();

  // Sinkronisasi dengan Navbar utama (jika URL berubah)
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

  // Item untuk GooeyNav (tanpa href agar menjadi tombol tab)
  const navItems = [
    { label: "Projects", icon: <Code2 size={16} /> },
    { label: "Education & Certs", icon: <Award size={16} /> },
    { label: "Tech Stack", icon: <Cpu size={16} /> },
  ];

  return (
    <Section id="portfolio" title="Portfolio">
      {/* Navigasi Tab menggunakan GooeyNav */}
      <div className="mb-12 flex justify-center">
        <GooeyNav
          items={navItems}
          activeIndex={activeTab}
          onChange={(index) => setActiveTab(index)}
          theme={theme === "dark" ? "dark" : "light"}
          size="md" // Ukuran disesuaikan (sm, md, lg)
          frame={true} // Menambahkan efek kaca di belakang tab
          particleCount={15}
          animationTime={600}
        />
      </div>

      {/* Konten Tab */}
      <div className="min-h-[500px]">
        {activeTab === 0 && <Projects />}
        {activeTab === 1 && <Education />}
        {activeTab === 2 && <Skills />}
      </div>
    </Section>
  );
}