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
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // 1. TANGKAP SINYAL DARI HERO/ABOUT UNTUK GANTI TAB
  useEffect(() => {
    const handleSwitchTab = (e: Event) => {
      const customEvent = e as CustomEvent<number>;
      setActiveTab(customEvent.detail);
    };

    window.addEventListener("switch-portfolio-tab", handleSwitchTab);
    return () => window.removeEventListener("switch-portfolio-tab", handleSwitchTab);
  }, []);

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
    { label: "Projects", mobileLabel: "Projects", icon: <Code2 size={16} /> },
    { label: "Education & Certs", mobileLabel: "Education", icon: <Award size={16} /> },
    { label: "Tech Stack", mobileLabel: "Tech Stack", icon: <Cpu size={16} /> },
  ];

  return (
    <Section id="portfolio" title="Portfolio">
      
      {/* ================= DESKTOP: GooeyNav ================= */}
      <div className="mb-12 hidden w-full items-center justify-center md:flex">
        {mounted && (
          <GooeyNav
            key={resolvedTheme}
            items={navItems}
            activeIndex={activeTab}
            onChange={(index) => setActiveTab(index)}
            theme={resolvedTheme === "dark" ? "dark" : "light"}
            color={resolvedTheme === "dark" ? "#ffffff" : "#000000"}
            size="md"
            frame={true}
            particleCount={15}
            animationTime={600}
          />
        )}
      </div>

      {/* ================= MOBILE: Segmented Control ================= */}
      <div className="mx-auto mb-8 flex w-full max-w-md items-center gap-1.5 rounded-2xl border border-slate-200 bg-slate-100/50 p-1.5 md:hidden dark:border-slate-800 dark:bg-slate-900/50">
        {navItems.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`flex flex-1 items-center justify-center gap-1.5 rounded-xl py-2.5 text-[11px] font-bold transition-all sm:gap-2 sm:text-xs ${
              activeTab === index
                ? "bg-white text-slate-900 shadow-sm ring-1 ring-slate-200 dark:bg-slate-800 dark:text-white dark:ring-slate-700"
                : "text-slate-500 hover:bg-slate-200/50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-slate-200"
            }`}
          >
            {item.icon}
            <span className="sm:hidden truncate">{item.mobileLabel}</span>
            <span className="hidden sm:inline truncate">{item.label}</span>
          </button>
        ))}
      </div>

      {/* ================= KONTEN ================= */}
      <div className="min-h-[500px]">
        {activeTab === 0 && <Projects />}
        {activeTab === 1 && <Education />}
        {activeTab === 2 && <Skills />}
      </div>

    </Section>
  );
}