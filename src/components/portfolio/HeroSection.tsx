import { Github, Twitter, Linkedin, Mail, Download } from "lucide-react";
import bannerImage from "@/assets/banner.jpg";

const HeroSection = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/neutron420", label: "GitHub" },
    { icon: Twitter, href: "https://x.com/RiteshS18572143", label: "X" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ritesh-singh1/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:fnaticritesh2004@gmail.com", label: "Email" },
  ];

  return (
    <section className="pt-20">
      {/* Banner Image */}
      <div className="section-container">
        <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden mt-6">
          <img
            src={bannerImage}
            alt="Mt. Fuji"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          
          {/* Floating text on banner */}
          <div className="absolute bottom-4 right-6 text-right">
            <p className="text-sm italic text-foreground/80 serif">
              Build · Ship · Learn · Repeat
            </p>
          </div>
        </div>

        {/* Profile Section */}
        <div className="relative -mt-16 md:-mt-20 px-4">
          {/* Avatar */}
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-background overflow-hidden bg-card">
            <img
              src="https://avatars.githubusercontent.com/u/179364761?v=4"
              alt="Ritesh Singh"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="mt-4">
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Ritesh Singh
            </h1>
            <p className="text-muted-foreground mt-1">
              Full-Stack Engineer · Blockchain Developer · Competitive Programmer
            </p>
            <p className="text-sm text-muted-foreground/80 mt-1 flex items-center gap-1.5">
              <span>🎓</span>
              <span>BTech in CSE & Data Science · CV Raman Global University</span>
            </p>

            {/* Social Links + Resume Button */}
            <div className="flex items-center gap-3 mt-4 flex-wrap">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-card border border-border hover:border-accent hover:text-accent transition-all"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
              
              {/* Resume Download Button */}
              <a
                href="/resume.pdf"
                download="Ritesh_Singh_Resume.pdf"
                className="ml-2 px-4 py-2 flex items-center gap-2 text-sm font-medium rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-all"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </div>
          </div>

          {/* Bio - Extended */}
          <div className="mt-8 max-w-2xl">
            <p className="text-foreground leading-relaxed mb-4">
              <span className="text-accent font-medium">I build from scratch.</span>{" "}
              Frontend, backend, full-stack, and blockchain applications end-to-end 
              from deployment to smart contracts. I'm passionate about creating 
              technology that solves real-world problems.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Currently exploring the intersection of Web3 and traditional software development, 
              with a focus on decentralized applications and smart contract security. 
              I believe in writing clean, maintainable code that stands the test of time.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me solving problems on LeetCode, 
              participating in hackathons, or learning about new blockchain protocols. 
              I thrive in competitive environments and enjoy pushing my limits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;