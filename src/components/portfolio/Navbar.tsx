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

  const navItems = [
    { name: "About", href: "#" },
    { name: "Tech Stack", href: "#tech" },
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
    </header>
  );
};

export default Navbar;
