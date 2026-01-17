import { motion } from "framer-motion";
import { useVisitorCount } from "@/hooks/use-visitor-count";
import { Eye, Users } from "lucide-react";

const VisitorCounter = () => {
  const { count, loading } = useVisitorCount();

  return (
    <section className="py-8">
      <div className="section-container">
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Counter Card */}
            <div className="relative flex items-center gap-4 px-8 py-5 rounded-2xl bg-gradient-to-br from-card via-card to-card/80 border border-border/50 hover:border-accent/30 transition-all duration-300">
              {/* Icon */}
              <div className="relative">
                <div className="p-3 rounded-xl bg-accent/10 border border-accent/20">
                  <Users className="w-5 h-5 text-accent" />
                </div>
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-500"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                  Total Visitors
                </span>
                <div className="flex items-baseline gap-2">
                  {loading ? (
                    <div className="flex gap-1 py-1">
                      {[...Array(4)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-6 h-8 bg-muted/50 rounded"
                          animate={{ opacity: [0.3, 0.7, 0.3] }}
                          transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                        />
                      ))}
                    </div>
                  ) : (
                    <motion.span
                      className="text-3xl font-bold text-accent tabular-nums"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {count?.toLocaleString() || "—"}
                    </motion.span>
                  )}
                </div>
              </div>

              {/* Live Indicator */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                <motion.span
                  className="w-2 h-2 rounded-full bg-green-500"
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-xs font-medium text-green-500">Live</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisitorCounter;
