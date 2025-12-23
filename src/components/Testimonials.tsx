import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Prof. Rajesh Kumar",
    role: "MCA Faculty & Project Guide",
    content:
      "Manish has consistently demonstrated exceptional analytical skills and a strong grasp of Python programming. His ability to translate complex data into actionable insights sets him apart from his peers.",
    initials: "RK",
  },
  {
    name: "Dr. Priya Sharma",
    role: "Data Science Mentor",
    content:
      "Working with Manish on machine learning projects was a pleasure. He shows remarkable dedication to learning and has a natural aptitude for problem-solving and data visualization.",
    initials: "PS",
  },
  {
    name: "Amit Verma",
    role: "Senior Developer & Team Lead",
    content:
      "Manish's Django and Flask projects showcase his understanding of full-stack development. He writes clean, maintainable code and is always eager to learn new technologies.",
    initials: "AV",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold mb-2">What Others Say</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Recommendations
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className="bg-card p-6 rounded-lg shadow-card hover:shadow-elevated transition-all duration-300 flex flex-col"
            >
              <Quote className="text-accent/40 mb-4" size={32} />
              <p className="text-muted-foreground leading-relaxed mb-6 flex-grow italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold text-sm">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Connect with me on{" "}
          <a
            href="http://linkedin.com/in/velpula-manish/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline font-medium"
          >
            LinkedIn
          </a>{" "}
          to leave a recommendation.
        </p>
      </div>
    </section>
  );
};
