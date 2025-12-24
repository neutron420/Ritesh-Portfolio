import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24">
      {/* Vertical Japanese text decoration */}
      <div className="absolute left-6 md:left-12 top-1/3 hidden lg:block">
        <p className="vertical-text text-[10px] text-muted-foreground/30 tracking-[0.5em]">
          一護 · ICHIGO
        </p>
      </div>

      {/* Accent slash line */}
      <div className="absolute top-1/4 right-0 w-32 md:w-48 h-px bg-gradient-to-l from-accent/40 to-transparent" />

      <div className="max-w-5xl relative">
        {/* Intro line */}
        <p className="section-label mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          Full Stack Developer & Blockchain Engineer
        </p>

        {/* Name - clean editorial */}
        <h1 className="mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <span className="block text-5xl md:text-7xl lg:text-8xl serif text-foreground leading-[0.9] tracking-tight">
            Ritesh Kumar
          </span>
          <span className="block text-5xl md:text-7xl lg:text-8xl serif text-foreground leading-[0.9] tracking-tight mt-2">
            Singh<span className="text-accent">.</span>
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed mt-10 opacity-0 animate-fade-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          Building robust systems from frontend to smart contracts. 
          Crafting digital experiences with precision.
        </p>

        {/* Stats - minimal */}
        <div className="flex gap-12 md:gap-16 mt-14 opacity-0 animate-fade-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <div>
            <p className="text-3xl md:text-4xl serif text-foreground">5+</p>
            <p className="text-[10px] text-muted-foreground mt-1 tracking-wider uppercase">Years</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl serif text-foreground">50+</p>
            <p className="text-[10px] text-muted-foreground mt-1 tracking-wider uppercase">Projects</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl serif text-accent">∞</p>
            <p className="text-[10px] text-muted-foreground mt-1 tracking-wider uppercase">Curiosity</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-6 md:left-12 lg:left-24 opacity-0 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
        <a 
          href="#about"
          className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <ArrowDown className="w-3 h-3 group-hover:translate-y-1 transition-transform" />
        </a>
      </div>

      {/* Right side decoration */}
      <div className="absolute right-6 md:right-12 lg:right-24 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-border to-accent/30" />
        <span className="text-[10px] text-accent/60 tracking-wider">2024</span>
        <div className="w-px h-20 bg-gradient-to-b from-accent/30 via-border to-transparent" />
      </div>
    </section>
  );
};

export default Hero;