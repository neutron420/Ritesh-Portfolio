import { 
  ArrowUpRight, 
  Wifi, 
  Users, 
  ChevronDown, 
  Shield, 
  Globe, 
  Zap, 
  Sparkles, 
  Calendar, 
  Package,
  Terminal,
  FileText,
  Siren
} from "lucide-react";
import { 
  SiGithub, 
  SiReact, 
  SiNodedotjs, 
  SiPostgresql, 
  SiPrisma, 
  SiRedis, 
  SiDocker, 
  SiKubernetes, 
  SiTailwindcss,
  SiWebrtc,
  SiSocketdotio,
  SiAmazonwebservices,
  SiAmazon,
  SiNextdotjs,
  SiWeb3Dotjs,
  SiArgo,
  SiSolana,
  SiGo,
  SiExpress,
  SiTypescript,
  SiKotlin,
  SiFirebase,
  SiBun,
  SiVercel,
  SiRender,
  SiGithubactions,
  SiJenkins,
  SiMapbox,
  SiTerraform,
  SiApachekafka,
  SiOpenai,
  SiAnsible,
  SiCloudflare,
  SiGooglecloud,
  SiRabbitmq,
  SiGin,
  SiJavascript,
  SiRust,
  SiJsonwebtokens,
  SiNpm
} from "react-icons/si";
import { TbDatabase, TbMap2 } from "react-icons/tb";
import { FaJava, FaAndroid } from "react-icons/fa";
import { MarkerHighlight } from "@/components/ui/marker-highlight";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import React from "react";

interface Project {
  name: string;
  description: string;
  techStack: string[];
  github?: string;
  live?: string;
  apk?: string;
  api?: string;
  user?: string;
  admin?: string;
  status: "live" | "development" | "building" | "coming_soon";
  icon: React.ElementType;
  highlights: string[];
}

