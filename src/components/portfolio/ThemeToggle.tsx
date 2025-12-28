import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    { value: "light" as const, icon: Sun, label: "Light" },
    { value: "dark" as const, icon: Moon, label: "Dark" },
    { value: "system" as const, icon: Monitor, label: "System" },
  ];

  const currentTheme = themes.find((t) => t.value === theme) || themes[2];
  const CurrentIcon = currentTheme.icon;

  const handleThemeChange = (newTheme: typeof theme) => {
    setTheme(newTheme);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg hover:bg-muted transition-colors relative"
        aria-label="Toggle theme"
        title={`Current: ${currentTheme.label}`}
      >
        <CurrentIcon className="w-4 h-4" />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full mt-2 w-36 bg-card border border-border rounded-lg shadow-lg z-50 overflow-hidden">
            {themes.map((themeOption) => {
              const Icon = themeOption.icon;
              const isActive = theme === themeOption.value;
              return (
                <button
                  key={themeOption.value}
                  onClick={() => handleThemeChange(themeOption.value)}
                  className={`w-full flex items-center gap-2 px-3 py-2 text-sm transition-colors ${
                    isActive
                      ? "bg-accent text-accent-foreground"
                      : "hover:bg-muted"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{themeOption.label}</span>
                  {isActive && (
                    <span className="ml-auto text-xs">✓</span>
                  )}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default ThemeToggle;

