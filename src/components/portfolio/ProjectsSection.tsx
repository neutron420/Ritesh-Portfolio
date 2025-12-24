import { ArrowUpRight, Github, Star, GitFork } from "lucide-react";

// Curated projects in specific order with proper tech stacks
const projects = [
  {
    name: "Swaraj-Desk",
    description: "A comprehensive grievance management portal for government offices. Citizens can register complaints, track status, and receive updates in real-time. Built for Smart India Hackathon.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    github: "https://github.com/neutron420/Swaraj-Desk",
    live: null,
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Bloom",
    description: "A real-time video conferencing application similar to Google Meet. Features include HD video calls, screen sharing, chat messaging, virtual backgrounds, meeting scheduling, and participant management.",
    techStack: ["React", "WebRTC", "Mediasoup", "Socket.io", "Node.js", "Redis", "Docker", "AWS"],
    github: "https://github.com/neutron420/Bloom",
    live: null,
    image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Raby",
    description: "A secure cryptocurrency wallet application for managing digital assets. Features include multi-chain support, transaction history, portfolio tracking, secure key management, containerized with Docker, and deployed on AWS infrastructure.",
    techStack: ["React Native", "Node.js", "Web3.js", "Docker", "AWS"],
    github: "https://github.com/neutron420/Raby",
    live: null,
    image: "https://ledger-wp-website-s3-prd.ledger.com/uploads/2025/04/hero-1.webp",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="section-container">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold">Featured Projects</h2>
            <p className="text-sm text-muted-foreground mt-1">Some things I've built</p>
          </div>
          <a
            href="https://github.com/neutron420?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-1"
          >
            View all →
          </a>
        </div>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="group bg-card rounded-2xl border border-border/50 overflow-hidden hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="grid md:grid-cols-5 gap-0">
                {/* Image */}
                <div className="md:col-span-2 h-48 md:h-full overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/30 to-transparent md:bg-gradient-to-r" />
                  
                  {/* Project number badge */}
                  <div className="absolute top-4 left-4 w-8 h-8 rounded-lg bg-background/80 backdrop-blur flex items-center justify-center text-xs font-bold text-accent">
                    0{index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-3 p-5 md:p-6 flex flex-col justify-between">
                  <div>
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-lg md:text-xl font-semibold group-hover:text-accent transition-colors">
                        {project.name.replace(/-/g, ' ')}
                      </h3>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 flex items-center justify-center rounded-lg bg-muted/50 hover:bg-accent hover:text-accent-foreground transition-all"
                          aria-label="GitHub"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 flex items-center justify-center rounded-lg bg-muted/50 hover:bg-accent hover:text-accent-foreground transition-all"
                            aria-label="Live Demo"
                          >
                            <ArrowUpRight className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 md:line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="mt-4 pt-4 border-t border-border/30">
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2 font-medium">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={tech}
                          className={`px-2.5 py-1 text-xs rounded-md transition-colors ${
                            i === 0 
                              ? 'bg-accent/15 text-accent border border-accent/20' 
                              : 'bg-muted/70 text-muted-foreground hover:bg-muted'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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