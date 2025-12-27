import { ArrowUpRight, Github, Wifi, Users, ChevronDown, Shield } from "lucide-react";
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
  SiEthereum
} from "react-icons/si";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import projectRaby from "@/assets/project-raby.jpg";
import projectBloom from "@/assets/project-bloom.png";
import projectGrievance from "@/assets/project-grievance.jpg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Tech stack icon mapping
const techIcons: Record<string, React.ReactNode> = {
  "React": <SiReact className="w-3 h-3" />,
  "React Native": <SiReact className="w-3 h-3" />,
  "Next.js": <SiNextdotjs className="w-3 h-3" />,
  "Node.js": <SiNodedotjs className="w-3 h-3" />,
  "PostgreSQL": <SiPostgresql className="w-3 h-3" />,
  "Prisma": <SiPrisma className="w-3 h-3" />,
  "Redis": <SiRedis className="w-3 h-3" />,
  "Docker": <SiDocker className="w-3 h-3" />,
  "Kubernetes": <SiKubernetes className="w-3 h-3" />,
  "Tailwind CSS": <SiTailwindcss className="w-3 h-3" />,
  "WebRTC": <SiWebrtc className="w-3 h-3" />,
  "Mediasoup": <Wifi className="w-3 h-3" />,
  "Socket.io": <SiSocketdotio className="w-3 h-3" />,
  "AWS": <SiAmazonwebservices className="w-3 h-3" />,
  "S3": <SiAmazon className="w-3 h-3" />,
  "Web3.js": <SiWeb3Dotjs className="w-3 h-3" />,
  "WebSockets": <Wifi className="w-3 h-3" />,
  "ArgoCD": <SiArgo className="w-3 h-3" />,
  "Python": <SiPython className="w-3 h-3" />,
  "Hyperledger Fabric": <SiEthereum className="w-3 h-3" />,
  "Blockchain": <SiEthereum className="w-3 h-3" />,
};

// Curated projects in specific order with proper tech stacks
const projects = [
  {
    name: "Swaraj-Desk",
    description: "A comprehensive grievance management portal for government offices. Citizens can register complaints, track status, and receive updates in real-time. Built for Smart India Hackathon.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Redis", "WebSockets", "Docker", "Kubernetes", "ArgoCD", "Tailwind CSS", "Python", "Hyperledger Fabric"],
    github: "https://github.com/neutron420/sih-swarajdesk-2025",
    live: "https://sih-user-fe-sd.adityahota.online/",
    admin: "https://admin.swarajdesk.com", // Update this with the actual admin URL
    image: projectGrievance,
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
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Redis", "S3", "Docker", "Kubernetes", "ArgoCD", "Tailwind CSS"],
    github: "https://github.com/neutron420/sih-swarajdesk-2025",
    live: "https://admin.swarajdesk.com", // Update this with the actual admin URL
    image: projectGrievance,
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
  },
  {
    name: "Raby",
    description: "A secure cryptocurrency wallet application for managing digital assets. Features include multi-chain support, real-time transaction history, portfolio analytics, QR code scanning, secure key management with biometric authentication, and push notifications.",
    techStack: ["React Native", "Node.js", "Web3.js", "Docker", "AWS"],
    github: "https://github.com/neutron420/Raby",
    live: null,
    image: projectRaby,
  },
];

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
              className={`group bg-card rounded-2xl border border-border overflow-hidden transition-colors duration-300 scroll-reveal ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="grid md:grid-cols-5 gap-0">
                {/* Image */}
                <div className={`md:col-span-2 overflow-hidden relative ${project.name === 'Swaraj-Desk' || project.name === 'Swaraj-Desk-Admin' ? 'h-64 md:h-80' : 'h-48 md:h-64'}`}>
                  <img
                    src={project.image}
                    alt={project.name}
                    className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${project.name === 'Raby' ? 'object-bottom' : 'object-center'}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/30 to-transparent md:bg-gradient-to-r" />
                  
                  {/* Project number badge */}
                  <div className="absolute top-4 left-4 w-8 h-8 rounded-lg bg-background/80 backdrop-blur flex items-center justify-center text-xs font-bold text-accent">
                    0{index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className={`md:col-span-3 flex flex-col ${project.name === 'Swaraj-Desk' || project.name === 'Swaraj-Desk-Admin' ? 'p-4 md:p-5 h-64 md:h-80 overflow-y-auto' : 'p-4 md:p-4'}`}>
                  {/* Header */}
                    <div className={`flex items-start justify-between gap-3 sm:gap-4 ${project.name === 'Swaraj-Desk' || project.name === 'Swaraj-Desk-Admin' ? 'mb-3' : 'mb-2'}`}>
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold group-hover:text-accent transition-colors break-words flex-1 min-w-0">
                        {project.name === 'Swaraj-Desk-Admin' ? 'Swaraj Desk Admin' : project.name.replace(/-/g, ' ')}
                      </h3>
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
                  <p className={`text-xs sm:text-sm text-muted-foreground leading-relaxed ${project.name === 'Swaraj-Desk' || project.name === 'Swaraj-Desk-Admin' ? 'mb-4' : 'mb-3'}`}>
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
                  <div className={`${project.name === 'Swaraj-Desk' || project.name === 'Swaraj-Desk-Admin' ? 'mt-4' : 'mt-3'} pt-4 border-t border-border/30 flex-shrink-0`}>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2 font-medium">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={tech}
                          className={`px-2.5 py-1 text-xs rounded-md transition-all flex items-center gap-1.5 ${
                            i === 0 
                              ? 'bg-accent/15 text-accent border border-accent/20 hover:bg-accent/20' 
                              : 'bg-muted/50 text-muted-foreground hover:bg-accent/15 hover:text-accent hover:border-accent/20 border border-transparent'
                          }`}
                        >
                          {techIcons[tech]}
                          {tech}
                        </span>
                      ))}
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