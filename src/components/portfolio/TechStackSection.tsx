import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiExpress, 
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
  SiKubernetes,
  SiGooglecloud,
  SiCloudflare,
  SiJest,
  SiTestinglibrary
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
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
    { name: "Java", icon: FaJava, color: "#007396" },
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
    { name: "gRPC", icon: TbApi, color: "#244c5a" },
    { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
    { name: "GCP", icon: SiGooglecloud, color: "#4285F4" },
    { name: "Cloudflare", icon: SiCloudflare, color: "#F38020" },
    { name: "React Native", icon: SiReact, color: "#61DAFB" },
    { name: "Unit Testing", icon: SiJest, color: "#C21325" },
    { name: "Integration Testing", icon: SiTestinglibrary, color: "#E33332" },
  ];

  const TechCard = ({ tech }: { tech: typeof technologies[0] }) => {
    const Icon = tech.icon;
    return (
      <div className="flex items-center gap-2.5 px-4 py-2.5 bg-card/50 border border-border/50 rounded-lg whitespace-nowrap shrink-0">
        <Icon className="w-5 h-5 md:w-6 md:h-6 shrink-0" style={{ color: tech.color }} />
        <span className="text-sm font-medium text-foreground">{tech.name}</span>
      </div>
    );
  };

  const { ref, isVisible } = useScrollReveal();

  // Duplicate items for seamless infinite loop - need exact multiples for perfect loop
  const row1Items = [...technologies, ...technologies, ...technologies, ...technologies, ...technologies];
  const row2Items = [...technologies2, ...technologies2, ...technologies2, ...technologies2, ...technologies2];

  return (
    <section id="tech" className="py-12 md:py-16 overflow-hidden">
      <div 
        ref={ref}
        className={`section-container mb-6 scroll-reveal ${isVisible ? 'visible' : ''}`}
      >
        <h2 className="text-xl md:text-2xl font-semibold">Tech Stack</h2>
        <p className="text-muted-foreground text-sm mt-1.5">
          Tools and technologies I work with to ship meaningful products.
        </p>
      </div>

      {/* Marquee container */}
      <div className="relative overflow-hidden">
        {/* Left fade gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        
        {/* Right fade gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Row 1 - slides left */}
        <div className="flex gap-2 mb-2 animate-marquee-left" style={{ width: 'fit-content' }}>
          {row1Items.map((tech, index) => (
            <TechCard key={`${tech.name}-${index}`} tech={tech} />
          ))}
        </div>

        {/* Row 2 - slides right */}
        <div className="flex gap-2 animate-marquee-right" style={{ width: 'fit-content' }}>
          {row2Items.map((tech, index) => (
            <TechCard key={`${tech.name}-${index}`} tech={tech} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
