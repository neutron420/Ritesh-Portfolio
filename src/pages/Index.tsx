import { useState, useEffect, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import MacOSDock from "@/components/mac-os-dock";
import {AIChat} from "@/components/portfolio/AIChat";
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
const ProjectsSection = lazy(() => import("@/components/portfolio/ProjectsSection"));
const SpotifySection = lazy(() => import("@/components/portfolio/SpotifySection"));
const AnimeVideoSection = lazy(() => import("@/components/portfolio/AnimeVideoSection"));
const ContactSection = lazy(() => import("@/components/portfolio/ContactSection"));
const QuoteSection = lazy(() => import("@/components/portfolio/QuoteSection"));
const VisitorCounter = lazy(() => import("@/components/portfolio/VisitorCounter"));
const Footer = lazy(() => import("@/components/hover-footer").then(module => ({ default: module.Footer })));

// Loading skeleton for lazy-loaded sections
const SectionSkeleton = ({ height = "h-64" }: { height?: string }) => (
  <div className="section-container py-12">
    <Skeleton className={`w-full ${height} rounded-xl`} />
  </div>
);

const dockApps = [
  { id: 'hero', name: 'Finder', icon: 'https://cdn.jim-nielsen.com/macos/1024/finder-2021-09-10.png?rf=1024' },
  { id: 'achievements', name: 'Awards', icon: 'https://cdn.jim-nielsen.com/macos/1024/notes-2021-05-25.png?rf=1024' },
  { id: 'tech', name: 'Terminal', icon: 'https://cdn.jim-nielsen.com/macos/1024/terminal-2021-06-03.png?rf=1024' },
  { id: 'projects', name: 'Portfolio', icon: 'https://cdn.jim-nielsen.com/macos/1024/photos-2021-05-28.png?rf=1024' },
  { id: 'spotify', name: 'Music', icon: 'https://cdn.jim-nielsen.com/macos/1024/music-2021-05-25.png?rf=1024' },
  { id: 'anime', name: 'TV', icon: 'https://images.icon-icons.com/3053/PNG/512/tv_macos_bigsur_icon_189672.png' },
  { id: 'contact', name: 'Mail', icon: 'https://cdn.jim-nielsen.com/macos/1024/mail-2021-05-25.png?rf=1024' },
];

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showShortcuts, setShowShortcuts] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { progressRef } = useScrollProgress();
  const navigate = useNavigate();
  useAnalytics();



  const handleAppClick = (id: string) => {
    if (id === 'tech') {
      navigate('/terminal');
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offset for navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    dockApps.forEach((app) => {
      const element = document.getElementById(app.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

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
    // Ensure background is set immediately
    document.documentElement.style.backgroundColor = '#0a0a0a';
    document.body.style.backgroundColor = '#0a0a0a';
  }, []);



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
      
      {/* Portfolio Content */}
      
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

          
          <Suspense fallback={<SectionSkeleton height="h-96" />}>
            <ScrollReveal delay={0.1}>
              <TechStackSection />
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

          <Suspense fallback={<SectionSkeleton height="h-32" />}>
            <ScrollReveal delay={0.1}>
              <QuoteSection />
            </ScrollReveal>
          </Suspense>

          <Suspense fallback={<SectionSkeleton height="h-24" />}>
            <VisitorCounter />
          </Suspense>

          <Suspense fallback={<SectionSkeleton height="h-32" />}>
            <Footer />
          </Suspense>
        </main>
        
        {/* AI Chat */}
        <AIChat />
        
        {/* Back to Top Button */}
        <BackToTop />
        
        {/* Keyboard Shortcuts Modal */}
        <KeyboardShortcutsModal 
          isOpen={showShortcuts} 
          onClose={() => setShowShortcuts(false)} 
        />
        {/* Floating Dock */}
        <div className="fixed bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-40 px-4 w-full flex justify-center pointer-events-none">
          <div className="pointer-events-auto">
            <MacOSDock
              apps={dockApps}
              onAppClick={handleAppClick}
              openApps={[activeSection]}
              className="max-w-[95vw] sm:max-w-none"
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Index;
