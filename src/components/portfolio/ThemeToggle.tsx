import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { memo, useCallback } from "react";

const ThemeToggle = memo(() => {
  const { theme, setTheme } = useTheme();
  
  // Determine if currently dark (either explicit dark or system preference dark)
  const isDark = theme === "dark" || 
    (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  const toggleTheme = useCallback(() => {
    setTheme(isDark ? "light" : "dark");
  }, [isDark, setTheme]);

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2.5 rounded-xl bg-muted/50 hover:bg-muted border border-border/50 hover:border-border active:scale-95 transition-all duration-200 touch-manipulation overflow-hidden group"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative w-4 h-4">
        {/* Sun icon - visible in dark mode */}
        <Sun 
          className={`absolute inset-0 w-4 h-4 text-amber-500 transition-all duration-300 ${
            isDark 
              ? "opacity-100 rotate-0 scale-100" 
              : "opacity-0 -rotate-90 scale-0"
          }`}
        />
        {/* Moon icon - visible in light mode */}
        <Moon 
          className={`absolute inset-0 w-4 h-4 text-slate-700 dark:text-slate-400 transition-all duration-300 ${
            isDark 
              ? "opacity-0 rotate-90 scale-0" 
              : "opacity-100 rotate-0 scale-100"
          }`}
        />
      </div>
    </button>
  );
});

ThemeToggle.displayName = 'ThemeToggle';

export default ThemeToggle;
