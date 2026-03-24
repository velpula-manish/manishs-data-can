const skillCategories = [
  {
    title: "Programming",
    skills: ["Python", "SQL", "Java"]
  },
  {
    title: "Data & Analytics",
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
    title: "Web & Frameworks",
    skills: ["Django", "Flask", "HTML", "CSS"]
  },
  {
    title: "Cloud & Technologies",
    skills: [
      "Microsoft Azure",
      "Azure Data Factory",
      "Azure Databricks",
      "Azure Blob Storage",
      "ETL Pipelines"
    ]
  },
  {
    title: "Tools & Platforms",
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
    <section id="skills" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="section-subtitle">What I Work With</p>
          <h2 className="section-title"> Skills & Technologies </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl 
backdrop-blur-lg bg-white/10 dark:bg-white/5 
border border-white/20 
shadow-lg hover:shadow-2xl 
transition-all duration-300 
hover:-translate-y-2"
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
                    className={`px-3 py-1 rounded-full text-xs font-medium 
  transition-all duration-300 cursor-pointer
  hover:scale-110 hover:shadow-md
  ${
    category.title === "Data & Analytics"
      ? "bg-green-500/20 text-green-300 border border-green-400/30 hover:bg-green-500/30"
      : category.title === "Cloud & Technologies"
      ? "bg-blue-500/20 text-blue-300 border border-blue-400/30 hover:bg-blue-500/30"
      : "bg-gray-500/20 text-gray-300 border border-gray-400/30 hover:bg-gray-500/30"
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
