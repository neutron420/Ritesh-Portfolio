import { Code2, Palette, Rocket, Sparkles } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time",
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "Blending aesthetics with functionality for memorable experiences",
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Efficient workflows that bring ideas to life quickly",
    },
    {
      icon: Sparkles,
      title: "Attention to Detail",
      description: "Polishing every pixel until it feels just right",
    },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-section" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-secondary/10 rounded-full blur-[80px]" />

      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-20">
            <p className="text-primary font-medium tracking-wider mb-4">私について</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
          </div>

          {/* Content grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer with a love for creating beautiful, 
                functional web applications. With years of experience in both frontend and 
                backend technologies, I bring ideas to life through clean code and creative design.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in tech started with curiosity and has evolved into a deep appreciation 
                for crafting digital experiences that make a difference. I believe in continuous 
                learning and pushing the boundaries of what's possible on the web.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or enjoying a good anime series. I'm always open to new 
                opportunities and collaborations.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                {[
                  { value: "5+", label: "Years Experience" },
                  { value: "50+", label: "Projects Completed" },
                  { value: "30+", label: "Happy Clients" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</p>
                    <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlight cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className={`glass-card p-6 glow-border transition-all duration-500 hover:scale-105 hover:bg-glass/60 ${
                    index % 2 === 1 ? 'translate-y-8' : ''
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
