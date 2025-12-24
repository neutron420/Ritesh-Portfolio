import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const AnimeVideoSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-16 md:py-20">
      <div 
        ref={ref}
        className={`section-container scroll-reveal ${isVisible ? 'visible' : ''}`}
      >
        {/* Video Container - YouTube Embed */}
        <div className="relative rounded-2xl overflow-hidden aspect-video bg-card border border-border/50">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/NQ6_Sqt_w3Y?autoplay=0&rel=0&modestbranding=1"
            title="Inspiration Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

          {/* Corner accents */}
          <div className="absolute top-4 left-4 w-8 h-8 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-px bg-accent/40" />
            <div className="absolute top-0 left-0 w-px h-full bg-accent/40" />
          </div>
          <div className="absolute bottom-4 right-4 w-8 h-8 pointer-events-none">
            <div className="absolute bottom-0 right-0 w-full h-px bg-accent/40" />
            <div className="absolute bottom-0 right-0 w-px h-full bg-accent/40" />
          </div>
        </div>

        {/* Caption */}
        <div className="text-center mt-6">
          <p className="text-4xl md:text-5xl font-bold text-foreground/20 tracking-widest">
            日本
          </p>
          <p className="text-xs text-muted-foreground tracking-[0.3em] mt-2 uppercase">
            Japan
          </p>
        </div>
      </div>
    </section>
  );
};

export default AnimeVideoSection;
