const AnimeVideoSection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="section-container">
        {/* Video Container */}
        <div className="relative rounded-2xl overflow-hidden aspect-video bg-card border border-border/50">
          {/* 
            ADD YOUR ANIME VIDEO HERE
            Replace the video src with your own anime video URL
            Recommended: Bleach fight scenes, aesthetic anime moments, lofi vibes
          */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&auto=format&fit=crop&q=80"
          >
            {/* Replace with your Bleach/anime video URL */}
            <source 
              src="https://cdn.pixabay.com/video/2020/05/25/40130-424930032_large.mp4" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>

          {/* Overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/30" />
          
          {/* Centered text overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-4xl md:text-6xl font-bold text-foreground/20 tracking-widest">
              斬月
            </p>
            <p className="text-xs text-foreground/40 tracking-[0.3em] mt-2">
              ZANGETSU
            </p>
          </div>

          {/* Corner accents */}
          <div className="absolute top-4 left-4 w-8 h-8">
            <div className="absolute top-0 left-0 w-full h-px bg-accent/40" />
            <div className="absolute top-0 left-0 w-px h-full bg-accent/40" />
          </div>
          <div className="absolute bottom-4 right-4 w-8 h-8">
            <div className="absolute bottom-0 right-0 w-full h-px bg-accent/40" />
            <div className="absolute bottom-0 right-0 w-px h-full bg-accent/40" />
          </div>
        </div>

        {/* Caption */}
        <p className="text-center text-xs text-muted-foreground mt-4 tracking-wider">
          Replace video URL in AnimeVideoSection.tsx with your Bleach video
        </p>
      </div>
    </section>
  );
};

export default AnimeVideoSection;