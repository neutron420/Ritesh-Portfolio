import { ArrowUpRight, Mail, Eye } from "lucide-react";
import { useEffect, useState } from "react";

const ContactSection = () => {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);

  useEffect(() => {
    // Using a simple counter - in production you'd use your own backend
    const fetchVisitorCount = async () => {
      try {
        // Using countapi.xyz for simple visitor counting
        const response = await fetch('https://api.countapi.xyz/hit/ritesh-portfolio/visits');
        if (response.ok) {
          const data = await response.json();
          setVisitorCount(data.value);
        }
      } catch (error) {
        // Fallback to localStorage-based counting for demo
        const stored = localStorage.getItem('portfolio-visits');
        const count = stored ? parseInt(stored) + 1 : 1;
        localStorage.setItem('portfolio-visits', count.toString());
        setVisitorCount(count);
      }
    };

    fetchVisitorCount();
  }, []);

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="section-container">
        <div className="bg-card rounded-2xl border border-border/50 p-8 md:p-12 text-center">
          <p className="text-muted-foreground text-sm mb-4">
            If you've read this far, you might be interested in what I do.
          </p>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Let's work together
          </h2>

          <a
            href="mailto:fnaticritesh2004@gmail.com"
            className="inline-flex items-center gap-3 px-6 py-3 bg-accent text-accent-foreground rounded-xl font-medium hover:bg-accent/90 transition-colors group"
          >
            <Mail className="w-4 h-4" />
            <span>Get in touch</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <p className="text-xs text-muted-foreground mt-8">
            Currently available for freelance work and full-time opportunities.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ritesh Kumar Singh
          </p>
          
          {/* Visitor Count */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Eye className="w-3.5 h-3.5" />
            <span>
              {visitorCount !== null ? (
                <>{visitorCount.toLocaleString()} visitors</>
              ) : (
                <span className="animate-pulse">Loading...</span>
              )}
            </span>
          </div>

          <p className="text-xs text-muted-foreground">
            Built with passion ✨
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;