import { Github, Twitter, Linkedin, Mail, Download, GraduationCap, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import { TerminalTransition } from "@/components/TerminalTransition";
import Typewriter from "@/components/ui/typewriter";
import bannerImage from "@/assets/banner.jpg";

import { 
  SiTypescript, 
  SiReact, 
  SiNodedotjs, 
  SiSolidity,
  SiRust,
  SiPostgresql
} from "react-icons/si";

// Tech badges for hero bio
const techBadges = [
  { name: "TypeScript", icon: <SiTypescript className="w-3.5 h-3.5" />, color: "bg-[#3178C6]/15 text-[#3178C6] border-[#3178C6]/30" },
  { name: "React", icon: <SiReact className="w-3.5 h-3.5" />, color: "bg-[#61DAFB]/15 text-[#61DAFB] border-[#61DAFB]/30" },
  { name: "Node.js", icon: <SiNodedotjs className="w-3.5 h-3.5" />, color: "bg-[#339933]/15 text-[#339933] border-[#339933]/30" },
  { name: "Solidity", icon: <SiSolidity className="w-3.5 h-3.5" />, color: "bg-[#363636]/15 text-[#636363] dark:text-[#c4c4c4] border-[#363636]/30" },
  { name: "Rust", icon: <SiRust className="w-3.5 h-3.5" />, color: "bg-[#DEA584]/15 text-[#DEA584] border-[#DEA584]/30" },
  { name: "PostgreSQL", icon: <SiPostgresql className="w-3.5 h-3.5" />, color: "bg-[#336791]/15 text-[#336791] border-[#336791]/30" },
];

const HeroSection = () => {

  const socialLinks = [
    { icon: Github, href: "https://github.com/neutron420", label: "GitHub" },
    { icon: Twitter, href: "https://x.com/RiteshS18572143", label: "X" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ritesh-singh1/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:fnaticritesh2004@gmail.com", label: "Email" },
  ];

  const roles = [
    "Full-Stack Engineer",
    "Blockchain Developer",
    "Competitive Programmer",
    "Web3 Enthusiast",
  ];

  return (
    <section className="pt-20 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
                              linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 -left-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Floating dots */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-accent/40"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Banner Image */}
      <div className="section-container relative z-10">
        <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden mt-6">
          <img
            src={bannerImage}
            alt="Mt. Fuji"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          
          {/* Floating text on banner */}
          <motion.div 
            className="absolute bottom-4 right-6 text-right"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-sm italic text-foreground/80 serif">
              Build · Ship · Learn · Repeat
            </p>
          </motion.div>
        </div>

        {/* Profile Section */}
        <div className="relative -mt-16 md:-mt-20 px-4">
          {/* Avatar */}
          <motion.div 
            className="w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-background overflow-hidden bg-card shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <img
              src="https://avatars.githubusercontent.com/u/179364761?v=4"
              alt="Ritesh Singh"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </motion.div>

          {/* Info with Animation */}
          <div className="mt-4">
            <motion.h1 
              className="text-2xl md:text-3xl font-semibold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Ritesh Singh
            </motion.h1>
            
            {/* Typewriter Effect */}
            <motion.p 
              className="text-muted-foreground mt-1 text-sm sm:text-base h-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Typewriter 
                texts={roles}
                typingSpeed={80}
                deletingSpeed={40}
                pauseDuration={2500}
              />
            </motion.p>
            
            <motion.p 
              className="text-xs sm:text-sm text-muted-foreground/80 mt-1 flex items-center gap-1.5 flex-wrap"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <GraduationCap className="w-4 h-4 flex-shrink-0" />
              <span className="break-words">BTech in CSE & Data Science · CV Raman Global University · 2027</span>
            </motion.p>

            {/* Social Links + Resume Button */}
            <motion.div 
              className="flex items-center gap-3 mt-4 flex-wrap"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-card border border-border hover:border-accent hover:text-accent transition-all"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.05 }}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
              
              {/* Terminal Button */}
              <TerminalTransition to="/terminal">
                <motion.div 
                  className="ml-0 sm:ml-2 px-3 sm:px-4 py-2 sm:py-2.5 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-mono font-medium rounded-lg bg-[#0d1117] text-[#39d353] hover:bg-[#161b22] transition-all shadow-lg hover:shadow-xl border border-[#39d353]/30 hover:border-[#39d353]/50 backdrop-blur-sm group relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="absolute inset-0 bg-[#39d353]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4 relative z-10 flex-shrink-0" />
                  <span className="relative z-10 flex items-center gap-1 sm:gap-1.5">
                    <span className="text-[#39d353] hidden sm:inline">ritesh@portfolio</span>
                    <span className="text-[#39d353] sm:hidden">ritesh</span>
                    <span className="text-[#8b949e]">:</span>
                    <span className="text-[#58a6ff]">~</span>
                    <span className="text-[#8b949e]">$</span>
                  </span>
                </motion.div>
              </TerminalTransition>
              
              {/* Resume Button */}
              <motion.a
                href="/RiteshSinghResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-0 sm:ml-2 px-3 sm:px-4 py-2 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Resume</span>
                <span className="sm:hidden">CV</span>
              </motion.a>
            </motion.div>
          </div>

          {/* Bio - Extended */}
          <motion.div 
            className="mt-6 sm:mt-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <p className="text-foreground text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
              <span className="text-accent font-medium">I build from scratch.</span>{" "}
              I create interactive web apps using{" "}
              {techBadges.slice(0, 4).map((tech, index) => (
                <motion.span
                  key={tech.name}
                  className={`inline-flex items-center gap-1 px-2 py-0.5 mx-0.5 rounded-md text-xs font-medium border ${tech.color}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -1 }}
                >
                  {tech.icon}
                  <span>{tech.name}</span>
                </motion.span>
              ))}
              {" "}and{" "}
              {techBadges.slice(4).map((tech, index) => (
                <motion.span
                  key={tech.name}
                  className={`inline-flex items-center gap-1 px-2 py-0.5 mx-0.5 rounded-md text-xs font-medium border ${tech.color}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -1 }}
                >
                  {tech.icon}
                  <span>{tech.name}</span>
                </motion.span>
              ))}
              . With a focus on <span className="font-medium text-accent">Web3</span> and <span className="font-medium text-accent">blockchain</span> development.
            </p>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
              Currently exploring the intersection of Web3 and traditional software development, 
              with a focus on decentralized applications and smart contract security. 
              I believe in writing clean, maintainable code that stands the test of time.
            </p>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              When I'm not coding, you'll find me solving problems on LeetCode, 
              participating in hackathons, or learning about new blockchain protocols. 
              I thrive in competitive environments and enjoy pushing my limits.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
