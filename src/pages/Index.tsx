
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Sidebar } from "@/components/Sidebar";
import { CalendarDays, MessageSquare, Bell, BookOpen, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Index = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const mockUser = {
    firstName: "Demo",
    lastName: "User"
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="ml-16 md:ml-64 p-4 md:p-8 animate-fade-in">
        <div className="flex justify-between mb-4 md:mb-8">
          {isLoggedIn ? (
            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <span className="text-sm text-muted-foreground">Welcome back,</span>
                <h2 className="font-medium">{mockUser.firstName || 'User'}</h2>
              </div>
              <Button variant="ghost" size="icon" onClick={handleLogout}>
                <User className="h-5 w-5" />
              </Button>
            </div>
          ) : (
            <div></div>
          )}
          <ThemeToggle />
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8 px-4">
          {!isLoggedIn ? (
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                Welcome to Campus Connect
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-4">
                Stay Connected, Stay Ahead - Your Digital Campus Hub
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mt-6">
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto"
                  onClick={handleLogin}
                >
                  Sign Up
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto"
                  onClick={handleLogin}
                >
                  Login
                </Button>
              </div>
            </div>
          ) : (
            <>
              <h1 className="text-2xl md:text-4xl font-bold">Your Campus Dashboard</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-4">
                <div className="glass p-6 rounded-lg space-y-4">
                  <div className="flex items-center space-x-2">
                    <CalendarDays className="h-5 w-5 text-primary" />
                    <h2 className="text-xl font-semibold">Upcoming Events</h2>
                  </div>
                  <p className="text-muted-foreground">
                    You have no upcoming events. Check the events page to discover what's happening on campus.
                  </p>
                  <Button variant="outline" className="w-full" onClick={() => navigate('/events')}>
                    View Events
                  </Button>
                </div>
                
                <div className="glass p-6 rounded-lg space-y-4">
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    <h2 className="text-xl font-semibold">Recent Messages</h2>
                  </div>
                  <p className="text-muted-foreground">
                    You have no new messages. Connect with your classmates to start a conversation.
                  </p>
                  <Button variant="outline" className="w-full" onClick={() => navigate('/messages')}>
                    Go to Messages
                  </Button>
                </div>
                
                <div className="glass p-6 rounded-lg space-y-4">
                  <div className="flex items-center space-x-2">
                    <Bell className="h-5 w-5 text-primary" />
                    <h2 className="text-xl font-semibold">Announcements</h2>
                  </div>
                  <p className="text-muted-foreground">
                    Stay updated with the latest announcements from your university.
                  </p>
                  <Button variant="outline" className="w-full" onClick={() => navigate('/announcements')}>
                    View Announcements
                  </Button>
                </div>
                
                <div className="glass p-6 rounded-lg space-y-4">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <h2 className="text-xl font-semibold">Resources</h2>
                  </div>
                  <p className="text-muted-foreground">
                    Access study materials, guides, and other resources for your courses.
                  </p>
                  <Button variant="outline" className="w-full" onClick={() => navigate('/marketplace')}>
                    Browse Resources
                  </Button>
                </div>
              </div>
            </>
          )}
          
          {!isLoggedIn && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-16">
              <div className="glass p-4 md:p-6 rounded-xl space-y-3 md:space-y-4">
                <h3 className="text-lg md:text-xl font-semibold">Campus Updates</h3>
                <p className="text-muted-foreground text-sm md:text-base">
                  Stay informed with real-time announcements and news from your university.
                </p>
              </div>
              <div className="glass p-4 md:p-6 rounded-xl space-y-3 md:space-y-4">
                <h3 className="text-lg md:text-xl font-semibold">Event Calendar</h3>
                <p className="text-muted-foreground text-sm md:text-base">
                  Never miss an important event with our integrated calendar system.
                </p>
              </div>
              <div className="glass p-4 md:p-6 rounded-xl space-y-3 md:space-y-4">
                <h3 className="text-lg md:text-xl font-semibold">Connect & Collaborate</h3>
                <p className="text-muted-foreground text-sm md:text-base">
                  Message peers, join groups, and collaborate on projects seamlessly.
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;
