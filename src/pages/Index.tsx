import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import AchievementsSection from "@/components/portfolio/AchievementsSection";
import TechStackSection from "@/components/portfolio/TechStackSection";
import LeetCodeStats from "@/components/portfolio/LeetCodeStats";
import GitHubContributions from "@/components/portfolio/GitHubContributions";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import SpotifySection from "@/components/portfolio/SpotifySection";
import AnimeVideoSection from "@/components/portfolio/AnimeVideoSection";
import ContactSection from "@/components/portfolio/ContactSection";
import LoadingScreen from "@/components/portfolio/LoadingScreen";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Always show loading screen on initial mount to prevent white flash
    // Ensure background is set immediately
    document.documentElement.style.backgroundColor = '#0a0a0a';
    document.body.style.backgroundColor = '#0a0a0a';
    setIsLoading(true);
  }, []);

  const handleLoadingComplete = () => {
    // Start transition: fade out loading, fade in content simultaneously
    setIsTransitioning(true);
    setShowContent(true); // Start showing content immediately
    
    // After transition completes, remove loading screen from DOM
    setTimeout(() => {
      setIsLoading(false);
      setIsTransitioning(false);
    }, 500); // Match transition duration
  };

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
      
      {/* Loading Screen - fades out smoothly */}
      {isLoading && (
        <div 
          className={`fixed inset-0 z-[99999] transition-opacity duration-500 ${
            isTransitioning ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <LoadingScreen onComplete={handleLoadingComplete} />
        </div>
      )}
      
      {/* Portfolio Content - always rendered but hidden until ready */}
      <div 
        className={`min-h-screen bg-background relative transition-opacity duration-700 ease-in-out ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
        style={{ 
          willChange: 'opacity',
          backgroundColor: 'hsl(var(--background))',
          pointerEvents: showContent ? 'auto' : 'none',
          visibility: showContent ? 'visible' : 'hidden'
        }}
      >
        <Navbar />
        <main>
          <HeroSection />
          <AchievementsSection />
          <TechStackSection />
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