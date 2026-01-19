import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

const PastEventsSection = () => {
  const pastEvents = [
    {
      year: "2025",
      title: "ML Efficient 2.0",
      description: "Building on our foundation, we explored advanced neural network concepts and automation with 69 enthusiastic participants.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      participants: "100+ Participants",
    },
    {
      year: "2024",
      title: "ML Efficient 1.0",
      description: "Our inaugural edition where we introduced students to the world of Machine Learning, AI, and efficient computing fundamentals.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop",
      participants: "50 Participants",
    },
  ];

  return (
    <section id="past-events" className="py-20 md:py-32 relative bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">
            Our Journey
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Past <span className="text-gradient-purple">Events</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Celebrating years of innovation, learning, and community building
            in the machine learning space.
          </p>
        </div>

        {/* Events Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {pastEvents.map((event) => (
            <Card
              key={event.year}
              className="glass-card border-border/50 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
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
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {event.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {event.description}
                </p>
                <div className="flex items-center gap-2 text-primary">
                  <Users className="w-4 h-4" />
                  <span className="text-sm font-medium">{event.participants}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastEventsSection;
