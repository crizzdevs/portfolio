import { motion } from "framer-motion";
import { ArrowLeft, GraduationCap, Trophy, Medal, Award, Crown, Feather, BookOpen, Star, Palette, Users, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { GameNav } from "@/components/GameNav";
import { PixelCard } from "@/components/PixelCard.tsx";

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

      <section id="achievements" className="py-10 pt-10 text-foreground relative overflow-hidden">
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
            className="text-3xl font-bold mb-8 text-primary flex items-center justify-center gap-3"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Medal className="w-6 h-6 text-purple-500" fill="currentColor" /> 
            Achievements
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full mx-auto"
          >
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2 justify-center lg:justify-start">
                <GraduationCap className="w-4 h-4 text-purple-500" />
                Curricular
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 text-left"> 
                {curricular.map((item, index) => {
                  const { title, year } = parseAchievement(item);
                  const Icon = getAchievementIcon(title);
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <PixelCard className="w-full h-28 p-2 bg-muted/60 border border-border rounded-xl flex flex-col items-center justify-center text-center shadow-lg hover:scale-105 hover:border-primary/50 transition-all duration-300"> 
                        <Icon className="w-6 h-6 text-accent mb-1" /> 
                        <div className="text-foreground text-[10px] font-bold leading-tight line-clamp-3 mb-1">{title}</div>
                        <div className="text-[9px] text-muted-foreground bg-background/50 px-1 py-0.5 rounded-full">
                            {year || "N/A"} 
                        </div> 
                      </PixelCard>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="mb-4"> 
              <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2 justify-center lg:justify-start">
                <Trophy className="w-4 h-4 text-purple-500" />
                Extra Curricular
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 text-left"> 
                {extraCurricular.map((item, index) => {
                  const { title, year } = parseAchievement(item);
                  const Icon = getAchievementIcon(title); 
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <PixelCard className="w-full h-28 p-2 bg-muted/60 border border-border rounded-xl flex flex-col items-center justify-center text-center shadow-lg hover:scale-105 hover:border-primary/50 transition-all duration-300"> 
                        <Icon className="w-6 h-6 text-accent mb-1" /> 
                        <div className="text-foreground text-[10px] font-bold leading-tight line-clamp-3 mb-1">{title}</div>
                        <div className="text-[9px] text-muted-foreground bg-background/50 px-1 py-0.5 rounded-full">
                            {year || "N/A"} 
                        </div> 
                      </PixelCard>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </motion.div>
        </div>
      </section>
    </div>
  );
}
