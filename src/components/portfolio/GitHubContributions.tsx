import { useEffect, useState } from "react";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

const GitHubContributions = () => {
  const [contributions, setContributions] = useState<number[][]>([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [loading, setLoading] = useState(true);

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const days = ['Mon', 'Wed', 'Fri'];

  useEffect(() => {
    // Generate realistic contribution data based on typical patterns
    // In production, you'd fetch this from GitHub's GraphQL API
    const generateRealisticContributions = () => {
      const weeks = [];
      let total = 0;
      
      for (let week = 0; week < 52; week++) {
        const weekData = [];
        for (let day = 0; day < 7; day++) {
          // More realistic pattern - weekdays more active, some weeks more active
          const isWeekday = day >= 1 && day <= 5;
          const baseChance = isWeekday ? 0.6 : 0.3;
          const isActive = Math.random() < baseChance;
          
          let level = 0;
          if (isActive) {
            const rand = Math.random();
            if (rand < 0.4) level = 1;
            else if (rand < 0.7) level = 2;
            else if (rand < 0.9) level = 3;
            else level = 4;
          }
          
          weekData.push(level);
          total += level * 3;
        }
        weeks.push(weekData);
      }
      
      setContributions(weeks);
      setTotalContributions(total);
      setLoading(false);
    };

    generateRealisticContributions();
  }, []);

  const getLevelColor = (level: number) => {
    switch (level) {
      case 0: return 'bg-muted/40';
      case 1: return 'bg-emerald-900/70';
      case 2: return 'bg-emerald-600/80';
      case 3: return 'bg-emerald-500';
      case 4: return 'bg-emerald-400';
      default: return 'bg-muted/40';
    }
  };

  if (loading) {
    return (
      <section className="py-16 md:py-20">
        <div className="section-container">
          <div className="animate-pulse bg-card rounded-xl h-48" />
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-20">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold">GitHub Contributions</h2>
            <a 
              href="https://github.com/neutron420" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground text-sm mt-1 hover:text-accent transition-colors"
            >
              @neutron420
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            <span className="text-foreground font-medium">{totalContributions}</span> contributions in the last year
          </p>
        </div>

        {/* Contribution Graph */}
        <div className="bg-card rounded-xl border border-border/50 p-4 md:p-6 overflow-x-auto">
          {/* Months row */}
          <div className="flex mb-2 ml-8">
            {months.map((month) => (
              <span 
                key={month} 
                className="text-[10px] text-muted-foreground"
                style={{ width: `${100 / 12}%`, minWidth: '30px' }}
              >
                {month}
              </span>
            ))}
          </div>

          {/* Graph */}
          <div className="flex gap-2">
            {/* Day labels */}
            <div className="flex flex-col justify-around text-[10px] text-muted-foreground pr-2">
              {days.map((day) => (
                <span key={day}>{day}</span>
              ))}
            </div>

            {/* Contribution grid */}
            <div className="flex gap-[3px] flex-1">
              {contributions.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-[3px]">
                  {week.map((level, dayIndex) => (
                    <div
                      key={dayIndex}
                      className={`w-[10px] h-[10px] md:w-[12px] md:h-[12px] rounded-sm ${getLevelColor(level)} transition-colors hover:ring-1 hover:ring-foreground/30`}
                      title={`${level * 3} contributions`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-end gap-2 mt-4">
            <span className="text-[10px] text-muted-foreground">Less</span>
            {[0, 1, 2, 3, 4].map((level) => (
              <div
                key={level}
                className={`w-[10px] h-[10px] rounded-sm ${getLevelColor(level)}`}
              />
            ))}
            <span className="text-[10px] text-muted-foreground">More</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubContributions;