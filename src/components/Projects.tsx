import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Flask Face Attendance System",
    description:
      "Face recognition–based attendance management using Flask and OpenCV. Detects and recognizes faces in real time and automatically records attendance.",
    techStack: ["Python", "Flask", "OpenCV", "SQLite"],
    github: "https://github.com/velpula-manish/flask-face-attendance-system",
  },
  {
    title: "Python Full Stack Web App",
    description:
      "Full-stack web application using Django with SQL database. Implements CRUD operations, authentication, and structured backend logic.",
    techStack: ["Python", "Django", "SQL", "HTML/CSS"],
    github: "https://github.com/velpula-manish/Python-Full-Stack-with-Django-SqlDatabase",
  },
  {
    title: "Smart City Infrastructure Analysis",
    description:
      "Data-driven analysis of smart city infrastructure to derive insights for urban planning and development.",
    techStack: ["Python", "Data Analysis", "Visualization"],
    github: "https://github.com/velpula-manish/Hyderabad-Smart-City-Infrastructure",
  },
  {
    title: "Cafe Management System",
    description:
      "Java-based application for managing cafe operations including orders, billing, and inventory management.",
    techStack: ["Java", "OOP Concepts"],
    github: "https://github.com/velpula-manish/Java-cafe-Management-System",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-card relative">
      <div className="absolute inset-0 tech-pattern opacity-50" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <p className="section-subtitle">My Work</p>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project) => (
            <article
              key={project.title}
              className="bg-background p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all group flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                >
                  <ArrowUpRight size={18} />
                </a>
              </div>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-primary/5 text-primary text-xs font-medium rounded border border-primary/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <Button variant="outline" size="sm" asChild className="w-fit">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={16} />
                  View Code
                </a>
              </Button>
            </article>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Explore more of my work on GitHub
          </p>
          <Button variant="success" size="lg" asChild>
            <a
              href="https://github.com/velpula-manish"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} />
              View GitHub Profile
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
