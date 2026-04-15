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
    tags: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Redis", "WebSockets", "Docker", "Kubernetes", "ArgoCD", "Tailwind CSS", "Python"],
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
    year: "2025",
    title: "RakshaSetu",
    description: "An intelligent disaster management and emergency response system. Combines AI triage, real-time SOS reporting, automated volunteer dispatch based on geospatial proximity, and early warning systems. Features offline SOS broadcasting via BLE mesh relay and AI-powered emergency guidance.",
    tags: ["React Native", "Expo", "Bun", "Express", "PostgreSQL", "PostGIS", "Redis", "Apache Kafka", "TypeScript", "WebSocket", "Docker", "Kubernetes"],
    liveUrl: "",
    githubUrl: "https://github.com/neutron420/RakshaSetu",
  },
  {
    year: "2025",
    title: "ShareBite",
    description: "A full-stack food rescue platform connecting donors, NGOs, riders, and admins to reduce food waste. Features real-time coordination, map-based pickups, role-based dashboards, and transparent fulfillment workflows with AI-powered support and karma-based engagement mechanics.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Prisma", "PostgreSQL", "Redis", "WebSocket", "Groq", "Mapbox", "Docker", "Terraform"],
    liveUrl: "",
    githubUrl: "https://github.com/neutron420/Sharebite",
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
    year: "2025",
    title: "Lineo",
    description: "A multi-tenant queue and appointment platform for clinics, hospitals, and service centers. Features real-time coordination, role-based access control, and automated workload distribution. Optimized backend for high-concurrency handling with Go, Redis, and RabbitMQ.",
    tags: ["Next.js", "Go", "PostgreSQL", "GORM", "Redis", "RabbitMQ", "Tailwind CSS", "TypeScript", "Docker"],
    liveUrl: "",
    githubUrl: "https://github.com/neutron420/Lineo",
  },
];

export const technologies: Technology[] = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "Go", "C", "C++"],
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
];

export const personalInfo: PersonalInfo = {
  name: "Ritesh Singh",
  role: "Full-Stack Engineer · Competitive Programmer",
  location: "India",
  university: "C.V. Raman Global University",
  status: "Available for opportunities",
  bio: "I build from scratch. Frontend, backend, full-stack applications end-to-end from development to deployment. I'm passionate about creating technology that solves real-world problems.",
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
  website: "https://ritesh.codexly.xyz",
  github: "https://github.com/neutron420",
  linkedin: "https://www.linkedin.com/in/ritesh-singh1/",
  twitter: "https://x.com/RiteshS18572143",
};

