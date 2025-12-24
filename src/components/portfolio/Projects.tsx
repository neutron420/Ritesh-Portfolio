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
      title: "AI Content Studio",
      category: "Product Design",
      year: "2024",
      description: "An intelligent writing assistant that helps teams create, edit, and optimize content at scale.",
      tech: ["React", "Python", "OpenAI"],
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80",
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
    <section id="work" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-8 mb-16">
          <span className="section-label">Selected Work</span>
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs text-muted-foreground">03</span>
        </div>

        {/* Projects list */}
        <div className="space-y-1">
          {projects.map((project, index) => (
            <article 
              key={project.title}
              className="group border-t border-border last:border-b py-12 hover:bg-card/30 transition-colors px-4 -mx-4"
            >
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                {/* Number & Category */}
                <div className="lg:col-span-2 flex lg:flex-col justify-between lg:justify-start gap-4">
                  <span className="text-xs text-muted-foreground">{project.number}</span>
                  <span className="text-xs text-muted-foreground">{project.category}</span>
                </div>

                {/* Title & Description */}
                <div className="lg:col-span-6">
                  <h3 className="text-2xl md:text-3xl font-serif italic mb-4 group-hover:text-accent transition-colors flex items-center gap-3">
                    {project.title}
                    <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                    {project.description}
                  </p>
                  
                  {/* Tech stack */}
                  <div className="flex gap-2 mt-6">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs text-muted-foreground">
                        {t}{project.tech.indexOf(t) < project.tech.length - 1 && " ·"}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className="lg:col-span-4">
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View all link */}
        <div className="mt-16 pt-8 border-t border-border">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            View all projects
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
