import { motion } from "framer-motion";

const QuoteSection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="section-container">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <blockquote>
            <p className="serif text-2xl md:text-3xl lg:text-4xl text-foreground/80 leading-relaxed tracking-tight">
              "The only way to do great work is to love what you do."
            </p>
            <footer className="mt-6">
              <cite className="text-sm text-muted-foreground/60 not-italic tracking-widest uppercase">
                — Steve Jobs
              </cite>
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;
