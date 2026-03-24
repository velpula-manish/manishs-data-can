const skillCategories = [
  {
    title: "PROGRAMMING",
    skills: ["Python", "SQL", "Java"]
  },
  {
    title: "DATA & ANALYTICS",
    skills: [
      "Machine Learning",
      "Data Analysis",
      "Data Visualization",
      "Statistics",
      "Probability",
      "Hypothesis Testing",
      "Exploratory Data Analysis (EDA)",
      "Feature Engineering",
      "Power BI",
      "Excel"
    ]
  },
  {
    title: "WEB & FRAMEWORKS",
    skills: ["Django", "Flask", "HTML", "CSS"]
  },
  {
    title: "CLOUD & TECHNOLOGIES",
    skills: [
      "Microsoft Azure",
      "Azure Data Factory",
      "Azure Databricks",
      "Azure Blob Storage",
      "ETL Pipelines"
    ]
  },
  {
    title: "TOOLS & PLATFORMS",
    skills: [
      "Git",
      "GitHub",
      "Jupyter Notebook",
      "VS Code",
      "Postman"
    ]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="section-subtitle">What I Work With</p>
          <h2 className="section-title">Skills & Technologies</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="glow-card p-6 rounded-2xl bg-white dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/20 shadow-md dark:shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl"
            >
              {/* Title */}
              <h3 className="text-lg font-semibold mb-4 pb-3 border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white uppercase tracking-wide">
                {category.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer hover:scale-110 bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
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
