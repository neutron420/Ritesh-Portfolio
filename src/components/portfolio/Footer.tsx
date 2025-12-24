const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Left side */}
          <div>
            <p className="font-serif italic text-2xl mb-2">
              Your Name<span className="text-accent">.</span>
            </p>
            <p className="text-sm text-muted-foreground">
              Developer & Designer
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-x-8 gap-y-2">
            {['About', 'Skills', 'Work', 'Experience', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  const id = item.toLowerCase() === 'work' ? 'work' : item.toLowerCase();
                  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <p className="text-xs text-muted-foreground">
            © {currentYear}
          </p>
        </div>

        {/* Minimal decoration */}
        <div className="mt-16 pt-8 border-t border-border flex items-center justify-center">
          <p className="text-xs text-muted-foreground/50 tracking-[0.3em] uppercase">
            Built with intention
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
