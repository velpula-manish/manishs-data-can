import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "@/assets/manish.jpg";

export const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center pt-16">
      <div className="section-container section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <p className="text-accent font-semibold mb-3 animate-fade-up">
              Hello, I'm
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 animate-fade-up animate-delay-100">
              Manish Kumar
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-up animate-delay-200">
              Data Analyst & Python Developer
            </p>
            <p className="text-muted-foreground mb-8 max-w-lg leading-relaxed animate-fade-up animate-delay-300">
              MCA Graduate passionate about transforming data into actionable insights 
              and building scalable Python applications. Seeking entry-level opportunities 
              in Data Analytics or Python Development.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8 animate-fade-up animate-delay-400">
              <Button variant="hero" size="lg" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-up animate-delay-400">
              <a
                href="https://github.com/velpula-manish"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="http://linkedin.com/in/velpula-manish/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:manishkumar@example.com"
                className="p-2 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-card shadow-elevated">
                <img
                  src={profileImage}
                  alt="Manish Kumar - Data Analyst and Python Developer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden lg:flex justify-center mt-16 animate-fade-up animate-delay-400">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-sm">Scroll down</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
