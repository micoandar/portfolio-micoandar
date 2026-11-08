"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Lang = "id" | "en";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; toggle: () => void };

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // 1. UBAH DEFAULT STATE MENJADI "en"
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved === "id" || saved === "en") {
      setLangState(saved);
      document.documentElement.lang = saved;
    } else {
      // 2. JIKA BELUM ADA DI LOCALSTORAGE, PASTIKAN HTML LANG = "en"
      document.documentElement.lang = "en";
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
    document.documentElement.lang = l;
  };

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, toggle: () => setLang(lang === "id" ? "en" : "id") }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}