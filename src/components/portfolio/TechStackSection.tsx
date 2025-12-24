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
  ];

  const technologies2 = [
    { name: "Solidity", icon: SiSolidity, color: "#ffffff" },
    { name: "Rust", icon: SiRust, color: "#ffffff" },
    { name: "Ethereum", icon: SiEthereum, color: "#627EEA" },
    { name: "Redis", icon: SiRedis, color: "#DC382D" },
    { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
    { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
    { name: "Linux", icon: SiLinux, color: "#FCC624" },
    { name: "Prisma", icon: SiPrisma, color: "#ffffff" },
    { name: "Vercel", icon: SiVercel, color: "#ffffff" },
    { name: "Vite", icon: SiVite, color: "#646CFF" },
  ];

  const TechCard = ({ tech }: { tech: typeof technologies[0] }) => {
    const Icon = tech.icon;
    return (
      <div className="flex items-center gap-3 px-4 py-3 bg-card/50 border border-border/50 rounded-lg whitespace-nowrap shrink-0">
        <Icon className="w-5 h-5 shrink-0" style={{ color: tech.color }} />
        <span className="text-sm text-foreground">{tech.name}</span>
      </div>
    );
  };

  const { ref, isVisible } = useScrollReveal();

  // Duplicate items for seamless loop
  const row1Items = [...technologies, ...technologies, ...technologies];
  const row2Items = [...technologies2, ...technologies2, ...technologies2];

  return (
    <section id="tech" className="py-16 md:py-24 overflow-hidden">
      <div 
        ref={ref}
        className={`section-container mb-8 scroll-reveal ${isVisible ? 'visible' : ''}`}
      >
        <h2 className="text-xl md:text-2xl font-semibold">Tech Stack</h2>
        <p className="text-muted-foreground text-sm mt-2">
          Tools and technologies I work with to ship meaningful products.
        </p>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Left fade gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        
        {/* Right fade gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Row 1 - slides left */}
        <div className="flex gap-3 mb-3 animate-marquee-left hover:[animation-play-state:paused]">
          {row1Items.map((tech, index) => (
            <TechCard key={`${tech.name}-${index}`} tech={tech} />
          ))}
        </div>

        {/* Row 2 - slides right */}
        <div className="flex gap-3 animate-marquee-right hover:[animation-play-state:paused]">
          {row2Items.map((tech, index) => (
            <TechCard key={`${tech.name}-${index}`} tech={tech} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
