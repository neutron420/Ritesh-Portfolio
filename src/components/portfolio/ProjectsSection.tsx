import { ArrowUpRight, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "DeFi Exchange",
      description: "A decentralized exchange with automated market making, liquidity pools, and yield farming capabilities.",
      tech: ["Solidity", "React", "Rust", "Ethereum"],
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&auto=format&fit=crop&q=80",
      github: "#",
      live: "#",
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack marketplace with real-time inventory, Stripe payments, and admin dashboard.",
      tech: ["Next.js", "PostgreSQL", "Prisma", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&auto=format&fit=crop&q=80",
      github: "#",
      live: "#",
    },
    {
      title: "AI Analytics Dashboard",
      description: "Real-time data visualization platform with AI-powered insights and predictive analytics.",
      tech: ["React", "Python", "TensorFlow", "D3.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80",
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="section-container">
        <h2 className="text-xl md:text-2xl font-semibold mb-8">Projects</h2>

        <div className="grid gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-card rounded-2xl border border-border/50 overflow-hidden hover:border-border transition-all"
            >
              <div className="grid md:grid-cols-5 gap-0">
                {/* Image */}
                <div className="md:col-span-2 h-48 md:h-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="md:col-span-3 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <a
                          href={project.github}
                          className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
                          aria-label="GitHub"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                        <a
                          href={project.live}
                          className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
                          aria-label="Live Demo"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs bg-muted rounded-md text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;