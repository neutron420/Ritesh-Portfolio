import { useEffect, useRef, useCallback } from "react";

interface AnalyticsEvent {
  type: "page_view" | "section_view" | "scroll_depth" | "interaction";
  data: Record<string, unknown>;
  timestamp: number;
}

const SCROLL_MILESTONES = [25, 50, 75, 90, 100];

export const useAnalytics = () => {
  const scrollMilestonesReached = useRef<Set<number>>(new Set());
  const sectionsViewed = useRef<Set<string>>(new Set());
  const events = useRef<AnalyticsEvent[]>([]);

  const trackEvent = useCallback((event: Omit<AnalyticsEvent, "timestamp">) => {
    const fullEvent: AnalyticsEvent = {
      ...event,
      timestamp: Date.now(),
    };
    events.current.push(fullEvent);
    
    // Log to console in development
    if (import.meta.env.DEV) {
      console.log("[Analytics]", event.type, event.data);
    }
  }, []);

  const trackPageView = useCallback(() => {
    trackEvent({
      type: "page_view",
      data: {
        path: window.location.pathname,
        referrer: document.referrer,
        userAgent: navigator.userAgent,
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
      },
    });
  }, [trackEvent]);

  const trackScrollDepth = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0;

    SCROLL_MILESTONES.forEach((milestone) => {
      if (scrollPercent >= milestone && !scrollMilestonesReached.current.has(milestone)) {
        scrollMilestonesReached.current.add(milestone);
        trackEvent({
          type: "scroll_depth",
          data: {
            milestone,
            path: window.location.pathname,
          },
        });
      }
    });
  }, [trackEvent]);

  const trackSectionView = useCallback((sectionId: string) => {
    if (!sectionsViewed.current.has(sectionId)) {
      sectionsViewed.current.add(sectionId);
      trackEvent({
        type: "section_view",
        data: {
          sectionId,
          path: window.location.pathname,
        },
      });
    }
  }, [trackEvent]);

  const trackInteraction = useCallback((action: string, label?: string, value?: number) => {
    trackEvent({
      type: "interaction",
      data: {
        action,
        label,
        value,
        path: window.location.pathname,
      },
    });
  }, [trackEvent]);

  useEffect(() => {
    // Track initial page view
    trackPageView();

    // Set up scroll tracking
    const handleScroll = () => {
      trackScrollDepth();

      // Track section views
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.5 && rect.bottom > 0;
        if (isVisible) {
          trackSectionView(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [trackPageView, trackScrollDepth, trackSectionView]);

  return {
    trackEvent,
    trackInteraction,
    trackSectionView,
    getEvents: () => events.current,
  };
};
