const AnimeSection = () => {
  return (
    <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
      {/* Video container - Bleach anime video */}
      <div className="absolute inset-0">
        {/* 
          ADD YOUR BLEACH ANIME VIDEO HERE
          Recommended: Ichigo fight scenes, Soul Society, Zanpakuto release moments
          The orange/black theme will complement Ichigo's aesthetic perfectly
        */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1920&auto=format&fit=crop&q=80"
        >
          {/* Replace with your Bleach video source */}
          <source 
            src="https://cdn.pixabay.com/video/2020/05/25/40130-424930032_large.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>

        {/* Gradient overlays for cinematic Bleach effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="absolute inset-0 bg-background/50" />
        
        {/* Orange reiatsu glow effect */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-accent/5 to-transparent" />
      </div>

      {/* Japanese text - Bleach reference */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
        <p className="text-4xl md:text-6xl serif text-foreground/10 tracking-[0.2em]">
          斬月
        </p>
        <p className="text-[10px] uppercase tracking-[0.5em] text-accent/40">
          Zangetsu
        </p>
      </div>

      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-12 h-12">
        <div className="absolute top-0 left-0 w-px h-8 bg-accent/30" />
        <div className="absolute top-0 left-0 w-8 h-px bg-accent/30" />
      </div>
      <div className="absolute bottom-8 right-8 w-12 h-12">
        <div className="absolute bottom-0 right-0 w-px h-8 bg-accent/30" />
        <div className="absolute bottom-0 right-0 w-8 h-px bg-accent/30" />
      </div>
    </section>
  );
};

export default AnimeSection;