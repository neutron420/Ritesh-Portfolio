import { Github, Twitter, Linkedin, Mail, Heart } from "lucide-react";
import { useVisitorCount } from "@/hooks/use-visitor-count";
import { motion } from "framer-motion";

const Footer = () => {
  const { count, loading } = useVisitorCount();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/neutron420", label: "GitHub" },
    { icon: Twitter, href: "https://x.com/RiteshS18572143", label: "X" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ritesh-singh1/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:fnaticritesh2004@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { label: "Projects", href: "#projects" },
    { label: "Tech Stack", href: "#tech-stack" },
    { label: "Contact", href: "#contact" },
    { label: "Resume", href: "/RiteshSinghResume.pdf" },
  ];

  return (
    <footer className="py-12 md:py-16 border-t border-border/50 bg-card/30">
      <div className="section-container">
        {/* Quote Section */}
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <blockquote className="text-lg md:text-xl italic text-muted-foreground max-w-2xl mx-auto">
            "The only way to do great work is to love what you do."
          </blockquote>
          <p className="text-sm text-muted-foreground/60 mt-2">— Steve Jobs</p>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-3">Ritesh Singh</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Full-Stack Engineer & Blockchain Developer building from scratch. 
              Passionate about creating technology that solves real-world problems.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-3">Connect</h3>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-muted/50 hover:bg-accent hover:text-accent-foreground transition-all"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Visitor Counter */}
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="px-6 py-3 rounded-xl bg-muted/30 border border-border/50">
            <p className="text-sm text-muted-foreground">
              You are the{" "}
              <span className="text-accent font-bold text-lg px-2">
                {loading ? (
                  <span className="inline-block w-12 h-5 bg-muted/50 rounded animate-pulse" />
                ) : (
                  count?.toLocaleString() || "—"
                )}
              </span>{" "}
              visitor
            </p>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-sm text-muted-foreground/60 flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Ritesh Singh
          </p>
          <p className="text-sm text-muted-foreground/60">
            © {currentYear} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
