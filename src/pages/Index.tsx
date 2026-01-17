import { useState, useEffect, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import LoadingScreen from "@/components/portfolio/LoadingScreen";
import AIChatBox from "@/components/portfolio/AIChatBox";
import SEOHead from "@/components/SEOHead";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { Skeleton } from "@/components/ui/skeleton";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { useAnalytics } from "@/hooks/use-analytics";
import BackToTop from "@/components/ui/back-to-top";
import KeyboardShortcutsModal from "@/components/portfolio/KeyboardShortcutsModal";
import { useKeyboardShortcuts } from "@/hooks/use-keyboard-shortcuts";

// Lazy load sections below the fold for better performance
const AchievementsSection = lazy(() => import("@/components/portfolio/AchievementsSection"));
const TechStackSection = lazy(() => import("@/components/portfolio/TechStackSection"));
const LeetCodeStats = lazy(() => import("@/components/portfolio/LeetCodeStats"));
const CurrentlyWorkingOn = lazy(() => import("@/components/portfolio/CurrentlyWorkingOn"));
const ProjectsSection = lazy(() => import("@/components/portfolio/ProjectsSection"));
const SpotifySection = lazy(() => import("@/components/portfolio/SpotifySection"));
const AnimeVideoSection = lazy(() => import("@/components/portfolio/AnimeVideoSection"));
const ContactSection = lazy(() => import("@/components/portfolio/ContactSection"));

// Loading skeleton for lazy-loaded sections
const SectionSkeleton = ({ height = "h-64" }: { height?: string }) => (
  <div className="section-container py-12">
    <Skeleton className={`w-full ${height} rounded-xl`} />
  </div>
);

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showShortcuts, setShowShortcuts] = useState(false);
  const { progressRef } = useScrollProgress();
  useAnalytics();

  // Keyboard shortcuts
  useKeyboardShortcuts([
    {
      key: "?",
      action: () => setShowShortcuts(true),
      description: "Show keyboard shortcuts",
    },
    {
      key: "g",
      action: () => {
        // Wait for second key
        const handleSecondKey = (e: KeyboardEvent) => {
          if (e.key === "h") {
            window.scrollTo({ top: 0, behavior: "smooth" });
          } else if (e.key === "p") {
            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
          } else if (e.key === "c") {
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }
          window.removeEventListener("keydown", handleSecondKey);
        };
        window.addEventListener("keydown", handleSecondKey);
        setTimeout(() => window.removeEventListener("keydown", handleSecondKey), 1000);
      },
      description: "Go to section",
    },
  ]);

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
      <SEOHead />
      
      {/* Scroll Progress Bar - GPU accelerated */}
      <div
        ref={progressRef}
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[60] origin-left will-change-transform"
        style={{ transform: 'scaleX(0)' }}
        aria-hidden="true"
      />
      
      {/* Loading Screen - fades out smoothly */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div 
            className="fixed inset-0 z-[99999]"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LoadingScreen onComplete={handleLoadingComplete} />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Portfolio Content - always rendered but hidden until ready */}
      <motion.div 
        className="min-h-screen bg-background relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        style={{ 
          willChange: 'opacity',
          backgroundColor: 'hsl(var(--background))',
          pointerEvents: showContent ? 'auto' : 'none',
          visibility: showContent ? 'visible' : 'hidden'
        }}
      >
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-accent-foreground focus:rounded-lg"
        >
          Skip to main content
        </a>
        
        <Navbar />
        
        <main id="main-content" role="main" aria-label="Portfolio content">
          <HeroSection />
          
          <Suspense fallback={<SectionSkeleton height="h-48" />}>
            <ScrollReveal delay={0.1}>
              <AchievementsSection />
            </ScrollReveal>
          </Suspense>

          <Suspense fallback={<SectionSkeleton height="h-48" />}>
            <ScrollReveal delay={0.1}>
              <CurrentlyWorkingOn />
            </ScrollReveal>
          </Suspense>
          
          <Suspense fallback={<SectionSkeleton height="h-96" />}>
            <ScrollReveal delay={0.1}>
              <TechStackSection />
            </ScrollReveal>
          </Suspense>
          
          <Suspense fallback={<SectionSkeleton height="h-80" />}>
            <ScrollReveal delay={0.1}>
              <LeetCodeStats />
            </ScrollReveal>
          </Suspense>
          
          <Suspense fallback={<SectionSkeleton height="h-96" />}>
            <ScrollReveal delay={0.1}>
              <ProjectsSection />
            </ScrollReveal>
          </Suspense>
          
          <Suspense fallback={<SectionSkeleton height="h-64" />}>
            <ScrollReveal delay={0.1}>
              <SpotifySection />
            </ScrollReveal>
          </Suspense>
          
          <Suspense fallback={<SectionSkeleton height="h-64" />}>
            <ScrollReveal delay={0.1}>
              <AnimeVideoSection />
            </ScrollReveal>
          </Suspense>
          
          <Suspense fallback={<SectionSkeleton height="h-96" />}>
            <ScrollReveal delay={0.1}>
              <ContactSection />
            </ScrollReveal>
          </Suspense>
        </main>
        
        {/* AI Chat Box */}
        <AIChatBox />
        
        {/* Back to Top Button */}
        <BackToTop />
        
        {/* Keyboard Shortcuts Modal */}
        <KeyboardShortcutsModal 
          isOpen={showShortcuts} 
          onClose={() => setShowShortcuts(false)} 
        />
      </motion.div>
    </>
  );
};

export default Index;
