const Skills = () => {
  const capabilities = [
    {
      title: "Frontend Development",
      description: "React, Next.js, TypeScript, and modern CSS. Building performant, accessible interfaces.",
    },
    {
      title: "Design Systems",
      description: "Component libraries, design tokens, and scalable patterns for growing teams.",
    },
    {
      title: "Creative Development",
      description: "Motion design, WebGL, and interactive experiences that captivate.",
    },
    {
      title: "Backend & APIs",
      description: "Node.js, PostgreSQL, and cloud infrastructure. Full-stack when needed.",
    },
  ];

  const tools = [
    "React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", 
    "Tailwind", "Figma", "Framer Motion", "Three.js", "AWS"
  ];

  return (
    <section id="skills" className="py-32 px-6 md:px-12 lg:px-24 bg-card/30">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-8 mb-16">
          <span className="section-label">Capabilities</span>
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs text-muted-foreground">02</span>
        </div>

        {/* Capabilities grid */}
        <div className="grid md:grid-cols-2 gap-px bg-border mb-24">
          {capabilities.map((item, index) => (
            <div 
              key={item.title}
              className="bg-background p-8 md:p-12 hover-lift group"
            >
              <span className="text-xs text-muted-foreground">0{index + 1}</span>
              <h3 className="text-xl font-serif italic mt-4 mb-4 group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tools */}
        <div>
          <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-8">Tools & Technologies</p>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span 
                key={tool}
                className="px-4 py-2 text-sm border border-border hover:border-foreground/30 hover:bg-card transition-all cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
