const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "SQL", "Java"],
  },
  {
    title: "Data & Analytics",
    skills: ["Machine Learning", "Data Analysis", "Data Visualization", "Power BI", "Excel"],
  },
  {
    title: "Web & Frameworks",
    skills: ["Django", "Flask", "HTML", "CSS"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Jupyter Notebook"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold mb-2">What I Work With</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Skills & Technologies
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-card p-6 rounded-lg shadow-card hover:shadow-elevated transition-shadow"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
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
