import { ArrowUpRight } from "lucide-react";

const Contact = () => {
  const links = [
    { label: "Email", value: "hello@example.com", href: "mailto:hello@example.com" },
    { label: "GitHub", value: "github.com/username", href: "https://github.com" },
    { label: "LinkedIn", value: "linkedin.com/in/username", href: "https://linkedin.com" },
    { label: "Twitter", value: "@username", href: "https://twitter.com" },
  ];

  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-8 mb-20">
          <span className="section-label">Contact</span>
          <div className="flex-1 h-px bg-gradient-to-r from-border via-accent/20 to-transparent" />
          <span className="text-[10px] text-muted-foreground tracking-wider">05</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Main CTA */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl md:text-4xl lg:text-5xl serif leading-[1.1]">
              Let's build something
              <span className="text-accent"> meaningful</span> together.
            </h2>
            <p className="text-sm text-muted-foreground mt-8 max-w-md leading-relaxed">
              Open to new opportunities, collaborations, and interesting conversations. 
              Whether you have a project in mind or just want to connect—I'd love to hear from you.
            </p>
            
            {/* Primary CTA */}
            <a 
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-3 mt-10 px-6 py-3 bg-accent text-accent-foreground hover:bg-accent/90 transition-colors duration-300 group"
            >
              <span className="text-sm font-medium">Get in touch</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Links */}
          <div className="lg:col-span-5">
            <div className="space-y-0">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center justify-between py-5 border-t border-border/50 group hover:bg-card/30 transition-colors duration-300 px-4 -mx-4"
                >
                  <div>
                    <p className="text-[10px] text-muted-foreground/60 mb-1 tracking-wider uppercase">{link.label}</p>
                    <p className="text-sm group-hover:text-accent transition-colors">{link.value}</p>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground/40 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;