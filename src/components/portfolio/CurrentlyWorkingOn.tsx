import { motion } from "framer-motion";
import { ExternalLink, Github, Code2 } from "lucide-react";
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
  techStack: TechItem[];
  github?: string;
  preview?: string;
}

const currentProjects: CurrentProject[] = [
  {
    name: "Trackmed",
    description: "A comprehensive medicine tracking and purchasing platform built on Solana blockchain with complete supply chain transparency.",
    status: "In Progress",
    techStack: [
      { name: "Solana", icon: <SiSolana className="w-4 h-4" />, color: "text-[#9945FF]" },
      { name: "Rust", icon: <SiRust className="w-4 h-4" />, color: "text-[#DEA584]" },
      { name: "Next.js", icon: <SiNextdotjs className="w-4 h-4" />, color: "text-foreground" },
      { name: "PostgreSQL", icon: <SiPostgresql className="w-4 h-4" />, color: "text-[#336791]" },
      { name: "Kotlin", icon: <SiKotlin className="w-4 h-4" />, color: "text-[#7F52FF]" },
      { name: "Firebase", icon: <SiFirebase className="w-4 h-4" />, color: "text-[#FFCA28]" },
    ],
    github: "https://github.com/neutron420/Trackmed",
    preview: "https://trackmed-trust-portal.vercel.app/",
  },
];

const CurrentlyWorkingOn = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="section-container">
        {/* Minimal Header - ram.codes style */}
        <motion.div 
          className="flex items-center gap-2 mb-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <Code2 className="w-5 h-5 text-accent" />
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Currently Building
          </span>
        </motion.div>

        <div className="space-y-4">
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="group"
            >
              {/* Clean Card - ram.codes inspired */}
              <div className="relative bg-card/50 rounded-xl border border-border/40 p-5 md:p-6 hover:border-accent/30 transition-all duration-300">
                {/* Status Badge - Top Right */}
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                    <motion.span
                      className="w-1.5 h-1.5 rounded-full bg-green-500"
                      animate={{ opacity: [1, 0.4, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <span className="text-[10px] font-medium text-green-500 uppercase tracking-wider">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="pr-24">
                  <h3 className="text-lg md:text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack - Compact Icons */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {project.techStack.slice(0, 5).map((tech, i) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.05 }}
                        className={`${tech.color} opacity-60 hover:opacity-100 transition-opacity`}
                        title={tech.name}
                      >
                        {tech.icon}
                      </motion.div>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className="text-xs text-muted-foreground">
                        +{project.techStack.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center gap-2">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-all"
                        aria-label="View on GitHub"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                    )}
                    {project.preview && (
                      <motion.a
                        href={project.preview}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent/10 text-accent text-sm font-medium hover:bg-accent/20 transition-all"
                        aria-label="View live preview"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>Visit</span>
                        <ExternalLink className="w-3 h-3" />
                      </motion.a>
                    )}
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
