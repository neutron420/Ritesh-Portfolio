import { Helmet } from "react-helmet";
import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import AchievementsSection from "@/components/portfolio/AchievementsSection";
import TechStackSection from "@/components/portfolio/TechStackSection";
import TerminalSection from "@/components/portfolio/TerminalSection";
import LeetCodeStats from "@/components/portfolio/LeetCodeStats";
import GitHubContributions from "@/components/portfolio/GitHubContributions";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import SpotifySection from "@/components/portfolio/SpotifySection";
import AnimeVideoSection from "@/components/portfolio/AnimeVideoSection";
import ContactSection from "@/components/portfolio/ContactSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Ritesh Singh — Full Stack Developer & Blockchain Engineer</title>
        <meta 
          name="description" 
          content="Full Stack Developer and Blockchain Engineer. SIH Finalist 2025, Cardano Hackathon Finalist. Building end-to-end applications from frontend to smart contracts." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AchievementsSection />
          <TechStackSection />
          <TerminalSection />
          <LeetCodeStats />
          <GitHubContributions />
          <ProjectsSection />
          <SpotifySection />
          <AnimeVideoSection />
          <ContactSection />
        </main>
      </div>
    </>
  );
};

export default Index;