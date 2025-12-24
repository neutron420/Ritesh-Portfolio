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
  SiVercel,
  SiVite
} from "react-icons/si";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const TechStackSection = () => {
  const technologies = [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "currentColor" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Express", icon: SiExpress, color: "currentColor" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "Solidity", icon: SiSolidity, color: "currentColor" },
    { name: "Rust", icon: SiRust, color: "currentColor" },
    { name: "Ethereum", icon: SiEthereum, color: "#627EEA" },
    { name: "Redis", icon: SiRedis, color: "#DC382D" },
    { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
    { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
    { name: "Linux", icon: SiLinux, color: "#FCC624" },
    { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
    { name: "Vercel", icon: SiVercel, color: "currentColor" },
    { name: "Vite", icon: SiVite, color: "#646CFF" },
  ];

  const TechCard = ({ tech }: { tech: typeof technologies[0] }) => {
    const Icon = tech.icon;
    return (
      <div className="flex-shrink-0 px-2">
        <div className="flex flex-col items-center gap-2 px-5 py-4 bg-card rounded-xl border border-border hover:border-accent/50 transition-all min-w-[100px] group cursor-default">
          <Icon 
            className="w-8 h-8 group-hover:scale-110 transition-transform text-foreground"
            style={{ color: tech.color }}
          />
          <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
            {tech.name}
          </span>
        </div>
      </div>
    );
  };

  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="tech" className="py-16 md:py-24">
      <div 
        ref={ref}
        className={`section-container mb-8 scroll-reveal ${isVisible ? 'visible' : ''}`}
      >
        <h2 className="text-xl md:text-2xl font-semibold">Tech Stack</h2>
        <p className="text-muted-foreground text-sm mt-2">
          Tools and technologies I work with to ship meaningful products.
        </p>
      </div>

      {/* Scrolling Row 1 - Left */}
      <div className="relative overflow-hidden mb-4 group/scroll">
        <div className="flex w-max animate-marquee-left group-hover/scroll:[animation-play-state:paused]">
          {[...technologies, ...technologies].map((tech, index) => (
            <TechCard key={`row1-${index}`} tech={tech} />
          ))}
        </div>
      </div>

      {/* Scrolling Row 2 - Right */}
      <div className="relative overflow-hidden group/scroll">
        <div className="flex w-max animate-marquee-right group-hover/scroll:[animation-play-state:paused]">
          {[...technologies.slice().reverse(), ...technologies.slice().reverse()].map((tech, index) => (
            <TechCard key={`row2-${index}`} tech={tech} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;