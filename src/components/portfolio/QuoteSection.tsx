import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const QuoteSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="section-container">
        <motion.div
          className="relative max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative Quote Icon */}
          <motion.div
            className="absolute -top-6 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <div className="relative">
              <Quote className="w-12 h-12 text-accent/30" />
              <div className="absolute inset-0 bg-accent/10 blur-xl rounded-full" />
            </div>
          </motion.div>

          {/* Quote Card */}
          <div className="relative bg-gradient-to-br from-card/80 via-card to-card/80 rounded-3xl border border-border/50 p-8 md:p-12 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-accent/10 blur-3xl rounded-full" />

            {/* Quote Content */}
            <blockquote className="relative z-10">
              <p className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground/90 leading-relaxed mb-6">
                "The only way to do great work is to love what you do."
              </p>
              <footer className="flex items-center justify-center gap-3">
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
                <cite className="text-muted-foreground not-italic font-medium">
                  Steve Jobs
                </cite>
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
              </footer>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;
