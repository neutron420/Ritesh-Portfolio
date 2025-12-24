import { ArrowUpRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      number: "01",
      title: "E-Commerce Platform",
      category: "Full Stack",
      year: "2024",
      description: "A high-performance online store with real-time inventory, seamless checkout, and an intuitive admin experience.",
      tech: ["Next.js", "PostgreSQL", "Stripe"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    },
    {
      number: "02",
      title: "DeFi Protocol",
      category: "Blockchain",
      year: "2024",
      description: "A decentralized finance protocol for lending and borrowing with automated market makers and yield optimization.",
      tech: ["Solidity", "Rust", "React", "Hardhat"],
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=80",
    },
    {
      number: "03",
      title: "Analytics Dashboard",
      category: "Data Visualization",
      year: "2023",
      description: "Real-time metrics and insights for teams who need clarity, not complexity.",
      tech: ["React", "D3.js", "WebSocket"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <section id="work" className="py-32 px-6 md:px-12 lg:px-24 bg-card/20">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-8 mb-20">
          <span className="section-label">Selected Work</span>
          <div className="flex-1 h-px bg-gradient-to-r from-border via-accent/20 to-transparent" />
          <span className="text-[10px] text-muted-foreground tracking-wider">03</span>
        </div>

        {/* Projects list */}
        <div className="space-y-0">
          {projects.map((project) => (
            <article 
              key={project.title}
              className="group border-t border-border/50 last:border-b py-10 hover:bg-background/50 transition-colors duration-300 px-4 -mx-4"
            >
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                {/* Number & Category */}
                <div className="lg:col-span-2 flex lg:flex-col justify-between lg:justify-start gap-4">
                  <span className="text-[10px] text-accent/60">{project.number}</span>
                  <span className="text-[10px] text-muted-foreground tracking-wider uppercase">{project.category}</span>
                </div>

                {/* Title & Description */}
                <div className="lg:col-span-6">
                  <h3 className="text-xl md:text-2xl serif mb-4 group-hover:text-accent transition-colors duration-300 flex items-center gap-3">
                    {project.title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                    {project.description}
                  </p>
                  
                  {/* Tech stack */}
                  <div className="flex gap-4 mt-6">
                    {project.tech.map((t, i) => (
                      <span key={t} className="text-[10px] text-muted-foreground/60 tracking-wider">
                        {t}{i < project.tech.length - 1 && <span className="ml-4 text-accent/30">·</span>}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className="lg:col-span-4">
                  <div className="aspect-[4/3] overflow-hidden bg-muted border border-border/30">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View all link */}
        <div className="mt-16 pt-8 border-t border-border/50">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-muted-foreground hover:text-accent transition-colors group"
          >
            View all projects
            <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;