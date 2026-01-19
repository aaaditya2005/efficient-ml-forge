import { Card, CardContent } from "@/components/ui/card";
import { Users, Zap, Brain } from "lucide-react";
import mlEfficient2Poster from "@/assets/ml-efficient-2-poster.jpg";

const PastEventsSection = () => {
  const pastEvents = [
    {
      year: "2025",
      title: "ML Efficient 2.0",
      description: "\"AI won't Replace you, someone Using AI Will\" - An incredible journey exploring Machine Learning, AI, Computer Vision, Automation, and more with hands-on projects and industry insights.",
      image: mlEfficient2Poster,
      participants: "100+ Participants",
      highlights: ["Machine Learning", "AI", "Computer Vision", "Automation"],
    },
    {
      year: "2024",
      title: "ML Efficient 1.0",
      description: "Our inaugural edition that sparked the AI revolution at NIT Durgapur. We introduced students to the fundamentals of Machine Learning, data preprocessing, and built their first ML models.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop",
      participants: "60+ Participants",
      highlights: ["ML Fundamentals", "Data Science", "Python Basics"],
    },
  ];

  return (
    <section id="past-events" className="py-20 md:py-32 relative bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4 flex items-center justify-center gap-2">
            <Zap className="w-4 h-4" />
            Our Journey of Innovation
            <Zap className="w-4 h-4" />
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Past <span className="text-gradient-purple">Events</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building a legacy of innovation, learning, and community. Each edition brings new technologies, more participants, and greater impact!
          </p>
        </div>

        {/* Events Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pastEvents.map((event) => (
            <Card
              key={event.year}
              className="glass-card border-border/50 overflow-hidden group hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
                <div className="absolute top-4 left-4">
                  <span className="glass-card px-3 py-1 rounded-full text-sm font-medium text-primary">
                    {event.year}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground flex items-center gap-2">
                  <Brain className="w-5 h-5 text-primary" />
                  {event.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {event.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {event.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-accent">
                  <Users className="w-4 h-4" />
                  <span className="text-sm font-medium">{event.participants}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Growing Community Note */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm">
            🚀 <span className="text-primary font-medium">ML Efficient 3.0</span> is set to be our biggest edition yet!
          </p>
        </div>
      </div>
    </section>
  );
};

export default PastEventsSection;
