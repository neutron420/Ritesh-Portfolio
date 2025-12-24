import { Music, ExternalLink } from "lucide-react";
import { SiSpotify } from "react-icons/si";

const SpotifySection = () => {
  const spotifyProfileUrl = "https://open.spotify.com/user/31z5zydy6avat6sca542yiotjcmi";

  return (
    <section className="py-12 md:py-16">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-6">
          <SiSpotify className="w-6 h-6 text-[#1DB954]" />
          <h2 className="text-xl md:text-2xl font-semibold">What I Listen To</h2>
        </div>

        <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* Spotify Logo Card */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-[#1DB954] to-[#191414] flex items-center justify-center shrink-0">
                <SiSpotify className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
              </div>

              {/* Info */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-1">Ritesh's Spotify</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Check out what I'm vibing to — from lo-fi beats while coding to high-energy tracks during hackathons.
                </p>
                
                <a
                  href={spotifyProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#1DB954] text-black font-medium text-sm rounded-full hover:bg-[#1ed760] transition-colors"
                >
                  <SiSpotify className="w-4 h-4" />
                  View Profile
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Music Vibes Tags */}
            <div className="mt-6 pt-6 border-t border-border/30">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Genres I Vibe With</p>
              <div className="flex flex-wrap gap-2">
                {["Lo-Fi", "Hip-Hop", "Electronic", "Indie", "Rock", "Anime OST", "Classical"].map((genre) => (
                  <span
                    key={genre}
                    className="px-3 py-1.5 text-xs bg-muted/50 text-muted-foreground rounded-full border border-border/30"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>

            {/* Now Playing Indicator */}
            <div className="mt-6 flex items-center gap-3 p-3 bg-muted/30 rounded-xl">
              <div className="flex items-center gap-1">
                <span className="w-1 h-3 bg-[#1DB954] rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
                <span className="w-1 h-4 bg-[#1DB954] rounded-full animate-pulse" style={{ animationDelay: '150ms' }} />
                <span className="w-1 h-2 bg-[#1DB954] rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
                <span className="w-1 h-5 bg-[#1DB954] rounded-full animate-pulse" style={{ animationDelay: '450ms' }} />
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground font-medium">Currently vibing</span> — Music keeps me in the zone
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpotifySection;