import { motion } from "framer-motion";
import { Rocket, ExternalLink, Github, Sparkles } from "lucide-react";
import { SiSolana, SiRust, SiNextdotjs, SiPostgresql, SiKotlin, SiFirebase } from "react-icons/si";

interface TechItem {
  name: string;
  icon?: React.ReactNode;
  color?: string;
}

interface CurrentProject {
  name: string;
  description: string;
  status: "In Progress" | "Planning" | "Testing";
  progress: number;
  techStack: TechItem[];
  github?: string;
  preview?: string;
}

const currentProjects: CurrentProject[] = [
  {
    name: "Trackmed",
    description: "A comprehensive medicine tracking and purchasing platform built on Solana blockchain with complete supply chain transparency, real-time inventory management, and secure prescription handling.",
    status: "In Progress",
    progress: 65,
    techStack: [
      { name: "Solana", icon: <SiSolana className="w-3.5 h-3.5" />, color: "text-[#9945FF]" },
      { name: "Rust", icon: <SiRust className="w-3.5 h-3.5" />, color: "text-[#DEA584]" },
      { name: "Anchor", icon: <span className="w-3.5 h-3.5 font-bold text-xs flex items-center justify-center">⚓</span>, color: "text-[#7C3AED]" },
      { name: "Next.js", icon: <SiNextdotjs className="w-3.5 h-3.5" />, color: "text-foreground" },
      { name: "PostgreSQL", icon: <SiPostgresql className="w-3.5 h-3.5" />, color: "text-[#336791]" },
      { name: "Kotlin", icon: <SiKotlin className="w-3.5 h-3.5" />, color: "text-[#7F52FF]" },
      { name: "Firebase", icon: <SiFirebase className="w-3.5 h-3.5" />, color: "text-[#FFCA28]" },
    ],
    github: "https://github.com/neutron420/Trackmed",
    preview: "https://trackmed-trust-portal.vercel.app/",
  },
];

const CurrentlyWorkingOn = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="section-container">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="relative">
            <motion.div
              animate={{ 
                rotate: [0, 15, -15, 0],
                y: [0, -3, 0]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <Rocket className="w-6 h-6 text-accent" />
            </motion.div>
            <div className="absolute inset-0 bg-accent/20 blur-lg rounded-full" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-semibold">Currently Building</h2>
            <p className="text-sm text-muted-foreground">What I'm working on right now</p>
          </div>
        </div>

        <div className="space-y-6">
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Card */}
              <div className="relative bg-card rounded-2xl border border-border/50 overflow-hidden hover:border-accent/40 transition-all duration-300">
                {/* Top Gradient Bar */}
                <div className="h-1 bg-gradient-to-r from-accent via-accent/60 to-accent" />
                
                <div className="p-6 md:p-8">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl md:text-2xl font-bold">{project.name}</h3>
                        <motion.span 
                          className={`px-3 py-1 text-xs font-medium uppercase tracking-wider rounded-full flex items-center gap-1.5 ${
                            project.status === "In Progress" 
                              ? "bg-green-500/15 text-green-500 border border-green-500/30"
                              : project.status === "Planning"
                              ? "bg-yellow-500/15 text-yellow-500 border border-yellow-500/30"
                              : "bg-blue-500/15 text-blue-500 border border-blue-500/30"
                          }`}
                          animate={{ scale: [1, 1.02, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                          {project.status}
                        </motion.span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-xl bg-muted/50 hover:bg-muted border border-border/50 hover:border-accent/50 transition-all"
                          aria-label="View on GitHub"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-5 h-5" />
                        </motion.a>
                      )}
                      {project.preview && (
                        <motion.a
                          href={project.preview}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-3 rounded-xl bg-accent text-accent-foreground font-medium text-sm flex items-center gap-2 hover:bg-accent/90 transition-all"
                          aria-label="View live preview"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="hidden sm:inline">Live Preview</span>
                          <span className="sm:hidden">Live</span>
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Progress Section */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-muted-foreground font-medium">Development Progress</span>
                      <span className="text-accent font-bold text-lg">{project.progress}%</span>
                    </div>
                    <div className="h-3 bg-muted/50 rounded-full overflow-hidden border border-border/30">
                      <motion.div
                        className="h-full bg-gradient-to-r from-accent via-accent to-accent/80 rounded-full relative"
                        initial={{ width: 0 }}
                        animate={{ width: `${project.progress}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/20"
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                      </motion.div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="w-4 h-4 text-accent" />
                      <span className="text-sm font-medium text-muted-foreground">Tech Stack</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <motion.span
                          key={tech.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 + i * 0.05 }}
                          className={`px-3 py-1.5 text-sm rounded-lg transition-all flex items-center gap-1.5 ${
                            i === 0 
                              ? "bg-accent/15 text-accent border border-accent/30 font-medium"
                              : "bg-muted/50 text-muted-foreground border border-border/30 hover:border-accent/30 hover:text-accent"
                          }`}
                        >
                          {tech.icon && <span className={tech.color}>{tech.icon}</span>}
                          {tech.name}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentlyWorkingOn;