// AI Chatbot response function
export const getAIResponse = (query: string): string => {
  const lowerQuery = query.toLowerCase().trim();

  // Very specific questions - handle first for edge cases
  
  // GitHub Profile - Very specific
  if (lowerQuery.match(/^(what is|what's|show me|give me|tell me).*(github|git hub).*(profile|username|handle|account)/) || 
      lowerQuery.match(/^(github|git hub).*(profile|username|handle|account|link)/) ||
      lowerQuery === "github" || lowerQuery === "github profile" || lowerQuery === "github username") {
    return `**GitHub Username:** @neutron420
**GitHub Profile:** https://github.com/neutron420`;
  }

  // LinkedIn Profile - Very specific
  if (lowerQuery.match(/^(what is|what's|show me|give me|tell me).*(linkedin|linked in).*(profile|username|handle|account)/) ||
      lowerQuery.match(/^(linkedin|linked in).*(profile|username|handle|account|link)/) ||
      lowerQuery === "linkedin" || lowerQuery === "linkedin profile") {
    return `**LinkedIn Profile:** https://www.linkedin.com/in/ritesh-singh1/`;
  }

  // Email - Very specific
  if (lowerQuery.match(/^(what is|what's|show me|give me|tell me).*(email|mail)/) ||
      lowerQuery.match(/^(email|mail).*(address|id)/) ||
      lowerQuery === "email" || lowerQuery === "mail") {
    return `**Email:** fnaticritesh2004@gmail.com`;
  }

  // Website - Very specific
  if (lowerQuery.match(/^(what is|what's|show me|give me|tell me).*(website|site|portfolio)/) ||
      lowerQuery.match(/^(website|site|portfolio).*(link|url)/) ||
      lowerQuery === "website" || lowerQuery === "portfolio") {
    return `**Website:** https://ritesh.codexly.xyz/`;
  }

  // LeetCode Profile - Very specific
  if (lowerQuery.match(/^(what is|what's|show me|give me|tell me).*(leetcode|leet code).*(profile|username|handle|account)/) ||
      lowerQuery.match(/^(leetcode|leet code).*(profile|username|handle|account|link)/) ||
      lowerQuery === "leetcode" || lowerQuery === "leetcode profile") {
    return `**LeetCode Username:** neutron420
**LeetCode Profile:** https://leetcode.com/u/neutron420/`;
  }

  // Twitter/X - Very specific
  if (lowerQuery.match(/^(what is|what's|show me|give me|tell me).*(twitter|x).*(profile|username|handle|account)/) ||
      lowerQuery.match(/^(twitter|x).*(profile|username|handle|account|link)/) ||
      lowerQuery === "twitter" || lowerQuery === "x" || lowerQuery === "twitter profile") {
    return `**Twitter/X:** @RiteshS18572143
**Profile:** https://x.com/RiteshS18572143`;
  }

  // Greetings
  if (lowerQuery.match(/^(hi|hello|hey|こんにちは|konnichiwa|good morning|good afternoon|good evening)/)) {
    return "こんにちは! Hello! I'm Ritesh's AI assistant. How can I help you learn more about him?";
  }

  // About Ritesh
  if (lowerQuery.match(/(who|what|about|tell me about|ritesh)/)) {
    return `Ritesh Singh is a Full-Stack Engineer, Blockchain Developer, and Competitive Programmer from India. He's currently pursuing BTech in Computer Science & Data Science at C.V. Raman Global University (2023-2027) with a CGPA of 8.5+.

He's passionate about building end-to-end applications from frontend to backend. Ritesh was a Finalist in Smart India Hackathon 2025. He's available for opportunities and loves solving real-world problems through technology.`;
  }

  // Skills
  if (lowerQuery.match(/(skill|tech|technology|stack|what can|expertise|programming|language|framework)/)) {
    return `Ritesh's technical stack includes:

**Languages:** TypeScript, JavaScript, Go, C, C++
**Frontend:** React, Next.js, Tailwind CSS, HTML5, CSS3
**Backend:** Node.js, Express, Bun, WebSocket, gRPC, Redis
**Databases:** PostgreSQL, MongoDB, Prisma ORM

He's a full-stack developer who can work on both frontend and backend!`;
  }

  // Projects
  if (lowerQuery.match(/(project|work|built|portfolio|github|app|application|software|product)/)) {
    return `Ritesh has worked on several impressive projects:

1. **Swaraj-Desk** (2025) - A comprehensive grievance management portal for government offices. Built for Smart India Hackathon 2025 (Finalist). Tech: Next.js, Node.js, PostgreSQL, Prisma, Redis, WebSockets, Docker, Kubernetes.
Live: https://sih-user-fe-sd.adityahota.online/
GitHub: https://github.com/neutron420/sih-swarajdesk-2025

2. **Swaraj-Desk Admin** (2025) - Admin portal with complaint management, analytics dashboard, and real-time notifications.
Live: https://admin.swarajdesk.com

3. **RakshaSetu** (2025) - Intelligent disaster management system with AI triage, volunteer dispatch, and BLE mesh offline SOS. Tech: React Native, Expo, Bun, Express, PostGIS, Kafka, Docker.
GitHub: https://github.com/neutron420/RakshaSetu

4. **ShareBite** (2025) - Full-stack food rescue platform connecting donors and NGOs. Tech: Next.js, Node.js, Prisma, PostgreSQL, Redis, Groq, Mapbox.
GitHub: https://github.com/neutron420/Sharebite

5. **Lineo** (2025) - Multi-tenant queue and appointment platform. Tech: Next.js, Go, PostgreSQL, GORM, Redis, RabbitMQ.
GitHub: https://github.com/neutron420/Lineo

Check out his GitHub: https://github.com/neutron420`;
  }

  // Education
  if (lowerQuery.match(/(education|university|college|degree|study|student)/)) {
    return `Ritesh is currently pursuing:
- **Degree:** BTech in Computer Science & Data Science
- **Institution:** C.V. Raman Global University
- **Duration:** 2023 - 2027
- **CGPA:** 8.5+
- **Location:** India`;
  }

  // Achievements
  if (lowerQuery.match(/(achievement|award|hackathon|finalist|sih|cardano|competition)/)) {
    return `Ritesh's achievements include:
- **Smart India Hackathon 2025 Finalist** - Built Swaraj-Desk grievance management system
- Active on LeetCode (109+ problems solved)
- Strong GitHub contribution history (550+ contributions)`;
  }

  // Contact
  if (lowerQuery.match(/(contact|email|reach|hire|available|opportunity|connect|social|link)/)) {
    return `You can reach Ritesh through:
- **Email:** fnaticritesh2004@gmail.com
- **Website:** https://ritesh.codexly.xyz/
- **LinkedIn:** https://www.linkedin.com/in/ritesh-singh1/
- **GitHub:** https://github.com/neutron420
- **Twitter/X:** https://x.com/RiteshS18572143

He's currently available for opportunities!`;
  }

  // LeetCode
  if (lowerQuery.match(/(leetcode|coding|algorithm|problem|solve|competitive|dsa|data structure|practice)/)) {
    return `Ritesh is active on LeetCode:
- **109 problems solved** out of 3792 total
- **Global Ranking:** Active competitive programmer
- **Max Streak:** 14 days
- **Active Days:** 45 days
- **Acceptance Rate:** Strong performance

Profile: https://leetcode.com/u/neutron420

He practices regularly to improve his problem-solving skills!`;
  }

  // GitHub - General (not profile-specific)
  if (lowerQuery.match(/(github|contribution|code|repository|repo|open source|commit)/) && 
      !lowerQuery.match(/(profile|username|handle|account)/)) {
    return `Ritesh is very active on GitHub:
- **550+ contributions** in the last year
- **Username:** @neutron420
- Multiple open-source projects
- Consistent coding activity

Check out his profile: https://github.com/neutron420`;
  }

  // Experience/Work
  if (lowerQuery.match(/(experience|work|job|intern|position|role|career|professional)/)) {
    return `Ritesh is a Full-Stack Engineer specializing in:
- Building end-to-end applications (frontend to backend)
- Full-stack web development
- DevOps and cloud deployment

He's currently available for opportunities and looking for roles in software engineering.`;
  }

  // Location/Where
  if (lowerQuery.match(/(where|location|city|country|from|based|live|reside)/)) {
    return `Ritesh is from India and currently studying at C.V. Raman Global University. He's available for remote opportunities and collaborations worldwide!`;
  }

  // Resume/CV
  if (lowerQuery.match(/(resume|cv|curriculum vitae|download|pdf|document)/)) {
    return `You can view Ritesh's resume here: https://ritesh.codexly.xyz/Ritesh_Kumar_Singh_Resume.pdf

The resume will open in a new tab. For the latest information about his experience, projects, and skills, feel free to reach out via email at fnaticritesh2004@gmail.com or connect on LinkedIn!`;
  }

  // Hobbies/Interests
  if (lowerQuery.match(/(hobby|interest|like|enjoy|passion|favorite|favourite|what does|what do)/)) {
    return `Ritesh is passionate about:
- Building full-stack applications from scratch
- Competitive programming and problem-solving
- Exploring new technologies and frameworks
- Creating solutions for real-world problems

He enjoys working on challenging projects and learning new things!`;
  }

  // What can he do / Services
  if (lowerQuery.match(/(what can|service|offer|do|capable|ability|help|build|create|develop)/)) {
    return `Ritesh can help with:
- Full-stack web development (Frontend + Backend)
- UI/UX implementation

He builds complete applications from design to deployment!`;
  }

  // University/College
  if (lowerQuery.match(/(university|college|school|institute|cv raman|cgpa|gpa|grade)/)) {
    return `Ritesh is studying at:
- **Institution:** C.V. Raman Global University
- **Degree:** BTech in Computer Science & Data Science
- **Duration:** 2023 - 2027
- **CGPA:** 8.5+
- **Location:** India

He's actively learning and applying his knowledge through projects and hackathons!`;
  }

  // Hackathon/SIH
  if (lowerQuery.match(/(sih|smart india hackathon|hackathon|competition|contest|win|prize|award)/)) {
    return `Ritesh's hackathon achievements:
- **Smart India Hackathon 2025 Finalist** - Built Swaraj-Desk, a comprehensive grievance management system for government offices

These experiences showcase his ability to build real-world solutions under time constraints and collaborate effectively in teams!`;
  }

  // Languages/Programming Languages
  if (lowerQuery.match(/(language|python|javascript|typescript|go|programming language)/)) {
    return `Ritesh is proficient in multiple programming languages:
- **TypeScript/JavaScript** - For web development
- **Go** - For backend and high-performance systems programming
- **C/C++** - For competitive programming

He adapts to the right language for each project's requirements!`;
  }

  // Specific Technology Questions
  if (lowerQuery.match(/(react|next\.js|node\.js|typescript|javascript|go|docker|kubernetes|aws|postgresql|mongodb)/)) {
    const tech = lowerQuery.match(/(react|next\.js|node\.js|typescript|javascript|go|docker|kubernetes|aws|postgresql|mongodb)/)?.[0];
    return `Ritesh has experience with ${tech} and uses it in his projects. He's worked with ${tech} in various full-stack applications. For specific details about his ${tech} experience, check out his projects on GitHub: https://github.com/neutron420`;
  }

  // Age/Year of Birth
  if (lowerQuery.match(/(how old|age|born|birthday|birth date|year of birth)/)) {
    return `Ritesh is currently pursuing his BTech (2023-2027), which suggests he's in his early 20s. For more personal details, feel free to reach out via email at fnaticritesh2004@gmail.com`;
  }

  // Availability/Hiring
  if (lowerQuery.match(/(available|hiring|hire|job|opportunity|open to|looking for|recruiting)/)) {
    return `Yes! Ritesh is currently available for opportunities. He's looking for roles in:
- Full-stack development
- Software engineering positions

You can reach out via:
- **Email:** fnaticritesh2004@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/ritesh-singh1/`;
  }

  // Salary/Compensation
  if (lowerQuery.match(/(salary|compensation|pay|rate|cost|price|charge|fee)/)) {
    return `For compensation and pricing details, please contact Ritesh directly via email at fnaticritesh2004@gmail.com or LinkedIn: https://www.linkedin.com/in/ritesh-singh1/`;
  }

  // Years of Experience
  if (lowerQuery.match(/(experience|years|how long|how many years|experienced)/) && 
      lowerQuery.match(/(year|experience)/)) {
    return `Ritesh is currently a student pursuing BTech (2023-2027) but has significant practical experience through:
- Multiple hackathon finalist positions
- Real-world projects (Swaraj-Desk, Bloom, Raby)
- Active open-source contributions (550+ GitHub contributions)
- Competitive programming practice

He's been building projects and contributing to open source actively while studying.`;
  }

  // Specific Project Questions
  if (lowerQuery.match(/(swaraj|swarajdesk|swaraj-desk)/)) {
    return `**Swaraj-Desk** is Ritesh's flagship project:
- A comprehensive grievance management portal for government offices
- Built for Smart India Hackathon 2025 (Finalist)
- **Tech Stack:** Next.js, Node.js, PostgreSQL, Prisma, Redis, WebSockets, Docker, Kubernetes
- **Live:** https://sih-user-fe-sd.adityahota.online/
- **Admin:** https://admin.swarajdesk.com
- **GitHub:** https://github.com/neutron420/sih-swarajdesk-2025`;
  }

  if (lowerQuery.match(/(bloom|video conferencing|meet)/)) {
    return `**Bloom** is a real-time video conferencing application:
- Similar to Google Meet with HD video calls
- Features: Screen sharing, chat messaging, virtual backgrounds
- **Tech Stack:** Next.js, WebRTC, Mediasoup, Socket.io
- **GitHub:** https://github.com/neutron420/Bloom`;
  }

  if (lowerQuery.match(/(raby|app)/)) {
    return `**Raby** is a secure mobile application:
- Feature rich and secure
- **Tech Stack:** React Native, Node.js
- **GitHub:** https://github.com/neutron420/Raby`;
  }

  if (lowerQuery.match(/(rakshasetu|raksha|disaster)/)) {
    return `**RakshaSetu** is Ritesh's intelligent disaster management system:
- Real-time SOS reporting and AI triage
- Automated volunteer dispatch using PostGIS proximity search
- Early Warning System integrating USGS and Weather data
- Offline SOS broadcasting via BLE mesh relay
- **Tech Stack:** React Native, Expo, Bun, Express, PostgreSQL, PostGIS, Redis, Apache Kafka, Docker, Kubernetes
- **GitHub:** https://github.com/neutron420/RakshaSetu`;
  }

  if (lowerQuery.match(/(sharebite|food|rescue)/)) {
    return `**ShareBite** is a full-stack food rescue platform:
- Connects donors, NGOs, and riders to reduce food waste
- Real-time coordination and map-based pickup discovery
- Transparent fulfillment workflows and karma leaderboard
- **Tech Stack:** Next.js, TypeScript, Node.js, Prisma, PostgreSQL, Redis, Groq AI, Mapbox, Terraform
- **GitHub:** https://github.com/neutron420/Sharebite`;
  }

  // CGPA/Grades
  if (lowerQuery.match(/(cgpa|gpa|grade|marks|percentage|score)/)) {
    return `Ritesh's current CGPA is **8.5+** at C.V. Raman Global University, pursuing BTech in Computer Science & Data Science (2023-2027).`;
  }

  // Skills in specific area
  if (lowerQuery.match(/(frontend|front end|ui|user interface|client side)/)) {
    return `Ritesh's frontend skills:
- **Frameworks:** React, Next.js
- **Styling:** Tailwind CSS, HTML5, CSS3
- **Languages:** TypeScript, JavaScript
- Experience building responsive, modern UIs for web applications`;
  }

  if (lowerQuery.match(/(backend|back end|server|api|server side)/)) {
    return `Ritesh's backend skills:
- **Runtime:** Node.js, Express, Bun
- **Communication:** WebSocket, gRPC
- **Caching:** Redis
- **Databases:** PostgreSQL, MongoDB, Prisma ORM
- Experience building scalable APIs and server-side applications`;
  }

  if (lowerQuery.match(/(devops|deployment|ci\/cd|docker|kubernetes|cloud)/)) {
    return `Ritesh's DevOps and Cloud skills:
- **Containers:** Docker
- **Orchestration:** Kubernetes
- **CI/CD:** Automated deployment pipelines
- **Cloud:** AWS, GCP, Cloudflare
- Experience deploying and managing production applications`;
  }

  // What technologies
  if (lowerQuery.match(/(what.*technolog|which.*tech|tech stack|technologies.*use|tools.*use)/)) {
    return `Ritesh uses a comprehensive tech stack:

**Languages:** TypeScript, JavaScript, Go, C, C++
**Frontend:** React, Next.js, Tailwind CSS
**Backend:** Node.js, Express, Bun, WebSocket, gRPC, Redis
**Databases:** PostgreSQL, MongoDB, Prisma ORM
**DevOps:** Docker, Kubernetes, CI/CD, AWS, GCP, Cloudflare

He selects the right tools for each project's requirements.`;
  }

  // How to contact
  if (lowerQuery.match(/(how.*contact|how.*reach|how.*connect|how.*get in touch|how.*reach out)/)) {
    return `You can contact Ritesh through:
- **Email:** fnaticritesh2004@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/ritesh-singh1/
- **Website:** https://ritesh.codexly.xyz/
- **GitHub:** https://github.com/neutron420`;
  }

  // What does he do
  if (lowerQuery.match(/(what.*do|what.*work|what.*job|occupation|profession)/)) {
    return `Ritesh is a Full-Stack Engineer. He:
- Builds end-to-end applications (frontend to backend)
- Works on full-stack web development
- Deploys applications using DevOps practices

He's currently a student but actively working on real-world projects.`;
  }

  // Where does he work
  if (lowerQuery.match(/(where.*work|where.*job|company|employer|organization)/)) {
    return `Ritesh is currently a student at C.V. Raman Global University (2023-2027) and is available for opportunities. He's worked on projects like Swaraj-Desk, Bloom, and Raby, and has been a finalist in multiple hackathons.`;
  }

  // Projects count
  if (lowerQuery.match(/(how many.*project|number.*project|project.*count|total.*project)/)) {
    return `Ritesh has worked on several major projects including:
1. Swaraj-Desk (2025) - Grievance management system
2. Swaraj-Desk Admin (2025) - Admin portal
3. Bloom (2024) - Video conferencing app
4. Raby (2024) - Secure mobile application

Plus multiple other open-source contributions. Check his GitHub: https://github.com/neutron420`;
  }

  // LeetCode stats specific
  if (lowerQuery.match(/(leetcode.*solved|problems.*solved|leetcode.*stats|leetcode.*ranking)/)) {
    return `Ritesh's LeetCode stats:
- **Problems Solved:** 109 out of 3792
- **Max Streak:** 14 days
- **Active Days:** 45 days
- **Profile:** https://leetcode.com/u/neutron420/`;
  }

  // GitHub contributions specific
  if (lowerQuery.match(/(github.*contribution|contribution.*github|github.*stats|how many.*contribution)/)) {
    return `Ritesh has **550+ contributions** on GitHub in the last year. Check his activity: https://github.com/neutron420`;
  }

  // Thank you/Appreciation
  if (lowerQuery.match(/(thank|thanks|appreciate|grateful|nice|good|great|awesome|cool)/)) {
    return `You're welcome! Feel free to ask more questions about Ritesh's skills, projects, or experience.`;
  }

  // Goodbye
  if (lowerQuery.match(/(bye|goodbye|see you|later|farewell|exit|quit)/)) {
    return `Goodbye! Feel free to come back anytime. You can also reach out to Ritesh directly at fnaticritesh2004@gmail.com`;
  }

  // Help
  if (lowerQuery.match(/(help|what can you|what.*ask|commands|options|menu)/)) {
    return `I can help you learn about:
- Ritesh's background and skills
- His projects (Swaraj-Desk, Bloom, Raby)
- Education and achievements
- Contact information (email, LinkedIn, GitHub, etc.)
- LeetCode and GitHub stats
- Hackathons and competitions
- Specific technologies he uses

Try asking specific questions like:
- "What is the GitHub profile?"
- "Tell me about Swaraj-Desk"
- "What are his skills?"
- "How to contact Ritesh?"`;
  }

  // Default response
  return `I'm not sure about that specific question. You can ask me about:
- Ritesh's background and skills
- His projects and work
- Education and achievements
- Contact information (try "what is the github profile" or "email")
- LeetCode or GitHub stats
- Hackathons and competitions
- What he can do or build
- Specific technologies or tools

Try asking "What is the GitHub profile?" or "Tell me about his projects"!`;
};

