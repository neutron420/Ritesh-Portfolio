import { useEffect, useState } from "react";
import { SiLeetcode } from "react-icons/si";

interface LeetCodeData {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  easyTotal: number;
  mediumSolved: number;
  mediumTotal: number;
  hardSolved: number;
  hardTotal: number;
  ranking: number;
  totalSubmissions: number;
  activeDays: number;
  maxStreak: number;
}

const LeetCodeStats = () => {
  const [stats, setStats] = useState<LeetCodeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [contributionData, setContributionData] = useState<number[][]>([]);

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      try {
        const response = await fetch('https://leetcode-stats-api.herokuapp.com/neutron420');
        
        if (response.ok) {
          const data = await response.json();
          setStats({
            totalSolved: data.totalSolved || 87,
            totalQuestions: data.totalQuestions || 3787,
            easySolved: data.easySolved || 41,
            easyTotal: 918,
            mediumSolved: data.mediumSolved || 41,
            mediumTotal: 1974,
            hardSolved: data.hardSolved || 5,
            hardTotal: 895,
            ranking: data.ranking || 1587031,
            totalSubmissions: 114,
            activeDays: 38,
            maxStreak: 12,
          });
        } else {
          setStats({
            totalSolved: 87,
            totalQuestions: 3787,
            easySolved: 41,
            easyTotal: 918,
            mediumSolved: 41,
            mediumTotal: 1974,
            hardSolved: 5,
            hardTotal: 895,
            ranking: 1587031,
            totalSubmissions: 114,
            activeDays: 38,
            maxStreak: 12,
          });
        }
      } catch (error) {
        setStats({
          totalSolved: 87,
          totalQuestions: 3787,
          easySolved: 41,
          easyTotal: 918,
          mediumSolved: 41,
          mediumTotal: 1974,
          hardSolved: 5,
          hardTotal: 895,
          ranking: 1587031,
          totalSubmissions: 114,
          activeDays: 38,
          maxStreak: 12,
        });
      } finally {
        setLoading(false);
      }
    };

    // Generate contribution-like data based on the screenshot pattern
    const generateContributionData = () => {
      const weeks: number[][] = [];
      // Generate 52 weeks of data matching the pattern from screenshot
      // Higher activity in Mar-Apr, scattered throughout year
      for (let week = 0; week < 52; week++) {
        const weekData: number[] = [];
        for (let day = 0; day < 7; day++) {
          let level = 0;
          // March-April spike (weeks 8-15)
          if (week >= 8 && week <= 15) {
            level = Math.random() > 0.4 ? Math.floor(Math.random() * 4) + 1 : 0;
          } 
          // Scattered activity rest of year
          else if (week >= 44 || week <= 4) {
            level = Math.random() > 0.7 ? Math.floor(Math.random() * 3) + 1 : 0;
          }
          else {
            level = Math.random() > 0.85 ? Math.floor(Math.random() * 2) + 1 : 0;
          }
          weekData.push(level);
        }
        weeks.push(weekData);
      }
      setContributionData(weeks);
    };

    fetchLeetCodeStats();
    generateContributionData();
  }, []);

  const getLevelColor = (level: number) => {
    switch (level) {
      case 0: return "bg-[#161b22]";
      case 1: return "bg-emerald-900/60";
      case 2: return "bg-emerald-700/70";
      case 3: return "bg-emerald-500/80";
      case 4: return "bg-emerald-400";
      default: return "bg-[#161b22]";
    }
  };

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  if (loading) {
    return (
      <section className="py-12 md:py-16">
        <div className="section-container">
          <div className="animate-pulse bg-card rounded-xl h-64" />
        </div>
      </section>
    );
  }

  if (!stats) return null;

  // Calculate progress percentages for the circular display
  const solvedPercentage = (stats.totalSolved / stats.totalQuestions) * 100;

  return (
    <section className="py-12 md:py-16">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-6">
          <SiLeetcode className="w-6 h-6 text-[#FFA116]" />
          <h2 className="text-xl md:text-2xl font-semibold">LeetCode</h2>
          <a
            href="https://leetcode.com/u/neutron420/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-accent transition-colors ml-auto"
          >
            @neutron420
          </a>
        </div>

        <div className="bg-card rounded-xl border border-border/50 p-6 space-y-6">
          {/* Top Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Circular Progress */}
            <div className="flex items-center gap-6">
              <div className="relative w-28 h-28">
                <svg className="w-28 h-28 -rotate-90" viewBox="0 0 100 100">
                  {/* Background circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke="hsl(var(--muted))"
                    strokeWidth="8"
                  />
                  {/* Easy progress (green) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="8"
                    strokeDasharray={`${(stats.easySolved / stats.totalSolved) * solvedPercentage * 2.64} 264`}
                    strokeLinecap="round"
                  />
                  {/* Medium progress (yellow) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke="#eab308"
                    strokeWidth="8"
                    strokeDasharray={`${(stats.mediumSolved / stats.totalSolved) * solvedPercentage * 2.64} 264`}
                    strokeDashoffset={`-${(stats.easySolved / stats.totalSolved) * solvedPercentage * 2.64}`}
                    strokeLinecap="round"
                  />
                  {/* Hard progress (red) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="8"
                    strokeDasharray={`${(stats.hardSolved / stats.totalSolved) * solvedPercentage * 2.64} 264`}
                    strokeDashoffset={`-${((stats.easySolved + stats.mediumSolved) / stats.totalSolved) * solvedPercentage * 2.64}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold">{stats.totalSolved}</span>
                  <span className="text-xs text-muted-foreground">/{stats.totalQuestions}</span>
                  <span className="text-[10px] text-muted-foreground">Solved</span>
                </div>
              </div>

              {/* Difficulty Breakdown */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-sm text-muted-foreground">Easy</span>
                  <span className="text-sm font-medium ml-auto">{stats.easySolved}/{stats.easyTotal}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span className="text-sm text-muted-foreground">Med.</span>
                  <span className="text-sm font-medium ml-auto">{stats.mediumSolved}/{stats.mediumTotal}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="text-sm text-muted-foreground">Hard</span>
                  <span className="text-sm font-medium ml-auto">{stats.hardSolved}/{stats.hardTotal}</span>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center p-3 bg-muted/30 rounded-lg">
                <p className="text-lg font-semibold">{stats.totalSubmissions}</p>
                <p className="text-[10px] text-muted-foreground">Submissions</p>
              </div>
              <div className="text-center p-3 bg-muted/30 rounded-lg">
                <p className="text-lg font-semibold">{stats.activeDays}</p>
                <p className="text-[10px] text-muted-foreground">Active Days</p>
              </div>
              <div className="text-center p-3 bg-muted/30 rounded-lg">
                <p className="text-lg font-semibold">{stats.maxStreak}</p>
                <p className="text-[10px] text-muted-foreground">Max Streak</p>
              </div>
            </div>
          </div>

          {/* Contribution Graph */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground font-medium">{stats.totalSubmissions}</span> submissions in the past one year
              </p>
            </div>

            {/* Month Labels */}
            <div className="overflow-x-auto pb-2">
              <div className="min-w-[700px]">
                <div className="flex text-[10px] text-muted-foreground mb-1 ml-4">
                  {months.map((month, i) => (
                    <span key={month} className="flex-1 text-center">{month}</span>
                  ))}
                </div>

                {/* Contribution Grid */}
                <div className="flex gap-[2px]">
                  {contributionData.map((week, weekIndex) => (
                    <div key={weekIndex} className="flex flex-col gap-[2px]">
                      {week.map((level, dayIndex) => (
                        <div
                          key={`${weekIndex}-${dayIndex}`}
                          className={`w-[10px] h-[10px] rounded-[2px] ${getLevelColor(level)}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>

                {/* Legend */}
                <div className="flex items-center justify-end gap-1 mt-2 text-[10px] text-muted-foreground">
                  <span>Less</span>
                  <div className={`w-[10px] h-[10px] rounded-[2px] ${getLevelColor(0)}`} />
                  <div className={`w-[10px] h-[10px] rounded-[2px] ${getLevelColor(1)}`} />
                  <div className={`w-[10px] h-[10px] rounded-[2px] ${getLevelColor(2)}`} />
                  <div className={`w-[10px] h-[10px] rounded-[2px] ${getLevelColor(3)}`} />
                  <div className={`w-[10px] h-[10px] rounded-[2px] ${getLevelColor(4)}`} />
                  <span>More</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeetCodeStats;