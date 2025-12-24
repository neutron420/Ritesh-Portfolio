import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiExpress, 
  SiPython, 
  SiPostgresql, 
  SiMongodb, 
  SiDocker,
  SiGit,
  SiSolidity,
  SiRust,
  SiEthereum,
  SiRedis,
  SiGraphql,
  SiAmazonwebservices,
  SiLinux,
  SiPrisma,
  SiFirebase,
  SiVercel,
  SiVite
} from "react-icons/si";

const TechStackSection = () => {
  const technologies = [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Express", icon: SiExpress, color: "#ffffff" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "Solidity", icon: SiSolidity, color: "#363636" },
    { name: "Rust", icon: SiRust, color: "#ffffff" },
    { name: "Ethereum", icon: SiEthereum, color: "#627EEA" },
    { name: "Redis", icon: SiRedis, color: "#DC382D" },
    { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
    { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
    { name: "Linux", icon: SiLinux, color: "#FCC624" },
    { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { name: "Vercel", icon: SiVercel, color: "#ffffff" },
    { name: "Vite", icon: SiVite, color: "#646CFF" },
  ];

  // Duplicate for seamless loop
  const row1 = [...technologies, ...technologies];
  const row2 = [...technologies.slice().reverse(), ...technologies.slice().reverse()];

  return (
    <section className="py-16 md:py-24">
      <div className="section-container mb-8">
        <h2 className="text-xl md:text-2xl font-semibold">Tech Stack</h2>
        <p className="text-muted-foreground text-sm mt-2">
          Tools and technologies I work with to ship meaningful products.
        </p>
      </div>

      {/* Scrolling Row 1 */}
      <div className="relative overflow-hidden mb-4">
        <div className="flex animate-scroll-left">
          {row1.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={`row1-${tech.name}-${index}`}
                className="flex-shrink-0 mx-2"
              >
                <div className="flex flex-col items-center gap-2 px-5 py-4 bg-card rounded-xl border border-border/50 hover:border-border hover:bg-card/80 transition-all min-w-[100px] group cursor-default">
                  <Icon 
                    className="w-8 h-8 group-hover:scale-110 transition-transform"
                    style={{ color: tech.color }}
                  />
                  <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                    {tech.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scrolling Row 2 - Reverse direction */}
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll-right">
          {row2.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={`row2-${tech.name}-${index}`}
                className="flex-shrink-0 mx-2"
              >
                <div className="flex flex-col items-center gap-2 px-5 py-4 bg-card rounded-xl border border-border/50 hover:border-border hover:bg-card/80 transition-all min-w-[100px] group cursor-default">
                  <Icon 
                    className="w-8 h-8 group-hover:scale-110 transition-transform"
                    style={{ color: tech.color }}
                  />
                  <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                    {tech.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;