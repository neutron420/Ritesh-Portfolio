import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24">
      {/* Subtle grain overlay */}
      <div className="noise" />
      
      {/* Minimal accent line */}
      <div className="absolute top-0 left-6 md:left-12 lg:left-24 w-px h-32 bg-gradient-to-b from-transparent via-border to-transparent opacity-0 animate-fade-in delay-500" style={{ animationFillMode: 'forwards' }} />

      <div className="max-w-5xl">
        {/* Intro line */}
        <p className="section-label mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          Full Stack Developer & Blockchain Engineer
        </p>

        {/* Name - editorial style */}
        <h1 className="mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <span className="block text-4xl md:text-6xl lg:text-7xl font-serif italic text-foreground leading-[0.95]">
            Ritesh Kumar
          </span>
          <span className="block text-4xl md:text-6xl lg:text-7xl font-serif italic text-foreground leading-[0.95] mt-2">
            Singh<span className="text-accent">.</span>
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mt-12 opacity-0 animate-fade-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          Building robust systems from frontend to smart contracts. 
          Crafting digital experiences with precision and purpose.
        </p>

        {/* Minimal stats */}
        <div className="flex gap-16 mt-16 opacity-0 animate-fade-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <div>
            <p className="text-3xl md:text-4xl font-serif italic">5+</p>
            <p className="text-sm text-muted-foreground mt-1">Years</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-serif italic">50+</p>
            <p className="text-sm text-muted-foreground mt-1">Projects</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-serif italic">∞</p>
            <p className="text-sm text-muted-foreground mt-1">Curiosity</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-6 md:left-12 lg:left-24 opacity-0 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
        <a 
          href="#work"
          className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-xs uppercase tracking-[0.15em]">Scroll</span>
          <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </a>
      </div>

      {/* Right side decoration */}
      <div className="absolute right-6 md:right-12 lg:right-24 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="flex flex-col items-center gap-6">
          <div className="w-px h-24 bg-border" />
          <span className="text-xs text-muted-foreground [writing-mode:vertical-rl] rotate-180 tracking-[0.2em]">
            2024
          </span>
          <div className="w-px h-24 bg-border" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
