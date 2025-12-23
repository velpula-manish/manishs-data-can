import { GraduationCap, Target, Code2 } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold mb-2">Get to Know Me</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            About Me
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-center">
            I am an MCA Graduate with a strong foundation in Python, SQL, Machine Learning, 
            and Data Visualization. I have hands-on experience building real-world projects 
            using Django, Flask, and data analysis tools. I am passionate about turning data 
            into meaningful insights and developing efficient, scalable applications.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-12 text-center">
            Currently, I am actively seeking entry-level roles and internships in 
            Data Analytics or Python Development.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-background p-6 rounded-lg shadow-card text-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="text-accent" size={24} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Education</h3>
              <p className="text-sm text-muted-foreground">
                Master of Computer Applications (MCA)
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-card text-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Target className="text-accent" size={24} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Focus</h3>
              <p className="text-sm text-muted-foreground">
                Data Analytics & Python Development
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-card text-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Code2 className="text-accent" size={24} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Approach</h3>
              <p className="text-sm text-muted-foreground">
                Clean Code & Data-Driven Solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
