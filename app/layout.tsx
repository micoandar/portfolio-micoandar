import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SfxProvider } from "@/contexts/SfxContext";
import GlobalStarfield from "@/components/GlobalStarfield";
import { profile } from "@/data/profile";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: `${profile.name} — Full Stack Developer`,
  description: profile.summary.en.slice(0, 155),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning className={inter.variable}>
      <body className="font-sans transition-colors duration-300">
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark" // <-- PERBAIKAN: Diubah dari "light" menjadi "dark"
          enableSystem={false}
        >
          <LanguageProvider>
            <SfxProvider>
              
              <GlobalStarfield />

              <div className="relative z-10">
                {children}
              </div>

            </SfxProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}}