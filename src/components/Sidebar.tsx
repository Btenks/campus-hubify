
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
        collapsed ? "w-20" : "w-64"
      )}
    >
      <div className="flex items-center justify-between p-4">
        {!collapsed && <h1 className="text-xl font-bold">Campus Connect</h1>}
        <Button
          variant="ghost"
          size="sm"
          className="ml-auto"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? "→" : "←"}
        </Button>
      </div>
      <nav className="flex-1 space-y-2 p-4">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex items-center space-x-3 rounded-lg px-3 py-2 text-gray-700 transition-all hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            <item.icon className="h-5 w-5" />
            {!collapsed && <span>{item.label}</span>}
          </a>
        ))}
      </nav>
    </div>
  );
}
