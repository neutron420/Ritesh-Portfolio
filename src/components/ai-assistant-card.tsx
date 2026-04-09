import {
  SendHorizontalIcon,
  UserIcon,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { getAIResponse } from "@/lib/data";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

interface Message {
  id: string;
  type: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export const AIAssistantCard = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      type: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = getAIResponse(userMsg.content);
      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        type: "assistant",
        content: response,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Card className="flex h-[500px] w-full flex-col gap-0 p-0 border-none bg-transparent shadow-none overflow-hidden">
      {/* Header */}
      <div className="flex flex-row items-center justify-between p-4 border-b border-border/40 bg-card/50">
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 rounded-full overflow-hidden border border-accent/20">
             <img src="https://github.com/neutron420.png" alt="AI" className="w-full h-full object-cover" />
           </div>
           <div>
             <h4 className="text-xs font-bold leading-tight">Neutron's AI</h4>
             <p className="text-[10px] text-muted-foreground leading-tight">Always active</p>
           </div>
        </div>
      </div>

      <CardContent className="flex flex-1 flex-col p-0 overflow-hidden relative">
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar"
        >
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center space-y-6 pt-4 text-center">
              <div className="w-16 h-16 rounded-3xl overflow-hidden border-2 border-accent/20 shadow-xl">
                 <img src="https://github.com/neutron420.png" alt="AI" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-bold tracking-tight">Hi, I'm Ritesh's AI!</h2>
                <p className="text-sm text-muted-foreground max-w-[240px] mx-auto">
                  Ask me about Ritesh's skills, projects, or experience. I'm here to help!
                </p>
              </div>
            </div>
          ) : (
            messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex gap-3 ${msg.type === "user" ? "flex-row-reverse" : "flex-row"}`}
              >
                <div className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center border ${msg.type === "assistant" ? "border-accent/20 overflow-hidden" : "bg-muted border-border"}`}>
                  {msg.type === "assistant" ? (
                    <img src="https://github.com/neutron420.png" alt="AI" className="w-full h-full object-cover" />
                  ) : (
                    <UserIcon className="size-4" />
                  )}
                </div>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${msg.type === "assistant" ? "bg-muted/50 border border-border/50 rounded-tl-none" : "bg-accent text-accent-foreground rounded-tr-none"}`}>
                  <div className="whitespace-pre-wrap break-words font-medium">
                    {msg.content}
                  </div>
                </div>
              </div>
            ))
          )}
          {isTyping && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full border border-accent/20 overflow-hidden flex items-center justify-center">
                <img src="https://github.com/neutron420.png" alt="AI" className="w-full h-full object-cover" />
              </div>
              <div className="bg-muted/50 border border-border/50 p-3 rounded-2xl rounded-tl-none flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-muted-foreground/40 animate-pulse" />
                <span className="w-1 h-1 rounded-full bg-muted-foreground/40 animate-pulse [animation-delay:0.2s]" />
                <span className="w-1 h-1 rounded-full bg-muted-foreground/40 animate-pulse [animation-delay:0.4s]" />
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-card/30 border-t border-border/40">
          <div className="relative flex items-end gap-2">
            <div className="relative flex-1">
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask me anything..."
                className="bg-muted min-h-[44px] max-h-32 resize-none rounded-2xl border-none py-3 ps-4 pe-10 shadow-none focus-visible:ring-1 focus-visible:ring-accent/50"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="absolute end-1 bottom-1 flex h-8 w-8 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-all hover:bg-accent/90 disabled:opacity-50 shadow-lg shadow-accent/10"
                aria-label="Send message"
                type="button"
              >
                <SendHorizontalIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
