import { motion } from "framer-motion";
import { ArrowLeft, GraduationCap, Trophy, Medal, Award, Crown, Feather, BookOpen, Star, Palette, Heart, Shield, Users } from "lucide-react";

// Standard React Imports
// Note: Placeholder definitions for GameNav and PixelCard are included below
// to ensure the component runs correctly in this isolated environment.
import { Link } from "react-router-dom";
import { GameNav } from "@/components/GameNav";
import { PixelCard } from "@/components/PixelCard.tsx";

// --- PLACEHOLDER COMPONENTS (DEFINED INTERNALLY TO RESOLVE IMPORTS AND AVOID CONTEXT ERRORS) ---

// Placeholder for GameNav
const GameNav = () => {
  const navItems = ["Home", "Projects", "Contact"];
  return (
    <header className="fixed top-0 left-0 w-full z-30 p-4 bg-neutral-900/80 backdrop-blur-sm shadow-xl">
      <div className="container mx-auto flex justify-between items-center text-white max-w-7xl">
        <div className="text-xl font-bold text-cyan-400">crizzdevs</div>
        <nav className="hidden sm:flex space-x-6">
          {navItems.map(item => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium tracking-wide"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

// Placeholder for PixelCard
const PixelCard = ({ children, className }) => (
  <div className={`p-1 border-2 border-white/10 shadow-2xl ${className}`}>
    {children}
  </div>
);

// --- EDITABLE ACHIEVEMENT DATA ---
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

// --- DO NOT EDIT BELOW THIS LINE UNLESS YOU KNOW WHAT YOU'RE DOING ---

const parseAchievement = (item) => {
  // Parsing achievements with (Year)
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
  
  return GraduationCap; // Default icon for Curricular
};

export default function AchievementPage() {
  return (
    <div className="min-h-screen bg-neutral-900 font-inter">
      <GameNav />
      
      <motion.div
        className="fixed bottom-4 right-4 z-40"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {/* Using <a> tag to avoid react-router-dom Link context error */}
        <a
          href="#"
          className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-600 text-white font-medium rounded-lg hover:bg-cyan-500 transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </a>
      </motion.div>

      <section id="achievements" className="py-12 pt-20 text-white relative">
        <div className="container mx-auto text-center px-4 max-w-7xl">
          
          <motion.h2
            className="text-3xl font-bold mb-4 text-cyan-400 flex items-center justify-center gap-3"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Medal className="w-8 h-8 text-indigo-400" fill="currentColor" /> 
            Achievements
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full mx-auto"
          >
            <PixelCard className="p-4 bg-neutral-900/60 border border-cyan-900/40 rounded-2xl transition-all duration-300"> 
              <div className="flex flex-col gap-4"> 
                
                {/* CURRICULAR SECTION */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-cyan-300 mb-2 flex items-center gap-2 justify-center lg:justify-start">
                    <GraduationCap className="w-5 h-5 text-indigo-400" />
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
                          <PixelCard className="w-full h-32 p-2 bg-neutral-800/60 border border-cyan-900/40 rounded-xl hover:border-cyan-400/70 transition-all duration-300 flex flex-col items-center justify-center text-center shadow-lg"> 
                            <Icon className="w-5 h-5 text-indigo-400 mb-0.5" /> 
                            <div className="text-gray-200 text-xs font-bold leading-tight line-clamp-3">{title}</div>
                            <div className="text-[11px] text-gray-400 mt-0.5">
                                {year || "Ongoing"} 
                            </div> 
                          </PixelCard>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* EXTRA CURRICULAR SECTION */}
                <div className="flex-1"> 
                  <h3 className="text-xl font-semibold text-cyan-300 mb-2 flex items-center gap-2 justify-center lg:justify-start">
                    <Trophy className="w-5 h-5 text-indigo-400" />
                    Extra Curricular Achievements
                  </h3>
                  <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-1 text-left"> 
                    {extraCurricular.map((item, index) => {
                      const { title, year } = parseAchievement(item);
                      const Icon = Heart; 
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: index * 0.03 }}
                          viewport={{ once: true }}
                        >
                          <PixelCard className="w-full h-32 p-2 bg-neutral-800/60 border border-cyan-900/40 rounded-xl hover:border-cyan-400/70 transition-all duration-300 flex flex-col items-center justify-center text-center shadow-lg"> 
                            <Icon className="w-5 h-5 text-red-400 mb-0.5" /> 
                            <div className="text-gray-200 text-xs font-bold leading-tight line-clamp-3">{title}</div>
                            <div className="text-[11px] text-gray-400 mt-0.5">
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
