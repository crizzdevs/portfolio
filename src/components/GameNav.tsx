import { useState } from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const navItems = [
  { id: "home", label: "Home", to: "/home", isPage: true }, // Link to home page with scroll
  { id: "education", label: "Education", to: "/education", isPage: true },
  { id: "achievements", label: "Achievements", to: "/achievements", isPage: true },
  { id: "myfamily", label: "MyFamily", to: "/myfamily", isPage: true },
  { id: "mybatchmates", label: "MyBatchmates", to: "/mybatchmates", isPage: true },
];

export const GameNav = () => {
  const [active, setActive] = useState("home");

  const handleNavClick = (id: string, to: string) => {
    setActive(id);
    // If it's a hash link, scroll after navigation
    if (to.includes("#")) {
      const [path, hash] = to.split("#");
      if (path === window.location.pathname) {
        // Already on the page, just scroll
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-primary font-semibold text-base sm:text-lg">crizzdevs</div>
          <div className="flex gap-1 sm:gap-2">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.to}
                className={cn(
                  "px-3 sm:px-4 py-2 text-sm font-medium rounded-md transition-all",
                  active === item.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
                onClick={() => handleNavClick(item.id, item.to)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
