const Experience = () => {
  const experience = [
    {
      role: "Senior Developer",
      company: "Tech Innovations",
      period: "2022 — Present",
      description: "Leading frontend architecture and design system development for enterprise clients.",
    },
    {
      role: "Full Stack Developer",
      company: "Digital Studio",
      period: "2020 — 2022",
      description: "Built and shipped products across web and mobile, from concept to production.",
    },
    {
      role: "Frontend Developer",
      company: "Creative Agency",
      period: "2019 — 2020",
      description: "Crafted interactive experiences and marketing sites for global brands.",
    },
  ];

  const education = [
    {
      degree: "B.S. Computer Science",
      school: "University of Technology",
      year: "2019",
    },
  ];

  return (
    <section id="experience" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-8 mb-20">
          <span className="section-label">Experience</span>
          <div className="flex-1 h-px bg-gradient-to-r from-border via-accent/20 to-transparent" />
          <span className="text-[10px] text-muted-foreground tracking-wider">04</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Work experience */}
          <div className="lg:col-span-8">
            <div className="space-y-0">
              {experience.map((item) => (
                <div 
                  key={item.company}
                  className="py-8 border-t border-border/50 group hover:bg-card/30 transition-colors duration-300 px-4 -mx-4"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg serif group-hover:text-accent transition-colors duration-300">
                        {item.role}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{item.company}</p>
                      <p className="text-sm text-muted-foreground/70 mt-4 max-w-md leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <span className="text-[10px] text-accent/50 whitespace-nowrap tracking-wider">
                      {item.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & extras */}
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-6">Education</p>
              {education.map((item) => (
                <div key={item.school} className="mb-8">
                  <h4 className="serif text-lg">{item.degree}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{item.school}</p>
                  <p className="text-[10px] text-accent/50 mt-2 tracking-wider">{item.year}</p>
                </div>
              ))}

              <div className="pt-8 border-t border-border/50 mt-8">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">Languages</p>
                <p className="text-sm text-muted-foreground">English, Hindi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;