
import { useUser } from "@clerk/clerk-react";
import { Bell, Calendar, FileText, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Announcements = () => {
  const { user } = useUser();

  const announcements = [
    {
      title: "Welcome to Spring Semester",
      date: "January 15, 2024",
      content: "Welcome back to campus! We hope you had a restful break. Classes begin next Monday.",
      type: "Academic",
      icon: FileText
    },
    {
      title: "Campus Wi-Fi Maintenance",
      date: "January 18, 2024",
      content: "The campus Wi-Fi network will be undergoing maintenance this weekend. Expect intermittent service.",
      type: "Facilities",
      icon: Bell
    },
    {
      title: "New Student Orientation",
      date: "January 20, 2024",
      content: "All new students are invited to attend orientation on January 20th at the Student Center.",
      type: "Events",
      icon: Calendar
    },
    {
      title: "Library Extended Hours",
      date: "January 22, 2024",
      content: "The university library will extend its hours during midterms and finals weeks.",
      type: "Academic",
      icon: FileText
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="ml-16 md:ml-64 p-4 md:p-8 animate-fade-in">
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Announcements</h1>
            <p className="text-muted-foreground mt-1">Stay informed with the latest campus updates</p>
          </div>
          <Button className="self-start md:self-auto">
            <Bell className="mr-2 h-4 w-4" /> Subscribe to Notifications
          </Button>
        </div>

        <div className="grid gap-6">
          <div className="glass p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Megaphone className="h-6 w-6 text-primary mr-2" />
              <h2 className="text-xl font-semibold">Important Announcements</h2>
            </div>
            <div className="space-y-5">
              {announcements.map((announcement, index) => (
                <div key={index} className="p-4 border border-border/80 rounded-md hover:bg-accent/30 transition-colors">
                  <div className="flex items-start">
                    <div className="p-2 bg-primary/10 rounded-md mr-3">
                      <announcement.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-medium">{announcement.title}</h3>
                        <span className="text-sm text-muted-foreground">{announcement.date}</span>
                      </div>
                      <p className="text-muted-foreground text-sm mb-2">{announcement.content}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs px-2 py-1 bg-secondary rounded-full">{announcement.type}</span>
                        <Button variant="ghost" size="sm" className="text-primary">Read more</Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Calendar className="h-6 w-6 text-primary mr-2" />
              <h2 className="text-xl font-semibold">Academic Dates & Deadlines</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border border-border/80 rounded-md">
                <h3 className="font-medium mb-1">Course Add/Drop Deadline</h3>
                <p className="text-sm text-muted-foreground">January 28, 2024</p>
              </div>
              <div className="p-4 border border-border/80 rounded-md">
                <h3 className="font-medium mb-1">Midterm Examination Period</h3>
                <p className="text-sm text-muted-foreground">March 10-17, 2024</p>
              </div>
              <div className="p-4 border border-border/80 rounded-md">
                <h3 className="font-medium mb-1">Spring Break</h3>
                <p className="text-sm text-muted-foreground">March 18-25, 2024</p>
              </div>
              <div className="p-4 border border-border/80 rounded-md">
                <h3 className="font-medium mb-1">Final Examination Period</h3>
                <p className="text-sm text-muted-foreground">May 8-15, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Announcements;
