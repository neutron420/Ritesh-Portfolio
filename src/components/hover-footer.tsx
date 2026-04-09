"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Mail, ExternalLink } from "lucide-react";
import { SiLeetcode, SiGithub, SiX, SiLinkedin } from "react-icons/si";

export const TextHoverEffect = ({
  text,
  duration,
  className,
}: {
  text: string;
  duration?: number;
  automatic?: boolean;
  className?: string;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 800 200"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className={cn("select-none uppercase cursor-pointer", className)}
    >
      <defs>
        <radialGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
          cx="50%"
          cy="50%"
          r="50%"
        >
          {hovered && (
            <>
              <stop offset="0%" stopColor="#3ca2fa" />
              <stop offset="50%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#1e3a8a" />
            </>
          )}
        </radialGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="25%"
          initial={{ cx: "50%", cy: "50%" }}
          animate={maskPosition}
          transition={{ duration: 0 }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id="textMask">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#revealMask)"
          />
        </mask>
      </defs>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.5"
        className="fill-transparent stroke-neutral-200 font-[helvetica] font-bold dark:stroke-neutral-900"
        style={{ opacity: hovered ? 0.3 : 0, fontSize: "120px" }}
      >
        {text}
      </text>
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.5"
        className="fill-transparent stroke-[#3ca2fa] font-[helvetica] font-bold dark:stroke-[#3ca2fa]/60"
        style={{ fontSize: "120px" }}
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: 1000,
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.text>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="0.5"
        mask="url(#textMask)"
        className="fill-transparent font-[helvetica] font-bold"
        style={{ fontSize: "120px" }}
      >
        {text}
      </text>
    </svg>
  );
};

export const FooterBackgroundGradient = () => {
  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(125% 125% at 50% 10%, #00000000 50%, #3ca2fa15 100%)",
      }}
    />
  );
};

export const Footer = () => {
  const socialLinks = [
    { icon: SiGithub, href: "https://github.com/neutron420", label: "GitHub" },
    { icon: SiX, href: "https://x.com/RiteshS18572143", label: "X" },
    { icon: SiLinkedin, href: "https://www.linkedin.com/in/ritesh-singh1/", label: "LinkedIn" },
    { icon: SiLeetcode, href: "https://leetcode.com/u/neutron420", label: "LeetCode" },
    { icon: Mail, href: "mailto:fnaticritesh2004@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Stack", href: "#tech" },
    { name: "Projects", href: "#projects" },
    { name: "Terminal", href: "/terminal" },
  ];

  return (
    <footer className="w-full bg-background relative pt-20 pb-10 overflow-hidden border-t border-border/40">
      <FooterBackgroundGradient />
      
      {/* Grid Effect */}
      <div 
        className="absolute inset-0 opacity-[0.1] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #3ca2fa 1px, transparent 1px),
                            linear-gradient(to bottom, #3ca2fa 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
        }}
      />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold tracking-tight">Neutron.</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Building high-performance applications with modern tech stacks. Focused on scalability, clean code, and user experience.
            </p>
            <div className="flex items-center gap-4 mt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-1.5 group"
                >
                  {link.name}
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Availability</h4>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Open for opportunities
            </div>
            <p className="text-sm text-muted-foreground">
              Currently based in India. Open to remote work and collaborations worldwide.
            </p>
          </div>
        </div>

        {/* NEUTRON Hover Text */}
        <div className="h-[200px] md:h-[300px] w-full flex items-center justify-center border-y border-border/40 my-8">
          <TextHoverEffect text="NEUTRON" />
        </div>
        
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Ritesh Singh. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50 font-medium">
              理 Build with Passion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};