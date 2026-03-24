import { Github, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "MediRAG AI (Medical Assistant)",
    description:
      "Medical AI assistant using RAG + Vector DB + LLM for accurate responses.",
    techStack: ["Python", "RAG", "LLM"],
    github: "https://github.com/velpula-manish/medirag-ai",
    live: "https://medirag-ai-4v4miutwq4nir8rrodapbw.streamlit.app/", 
  },
  {
    title: "AI Travel Planner",
    description:
      "AI-based travel planner with smart itinerary, weather, and budget analysis.",
    techStack: ["Python", "Streamlit", "AI"],
    github: "https://github.com/velpula-manish/ai-travel-planner",
    live: "https://ai-travel-planner-h7f7ryewjbufa5tdvfewnu.streamlit.app/",
  },
  {
    title: "Flask Face Attendance System",
    description:
      "Face recognition attendance system using OpenCV and Flask.",
    techStack: ["Python", "Flask", "OpenCV"],
    github: "https://github.com/velpula-manish/flask-face-attendance-system",
  },
  {
    title: "Python Full Stack Web App",
    description:
      "Django full-stack app with authentication and database integration.",
    techStack: ["Python", "Django", "SQL"],
    github: "https://github.com/velpula-manish/Python-Full-Stack-with-Django-SqlDatabase",
  },
  {
    title: "Smart City Infrastructure Analysis",
    description:
      "Data analysis project for smart city planning.",
    techStack: ["Python", "Data Analysis"],
    github: "https://github.com/velpula-manish/Hyderabad-Smart-City-Infrastructure",
  },
  {
    title: "Cafe Management System",
    description:
      "Java-based system for managing cafe operations.",
    techStack: ["Java"],
    github: "https://github.com/velpula-manish/Java-cafe-Management-System",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-card relative">
      <div className="section-container relative z-10">
        <h2 className="text-2xl font-bold text-center mb-10">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className="p-6 border rounded-lg shadow-sm"
            >
              <h3 className="text-lg font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-sm mb-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-3">
                {project.techStack.map((tech) => (
                  <span key={tech} className="text-xs border px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                {project.live && (
                  <Button size="sm" asChild>
                    <a href={project.live} target="_blank">
                      <ExternalLink size={16} /> Live
                    </a>
                  </Button>
                )}

                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank">
                    <Github size={16} /> Code
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
