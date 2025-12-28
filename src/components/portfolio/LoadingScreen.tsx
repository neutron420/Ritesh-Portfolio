import { useEffect, useState } from "react";
import { useTheme } from "@/components/ThemeProvider";
import { Code2, Terminal, Zap, Cpu, Sparkles } from "lucide-react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const { theme } = useTheme();
  const [isDark, setIsDark] = useState(true);

  const loadingLines = [
    "[*] Initializing portfolio...",
    "[*] Loading components...",
    "[*] Connecting to APIs...",
    "[*] Compiling assets...",
    "[*] Optimizing performance...",
    "[✓] Portfolio ready!",
  ];

  useEffect(() => {
    const root = document.documentElement;
    const isDarkMode = root.classList.contains("dark");
    setIsDark(isDarkMode);
    setIsMobile(window.innerWidth < 640);

    const observer = new MutationObserver(() => {
      setIsDark(root.classList.contains("dark"));
    });

    observer.observe(root, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, [theme]);

  useEffect(() => {
    // Show content after a brief delay
    const contentTimer = setTimeout(() => setShowContent(true), 200);

    // Simulate loading progress - ensure it reaches 100%
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Faster progress to ensure 100% before 3.5s
        const increment = prev < 30 ? 3.5 : prev < 60 ? 2.5 : prev < 85 ? 2 : 1.5;
        return Math.min(prev + increment, 100);
      });
    }, 25);

    // Update loading lines
    const lineInterval = setInterval(() => {
      setCurrentLine((prev) => {
        const next = prev + 1;
        if (next >= loadingLines.length) {
          clearInterval(lineInterval);
          return prev;
        }
        return next;
      });
    }, 400);

    // Complete loading after 4 seconds
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => {
      clearTimeout(contentTimer);
      clearInterval(progressInterval);
      clearInterval(lineInterval);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[99999] bg-gradient-to-br from-[#0a0a0a] via-[#1a0f0a] to-[#0a0a0a] flex items-center justify-center overflow-hidden safe-area-inset font-mono touch-none" style={{ willChange: 'opacity' }}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />

      {/* Matrix-style text dropdown effect - Green theme - Mobile optimized */}
      <div className="absolute inset-0 overflow-hidden opacity-15 pointer-events-none">
        {Array.from({ length: isMobile ? 10 : 25 }).map((_, i) => (
          <div
            key={`matrix-${i}`}
            className="absolute text-[#00ff41] text-[9px] sm:text-[10px] md:text-[11px] lg:text-xs font-mono font-bold"
            style={{
              left: `${(i * (isMobile ? 10 : 4))}%`,
              animation: `matrix-rain ${3 + (i % 4)}s linear infinite`,
              animationDelay: `${i * 0.12}s`,
              textShadow: '0 0 6px rgba(0,255,65,0.8)',
              willChange: 'transform',
            }}
          >
            {Array.from({ length: isMobile ? 8 : 12 }).map((_, j) => (
              <div 
                key={j} 
                style={{ 
                  opacity: 0.4 + Math.random() * 0.4,
                  color: j === 0 ? '#00ff41' : j === 1 ? '#39d353' : '#00ff88',
                }}
              >
                {String.fromCharCode(0x30A0 + Math.random() * 96)}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Green glow orbs - matching terminal theme - Mobile optimized */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-5 sm:top-20 sm:left-10 w-48 h-48 sm:w-64 sm:h-64 bg-[#00ff41]/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-5 sm:bottom-20 sm:right-10 w-56 h-56 sm:w-80 sm:h-80 bg-[#39d353]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 sm:w-72 sm:h-72 bg-[#00ff41]/12 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* Scanlines effect - Green theme */}
      <div
        className="absolute inset-0 pointer-events-none opacity-8"
        style={{
          background: "repeating-linear-gradient(0deg, rgba(0,255,65,0.1) 0px, rgba(0,255,65,0.1) 1px, transparent 1px, transparent 2px)",
        }}
      />
      
      {/* Additional falling characters - Green accents - Mobile optimized */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        {Array.from({ length: isMobile ? 6 : 15 }).map((_, i) => (
          <div
            key={`falling-${i}`}
            className="absolute font-mono font-bold"
            style={{
              left: `${(i * (isMobile ? 16.67 : 6.67))}%`,
              fontSize: `${Math.random() * 6 + 8}px`,
              color: i % 3 === 0 ? '#00ff41' : i % 3 === 1 ? '#39d353' : '#00ff88',
              animation: `matrix-rain ${4 + (i % 3)}s linear infinite`,
              animationDelay: `${i * 0.2}s`,
              textShadow: i % 3 === 0 ? '0 0 4px rgba(0,255,65,0.6)' : i % 3 === 1 ? '0 0 4px rgba(57,211,83,0.6)' : '0 0 4px rgba(0,255,136,0.6)',
              willChange: 'transform',
            }}
          >
            {String.fromCharCode(0x30A0 + Math.random() * 96)}
          </div>
        ))}
      </div>

      {/* Japanese-inspired decorative elements - Mobile optimized */}
      <div className="absolute top-4 left-4 sm:top-8 sm:left-8 md:top-12 md:left-12 text-[#00ff41]/30 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif pointer-events-none">
        理
      </div>
      <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 md:bottom-12 md:right-12 text-[#00ff41]/30 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif pointer-events-none">
        美
      </div>

      {/* Main terminal window - Mobile optimized */}
      <div
        className={`relative z-10 w-full max-w-2xl mx-2 sm:mx-4 transition-opacity duration-500 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Terminal frame with Japanese aesthetic border - Mobile optimized */}
        <div className="bg-[#0d1117]/95 backdrop-blur-sm border-2 border-[#00ff41]/50 rounded-lg shadow-2xl shadow-[#00ff41]/20 overflow-hidden relative">
          {/* Japanese pattern corner decoration - Responsive */}
          <div className="absolute top-0 left-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border-t-2 border-l-2 border-[#00ff41]/30 rounded-tl-lg" />
          <div className="absolute top-0 right-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border-t-2 border-r-2 border-[#00ff41]/30 rounded-tr-lg" />
          <div className="absolute bottom-0 left-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border-b-2 border-l-2 border-[#00ff41]/30 rounded-bl-lg" />
          <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border-b-2 border-r-2 border-[#00ff41]/30 rounded-br-lg" />
          
          {/* Terminal title bar */}
          <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-black/80 border-b border-[#00ff41]/30">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff0040] shadow-[0_0_8px_rgba(255,0,64,0.8)]" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffaa00] shadow-[0_0_8px_rgba(255,170,0,0.8)]" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#00ff41] shadow-[0_0_8px_rgba(0,255,65,0.8)]" />
            </div>
            <span className="text-[#00ff41] text-[10px] sm:text-xs ml-2 font-mono drop-shadow-[0_0_6px_rgba(0,255,65,0.6)]">
              ritesh@portfolio:~ <span className="text-[#39d353]">リテシュ</span>
            </span>
          </div>

          {/* Terminal content - Mobile optimized */}
          <div className="p-2.5 sm:p-3 md:p-4 lg:p-6 bg-[#0d1117]/95 min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px]">
            {/* Japanese greeting - Mobile responsive */}
            <div className="text-center mb-2 sm:mb-3 md:mb-4">
              <p className="text-[#00ff41] text-xs sm:text-sm md:text-base font-serif mb-0.5 sm:mb-1">
                ようこそ <span className="text-[#39d353]">Welcome</span>
              </p>
            </div>

            {/* ASCII Art - RITESH - Mobile optimized */}
            <div className="text-[#00ff41] text-[5px] sm:text-[7px] md:text-[9px] lg:text-[11px] mb-2 sm:mb-3 md:mb-4 lg:mb-6 leading-tight font-mono text-center overflow-x-auto">
              <pre className="whitespace-pre-wrap text-[5px] sm:text-[7px] md:text-[9px] lg:text-[11px]">
{`██████╗ ██╗████████╗███████╗███████╗██╗  ██╗
██╔══██╗██║╚══██╔══╝██╔════╝██╔════╝██║  ██║
██████╔╝██║   ██║   █████╗  ███████╗███████║
██╔══██╗██║   ██║   ██╔══╝  ╚════██║██╔══██║
██║  ██║██║   ██║   ███████╗███████║██║  ██║
╚═╝  ╚═╝╚═╝   ╚═╝   ╚══════╝╚══════╝╚═╝  ╚═╝`}
              </pre>
            </div>

            {/* Loading commands */}
            <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6 md:mb-8">
              {loadingLines.slice(0, currentLine + 1).map((line, index) => (
                <div
                  key={index}
                  className={`text-[10px] sm:text-xs md:text-sm font-mono ${
                    line.startsWith("[✓]")
                      ? "text-[#00ff41]"
                      : line.startsWith("[*]")
                      ? "text-[#39d353]"
                      : "text-[#8b949e]"
                  }`}
                  style={{
                    animation: index === currentLine ? "blink 1s infinite" : "none",
                  }}
                >
                  <span className="text-[#00ff41]">ritesh@portfolio</span>
                  <span className="text-[#8b949e]">:</span>
                  <span className="text-[#39d353]">~</span>
                  <span className="text-[#8b949e]">$</span>{" "}
                  {line}
                  {index === currentLine && <span className="inline-block w-1.5 h-3 sm:w-2 sm:h-4 bg-[#00ff41] ml-1 animate-pulse">▋</span>}
                </div>
              ))}
            </div>

            {/* Progress bar - terminal style with Japanese aesthetic - Mobile optimized */}
            <div className="mb-2 sm:mb-3 md:mb-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 sm:gap-0 text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-[#8b949e] mb-1 sm:mb-1.5 md:mb-2">
                <span className="flex items-center gap-1 flex-wrap">
                  <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-[#00ff41] flex-shrink-0" />
                  <span className="hidden xs:inline">読み込み中</span>
                  <span className="text-[#39d353]">Loading</span>
                  <span className="hidden sm:inline">:</span>
                  <span className="font-mono text-[8px] sm:text-[9px] md:text-[10px]">[{">".repeat(Math.floor(progress / 5)).padEnd(20, "-")}]</span>
                </span>
                <span className="text-[#00ff41] font-mono drop-shadow-[0_0_6px_rgba(0,255,65,0.6)] text-[9px] sm:text-[10px] md:text-xs">{Math.round(progress)}%</span>
              </div>
              <div className="h-1 sm:h-1.5 md:h-2 bg-[#21262d] rounded-full overflow-hidden border border-[#30363d]/50 relative">
                <div
                  className="h-full bg-gradient-to-r from-[#00ff41] via-[#39d353] to-[#00ff41] transition-all duration-300 ease-out shadow-[0_0_10px_rgba(0,255,65,0.6)] relative"
                  style={{ width: `${progress}%` }}
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                </div>
              </div>
            </div>

            {/* Tech icons row - Japanese style - Mobile optimized */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 mt-3 sm:mt-4 md:mt-6 lg:mt-8 pt-2 sm:pt-3 md:pt-4 border-t border-[#21262d]">
              <div className="flex flex-col items-center gap-0.5 sm:gap-1 text-[#00ff41] group">
                <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 animate-pulse group-hover:scale-110 transition-transform" />
                <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs">コード</span>
                <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs text-[#39d353]">Code</span>
              </div>
              <div className="flex flex-col items-center gap-0.5 sm:gap-1 text-[#00ff41] group">
                <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 animate-pulse group-hover:scale-110 transition-transform" style={{ animationDelay: "0.2s" }} />
                <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs">端末</span>
                <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs text-[#39d353]">Terminal</span>
              </div>
              <div className="flex flex-col items-center gap-0.5 sm:gap-1 text-[#00ff41] group">
                <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 animate-pulse group-hover:scale-110 transition-transform" style={{ animationDelay: "0.4s" }} />
                <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs">高速</span>
                <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs text-[#39d353]">Fast</span>
              </div>
              <div className="flex flex-col items-center gap-0.5 sm:gap-1 text-[#00ff41] group">
                <Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 animate-pulse group-hover:scale-110 transition-transform" style={{ animationDelay: "0.6s" }} />
                <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs">最適化</span>
                <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs text-[#39d353]">Optimized</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Glitch effect overlay - Green */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0 bg-[#00ff41] mix-blend-screen animate-pulse" style={{ clipPath: "inset(40% 0 60% 0)" }} />
        <div className="absolute inset-0 bg-[#39d353] mix-blend-screen animate-pulse" style={{ clipPath: "inset(60% 0 40% 0)", animationDelay: "0.1s" }} />
      </div>
    </div>
  );
};

export default LoadingScreen;

