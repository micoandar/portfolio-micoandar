import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// 1. Tunda loading komponen berat
const About = dynamic(() => import("@/components/About"), { ssr: false });
const PortfolioTabs = dynamic(() => import("@/components/PortfolioTabs"), { ssr: false });
const BackToTop = dynamic(() => import("@/components/BackToTop"), { ssr: false });

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <PortfolioTabs /> 
        <Contact />
        <Footer />
      </main>
      <BackToTop />
    </>
  );
}