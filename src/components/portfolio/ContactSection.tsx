import { ArrowUpRight, Mail } from "lucide-react";

const ContactSection = () => {
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
            href="mailto:hello@example.com"
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
          <p className="text-xs text-muted-foreground">
            Built with passion ✨
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;