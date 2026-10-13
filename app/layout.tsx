import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.summary.slice(0, 155),
  keywords: [
    "Micoandar Justinus Marbun",
    "Full Stack Developer",
    "AI Engineer",
    "Computer Vision",
    "React",
    "FastAPI",
    "YOLO",
    "Portfolio",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.summary.slice(0, 155),
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}