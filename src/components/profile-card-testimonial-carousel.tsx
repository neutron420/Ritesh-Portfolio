"use client";

import { motion } from "framer-motion";
import {
  Mail,
  GraduationCap,
  Sparkles,
  Trophy,
} from "lucide-react";
import { SiLeetcode, SiX, SiGithub, SiLinkedin } from "react-icons/si";
import { CodeforcesIcon } from "@/components/ui/codeforces-icon";
import { cn } from "@/lib/utils";

export interface AboutMeCardProps {
  className?: string;
}

export function TestimonialCarousel({ className }: AboutMeCardProps) {
  const profile = {
    name: "Ritesh Singh",
    title: "Full-Stack Engineer & Competitive Programmer",
    education: "BTech in CSE & Data Science · CV Raman Global University · 2027",
    description:
      "I build from scratch. I create interactive web apps using TypeScript, React, Node.js, Go, and PostgreSQL. With a focus on scalable systems, clean code, and robust architectures, I write maintainable code that stands the test of time and effectively solves complex problems.",
    secondaryDescription:
      "When I'm not coding, you'll find me solving problems on LeetCode, participating in hackathons, or contributing to open source. I thrive in competitive environments and enjoy pushing my limits.",
    imageUrl: "/logo.jpg",
    githubUrl: "https://github.com/neutron420",
    twitterUrl: "https://x.com/RiteshS18572143",
    linkedinUrl: "https://www.linkedin.com/in/ritesh-singh1/",
    leetcodeUrl: "https://leetcode.com/u/neutron420",
    codeforcesUrl: "https://codeforces.com/profile/Coder-04Rit",
    emailUrl: "mailto:fnaticritesh2004@gmail.com",
  };

  const socialLinks = [
    { icon: SiGithub, url: profile.githubUrl, label: "GitHub", brandColor: "currentColor", hoverBorder: "hover:border-foreground" },
    { icon: SiX, url: profile.twitterUrl, label: "X", brandColor: "currentColor", hoverBorder: "hover:border-foreground" },
    { icon: SiLinkedin, url: profile.linkedinUrl, label: "LinkedIn", brandColor: "#0A66C2", hoverBorder: "hover:border-[#0A66C2]" },
    { icon: SiLeetcode, url: profile.leetcodeUrl, label: "LeetCode", brandColor: "#FFA116", hoverBorder: "hover:border-[#FFA116]" },
    { icon: CodeforcesIcon, url: profile.codeforcesUrl, label: "Codeforces", brandColor: undefined, hoverBorder: "hover:border-[#1890FF]" },
    { icon: Mail, url: profile.emailUrl, label: "Email", brandColor: "#EA4335", hoverBorder: "hover:border-[#EA4335]" },
  ];

  return (
    <div className={cn("w-full max-w-5xl mx-auto px-4 md:px-6 py-6", className)}>
      {/* Desktop layout */}
      <div className="hidden md:flex relative items-center justify-center py-6">
        {/* Avatar Container with hover glowing effects */}
        <div className="w-[380px] h-[380px] rounded-3xl overflow-hidden bg-muted/20 border border-border/60 flex-shrink-0 relative group shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
          <img
            src={profile.imageUrl}
            alt={profile.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            draggable={false}
          />
        </div>

        {/* Info Overlapping Card */}
        <div className="bg-card border border-border/60 rounded-3xl shadow-2xl p-8 ml-[-60px] z-10 max-w-xl flex-1 relative">
          
          <div className="mb-6">
            <h2 className="text-3xl font-extrabold text-foreground tracking-tight mb-1">
              About Me
            </h2>

            <p className="text-sm font-semibold text-accent tracking-wide uppercase">
              {profile.title}
            </p>
          </div>

          <div className="space-y-4 mb-6">
            <p className="text-foreground/90 text-sm md:text-base leading-relaxed font-medium">
              {profile.description}
            </p>
            <p className="text-foreground/75 text-sm md:text-base leading-relaxed">
              {profile.secondaryDescription}
            </p>
            <div className="flex flex-col gap-2 pt-2 border-t border-border/30 text-xs text-foreground/60">
              <p className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-accent flex-shrink-0" />
                <span>{profile.education}</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Trophy className="w-4 h-4 text-accent flex-shrink-0" />
                <span>Won 3 Hackathons & 2x Finalist</span>
              </p>
            </div>
          </div>

          <div className="flex space-x-3.5 pt-2">
            {socialLinks.map(({ icon: IconComponent, url, label, brandColor, hoverBorder }) => (
              <a
                key={label}
                href={url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "w-10 h-10 bg-background dark:bg-muted/30 border border-border/60 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 shadow-sm",
                  hoverBorder
                )}
                aria-label={label}
              >
                <IconComponent className="w-[18px] h-[18px]" style={{ color: brandColor }} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden max-w-md mx-auto text-center bg-card/50 rounded-3xl p-5 sm:p-6">
        {/* Avatar */}
        <div className="w-36 h-36 mx-auto rounded-2xl overflow-hidden border-2 border-accent/50 shadow-md mb-5 relative">
          <img
            src={profile.imageUrl}
            alt={profile.name}
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>

        {/* Card content */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-1">
            About Me
          </h2>
          
          <p className="text-xs font-semibold text-accent tracking-wide uppercase mb-4">
            {profile.title}
          </p>
          
          <div className="space-y-3 mb-6 text-left">
            <p className="text-foreground/90 text-sm leading-relaxed font-medium text-center">
              {profile.description}
            </p>
             <p className="text-foreground/75 text-xs leading-relaxed text-center">
              {profile.secondaryDescription}
            </p>
            <div className="flex flex-col items-center gap-2 pt-2 border-t border-border/20 text-[10px] text-foreground/60 text-center">
              <p className="flex items-center justify-center gap-1">
                <GraduationCap className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                <span>{profile.education}</span>
              </p>
              <p className="flex items-center justify-center gap-1">
                <Trophy className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                <span>Won 3 Hackathons & 2x Finalist</span>
              </p>
            </div>
          </div>
          
          <div className="flex justify-center flex-wrap gap-3 pt-2">
            {socialLinks.map(({ icon: IconComponent, url, label, brandColor, hoverBorder }) => (
              <a
                key={label}
                href={url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "w-10 h-10 bg-background dark:bg-muted/40 border border-border/50 rounded-lg flex items-center justify-center transition-all duration-200 active:scale-95",
                  hoverBorder
                )}
                aria-label={label}
              >
                <IconComponent className="w-[18px] h-[18px]" style={{ color: brandColor }} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
