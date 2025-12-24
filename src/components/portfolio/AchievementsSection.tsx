import { Trophy, Award, Code } from "lucide-react";

const AchievementsSection = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "SIH Finalist 2025",
      description: "Smart India Hackathon",
      color: "text-yellow-500",
    },
    {
      icon: Award,
      title: "Cardano Hackathon Finalist 2025",
      description: "Blockchain Innovation",
      color: "text-blue-400",
    },
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="section-container">
        <h2 className="text-xl md:text-2xl font-semibold mb-6">Achievements</h2>
        
        <div className="grid sm:grid-cols-2 gap-4">
          {achievements.map((achievement) => {
            const Icon = achievement.icon;
            return (
              <div
                key={achievement.title}
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50 hover:border-accent/30 transition-all group"
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