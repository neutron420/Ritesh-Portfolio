import { motion } from "framer-motion";
import { useVisitorCount } from "@/hooks/use-visitor-count";
import { Users } from "lucide-react";

const VisitorCounter = () => {
  const { count, loading } = useVisitorCount();

  return (
    <section className="py-6">
      <div className="section-container">
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/15 via-accent/5 to-accent/15 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative flex items-center gap-3 px-5 py-2.5 rounded-full bg-card/60 border border-border/50 hover:border-accent/25 transition-all">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-full bg-accent/10 border border-accent/15">
                  <Users className="w-4 h-4 text-accent" />
                </div>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  Visitors
                </span>
              </div>

              <div className="h-4 w-px bg-border/60" aria-hidden="true" />

              {loading ? (
                <div className="flex items-center gap-1">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 rounded-full bg-muted"
                      animate={{ opacity: [0.25, 0.8, 0.25] }}
                      transition={{ duration: 1, repeat: Infinity, delay: i * 0.12 }}
                    />
                  ))}
                </div>
              ) : (
                <span className="text-sm font-semibold text-foreground tabular-nums">
                  {count?.toLocaleString() || "—"}
                </span>
              )}

              <div className="flex items-center gap-1.5 ml-1">
                <motion.span
                  className="w-1.5 h-1.5 rounded-full bg-github"
                  animate={{ opacity: [1, 0.35, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                />
                <span className="text-[11px] text-muted-foreground">live</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisitorCounter;

