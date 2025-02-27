
import { Calendar, ChevronRight, Filter, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sidebar } from "@/components/Sidebar";

const Events = () => {
  const events = [
    {
      title: "Study Session",
      description: "Join us for a study session in the library, where we'll be reviewing for the upcoming exam.",
      date: "October 10th, 2024",
      time: "2:00 PM - 4:00 PM",
      location: "Firefighting baseroom, S2",
      category: "Academic",
      image: "/lovable-uploads/80aae0b1-6a90-49f5-8f08-0fbc87e7e62e.png"
    },
    {
      title: "Club Fair",
      description: "Explore the various clubs and organizations like ISACA and Enactus on campus and get involved!",
      date: "November 29, 2024",
      time: "11:00 AM - 2:00 PM",
      location: "Engineering hall",
      category: "Social",
      image: "/lovable-uploads/32eca6a6-6af4-4912-a87c-2cd04c0bdadc.png"
    },
    {
      title: "Career Development Workshop",
      description: "Learn essential skills for job interviews and resume building from industry professionals.",
      date: "December 5, 2024",
      time: "10:00 AM - 12:00 PM",
      location: "Business School, Room 302",
      category: "Career",
      image: "/lovable-uploads/01f0565d-8875-4e9a-b259-d3412a42a264.png"
    },
    {
      title: "Mental Health Awareness Day",
      description: "Join us for a day of workshops and discussions focused on mental well-being and self-care.",
      date: "December 10, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "Student Center",
      category: "Wellness",
      image: "/lovable-uploads/6107d683-e902-4bac-a382-ee797f404b1b.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="ml-16 md:ml-64 p-4 md:p-8 animate-fade-in">
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Events Calendar</h1>
            <p className="text-muted-foreground mt-1">Stay up-to-date with the latest events and activities on campus!</p>
          </div>
          <div className="flex gap-3 self-start md:self-auto">
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" /> Calendar View
            </Button>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" /> Filter Events
            </Button>
          </div>
        </div>

        <div className="glass p-6 rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {events.map((event, index) => (
              <div key={index} className="border border-border/80 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img 
                    src={event.image || "/placeholder.svg"} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium">
                    {event.category}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{event.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{event.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      <span>{event.date} • {event.time}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <Button className="w-full">
                    Register <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Featured Campus Organizations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border border-border/80 rounded-md">
              <h3 className="font-medium mb-1 flex items-center">
                <Users className="h-4 w-4 mr-2 text-primary" />
                Student Government
              </h3>
              <p className="text-sm text-muted-foreground">Representing student interests and organizing campus-wide events.</p>
            </div>
            <div className="p-4 border border-border/80 rounded-md">
              <h3 className="font-medium mb-1 flex items-center">
                <Users className="h-4 w-4 mr-2 text-primary" />
                Debate Club
              </h3>
              <p className="text-sm text-muted-foreground">Enhancing critical thinking through structured debates and discussions.</p>
            </div>
            <div className="p-4 border border-border/80 rounded-md">
              <h3 className="font-medium mb-1 flex items-center">
                <Users className="h-4 w-4 mr-2 text-primary" />
                Environmental Society
              </h3>
              <p className="text-sm text-muted-foreground">Promoting sustainability and eco-friendly practices on campus.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Events;
