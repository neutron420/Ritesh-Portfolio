import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const QuoteSection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="section-container">
        <motion.div
          className="relative max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/50">
            {/* Accent rail */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent/70 via-accent/30 to-transparent" />

            {/* Subtle glow */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-accent/10 blur-3xl rounded-full" />

            <div className="relative p-6 md:p-8">
              <div className="flex items-start gap-3">
                <div className="mt-1 p-2 rounded-xl bg-accent/10 border border-accent/15">
                  <Quote className="w-4 h-4 text-accent" />
                </div>

                <blockquote className="flex-1">
                  <p className="serif text-lg md:text-xl text-foreground/90 leading-relaxed">
                    “The only way to do great work is to love what you do.”
                  </p>

                  <footer className="mt-4 flex items-center gap-3">
                    <div className="h-px flex-1 bg-gradient-to-r from-accent/40 to-transparent" />
                    <cite className="text-sm text-muted-foreground not-italic">Steve Jobs</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;

