import { Card, CardContent } from "@/components/ui/card";
import { Brain, Cpu, Bot, Zap } from "lucide-react";
const AboutSection = () => {
  const features = [{
    icon: Brain,
    title: "Machine Learning & Deep Learning",
    description: "Learn the fundamentals of ML and DL with hands-on projects like handwritten digit recognition using neural networks."
  }, {
    icon: Bot,
    title: "AI Agents & RAG",
    description: "Build intelligent AI agents using Retrieval Augmented Generation (RAG) to create context-aware applications."
  }, {
    icon: Cpu,
    title: "Automation",
    description: "Master automation concepts and build practical projects that streamline workflows and boost productivity."
  }, {
    icon: Zap,
    title: "Generative AI",
    description: "Get introduced to the world of Generative AI and understand how it's transforming the tech landscape."
  }];
  return <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">
            About The Event
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What is <span className="text-gradient-cyan">ML Efficient 3.0</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            ML Efficient 3.0 is a 2-day hands-on technical workshop organized by the R&D Cell, CCA - NIT Durgapur. This year, we're diving deep into Python, Machine Learning, Deep Learning, AI Agents, Automation, and Generative AI through practical projects and real-world applications.
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {features.map(feature => <Card key={feature.title} className="glass-card border-border/50 hover:border-primary/50 transition-all duration-300 group overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* Topics Tags */}
        <div className="text-center mb-8">
          <p className="text-muted-foreground mb-4">Topics Covered:</p>
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {["Machine Learning", "AI", "Computer Vision", "Gen AI", "Automation", "Python", "Deep Learning"].map(topic => <span key={topic} className="glass-card px-4 py-2 rounded-full text-sm text-foreground border border-border/50">
                {topic}
              </span>)}
          </div>
        </div>

        {/* R&D Cell Info */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 glass-card rounded-full px-6 py-3">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-muted-foreground">
              Organized by <span className="text-foreground font-medium">R&D Cell, CCA - NIT Durgapur</span>
            </span>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;