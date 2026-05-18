import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import SEOHead from "@/components/SEOHead";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { useAnalytics } from "@/hooks/use-analytics";
import BackToTop from "@/components/ui/back-to-top";
import KeyboardShortcutsModal from "@/components/portfolio/KeyboardShortcutsModal";
import { useKeyboardShortcuts } from "@/hooks/use-keyboard-shortcuts";

// Static imports for instantaneous rendering without layout flashes
import AchievementsSection from "@/components/portfolio/AchievementsSection";
import TechStackSection from "@/components/portfolio/TechStackSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import QuoteSection from "@/components/portfolio/QuoteSection";
import VisitorCounter from "@/components/portfolio/VisitorCounter";
import { Footer } from "@/components/hover-footer";
import { TestimonialCarousel } from "@/components/profile-card-testimonial-carousel";
import ContactSection from "@/components/portfolio/ContactSection";

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showShortcuts, setShowShortcuts] = useState(false);
  const { progressRef } = useScrollProgress();
  const navigate = useNavigate();
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
        transition={{ duration: 0.2, ease: "easeInOut" }}
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
          
          <ScrollReveal delay={0.1}>
            <section id="about" className="py-12 border-t border-border/40 relative overflow-hidden bg-muted/5">
              <TestimonialCarousel />
            </section>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <AchievementsSection />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <TechStackSection />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <ProjectsSection />
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <QuoteSection />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <ContactSection />
          </ScrollReveal>

          <VisitorCounter />

          <Footer />
        </main>
        
        {/* AI Chat removed */}
        
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
