import { useEffect, useState } from "react";
import { SiLeetcode } from "react-icons/si";

interface LeetCodeData {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  ranking: number;
  acceptanceRate: number;
}

const LeetCodeStats = () => {
  const [stats, setStats] = useState<LeetCodeData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      try {
        // Using LeetCode's public API endpoint
        const response = await fetch('https://leetcode-stats-api.herokuapp.com/neutron420');
        
        if (response.ok) {
          const data = await response.json();
          setStats({
            totalSolved: data.totalSolved || 87,
            easySolved: data.easySolved || 30,
            mediumSolved: data.mediumSolved || 50,
            hardSolved: data.hardSolved || 7,
            ranking: data.ranking || 1587031,
            acceptanceRate: data.acceptanceRate || 87.18,
          });
        } else {
          // Fallback to known stats from profile
          setStats({
            totalSolved: 87,
            easySolved: 30,
            mediumSolved: 50,
            hardSolved: 7,
            ranking: 1587031,
            acceptanceRate: 87.18,
          });
        }
      } catch (error) {
        // Fallback to your real stats
        setStats({
          totalSolved: 87,
          easySolved: 30,
          mediumSolved: 50,
          hardSolved: 7,
          ranking: 1587031,
          acceptanceRate: 87.18,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchLeetCodeStats();
  }, []);

  if (loading) {
    return (
      <section className="py-12 md:py-16">
        <div className="section-container">
          <div className="animate-pulse bg-card rounded-xl h-32" />
        </div>
      </section>
    );
  }

  if (!stats) return null;

  const formatRanking = (rank: number) => {
    if (rank >= 1000000) return `${(rank / 1000000).toFixed(1)}M`;
    if (rank >= 1000) return `${(rank / 1000).toFixed(0)}K`;
    return rank.toString();
  };

  return (
    <section className="py-12 md:py-16">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-6">
          <SiLeetcode className="w-6 h-6 text-[#FFA116]" />
          <h2 className="text-xl md:text-2xl font-semibold">LeetCode</h2>
        </div>

        <div className="bg-card rounded-xl border border-border/50 p-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {/* Total Solved */}
            <div className="col-span-2 md:col-span-1 text-center p-4 bg-muted/30 rounded-lg">
              <p className="text-3xl font-bold text-[#FFA116]">{stats.totalSolved}</p>
              <p className="text-xs text-muted-foreground mt-1">Problems Solved</p>
            </div>

            {/* Easy */}
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <p className="text-2xl font-semibold text-emerald-500">{stats.easySolved}</p>
              <p className="text-xs text-muted-foreground mt-1">Easy</p>
            </div>

            {/* Medium */}
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <p className="text-2xl font-semibold text-amber-500">{stats.mediumSolved}</p>
              <p className="text-xs text-muted-foreground mt-1">Medium</p>
            </div>

            {/* Hard */}
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <p className="text-2xl font-semibold text-red-500">{stats.hardSolved}</p>
              <p className="text-xs text-muted-foreground mt-1">Hard</p>
            </div>

            {/* Ranking */}
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <p className="text-xl font-semibold text-foreground">{formatRanking(stats.ranking)}</p>
              <p className="text-xs text-muted-foreground mt-1">Global Rank</p>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="text-sm text-muted-foreground">
              Acceptance Rate: <span className="text-foreground">{stats.acceptanceRate}%</span>
            </span>
            <a
              href="https://leetcode.com/u/neutron420/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              View Profile →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeetCodeStats;