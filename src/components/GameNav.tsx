import { useState } from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education", isPage: true },
  { id: "contact", label: "Contact" },
];

export const GameNav = () => {
  const [active, setActive] = useState("home");

  const scrollToSection = (id: string) => {
    setActive(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-primary font-semibold text-base sm:text-lg">crizzdevs</div>
          <div className="flex gap-1 sm:gap-2">
            {navItems.map((item) =>
              item.isPage ? (
                <Link
                  key={item.id}
                  to="/education"
                  className={cn(
                    "px-3 sm:px-4 py-2 text-sm font-medium rounded-md transition-all",
                    active === item.id
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                  onClick={() => setActive(item.id)}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "px-3 sm:px-4 py-2 text-sm font-medium rounded-md transition-all",
                    active === item.id
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {item.label}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
