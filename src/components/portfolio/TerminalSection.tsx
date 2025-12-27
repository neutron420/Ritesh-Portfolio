import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Terminal, ChevronRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const TerminalSection = () => {
  const navigate = useNavigate();
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const { ref, isVisible } = useScrollReveal();
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!command.trim()) return;

    const newHistory = [...history, `$ ${command}`];
    
    // Handle different commands
    if (command.toLowerCase().includes("go to ritesh") || command.toLowerCase().includes("ritesh terminal")) {
      newHistory.push("Opening Ritesh's terminal...");
      newHistory.push("Welcome to Ritesh's portfolio terminal!");
      newHistory.push("Type 'help' to see available commands.");
    } else if (command.toLowerCase() === "help") {
      newHistory.push("Available commands:");
      newHistory.push("  - go to ritesh terminal");
      newHistory.push("  - about");
      newHistory.push("  - projects");
      newHistory.push("  - contact");
      newHistory.push("  - clear");
    } else if (command.toLowerCase() === "about") {
      newHistory.push("Ritesh Singh - Full-Stack Engineer & Blockchain Developer");
      newHistory.push("Building end-to-end applications from frontend to smart contracts.");
    } else if (command.toLowerCase() === "projects") {
      newHistory.push("Check out the Projects section below!");
    } else if (command.toLowerCase() === "contact") {
      newHistory.push("Reach out via:");
      newHistory.push("  - Email: fnaticritesh2004@gmail.com");
      newHistory.push("  - GitHub: github.com/neutron420");
      newHistory.push("  - LinkedIn: linkedin.com/in/ritesh-singh1/");
    } else if (command.toLowerCase() === "clear") {
      setHistory([]);
      setCommand("");
      return;
    } else {
      newHistory.push(`Command not found: ${command}`);
      newHistory.push("Type 'help' for available commands.");
    }

    setHistory(newHistory);
    setCommand("");
  };

  // Auto-scroll to bottom when history updates
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <section id="terminal" className="py-12 md:py-16">
      <div 
        ref={ref}
        className={`section-container scroll-reveal ${isVisible ? 'visible' : ''}`}
      >
        <h2 className="text-xl md:text-2xl font-semibold mb-6">Terminal</h2>
        
        <div className="bg-card border border-border rounded-lg overflow-hidden shadow-lg">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="flex items-center gap-2 ml-4">
              <Terminal className="w-4 h-4 text-muted-foreground" />
              <span className="text-xs text-muted-foreground font-mono">ritesh@portfolio</span>
            </div>
          </div>

          {/* Terminal Body */}
          <div ref={terminalBodyRef} className="p-4 bg-card min-h-[300px] max-h-[400px] overflow-y-auto">
            <div className="font-mono text-sm space-y-1">
              {/* Welcome message */}
              {history.length === 0 && (
                <div className="text-muted-foreground mb-4">
                  <div>Welcome to Ritesh's Portfolio Terminal</div>
                  <div className="mt-2">Type 'help' to see available commands or use the quick action button below.</div>
                </div>
              )}

              {/* Command history */}
              {history.map((line, index) => (
                <div 
                  key={index}
                  className={line.startsWith("$") ? "text-accent" : "text-foreground"}
                >
                  {line}
                </div>
              ))}

              {/* Current input */}
              <form onSubmit={handleCommand} className="flex items-center gap-2 mt-2">
                <span className="text-accent">$</span>
                <input
                  type="text"
                  value={command}
                  onChange={(e) => setCommand(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-foreground font-mono"
                  placeholder="Type a command..."
                  autoFocus
                />
              </form>
            </div>
          </div>

          {/* Quick Action Button */}
          <div className="px-4 py-3 border-t border-border bg-muted/30">
            <button
              onClick={() => {
                navigate("/terminal");
              }}
              className="flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all text-sm font-medium group w-full sm:w-auto"
            >
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              Open Full Terminal
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerminalSection;