// Curated projects data
const projects: Project[] = [
  {
    name: "Swaraj-Desk",
    description: "A comprehensive grievance management portal for government offices. Citizens can register complaints, track status, and receive updates in real-time. Built for Smart India Hackathon. Optimized backend for handling 10k+ concurrent requests with Redis and WebSocket integration. Implemented role-based access control and automated workload distribution for government officials. Integrated automated email notifications for grievance status updates.",
    techStack: ["Next.js", "Node.js", "Bun", "PostgreSQL", "Prisma", "Redis", "WebSockets", "Docker", "Kubernetes", "ArgoCD", "Tailwind CSS", "AWS", "GCP", "Cloudflare"],
    github: "https://github.com/neutron420/sih-swarajdesk-2025",
    user: "https://gsc-user-fe.abhasbehera.in/",
    admin: "https://gsc-admin-fe.abhasbehera.in",
    status: "live" as const,
    icon: Shield,
    highlights: [
      "High-performance backend optimized to handle 10k+ concurrent requests.",
      "Real-time status updates via active WebSockets and automated Redis cache."
    ]
  },
  {
    name: "RakshaSetu",
    description: "An intelligent disaster management and emergency response system. Combines AI triage, real-time SOS reporting, automated volunteer dispatch based on geospatial proximity, and early warning systems. Features offline SOS broadcasting via BLE mesh relay and AI-powered emergency guidance. Integrated PostGIS for high-performance geospatial queries and automated alert zoning. Developed a priority-based message queue using Kafka for critical alert dissemination. Optimized geospatial data indexing for sub-second emergency response times.",
    techStack: ["React Native", "Expo", "Bun", "Express", "PostgreSQL", "PostGIS", "Redis", "Apache Kafka", "TypeScript", "WebSockets", "Docker", "Kubernetes", "AWS"],
    github: "https://github.com/neutron420/RakshaSetu",
    status: "live" as const,
    icon: Siren,
    highlights: [
      "Offline SOS mesh broadcasting via BLE mesh relay without active internet.",
      "Sub-second geospatial match queries using PostGIS volunteer routing."
    ]
  },
  {
    name: "ShareBite",
    description: "A full-stack food rescue platform connecting donors, NGOs, riders, and admins to reduce food waste. Features real-time coordination, map-based pickups, role-based dashboards, and transparent fulfillment workflows with AI-powered support and karma-based engagement mechanics. Leveraged Mapbox for real-time optimal route generation for riders. Integrated Groq AI for automated food quality assessment and donor matching. Implemented a localized 'Karma' point system to incentivize consistent food donations.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Prisma", "PostgreSQL", "Redis", "WebSockets", "Groq", "Mapbox", "Docker", "Terraform" ,"AWS"],
    github: "https://github.com/neutron420/Sharebite",
    status: "live" as const,
    icon: Sparkles,
    highlights: [
      "Optimal donor-NGO route optimization pathways powered by Mapbox.",
      "Groq LLM integrations for automated food validation and matching."
    ]
  },
  {
    name: "Lineo",
    description: "A multi-tenant queue and appointment platform for clinics, hospitals, and service centers. Features real-time coordination, role-based access control, and automated workload distribution. Optimized backend for high-concurrency handling with Go, Redis, and RabbitMQ. Integrated Razorpay for seamless payment processing and payment verification. Implemented real-time queue state tracking and notification system for improved user experience.",
    techStack: ["Next.js", "Go", "Gin", "PostgreSQL", "GORM", "Redis", "RabbitMQ", "Razorpay", "Google Maps API", "Tailwind CSS", "TypeScript", "Docker"],
    github: "https://github.com/neutron420/Lineo",
    apk: "/Lineo.apk",
    api: "https://lineo-five.vercel.app/",
    status: "live" as const,
    icon: Calendar,
    highlights: [
      "Clinic schedules and appointment queues engine written in Go with Gin.",
      "Secure payment gateway configurations with Razorpay checkout webhooks."
    ]
  },
  {
    name: "CodeConnect",
    description: "A high-performance online code compiler and execution engine built with a Rust backend and modern web technologies. Compile and run code in multiple programming languages with secure sandboxed execution, real-time output, and blazing-fast performance.",
    techStack: ["Rust", "TypeScript", "Actix Web", "React", "SQLx", "PostgreSQL", "Docker", "Vercel"],
    github: "https://github.com/neutron420/CodeConnect",
    live: "https://code-connect-eta-ecru.vercel.app/",
    status: "live" as const,
    icon: Terminal,
    highlights: [
      "Multi-language secure code compilation sandboxed with isolated execution.",
      "Blazing-fast performance powered by Rust Actix Web and TypeScript/React."
    ]
  },
  {
    name: "StackAudit",
    description: "A high-performance, local-first CLI tool for auditing backend project health, security, and infrastructure readiness. Features an interactive TUI for real-time monitoring, advanced secrets detection for hardcoded API keys and credentials, deep Docker and Kubernetes manifest analysis, extensible YAML-based plugin system for team-specific standards, and high-concurrency module execution. Runs entirely locally secrets never leave your machine.",
    techStack: ["Go", "Docker", "Kubernetes", "PostgreSQL", "Redis", "NPM Package"],
    github: "https://github.com/neutron420/StackAudit",
    live: "https://audit-one-livid.vercel.app/",
    status: "live" as const,
    icon: Shield,
    highlights: [
      "Advanced secrets scanning engine detecting hardcoded API keys, tokens, and credentials.",
      "Deep Docker and Kubernetes manifest security analysis with extensible YAML plugin rules."
    ]
  },
  {
    name: "Devix",
    description: "Devix is a production-grade, modular monolith backend architected for a developer-centric knowledge sharing and collaboration platform. The system is built with Go, leveraging GORM for schema management and PostgreSQL for persistent storage, with a focus on modularity, security, and real-time performance.",
    techStack: ["Go", "Gin", "PostgreSQL", "GORM", "WebSockets", "Cloudflare R2", "JWT", "ArgoCD", "Docker", "Kubernetes", "AWS"],
    github: "https://github.com/neutron420/devix-backend",
    status: "development" as const,
    icon: Package,
    highlights: [
      "Modular monolith architecture following Go clean architecture principles.",
      "JWT refresh token rotation policies and robust Argon2id credential hashing."
    ]
  }
];

