import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const TeamSection = () => {
  const teamData: Record<string, TeamMember[]> = {
    final: [
      { name: "Aditya Sharma", role: "President", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" },
      { name: "Priya Patel", role: "Vice President", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face" },
      { name: "Rahul Kumar", role: "Technical Lead", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face" },
      { name: "Sneha Reddy", role: "ML Lead", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face" },
      { name: "Vikram Singh", role: "Operations Head", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face" },
      { name: "Ananya Gupta", role: "Design Lead", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face" },
      { name: "Karthik Menon", role: "Research Lead", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face" },
      { name: "Divya Nair", role: "Events Coordinator", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop&crop=face" },
      { name: "Arjun Verma", role: "Content Lead", image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&fit=crop&crop=face" },
      { name: "Meera Iyer", role: "Outreach Lead", image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=200&h=200&fit=crop&crop=face" },
      { name: "Rohan Das", role: "Workshop Lead", image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&h=200&fit=crop&crop=face" },
      { name: "Ishita Jain", role: "PR Lead", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face" },
    ],
    prefinal: [
      { name: "Abhishek Roy", role: "Core Member", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop&crop=face" },
      { name: "Kavya Saxena", role: "Core Member", image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&h=200&fit=crop&crop=face" },
      { name: "Nikhil Rao", role: "Core Member", image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=200&h=200&fit=crop&crop=face" },
      { name: "Pooja Thakur", role: "Core Member", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=200&fit=crop&crop=face" },
      { name: "Siddharth Joshi", role: "Core Member", image: "https://images.unsplash.com/photo-1528892952291-009c663ce843?w=200&h=200&fit=crop&crop=face" },
      { name: "Tanvi Mishra", role: "Core Member", image: "https://images.unsplash.com/photo-1502323777036-f29e3972d82f?w=200&h=200&fit=crop&crop=face" },
      { name: "Varun Kapoor", role: "Core Member", image: "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?w=200&h=200&fit=crop&crop=face" },
      { name: "Zara Khan", role: "Core Member", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop&crop=face" },
      { name: "Amit Choudhary", role: "Core Member", image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=200&h=200&fit=crop&crop=face" },
      { name: "Bhavna Singh", role: "Core Member", image: "https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=200&h=200&fit=crop&crop=face" },
      { name: "Dev Prakash", role: "Core Member", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face" },
      { name: "Esha Bansal", role: "Core Member", image: "https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?w=200&h=200&fit=crop&crop=face" },
    ],
    second: [
      { name: "Farhan Malik", role: "Junior Member", image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=200&h=200&fit=crop&crop=face" },
      { name: "Gauri Pillai", role: "Junior Member", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=face" },
      { name: "Harsh Agarwal", role: "Junior Member", image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&h=200&fit=crop&crop=face" },
      { name: "Isha Chatterjee", role: "Junior Member", image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&h=200&fit=crop&crop=face" },
      { name: "Jay Pandey", role: "Junior Member", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face" },
      { name: "Kriti Sharma", role: "Junior Member", image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&h=200&fit=crop&crop=face" },
      { name: "Lakshya Mehta", role: "Junior Member", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face" },
      { name: "Maya Desai", role: "Junior Member", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face" },
      { name: "Nakul Bhatt", role: "Junior Member", image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&fit=crop&crop=face" },
      { name: "Ojasvi Rana", role: "Junior Member", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop&crop=face" },
      { name: "Pranav Sinha", role: "Junior Member", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face" },
      { name: "Riya Ghosh", role: "Junior Member", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face" },
    ],
  };

  return (
    <section id="team" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">
            The People Behind
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            R&D Cell <span className="text-gradient-purple">Team</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Meet the dedicated team that makes ML Efficient possible
          </p>
        </div>

        {/* Team Tabs */}
        <Tabs defaultValue="final" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12 bg-muted/50 h-auto p-1">
            <TabsTrigger
              value="final"
              className="py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md"
            >
              Final Year
            </TabsTrigger>
            <TabsTrigger
              value="prefinal"
              className="py-2.5 data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground data-[state=active]:shadow-md"
            >
              Pre-Final Year
            </TabsTrigger>
            <TabsTrigger
              value="second"
              className="py-2.5 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:shadow-md"
            >
              Second Year
            </TabsTrigger>
          </TabsList>

          {Object.entries(teamData).map(([year, members]) => (
            <TabsContent key={year} value={year} className="mt-0">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
                {members.map((member) => (
                  <Card
                    key={member.name}
                    className="glass-card border-border/50 group hover:border-primary/50 transition-all duration-300 overflow-hidden"
                  >
                    <CardContent className="p-4 text-center">
                      <div className="relative mb-3">
                        <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-border/50 group-hover:border-primary/50 transition-all duration-300 group-hover:glow-cyan">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <h4 className="font-semibold text-sm text-foreground truncate">
                        {member.name}
                      </h4>
                      <p className="text-xs text-muted-foreground truncate">
                        {member.role}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default TeamSection;
