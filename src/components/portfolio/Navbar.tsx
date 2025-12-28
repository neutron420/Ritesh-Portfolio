import { useState, useEffect } from "react";
import { Menu, X, Download, Terminal, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { TerminalTransition } from "@/components/TerminalTransition";
import ThemeToggle from "./ThemeToggle";
import SearchModal from "./SearchModal";
import { useKeyboardShortcuts } from "@/hooks/use-keyboard-shortcuts";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Keyboard shortcuts
  useKeyboardShortcuts([
    {
      key: "k",
      ctrl: true,
      action: () => setIsSearchOpen(true),
      description: "Open search",
    },
    {
      key: "/",
      action: () => {
        if (!isMobileMenuOpen) {
          setIsSearchOpen(true);
        }
      },
      description: "Open search",
    },
    {
      key: "t",
      ctrl: true,
      action: () => {
        // Toggle theme (cycle through)
        const root = document.documentElement;
        const isDark = root.classList.contains("dark");
        root.classList.toggle("dark");
        localStorage.setItem("portfolio-theme", isDark ? "light" : "dark");
      },
      description: "Toggle theme",
    },
  ]);

  const navItems = [
    { name: "About", href: "#" },
    { name: "Stack", href: "#tech" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "py-2 bg-background/95 backdrop-blur-md border-b border-border/50"
          : "py-3 bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between">
          {/* Logo with Japanese styling */}
          <a
            href="#"
            className="flex items-center gap-3 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              setIsMobileMenuOpen(false);
            }}
          >
            {/* Japanese-inspired logo mark */}
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-2 border-[#ff6b35] group-hover:border-[#ff8555] transition-colors" />
              <span className="text-lg font-bold text-[#ff6b35] group-hover:scale-110 transition-transform">
                理
              </span>
            </div>
            
            {/* Name with Japanese translation */}
            <div className="flex flex-col">
              <span className="text-base font-semibold tracking-tight group-hover:text-accent transition-colors leading-tight">
                Ritesh
              </span>
              <span className="text-[10px] text-muted-foreground tracking-widest leading-tight">
                リテシュ
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                {item.name}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-accent transition-all duration-300 group-hover:w-1/2" />
              </a>
            ))}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="ml-2 px-3 py-2 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all"
              title="Search (Ctrl+K or /)"
            >
              <Search className="w-4 h-4" />
              <span className="hidden lg:inline">Search</span>
              <kbd className="hidden lg:inline kbd-shortcut">Ctrl+K</kbd>
            </button>
            <ThemeToggle />
            <TerminalTransition to="/terminal">
              <div className="ml-2 px-3 sm:px-4 py-2 sm:py-2.5 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-mono font-medium rounded-lg bg-[#0d1117] text-[#39d353] hover:bg-[#161b22] transition-all hover:scale-105 shadow-lg hover:shadow-xl border border-[#39d353]/30 hover:border-[#39d353]/50 backdrop-blur-sm group relative overflow-hidden">
                <span className="absolute inset-0 bg-[#39d353]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4 relative z-10 flex-shrink-0" />
                <span className="relative z-10 flex items-center gap-1 sm:gap-1.5">
                  <span className="text-[#39d353] hidden lg:inline">ritesh@portfolio</span>
                  <span className="text-[#39d353] lg:hidden">ritesh</span>
                  <span className="text-[#8b949e]">:</span>
                  <span className="text-[#58a6ff]">~</span>
                  <span className="text-[#8b949e]">$</span>
                </span>
              </div>
            </TerminalTransition>
            <a
              href="/resume.pdf"
              download="Ritesh_Singh_Resume.pdf"
              className="ml-2 px-4 py-2 flex items-center gap-2 text-sm font-medium rounded-full bg-accent text-accent-foreground hover:bg-accent/90 transition-all hover:scale-105"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border/50 pt-4 animate-fade-in">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
                >
                  {item.name}
                </a>
              ))}
              <TerminalTransition to="/terminal">
                <div
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-2 mx-4 px-3 sm:px-4 py-2.5 sm:py-3 flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-mono font-medium rounded-lg bg-[#0d1117] text-[#39d353] hover:bg-[#161b22] transition-all shadow-lg border border-[#39d353]/30 hover:border-[#39d353]/50 group relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-[#39d353]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4 relative z-10 flex-shrink-0" />
                  <span className="relative z-10 flex items-center gap-1 sm:gap-1.5">
                    <span className="text-[#39d353]">ritesh</span>
                    <span className="text-[#8b949e]">:</span>
                    <span className="text-[#58a6ff]">~</span>
                    <span className="text-[#8b949e]">$</span>
                  </span>
                </div>
              </TerminalTransition>
              <a
                href="/resume.pdf"
                download="Ritesh_Singh_Resume.pdf"
                className="mt-2 mx-4 px-4 py-3 flex items-center justify-center gap-2 text-sm font-medium rounded-full bg-accent text-accent-foreground hover:bg-accent/90 transition-all"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </nav>
        )}
      </div>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  );
};

export default Navbar;
