import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xl font-bold mb-2">
              Manish Kumar<span className="text-accent">.</span>
            </p>
            <p className="text-sm text-primary-foreground/70">
              Data Analyst & Python Developer
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/velpula-manish"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="http://linkedin.com/in/velpula-manish/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:velpulamanish5@gmail.com"
              className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} Manish Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
