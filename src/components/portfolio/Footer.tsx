import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-[0.15] blur-[2px]"
          poster="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1920&auto=format&fit=crop&q=80"
        >
          {/* Fallback to a high-quality anime-style city image if video doesn't load */}
          <source 
            src="https://cdn.pixabay.com/video/2020/07/30/46026-447087612_large.mp4" 
            type="video/mp4" 
          />
        </video>
        
        {/* Gradient overlays for subtle, cinematic effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-transparent to-background" />
      </div>

      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Top divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-12" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo/Name */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold gradient-text mb-2">Your Name</h3>
              <p className="text-sm text-muted-foreground">Full Stack Developer</p>
            </div>

            {/* Navigation */}
            <nav className="flex flex-wrap justify-center gap-6">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                Made with <Heart className="w-4 h-4 text-accent fill-accent" /> in {currentYear}
              </p>
            </div>
          </div>

          {/* Bottom divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mt-12" />
          
          {/* Japanese text decoration */}
          <p className="text-center text-xs text-muted-foreground/50 mt-6 tracking-widest">
            未来を創造する · Creating the Future
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
