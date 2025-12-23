import { useState } from "react";
import { Mail, Linkedin, Github, Send, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="section-subtitle">Get in Touch</p>
          <h2 className="section-title">Contact Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Let's Connect
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm actively looking for entry-level opportunities in Data Analytics 
              and Python Development. Feel free to reach out!
            </p>

            <div className="space-y-3">
              <a
                href="mailto:velpulamanish5@gmail.com"
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail size={20} className="text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Email</p>
                  <p className="font-medium text-foreground">velpulamanish5@gmail.com</p>
                </div>
                <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>

              <a
                href="http://linkedin.com/in/velpula-manish/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Linkedin size={20} className="text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">LinkedIn</p>
                  <p className="font-medium text-foreground">Manish Kumar</p>
                </div>
                <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>

              <a
                href="https://github.com/velpula-manish"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-accent/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Github size={20} className="text-accent" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">GitHub</p>
                  <p className="font-medium text-foreground">velpula-manish</p>
                </div>
                <ArrowRight size={16} className="text-muted-foreground group-hover:text-accent transition-colors" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-xl border border-border">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="bg-background"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="bg-background"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={4}
                  className="bg-background resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
