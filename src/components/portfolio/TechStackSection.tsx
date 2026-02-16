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
  SiSolana,
  SiRedis,
  SiGraphql,
  SiAmazonwebservices,
  SiLinux,
  SiPrisma,
  SiKubernetes,
  SiGooglecloud,
  SiCloudflare,
  SiJest,
  SiCypress,
  SiPrometheus,
  SiGrafana,
  SiHono,
  SiBun,
  SiAnsible,
  SiTerraform,
  SiArgo,
  SiWeb3Dotjs,
  SiClerk,
  SiGnubash,
  SiUbuntu,
  SiFirebase,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import jenkinsLogo from "@/assets/jenkins-logo.svg";
import { VscDebugStart } from "react-icons/vsc";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useTheme } from "@/components/ThemeProvider";
import { useEffect, useState } from "react";

const TechStackSection = () => {
  const { theme } = useTheme();
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    const isDarkMode = root.classList.contains("dark");
    setIsDark(isDarkMode);

    const observer = new MutationObserver(() => {
      setIsDark(root.classList.contains("dark"));
    });

    observer.observe(root, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, [theme]);

  // Helper function to get theme-aware color
  const getThemeColor = (lightColor: string, darkColor: string, defaultColor: string) => {
    if (defaultColor === "#ffffff" || defaultColor === "#000000") {
      return isDark ? lightColor : darkColor;
    }
    return defaultColor;
  };

  const technologies = [
    { name: "React", icon: SiReact, color: "#61DAFB", lightColor: "#61DAFB", darkColor: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff", lightColor: "#000000", darkColor: "#ffffff" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6", lightColor: "#3178C6", darkColor: "#3178C6" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933", lightColor: "#339933", darkColor: "#339933" },
    { name: "Express", icon: SiExpress, color: "#ffffff", lightColor: "#000000", darkColor: "#ffffff" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", lightColor: "#06B6D4", darkColor: "#06B6D4" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", lightColor: "#4169E1", darkColor: "#4169E1" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248", lightColor: "#47A248", darkColor: "#47A248" },
    { name: "Java", icon: FaJava, color: "#007396", lightColor: "#007396", darkColor: "#007396" },
    { name: "Docker", icon: SiDocker, color: "#2496ED", lightColor: "#2496ED", darkColor: "#2496ED" },
    { name: "Git", icon: SiGit, color: "#F05032", lightColor: "#F05032", darkColor: "#F05032" },
  ];

  const technologies2 = [
    { name: "Solidity", icon: SiSolidity, color: "#ffffff", lightColor: "#363636", darkColor: "#ffffff" },
    { name: "Rust", icon: SiRust, color: "#ffffff", lightColor: "#000000", darkColor: "#ffffff" },
    { name: "Solana", icon: SiSolana, color: "#9945FF", lightColor: "#9945FF", darkColor: "#9945FF" },
    { name: "Web3.js", icon: SiWeb3Dotjs, color: "#F16822", lightColor: "#F16822", darkColor: "#F16822" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28", lightColor: "#FFCA28", darkColor: "#FFCA28" },
    { name: "Hono", icon: SiHono, color: "#E36002", lightColor: "#E36002", darkColor: "#FF7E1F" },
    { name: "Bun", icon: SiBun, color: "#FBF0DF", lightColor: "#14151A", darkColor: "#FBF0DF" },
    { name: "Redis", icon: SiRedis, color: "#DC382D", lightColor: "#DC382D", darkColor: "#DC382D" },
    { name: "GraphQL", icon: SiGraphql, color: "#E10098", lightColor: "#E10098", darkColor: "#E10098" },
    { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900", lightColor: "#FF9900", darkColor: "#FF9900" },
    { name: "Linux", icon: SiLinux, color: "#FCC624", lightColor: "#FCC624", darkColor: "#FCC624" },
    { name: "Prisma", icon: SiPrisma, color: "#ffffff", lightColor: "#2D3748", darkColor: "#ffffff" },
    { name: "gRPC", icon: VscDebugStart, color: "#244c5a", lightColor: "#244c5a", darkColor: "#4DB6AC" },
    { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5", lightColor: "#326CE5", darkColor: "#326CE5" },
    { name: "Terraform", icon: SiTerraform, color: "#844FBA", lightColor: "#844FBA", darkColor: "#844FBA" },
    { name: "Ansible", icon: SiAnsible, color: "#EE0000", lightColor: "#EE0000", darkColor: "#EE0000" },
    { name: "ArgoCD", icon: SiArgo, color: "#EF7B4D", lightColor: "#EF7B4D", darkColor: "#EF7B4D" },
    { name: "GCP", icon: SiGooglecloud, color: "#4285F4", lightColor: "#4285F4", darkColor: "#4285F4" },
    { name: "Cloudflare", icon: SiCloudflare, color: "#F38020", lightColor: "#F38020", darkColor: "#F38020" },
    { name: "Clerk", icon: SiClerk, color: "#6C47FF", lightColor: "#6C47FF", darkColor: "#6C47FF" },
    { name: "React Native", icon: SiReact, color: "#61DAFB", lightColor: "#61DAFB", darkColor: "#61DAFB" },
    { name: "Bash", icon: SiGnubash, color: "#4EAA25", lightColor: "#4EAA25", darkColor: "#4EAA25" },
    { name: "Ubuntu", icon: SiUbuntu, color: "#E95420", lightColor: "#E95420", darkColor: "#E95420" },
    { name: "Unit Testing", icon: SiJest, color: "#C21325", lightColor: "#C21325", darkColor: "#C21325" },
    { name: "Integration Testing", icon: SiCypress, color: "#17202C", lightColor: "#17202C", darkColor: "#69D3A7" },
    { name: "Prometheus", icon: SiPrometheus, color: "#E6522C", lightColor: "#E6522C", darkColor: "#E6522C" },
    { name: "Grafana", icon: SiGrafana, color: "#F46800", lightColor: "#F46800", darkColor: "#F46800" },
    { name: "Jenkins", icon: () => <img src={jenkinsLogo} alt="Jenkins" className="w-5 h-5 md:w-6 md:h-6" />, color: "#D24939", lightColor: "#D24939", darkColor: "#D24939", isCustomIcon: true },
  ];

  const TechCard = ({ tech }: { tech: typeof technologies[0] & { lightColor?: string; darkColor?: string; isCustomIcon?: boolean } }) => {
    const Icon = tech.icon;
    const iconColor = tech.lightColor && tech.darkColor 
      ? (isDark ? tech.darkColor : tech.lightColor)
      : tech.color;
    
    return (
      <div className="flex items-center gap-2.5 px-4 py-2.5 bg-card/50 border border-border/50 rounded-lg whitespace-nowrap shrink-0">
        {(tech as any).isCustomIcon ? (
          <span className="shrink-0"><Icon /></span>
        ) : (
          <Icon className="w-5 h-5 md:w-6 md:h-6 shrink-0" style={{ color: iconColor }} />
        )}
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
        <h2 className="text-xl md:text-2xl font-semibold">Stack</h2>
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
