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
  SiRust,
  SiRedis,
  SiGraphql,
  SiAmazonwebservices,
  SiLinux,
  SiPrisma,
  SiKubernetes,
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
  SiApachekafka,
  SiGnubash,
  SiUbuntu,
  SiFirebase,
  SiPython,
  SiVercel,
  SiRender,
  SiGithubactions,
  SiPwa,
  SiJenkins,
  SiVite,
  SiFramer,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscDebugStart } from "react-icons/vsc";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { motion } from "framer-motion";

const TechStackSection = () => {
  const categories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
        { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
        { name: "React Native", icon: SiReact, color: "text-[#61DAFB]" },
        { name: "PWA Builder", icon: SiPwa, color: "text-[#5A0FC8]" },
        { name: "Vite", icon: SiVite, color: "text-[#646CFF]" },
        { name: "Framer Motion", icon: SiFramer, color: "text-foreground" },
        { name: "HTML5 & CSS3", icon: SiTailwindcss, color: "text-[#E34F26]" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
        { name: "Express", icon: SiExpress, color: "text-foreground" },
        { name: "Bun", icon: SiBun, color: "text-[#FBF0DF]" },
        { name: "Rust", icon: SiRust, color: "text-[#DEA584]" },
        { name: "Java", icon: FaJava, color: "text-[#ED8B00]" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
        { name: "Prisma", icon: SiPrisma, color: "text-foreground" },
        { name: "Redis", icon: SiRedis, color: "text-[#DC382D]" },
        { name: "gRPC", icon: VscDebugStart, color: "text-[#4DB6AC]" },
      ],
    },
    {
      title: "DevOps & Infrastructure",
      skills: [
        { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
        { name: "Kubernetes", icon: SiKubernetes, color: "text-[#326CE5]" },
        { name: "AWS", icon: SiAmazonwebservices, color: "text-[#FF9900]" },
        { name: "Terraform", icon: SiTerraform, color: "text-[#844FBA]" },
        { name: "ArgoCD", icon: SiArgo, color: "text-[#EF7B4D]" },
        { name: "Jenkins", icon: SiJenkins, color: "text-[#D24939]" },
        { name: "Kafka", icon: SiApachekafka, color: "text-foreground" },
        { name: "Cloudflare", icon: SiCloudflare, color: "text-[#F38020]" },
        { name: "Linux", icon: SiLinux, color: "text-[#FCC624]" },
      ],
    },
    {
      title: "Tools & Testing",
      skills: [
        { name: "Git", icon: SiGit, color: "text-[#F05032]" },
        { name: "GitHub Actions", icon: SiGithubactions, color: "text-[#2088FF]" },
        { name: "Jest", icon: SiJest, color: "text-[#C21325]" },
        { name: "Cypress", icon: SiCypress, color: "text-[#69D3A7]" },
        { name: "Prometheus", icon: SiPrometheus, color: "text-[#E6522C]" },
        { name: "Grafana", icon: SiGrafana, color: "text-[#F46800]" },
        { name: "Bash", icon: SiGnubash, color: "text-[#4EAA25]" },
        { name: "Vercel / Render", icon: SiVercel, color: "text-foreground" },
      ],
    },
  ];

  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="tech" className="py-16 md:py-24">
      <div 
        ref={ref}
        className={`section-container scroll-reveal ${isVisible ? 'visible' : ''}`}
      >
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px w-8 bg-accent" />
            <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">Expertise</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">Tech Stack</h2>
          <p className="text-sm text-muted-foreground mt-2 text-center max-w-lg">
            A comprehensive suite of technologies I use to build robust, scalable, and user-centric applications.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 max-w-5xl mx-auto">
          {categories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-card/40 backdrop-blur-sm rounded-2xl border border-border/40 p-5 md:p-6 hover:border-accent/30 hover:shadow-[0_0_50px_-12px_hsl(var(--accent)/0.1)] transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/[0.04] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex flex-col md:flex-row md:items-center gap-6 relative z-10">
                <div className="md:w-48 shrink-0">
                  <h3 className="text-lg md:text-xl font-bold flex items-center gap-3 group-hover:text-accent transition-colors">
                    <span className="w-1.5 h-6 bg-accent rounded-full transition-all" />
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <div 
                        key={skill.name} 
                        className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-muted/30 border border-border/50 hover:border-accent/20 hover:bg-accent/5 transition-all duration-300 group/skill"
                      >
                        <Icon className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover/skill:scale-110 ${skill.color}`} />
                        <span className="text-xs font-semibold text-muted-foreground group-hover/skill:text-foreground whitespace-nowrap">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
