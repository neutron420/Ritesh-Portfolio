import { 
  Code, 
  Database, 
  Globe, 
  Layout, 
  Server, 
  Smartphone,
  Layers,
  GitBranch,
  Cloud,
  Zap
} from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: Layout,
      title: "Frontend Development",
      description: "Building responsive, interactive UIs with modern frameworks",
      color: "primary",
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Designing robust APIs and server-side architecture",
      color: "secondary",
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Optimizing data structures for performance and scalability",
      color: "accent",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Creating seamless experiences across all devices",
      color: "primary",
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Deploying and managing applications in the cloud",
      color: "secondary",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed, accessibility, and SEO",
      color: "accent",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      primary: "bg-primary/20 text-primary",
      secondary: "bg-secondary/20 text-secondary",
      accent: "bg-accent/20 text-accent",
    };
    return colors[color as keyof typeof colors] || colors.primary;
  };

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-20">
            <p className="text-secondary font-medium tracking-wider mb-4">スキル</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern web applications from concept to deployment
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mt-6" />
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="group glass-card p-8 transition-all duration-500 hover:scale-105 hover:glow-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-2xl ${getColorClasses(skill.color)} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <skill.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
