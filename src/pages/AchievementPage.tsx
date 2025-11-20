import { motion } from "framer-motion";
import { ArrowLeft, GraduationCap, Trophy, Medal, Award, Crown, Feather, BookOpen, Star, Palette, Heart, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { GameNav } from "@/components/GameNav";
import { PixelCard } from "@/components/PixelCard.tsx";

const GameNav = () => {
  const navItems = [
    { id: "home", label: "Home", to: "/#home" },
    { id: "about", label: "About", to: "/#about" },
    { id: "education", label: "Education", to: "/education", isPage: true },
    { id: "achievements", label: "Achievements", to: "/achievements", isPage: true },
  ];
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
                className={`px-3 sm:px-4 py-2 text-sm font-medium rounded-md transition-all ${
                  item.id === "achievements"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
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

const PixelCard = ({ children, className }) => (
  <div className={`p-1 border-2 border-white/10 shadow-2xl ${className}`}>
    {children}
  </div>
);

const curricular = [
  "Consistent Honors Student",
  "Editor in Chief - The Mega Flash (2023-2024)",
  "Barkada Kontra Bisyo - President (2024-2025)",
  "Outstanding Performance - Social Sciences (2024-2025)",
  "Outstanding Performance - Research (2024-2025)",
  "Outstanding Performance - Work Immersion (2024-2025)",
  "Leadership Award - Gold Medal (2024-2025)",
  "Champion - School Based Editorial Writing (2022-2023)",
  "Champion - School Based Editorial Writing (2023-2024)",
  "Champion - Digital Poster Making (2024-2025)",
];

const extraCurricular = [
  "UBBING 5th District - Internal Secretary (Ongoing)",
  "Leadership Award - House of the Representatives",
  "Champion - LDFOT Bread & Pastry Production (2024-2025)",
  "2nd Place - Editorial Writing DSPC Elims (2024-2025)",
  "2nd Place - LD Reading-in-Tandem (2024-2025)",
  "3rd Place - Hydromusiklaban (2024-2025)",
  "3rd Place - Likhawitin (2024-2025)",
];

const parseAchievement = (item) => {
  const match = item.match(/^(.+?)\s*\(([^)]+)\)$/);
  if (match) {
    return { title: match[1].trim(), year: match[2].trim() };
  }
  return { title: item, year: "" };
};

const getAchievementIcon = (title) => {
  const lowerTitle = title.toLowerCase();
  
  if (lowerTitle.includes("consistent honors") || lowerTitle.includes("gold medal")) return Award;
  if (lowerTitle.includes("leadership")) return Crown;
  if (lowerTitle.includes("editor in chief")) return Feather;
  if (lowerTitle.includes("outstanding performance")) return Star;
  if (lowerTitle.includes("research")) return BookOpen;
  if (lowerTitle.includes("work immersion") || lowerTitle.includes("social sciences")) return Shield;
  if (lowerTitle.includes("champion") || lowerTitle.includes("winning")) return Trophy;
  if (lowerTitle.includes("poster making")) return Palette;
  if (lowerTitle.includes("president")) return Users;
  
  return GraduationCap;
};

export default function AchievementPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <GameNav />
      
      <motion.div
        className="fixed bottom-4 right-4 z-40"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </motion.div>

      <section id="achievements" className="py-20 pt-20 text-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-accent"
              style={{
                width: "4px",
                height: "4px",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto text-center px-6 max-w-7xl relative z-10">
          
          <motion.h2
            className="text-4xl font-bold mb-12 text-primary flex items-center justify-center gap-3"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Medal className="w-8 h-8 text-accent" fill="currentColor" /> 
            Achievements
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full mx-auto"
          >
            <PixelCard className="p-6 bg-card/80 border border-border rounded-2xl hover:scale-105 hover:border-primary/70 transition-all duration-300 backdrop-blur-lg"> 
              <div className="flex flex-col gap-4"> 
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary mb-2 flex items-center gap-2 justify-center lg:justify-start">
                    <GraduationCap className="w-5 h-5 text-accent" />
                    Curricular Achievements
                  </h3>
                  <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-1 text-left"> 
                    {curricular.map((item, index) => {
                      const { title, year } = parseAchievement(item);
                      const Icon = getAchievementIcon(title);
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: index * 0.03 }}
                          viewport={{ once: true }}
                        >
                          <PixelCard className="w-full h-32 p-2 bg-muted/60 border border-border rounded-xl hover:border-primary/70 transition-all duration-300 flex flex-col items-center justify-center text-center shadow-lg"> 
                            <Icon className="w-5 h-5 text-accent mb-0.5" /> 
                            <div className="text-foreground text-xs font-bold leading-tight line-clamp-3">{title}</div>
                            <div className="text-[11px] text-muted-foreground mt-0.5">
                                {year || "Ongoing"} 
                            </div> 
                          </PixelCard>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                <div className="flex-1"> 
                  <h3 className="text-xl font-semibold text-primary mb-2 flex items-center gap-2 justify-center lg:justify-start">
                    <Trophy className="w-5 h-5 text-accent" />
                    Extra Curricular Achievements
                  </h3>
                  <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-1 text-left"> 
                    {extraCurricular.map((item, index) => {
                      const { title, year } = parseAchievement(item);
                      const Icon = getAchievementIcon(title); 
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: index * 0.03 }}
                          viewport={{ once: true }}
                        >
                          <PixelCard className="w-full h-32 p-2 bg-muted/60 border border-border rounded-xl hover:border-primary/70 transition-all duration-300 flex flex-col items-center justify-center text-center shadow-lg"> 
                            <Icon className="w-5 h-5 text-accent mb-0.5" /> 
                            <div className="text-foreground text-xs font-bold leading-tight line-clamp-3">{title}</div>
                            <div className="text-[11px] text-muted-foreground mt-0.5">
                                {year || "N/A"} 
                            </div> 
                          </PixelCard>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

              </div>
            </PixelCard>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
