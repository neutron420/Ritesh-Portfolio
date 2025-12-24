import { useState } from "react";
import { ArrowUpRight, Mail, Eye, Send, Loader2 } from "lucide-react";
import { useEffect } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const { toast } = useToast();
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const response = await fetch('https://api.countapi.xyz/hit/ritesh-portfolio/visits');
        if (response.ok) {
          const data = await response.json();
          setVisitorCount(data.value);
        }
      } catch (error) {
        const stored = localStorage.getItem('portfolio-visits');
        const count = stored ? parseInt(stored) + 1 : 1;
        localStorage.setItem('portfolio-visits', count.toString());
        setVisitorCount(count);
      }
    };

    fetchVisitorCount();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Missing fields",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim()
        }
      });

      if (error) throw error;

      toast({
        title: "Message sent! 🎉",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast({
        title: "Failed to send",
        description: "Something went wrong. Please try again or email me directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div 
        ref={ref}
        className={`section-container scroll-reveal ${isVisible ? 'visible' : ''}`}
      >
        <div className="bg-card rounded-2xl border border-border/50 p-6 md:p-10">
          <div className="text-center mb-8">
            <p className="text-muted-foreground text-sm mb-3">
              If you've read this far, you might be interested in what I do.
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Let's work together
            </h2>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                disabled={isSubmitting}
                maxLength={100}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                disabled={isSubmitting}
                maxLength={255}
              />
            </div>
            <div>
              <textarea
                placeholder="Your message..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                disabled={isSubmitting}
                maxLength={1000}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-xl font-medium hover:bg-accent/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-xs text-muted-foreground">
              Or email me directly at{" "}
              <a href="mailto:fnaticritesh2004@gmail.com" className="text-accent hover:underline">
                fnaticritesh2004@gmail.com
              </a>
            </p>
          </div>

          <p className="text-xs text-muted-foreground text-center mt-6">
            Currently available for freelance work and full-time opportunities.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground order-2 sm:order-1">
              © {new Date().getFullYear()} Ritesh Kumar Singh
            </p>
            
            {/* Visitor Count */}
            <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border/50 order-1 sm:order-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <Eye className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium">
                {visitorCount !== null ? (
                  <>{visitorCount.toLocaleString()}</>
                ) : (
                  <span className="text-muted-foreground">—</span>
                )}
              </span>
              <span className="text-xs text-muted-foreground">visitors</span>
            </div>

            <p className="text-xs text-muted-foreground order-3">
              Built with passion ✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
