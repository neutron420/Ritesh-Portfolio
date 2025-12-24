const GitHubContributions = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const days = ['Mon', 'Wed', 'Fri'];

  // Real contribution count: ~512 contributions
  const totalContributions = 512;

  // Generate realistic contribution pattern to match ~512 contributions
  const generateContributions = () => {
    const weeks: number[][] = [];
    let remaining = totalContributions;
    
    for (let week = 0; week < 52; week++) {
      const weekData: number[] = [];
      for (let day = 0; day < 7; day++) {
        const isWeekday = day >= 1 && day <= 5;
        // More active on weekdays, distribute contributions
        const maxContrib = isWeekday ? 8 : 4;
        const contrib = Math.min(remaining, Math.floor(Math.random() * maxContrib));
        
        let level = 0;
        if (contrib >= 6) level = 4;
        else if (contrib >= 4) level = 3;
        else if (contrib >= 2) level = 2;
        else if (contrib >= 1) level = 1;
        
        weekData.push(level);
        remaining -= contrib;
      }
      weeks.push(weekData);
    }
    
    return weeks;
  };

  const contributions = generateContributions();

  const getLevelColor = (level: number) => {
    switch (level) {
      case 0: return 'bg-[#161b22]';
      case 1: return 'bg-[#0e4429]';
      case 2: return 'bg-[#006d32]';
      case 3: return 'bg-[#26a641]';
      case 4: return 'bg-[#39d353]';
      default: return 'bg-[#161b22]';
    }
  };

  return (
    <section className="py-12 md:py-16">
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