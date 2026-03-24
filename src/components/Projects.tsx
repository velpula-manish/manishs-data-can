import { Github, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const projects = [
  {
    title: "MediRAG AI (Medical Assistant)",
    description:
      "Medical AI assistant using RAG + Vector DB + LLM for accurate responses.",
    techStack: ["Python", "RAG", "LLM"],
    github: "https://github.com/velpula-manish/medirag-ai",
    live: "",
  },
  {
    title: "AI Travel Planner",
    description:
      "AI-based travel planner with smart itinerary, weather, and budget analysis.",
    techStack: ["Python", "Streamlit", "AI"],
    github: "https://github.com/velpula-manish/ai-travel-planner",
    live: "",
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
    github:
      "https://github.com/velpula-manish/Python-Full-Stack-with-Django-SqlDatabase",
  },
  {
    title: "Smart City Infrastructure Analysis",
    description:
      "Data analysis project for smart city planning.",
    techStack: ["Python", "Data Analysis"],
    github:
      "https://github.com/velpula-manish/Hyderabad-Smart-City-Infrastructure",
  },
  {
    title: "Cafe Management System",
    description:
      "Java-based system for managing cafe operations.",
    techStack: ["Java"],
    github:
      "https://github.com/velpula-manish/Java-cafe-Management-System",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-700">
            🚀 Featured Projects
          </h2>
          <p className="text-gray-600 mt-2">
            Some of my best work showcasing AI, development & real-world solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="p-6 rounded-2xl border border-green-200 bg-white shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Title */}
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded bg-green-100 text-green-700 border border-green-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                {project.live && (
                  <Button
                    size="sm"
                    className="bg-green-600 hover:bg-green-700 text-white"
                    asChild
                  >
                    <a href={project.live} target="_blank">
                      <ExternalLink size={16} /> Live
                    </a>
                  </Button>
                )}

                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="border-green-600 text-green-700 hover:bg-green-50"
                >
                  <a href={project.github} target="_blank">
                    <Github size={16} /> Code
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
