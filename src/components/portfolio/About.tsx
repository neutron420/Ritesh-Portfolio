const About = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-8 mb-16">
          <span className="section-label">About</span>
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs text-muted-foreground">01</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Main text */}
          <div className="lg:col-span-7">
            <p className="text-2xl md:text-3xl lg:text-4xl font-serif italic leading-relaxed text-foreground/90">
              I craft digital products that balance 
              <span className="text-accent"> form and function</span>—
              where every pixel serves a purpose and every interaction feels considered.
            </p>
          </div>

          {/* Details */}
          <div className="lg:col-span-5 space-y-8">
            <p className="text-muted-foreground leading-relaxed">
              With a background spanning frontend architecture, design systems, and 
              creative development, I bring a holistic approach to building software. 
              I believe the best digital experiences emerge from deep collaboration 
              and obsessive attention to craft.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently focused on building products that respect user attention 
              and stand the test of time. Previously worked with startups and 
              agencies across Tokyo, Berlin, and San Francisco.
            </p>

            {/* Location */}
            <div className="pt-8 border-t border-border">
              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">Based in</p>
              <p className="font-serif italic text-xl">Tokyo, Japan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
