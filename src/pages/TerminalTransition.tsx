import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TerminalTransitionPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [glitchActive, setGlitchActive] = useState(false);

  const bootSteps = [
    { text: "[*] Initializing terminal session...", delay: 300 },
    { text: "[*] Loading system modules...", delay: 600 },
    { text: "[*] Establishing connection...", delay: 900 },
    { text: "[*] Authenticating user...", delay: 1200 },
    { text: "[*] Bypassing security protocols...", delay: 1500 },
    { text: "[✓] Connection established", delay: 1800 },
    { text: "[✓] Terminal ready", delay: 2100 },
    { text: "[✓] Redirecting to terminal...", delay: 2400 },
  ];

  // Glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 100);
    }, 2000);
    return () => clearInterval(glitchInterval);
  }, []);

  useEffect(() => {
    // Prevent body scroll during transition
    document.body.style.overflow = "hidden";

    // Animate through boot steps
    bootSteps.forEach((step, index) => {
      setTimeout(() => {
        setCurrentStep(index + 1);
      }, step.delay);
    });

    // Navigate to terminal after 3 seconds
    const timeout = setTimeout(() => {
      navigate("/terminal", { replace: true });
    }, 3000);

    return () => {
      document.body.style.overflow = "";
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <div className="fixed inset-0 z-[99999] bg-black flex items-center justify-center font-mono overflow-hidden">
      {/* Matrix rain background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-[#00ff41] text-xs font-mono animate-matrix-rain"
            style={{ 
              left: `${(i * 3.33)}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 2 + 3}s`,
            }}
          >
            {Array.from({ length: 15 }).map((_, j) => (
              <div key={j} className="opacity-80">
                {String.fromCharCode(0x30A0 + Math.random() * 96)}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Scanlines effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-15 z-10"
        style={{
          background: "repeating-linear-gradient(0deg, rgba(0,255,65,0.1) 0px, rgba(0,255,65,0.1) 1px, transparent 1px, transparent 2px)",
        }}
      />

      {/* Glitch overlay */}
      {glitchActive && (
        <div className="absolute inset-0 pointer-events-none z-20 opacity-30">
          <div className="absolute inset-0 bg-[#00ff41] mix-blend-screen animate-pulse" style={{ clipPath: 'inset(40% 0 60% 0)' }} />
          <div className="absolute inset-0 bg-[#ff00ff] mix-blend-screen animate-pulse" style={{ clipPath: 'inset(60% 0 40% 0)', animationDelay: '0.1s' }} />
        </div>
      )}
      
      {/* Terminal boot animation */}
      <div className={`relative z-30 w-full max-w-4xl px-4 sm:px-8 ${glitchActive ? 'animate-[glitch_0.3s_ease-out]' : ''}`}>
        {/* Terminal window frame with slide-in animation */}
        <div className="bg-black border-2 border-[#00ff41] rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,255,65,0.5)] transform translate-y-8 opacity-0 animate-[slide-up-fade_0.5s_ease-out_0.1s_forwards]">
          {/* Terminal title bar */}
          <div className="flex items-center gap-2 px-4 py-2.5 bg-black border-b-2 border-[#00ff41]">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff0040] shadow-[0_0_8px_rgba(255,0,64,0.8)]" />
              <div className="w-3 h-3 rounded-full bg-[#ffaa00] shadow-[0_0_8px_rgba(255,170,0,0.8)]" />
              <div className="w-3 h-3 rounded-full bg-[#00ff41] shadow-[0_0_8px_rgba(0,255,65,0.8)]" />
            </div>
            <span className="text-[#00ff41] text-xs ml-2 font-mono">ritesh@portfolio:~/terminal</span>
          </div>

          {/* Terminal content */}
          <div className="bg-black p-6 sm:p-8 min-h-[400px] max-h-[600px] overflow-y-auto relative">
            {/* ASCII Art Header */}
            {currentStep >= 1 && (
              <div className="text-[#00ff41] text-[8px] sm:text-[10px] font-mono mb-4 opacity-0 animate-[fade-in_0.5s_ease-out_0.2s_forwards] text-center">
                <pre className="leading-tight">
{`╔═══════════════════════════════════════╗
║   TERMINAL ACCESS INITIALIZED         ║
║   SYSTEM: PORTFOLIO v2.0             ║
║   USER: ritesh@portfolio              ║
╚═══════════════════════════════════════╝`}
                </pre>
              </div>
            )}

            {/* Boot sequence */}
            <div className="space-y-2.5">
              {bootSteps.slice(0, currentStep).map((step, index) => (
                <div
                  key={index}
                  className="text-[#00ff41] text-sm sm:text-base font-mono opacity-0 animate-[fade-in_0.3s_ease-out_forwards] drop-shadow-[0_0_8px_rgba(0,255,65,0.8)]"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span className="text-[#00ff41]">{step.text}</span>
                  {index === currentStep - 1 && (
                    <span className="text-[#00ff41] ml-2 animate-pulse">█</span>
                  )}
                </div>
              ))}
              
              {/* Cursor blink - appears after steps */}
              {currentStep >= 5 && (
                <div className="text-[#00ff41] text-sm sm:text-base font-mono mt-6 flex items-center gap-2 opacity-0 animate-[fade-in_0.5s_ease-out_0.2s_forwards] drop-shadow-[0_0_8px_rgba(0,255,65,0.8)]">
                  <span className="text-[#00ff41]">ritesh@portfolio</span>
                  <span className="text-[#00ff41] opacity-50">:</span>
                  <span className="text-[#00ff41]">~</span>
                  <span className="text-[#00ff41] opacity-50">$</span>
                  <span className="text-[#00ff41] ml-2 animate-pulse drop-shadow-[0_0_12px_rgba(0,255,65,1)]">█</span>
                </div>
              )}
            </div>

            {/* Loading indicator with hex */}
            {currentStep < bootSteps.length && (
              <div className="mt-8 flex items-center gap-2.5 opacity-0 animate-[fade-in_0.3s_ease-out_0.1s_forwards]">
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-[#00ff41] rounded-full animate-pulse shadow-[0_0_8px_rgba(0,255,65,0.8)]" style={{ animationDelay: '0s' }} />
                  <div className="w-2 h-2 bg-[#00ff41] rounded-full animate-pulse shadow-[0_0_8px_rgba(0,255,65,0.8)]" style={{ animationDelay: '0.2s' }} />
                  <div className="w-2 h-2 bg-[#00ff41] rounded-full animate-pulse shadow-[0_0_8px_rgba(0,255,65,0.8)]" style={{ animationDelay: '0.4s' }} />
                </div>
                <span className="text-[#00ff41] text-xs sm:text-sm font-mono opacity-70">[0x{currentStep.toString(16).padStart(2, '0').toUpperCase()}] Booting terminal...</span>
              </div>
            )}

            {/* Progress bar with glow */}
            {currentStep > 0 && (
              <div className="mt-6 w-full bg-black border border-[#00ff41] rounded-full h-2 overflow-hidden opacity-0 animate-[fade-in_0.3s_ease-out_0.5s_forwards]">
                <div 
                  className="h-full bg-[#00ff41] rounded-full transition-all duration-300 ease-out shadow-[0_0_20px_rgba(0,255,65,0.8)]"
                  style={{ width: `${(currentStep / bootSteps.length) * 100}%` }}
                />
              </div>
            )}

            {/* Hacker-style footer */}
            {currentStep >= 6 && (
              <div className="mt-6 text-[#00ff41] text-xs font-mono opacity-0 animate-[fade-in_0.5s_ease-out_0.3s_forwards] opacity-50 text-center">
                <div className="border-t border-[#00ff41] pt-4">
                  <div>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</div>
                  <div className="mt-2">ACCESS GRANTED | SYSTEM READY | AWAITING COMMANDS</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

