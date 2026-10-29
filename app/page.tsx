import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About"; // <-- Dikembalikan
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <About /> {/* <-- Section About Me muncul lagi di sini */}
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
      
      <BackToTop />
      <MusicPlayer />
    </main>
  );
}