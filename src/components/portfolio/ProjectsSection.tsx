import { ArrowUpRight, Github, Wifi, Users, ChevronDown, Shield, Clock } from "lucide-react";
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
  SiPython,
  SiEthereum,
  SiSolana,
  SiRust,
  SiExpress,
  SiTypescript,
  SiKotlin,
  SiFirebase,
  SiBun,
  SiVercel,
  SiRender,
  SiGithubactions
} from "react-icons/si";
import { TbDatabase } from "react-icons/tb";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import projectBloom from "@/assets/project-bloom.png";
import projectGrievance from "@/assets/project-grievance.jpg";
import projectCodeConnect from "@/assets/project-codeconnect.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
  "Python": { icon: <SiPython className="w-3 h-3" />, color: "text-[#3776AB]" },
  "Hyperledger Fabric": { icon: <SiEthereum className="w-3 h-3" />, color: "text-[#2F3134]" },
  "Blockchain": { icon: <SiEthereum className="w-3 h-3" />, color: "text-[#627EEA]" },
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
};

// Curated projects in specific order with proper tech stacks
const projects = [
  {
    name: "Swaraj-Desk",
    description: "A comprehensive grievance management portal for government offices. Citizens can register complaints, track status, and receive updates in real-time. Built for Smart India Hackathon.",
    techStack: ["Next.js", "Node.js", "Bun", "PostgreSQL", "Prisma", "Redis", "WebSockets", "Docker", "Kubernetes", "ArgoCD", "Tailwind CSS", "Python", "Hyperledger Fabric"],
    github: "https://github.com/neutron420/sih-swarajdesk-2025",
    live: "https://sih-user-fe-sd.adityahota.online/",
    admin: "https://admin.swarajdesk.com", // Update this with the actual admin URL
    image: projectGrievance,
    status: "live" as const,
    contributors: [
      { name: "Ritesh Singh", username: "neutron420", url: "https://github.com/neutron420" },
      { name: "Aditya Hota", username: "theogaditya", url: "https://github.com/theogaditya" },
      { name: "Abhash Behera", username: "MistaHolmes", url: "https://github.com/MistaHolmes" },
      { name: "Aniroodh Padhee", username: "Aniroodh1234", url: "https://github.com/Aniroodh1234" },
    ],
  },
  {
    name: "Swaraj-Desk-Admin",
    description: "Admin portal for SwarajDesk grievance management system. Features include complaint management, user administration, analytics dashboard, real-time notifications, report generation, and system configuration. Built with the same tech stack as the main application for seamless integration.",
    techStack: ["Next.js", "Node.js", "Bun", "PostgreSQL", "Prisma", "Redis", "S3", "Docker", "Kubernetes", "ArgoCD", "Tailwind CSS"],
    github: "https://github.com/neutron420/sih-swarajdesk-2025",
    live: "https://admin.swarajdesk.com", // Update this with the actual admin URL
    image: projectGrievance,
    status: "live" as const,
    contributors: [
      { name: "Ritesh Singh", username: "neutron420", url: "https://github.com/neutron420" },
      { name: "Aditya Hota", username: "theogaditya", url: "https://github.com/theogaditya" },
      { name: "Abhash Behera", username: "MistaHolmes", url: "https://github.com/MistaHolmes" },
      { name: "Aniroodh Padhee", username: "Aniroodh1234", url: "https://github.com/Aniroodh1234" },
    ],
  },
  {
    name: "Bloom",
    description: "A real-time video conferencing application similar to Google Meet. Features include HD video calls, screen sharing, chat messaging, virtual backgrounds, meeting scheduling, and participant management.",
    techStack: ["Next.js", "React", "WebRTC", "Mediasoup", "Socket.io", "Node.js", "Redis", "Docker", "AWS"],
    github: "https://github.com/neutron420/Bloom",
    live: null,
    image: projectBloom,
    status: "development" as const,
  },
  {
    name: "CodeConnect",
    description: "A high-performance online code compiler and execution engine built with Rust backend (Actix-Web) and TypeScript/React frontend. Features secure sandboxed code execution, multi-language support, real-time output streaming, SQLx database integration, and blazing-fast compilation for running code snippets directly in the browser.",
    techStack: ["TypeScript", "Rust", "Actix", "SQLx", "Prisma", "Next.js", "Render", "Vercel", "CI/CD"],
    github: "https://github.com/neutron420/CodeConnect",
    live: "https://code-connect-eta-ecru.vercel.app/",
    image: projectCodeConnect,
    status: "live" as const,
  },
  {
    name: "Trackmed",
    description: "A comprehensive medicine tracking and purchasing platform. Features include a mobile app for users to track medications, purchase medicines, manage prescriptions, and receive reminders. Web dashboards for admin management, warehouse operations, and manufacturer control. Complete inventory management, order tracking, and analytics.",
    techStack: ["Solana", "Rust", "Anchor", "Prisma", "PostgreSQL", "Node.js", "Express.js", "Web3.js", "TypeScript", "Kotlin", "Firebase"],
    github: "https://github.com/neutron420/Trackmed",
    live: null,
    comingSoon: true,
    image: projectGrievance,
    status: "building" as const,
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
    <span className={`inline-flex items-center gap-1.5 px-2 py-1 text-[10px] uppercase tracking-wider rounded-md ${config.bgColor} ${config.textColor} border ${config.borderColor}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${config.dotColor} ${config.animate ? 'animate-pulse' : ''}`} />
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
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold">Featured Projects</h2>
            <p className="text-sm text-muted-foreground mt-1">Some things I've built</p>
          </div>
          <a
            href="https://github.com/neutron420?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-1"
          >
            View all →
          </a>
        </div>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className={`group bg-card rounded-2xl border border-border overflow-hidden transition-colors duration-300 scroll-reveal ${isVisible ? 'visible' : ''} ${project.comingSoon ? 'relative' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {project.comingSoon && (
                <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5 pointer-events-none z-0 rounded-2xl opacity-50" />
              )}
              <div className="grid md:grid-cols-5 gap-0 relative z-10">
                {/* Image or Coming Soon */}
                <div className={`md:col-span-2 overflow-hidden relative ${project.name === 'Swaraj-Desk' || project.name === 'Swaraj-Desk-Admin' || project.name === 'Trackmed' || project.name === 'CodeConnect' ? 'h-64 md:h-72' : 'h-48 md:h-64'}`}>
                  {project.comingSoon ? (
                    <div className="w-full h-full flex items-center justify-center animate-gradient-bg relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/30 to-transparent md:bg-gradient-to-r" />
                      
                      {/* Animated background particles */}
                      <div className="absolute inset-0 opacity-30">
                        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full animate-float-gentle" style={{ animationDelay: '0s' }} />
                        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-accent rounded-full animate-float-gentle" style={{ animationDelay: '1s' }} />
                        <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-accent rounded-full animate-float-gentle" style={{ animationDelay: '2s' }} />
                        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-accent rounded-full animate-float-gentle" style={{ animationDelay: '1.5s' }} />
                      </div>
                      
                      <div className="relative z-10 flex flex-col items-center justify-center gap-4">
                        <div className="relative">
                          <Clock className="w-14 h-14 md:w-20 md:h-20 text-accent animate-pulse-coming-soon animate-float-gentle drop-shadow-lg" />
                          <div className="absolute inset-0 w-14 h-14 md:w-20 md:h-20 bg-accent/20 rounded-full blur-xl animate-pulse-coming-soon" />
                        </div>
                        <div className="text-center">
                          <h4 className="text-xl md:text-3xl font-bold text-accent animate-pulse-coming-soon animate-shimmer-coming-soon animate-glow-pulse relative px-6 py-3 rounded-xl bg-accent/15 border-2 border-accent/30 backdrop-blur-sm">
                            <span className="relative z-10 tracking-wider">Coming Soon</span>
                          </h4>
                        </div>
                      </div>
                      
                      {/* Project number badge */}
                      <div className="absolute top-4 left-4 w-8 h-8 rounded-lg bg-background/80 backdrop-blur flex items-center justify-center text-xs font-bold text-accent z-20">
                        0{index + 1}
                      </div>
                    </div>
                  ) : (
                    <>
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/30 to-transparent md:bg-gradient-to-r" />
                      
                      {/* Project number badge */}
                      <div className="absolute top-4 left-4 w-8 h-8 rounded-lg bg-background/80 backdrop-blur flex items-center justify-center text-xs font-bold text-accent">
                        0{index + 1}
                      </div>
                    </>
                  )}
                </div>

                {/* Content */}
                <div className={`md:col-span-3 flex flex-col ${project.name === 'Swaraj-Desk' || project.name === 'Swaraj-Desk-Admin' || project.name === 'Trackmed' || project.name === 'CodeConnect' ? 'p-4 md:p-5 h-64 md:h-72 overflow-y-auto' : 'p-4 md:p-4'}`}>
                  {/* Header */}
                    <div className={`flex items-start justify-between gap-3 sm:gap-4 ${project.name === 'Swaraj-Desk' || project.name === 'Swaraj-Desk-Admin' || project.name === 'Trackmed' || project.name === 'CodeConnect' ? 'mb-3' : 'mb-2'}`}>
                      <div className="flex items-center gap-2 flex-1 min-w-0 flex-wrap">
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold group-hover:text-accent transition-colors break-words min-w-0">
                          {project.name === 'Swaraj-Desk-Admin' ? 'Swaraj Desk Admin' : project.name.replace(/-/g, ' ')}
                        </h3>
                        {project.status && <StatusBadge status={project.status} />}
                        {project.comingSoon && !project.status && (
                          <span className="px-2 py-1 text-[10px] uppercase tracking-wider rounded-md bg-accent/15 text-accent border border-accent/20 flex items-center gap-1 flex-shrink-0 animate-pulse-coming-soon animate-shimmer-coming-soon relative">
                            <Clock className="w-3 h-3 relative z-10" />
                            <span className="relative z-10">Coming Soon</span>
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 flex items-center justify-center rounded-lg bg-muted/50 hover:bg-accent hover:text-accent-foreground transition-all"
                          aria-label="GitHub"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 flex items-center justify-center rounded-lg bg-muted/50 hover:bg-accent hover:text-accent-foreground transition-all"
                            aria-label="Live Demo"
                          >
                            <ArrowUpRight className="w-4 h-4" />
                          </a>
                        )}
                        {project.admin && (
                          <a
                            href={project.admin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 flex items-center justify-center rounded-lg bg-muted/50 hover:bg-accent hover:text-accent-foreground transition-all"
                            aria-label="Admin"
                            title="Admin Portal"
                          >
                            <Shield className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                  {/* Description */}
                  <p className={`text-xs sm:text-sm text-muted-foreground leading-relaxed ${project.name === 'Swaraj-Desk' || project.name === 'Swaraj-Desk-Admin' || project.name === 'Trackmed' ? 'mb-4' : 'mb-3'}`}>
                    {project.description}
                  </p>

                  {/* Contributors - Only for Swaraj-Desk projects */}
                  {project.contributors && (
                    <div className="mb-4">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button className="px-3 py-2 text-xs rounded-md bg-muted/50 text-muted-foreground hover:bg-accent/15 hover:text-accent hover:border-accent/20 border border-transparent transition-all flex items-center gap-2">
                            <Users className="w-3.5 h-3.5" />
                            <span>Contributors ({project.contributors.length})</span>
                            <ChevronDown className="w-3 h-3" />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="w-56">
                          {project.contributors.map((contributor) => (
                            <DropdownMenuItem key={contributor.username} asChild>
                              <a
                                href={contributor.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 cursor-pointer"
                              >
                                <Github className="w-4 h-4" />
                                <span>{contributor.name}</span>
                              </a>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div className={`${project.name === 'Swaraj-Desk' || project.name === 'Swaraj-Desk-Admin' || project.name === 'Trackmed' ? 'mt-4' : 'mt-3'} pt-4 border-t border-border/30 flex-shrink-0`}>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2 font-medium">
                     Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => {
                        const techData = techIcons[tech];
                        return (
                          <span
                            key={tech}
                            className={`px-2.5 py-1 text-xs rounded-md transition-all flex items-center gap-1.5 ${
                              i === 0 
                                ? 'bg-accent/15 text-accent border border-accent/20 hover:bg-accent/20' 
                                : 'bg-muted/50 text-muted-foreground hover:bg-accent/15 hover:text-accent hover:border-accent/20 border border-transparent'
                            }`}
                          >
                            {techData && <span className={techData.color}>{techData.icon}</span>}
                            {tech}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;