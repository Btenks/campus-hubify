
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Sidebar } from "@/components/Sidebar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="ml-64 p-8 animate-fade-in">
        <div className="flex justify-end mb-8">
          <ThemeToggle />
        </div>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl font-bold tracking-tight">
            Welcome to Campus Connect
          </h1>
          <p className="text-xl text-muted-foreground">
            Stay Connected, Stay Ahead - Your Digital Campus Hub
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="glass">
              Sign Up
            </Button>
            <Button size="lg" variant="outline" className="glass">
              Login
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="glass p-6 rounded-xl space-y-4">
              <h3 className="text-xl font-semibold">Campus Updates</h3>
              <p className="text-muted-foreground">
                Stay informed with real-time announcements and news from your university.
              </p>
            </div>
            <div className="glass p-6 rounded-xl space-y-4">
              <h3 className="text-xl font-semibold">Event Calendar</h3>
              <p className="text-muted-foreground">
                Never miss an important event with our integrated calendar system.
              </p>
            </div>
            <div className="glass p-6 rounded-xl space-y-4">
              <h3 className="text-xl font-semibold">Connect & Collaborate</h3>
              <p className="text-muted-foreground">
                Message peers, join groups, and collaborate on projects seamlessly.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
