import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { useState, useCallback, memo } from "react";

const ThemeToggle = memo(() => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    { value: "light" as const, icon: Sun, label: "Light" },
    { value: "dark" as const, icon: Moon, label: "Dark" },
    { value: "system" as const, icon: Monitor, label: "System" },
  ];

  const currentTheme = themes.find((t) => t.value === theme) || themes[2];
  const CurrentIcon = currentTheme.icon;

  const handleThemeChange = useCallback((newTheme: typeof theme) => {
    setTheme(newTheme);
    setIsOpen(false);
  }, [setTheme]);

  const toggleOpen = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <div className="relative">
      <button
        onClick={toggleOpen}
        className="p-2.5 rounded-xl hover:bg-muted active:scale-95 transition-all duration-150 relative overflow-hidden touch-manipulation"
        aria-label={`Toggle theme. Current: ${currentTheme.label}`}
        aria-expanded={isOpen}
        aria-haspopup="true"
        title={`Current: ${currentTheme.label}`}
      >
        <CurrentIcon className="w-4 h-4 transition-transform duration-200" />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={closeMenu}
          />
          <div 
            className="absolute right-0 top-full mt-2 w-40 bg-card border border-border rounded-xl shadow-xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150"
            role="menu"
            aria-orientation="vertical"
          >
            {themes.map((themeOption) => {
              const Icon = themeOption.icon;
              const isActive = theme === themeOption.value;
              return (
                <button
                  key={themeOption.value}
                  onClick={() => handleThemeChange(themeOption.value)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors touch-manipulation ${
                    isActive
                      ? "bg-accent text-accent-foreground"
                      : "hover:bg-muted active:bg-muted/80"
                  }`}
                  role="menuitem"
                  aria-current={isActive ? "true" : undefined}
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                  <span className="font-medium">{themeOption.label}</span>
                  {isActive && (
                    <span className="ml-auto text-xs font-bold">✓</span>
                  )}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
});

ThemeToggle.displayName = 'ThemeToggle';

export default ThemeToggle;
