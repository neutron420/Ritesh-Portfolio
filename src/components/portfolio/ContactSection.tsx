import { useState } from "react";
import { Mail, Check, Copy } from "lucide-react";
import { SiGithub, SiLinkedin, SiX, SiWhatsapp } from "react-icons/si";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { MarkerHighlight } from "@/components/ui/marker-highlight";

const ContactSection = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("fnaticritesh2004@gmail.com");
    setCopied(true);
    toast({
      title: "Copied! 🚀",
      description: "Email address copied to your clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    { icon: SiGithub, href: "https://github.com/neutron420", label: "GitHub" },
    { icon: SiLinkedin, href: "https://www.linkedin.com/in/ritesh-singh1/", label: "LinkedIn" },
    { icon: SiX, href: "https://x.com/RiteshS18572143", label: "Twitter" },
    { icon: SiWhatsapp, href: "https://wa.me/919002132340", label: "WhatsApp" },
  ];

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="section-container max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px w-8 bg-accent" />
            <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">Connect</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <MarkerHighlight before="Get in " highlight="Touch" markerColor="#facc15" />
          </h2>
        </div>

        {/* Dual Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {/* Left Card: Direct Message / Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-between text-center p-8 md:p-10 rounded-3xl bg-card/30 backdrop-blur-md border border-border/40 hover:border-border/80 transition-all duration-500 min-h-[320px]"
          >
            <div className="w-16 h-16 rounded-2xl bg-muted/40 border border-border/50 flex items-center justify-center mb-6">
              <Mail className="w-8 h-8 text-foreground" />
            </div>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xs mb-8">
              Want to chat? Just <span className="font-bold text-foreground">shoot me a DM on Twitter</span> and I'll respond when I can. I ignore all soliciting.
            </p>

            {/* Interactive Email Capsule */}
            <div className="flex items-center justify-between gap-3 pl-4 pr-2.5 py-2.5 rounded-2xl bg-muted/30 border border-border/50 w-full max-w-[320px] sm:max-w-sm">
              <span className="text-xs font-semibold text-muted-foreground truncate select-all">
                fnaticritesh2004@gmail.com
              </span>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-background border border-border/50 hover:bg-muted text-xs font-bold text-foreground transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-500 animate-in fade-in" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      Copy
                    </>
                  )}
                </button>

                <a
                  href="mailto:fnaticritesh2004@gmail.com"
                  className="w-9 h-9 flex items-center justify-center rounded-xl bg-foreground text-background hover:opacity-90 transition-all"
                  title="Send Direct Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Card: Social Profiles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center justify-between text-center p-8 md:p-10 rounded-3xl bg-card/30 backdrop-blur-md border border-border/40 hover:border-border/80 transition-all duration-500 min-h-[320px]"
          >
            <div className="flex flex-col items-center">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground">
                Social Profiles
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xs">
                Connect with me on social media or check out my open-source projects.
              </p>
            </div>

            {/* Circular Profiles Grid */}
            <div className="flex justify-center gap-4 mt-8">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 flex items-center justify-center rounded-full bg-muted/40 border border-border/40 hover:bg-foreground hover:text-background hover:scale-105 transition-all duration-300"
                    aria-label={social.label}
                    title={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;