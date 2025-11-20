import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { GameNav } from "@/components/GameNav";
import { PixelCard } from "@/components/PixelCard.tsx";

const curricular = [
  "Ubbing iti Mallig - Internal Secretary (2023-2025)",
  "Editor in Chief - The Mega Flash (2023-2024)",
  "Barkada Kontra Bisyo - President (2024-2025)",
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
            className="text-4xl font-bold mb-12 text-blue-400"
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
            className="max-w-6xl mx-auto"
          >
            <PixelCard className="p-8 bg-neutral-900/60 border border-blue-900/40 rounded-2xl transition-all duration-300">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-blue-300 mb-6">Curricular</h3>
                  <div className="flex flex-wrap gap-2 text-left">
                    {curricular.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="text-gray-300 text-lg bg-neutral-800 p-2 rounded"
                      >
                        - {item}
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-blue-300 mb-6">Extra Curricular</h3>
                  <div className="flex flex-wrap gap-2 text-left">
                    {extraCurricular.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="text-gray-300 text-lg bg-neutral-800 p-2 rounded"
                      >
                        - {item}
                      </motion.div>
                    ))}
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
