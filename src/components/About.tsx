import { GraduationCap, Target, Code2, Sparkles } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="section-padding bg-card relative">
      <div className="absolute inset-0 tech-pattern opacity-50" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <p className="section-subtitle">Get to Know Me</p>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-center">
            I am an MCA Graduate with a strong foundation in Python, SQL, Machine Learning, 
            and Data Visualization. I have hands-on experience building real-world projects 
            using Django, Flask, and data analysis tools.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-12 text-center">
            Currently seeking entry-level roles and internships in 
            <span className="text-primary font-medium"> Data Analytics</span> or 
            <span className="text-accent font-medium"> Python Development</span>.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-background p-6 rounded-xl border border-border hover:border-primary/50 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Education</h3>
              <p className="text-sm text-muted-foreground">
                MCA Graduate
              </p>
            </div>

            <div className="bg-background p-6 rounded-xl border border-border hover:border-accent/50 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Target className="text-accent" size={24} />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Focus</h3>
              <p className="text-sm text-muted-foreground">
                Data Analytics
              </p>
            </div>

            <div className="bg-background p-6 rounded-xl border border-border hover:border-primary/50 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Code2 className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Stack</h3>
              <p className="text-sm text-muted-foreground">
                Python & SQL
              </p>
            </div>

            <div className="bg-background p-6 rounded-xl border border-border hover:border-accent/50 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Sparkles className="text-accent" size={24} />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Approach</h3>
              <p className="text-sm text-muted-foreground">
                Data-Driven
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
