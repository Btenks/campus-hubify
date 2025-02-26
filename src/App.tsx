
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import { AlertCircle } from "lucide-react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Announcements from "./pages/Announcements";
import Events from "./pages/Events";
import Messages from "./pages/Messages";
import Marketplace from "./pages/Marketplace";
import Profile from "./pages/Profile";

const queryClient = new QueryClient();

const AuthError = () => (
  <div className="min-h-screen flex items-center justify-center bg-background p-4">
    <div className="glass p-8 rounded-lg max-w-md w-full space-y-4">
      <div className="flex items-center space-x-2 text-destructive">
        <AlertCircle className="h-5 w-5" />
        <h2 className="text-lg font-semibold">Authentication Required</h2>
      </div>
      <p className="text-muted-foreground">
        Please sign in to access this content. Our community features are available to registered users.
      </p>
      <SignInButton redirectUrl="/">
        <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md transition-colors">
          Sign In to Continue
        </button>
      </SignInButton>
    </div>
  </div>
);

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut><AuthError /></SignedOut>
    </>
  );
};

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  return (
    <SignedOut>
      {children}
    </SignedOut>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={
              <PublicRoute>
                <Index />
              </PublicRoute>
            } 
          />
          <Route 
            path="/announcements" 
            element={
              <ProtectedRoute>
                <Announcements />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/events" 
            element={
              <ProtectedRoute>
                <Events />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/messages" 
            element={
              <ProtectedRoute>
                <Messages />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/marketplace" 
            element={
              <ProtectedRoute>
                <Marketplace />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
