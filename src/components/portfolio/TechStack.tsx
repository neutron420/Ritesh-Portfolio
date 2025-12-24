import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiRedux, 
  SiNodedotjs, 
  SiExpress, 
  SiPython, 
  SiPostgresql, 
  SiMongodb, 
  SiGraphql,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiAmazonwebservices,
  SiLinux,
  SiNginx,
  SiTerraform,
  SiSolidity,
  SiRust,
  SiEthereum,
  SiIpfs,
  SiGit,
  SiFramer
} from "react-icons/si";

const TechStack = () => {
  const allTechs = [
    // Frontend
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Redux", icon: SiRedux, color: "#764ABC" },
    { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
    // Backend
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Express", icon: SiExpress, color: "#ffffff" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
    { name: "Redis", icon: SiRedis, color: "#DC382D" },
    // DevOps
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
    { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
    { name: "Linux", icon: SiLinux, color: "#FCC624" },
    { name: "Nginx", icon: SiNginx, color: "#009639" },
    { name: "Terraform", icon: SiTerraform, color: "#7B42BC" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    // Blockchain
    { name: "Solidity", icon: SiSolidity, color: "#363636" },
    { name: "Rust", icon: SiRust, color: "#ffffff" },
    { name: "Ethereum", icon: SiEthereum, color: "#627EEA" },
    { name: "IPFS", icon: SiIpfs, color: "#65C2CB" },
  ];

  // Duplicate for seamless infinite scroll
  const duplicatedTechs = [...allTechs, ...allTechs];

  return (
    <section id="stack" className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 mb-12">
        {/* Section header */}
        <div className="mb-4">
          <h2 className="text-2xl md:text-3xl serif text-foreground">
            Tech Stack
          </h2>
        </div>
        <p className="text-sm text-muted-foreground max-w-lg">
          Tools and technologies I work with to build meaningful products.
        </p>
      </div>

      {/* Scrolling tech icons - Row 1 */}
      <div className="relative mb-6">
        <div className="flex animate-scroll-left">
          {duplicatedTechs.slice(0, 24).map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={`${tech.name}-${index}`}
                className="flex-shrink-0 mx-3 group"
              >
                <div className="flex flex-col items-center gap-3 px-6 py-5 bg-card/50 border border-border/30 hover:border-accent/50 transition-all duration-300 hover:bg-card min-w-[120px]">
                  <Icon 
                    className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: tech.color }}
                  />
                  <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scrolling tech icons - Row 2 (reverse direction) */}
      <div className="relative">
        <div className="flex animate-scroll-right">
          {duplicatedTechs.slice(12, 36).map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={`${tech.name}-rev-${index}`}
                className="flex-shrink-0 mx-3 group"
              >
                <div className="flex flex-col items-center gap-3 px-6 py-5 bg-card/50 border border-border/30 hover:border-accent/50 transition-all duration-300 hover:bg-card min-w-[120px]">
                  <Icon 
                    className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: tech.color }}
                  />
                  <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Gradient overlays for fade effect */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
    </section>
  );
};

export default TechStack;