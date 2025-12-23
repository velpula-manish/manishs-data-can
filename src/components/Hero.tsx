import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "@/assets/manish.jpg";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 tech-pattern" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 animate-fade-up">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary">Open to opportunities</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 animate-fade-up animate-delay-100 tracking-tight">
              Hi, I'm{" "}
              <span className="text-gradient">Manish Kumar</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-up animate-delay-200 font-medium">
              Data Analyst & Python Developer
            </p>
            
            <p className="text-muted-foreground mb-8 max-w-lg leading-relaxed animate-fade-up animate-delay-300">
              MCA Graduate passionate about transforming data into actionable insights 
              and building scalable Python applications. Looking for entry-level 
              opportunities in Data Analytics or Python Development.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8 animate-fade-up animate-delay-400">
              <Button variant="hero" size="lg" asChild>
                <a href="#contact">
                  Get in Touch
                  <ArrowRight size={18} />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/manish-kumar-resume.pdf" download>
                  <Download size={18} />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 animate-fade-up animate-delay-400">
              <span className="text-sm text-muted-foreground mr-2">Connect:</span>
              <a
                href="https://github.com/velpula-manish"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-card border border-border hover:border-primary hover:text-primary transition-all"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="http://linkedin.com/in/velpula-manish/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-card border border-border hover:border-primary hover:text-primary transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:velpulamanish5@gmail.com"
                className="p-2.5 rounded-lg bg-card border border-border hover:border-primary hover:text-primary transition-all"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-2xl" />
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full opacity-20" />
              
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-card shadow-xl">
                <img
                  src={profileImage}
                  alt="Manish Kumar - Data Analyst and Python Developer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
