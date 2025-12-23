import { Github, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Flask Face Attendance System",
    description:
      "A face recognition–based attendance management system built using Flask and OpenCV. The system detects and recognizes faces in real time and automatically records attendance, reducing manual effort and improving accuracy.",
    techStack: ["Python", "Flask", "OpenCV", "SQLite"],
    github: "https://github.com/velpula-manish/flask-face-attendance-system",
  },
  {
    title: "Python Full Stack Web Application",
    description:
      "A full-stack web application developed using Django with SQL database integration. Implements CRUD operations, authentication, and structured backend logic following MVC principles.",
    techStack: ["Python", "Django", "SQL", "HTML", "CSS"],
    github: "https://github.com/velpula-manish/Python-Full-Stack-with-Django-SqlDatabase",
  },
  {
    title: "Smart City Infrastructure Analysis",
    description:
      "A data-driven project focused on analyzing smart city infrastructure data to derive insights for urban planning and development.",
    techStack: ["Python", "Data Analysis", "Visualization"],
    github: "https://github.com/velpula-manish/Hyderabad-Smart-City-Infrastructure",
  },
  {
    title: "Cafe Management System",
    description:
      "A Java-based application designed to manage cafe operations including orders, billing, and inventory management.",
    techStack: ["Java", "OOP Concepts"],
    github: "https://github.com/velpula-manish/Java-cafe-Management-System",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-card">
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold mb-2">My Work</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Featured Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="bg-background p-6 rounded-lg shadow-card hover:shadow-elevated transition-all hover:-translate-y-1 flex flex-col"
            >
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 pt-2 border-t border-border">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Explore more of my work on GitHub
          </p>
          <Button variant="hero" asChild>
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
