import { Github, Linkedin } from "lucide-react";
import logo from "@/assets/AHG_Logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img src={logo} alt="AHG Logo" className="h-10 w-10 object-contain" />
          <span className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ashley Heart U. Golloso. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/ashley-heart-golloso-b14685337/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com/heartiecodes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.kaggle.com/ashleyheartgolloso"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Kaggle"
          >
            <span className="text-sm font-bold">K</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
