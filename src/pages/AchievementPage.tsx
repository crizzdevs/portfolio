import { motion } from "framer-motion";
import { ArrowLeft, GraduationCap, Trophy } from "lucide-react";
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
  "Champion - School Based Editorial Writing (2024-2025)",
  "Champion - Digital Poster Making (2024-2025)",
];

const extraCurricular = [
  "Pogi - Lagi (2006 - NOW)",
  "Masarap - Lagi (2006 - NOW)",
  "Cute - Lagi (2006 - NOW)",
  "Pogi - Lagi (2006 - NOW)",
  "Masarap - Lagi (2006 - NOW)",
  "Cute - Lagi (2006 - NOW)",
  "Pogi - Lagi (2006 - NOW)",
  "Masarap - Lagi (2006 - NOW)",
  "Cute - Lagi (2006 - NOW)",
  "Pogi - Lagi (2006 - NOW)",
  "Masarap - Lagi (2006 - NOW)",
  "Cute - Lagi (2006 - NOW)",
  "Pogi - Lagi (2006 - NOW)",
  "Masarap - Lagi (2006 - NOW)",
  "Cute - Lagi (2006 - NOW)",
];

const parseAchievement = (item) => {
  const match = item.match(/^(.+?)\s*\(([^)]+)\)$/);
  if (match) {
    return { title: match[1].trim(), year: match[2].trim() };
  }
  return { title: item, year: "" };
};

export default function AchievementPage() {
  return (
    <>
      <GameNav />
      
      <motion.div
        className="fixed bottom-4 right-4 z-40"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </motion.div>

      <section id="achievements" className="py-20 pt-28 text-white relative">
        <div className="container mx-auto text-center px-6">
          <motion.h2
            className="text-3xl font-bold mb-6 text-blue-400"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Achievements
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full mx-auto"
          >
            <PixelCard className="p-3 bg-neutral-900/60 border border-blue-900/40 rounded-2xl transition-all duration-300">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-blue-300 mb-2 flex items-center gap-2">
                    <GraduationCap className="w-6 h-6 text-purple-400"/>
                    Curricular
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-left">
                    {curricular.map((item, index) => {
                      const { title, year } = parseAchievement(item);
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.05 }}
                        >
                          <PixelCard className="w-full aspect-square p-2 bg-neutral-900/60 border border-blue-900/40 rounded-2xl hover:border-blue-400/70 transition-all duration-300 flex flex-col items-center justify-center text-center">
                            <GraduationCap className="w-8 h-8 text-purple-400 mb-1" />
                            <div className="text-gray-300 text-xs font-semibold">{title}</div>
                            <div className="text-xs text-gray-400">Year: {year}</div>
                          </PixelCard>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-blue-300 mb-2 flex items-center gap-2">
                    <Trophy className="w-6 h-6 text-purple-400" />
                    Extra Curricular
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-left">
                    {extraCurricular.map((item, index) => {
                      const { title, year } = parseAchievement(item);
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.05 }}
                        >
                          <PixelCard className="w-full aspect-square p-2 bg-neutral-900/60 border border-blue-900/40 rounded-2xl hover:border-blue-400/70 transition-all duration-300 flex flex-col items-center justify-center text-center">
                            <Trophy className="w-8 h-8 text-purple-400 mb-1" />
                            <div className="text-gray-300 text-xs font-semibold">{title}</div>
                            <div className="text-xs text-gray-400">Year: {year}</div>
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
    </>
  );
}
