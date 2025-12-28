import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Minimize2, Maximize2, X } from "lucide-react";

interface Message {
  id: string;
  type: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface AIChatBoxProps {
  // This will be used when you create the data lib
  getResponse?: (query: string) => Promise<string> | string;
}

const AIChatBox = ({ getResponse }: AIChatBoxProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "assistant",
      content: "こんにちは! I'm Ritesh's AI assistant. Ask me anything about Ritesh - his skills, projects, experience, or achievements!",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isMinimized, setIsMinimized] = useState(true); // Start minimized/closed
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (!isMinimized && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isMinimized]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate typing delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Get response from data lib (placeholder for now)
    let response = "Building in Progress...";
    
    if (getResponse) {
      try {
        const result = await getResponse(userMessage.content);
        response = typeof result === "string" ? result : result;
      } catch (error) {
        response = "Sorry, I encountered an error. Please try again.";
      }
    }

    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      type: "assistant",
      content: response,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, assistantMessage]);
    setIsTyping(false);
    
    // Refocus input after sending message
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend(e);
    }
  };

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsMinimized(false)}
          className="bg-[#0d1117] border-2 border-[#ff6b35]/50 rounded-lg px-3 sm:px-4 py-2.5 sm:py-2 flex items-center gap-2 text-[#ff6b35] font-mono text-xs sm:text-sm hover:bg-[#161b22] active:scale-95 transition-all shadow-lg shadow-[#ff6b35]/20 hover:shadow-[#ff6b35]/30 touch-manipulation"
          aria-label="Open AI Chat"
        >
          <Bot className="w-4 h-4 sm:w-4 sm:h-4" />
          <span className="hidden sm:inline">AI Chat</span>
          <Maximize2 className="w-3.5 h-3.5 sm:w-3 sm:h-3" />
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 right-0 left-0 sm:bottom-4 sm:right-4 sm:left-auto z-50 w-full sm:w-auto sm:max-w-md animate-fade-up safe-area-inset">
      {/* Terminal frame with Japanese aesthetic border */}
      <div className="bg-[#0d1117]/95 backdrop-blur-sm border-2 sm:rounded-lg border-[#ff6b35]/50 shadow-2xl shadow-[#ff6b35]/20 overflow-hidden relative h-[85vh] sm:h-auto sm:max-h-[600px] flex flex-col">
        {/* Japanese pattern corner decoration */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#ff6b35]/30 rounded-tl-lg" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#ff6b35]/30 rounded-tr-lg" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#ff6b35]/30 rounded-bl-lg" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#ff6b35]/30 rounded-br-lg" />

        {/* Terminal title bar */}
        <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-2 bg-black/80 border-b border-[#ff6b35]/30 flex-shrink-0">
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <div className="flex gap-1.5 flex-shrink-0">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff0040] shadow-[0_0_8px_rgba(255,0,64,0.8)]" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffaa00] shadow-[0_0_8px_rgba(255,170,0,0.8)]" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff6b35] shadow-[0_0_8px_rgba(255,107,53,0.8)]" />
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 ml-2 min-w-0">
              <Bot className="w-4 h-4 sm:w-4 sm:h-4 text-[#ff6b35] flex-shrink-0" />
              <span className="text-[#ff6b35] text-[11px] sm:text-xs font-mono drop-shadow-[0_0_6px_rgba(255,107,53,0.6)] truncate">
                ai@ritesh:~ <span className="text-[#ff8555] hidden sm:inline">チャット</span>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 flex-shrink-0">
            {/* Close button - Mobile optimized */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsMinimized(true);
              }}
              className="p-2 sm:p-1 hover:bg-[#ff6b35]/10 active:bg-[#ff6b35]/20 rounded transition-colors touch-manipulation"
              aria-label="Close chat"
              type="button"
            >
              <X className="w-5 h-5 sm:w-4 sm:h-4 text-[#ff6b35]" />
            </button>
          </div>
        </div>

        {/* Chat messages area */}
        <div className="bg-[#0d1117]/95 flex-1 overflow-y-auto p-3 sm:p-4 font-mono text-xs sm:text-sm min-h-0">
          <div className="space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2 ${
                  message.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {message.type === "assistant" && (
                  <div className="flex-shrink-0 w-6 h-6 sm:w-6 sm:h-6 rounded-full bg-[#ff6b35]/20 flex items-center justify-center mt-0.5">
                    <Bot className="w-3.5 h-3.5 sm:w-3.5 sm:h-3.5 text-[#ff6b35]" />
                  </div>
                )}
                <div
                  className={`max-w-[85%] sm:max-w-[80%] rounded-lg px-3 sm:px-3 py-2.5 sm:py-2 ${
                    message.type === "user"
                      ? "bg-[#ff6b35]/20 text-[#ff8555] border border-[#ff6b35]/30"
                      : "bg-[#161b22] text-[#8b949e] border border-[#21262d]"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5 sm:mb-1">
                    {message.type === "user" ? (
                      <User className="w-3.5 h-3.5 sm:w-3 sm:h-3 text-[#ff6b35]" />
                    ) : (
                      <Bot className="w-3.5 h-3.5 sm:w-3 sm:h-3 text-[#ff8555]" />
                    )}
                    <span className="text-[#ff6b35] text-[11px] sm:text-[10px] font-medium">
                      {message.type === "user" ? "you" : "ai"}
                    </span>
                    <span className="text-[#8b949e] text-[10px] sm:text-[9px]">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                  <p className="text-[#c9d1d9] leading-relaxed whitespace-pre-wrap text-[13px] sm:text-sm break-words">
                    {message.content}
                  </p>
                </div>
                {message.type === "user" && (
                  <div className="flex-shrink-0 w-6 h-6 sm:w-6 sm:h-6 rounded-full bg-[#ff8555]/20 flex items-center justify-center mt-0.5">
                    <User className="w-3.5 h-3.5 sm:w-3.5 sm:h-3.5 text-[#ff8555]" />
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-2 justify-start">
                <div className="flex-shrink-0 w-6 h-6 sm:w-6 sm:h-6 rounded-full bg-[#ff6b35]/20 flex items-center justify-center mt-0.5">
                  <Bot className="w-3.5 h-3.5 sm:w-3.5 sm:h-3.5 text-[#ff6b35]" />
                </div>
                <div className="bg-[#161b22] text-[#8b949e] border border-[#21262d] rounded-lg px-3 sm:px-3 py-2.5 sm:py-2">
                  <div className="flex gap-1.5">
                    <span className="text-[#ff6b35] text-lg">.</span>
                    <span className="text-[#ff8555] text-lg animate-pulse">.</span>
                    <span className="text-[#ffaa00] text-lg animate-pulse" style={{ animationDelay: "0.2s" }}>
                      .
                    </span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input area */}
        <form onSubmit={handleSend} className="border-t border-[#ff6b35]/30 bg-black/80 p-3 sm:p-3 flex-shrink-0">
          <div className="flex items-center gap-2 sm:gap-2">
            <span className="text-[#ff6b35] font-mono text-sm sm:text-xs flex-shrink-0">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about Ritesh..."
              className="flex-1 bg-transparent text-[#c9d1d9] font-mono text-sm sm:text-sm outline-none placeholder:text-[#8b949e] py-1.5 sm:py-1"
              disabled={isTyping}
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="p-2.5 sm:p-2 bg-[#ff6b35]/20 hover:bg-[#ff6b35]/30 active:bg-[#ff6b35]/40 border border-[#ff6b35]/30 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation flex-shrink-0"
              aria-label="Send message"
            >
              <Send className="w-4 h-4 sm:w-4 sm:h-4 text-[#ff6b35]" />
            </button>
          </div>
          <p className="text-[#8b949e] text-[10px] sm:text-[9px] mt-1.5 sm:mt-1 ml-7 sm:ml-6">
            Press Enter to send
          </p>
        </form>
      </div>
    </div>
  );
};

export default AIChatBox;

