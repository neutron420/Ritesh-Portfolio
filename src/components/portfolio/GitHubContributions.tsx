const GitHubContributions = () => {
  // Generate mock contribution data (replace with real GitHub API data if needed)
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const days = ['Mon', 'Wed', 'Fri'];
  
  // Generate 52 weeks of contribution data
  const generateContributions = () => {
    const weeks = [];
    for (let week = 0; week < 52; week++) {
      const weekData = [];
      for (let day = 0; day < 7; day++) {
        // Random contribution level (0-4)
        const level = Math.random() > 0.3 ? Math.floor(Math.random() * 5) : 0;
        weekData.push(level);
      }
      weeks.push(weekData);
    }
    return weeks;
  };

  const contributions = generateContributions();
  const totalContributions = contributions.flat().reduce((a, b) => a + (b > 0 ? b * 10 : 0), 0);

  const getLevelColor = (level: number) => {
    switch (level) {
      case 0: return 'bg-muted/50';
      case 1: return 'bg-emerald-900/60';
      case 2: return 'bg-emerald-700/70';
      case 3: return 'bg-emerald-500/80';
      case 4: return 'bg-emerald-400';
      default: return 'bg-muted/50';
    }
  };

  return (
    <section className="py-16 md:py-20">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold">GitHub Contributions</h2>
            <p className="text-muted-foreground text-sm mt-1">
              @riteshkumarsingh
            </p>
          </div>
          <p className="text-sm text-muted-foreground">
            <span className="text-foreground font-medium">{totalContributions}</span> contributions in the last year
          </p>
        </div>

        {/* Contribution Graph */}
        <div className="bg-card rounded-xl border border-border/50 p-4 md:p-6 overflow-x-auto">
          {/* Months row */}
          <div className="flex mb-2 ml-8">
            {months.map((month, i) => (
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
                      className={`w-[10px] h-[10px] md:w-[12px] md:h-[12px] rounded-sm ${getLevelColor(level)} transition-colors hover:ring-1 hover:ring-foreground/20`}
                      title={`${level * 10} contributions`}
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