import { useState, useEffect, useCallback } from "react";

interface SectionProgress {
  sectionId: string;
  progress: number;
  isVisible: boolean;
}

export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [sectionProgress, setSectionProgress] = useState<SectionProgress[]>([]);

  const calculateProgress = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    setScrollProgress(Math.min(100, Math.max(0, progress)));

    // Calculate section visibility
    const sections = document.querySelectorAll("section[id]");
    const newSectionProgress: SectionProgress[] = [];

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;

      // Calculate how much of the section is visible
      let visibleHeight = 0;
      if (sectionTop < 0) {
        visibleHeight = Math.min(sectionHeight + sectionTop, viewportHeight);
      } else if (sectionTop < viewportHeight) {
        visibleHeight = Math.min(sectionHeight, viewportHeight - sectionTop);
      }

      const sectionVisibility = Math.max(0, Math.min(1, visibleHeight / Math.min(sectionHeight, viewportHeight)));
      
      newSectionProgress.push({
        sectionId: section.id,
        progress: sectionVisibility * 100,
        isVisible: sectionVisibility > 0.1,
      });
    });

    setSectionProgress(newSectionProgress);
  }, []);

  useEffect(() => {
    calculateProgress();
    window.addEventListener("scroll", calculateProgress, { passive: true });
    window.addEventListener("resize", calculateProgress, { passive: true });

    return () => {
      window.removeEventListener("scroll", calculateProgress);
      window.removeEventListener("resize", calculateProgress);
    };
  }, [calculateProgress]);

  return { scrollProgress, sectionProgress };
};
