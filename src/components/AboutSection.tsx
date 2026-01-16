import { Card, CardContent } from "@/components/ui/card";
import { Brain, Cpu, Lightbulb, Rocket } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Machine Learning Optimization",
      description:
        "Explore cutting-edge techniques to optimize ML models for real-world deployment, from model compression to efficient inference.",
    },
    {
      icon: Cpu,
      title: "Efficient Computing",
      description:
        "Learn about hardware-aware ML, edge computing, and building systems that scale from embedded devices to cloud infrastructure.",
    },
    {
      icon: Lightbulb,
      title: "Innovation & Research",
      description:
        "Discover the latest research in neural architecture search, AutoML, and techniques that push the boundaries of what's possible.",
    },
    {
      icon: Rocket,
      title: "Real-World Applications",
      description:
        "Bridge theory and practice with hands-on workshops focused on deploying efficient ML systems in production environments.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">
            About The Event
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What is <span className="text-gradient-cyan">ML Efficient</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            ML Efficient is a premier 2-day technical event organized by the R&D Cell,
            bringing together students, researchers, and industry professionals to explore
            the forefront of efficient machine learning systems.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="glass-card border-border/50 hover:border-primary/50 transition-all duration-300 group overflow-hidden"
            >
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
            </Card>
          ))}
        </div>

        {/* R&D Cell Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 glass-card rounded-full px-6 py-3">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-muted-foreground">
              Organized by <span className="text-foreground font-medium">R&D Cell</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
