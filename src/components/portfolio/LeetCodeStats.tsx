import { SiLeetcode } from "react-icons/si";

const LeetCodeStats = () => {
  // You can update these with your real LeetCode stats
  const stats = {
    solved: 250,
    easy: 80,
    medium: 140,
    hard: 30,
    ranking: "Top 15%",
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
              <p className="text-3xl font-bold text-[#FFA116]">{stats.solved}</p>
              <p className="text-xs text-muted-foreground mt-1">Problems Solved</p>
            </div>

            {/* Easy */}
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <p className="text-2xl font-semibold text-emerald-500">{stats.easy}</p>
              <p className="text-xs text-muted-foreground mt-1">Easy</p>
            </div>

            {/* Medium */}
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <p className="text-2xl font-semibold text-amber-500">{stats.medium}</p>
              <p className="text-xs text-muted-foreground mt-1">Medium</p>
            </div>

            {/* Hard */}
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <p className="text-2xl font-semibold text-red-500">{stats.hard}</p>
              <p className="text-xs text-muted-foreground mt-1">Hard</p>
            </div>

            {/* Ranking */}
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <p className="text-xl font-semibold text-foreground">{stats.ranking}</p>
              <p className="text-xs text-muted-foreground mt-1">Global Rank</p>
            </div>
          </div>

          <a
            href="https://leetcode.com/u/neutron420/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mt-4"
          >
            View Profile →
          </a>
        </div>
      </div>
    </section>
  );
};

export default LeetCodeStats;