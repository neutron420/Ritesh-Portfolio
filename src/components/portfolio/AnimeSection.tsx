const AnimeSection = () => {
  return (
    <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
      {/* Video container - replace the src with your anime video URL */}
      <div className="absolute inset-0">
        {/* 
          REPLACE THIS VIDEO SOURCE WITH YOUR ANIME VIDEO
          Recommended: lofi city, rain scene, night skyline, train ride
          You can use YouTube videos converted to MP4, or host on Cloudinary/S3
        */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1920&auto=format&fit=crop&q=80"
        >
          {/* Add your video source here */}
          <source 
            src="https://cdn.pixabay.com/video/2020/05/25/40130-424930032_large.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>

        {/* Gradient overlays for cinematic effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* Optional centered text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-xs uppercase tracking-[0.4em] text-foreground/60">
          夢を追いかけて
        </p>
      </div>
    </section>
  );
};

export default AnimeSection;
