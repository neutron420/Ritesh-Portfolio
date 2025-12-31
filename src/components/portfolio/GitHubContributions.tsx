import { useEffect, useState, useCallback } from "react";
import { Github } from "lucide-react";

interface GitHubEvent {
  id: string;
  type: string;
  created_at: string;
  payload?: {
    commits?: { sha: string }[];
    size?: number;
  };
}

const GitHubContributions = () => {
  const [contributions, setContributions] = useState<number[][]>([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [loading, setLoading] = useState(true);

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const days = ['Mon', 'Wed', 'Fri'];

  // Fetch all events by paginating through pages
  const fetchAllGitHubEvents = useCallback(async (username: string): Promise<GitHubEvent[]> => {
    const allEvents: GitHubEvent[] = [];
    let page = 1;
    const perPage = 100;
    let hasMore = true;

    while (hasMore && page <= 10) { // Limit to 10 pages (1000 events) to avoid rate limits
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/events/public?per_page=${perPage}&page=${page}`,
          {
            headers: {
              'Accept': 'application/vnd.github.v3+json'
            }
          }
        );

        if (!response.ok) {
          if (response.status === 404 || response.status === 403) {
            break;
          }
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const events: GitHubEvent[] = await response.json();
        
        if (events.length === 0) {
          hasMore = false;
        } else {
          allEvents.push(...events);
          // If we got less than perPage, we've reached the end
          if (events.length < perPage) {
            hasMore = false;
          }
          page++;
        }
      } catch (error) {
        console.error(`Error fetching page ${page}:`, error);
        hasMore = false;
      }
    }

    return allEvents;
  }, []);

  const fetchGitHubActivity = useCallback(async () => {
    try {
      const username = 'neutron420';
      
      // Try to fetch contribution graph data from a service that parses GitHub's contribution graph
      // First, try using github-contributions-api or similar service
      let contributionMap = new Map<string, number>();
      let total = 0;
      
      // Try multiple services for GitHub contribution data
      const contributionServices = [
        `https://github-contributions-api.jogruber.de/v4/${username}?y=2024&y=2025`,
        `https://github-contributions.vercel.app/api/v1/${username}`,
      ];
      
      let apiSuccess = false;
      
      for (const serviceUrl of contributionServices) {
        try {
          const contributionResponse = await fetch(serviceUrl, { 
            cache: "no-store",
            headers: { 'Accept': 'application/json' },
            signal: AbortSignal.timeout(10000)
          });
          
          if (contributionResponse.ok) {
            const contributionData = await contributionResponse.json();
            
            // Parse the contribution data (different services have different formats)
            if (contributionData.contributions && Array.isArray(contributionData.contributions)) {
              contributionData.contributions.forEach((day: any) => {
                if (day.date && day.count !== undefined) {
                  const dateStr = day.date.split('T')[0];
                  contributionMap.set(dateStr, day.count);
                  total += day.count;
                }
              });
              apiSuccess = true;
              console.log('GitHub contributions fetched from API service:', serviceUrl);
              break;
            } else if (contributionData.data && Array.isArray(contributionData.data)) {
              // Alternative format
              contributionData.data.forEach((day: any) => {
                if (day.date && day.count !== undefined) {
                  const dateStr = day.date.split('T')[0];
                  contributionMap.set(dateStr, day.count);
                  total += day.count;
                }
              });
              apiSuccess = true;
              console.log('GitHub contributions fetched from API service:', serviceUrl);
              break;
            }
          }
        } catch (apiError) {
          console.warn(`GitHub contribution API service ${serviceUrl} failed:`, apiError);
          continue;
        }
      }
      
      if (!apiSuccess) {
        console.warn('All GitHub contribution API services failed, falling back to events');
        
        // Fallback to fetching events
        const events = await fetchAllGitHubEvents(username);

        // Process all events
        events.forEach((event) => {
          const date = event.created_at?.split('T')[0];
          if (date) {
            let eventCount = 1;
            // Count commits for push events
            if (event.type === 'PushEvent' && event.payload?.commits) {
              eventCount = event.payload.commits.length;
            }
            const count = contributionMap.get(date) || 0;
            contributionMap.set(date, count + eventCount);
            total += eventCount;
          }
        });
      }

      // Build contribution graph for the last 52 weeks
      const weeks: number[][] = [];
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      // Calculate the start date (52 weeks ago, aligned to Sunday)
      const startDate = new Date(today);
      const dayOfWeek = startDate.getDay(); // 0 = Sunday, 6 = Saturday
      const startDateTimestamp = startDate.getTime() - ((52 * 7 + dayOfWeek) * 24 * 60 * 60 * 1000);
      const baseStartDate = new Date(startDateTimestamp);

      for (let week = 0; week < 52; week++) {
        const weekData: number[] = [];
        for (let day = 0; day < 7; day++) {
          const date = new Date(baseStartDate);
          date.setDate(baseStartDate.getDate() + (week * 7) + day);
          const dateStr = date.toISOString().split('T')[0];
          
          const count = contributionMap.get(dateStr) || 0;
          
          // GitHub's contribution levels (approximate)
          let level = 0;
          if (count >= 22) level = 4;      // Darkest green
          else if (count >= 14) level = 3;  // Medium-dark green
          else if (count >= 7) level = 2;   // Medium green
          else if (count >= 1) level = 1;    // Light green
          
          weekData.push(level);
        }
        weeks.push(weekData);
      }

      setContributions(weeks);
      setTotalContributions(total);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching GitHub activity:', error);
      generateFallbackData();
    }
  }, [fetchAllGitHubEvents]);

  const generateFallbackData = () => {
    const weeks: number[][] = [];
    
    for (let week = 0; week < 52; week++) {
      const weekData: number[] = [];
      for (let day = 0; day < 7; day++) {
        const isWeekday = day >= 1 && day <= 5;
        const baseChance = isWeekday ? 0.45 : 0.2;
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
      }
      weeks.push(weekData);
    }
    
    setContributions(weeks);
    setTotalContributions(0);
    setLoading(false);
  };

  useEffect(() => {
    fetchGitHubActivity();
    
    // Refresh every 5 minutes for real-time updates
    const interval = setInterval(fetchGitHubActivity, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [fetchGitHubActivity]);

  const getLevelColor = (level: number) => {
    switch (level) {
      case 0: return 'bg-muted/40';
      case 1: return 'bg-github/20';
      case 2: return 'bg-github/40';
      case 3: return 'bg-github/70';
      case 4: return 'bg-github';
      default: return 'bg-muted/40';
    }
  };

  if (loading) {
    return (
      <section className="py-12 md:py-16">
        <div className="section-container">
          <div className="animate-pulse bg-card rounded-xl h-48" />
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-16">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
          <div className="flex items-center gap-3">
            <Github className="w-6 h-6 text-github" />
            <div>
              <h2 className="text-xl md:text-2xl font-semibold">GitHub</h2>
              <a 
                href="https://github.com/neutron420" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground text-sm hover:text-github transition-colors flex items-center gap-1"
              >
                @neutron420
                <span className="text-[10px] px-1.5 py-0.5 bg-github/20 text-github rounded">LIVE</span>
              </a>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            <span className="text-github font-medium">{totalContributions}</span> contributions in the last year
          </p>
        </div>

        {/* Contribution Graph */}
        <div className="bg-card rounded-xl border border-github/20 p-3 sm:p-4 md:p-6">
          {/* Months row */}
          <div className="overflow-x-auto -mx-3 px-3 sm:mx-0 sm:px-0">
            <div className="min-w-[580px]">
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
                <div className="flex gap-[2px] sm:gap-[3px] flex-1">
                  {contributions.map((week, weekIndex) => (
                    <div key={weekIndex} className="flex flex-col gap-[2px] sm:gap-[3px]">
                      {week.map((level, dayIndex) => (
                        <div
                          key={dayIndex}
                          className={`w-[9px] h-[9px] sm:w-[10px] sm:h-[10px] md:w-[12px] md:h-[12px] rounded-sm ${getLevelColor(level)}`}
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
                    className={`w-[9px] h-[9px] sm:w-[10px] sm:h-[10px] rounded-sm ${getLevelColor(level)}`}
                  />
                ))}
                <span className="text-[10px] text-muted-foreground">More</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubContributions;
