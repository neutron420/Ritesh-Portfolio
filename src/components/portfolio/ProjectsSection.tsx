import { ArrowUpRight, Wifi, Users, ChevronDown, Shield } from "lucide-react";
import { 
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
  SiGithub,
  SiSolana,
  SiRust,
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
  SiGooglecloud
} from "react-icons/si";
import { TbDatabase, TbMap2 } from "react-icons/tb";
import { FaJava, FaAndroid, FaMapMarkerAlt } from "react-icons/fa";
import { SiExpo, SiGradle, SiGooglemaps } from "react-icons/si";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";
import React from "react";

// Tech stack icon mapping with colors
const techIcons: Record<string, { icon: React.ReactNode; color: string }> = {
  "React": { icon: <SiReact className="w-3 h-3" />, color: "text-[#61DAFB]" },
  "React Native": { icon: <SiReact className="w-3 h-3" />, color: "text-[#61DAFB]" },
  "Next.js": { icon: <SiNextdotjs className="w-3 h-3" />, color: "text-foreground" },
  "Node.js": { icon: <SiNodedotjs className="w-3 h-3" />, color: "text-[#339933]" },
  "PostgreSQL": { icon: <SiPostgresql className="w-3 h-3" />, color: "text-[#336791]" },
  "Prisma": { icon: <SiPrisma className="w-3 h-3" />, color: "text-[#2D3748]" },
  "Redis": { icon: <SiRedis className="w-3 h-3" />, color: "text-[#DC382D]" },
  "Docker": { icon: <SiDocker className="w-3 h-3" />, color: "text-[#2496ED]" },
  "Kubernetes": { icon: <SiKubernetes className="w-3 h-3" />, color: "text-[#326CE5]" },
  "Tailwind CSS": { icon: <SiTailwindcss className="w-3 h-3" />, color: "text-[#06B6D4]" },
  "WebRTC": { icon: <SiWebrtc className="w-3 h-3" />, color: "text-[#333333]" },
  "Mediasoup": { icon: <Wifi className="w-3 h-3" />, color: "text-[#00D4AA]" },
  "Socket.io": { icon: <SiSocketdotio className="w-3 h-3" />, color: "text-foreground" },
  "AWS": { icon: <SiAmazonwebservices className="w-3 h-3" />, color: "text-[#FF9900]" },
  "S3": { icon: <SiAmazon className="w-3 h-3" />, color: "text-[#FF9900]" },
  "Web3.js": { icon: <SiWeb3Dotjs className="w-3 h-3" />, color: "text-[#F16822]" },
  "WebSockets": { icon: <Wifi className="w-3 h-3" />, color: "text-[#00D4AA]" },
  "ArgoCD": { icon: <SiArgo className="w-3 h-3" />, color: "text-[#EF7B4D]" },
  "Java": { icon: <FaJava className="w-3 h-3" />, color: "text-[#ED8B00]" },
  "GCP": { icon: <SiGooglecloud className="w-3 h-3" />, color: "text-[#4285F4]" },
  "Cloudflare": { icon: <SiCloudflare className="w-3 h-3" />, color: "text-[#F38020]" },
  "Ansible": { icon: <SiAnsible className="w-3 h-3" />, color: "text-[#EE0000]" },

  "Solana": { icon: <SiSolana className="w-3 h-3" />, color: "text-[#9945FF]" },
  "Rust": { icon: <SiRust className="w-3 h-3" />, color: "text-[#DEA584]" },
  "Anchor": { icon: <span className="w-3 h-3 font-bold text-[10px] flex items-center justify-center">⚓</span>, color: "text-[#7C3AED]" },
  "Express.js": { icon: <SiExpress className="w-3 h-3" />, color: "text-foreground" },
  "Express": { icon: <SiExpress className="w-3 h-3" />, color: "text-foreground" },
  "TypeScript": { icon: <SiTypescript className="w-3 h-3" />, color: "text-[#3178C6]" },
  "Kotlin": { icon: <SiKotlin className="w-3 h-3" />, color: "text-[#7F52FF]" },
  "Firebase": { icon: <SiFirebase className="w-3 h-3" />, color: "text-[#FFCA28]" },
  "Bun": { icon: <SiBun className="w-3 h-3" />, color: "text-[#FBF0DF] dark:text-[#FBF0DF]" },
  "Vercel": { icon: <SiVercel className="w-3 h-3" />, color: "text-foreground" },
  "Render": { icon: <SiRender className="w-3 h-3" />, color: "text-[#46E3B7]" },
  "CI/CD": { icon: <SiGithubactions className="w-3 h-3" />, color: "text-[#2088FF]" },
  "Actix": { icon: <SiRust className="w-3 h-3" />, color: "text-[#DEA584]" },
  "SQLx": { icon: <TbDatabase className="w-3 h-3" />, color: "text-[#336791]" },
  "Expo": { icon: <SiExpo className="w-3 h-3" />, color: "text-foreground" },
  "TomTom Maps": { icon: <TbMap2 className="w-3 h-3" />, color: "text-[#D32F2F]" },
  "Google Maps API": { icon: <SiGooglemaps className="w-3 h-3" />, color: "text-[#4285F4]" },
  "MapLibre": { icon: <TbMap2 className="w-3 h-3" />, color: "text-[#396CB2]" },
  "Android": { icon: <FaAndroid className="w-3 h-3" />, color: "text-[#3DDC84]" },
  "Gradle": { icon: <SiGradle className="w-3 h-3" />, color: "text-[#02303A]" },
  "Jenkins": { icon: <SiJenkins className="w-3 h-3" />, color: "text-[#D24939]" },
  "Mapbox": { icon: <SiMapbox className="w-3 h-3" />, color: "text-[#4264fb]" },
  "Terraform": { icon: <SiTerraform className="w-3 h-3" />, color: "text-[#844FBA]" },
  "Apache Kafka": { icon: <SiApachekafka className="w-3 h-3" />, color: "text-foreground" },
  "Kafka": { icon: <SiApachekafka className="w-3 h-3" />, color: "text-foreground" },
  "Groq": { icon: <SiOpenai className="w-3 h-3" />, color: "text-[#f55036]" },
  "PostGIS": { icon: <TbDatabase className="w-3 h-3" />, color: "text-[#336791]" },
};

