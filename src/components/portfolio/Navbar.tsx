import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#" },
    { name: "Tech Stack", href: "#tech" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-background/95 backdrop-blur-md border-b border-border/50"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-lg font-bold tracking-tight hover:text-accent transition-colors flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-accent-foreground font-bold text-sm">
              R
            </span>
            <span className="hidden sm:inline">Ritesh</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
              >
                {item.name}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download="Ritesh_Singh_Resume.pdf"
              className="ml-2 px-4 py-2 flex items-center gap-2 text-sm font-medium rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-all"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
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
            <div className="flex flex-col gap-2">
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
              <a
                href="/resume.pdf"
                download="Ritesh_Singh_Resume.pdf"
                className="mt-2 px-4 py-3 flex items-center justify-center gap-2 text-sm font-medium rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-all"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;