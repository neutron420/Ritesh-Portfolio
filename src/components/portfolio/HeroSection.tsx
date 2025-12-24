import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com", label: "X" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
  ];

  return (
    <section className="pt-20">
      {/* Banner Image */}
      <div className="section-container">
        <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden mt-6">
          <img
            src="https://images.unsplash.com/photo-1536859355448-76f92ebdc33d?w=1200&auto=format&fit=crop&q=80"
            alt="Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          
          {/* Floating text on banner */}
          <div className="absolute bottom-4 right-6 text-right">
            <p className="text-sm italic text-foreground/60 serif">
              Build · Ship · Learn · Repeat
            </p>
          </div>
        </div>

        {/* Profile Section */}
        <div className="relative -mt-16 md:-mt-20 px-4">
          {/* Avatar */}
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-background overflow-hidden bg-card">
            <img
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=300&auto=format&fit=crop&q=80"
              alt="Ritesh Kumar Singh"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="mt-4">
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Ritesh Kumar Singh
            </h1>
            <p className="text-muted-foreground mt-1">
              22 · Full-Stack Engineer · Blockchain Developer · Builder
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-card border border-border hover:border-accent hover:text-accent transition-all"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Bio */}
          <div className="mt-8 max-w-2xl">
            <p className="text-foreground leading-relaxed">
              <span className="text-accent font-medium">I build from scratch.</span>{" "}
              Frontend, backend, full-stack, and blockchain applications end-to-end 
              from UI/UX and deployment to smart contracts. I prioritize outcomes 
              over buzzwords, focusing on products that deliver real value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;