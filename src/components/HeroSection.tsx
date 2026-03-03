import { Github, Linkedin, ArrowDown } from "lucide-react";
import headshot from "@/assets/headshot-placeholder.png";
import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-[100svh] flex items-center pt-16 overflow-hidden"
      id="hero"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/90 to-background" />
      </div>

      <div className="section-container relative z-10 py-20">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Text */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <p className="text-sm font-medium tracking-widest uppercase text-foreground animate-fade-in">
              Data Scientist
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="text-shimmer">Ashley Heart U. Golloso</span>
            </h1>
            <p
              className="text-lg text-muted-foreground max-w-xl animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Machine Learning Enthusiast | Power BI &amp; Python Specialist
            </p>
            <p
              className="text-base text-muted-foreground max-w-lg leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              "Data enthusiast with a love for uncovering patterns and telling
              stories with data. I specialize in Python, R, Power BI, and
              machine learning to help businesses make smarter decisions."
            </p>

            <div
              className="flex flex-wrap gap-3 justify-center md:justify-start animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
              >
                View Projects
              </a>
              <a
                href="https://github.com/heartiecodes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-5 py-2.5 text-sm font-medium text-secondary-foreground hover-glow"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ashley-heart-golloso-b14685337/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-5 py-2.5 text-sm font-medium text-secondary-foreground hover-glow"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>

          {/* Headshot */}
          <div
            className="flex-shrink-0 animate-scale-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary via-glow-cyan to-accent opacity-60 blur-md" />
              <img
                src={headshot}
                alt="Ashley Heart U. Golloso"
                className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover border-2 border-border"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
