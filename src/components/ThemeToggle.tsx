
import { Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full transition-transform hover:scale-110"
    >
      {theme === "light" ? (
        <Sun className="h-5 w-5 text-orange-500 transition-all" />
      ) : (
        <Moon className="h-5 w-5 text-blue-400 transition-all" />
      )}
    </Button>
  );
}
