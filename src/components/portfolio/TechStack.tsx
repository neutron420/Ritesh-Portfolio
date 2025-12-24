const TechStack = () => {
  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Framework" },
    { name: "TypeScript", category: "Language" },
    { name: "Node.js", category: "Runtime" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "GraphQL", category: "API" },
    { name: "Docker", category: "DevOps" },
    { name: "AWS", category: "Cloud" },
    { name: "Git", category: "Version Control" },
    { name: "Figma", category: "Design" },
    { name: "Python", category: "Language" },
    { name: "Redis", category: "Cache" },
    { name: "Prisma", category: "ORM" },
    { name: "Jest", category: "Testing" },
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Frontend: "from-primary/20 to-primary/5 border-primary/30 text-primary",
      Framework: "from-secondary/20 to-secondary/5 border-secondary/30 text-secondary",
      Language: "from-accent/20 to-accent/5 border-accent/30 text-accent",
      Runtime: "from-primary/20 to-primary/5 border-primary/30 text-primary",
      Database: "from-secondary/20 to-secondary/5 border-secondary/30 text-secondary",
      Styling: "from-accent/20 to-accent/5 border-accent/30 text-accent",
      API: "from-primary/20 to-primary/5 border-primary/30 text-primary",
      DevOps: "from-secondary/20 to-secondary/5 border-secondary/30 text-secondary",
      Cloud: "from-accent/20 to-accent/5 border-accent/30 text-accent",
      "Version Control": "from-primary/20 to-primary/5 border-primary/30 text-primary",
      Design: "from-secondary/20 to-secondary/5 border-secondary/30 text-secondary",
      Cache: "from-accent/20 to-accent/5 border-accent/30 text-accent",
      ORM: "from-primary/20 to-primary/5 border-primary/30 text-primary",
      Testing: "from-secondary/20 to-secondary/5 border-secondary/30 text-secondary",
    };
    return colors[category] || colors.Frontend;
  };

  return (
    <section id="tech" className="py-32 relative overflow-hidden bg-gradient-section">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-20">
            <p className="text-accent font-medium tracking-wider mb-4">技術スタック</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Tech <span className="gradient-text">Stack</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The technologies I work with to bring ideas to life
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mt-6" />
          </div>

          {/* Tech grid */}
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className={`group relative px-6 py-3 rounded-full bg-gradient-to-br ${getCategoryColor(tech.category)} border backdrop-blur-sm transition-all duration-300 hover:scale-110 cursor-default`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="font-medium">{tech.name}</span>
                
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-card rounded-lg text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {tech.category}
                </div>
              </div>
            ))}
          </div>

          {/* Animated line decoration */}
          <div className="mt-20 relative h-px">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent animate-shimmer bg-[length:200%_100%]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
