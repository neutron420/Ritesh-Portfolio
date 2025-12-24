import Navigation from "@/components/portfolio/Navigation";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import TechStack from "@/components/portfolio/TechStack";
import Projects from "@/components/portfolio/Projects";
import Experience from "@/components/portfolio/Experience";
import Contact from "@/components/portfolio/Contact";
import AnimeSection from "@/components/portfolio/AnimeSection";
import Footer from "@/components/portfolio/Footer";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Ritesh Kumar Singh — Full Stack Developer & Blockchain Engineer</title>
        <meta 
          name="description" 
          content="Building robust systems from frontend to smart contracts. Full stack developer and blockchain engineer crafting digital experiences with precision." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      
      <div className="min-h-screen bg-background noise">
        <Navigation />
        <main>
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <Experience />
          <Contact />
          <AnimeSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
