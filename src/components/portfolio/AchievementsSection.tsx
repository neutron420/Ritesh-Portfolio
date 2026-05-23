import { Trophy, Award, FileText, CheckCircle2 } from "lucide-react";
import { MarkerHighlight } from "@/components/ui/marker-highlight";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import React from "react";

const AchievementsSection = () => {
  const { ref: achRef, isVisible: achVisible } = useScrollReveal();
  const { ref: patRef, isVisible: patVisible } = useScrollReveal();

  const achievements = [
    {
      year: "2026",
      title: "HackTheStack 2026",
      subtitle: "Winner C. V. Raman Global University",
      description: "Winner of the national-level HackTheStack (2026) hackathon at C. V. Raman Global University with team 'The Archers'.",
      icon: Trophy,
      iconColor: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    },
    {
      year: "2026",
      title: "Code Relay 4.0",
      subtitle: "Winner IIT Bhubaneswar",
      description: "Secured 1st place in the prestigious national-level Code Relay 4.0 hackathon hosted by IIT Bhubaneswar.",
      icon: Trophy,
      iconColor: "text-yellow-500 bg-yellow-500/10 border-yellow-500/20",
    },
    {
      year: "2025",
      title: "Cardano Finalist",
      subtitle: "Blockchain Innovation Cardano",
      description: "Represented team 'Team Brocode' in Bengaluru, showcasing core skills in blockchain innovation powered by Cardano blockchain company at Bengaluru.",
      icon: Award,
      iconColor: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    },
    {
      year: "2025",
      title: "Grand Finalist",
      subtitle: "Smart India Hackathon (SIH)",
      description: "Reached the Grand Finals of the Smart India Hackathon (Govt. of India) with team 'ThePrimeagen', selected out of 50,000+ teams.",
      icon: Award,
      iconColor: "text-orange-500 bg-orange-500/10 border-orange-500/20",
    },
  ];

  return (
    <div className="py-24 relative overflow-hidden bg-background">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Achievements Sub-Section */}
        <div 
          ref={achRef}
          className={`scroll-reveal ${achVisible ? 'visible' : ''} mb-24`}
        >
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 px-4">
            <div className="flex items-center gap-3 justify-center mb-3">
              <div className="h-px w-8 bg-accent" />
              <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Milestones</span>
              <div className="h-px w-8 bg-accent" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              <MarkerHighlight before="" highlight="Achievements" markerColor="#facc15" />
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((ach) => {
              const Icon = ach.icon;

              return (
                <div
                  key={ach.title}
                  className="flex flex-col justify-between rounded-2xl border-0 md:border md:border-border/40 bg-muted/5 backdrop-blur-sm p-5 sm:p-6 transition-all duration-500 hover:border-border/80 hover:bg-muted/10 group relative overflow-hidden min-h-[200px] sm:min-h-[220px] h-full"
                >
                  <div className="flex items-start justify-between">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${ach.iconColor}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2 py-0.5 rounded-full border border-border/30 bg-muted/50 text-[10px] font-bold text-muted-foreground">
                      {ach.year}
                    </span>
                  </div>

                  <div className="mt-4 flex-1 flex flex-col justify-end">
                    <h3 className="text-base md:text-lg font-bold tracking-tight text-foreground transition-colors duration-300">
                      {ach.title}
                    </h3>
                    <p className="text-[11px] font-semibold text-accent/80 mt-1">
                      {ach.subtitle}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                      {ach.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Patent & Research Sub-Section */}
        <div 
          ref={patRef}
          className={`scroll-reveal ${patVisible ? 'visible' : ''}`}
        >
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 px-4">
            <div className="flex items-center gap-3 justify-center mb-3">
              <div className="h-px w-8 bg-accent" />
              <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">Publications</span>
              <div className="h-px w-8 bg-accent" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              <MarkerHighlight before="Patent & " highlight="Research" markerColor="#facc15" />
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Patent Card (Zero Shadow Glow, Clean Simple Neutral Border) */}
            <div className="flex flex-col justify-between rounded-2xl border-0 md:border md:border-border/40 bg-muted/5 backdrop-blur-sm p-5 sm:p-6 transition-all duration-500 hover:border-border/80 hover:bg-muted/10 group relative overflow-hidden min-h-[180px] md:min-h-[190px]">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded bg-muted text-[10px] font-bold tracking-wider text-muted-foreground border border-border/40 uppercase">
                  Patent
                </span>
                <a
                  href="/patent.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-muted/50 hover:bg-accent hover:text-accent-foreground text-[11px] font-bold border border-border/40 text-foreground transition-all cursor-pointer group/pdf"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View PDF</span>
                </a>
              </div>

              <div className="mt-5 flex-1 flex flex-col justify-end">
                <h3 className="text-base md:text-lg font-bold tracking-tight text-foreground transition-colors duration-300 leading-snug">
                  An Offline-First, AI-Enabled System for Decentralized Issue Reporting
                </h3>
                <p className="text-xs text-muted-foreground mt-2.5 leading-relaxed">
                  Published Indian Patent (No. 202631019043) on an automated routing and immutable resolution tracking system.
                </p>
              </div>
            </div>

            {/* Research Paper Card (Zero Shadow Glow, Clean Simple Neutral Border) */}
            <div className="flex flex-col justify-between rounded-2xl border-0 md:border md:border-border/40 bg-muted/5 backdrop-blur-sm p-5 sm:p-6 transition-all duration-500 hover:border-border/80 hover:bg-muted/10 group relative overflow-hidden min-h-[180px] md:min-h-[190px]">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded bg-muted text-[10px] font-bold tracking-wider text-muted-foreground border border-border/40 uppercase">
                  Research Paper
                </span>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-muted/30 text-[11px] font-bold border border-border/20 text-muted-foreground/80">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent/80" />
                  <span>Under Review</span>
                </div>
              </div>

              <div className="mt-5 flex-1 flex flex-col justify-end">
                <h3 className="text-base md:text-lg font-bold tracking-tight text-foreground transition-colors duration-300 leading-snug">
                  Connection-Aware Autoscaling for Stateful Kubernetes Workloads
                </h3>
                <p className="text-xs text-muted-foreground mt-2.5 leading-relaxed">
                  Co-authored a research paper proposing a novel approach to connection-aware autoscaling for stateful Kubernetes workloads.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default AchievementsSection;