// Curated projects in specific order with proper tech stacks
const projects = [
  {
    name: "Swaraj-Desk",
    description: "A comprehensive grievance management portal for government offices. Citizens can register complaints, track status, and receive updates in real-time. Built for Smart India Hackathon. Optimized backend for handling 10k+ concurrent requests with Redis and WebSocket integration. Implemented role-based access control and automated workload distribution for government officials. Integrated automated email notifications for grievance status updates.",
    techStack: ["Next.js", "Node.js", "Bun", "PostgreSQL", "Prisma", "Redis", "WebSockets", "Docker", "Kubernetes", "ArgoCD", "Tailwind CSS", "AWS", "GCP", "Cloudflare"],
    github: "https://github.com/neutron420/sih-swarajdesk-2025",
    user: "https://sih-user-fe-sd.adityahota.online/",
    admin: "https://admin.swarajdesk.com",
    status: "live" as const,
    contributors: [
      { name: "Ritesh Singh", username: "neutron420", url: "https://github.com/neutron420" },
      { name: "Aditya Hota", username: "theogaditya", url: "https://github.com/theogaditya" },
      { name: "Abhash Behera", username: "MistaHolmes", url: "https://github.com/MistaHolmes" },
      { name: "Aniroodh Padhee", username: "Aniroodh1234", url: "https://github.com/Aniroodh1234" },
    ],
  },
  {
    name: "RakshaSetu",
    description: "An intelligent disaster management and emergency response system. Combines AI triage, real-time SOS reporting, automated volunteer dispatch based on geospatial proximity, and early warning systems. Features offline SOS broadcasting via BLE mesh relay and AI-powered emergency guidance. Integrated PostGIS for high-performance geospatial queries and automated alert zoning. Developed a priority-based message queue using Kafka for critical alert dissemination. Optimized geospatial data indexing for sub-second emergency response times.",
    techStack: ["React Native", "Expo", "Bun", "Express", "PostgreSQL", "PostGIS", "Redis", "Apache Kafka", "TypeScript", "WebSockets", "Docker", "Kubernetes", "AWS"],
    github: "https://github.com/neutron420/RakshaSetu",
    live: null,
    status: "live" as const,
  },
  {
    name: "ShareBite",
    description: "A full-stack food rescue platform connecting donors, NGOs, riders, and admins to reduce food waste. Features real-time coordination, map-based pickups, role-based dashboards, and transparent fulfillment workflows with AI-powered support and karma-based engagement mechanics. Leveraged Mapbox for real-time optimal route generation for riders. Integrated Groq AI for automated food quality assessment and donor matching. Implemented a localized 'Karma' point system to incentivize consistent food donations.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Prisma", "PostgreSQL", "Redis", "WebSockets", "Groq", "Mapbox", "Docker", "Terraform" ,"AWS"],
    github: "https://github.com/neutron420/Sharebite",
    live: null,
    status: "live" as const,
  },
  {
    name: "CodeConnect",
    description: "A high-performance online code compiler and execution engine built with Rust backend (Actix-Web) and TypeScript/React frontend. Features secure sandboxed code execution, multi-language support, real-time output streaming, SQLx database integration, and blazing-fast compilation. Implemented secure gVisor-based isolation for untrusted code execution. Developed a custom protocol for real-time terminal output streaming with low latency. Integrated real-time collaborative editing features using Operational Transformation.",
    techStack: ["TypeScript", "Rust", "Actix", "SQLx", "Prisma", "Next.js", "Render", "Vercel", "CI/CD"],
    github: "https://github.com/neutron420/CodeConnect",
    live: "https://www.neutrondev.in/",
    status: "live" as const,
  },
  {
    name: "NavigateU",
    description: "A campus navigation and route finder mobile app built for students and visitors. Features real-time turn-by-turn directions, indoor/outdoor navigation powered by Google Maps API, floor plans, and smart route optimization. Supports offline map caching and real-time location sharing. Optimized for power efficiency using low-impact background location tracking. Integrated Firebase for live status updates and campus-wide emergency notifications. Added AR (Augmented Reality) directional cues for easier indoor navigation.",
    techStack: ["Expo", "React Native", "TypeScript", "Firebase", "Google Maps API", "MapLibre", "Android", "Gradle", "AWS", "Docker"],
    github: "https://github.com/neutron420/NavigateU",
    live: null,
    status: "live" as const,
  },
];

