import { useState, useEffect } from "react";
import {
  ContributionGraph,
  ContributionGraphCalendar,
  ContributionGraphBlock,
  ContributionGraphFooter,
  ContributionGraphTotalCount,
  ContributionGraphLegend,
  type Activity,
} from "@/components/kibo-ui/contribution-graph";
import { motion } from "framer-motion";
import { MarkerHighlight } from "@/components/ui/marker-highlight";
import { Loader2 } from "lucide-react";
import { SiGithub } from "react-icons/si";

interface ContributionApiResponse {
  total: Record<string, number>;
  contributions: Activity[];
}

const GithubContributionsSection = () => {
  const [contributions, setContributions] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchContributions = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch("https://github-contributions-api.jogruber.de/v4/neutron420");
      if (!response.ok) throw new Error("Failed to fetch contribution data");
      
      const data: ContributionApiResponse = await response.json();
      
      // Extract the most recent 1 year (365 days) of contributions for a clean dashboard grid
      const recentContributions = data.contributions.slice(-365);
      
      setContributions(recentContributions);
    } catch (err) {
      console.error("Error fetching GitHub contributions:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContributions();
  }, []);

  return (
    <section id="github" className="py-16 md:py-24">
      <div className="section-container max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px w-8 bg-accent" />
            <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">Activity</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3 justify-center">
            <SiGithub className="w-8 h-8 text-foreground animate-pulse" />
            <MarkerHighlight before="GitHub " highlight="Contributions" markerColor="#facc15" />
          </h2>
        </div>

        {/* Contribution Graph Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-card/30 backdrop-blur-md border border-border/40 p-6 md:p-8 flex flex-col items-center"
        >
          {/* Backdrop blur effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

          {loading ? (
            <div className="flex flex-col items-center justify-center py-16 gap-3">
              <Loader2 className="w-8 h-8 text-accent animate-spin" />
              <p className="text-sm text-muted-foreground animate-pulse">Fetching dynamic GitHub activity...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-sm text-red-400 mb-4">Failed to load live GitHub contributions.</p>
              <button
                onClick={fetchContributions}
                className="px-4 py-2 rounded-xl bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-all text-xs"
              >
                Retry Loading
              </button>
            </div>
          ) : (
            <div className="w-full flex flex-col gap-4 overflow-hidden">
              <div className="w-full overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
                <ContributionGraph
                  data={contributions}
                  blockSize={12}
                  blockMargin={4}
                  blockRadius={2.5}
                  fontSize={12}
                  className="mx-auto"
                >
                  <ContributionGraphCalendar>
                    {({ activity, dayIndex, weekIndex }) => (
                      <ContributionGraphBlock
                        activity={activity}
                        dayIndex={dayIndex}
                        weekIndex={weekIndex}
                        className="hover:stroke-accent/50 transition-all duration-150 cursor-pointer"
                      />
                    )}
                  </ContributionGraphCalendar>

                  <ContributionGraphFooter className="text-xs text-muted-foreground flex flex-col sm:flex-row items-center justify-between border-t border-border/20 pt-4 mt-2 gap-4">
                    <ContributionGraphTotalCount />
                    <ContributionGraphLegend />
                  </ContributionGraphFooter>
                </ContributionGraph>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default GithubContributionsSection;