// Helper function to map tech stack names to icons with brand colors
const getTechIcon = (tech: string) => {
  const t = tech.toLowerCase().trim();
  if (t === "next.js" || t === "nextjs") return <SiNextdotjs className="w-2.5 h-2.5" />;
  if (t === "react" || t === "react native" || t === "expo") return <SiReact className="w-2.5 h-2.5 text-[#61DAFB]" />;
  if (t === "node.js" || t === "nodejs") return <SiNodedotjs className="w-2.5 h-2.5 text-[#339933]" />;
  if (t === "postgresql" || t === "postgis") return <SiPostgresql className="w-2.5 h-2.5 text-[#4169E1]" />;
  if (t === "prisma") return <SiPrisma className="w-2.5 h-2.5 text-[#2D3748]" />;
  if (t === "redis") return <SiRedis className="w-2.5 h-2.5 text-[#DC382D]" />;
  if (t === "docker") return <SiDocker className="w-2.5 h-2.5 text-[#2496ED]" />;
  if (t === "kubernetes" || t === "k8s") return <SiKubernetes className="w-2.5 h-2.5 text-[#326CE5]" />;
  if (t === "tailwind css" || t === "tailwindcss") return <SiTailwindcss className="w-2.5 h-2.5 text-[#06B6D4]" />;
  if (t === "aws") return <SiAmazonwebservices className="w-2.5 h-2.5 text-[#FF9900]" />;
  if (t === "gcp" || t === "google cloud") return <SiGooglecloud className="w-2.5 h-2.5 text-[#4285F4]" />;
  if (t === "cloudflare" || t === "cloudflare r2") return <SiCloudflare className="w-2.5 h-2.5 text-[#F38020]" />;
  if (t === "bun") return <SiBun className="w-2.5 h-2.5 text-[#FBF0DF]" />;
  if (t === "express") return <SiExpress className="w-2.5 h-2.5" />;
  if (t === "typescript") return <SiTypescript className="w-2.5 h-2.5 text-[#3178C6]" />;
  if (t === "go" || t === "golang") return <SiGo className="w-2.5 h-2.5 text-[#00ADD8]" />;
  if (t === "gin") return <SiGin className="w-2.5 h-2.5 text-[#00ADD8]" />;
  if (t === "rabbitmq") return <SiRabbitmq className="w-2.5 h-2.5 text-[#FF6600]" />;
  if (t === "kafka" || t === "apache kafka") return <SiApachekafka className="w-2.5 h-2.5" />;
  if (t === "groq" || t === "openai") return <SiOpenai className="w-2.5 h-2.5 text-[#412991]" />;
  if (t === "mapbox") return <SiMapbox className="w-2.5 h-2.5 text-[#4264FB]" />;
  if (t === "terraform") return <SiTerraform className="w-2.5 h-2.5 text-[#844FBA]" />;
  if (t === "rust") return <SiRust className="w-2.5 h-2.5 text-[#DEA584]" />;
  if (t === "sqlx") return <TbDatabase className="w-2.5 h-2.5 text-[#4169E1]" />;
  if (t === "gorm") return <TbDatabase className="w-2.5 h-2.5 text-[#00ADD8]" />;
  if (t === "websockets" || t === "websocket") return <SiSocketdotio className="w-2.5 h-2.5 text-[#010101] dark:text-[#FFFFFF]" />;
  if (t === "jwt") return <SiJsonwebtokens className="w-2.5 h-2.5 text-[#D63AFF]" />;
  if (t === "argon2id") return <Shield className="w-2.5 h-2.5 text-[#10B981]" />;
  if (t === "argocd" || t === "argo") return <SiArgo className="w-2.5 h-2.5 text-[#EF7B4D]" />;
  if (t === "vercel") return <SiVercel className="w-2.5 h-2.5" />;
  if (t === "npm" || t === "npm package") return <SiNpm className="w-2.5 h-2.5 text-[#CB3837]" />;
  return null;
};

