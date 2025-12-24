import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description: "Leading development of enterprise-scale applications, mentoring junior developers, and architecting cloud-native solutions.",
    },
    {
      type: "work",
      title: "Full Stack Developer",
      company: "Digital Solutions Co.",
      period: "2020 - 2022",
      description: "Built and maintained multiple client projects using React, Node.js, and PostgreSQL. Implemented CI/CD pipelines and improved code quality.",
    },
    {
      type: "work",
      title: "Frontend Developer",
      company: "Creative Studio",
      period: "2019 - 2020",
      description: "Created responsive web applications and interactive UI components. Collaborated closely with designers to bring visions to life.",
    },
  ];

  const education = [
    {
      type: "education",
      title: "B.S. Computer Science",
      company: "University of Technology",
      period: "2015 - 2019",
      description: "Graduated with honors. Focused on software engineering, algorithms, and human-computer interaction.",
    },
    {
      type: "education",
      title: "Full Stack Certification",
      company: "Online Academy",
      period: "2019",
      description: "Intensive program covering modern web development technologies and best practices.",
    },
  ];

  const TimelineItem = ({ item, index, isLast }: { item: typeof experiences[0]; index: number; isLast: boolean }) => (
    <div className="relative pl-8 pb-12 last:pb-0">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[11px] top-8 bottom-0 w-px bg-gradient-to-b from-primary/50 to-transparent" />
      )}
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-card border-2 border-primary flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-primary" />
      </div>

      {/* Content */}
      <div className="glass-card p-6 ml-4 transition-all duration-300 hover:glow-border hover:scale-[1.02]">
        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
          <Calendar className="w-4 h-4" />
          <span>{item.period}</span>
        </div>
        <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
        <p className="text-primary mb-3">{item.company}</p>
        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
      </div>
    </div>
  );

  return (
    <section id="experience" className="py-32 relative overflow-hidden bg-gradient-section">
      {/* Decorative elements */}
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />

      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-20">
            <p className="text-secondary font-medium tracking-wider mb-4">経歴</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Experience & <span className="gradient-text">Education</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My professional journey and academic background
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mt-6" />
          </div>

          {/* Two column layout */}
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Experience */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-primary/20">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Work Experience</h3>
              </div>
              <div>
                {experiences.map((exp, index) => (
                  <TimelineItem 
                    key={exp.title + exp.company} 
                    item={exp} 
                    index={index}
                    isLast={index === experiences.length - 1}
                  />
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-secondary/20">
                  <GraduationCap className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>
              <div>
                {education.map((edu, index) => (
                  <TimelineItem 
                    key={edu.title + edu.company} 
                    item={edu} 
                    index={index}
                    isLast={index === education.length - 1}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
