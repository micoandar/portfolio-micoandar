import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PortfolioTabs from "@/components/PortfolioTabs"; // Hanya ini yang dipanggil
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
        
        {/* Projects, Education, & Skills sudah menyatu di dalam PortfolioTabs */}
        <PortfolioTabs /> 
        
        <Contact />
        <Footer />
      </main>
      
      <BackToTop />
      <MusicPlayer />
    </>
  );
}