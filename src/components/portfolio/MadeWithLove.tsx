import { motion } from "framer-motion";
import { FaCoffee } from "react-icons/fa";

const MadeWithLove = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="py-12 border-t border-border/30">
      <div className="section-container">
        <motion.div
          className="flex flex-col items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Made with Coffee */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-sm">Built with</span>
            <motion.div
              animate={{ 
                rotate: [0, -10, 10, 0],
                y: [0, -2, 0]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <FaCoffee className="w-5 h-5 text-amber-500" />
              {/* Steam effect */}
              <motion.div
                className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3"
                animate={{ 
                  opacity: [0, 0.5, 0],
                  y: [0, -8],
                  scale: [0.5, 1.2]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              >
                <div className="w-1 h-1 bg-amber-400/50 rounded-full blur-sm" />
              </motion.div>
            </motion.div>
            <span className="text-sm">& passion by</span>
            <span className="text-sm font-semibold text-foreground">Ritesh Singh</span>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground/60">
            © {currentYear} All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MadeWithLove;
