const skillCategories = [
  {
    title: "Programming",
    skills: ["Python", "SQL", "Java"],
    color: "primary" as const,
  },
  {
    title: "Data & Analytics",
    skills: ["Machine Learning", "Data Analysis", "Data Visualization", "Power BI", "Excel"],
    color: "accent" as const,
  },
  {
    title: "Web & Frameworks",
    skills: ["Django", "Flask", "HTML", "CSS"],
    color: "primary" as const,
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Jupyter Notebook"],
    color: "accent" as const,
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="section-subtitle">What I Work With</p>
          <h2 className="section-title">Skills & Technologies</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow"
            >
              <h3 className={`text-lg font-semibold mb-4 pb-3 border-b border-border ${
                category.color === 'primary' ? 'text-primary' : 'text-accent'
              }`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors cursor-default ${
                      category.color === 'primary' 
                        ? 'bg-primary/10 text-primary hover:bg-primary/20' 
                        : 'bg-accent/10 text-accent hover:bg-accent/20'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
