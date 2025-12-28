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
import BackgroundEffects from "@/components/portfolio/BackgroundEffects";
import LoadingScreen from "@/components/portfolio/LoadingScreen";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Show loading screen only on page refresh/reload
    // Use a combination of checks to detect refresh
    const wasRefreshed = 
      // Check Performance Navigation API
      (performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming)?.type === 'reload' ||
      // Check if page was reloaded (legacy API)
      (performance.navigation && performance.navigation.type === 1) ||
      // Check if it's a direct visit (no referrer or external referrer)
      (!document.referrer || !document.referrer.includes(window.location.host));
    
    if (!wasRefreshed) {
      // Not a refresh, skip loading screen
      setIsLoading(false);
      setShowContent(true);
    }
    // If it's a refresh, keep isLoading = true to show loading screen
  }, []);

  const handleLoadingComplete = () => {
    // Immediately hide loading and show content
    setIsLoading(false);
    setShowContent(true);
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
      
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      
      {!isLoading && (
        <div 
          className={`min-h-screen bg-background relative transition-opacity duration-500 ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
        >
        <BackgroundEffects />
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
      )}
    </>
  );
};

export default Index;