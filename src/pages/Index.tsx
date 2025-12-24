import { Helmet } from "react-helmet";
import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import TechStackSection from "@/components/portfolio/TechStackSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ContactSection from "@/components/portfolio/ContactSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Ritesh Kumar Singh — Full Stack Developer & Blockchain Engineer</title>
        <meta 
          name="description" 
          content="Full Stack Developer and Blockchain Engineer building end-to-end applications from frontend to smart contracts." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <TechStackSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      </div>
    </>
  );
};

export default Index;