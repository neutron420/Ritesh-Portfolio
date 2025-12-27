// Portfolio data for Terminal and other components

export interface Project {
  year: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

export interface Technology {
  category: string;
  skills: string[];
}

export interface PersonalInfo {
  name: string;
  role: string;
  location: string;
  university: string;
  status: string;
  bio: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  cgpa: string;
}

export interface Contact {
  email: string;
}

export interface Socials {
  website: string;
  github: string;
  linkedin: string;
  twitter: string;
}

export const projects: Project[] = [
  {
    year: "2025",
    title: "Swaraj-Desk",
    description: "A comprehensive grievance management portal for government offices. Citizens can register complaints, track status, and receive updates in real-time. Built for Smart India Hackathon 2025 (Finalist).",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Redis", "WebSockets", "Docker", "Kubernetes", "ArgoCD", "Tailwind CSS", "Python", "Hyperledger Fabric"],
    liveUrl: "https://sih-user-fe-sd.adityahota.online/",
    githubUrl: "https://github.com/neutron420/sih-swarajdesk-2025",
  },
  {
    year: "2025",
    title: "Swaraj-Desk Admin",
    description: "Admin portal for SwarajDesk grievance management system. Features include complaint management, user administration, analytics dashboard, real-time notifications, report generation, and system configuration.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Redis", "S3", "Docker", "Kubernetes", "ArgoCD", "Tailwind CSS"],
    liveUrl: "https://admin.swarajdesk.com",
    githubUrl: "https://github.com/neutron420/sih-swarajdesk-2025",
  },
  {
    year: "2024",
    title: "Bloom",
    description: "A real-time video conferencing application similar to Google Meet. Features include HD video calls, screen sharing, chat messaging, virtual backgrounds, meeting scheduling, and participant management.",
    tags: ["Next.js", "React", "WebRTC", "Mediasoup", "Socket.io", "Node.js", "Redis", "Docker", "AWS"],
    liveUrl: "",
    githubUrl: "https://github.com/neutron420/Bloom",
  },
  {
    year: "2024",
    title: "Raby",
    description: "A secure cryptocurrency wallet application for managing digital assets. Features include multi-chain support, real-time transaction history, portfolio analytics, QR code scanning, secure key management with biometric authentication, and push notifications.",
    tags: ["React Native", "Node.js", "Web3.js", "Docker", "AWS"],
    liveUrl: "",
    githubUrl: "https://github.com/neutron420/Raby",
  },
];

export const technologies: Technology[] = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Rust", "Solidity", "C", "C++"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "Bun", "WebSocket", "gRPC", "Redis"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Prisma ORM"],
  },
  {
    category: "DevOps & Cloud",
    skills: ["Docker", "Kubernetes", "CI/CD", "AWS", "GCP", "Cloudflare"],
  },
  {
    category: "Blockchain",
    skills: ["Ethereum", "Smart Contracts", "Web3.js", "Ethers.js"],
  },
];

export const personalInfo: PersonalInfo = {
  name: "Ritesh Singh",
  role: "Full-Stack Engineer · Blockchain Developer · Competitive Programmer",
  location: "India",
  university: "C.V. Raman Global University",
  status: "Available for opportunities",
  bio: "I build from scratch. Frontend, backend, full-stack, and blockchain applications end-to-end from deployment to smart contracts. I'm passionate about creating technology that solves real-world problems. Currently exploring the intersection of Web3 and traditional software development, with a focus on decentralized applications and smart contract security.",
};

export const education: Education = {
  degree: "BTech in Computer Science & Data Science",
  institution: "C.V. Raman Global University",
  location: "India",
  duration: "2023 - 2027",
  cgpa: "8.5+",
};

export const contact: Contact = {
  email: "fnaticritesh2004@gmail.com",
};

export const socials: Socials = {
  website: "https://riteshsingh.dev",
  github: "https://github.com/neutron420",
  linkedin: "https://www.linkedin.com/in/ritesh-singh1/",
  twitter: "https://x.com/RiteshS18572143",
};

