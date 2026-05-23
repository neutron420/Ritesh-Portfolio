import React from 'react';
import { ContactCard } from "@/components/contact-card";
import { Mail as MailIcon, Phone as PhoneIcon, MapPin as MapPinIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MarkerHighlight } from "@/components/ui/marker-highlight";
import { motion } from "framer-motion";
import { SiLeetcode, SiGithub, SiX, SiLinkedin } from "react-icons/si";
import { CodeforcesIcon } from "@/components/ui/codeforces-icon";

export default function ContactSection() {
  const socialLinks = [
    { icon: SiGithub, href: "https://github.com/neutron420", label: "GitHub", brandColor: "currentColor" },
    { icon: SiX, href: "https://x.com/RiteshS18572143", label: "X", brandColor: "currentColor" },
    { icon: SiLinkedin, href: "https://www.linkedin.com/in/ritesh-singh1/", label: "LinkedIn", brandColor: "#0A66C2" },
    { icon: SiLeetcode, href: "https://leetcode.com/u/neutron420", label: "LeetCode", brandColor: "#FFA116" },
    { icon: CodeforcesIcon, href: "https://codeforces.com/profile/Coder-04Rit", label: "Codeforces", brandColor: undefined },
  ];
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="section-container max-w-5xl mx-auto px-4">
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

        <div className="mx-auto max-w-5xl w-full overflow-hidden">
          <ContactCard
            title="Get in touch"
            description="If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day."
            contactInfo={[
              {
                icon: MailIcon,
                label: 'Email',
                value: 'fnaticritesh2004@gmail.com',
              },
              {
                icon: PhoneIcon,
                label: 'Phone',
                value: '+91 9002132340',
              },
              {
                icon: MapPinIcon,
                label: 'Address',
                value: 'Kolkata, West Bengal, India 🇮🇳',
                className: 'sm:col-span-2',
              }
            ]}
            socialLinks={socialLinks}
          >
            <form action="" className="w-full space-y-3 sm:space-y-4 text-left">
              <div className="flex flex-col gap-1.5 sm:gap-2">
                <Label className="text-foreground/90 font-medium text-sm">Name</Label>
                <Input type="text" className="focus-visible:ring-accent text-base sm:text-sm" />
              </div>
              <div className="flex flex-col gap-1.5 sm:gap-2">
                <Label className="text-foreground/90 font-medium text-sm">Email</Label>
                <Input type="email" className="focus-visible:ring-accent text-base sm:text-sm" />
              </div>
              <div className="flex flex-col gap-1.5 sm:gap-2">
                <Label className="text-foreground/90 font-medium text-sm">Phone</Label>
                <Input type="phone" className="focus-visible:ring-accent text-base sm:text-sm" />
              </div>
              <div className="flex flex-col gap-1.5 sm:gap-2">
                <Label className="text-foreground/90 font-medium text-sm">Message</Label>
                <Textarea className="focus-visible:ring-accent min-h-[80px] sm:min-h-[100px] text-base sm:text-sm" />
              </div>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold transition-all py-3" type="button">
                Submit
              </Button>
            </form>
          </ContactCard>
        </div>
      </div>
    </section>
  );
}
