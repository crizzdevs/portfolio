import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import logoImg from "@/assets/logo.png"; 

const navItems = [
  { id: "aboutme", label: "About Me", to: "/", isPage: false },
  { id: "education", label: "Education", to: "/education", isPage: true },
  { id: "achievements", label: "Achievements", to: "/achievements", isPage: true },
  { id: "myfamily", label: "MyFamily", to: "/myfamily", isPage: true },
  { id: "batchmates", label: "Batchmates", to: "/batchmates", isPage: true },
];

export const GameNav = () => {
  const location = useLocation();
  const [active, setActive] = useState("aboutme");

  useEffect(() => {
    const currentPath = location.pathname;
    const activeItem = navItems.find(item => item.to === currentPath);
    if (activeItem) {
      setActive(activeItem.id);
    } else if (currentPath === "/") {
      setActive("aboutme");
    }
  }, [location]);

  const handleNavClick = (id: string, to: string) => {
    setActive(id);
    
    if (to === "/#aboutme" || to === "/") {
      if (location.pathname === "/") {
         window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          
          <Link 
            to="/" 
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            onClick={() => handleNavClick("home", "/")}
          >
            <img 
              src={logoImg} 
              alt="crizzdevs logo" 
              className="h-14 w-auto object-contain" 
            />
          </Link>

          <div className="flex gap-1 sm:gap-2 overflow-x-auto no-scrollbar">
            {navItems.map((item) => {
              const isActive = location.pathname === item.to || (item.id === "home" && location.pathname === "/");

              return (
                <Link
                  key={item.id}
                  to={item.to}
                  className={cn(
                    "px-3 sm:px-4 py-2 text-sm font-medium rounded-md transition-all whitespace-nowrap",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                  onClick={() => handleNavClick(item.id, item.to)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};