// Status badge component
const StatusBadge = ({ status }: { status: "live" | "development" | "building" | "coming_soon" }) => {
  const statusConfig = {
    live: {
      label: "Live",
      bgColor: "bg-green-950/20",
      textColor: "text-white",
      borderColor: "border-2 border-green-500/80",
      dotColor: "bg-green-500",
      pingColor: "bg-green-400",
      animate: true,
    },
    development: {
      label: "Working",
      bgColor: "bg-emerald-950/20",
      textColor: "text-white",
      borderColor: "border-2 border-emerald-500",
      dotColor: "bg-emerald-500",
      pingColor: "bg-emerald-400",
      animate: true,
    },
    building: {
      label: "Building",
      bgColor: "bg-yellow-950/20",
      textColor: "text-white",
      borderColor: "border-2 border-yellow-500/80",
      dotColor: "bg-yellow-500",
      pingColor: "bg-yellow-400",
      animate: true,
    },
    coming_soon: {
      label: "Coming Soon",
      bgColor: "bg-blue-950/20",
      textColor: "text-white",
      borderColor: "border-2 border-blue-500/80",
      dotColor: "bg-blue-500",
      pingColor: "bg-blue-400",
      animate: true,
    },
  };

  const config = statusConfig[status];

  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1 text-[13px] rounded-xl ${config.bgColor} ${config.textColor} border-2 ${config.borderColor} font-semibold shadow-sm backdrop-blur-sm`}>
      <span className="relative flex h-2.5 w-2.5">
        {config.animate && (
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${config.pingColor} opacity-75`} />
        )}
        <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${config.dotColor}`} />
      </span>
      {config.label}
    </span>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-background">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 px-4">
          <div className="flex items-center gap-3 justify-center mb-3">
            <div className="h-px w-8 bg-accent" />
            <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Portfolio</span>
            <div className="h-px w-8 bg-accent" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
            <MarkerHighlight before="Featured " highlight="Projects" markerColor="#facc15" />
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-lg mx-auto">
            Stay up to date with the latest production systems I've architected, developed, and deployed to production.
          </p>
        </div>

        {/* Project Cards */}
        <div className="mt-16 space-y-8 md:mt-24 md:space-y-10">
          {projects.map((project, index) => {
            const ProjectIcon = project.icon;

            return (
              <article
                key={project.name}
                className="rounded-2xl border border-border/60 bg-muted/10 backdrop-blur-md p-5 w-full text-left overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="space-y-4">
                  {/* Header with Title */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col text-left">
                      <h2 className="text-md font-bold leading-tight tracking-tight md:text-lg text-foreground">
                        {project.name.replace(/-/g, ' ')}
                      </h2>
                      <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mt-0.5">
                        Project 0{index + 1}
                      </span>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-xs leading-relaxed md:text-sm text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Tech Stack badges */}
                  <div className="space-y-2 pt-4 border-t border-border/10">
                    <h4 className="text-[9px] uppercase tracking-[0.15em] text-muted-foreground/60 font-bold">
                      Tech Stack Used
                    </h4>
                    <div className="flex flex-wrap gap-1 md:gap-1.5">
                      {project.techStack.map((tech) => {
                        const icon = getTechIcon(tech);
                        return (
                          <span 
                            key={tech} 
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[9px] font-semibold bg-muted/50 text-foreground/80 border border-border/30"
                          >
                            {icon}
                            {tech}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Key Technical Highlights list */}
                  {project.highlights && project.highlights.length > 0 && (
                    <div className="rounded-xl border border-border/10 bg-muted/5 p-4 mt-2">
                      <h5 className="text-[9px] uppercase tracking-[0.15em] text-accent font-bold mb-2">
                        Key Technical Highlights
                      </h5>
                      <ul className="space-y-2">
                        {project.highlights.map((item, itemIndex) => (
                          <li 
                            key={itemIndex} 
                            className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed"
                          >
                            <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent/60 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Action Links Bar */}
                  <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-border/10 mt-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors group/link"
                      >
                        <SiGithub className="w-3.5 h-3.5" />
                        <span>Code</span>
                        <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors group/link"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                        <span>Live</span>
                        <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                    {project.apk && (
                      <a
                        href={project.apk}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors group/link"
                      >
                        <FaAndroid className="w-3.5 h-3.5" />
                        <span>APK</span>
                        <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                    {project.api && (
                      <a
                        href={project.api}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors group/link"
                      >
                        <Globe className="w-3.5 h-3.5" />
                        <span>API Link</span>
                        <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                    {project.user && (
                      <a
                        href={project.user}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors group/link"
                      >
                        <Users className="w-3.5 h-3.5" />
                        <span>User Panel</span>
                        <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                    {project.admin && (
                      <a
                        href={project.admin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors group/link"
                      >
                        <Shield className="w-3.5 h-3.5" />
                        <span>Admin Panel</span>
                        <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                  </div>

                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
