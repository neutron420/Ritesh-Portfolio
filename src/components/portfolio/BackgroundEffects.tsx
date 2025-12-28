import { useEffect, useState } from "react";
import { useTheme } from "@/components/ThemeProvider";

const BackgroundEffects = () => {
  const { theme } = useTheme();
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    const isDarkMode = root.classList.contains("dark");
    setIsDark(isDarkMode);

    const observer = new MutationObserver(() => {
      setIsDark(root.classList.contains("dark"));
    });

    observer.observe(root, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, [theme]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Main animated gradient orbs - Orange themed */}
      <div className="absolute inset-0">
        {isDark ? (
          <>
            {/* Dark mode: Vibrant orange glowing orbs - MORE VISIBLE */}
            {/* Top left - Large primary orb */}
            <div 
              className="absolute top-10 left-10 w-[500px] h-[500px] bg-[#ff6b35]/30 rounded-full blur-3xl bg-effect-float bg-effect-pulse" 
              style={{ animationDelay: "0s" }}
            />
            {/* Top right - Medium orb */}
            <div 
              className="absolute top-20 right-20 w-[400px] h-[400px] bg-[#ff8555]/25 rounded-full blur-3xl bg-effect-float-slow" 
              style={{ animationDelay: "3s" }}
            />
            {/* Middle left - Large secondary orb */}
            <div 
              className="absolute top-1/2 left-0 -translate-y-1/2 w-[450px] h-[450px] bg-[#ff6b35]/28 rounded-full blur-3xl bg-effect-float" 
              style={{ animationDelay: "1.5s" }}
            />
            {/* Bottom right - Medium orb */}
            <div 
              className="absolute bottom-20 right-1/4 w-[380px] h-[380px] bg-[#ff8555]/22 rounded-full blur-3xl bg-effect-float-slow bg-effect-pulse" 
              style={{ animationDelay: "4.5s" }}
            />
            {/* Bottom left - Small accent orb */}
            <div 
              className="absolute bottom-10 left-1/3 w-[300px] h-[300px] bg-[#ff6b35]/25 rounded-full blur-3xl bg-effect-float" 
              style={{ animationDelay: "2.5s" }}
            />
            {/* Center right - Medium orb */}
            <div 
              className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-[#ff6b35]/20 rounded-full blur-3xl bg-effect-float-slow" 
              style={{ animationDelay: "6s" }}
            />
            
            {/* Orange grid pattern for dark mode - MORE VISIBLE */}
            <div
              className="absolute inset-0 bg-grid-pulse"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255, 107, 53, 0.15) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 107, 53, 0.15) 1px, transparent 1px)
                `,
                backgroundSize: "60px 60px",
              }}
            />
            
            {/* Additional orange accent lines - MORE VISIBLE */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `
                  linear-gradient(45deg, transparent 30%, rgba(255, 107, 53, 0.15) 50%, transparent 70%),
                  linear-gradient(-45deg, transparent 30%, rgba(255, 107, 53, 0.15) 50%, transparent 70%)
                `,
                backgroundSize: "200px 200px",
              }}
            />
          </>
        ) : (
          <>
            {/* Light mode: Bright orange orbs with good contrast - MORE VISIBLE */}
            {/* Top left - Large primary orb */}
            <div 
              className="absolute top-10 left-10 w-[500px] h-[500px] bg-[#ff6b35]/35 rounded-full blur-3xl bg-effect-float bg-effect-pulse" 
              style={{ animationDelay: "0s" }}
            />
            {/* Top right - Medium orb */}
            <div 
              className="absolute top-20 right-20 w-[400px] h-[400px] bg-[#ff8555]/30 rounded-full blur-3xl bg-effect-float-slow" 
              style={{ animationDelay: "3s" }}
            />
            {/* Middle left - Large secondary orb */}
            <div 
              className="absolute top-1/2 left-0 -translate-y-1/2 w-[450px] h-[450px] bg-[#ff6b35]/32 rounded-full blur-3xl bg-effect-float" 
              style={{ animationDelay: "1.5s" }}
            />
            {/* Bottom right - Medium orb */}
            <div 
              className="absolute bottom-20 right-1/4 w-[380px] h-[380px] bg-[#ff8555]/28 rounded-full blur-3xl bg-effect-float-slow bg-effect-pulse" 
              style={{ animationDelay: "4.5s" }}
            />
            {/* Bottom left - Small accent orb */}
            <div 
              className="absolute bottom-10 left-1/3 w-[300px] h-[300px] bg-[#ff6b35]/30 rounded-full blur-3xl bg-effect-float" 
              style={{ animationDelay: "2.5s" }}
            />
            {/* Center right - Medium orb */}
            <div 
              className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-[#ff6b35]/25 rounded-full blur-3xl bg-effect-float-slow" 
              style={{ animationDelay: "6s" }}
            />
            
            {/* Orange grid pattern for light mode - MORE VISIBLE */}
            <div
              className="absolute inset-0 opacity-50"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255, 107, 53, 0.18) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 107, 53, 0.18) 1px, transparent 1px)
                `,
                backgroundSize: "60px 60px",
              }}
            />
            
            {/* Additional orange accent lines for light mode - MORE VISIBLE */}
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage: `
                  linear-gradient(45deg, transparent 30%, rgba(255, 107, 53, 0.20) 50%, transparent 70%),
                  linear-gradient(-45deg, transparent 30%, rgba(255, 107, 53, 0.20) 50%, transparent 70%)
                `,
                backgroundSize: "200px 200px",
              }}
            />
          </>
        )}
      </div>

      {/* Animated gradient overlay - MORE VIBRANT orange */}
      <div
        className={`absolute inset-0 bg-gradient-animated ${
          isDark
            ? "bg-gradient-to-br from-[#ff6b35]/18 via-[#ff8555]/8 to-[#ff6b35]/18"
            : "bg-gradient-to-br from-[#ff6b35]/28 via-[#ff8555]/12 to-[#ff6b35]/28"
        }`}
      />
      
      {/* Radial gradient from center - MORE VISIBLE Orange glow */}
      <div
        className={`absolute inset-0 ${
          isDark
            ? "bg-radial-gradient from-[#ff6b35]/12 via-transparent to-transparent"
            : "bg-radial-gradient from-[#ff6b35]/22 via-transparent to-transparent"
        }`}
        style={{
          background: isDark
            ? "radial-gradient(circle at 30% 50%, rgba(255, 107, 53, 0.12) 0%, transparent 50%)"
            : "radial-gradient(circle at 30% 50%, rgba(255, 107, 53, 0.22) 0%, transparent 50%)",
        }}
      />
    </div>
  );
};

export default BackgroundEffects;

