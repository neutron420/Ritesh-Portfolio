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
        <div className="flex items-center gap-8 mb-16">
          <span className="section-label">Contact</span>
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs text-muted-foreground">05</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Main CTA */}
          <div className="lg:col-span-7">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif italic leading-[1.1]">
              Let's build something
              <span className="text-accent"> meaningful</span> together.
            </h2>
            <p className="text-muted-foreground mt-8 max-w-md leading-relaxed">
              Open to new opportunities, collaborations, and interesting conversations. 
              Whether you have a project in mind or just want to connect—I'd love to hear from you.
            </p>
            
            {/* Primary CTA */}
            <a 
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-3 mt-12 px-8 py-4 bg-foreground text-background hover:bg-foreground/90 transition-colors group"
            >
              <span className="font-medium">Get in touch</span>
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
                  className="flex items-center justify-between py-6 border-t border-border group hover:bg-card/30 transition-colors px-4 -mx-4"
                >
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">{link.label}</p>
                    <p className="group-hover:text-accent transition-colors">{link.value}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
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
