import { useState, useEffect, useRef } from "react";
import { Search, X, ArrowRight, FileText, Code, Mail, Github, Linkedin } from "lucide-react";

interface SearchResult {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  category: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const searchResults: SearchResult[] = [
    {
      id: "about",
      title: "About",
      description: "View my bio and introduction",
      href: "#",
      icon: <FileText className="w-4 h-4" />,
      category: "Navigation",
    },
    {
      id: "tech",
      title: "Stack",
      description: "Technologies and tools I use",
      href: "#tech",
      icon: <Code className="w-4 h-4" />,
      category: "Navigation",
    },
    {
      id: "projects",
      title: "Projects",
      description: "Featured projects and work",
      href: "#projects",
      icon: <Code className="w-4 h-4" />,
      category: "Navigation",
    },
    {
      id: "contact",
      title: "Contact",
      description: "Get in touch with me",
      href: "#contact",
      icon: <Mail className="w-4 h-4" />,
      category: "Navigation",
    },
    {
      id: "github",
      title: "GitHub",
      description: "View my GitHub profile",
      href: "https://github.com/neutron420",
      icon: <Github className="w-4 h-4" />,
      category: "External",
    },
    {
      id: "linkedin",
      title: "LinkedIn",
      description: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/ritesh-singh1/",
      icon: <Linkedin className="w-4 h-4" />,
      category: "External",
    },
  ];

  const filteredResults = searchResults.filter(
    (result) =>
      result.title.toLowerCase().includes(query.toLowerCase()) ||
      result.description.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      setQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev < filteredResults.length - 1 ? prev + 1 : prev));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
      } else if (e.key === "Enter" && filteredResults[selectedIndex]) {
        e.preventDefault();
        const result = filteredResults[selectedIndex];
        if (result.href.startsWith("#")) {
          document.querySelector(result.href)?.scrollIntoView({ behavior: "smooth" });
        } else {
          window.open(result.href, "_blank");
        }
        onClose();
      } else if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredResults, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-transparent flex items-start justify-center pt-[20vh] px-4 animate-fade-in pointer-events-none"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-card border border-border rounded-2xl shadow-2xl overflow-hidden animate-fade-up pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
          <Search className="w-5 h-5 text-muted-foreground" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search... (Projects, Stack, Contact, etc.)"
            className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-sm"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-muted transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto">
          {filteredResults.length > 0 ? (
            <div className="p-2">
              {filteredResults.map((result, index) => (
                <a
                  key={result.id}
                  href={result.href}
                  onClick={(e) => {
                    if (result.href.startsWith("#")) {
                      e.preventDefault();
                      document.querySelector(result.href)?.scrollIntoView({ behavior: "smooth" });
                      onClose();
                    }
                  }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    index === selectedIndex
                      ? "bg-accent text-accent-foreground"
                      : "hover:bg-muted"
                  }`}
                >
                  <div className="text-muted-foreground">{result.icon}</div>
                  <div className="flex-1">
                    <div className="font-medium text-sm">{result.title}</div>
                    <div className="text-xs text-muted-foreground">{result.description}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground" />
                </a>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-muted-foreground text-sm">
              No results found for "{query}"
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2 border-t border-border bg-muted/30 flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="kbd-shortcut">↑↓</kbd> Navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="kbd-shortcut">Enter</kbd> Select
            </span>
            <span className="flex items-center gap-1">
              <kbd className="kbd-shortcut">Esc</kbd> Close
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;