// Status badge component
const StatusBadge = ({ status }: { status: "live" | "development" | "building" }) => {
  const statusConfig = {
    live: {
      label: "Live",
      bgColor: "bg-green-500/15",
      textColor: "text-green-500",
      borderColor: "border-green-500/30",
      dotColor: "bg-green-500",
      animate: true,
    },
    development: {
      label: "In Development",
      bgColor: "bg-yellow-500/15",
      textColor: "text-yellow-500",
      borderColor: "border-yellow-500/30",
      dotColor: "bg-yellow-500",
      animate: false,
    },
    building: {
      label: "Building",
      bgColor: "bg-accent/15",
      textColor: "text-accent",
      borderColor: "border-accent/30",
      dotColor: "bg-accent",
      animate: true,
    },
  };

  const config = statusConfig[status];

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] uppercase tracking-[0.1em] rounded-lg ${config.bgColor} ${config.textColor} border ${config.borderColor} font-medium shadow-sm backdrop-blur-sm`}>
      <span className={`w-1.5 h-1.5 rounded-full ${config.dotColor} ${config.animate ? 'animate-pulse' : ''} shadow-sm`} />
      {config.label}
    </span>
  );
};

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-16 md:py-24">
      <div 
        ref={ref}
        className={`section-container scroll-reveal ${isVisible ? 'visible' : ''}`}
      >
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-8 bg-accent" />
              <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">Portfolio</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">Featured Projects</h2>
            <p className="text-sm text-muted-foreground mt-2">A selection of things I've designed & built</p>
          </div>
          <a
            href="https://github.com/neutron420?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group/link text-sm text-muted-foreground hover:text-accent transition-all flex items-center gap-1.5 px-4 py-2 rounded-lg border border-border/50 hover:border-accent/30 hover:bg-accent/5"
          >
            View all
            <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <div className="flex flex-col">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="py-12 border-b border-border/40 last:border-0 group"
            >
              <div className="flex flex-col md:flex-row justify-between gap-6">
                {/* Left Side: Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight group-hover:text-accent transition-colors duration-300">
                      {project.name.replace(/-/g, ' ')}
                    </h3>
                    {project.status && <StatusBadge status={project.status} />}
                  </div>

                  {/* Actions & Links - Mobile: visible, Desktop: visible */}
                  <div className="flex items-center gap-4 mb-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors group/link"
                    >
                      <SiGithub className="w-3.5 h-3.5" />
                      <span>Code</span>
                      <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors group/link"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                        <span>Live</span>
                        <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                    {(project as any).user && (
                      <a
                        href={(project as any).user}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors group/link"
                      >
                        <Users className="w-3.5 h-3.5" />
                        <span>{project.name === "Swaraj-Desk" ? "Super User" : "User"}</span>
                        <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                    {project.admin && (
                      <a
                        href={project.admin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors group/link"
                      >
                        <Shield className="w-3.5 h-3.5" />
                        <span>Admin</span>
                        <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                  </div>

                  <div className="space-y-8">
                    {/* Tech Stack - Inspired by ramx.in */}
                    <div className="space-y-4">
                      <h4 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 font-bold">
                        Technologies & Tools
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => {
                          const techData = techIcons[tech];
                          return (
                            <div
                              key={tech}
                              title={tech}
                              className="w-10 h-10 flex items-center justify-center rounded-xl bg-muted/20 border border-border/40 hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 group/tech"
                            >
                              {techData ? (
                                <span className={`${techData.color} transition-transform group-hover/tech:scale-110`}>
                                  {React.cloneElement(techData.icon as React.ReactElement, { className: "w-5 h-5" })}
                                </span>
                              ) : (
                                <span className="text-[10px] font-bold text-muted-foreground">{tech[0]}</span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Description - Bullet style like ramx.in */}
                    <div className="space-y-4">
                      <h4 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 font-bold">
                        What I've done
                      </h4>
                      <ul className="space-y-3">
                        {project.description.split('. ').filter(p => p.trim()).map((point, i) => (
                          <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                            <span className="bg-muted-foreground/40 mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-sm" />
                            <span>{point.trim()}{point.endsWith('.') ? '' : '.'}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Contributors */}
                    {project.contributors && (
                      <div className="pt-2">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <button className="flex items-center gap-2 text-xs text-muted-foreground hover:text-accent transition-colors">
                              <Users className="w-3.5 h-3.5" />
                              <span>Collaborated with {project.contributors.length} people</span>
                              <ChevronDown className="w-3 h-3" />
                            </button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="start" className="w-56 bg-card border-border/50">
                            {project.contributors.map((contributor) => (
                              <DropdownMenuItem key={contributor.username} asChild>
                                <a
                                  href={contributor.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2 cursor-pointer"
                                >
                                  <SiGithub className="w-4 h-4" />
                                  <span>{contributor.name}</span>
                                </a>
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
