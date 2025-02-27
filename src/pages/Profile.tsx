
import { useState } from "react";
import { UserProfile, useUser } from "@clerk/clerk-react";
import { 
  User, 
  Settings, 
  FileText, 
  BookOpen, 
  Calendar, 
  Clock, 
  Mail,
  School,
  Award,
  BookOpenText,
  Edit,
  Share2,
  Download
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProfilePage = () => {
  const { user } = useUser();
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data
  const courses = [
    { code: "CS101", name: "Introduction to Computer Science", grade: "A" },
    { code: "MATH201", name: "Linear Algebra", grade: "B+" },
    { code: "PHYS101", name: "Physics I", grade: "A-" },
    { code: "ENG102", name: "Academic Writing", grade: "A" }
  ];

  const upcomingEvents = [
    { title: "Project Submission", date: "October 15, 2024", time: "11:59 PM" },
    { title: "Midterm Exam", date: "October 20, 2024", time: "2:00 PM" }
  ];

  const achievements = [
    { title: "Dean's List", date: "Spring 2024", description: "Academic excellence" },
    { title: "Hackathon Winner", date: "March, 2024", description: "First place in campus hackathon" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="ml-16 md:ml-64 p-4 md:p-8 animate-fade-in">
        <h1 className="text-3xl font-bold mb-6">Profile</h1>
        
        <div className="grid gap-6 md:grid-cols-4">
          {/* Left sidebar */}
          <div className="md:col-span-1 space-y-6">
            {/* User Card */}
            <div className="glass p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                {user?.imageUrl ? (
                  <img 
                    src={user.imageUrl} 
                    alt={user?.fullName || 'User'} 
                    className="w-24 h-24 rounded-full object-cover border-4 border-background"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="w-12 h-12 text-primary" />
                  </div>
                )}
              </div>
              <h2 className="text-xl font-bold mb-1">{user?.fullName || 'User'}</h2>
              <p className="text-sm text-muted-foreground mb-4">Computer Science • Senior Year</p>
              <div className="flex justify-center gap-2">
                <Button size="sm" variant="outline">
                  <Edit className="h-3 w-3 mr-1" /> Edit
                </Button>
                <Button size="sm" variant="outline">
                  <Share2 className="h-3 w-3 mr-1" /> Share
                </Button>
              </div>
            </div>
            
            {/* Quick Info */}
            <div className="glass p-6 rounded-lg space-y-4">
              <h3 className="font-semibold text-lg mb-3">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-sm">{user?.primaryEmailAddress?.emailAddress || 'email@university.edu'}</span>
                </div>
                <div className="flex items-center gap-3">
                  <School className="h-4 w-4 text-primary" />
                  <span className="text-sm">Student ID: 123456789</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="text-sm">Joined: September, 2021</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main content */}
          <div className="md:col-span-3 space-y-6">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="w-full grid grid-cols-4 mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="academic">Academic</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
                <TabsTrigger value="clerk">Clerk Profile</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview">
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Current Courses */}
                  <div className="glass p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <BookOpen className="h-5 w-5 text-primary mr-2" />
                      <h2 className="text-xl font-semibold">Current Courses</h2>
                    </div>
                    <div className="space-y-3">
                      {courses.map((course, idx) => (
                        <div key={idx} className="p-3 border border-border/80 rounded-md">
                          <div className="flex justify-between items-center">
                            <div>
                              <h3 className="font-medium">{course.code}</h3>
                              <p className="text-sm text-muted-foreground">{course.name}</p>
                            </div>
                            <span className="text-sm font-medium px-2 py-1 bg-primary/10 rounded">
                              {course.grade}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Upcoming Events */}
                  <div className="glass p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <Calendar className="h-5 w-5 text-primary mr-2" />
                      <h2 className="text-xl font-semibold">Upcoming Events</h2>
                    </div>
                    <div className="space-y-3">
                      {upcomingEvents.map((event, idx) => (
                        <div key={idx} className="p-3 border border-border/80 rounded-md">
                          <h3 className="font-medium">{event.title}</h3>
                          <div className="flex items-center text-sm text-muted-foreground mt-1">
                            <Calendar className="h-3 w-3 mr-1" />
                            <span>{event.date}</span>
                            <Clock className="h-3 w-3 ml-3 mr-1" />
                            <span>{event.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Achievements */}
                <div className="glass p-6 rounded-lg mt-6">
                  <div className="flex items-center mb-4">
                    <Award className="h-5 w-5 text-primary mr-2" />
                    <h2 className="text-xl font-semibold">Achievements</h2>
                  </div>
                  <div className="space-y-3">
                    {achievements.map((achievement, idx) => (
                      <div key={idx} className="p-3 border border-border/80 rounded-md">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium">{achievement.title}</h3>
                            <p className="text-sm text-muted-foreground">{achievement.description}</p>
                          </div>
                          <span className="text-xs text-muted-foreground">{achievement.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="academic">
                <div className="glass p-6 rounded-lg">
                  <div className="flex items-center mb-6">
                    <BookOpenText className="h-5 w-5 text-primary mr-2" />
                    <h2 className="text-xl font-semibold">Academic Records</h2>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-3">Transcript</h3>
                    <div className="border border-border/80 rounded-md p-4 text-center">
                      <p className="text-muted-foreground mb-3">Your official transcript is available for download</p>
                      <Button>
                        <Download className="mr-2 h-4 w-4" /> Download Transcript
                      </Button>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-3">Degree Progress</h3>
                    <div className="w-full bg-muted rounded-full h-4 mb-2">
                      <div className="bg-primary h-4 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                    <p className="text-sm text-muted-foreground">75% complete - 90/120 credits earned</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">Academic Advisor</h3>
                    <div className="p-4 border border-border/80 rounded-md flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Dr. Sarah Johnson</h4>
                        <p className="text-sm text-muted-foreground">Computer Science Department</p>
                        <p className="text-sm text-primary mt-1">Schedule an appointment</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="settings">
                <div className="glass p-6 rounded-lg">
                  <div className="flex items-center mb-6">
                    <Settings className="h-5 w-5 text-primary mr-2" />
                    <h2 className="text-xl font-semibold">Account Settings</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 border border-border/80 rounded-md flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">Notification Preferences</h3>
                        <p className="text-sm text-muted-foreground">Manage how and when you receive notifications</p>
                      </div>
                      <Button variant="outline">Manage</Button>
                    </div>
                    
                    <div className="p-4 border border-border/80 rounded-md flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">Privacy Settings</h3>
                        <p className="text-sm text-muted-foreground">Control what information is visible to others</p>
                      </div>
                      <Button variant="outline">Manage</Button>
                    </div>
                    
                    <div className="p-4 border border-border/80 rounded-md flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">Connected Accounts</h3>
                        <p className="text-sm text-muted-foreground">Link your accounts from other platforms</p>
                      </div>
                      <Button variant="outline">Manage</Button>
                    </div>
                    
                    <div className="p-4 border border-border/80 rounded-md flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">Device Management</h3>
                        <p className="text-sm text-muted-foreground">See devices that have logged into your account</p>
                      </div>
                      <Button variant="outline">View</Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="clerk">
                <div className="glass p-6 rounded-lg">
                  <UserProfile />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
