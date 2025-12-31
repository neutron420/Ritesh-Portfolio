import { useEffect, useState, useCallback } from "react";
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
  submissionCalendar?: Record<string, number>;
}

const LeetCodeStats = () => {
  const [stats, setStats] = useState<LeetCodeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [contributionData, setContributionData] = useState<number[][]>([]);

  const generateContributionFromCalendar = useCallback((calendar: Record<string, number>) => {
    const weeks: number[][] = [];
    const today = new Date();
    
    for (let week = 0; week < 52; week++) {
      const weekData: number[] = [];
      for (let day = 0; day < 7; day++) {
        const date = new Date(today);
        date.setDate(date.getDate() - ((51 - week) * 7 + (6 - day)));
        
        // Get timestamp at midnight
        const timestamp = Math.floor(date.setHours(0, 0, 0, 0) / 1000).toString();
        const count = calendar[timestamp] || 0;
        
        let level = 0;
        if (count >= 8) level = 4;
        else if (count >= 5) level = 3;
        else if (count >= 2) level = 2;
        else if (count >= 1) level = 1;
        
        weekData.push(level);
      }
      weeks.push(weekData);
    }
    
    return weeks;
  }, []);

  const fetchLeetCodeStats = useCallback(async () => {
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
        submissionCalendar: data.submissionCalendar,
      };

      setStats(nextStats);
      setCachedData("leetcode_stats", nextStats);
      
      // Generate contribution graph from actual data
      if (data.submissionCalendar) {
        setContributionData(generateContributionFromCalendar(data.submissionCalendar));
      }
    } catch (error) {
      console.error("Failed to fetch LeetCode stats:", error);
    } finally {
      setLoading(false);
    }
  }, [generateContributionFromCalendar]);

  useEffect(() => {
    const cached = getCachedData<LeetCodeData>("leetcode_stats");
    const cachedStats = cached.data;

    if (cachedStats) {
      setStats(cachedStats);
      setLoading(false);
      if (cachedStats.submissionCalendar) {
        setContributionData(generateContributionFromCalendar(cachedStats.submissionCalendar));
      }
    }

    fetchLeetCodeStats();
    
    // Refresh every 5 minutes for real-time updates
    const interval = setInterval(fetchLeetCodeStats, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [fetchLeetCodeStats, generateContributionFromCalendar]);

  const getLevelColor = (level: number) => {
    switch (level) {
      case 0: return "bg-muted/40";
      case 1: return "bg-github/20";
      case 2: return "bg-github/40";
      case 3: return "bg-github/70";
      case 4: return "bg-github";
      default: return "bg-muted/40";
    }
  };

  // Generate hardcoded contribution data
  const generateHardcodedContributions = () => {
    const weeks: number[][] = [];
    for (let week = 0; week < 52; week++) {
      const weekData: number[] = [];
      for (let day = 0; day < 7; day++) {
        const isWeekday = day >= 1 && day <= 5;
        const baseChance = isWeekday ? 0.35 : 0.15;
        const isActive = Math.random() < baseChance;
        
        let level = 0;
        if (isActive) {
          const rand = Math.random();
          if (rand < 0.45) level = 1;
          else if (rand < 0.75) level = 2;
          else if (rand < 0.92) level = 3;
          else level = 4;
        }
        weekData.push(level);
      }
      weeks.push(weekData);
    }
    return weeks;
  };

  const hardcodedContributions = generateHardcodedContributions();

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
            <SiLeetcode className="w-6 h-6 text-leetcode" />
            <h2 className="text-xl md:text-2xl font-semibold">LeetCode</h2>
            <a
              href="https://leetcode.com/u/neutron420/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-leetcode transition-colors ml-auto"
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

  // Calculate active days and max streak from submission calendar
  let activeDays = 0;
  let maxStreak = 0;
  let currentStreak = 0;
  
  if (stats.submissionCalendar) {
    const sortedDates = Object.keys(stats.submissionCalendar).sort((a, b) => parseInt(a) - parseInt(b));
    activeDays = sortedDates.length;
    
    sortedDates.forEach((timestamp, index) => {
      if (index === 0) {
        currentStreak = 1;
      } else {
        const prevDate = parseInt(sortedDates[index - 1]);
        const currDate = parseInt(timestamp);
        // Check if consecutive days (86400 seconds = 1 day)
        if (currDate - prevDate <= 86400 * 2) {
          currentStreak++;
        } else {
          maxStreak = Math.max(maxStreak, currentStreak);
          currentStreak = 1;
        }
      }
    });
    maxStreak = Math.max(maxStreak, currentStreak);
  }

  // Calculate total submissions from calendar
  const totalSubmissions = stats.submissionCalendar 
    ? Object.values(stats.submissionCalendar).reduce((a, b) => a + b, 0)
    : 114;

  return (
    <section className="py-12 md:py-16">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-6">
          <SiLeetcode className="w-6 h-6 text-leetcode" />
          <h2 className="text-xl md:text-2xl font-semibold">LeetCode</h2>
          <a
            href="https://leetcode.com/u/neutron420/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-leetcode transition-colors ml-auto flex items-center gap-1"
          >
            @neutron420
            <span className="text-[10px] px-1.5 py-0.5 bg-leetcode/20 text-leetcode rounded">LIVE</span>
          </a>
        </div>

        <div className="bg-card rounded-2xl border border-leetcode/20 overflow-hidden">
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
                      stroke="hsl(var(--leetcode))"
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
                      stroke="hsl(var(--leetcode))"
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
                      stroke="hsl(var(--leetcode))"
                      strokeWidth="10"
                      strokeDasharray={`${(stats.hardSolved / stats.totalQuestions) * 251.2} 251.2`}
                      strokeDashoffset={`-${((stats.easySolved + stats.mediumSolved) / stats.totalQuestions) * 251.2}`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-leetcode">{stats.totalSolved}</span>
                    <span className="text-xs text-muted-foreground">/{stats.totalQuestions}</span>
                    <span className="text-[10px] text-leetcode mt-1">✓ Solved</span>
                  </div>
                </div>

                {/* Difficulty Breakdown */}
                <div className="flex flex-col gap-3 sm:gap-4 w-full sm:flex-1">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-green-500 font-medium">Easy</span>
                      <span className="text-muted-foreground">{stats.easySolved}<span className="text-muted-foreground/60">/{stats.easyTotal}</span></span>
                    </div>
                    <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-green-500 rounded-full"
                        style={{ width: `${easyPercent}%` }}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-leetcode font-medium">Medium</span>
                      <span className="text-muted-foreground">{stats.mediumSolved}<span className="text-muted-foreground/60">/{stats.mediumTotal}</span></span>
                    </div>
                    <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-leetcode rounded-full"
                        style={{ width: `${mediumPercent}%` }}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-red-500 font-medium">Hard</span>
                      <span className="text-muted-foreground">{stats.hardSolved}<span className="text-muted-foreground/60">/{stats.hardTotal}</span></span>
                    </div>
                    <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-red-500 rounded-full"
                        style={{ width: `${hardPercent}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Stats Cards */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <div className="bg-muted/20 rounded-xl p-3 sm:p-4 border border-leetcode/10">
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-leetcode">{stats.ranking.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground mt-1">Global Ranking</p>
                </div>
                <div className="bg-muted/20 rounded-xl p-3 sm:p-4 border border-leetcode/10">
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-leetcode">{stats.acceptanceRate}%</p>
                  <p className="text-xs text-muted-foreground mt-1">Acceptance Rate</p>
                </div>
                <div className="bg-muted/20 rounded-xl p-3 sm:p-4 border border-leetcode/10">
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">{activeDays}</p>
                  <p className="text-xs text-muted-foreground mt-1">Active Days</p>
                </div>
                <div className="bg-muted/20 rounded-xl p-3 sm:p-4 border border-leetcode/10">
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">{maxStreak}</p>
                  <p className="text-xs text-muted-foreground mt-1">Max Streak 🔥</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contribution Graph */}
          <div className="border-t border-leetcode/10 bg-muted/10 p-3 sm:p-4 md:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <p className="text-sm">
                <span className="font-semibold text-leetcode">{totalSubmissions}</span>
                <span className="text-muted-foreground"> submissions in the past year</span>
              </p>
              <div className="flex items-center gap-3 sm:gap-4 text-xs text-muted-foreground">
                <span>Active days: <span className="text-leetcode font-medium">{activeDays}</span></span>
                <span>Max streak: <span className="text-leetcode font-medium">{maxStreak}</span></span>
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
                  {hardcodedContributions.map((week, weekIndex) => (
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
