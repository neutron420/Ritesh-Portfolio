import { 
  Code2, 
  Server, 
  Cloud, 
  Link2,
  Boxes,
  Database,
  Cpu,
  Container,
  Globe,
  Layers,
  Workflow,
  Shield
} from "lucide-react";

const TechStack = () => {
  const categories = [
    {
      title: "Frontend",
      subtitle: "フロントエンド",
      icon: Code2,
      description: "Crafting responsive, performant interfaces",
      technologies: [
        { name: "React", icon: Boxes },
        { name: "Next.js", icon: Globe },
        { name: "TypeScript", icon: Code2 },
        { name: "Tailwind CSS", icon: Layers },
        { name: "Redux", icon: Workflow },
        { name: "Framer Motion", icon: Cpu },
      ],
    },
    {
      title: "Backend",
      subtitle: "バックエンド",
      icon: Server,
      description: "Building scalable server architectures",
      technologies: [
        { name: "Node.js", icon: Server },
        { name: "Express", icon: Workflow },
        { name: "Python", icon: Code2 },
        { name: "PostgreSQL", icon: Database },
        { name: "MongoDB", icon: Database },
        { name: "GraphQL", icon: Link2 },
        { name: "Redis", icon: Cpu },
      ],
    },
    {
      title: "DevOps",
      subtitle: "デブオプス",
      icon: Cloud,
      description: "Deploying robust infrastructure",
      technologies: [
        { name: "Docker", icon: Container },
        { name: "Kubernetes", icon: Boxes },
        { name: "AWS", icon: Cloud },
        { name: "CI/CD", icon: Workflow },
        { name: "Linux", icon: Cpu },
        { name: "Nginx", icon: Server },
        { name: "Terraform", icon: Layers },
      ],
    },
    {
      title: "Blockchain",
      subtitle: "ブロックチェーン",
      icon: Link2,
      description: "Developing decentralized systems",
      technologies: [
        { name: "Solidity", icon: Code2 },
        { name: "Rust", icon: Shield },
        { name: "Ethereum", icon: Link2 },
        { name: "Hardhat", icon: Workflow },
        { name: "IPFS", icon: Cloud },
        { name: "Smart Contracts", icon: Layers },
      ],
    },
  ];

  return (
    <section id="stack" className="py-32 px-6 md:px-12 lg:px-24 bg-card/20">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-8 mb-20">
          <span className="section-label">Tech Stack</span>
          <div className="flex-1 h-px bg-gradient-to-r from-border via-accent/20 to-transparent" />
          <span className="text-[10px] text-muted-foreground tracking-wider">02</span>
        </div>

        {/* Categories grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, index) => {
            const CategoryIcon = category.icon;
            return (
              <div 
                key={category.title}
                className="group relative bg-background border border-border/50 p-8 md:p-10 transition-all duration-500 hover:border-accent/30"
              >
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-accent/50 to-transparent group-hover:h-12 transition-all duration-500" />
                  <div className="absolute top-0 right-0 w-8 h-px bg-gradient-to-l from-accent/50 to-transparent group-hover:w-12 transition-all duration-500" />
                </div>

                {/* Category header */}
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center border border-border/50 group-hover:border-accent/50 transition-colors">
                      <CategoryIcon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium tracking-tight group-hover:text-accent transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-[10px] text-muted-foreground/60 tracking-wider mt-0.5">
                        {category.subtitle}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] text-muted-foreground/40">0{index + 1}</span>
                </div>

                <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                  {category.description}
                </p>

                {/* Technologies grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {category.technologies.map((tech) => {
                    const TechIcon = tech.icon;
                    return (
                      <div 
                        key={tech.name}
                        className="group/tech flex items-center gap-2 px-3 py-2.5 bg-muted/30 border border-transparent hover:border-accent/30 hover:bg-muted/50 transition-all duration-300 cursor-default"
                      >
                        <TechIcon className="w-3.5 h-3.5 text-muted-foreground group-hover/tech:text-accent transition-colors flex-shrink-0" />
                        <span className="text-xs text-foreground/80 group-hover/tech:text-foreground transition-colors truncate">
                          {tech.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom accent */}
        <div className="mt-20 flex items-center gap-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <p className="text-[10px] text-muted-foreground/50 tracking-[0.3em] uppercase">
            常に学び、常に構築
          </p>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default TechStack;