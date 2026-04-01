import { motion } from "framer-motion";
import { Code2, Database, Layout, Cloud, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "PROGRAMMING",
    icon: <Code2 className="w-5 h-5" />,
    color: "blue",
    skills: ["Python", "SQL", "Java"]
  },
  {
    title: "DATA & ANALYTICS",
    icon: <Database className="w-5 h-5" />,
    color: "green",
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
    icon: <Layout className="w-5 h-5" />,
    color: "orange",
    skills: ["Django", "Flask", "HTML", "CSS"]
  },
  {
    title: "CLOUD & TECHNOLOGIES",
    icon: <Cloud className="w-5 h-5" />,
    color: "purple",
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
    icon: <Wrench className="w-5 h-5" />,
    color: "pink",
    skills: [
      "Git",
      "GitHub",
      "Jupyter Notebook",
      "VS Code",
      "Postman"
    ]
  }
];

const colorVariants = {
  blue: "text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800/50 bg-blue-50/50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/40 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]",
  green: "text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/50 bg-emerald-50/50 dark:bg-emerald-900/20 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 hover:border-emerald-400 dark:hover:border-emerald-500 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]",
  orange: "text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800/50 bg-orange-50/50 dark:bg-orange-900/20 hover:bg-orange-100 dark:hover:bg-orange-900/40 hover:border-orange-400 dark:hover:border-orange-500 hover:shadow-[0_0_15px_rgba(249,115,22,0.3)]",
  purple: "text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800/50 bg-purple-50/50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-100/40 dark:hover:bg-purple-900/40 hover:border-purple-400 dark:hover:border-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]",
  pink: "text-pink-600 dark:text-pink-400 border-pink-200 dark:border-pink-800/50 bg-pink-50/50 dark:bg-pink-900/20 hover:bg-pink-100 dark:hover:bg-pink-900/40 hover:border-pink-400 dark:hover:border-pink-500 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)]",
};

export const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-gray-50/50 dark:bg-slate-900/50 tech-pattern">
      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle">What I Work With</p>
          <h2 className="section-title">Skills & Technologies</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group p-8 rounded-3xl bg-white dark:bg-slate-800/50 backdrop-blur-xl border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-2xl ${colorVariants[category.color as keyof typeof colorVariants].split(' ')[0].replace('text-', 'bg-').replace('600', '100').replace('400', '900/50')} ${colorVariants[category.color as keyof typeof colorVariants].split(' ')[0]}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white tracking-tight">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, sIdx) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (idx * 0.1) + (sIdx * 0.05) }}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-all duration-300 cursor-default ${colorVariants[category.color as keyof typeof colorVariants]}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
