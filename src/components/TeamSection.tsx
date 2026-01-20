import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
}

const TeamSection = () => {
  // Final year: Heads first, then others alphabetically. All names in CAPS.
  const teamData: Record<string, TeamMember[]> = {
    final: [
      { name: "DURBA SINHA", role: "HEAD OF R&D CELL" },
      { name: "SAKSHI YADAV", role: "HEAD OF R&D CELL" },
      { name: "VITAL REDDY", role: "INNOVATION HEAD" },
      { name: "ABHILASH MAMIDI", role: "EXECUTIVE MEMBER" },
      { name: "ANISHA KUMARI", role: "EXECUTIVE MEMBER" },
      { name: "DHARMANA ESWAR SAI", role: "EXECUTIVE MEMBER" },
    ],
    prefinal: [
      { name: "ABHISHEK", role: "SENIOR MEMBER" },
      { name: "AGNIMITRA", role: "SENIOR MEMBER" },
      { name: "AKASH", role: "SENIOR MEMBER" },
      { name: "AKHILESH", role: "SENIOR MEMBER" },
      { name: "ARNAB", role: "SENIOR MEMBER" },
      { name: "ARPAN", role: "SENIOR MEMBER" },
      { name: "DEEPIKA", role: "SENIOR MEMBER" },
      { name: "NIDHI", role: "SENIOR MEMBER" },
      { name: "RITAM", role: "SENIOR MEMBER" },
      { name: "SHRUTISADAN", role: "SENIOR MEMBER" },
      { name: "SRIJION", role: "SENIOR MEMBER" },
      { name: "SUKESH", role: "SENIOR MEMBER" },
      { name: "UTKARSH", role: "SENIOR MEMBER" },
    ],
    second: [
      { name: "ADITYA", role: "JUNIOR MEMBER" },
      { name: "AMAN", role: "JUNIOR MEMBER" },
      { name: "ARKAJIT", role: "JUNIOR MEMBER" },
      { name: "BHARADWAJ", role: "JUNIOR MEMBER" },
      { name: "CHITTAJIT", role: "JUNIOR MEMBER" },
      { name: "JOYEETA", role: "JUNIOR MEMBER" },
      { name: "LAHARI", role: "JUNIOR MEMBER" },
      { name: "PANEENDRA", role: "JUNIOR MEMBER" },
      { name: "PRATIK", role: "JUNIOR MEMBER" },
      { name: "RANA", role: "JUNIOR MEMBER" },
      { name: "ROHIT", role: "JUNIOR MEMBER" },
      { name: "VAMSHI", role: "JUNIOR MEMBER" },
    ],
  };

  return (
    <section id="team" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">
            The Innovators Behind The Magic
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Meet The R&D Cell <span className="text-gradient-purple">Team</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A passionate team of tech enthusiasts dedicated to making ML Efficient 3.0 an unforgettable learning experience for you!
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
                        <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-border/50 group-hover:border-primary/50 transition-all duration-300 group-hover:glow-cyan bg-muted/50 flex items-center justify-center">
                          <User className="w-10 h-10 text-muted-foreground" />
                        </div>
                      </div>
                      <h4 className="font-semibold text-xs sm:text-sm text-foreground break-words leading-tight min-h-[2.5rem] flex items-center justify-center">
                        {member.name}
                      </h4>
                      <p className="text-xs text-muted-foreground break-words leading-tight">
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
