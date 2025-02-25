
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Sidebar } from "@/components/Sidebar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="ml-0 md:ml-64 p-4 md:p-8 animate-fade-in">
        <div className="flex justify-end mb-4 md:mb-8">
          <ThemeToggle />
        </div>
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8 px-4">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            Welcome to Campus Connect
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay Connected, Stay Ahead - Your Digital Campus Hub
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
            <Button size="lg" className="glass w-full sm:w-auto">
              Sign Up
            </Button>
            <Button size="lg" variant="outline" className="glass w-full sm:w-auto">
              Login
            </Button>
          </div>
          
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
        </div>
      </main>
    </div>
  );
};

export default Index;
