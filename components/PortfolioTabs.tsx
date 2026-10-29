"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code2, Award, Cpu } from "lucide-react";
import Section from "@/components/ui/Section";

// Import komponen konten
import Projects from "./Projects";
import Skills from "./Skills";
import Education from "./Education";

export default function PortfolioTabs() {
  const [activeTab, setActiveTab] = useState<'projects' | 'education' | 'skills'>('projects');

  // Sinkronisasi dengan Navbar (jika URL berubah)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#proyek') setActiveTab('projects');
      else if (hash === '#pendidikan') setActiveTab('education');
      else if (hash === '#keahlian') setActiveTab('skills');
    };

    // Cek hash saat pertama dimuat
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const tabs = [
    { id: 'projects', label: 'Projects', icon: Code2 },
    { id: 'education', label: 'Education & Certs', icon: Award },
    { id: 'skills', label: 'Tech Stack', icon: Cpu },
  ] as const;

  return (
    <Section id="portfolio" title="Portfolio">
      {/* Tab Navigation */}
      <div className="mb-12 flex justify-center">
        <div className="flex flex-wrap items-center justify-center gap-1 rounded-full border border-slate-200 bg-white/60 p-1.5 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/60">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                  isActive
                    ? "text-white"
                    : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute inset-0 rounded-full bg-blue-600 shadow-md"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Icon size={16} />
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Konten Tab */}
      <div className="min-h-[500px]">
        {activeTab === 'projects' && <Projects />}
        {activeTab === 'education' && <Education />}
        {activeTab === 'skills' && <Skills />}
      </div>
    </Section>
  );
}