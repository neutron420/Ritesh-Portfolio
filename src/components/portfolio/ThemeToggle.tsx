import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  const handleThemeChange = useCallback((newTheme: typeof theme) => {
    setTheme(newTheme);
    setIsOpen(false);
  }, [setTheme]);

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg hover:bg-muted transition-colors relative overflow-hidden"
        aria-label={`Toggle theme. Current: ${currentTheme.label}`}
        aria-expanded={isOpen}
        aria-haspopup="true"
        title={`Current: ${currentTheme.label}`}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={theme}
            initial={{ rotate: -90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <CurrentIcon className="w-4 h-4" />
          </motion.div>
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div 
              className="absolute right-0 top-full mt-2 w-36 bg-card border border-border rounded-lg shadow-lg z-50 overflow-hidden"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              role="menu"
              aria-orientation="vertical"
            >
              {themes.map((themeOption, index) => {
                const Icon = themeOption.icon;
                const isActive = theme === themeOption.value;
                return (
                  <motion.button
                    key={themeOption.value}
                    onClick={() => handleThemeChange(themeOption.value)}
                    className={`w-full flex items-center gap-2 px-3 py-2 text-sm transition-colors ${
                      isActive
                        ? "bg-accent text-accent-foreground"
                        : "hover:bg-muted"
                    }`}
                    role="menuitem"
                    aria-current={isActive ? "true" : undefined}
                    whileHover={{ x: 2 }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Icon className="w-4 h-4" aria-hidden="true" />
                    <span>{themeOption.label}</span>
                    {isActive && (
                      <motion.span 
                        className="ml-auto text-xs"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        aria-hidden="true"
                      >
                        ✓
                      </motion.span>
                    )}
                  </motion.button>
                );
              })}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeToggle;
