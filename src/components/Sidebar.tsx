
import { cn } from "@/lib/utils";
import {
  Home,
  Bell,
  Calendar,
  MessageSquare,
  ShoppingBag,
  User,
} from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const menuItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Bell, label: "Announcements", href: "/announcements" },
  { icon: Calendar, label: "Events", href: "/events" },
  { icon: MessageSquare, label: "Messages", href: "/messages" },
  { icon: ShoppingBag, label: "Marketplace", href: "/marketplace" },
  { icon: User, label: "Profile", href: "/profile" },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={cn(
        "h-screen glass fixed left-0 top-0 z-40 flex flex-col transition-all duration-300",
        collapsed ? "w-16 md:w-20" : "w-56 md:w-64"
      )}
    >
      <div className="flex items-center justify-between p-3 md:p-4">
        {!collapsed && (
          <h1 className="text-lg md:text-xl font-bold text-blue-600 dark:text-blue-400">
            Campus Connect
          </h1>
        )}
        <Button
          variant="ghost"
          size="sm"
          className="ml-auto"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? "→" : "←"}
        </Button>
      </div>
      <nav className="flex-1 space-y-1 md:space-y-2 p-3 md:p-4">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex items-center space-x-3 rounded-lg px-2 md:px-3 py-2 text-gray-700 transition-all hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            <item.icon className="h-4 w-4 md:h-5 md:w-5" />
            {!collapsed && <span className="text-sm md:text-base">{item.label}</span>}
          </a>
        ))}
      </nav>
    </div>
  );
}
