import { useState, useEffect } from "react";
import { Mail, Eye, Send, Loader2, Twitter, Github, Linkedin, MapPin, Clock, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
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

  const socialLinks = [
    { icon: Github, href: "https://github.com/neutron420", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ritesh-singh1/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/RiteshS18572143", label: "Twitter" },
    { icon: Mail, href: "mailto:fnaticritesh2004@gmail.com", label: "Email" },
  ];

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="section-container">
        {/* Main Contact Card */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-card via-card to-muted/20 border border-border/50">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative p-6 md:p-10 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
              {/* Left Side - Info */}
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent text-sm rounded-full mb-4">
                    <Sparkles className="w-3.5 h-3.5" />
                    Available for work
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Let's work<br />
                    <span className="text-accent">together</span>
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Have a project in mind or want to collaborate? I'm always excited to work on interesting challenges and build something amazing.
                  </p>
                </div>

                {/* Quick Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center">
                      <Mail className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs">Email</p>
                      <a href="mailto:fnaticritesh2004@gmail.com" className="hover:text-accent transition-colors">
                        fnaticritesh2004@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs">Location</p>
                      <p>India</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center">
                      <Clock className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs">Response Time</p>
                      <p>Within 24 hours</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <p className="text-sm text-muted-foreground mb-3">Connect with me</p>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-11 h-11 flex items-center justify-center rounded-xl bg-muted/50 border border-border/50 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all"
                          aria-label={social.label}
                        >
                          <Icon className="w-5 h-5" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="bg-background/50 backdrop-blur rounded-2xl p-6 md:p-8 border border-border/30">
                <h3 className="text-lg font-semibold mb-6">Send me a message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-muted-foreground mb-1.5 block">Your Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all text-sm"
                        disabled={isSubmitting}
                        maxLength={100}
                      />
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground mb-1.5 block">Your Email</label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all text-sm"
                        disabled={isSubmitting}
                        maxLength={255}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-xs text-muted-foreground mb-1.5 block">Your Message</label>
                    <textarea
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-muted/30 border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-all resize-none text-sm"
                      disabled={isSubmitting}
                      maxLength={1000}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-accent text-accent-foreground rounded-xl font-medium hover:bg-accent/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm"
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
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full border-2 border-accent flex items-center justify-center">
                  <span className="text-sm font-bold text-accent">理</span>
                </div>
                <span className="font-semibold">Ritesh Singh</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Full-Stack Engineer & Blockchain Developer building meaningful products from scratch.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-medium mb-3">Quick Links</h4>
              <div className="flex flex-col gap-2">
                <a href="#tech" className="text-sm text-muted-foreground hover:text-accent transition-colors">Tech Stack</a>
                <a href="#projects" className="text-sm text-muted-foreground hover:text-accent transition-colors">Projects</a>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-accent transition-colors">Contact</a>
              </div>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-medium mb-3">Connect</h4>
              <div className="flex flex-col gap-2">
                <a href="https://github.com/neutron420" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-1.5">
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/ritesh-singh1/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-1.5">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a href="https://x.com/RiteshS18572143" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-1.5">
                  <Twitter className="w-4 h-4" />
                  X (Twitter)
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border/30">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Ritesh Kumar Singh. All rights reserved.
            </p>
            
            {/* Visitor Count */}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-muted/30 rounded-full">
              <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
              <Eye className="w-3.5 h-3.5 text-muted-foreground" />
              <span className="text-xs font-medium">
                {visitorCount !== null ? visitorCount.toLocaleString() : "—"}
              </span>
              <span className="text-xs text-muted-foreground">visitors</span>
            </div>

            <p className="text-xs text-muted-foreground">
              Built with passion & React ⚡
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;