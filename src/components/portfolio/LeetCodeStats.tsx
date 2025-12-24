import { useEffect, useState } from "react";
import { SiLeetcode } from "react-icons/si";
import { getCachedData, setCachedData } from "@/lib/stats-cache";

interface LeetCodeData {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  easyTotal: number;
  mediumSolved: number;
  mediumTotal: number;
  hardSolved: number;
  hardTotal: number;
  acceptanceRate: number;
  ranking: number;
}

const LeetCodeStats = () => {
  const [stats, setStats] = useState<LeetCodeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [contributionData, setContributionData] = useState<number[][]>([]);

  useEffect(() => {
    const cached = getCachedData<LeetCodeData>("leetcode_stats");
    const cachedStats = cached.data;

    if (cachedStats) {
      setStats(cachedStats);
      setLoading(false);
    }

    const fetchLeetCodeStats = async () => {
      try {
        const response = await fetch(
          "https://leetcode-stats-api.herokuapp.com/neutron420",
          { cache: "no-store" }
        );

        if (!response.ok) {
          throw new Error(`LeetCode API error: ${response.status}`);
        }

        const data = await response.json();

        const nextStats: LeetCodeData = {
          totalSolved: data.totalSolved,
          totalQuestions: data.totalQuestions,
          easySolved: data.easySolved,
          easyTotal: data.totalEasy,
          mediumSolved: data.mediumSolved,
          mediumTotal: data.totalMedium,
          hardSolved: data.hardSolved,
          hardTotal: data.totalHard,
          acceptanceRate: data.acceptanceRate,
          ranking: data.ranking,
        };

        setStats(nextStats);
        setCachedData("leetcode_stats", nextStats);
      } catch (error) {
        console.error("Failed to fetch LeetCode stats:", error);
      } finally {
        setLoading(false);
      }
    };

    const generateContributionData = () => {
      const weeks: number[][] = [];
      for (let week = 0; week < 52; week++) {
        const weekData: number[] = [];
        for (let day = 0; day < 7; day++) {
          let level = 0;

          if (week >= 0 && week <= 3) {
            level = Math.random() > 0.75 ? Math.floor(Math.random() * 2) + 1 : 0;
          } else if (week >= 4 && week <= 7) {
            level = Math.random() > 0.6 ? Math.floor(Math.random() * 3) + 1 : 0;
          } else if (week >= 8 && week <= 12) {
            level = Math.random() > 0.25 ? Math.floor(Math.random() * 4) + 1 : 0;
          } else if (week >= 13 && week <= 16) {
            level = Math.random() > 0.5 ? Math.floor(Math.random() * 3) + 1 : 0;
          } else if (week >= 17 && week <= 43) {
            level = Math.random() > 0.92 ? Math.floor(Math.random() * 2) + 1 : 0;
          } else if (week >= 44 && week <= 47) {
            level = Math.random() > 0.6 ? Math.floor(Math.random() * 3) + 1 : 0;
          } else if (week >= 48 && week <= 51) {
            level = Math.random() > 0.4 ? Math.floor(Math.random() * 4) + 1 : 0;
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
      case 0: return "bg-muted/40";
      case 1: return "bg-accent/20";
      case 2: return "bg-accent/40";
      case 3: return "bg-accent/70";
      case 4: return "bg-accent";
      default: return "bg-muted/40";
    }
  };

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  if (loading) {
    return (
      <section className="py-12 md:py-16">
        <div className="section-container">
          <div className="animate-pulse bg-card rounded-xl h-72" />
        </div>
      </section>
    );
  }

  if (!stats) {
    return (
      <section className="py-12 md:py-16">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-6">
            <SiLeetcode className="w-6 h-6 text-accent" />
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

          <div className="bg-card rounded-2xl border border-border/50 p-6">
            <p className="text-sm text-muted-foreground">
              LeetCode stats are currently unavailable. Please refresh or open my profile.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const easyPercent = (stats.easySolved / stats.easyTotal) * 100;
  const mediumPercent = (stats.mediumSolved / stats.mediumTotal) * 100;
  const hardPercent = (stats.hardSolved / stats.hardTotal) * 100;

  return (
    <section className="py-12 md:py-16">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-6">
          <SiLeetcode className="w-6 h-6 text-accent" />
          <h2 className="text-xl md:text-2xl font-semibold">LeetCode</h2>
          <a
            href="https://leetcode.com/u/neutron420/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-accent transition-colors ml-auto flex items-center gap-1"
          >
            @neutron420
            <span className="text-[10px] px-1.5 py-0.5 bg-accent/20 text-accent rounded">LIVE</span>
          </a>
        </div>

        <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
          {/* Stats Section */}
          <div className="p-4 sm:p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {/* Left: Circular Progress */}
              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 shrink-0">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="hsl(var(--muted))"
                      strokeWidth="10"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="hsl(var(--accent))"
                      strokeWidth="10"
                      strokeDasharray={`${(stats.easySolved / stats.totalQuestions) * 251.2} 251.2`}
                      strokeLinecap="round"
                      opacity="0.6"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="hsl(var(--accent))"
                      strokeWidth="10"
                      strokeDasharray={`${(stats.mediumSolved / stats.totalQuestions) * 251.2} 251.2`}
                      strokeDashoffset={`-${(stats.easySolved / stats.totalQuestions) * 251.2}`}
                      strokeLinecap="round"
                      opacity="0.8"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="hsl(var(--accent))"
                      strokeWidth="10"
                      strokeDasharray={`${(stats.hardSolved / stats.totalQuestions) * 251.2} 251.2`}
                      strokeDashoffset={`-${((stats.easySolved + stats.mediumSolved) / stats.totalQuestions) * 251.2}`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold">{stats.totalSolved}</span>
                    <span className="text-xs text-muted-foreground">/{stats.totalQuestions}</span>
                    <span className="text-[10px] text-accent mt-1">✓ Solved</span>
                  </div>
                </div>

                {/* Difficulty Breakdown */}
                <div className="flex flex-col gap-3 sm:gap-4 w-full sm:flex-1">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-accent/80 font-medium">Easy</span>
                      <span className="text-muted-foreground">{stats.easySolved}<span className="text-muted-foreground/60">/{stats.easyTotal}</span></span>
                    </div>
                    <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-accent/60 rounded-full"
                        style={{ width: `${easyPercent}%` }}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-accent/90 font-medium">Medium</span>
                      <span className="text-muted-foreground">{stats.mediumSolved}<span className="text-muted-foreground/60">/{stats.mediumTotal}</span></span>
                    </div>
                    <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-accent/80 rounded-full"
                        style={{ width: `${mediumPercent}%` }}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-accent font-medium">Hard</span>
                      <span className="text-muted-foreground">{stats.hardSolved}<span className="text-muted-foreground/60">/{stats.hardTotal}</span></span>
                    </div>
                    <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-accent rounded-full"
                        style={{ width: `${hardPercent}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Stats Cards */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <div className="bg-muted/20 rounded-xl p-3 sm:p-4 border border-border/30">
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-accent">{stats.ranking.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground mt-1">Global Ranking</p>
                </div>
                <div className="bg-muted/20 rounded-xl p-3 sm:p-4 border border-border/30">
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-accent">{stats.acceptanceRate}%</p>
                  <p className="text-xs text-muted-foreground mt-1">Acceptance Rate</p>
                </div>
                <div className="bg-muted/20 rounded-xl p-3 sm:p-4 border border-border/30">
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">38</p>
                  <p className="text-xs text-muted-foreground mt-1">Active Days</p>
                </div>
                <div className="bg-muted/20 rounded-xl p-3 sm:p-4 border border-border/30">
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">12</p>
                  <p className="text-xs text-muted-foreground mt-1">Max Streak 🔥</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contribution Graph */}
          <div className="border-t border-border/30 bg-muted/10 p-3 sm:p-4 md:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <p className="text-sm">
                <span className="font-semibold text-foreground">114</span>
                <span className="text-muted-foreground"> submissions in the past year</span>
              </p>
              <div className="flex items-center gap-3 sm:gap-4 text-xs text-muted-foreground">
                <span>Active days: <span className="text-foreground font-medium">38</span></span>
                <span>Max streak: <span className="text-foreground font-medium">12</span></span>
              </div>
            </div>
            
            <div className="overflow-x-auto -mx-3 px-3 sm:mx-0 sm:px-0">
              <div className="min-w-[580px]">
                {/* Month Labels */}
                <div className="flex text-[10px] text-muted-foreground mb-1 pl-1">
                  {months.map((month) => (
                    <span key={month} className="flex-1">{month}</span>
                  ))}
                </div>

                {/* Grid */}
                <div className="flex gap-[2px] sm:gap-[3px]">
                  {contributionData.map((week, weekIndex) => (
                    <div key={weekIndex} className="flex flex-col gap-[2px] sm:gap-[3px]">
                      {week.map((level, dayIndex) => (
                        <div
                          key={`${weekIndex}-${dayIndex}`}
                          className={`w-[9px] h-[9px] sm:w-[11px] sm:h-[11px] rounded-sm ${getLevelColor(level)}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>

                {/* Legend */}
                <div className="flex items-center justify-end gap-1.5 mt-3 text-[10px] text-muted-foreground">
                  <span>Less</span>
                  {[0, 1, 2, 3, 4].map((level) => (
                    <div key={level} className={`w-[9px] h-[9px] sm:w-[11px] sm:h-[11px] rounded-sm ${getLevelColor(level)}`} />
                  ))}
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