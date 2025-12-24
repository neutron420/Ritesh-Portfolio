const About = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-8 mb-16">
          <span className="section-label">About</span>
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs text-muted-foreground">01</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Main text */}
          <div className="lg:col-span-7">
            <p className="text-2xl md:text-3xl lg:text-4xl font-serif italic leading-relaxed text-foreground/90">
              I build end-to-end solutions—from 
              <span className="text-accent"> sleek frontends</span> to 
              <span className="text-accent"> decentralized systems</span>—
              where every layer serves a purpose.
            </p>
          </div>

          {/* Details */}
          <div className="lg:col-span-5 space-y-8">
            <p className="text-muted-foreground leading-relaxed">
              With expertise spanning full-stack development and blockchain engineering, 
              I bring a comprehensive approach to building modern software. From React 
              interfaces to Solidity smart contracts, I deliver solutions that scale.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Passionate about Web3 technologies and decentralized systems. I believe 
              the future of the internet is permissionless, transparent, and owned by 
              its users. Let's build it together.
            </p>

            {/* Location */}
            <div className="pt-8 border-t border-border">
              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">Based in</p>
              <p className="font-serif italic text-xl">India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
