import { motion } from "framer-motion";
import { useVisitorCount } from "@/hooks/use-visitor-count";
import { Eye } from "lucide-react";

const VisitorCounter = () => {
  const { count, loading } = useVisitorCount();

  return (
    <section className="py-4">
      <div className="section-container">
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-2 text-muted-foreground/60">
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-accent"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <Eye className="w-3.5 h-3.5" />
            <span className="text-xs">
              {loading ? (
                <span className="inline-flex gap-0.5">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="w-1 h-1 rounded-full bg-muted-foreground/40"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
                    />
                  ))}
                </span>
              ) : (
                <span className="tabular-nums font-medium text-muted-foreground">
                  {count?.toLocaleString() || "0"}
                </span>
              )}
            </span>
            <span className="text-xs">visitors</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisitorCounter;

