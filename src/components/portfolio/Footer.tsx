const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Left side */}
          <div>
            <p className="serif text-xl mb-1">
              Ritesh Kumar Singh<span className="text-accent">.</span>
            </p>
            <p className="text-[10px] text-muted-foreground tracking-wider uppercase">
              Full Stack Developer & Blockchain Engineer
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-x-8 gap-y-2">
            {['About', 'Stack', 'Work', 'Experience', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground hover:text-accent transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <p className="text-[10px] text-muted-foreground/50">
            © {currentYear}
          </p>
        </div>

        {/* Minimal Japanese decoration */}
        <div className="mt-16 pt-8 border-t border-border/30 flex items-center justify-center gap-6">
          <div className="w-8 h-px bg-gradient-to-r from-transparent to-accent/30" />
          <p className="text-[10px] text-muted-foreground/30 tracking-[0.4em]">
            魂
          </p>
          <div className="w-8 h-px bg-gradient-to-l from-transparent to-accent/30" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;