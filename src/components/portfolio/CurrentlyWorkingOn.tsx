import { motion } from "framer-motion";
import { Rocket, ExternalLink, Github } from "lucide-react";

interface CurrentProject {
  name: string;
  description: string;
  status: "In Progress" | "Planning" | "Testing";
  progress: number;
  techStack: string[];
  github?: string;
  preview?: string;
}

const currentProjects: CurrentProject[] = [
  {
    name: "Trackmed",
    description: "A comprehensive medicine tracking and purchasing platform built on Solana blockchain with complete supply chain transparency.",
    status: "In Progress",
    progress: 65,
    techStack: ["Solana", "Rust", "Anchor", "Next.js", "PostgreSQL"],
    github: "https://github.com/neutron420/Trackmed",
  },
];

const CurrentlyWorkingOn = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-6">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Rocket className="w-5 h-5 text-accent" />
          </motion.div>
          <h2 className="text-xl md:text-2xl font-semibold">Currently Building</h2>
        </div>

        <div className="space-y-4">
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl border border-border/50 p-5 hover:border-accent/30 transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    {project.name}
                    <span className={`px-2 py-0.5 text-[10px] uppercase tracking-wider rounded-full ${
                      project.status === "In Progress" 
                        ? "bg-green-500/15 text-green-500 border border-green-500/20"
                        : project.status === "Planning"
                        ? "bg-yellow-500/15 text-yellow-500 border border-yellow-500/20"
                        : "bg-blue-500/15 text-blue-500 border border-blue-500/20"
                    }`}>
                      {project.status}
                    </span>
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {project.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-muted/50 hover:bg-accent hover:text-accent-foreground transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.preview && (
                    <a
                      href={project.preview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-muted/50 hover:bg-accent hover:text-accent-foreground transition-colors"
                      aria-label="View preview"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-3">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="text-accent font-medium">{project.progress}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-accent rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${project.progress}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs rounded-md bg-muted/50 text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentlyWorkingOn;
