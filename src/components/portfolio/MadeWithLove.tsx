import { motion } from "framer-motion";
import { FaCoffee } from "react-icons/fa";

const MadeWithLove = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="py-10 border-t border-border/30">
      <div className="section-container">
        <motion.div
          className="flex flex-col items-center justify-center gap-3"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-sm">Built with</span>

            <motion.span
              className="relative inline-flex items-center"
              animate={{ rotate: [0, -8, 8, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaCoffee className="w-4 h-4 text-accent" />
              <motion.span
                className="absolute -top-2 left-1/2 -translate-x-1/2"
                animate={{ opacity: [0, 0.45, 0], y: [0, -10] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
                aria-hidden="true"
              >
                <span className="block w-1.5 h-1.5 rounded-full bg-accent/35 blur-[1px]" />
              </motion.span>
            </motion.span>

            <span className="text-sm">& patience by</span>
            <span className="text-sm font-semibold text-foreground">Ritesh Singh</span>
          </div>

          <p className="text-xs text-muted-foreground/60">© {currentYear} All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default MadeWithLove;


