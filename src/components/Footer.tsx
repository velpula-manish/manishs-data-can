import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xl font-bold mb-1">
              Manish Kumar<span className="text-primary">.</span>
            </p>
            <p className="text-sm text-background/60">
              Data Analyst & Python Developer
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/velpula-manish"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-background/10 hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="http://linkedin.com/in/velpula-manish/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-background/10 hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:velpulamanish5@gmail.com"
              className="p-2.5 rounded-lg bg-background/10 hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="border-t border-background/10 mt-8 pt-8 text-center">
          <p className="text-sm text-background/50">
            © {currentYear} Manish Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
