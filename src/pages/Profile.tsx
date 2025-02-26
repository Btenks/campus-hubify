
import { UserProfile } from "@clerk/clerk-react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="ml-16 md:ml-64 p-4 md:p-8 animate-fade-in">
        <h1 className="text-3xl font-bold mb-6">Profile</h1>
        <div className="space-y-4">
          <div className="glass p-6 rounded-lg">
            <UserProfile />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
