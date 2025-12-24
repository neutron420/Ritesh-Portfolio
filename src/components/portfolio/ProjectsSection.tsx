import { useEffect, useState } from "react";
import { ArrowUpRight, Github, Star, GitFork, Code2 } from "lucide-react";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
}

// Language to color mapping
const languageColors: Record<string, string> = {
  TypeScript: "bg-blue-500",
  JavaScript: "bg-yellow-400",
  Python: "bg-green-500",
  Rust: "bg-orange-500",
  Solidity: "bg-gray-400",
  Go: "bg-cyan-500",
  Java: "bg-red-500",
  "C++": "bg-pink-500",
  C: "bg-gray-500",
  HTML: "bg-orange-600",
  CSS: "bg-purple-500",
  Shell: "bg-green-600",
  Dart: "bg-blue-400",
};

// Project images based on common topics/names
const getProjectImage = (repo: GitHubRepo): string => {
  const name = repo.name.toLowerCase();
  const topics = repo.topics?.map(t => t.toLowerCase()) || [];
  
  if (name.includes("blockchain") || name.includes("defi") || name.includes("web3") || topics.includes("blockchain")) {
    return "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&auto=format&fit=crop&q=80";
  }
  if (name.includes("ai") || name.includes("ml") || name.includes("machine") || topics.includes("machine-learning")) {
    return "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&auto=format&fit=crop&q=80";
  }
  if (name.includes("ecommerce") || name.includes("shop") || name.includes("store")) {
    return "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&auto=format&fit=crop&q=80";
  }
  if (name.includes("dashboard") || name.includes("analytics") || name.includes("admin")) {
    return "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80";
  }
  if (name.includes("chat") || name.includes("message") || name.includes("social")) {
    return "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=600&auto=format&fit=crop&q=80";
  }
  if (name.includes("game") || name.includes("play") || topics.includes("game")) {
    return "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&auto=format&fit=crop&q=80";
  }
  if (name.includes("api") || name.includes("backend") || name.includes("server")) {
    return "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80";
  }
  // Default tech image
  return "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop&q=80";
};

const ProjectsSection = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/users/neutron420/repos?sort=updated&per_page=30'
        );
        
        if (response.ok) {
          const data: GitHubRepo[] = await response.json();
          // Filter out forks and sort by stars, then take top 6
          const filteredRepos = data
            .filter(repo => !repo.name.includes('.github') && repo.description)
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 6);
          setRepos(filteredRepos);
        }
      } catch (error) {
        console.error('Failed to fetch repos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="py-16 md:py-24">
        <div className="section-container">
          <h2 className="text-xl md:text-2xl font-semibold mb-8">Projects</h2>
          <div className="grid gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse bg-card rounded-2xl h-48" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="section-container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl md:text-2xl font-semibold">Projects</h2>
          <a
            href="https://github.com/neutron420?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-1"
          >
            View all →
          </a>
        </div>

        <div className="grid gap-6">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="group bg-card rounded-2xl border border-border/50 overflow-hidden hover:border-accent/50 transition-all duration-300"
            >
              <div className="grid md:grid-cols-5 gap-0">
                {/* Image */}
                <div className="md:col-span-2 h-48 md:h-full overflow-hidden relative">
                  <img
                    src={getProjectImage(repo)}
                    alt={repo.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent md:bg-gradient-to-r" />
                </div>

                {/* Content */}
                <div className="md:col-span-3 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
                          {repo.name.replace(/-/g, ' ').replace(/_/g, ' ')}
                        </h3>
                        {repo.language && (
                          <span className={`w-3 h-3 rounded-full ${languageColors[repo.language] || 'bg-gray-400'}`} />
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
                          aria-label="GitHub"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                        {repo.homepage && (
                          <a
                            href={repo.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
                            aria-label="Live Demo"
                          >
                            <ArrowUpRight className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed line-clamp-2">
                      {repo.description || 'No description available'}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                      {repo.stargazers_count > 0 && (
                        <span className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5" />
                          {repo.stargazers_count}
                        </span>
                      )}
                      {repo.forks_count > 0 && (
                        <span className="flex items-center gap-1">
                          <GitFork className="w-3.5 h-3.5" />
                          {repo.forks_count}
                        </span>
                      )}
                      {repo.language && (
                        <span className="flex items-center gap-1">
                          <Code2 className="w-3.5 h-3.5" />
                          {repo.language}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Tech Stack / Topics */}
                  <div className="mt-4">
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {repo.language && (
                        <span className="px-2.5 py-1 text-xs bg-accent/10 text-accent rounded-md border border-accent/20">
                          {repo.language}
                        </span>
                      )}
                      {repo.topics?.slice(0, 4).map((topic) => (
                        <span
                          key={topic}
                          className="px-2.5 py-1 text-xs bg-muted rounded-md text-muted-foreground"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {repos.length === 0 && !loading && (
          <p className="text-center text-muted-foreground py-12">
            No projects found. Check back later!
          </p>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;