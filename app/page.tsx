import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PortfolioTabs from "@/components/PortfolioTabs"; // <-- Import komponen baru
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        
        {/* Menggabungkan Projects, Skills, dan Education menjadi 1 Tab */}
        <PortfolioTabs /> 
        
        <Contact />
        <Footer />
      </main>
      
      <BackToTop />
      <MusicPlayer />
    </>
  );
}