const TechStack = () => {
  const categories = [
    {
      title: "Frontend",
      description: "Crafting responsive, performant user interfaces",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Framer Motion"],
    },
    {
      title: "Backend",
      description: "Building scalable server-side architectures",
      technologies: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "GraphQL", "Redis"],
    },
    {
      title: "DevOps",
      description: "Deploying and maintaining robust infrastructure",
      technologies: ["Docker", "Kubernetes", "AWS", "CI/CD", "Linux", "Nginx", "Terraform"],
    },
    {
      title: "Blockchain",
      description: "Developing decentralized applications & smart contracts",
      technologies: ["Solidity", "Ethereum", "Web3.js", "Hardhat", "IPFS", "Smart Contracts"],
    },
  ];

  return (
    <section id="stack" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-8 mb-16">
          <span className="section-label">Tech Stack</span>
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs text-muted-foreground">02</span>
        </div>

        {/* Categories grid */}
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {categories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-background p-8 md:p-12 group hover:bg-card/50 transition-colors"
            >
              {/* Category header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-serif italic group-hover:text-accent transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    {category.description}
                  </p>
                </div>
                <span className="text-xs text-muted-foreground">0{index + 1}</span>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-8">
                {category.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1.5 text-sm border border-border hover:border-accent hover:text-accent transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom accent */}
        <div className="mt-16 flex items-center gap-8">
          <div className="flex-1 h-px bg-border" />
          <p className="text-xs text-muted-foreground tracking-wider">
            Always learning, always building
          </p>
          <div className="flex-1 h-px bg-border" />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
