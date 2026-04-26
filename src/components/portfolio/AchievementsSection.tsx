import { Trophy, Award } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const AchievementsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  const achievements = [
    {
      icon: Trophy,
      title: "HackTheStack Winner 2026",
      description: "National Level Hackathon",
      color: "text-green-400",
    },
    {
      icon: Trophy,
      title: "Code Relay 4.0 Winner",
      description: "IIT Bhubaneswar",
      color: "text-yellow-500",
    },
    {
      icon: Trophy,
      title: "SIH Finalist 2025",
      description: "Government of India",
      color: "text-yellow-500",
    },
    {
      icon: Award,
      title: "Cardano Hackathon Finalist 2025",
      description: "Blockchain Innovation by Cardano",
      color: "text-blue-400",
    },
  ];

  return (
    <section id="achievements" className="py-12 md:py-16">
      <div 
        ref={ref}
        className={`section-container scroll-reveal ${isVisible ? 'visible' : ''}`}
      >
        <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center">Achievements</h2>
        
        <div className="flex flex-wrap justify-center gap-4">
          {achievements.map((achievement) => {
            const Icon = achievement.icon;
            return (
              <div
                key={achievement.title}
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50 hover:border-accent/30 transition-all group min-w-[280px] w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] max-w-sm"
              >
                <div className={`w-12 h-12 flex items-center justify-center rounded-lg bg-muted ${achievement.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium group-hover:text-accent transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;