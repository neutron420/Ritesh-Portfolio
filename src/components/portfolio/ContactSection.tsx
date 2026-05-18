import React from 'react';
import { ContactCard } from "@/components/contact-card";
import { Mail as MailIcon, Phone as PhoneIcon, MapPin as MapPinIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MarkerHighlight } from "@/components/ui/marker-highlight";
import { motion } from "framer-motion";

export default function ContactSection() {
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

        <div className="mx-auto max-w-5xl w-full">
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
                className: 'col-span-2',
              }
            ]}
          >
            <form action="" className="w-full space-y-4 text-left">
              <div className="flex flex-col gap-2">
                <Label className="text-foreground/90 font-medium">Name</Label>
                <Input type="text" className="border border-neutral-300 dark:border-neutral-800 bg-background focus-visible:ring-accent" />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-foreground/90 font-medium">Email</Label>
                <Input type="email" className="border border-neutral-300 dark:border-neutral-800 bg-background focus-visible:ring-accent" />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-foreground/90 font-medium">Phone</Label>
                <Input type="phone" className="border border-neutral-300 dark:border-neutral-800 bg-background focus-visible:ring-accent" />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-foreground/90 font-medium">Message</Label>
                <Textarea className="border border-neutral-300 dark:border-neutral-800 bg-background focus-visible:ring-accent min-h-[100px]" />
              </div>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold transition-all" type="button">
                Submit
              </Button>
            </form>
          </ContactCard>
        </div>
      </div>
    </section>
  );
}
