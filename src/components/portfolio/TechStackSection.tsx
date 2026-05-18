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
  SiGo,
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
  SiJavascript,
  SiRabbitmq,
  SiTurborepo,
  SiSupabase,
  SiElasticsearch,
  SiLogstash,
  SiKibana,
  SiHelm,
  SiClerk
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscDebugStart } from "react-icons/vsc";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { motion } from "framer-motion";
import { MarkerHighlight } from "@/components/ui/marker-highlight";

const TechStackSection = () => {
  const categories = [
    {
      title: "Languages",
      skills: [
        { name: "Go", icon: SiGo, color: "text-[#00ADD8]" },
        { name: "Java", icon: FaJava, color: "text-[#ED8B00]" },
        { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
        { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
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
        { name: "Helm", icon: SiHelm, color: "text-[#0F1689]" },
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
        { name: "RabbitMQ", icon: SiRabbitmq, color: "text-[#FF6600]" },
        { name: "Turborepo", icon: SiTurborepo, color: "text-[#EF4444]" },
        { name: "Vercel / Render", icon: SiVercel, color: "text-foreground" },
        { name: "Elasticsearch", icon: SiElasticsearch, color: "text-[#FEC111]" },
      ],
    },
  ];

  const row1Skills = [
    "Node.js", "Express", "WebSockets", "Docker", "Kubernetes", "Terraform", "Prisma", 
    "Redis", "PostgreSQL", "React", "Next.js", "Actix Web", "Rust", "Clerk"
  ];

  const row2Skills = [
    "Go", "Gin", "RabbitMQ", "Apache Kafka", "Ansible", "AWS", "ArgoCD", "Cloudflare", 
    "Tailwind CSS", "TypeScript", "Helm", "Git", "GitHub Actions"
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
          <h2 className="text-2xl md:text-3xl font-bold"><MarkerHighlight before="Tech " highlight="Stack" markerColor="#facc15" /></h2>
          <p className="text-sm text-muted-foreground mt-2 text-center max-w-lg">
            A comprehensive suite of technologies I use to build robust, scalable, and user-centric applications.
          </p>
        </div>

        {/* Endless Skill Marquee (Airport conveyor belt style - Slow & Spacious) */}
        <div className="w-full overflow-hidden relative mb-16 select-none max-w-5xl mx-auto py-3 flex flex-col gap-6">
          {/* Edge Gradient Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background via-background/60 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background via-background/60 to-transparent z-10 pointer-events-none" />

          {/* Row 1: Scrolling Left */}
          <div className="flex w-full overflow-hidden">
            <motion.div
              className="flex gap-16 shrink-0 items-center justify-around min-w-full text-base md:text-lg font-bold tracking-tight text-foreground/70"
              animate={{ x: [0, "-50%"] }}
              transition={{ ease: "linear", duration: 65, repeat: Infinity }}
            >
              {[...row1Skills, ...row1Skills].map((skill, index) => (
                <span key={index} className="hover:text-foreground transition-colors cursor-default whitespace-nowrap">
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Row 2: Scrolling Right */}
          <div className="flex w-full overflow-hidden">
            <motion.div
              className="flex gap-16 shrink-0 items-center justify-around min-w-full text-base md:text-lg font-bold tracking-tight text-foreground/70"
              animate={{ x: ["-50%", 0] }}
              transition={{ ease: "linear", duration: 65, repeat: Infinity }}
            >
              {[...row2Skills, ...row2Skills].map((skill, index) => (
                <span key={index} className="hover:text-foreground transition-colors cursor-default whitespace-nowrap">
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {categories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-card/40 backdrop-blur-sm rounded-2xl border border-border/40 p-6 hover:border-border/80 transition-all duration-500 overflow-hidden flex flex-col justify-between"
            >
              
              <div className="relative z-10 w-full">
                <h3 className="text-base md:text-lg font-bold flex items-center gap-2 mb-4 transition-colors text-foreground">
                  <span className="w-1.5 h-5 bg-accent rounded-full transition-all" />
                  {category.title}
                </h3>

                <div className="grid grid-cols-2 gap-2.5">
                  {category.skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <div 
                        key={skill.name} 
                        className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-muted/30 border border-border/50 hover:border-border hover:bg-muted/60 transition-all duration-300 group/skill w-full"
                      >
                        <Icon className={`w-4.5 h-4.5 transition-transform duration-300 group-hover/skill:scale-105 shrink-0 ${skill.color}`} />
                        <span className="text-xs font-semibold text-muted-foreground group-hover/skill:text-foreground">
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
