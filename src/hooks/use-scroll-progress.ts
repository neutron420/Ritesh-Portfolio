import { useEffect, useRef, useCallback } from "react";

export const useScrollProgress = () => {
  const progressRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastScrollRef = useRef(0);

  const updateProgress = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? scrollTop / docHeight : 0;
    
    // Update CSS variable directly for smooth GPU-accelerated animation
    if (progressRef.current) {
      progressRef.current.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;
    }
    
    rafRef.current = null;
  }, []);

  const handleScroll = useCallback(() => {
    // Use requestAnimationFrame for smooth updates
    if (rafRef.current === null) {
      rafRef.current = requestAnimationFrame(updateProgress);
    }
  }, [updateProgress]);

  useEffect(() => {
    // Initial update
    updateProgress();
    
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleScroll, updateProgress]);

  return { progressRef };
};
