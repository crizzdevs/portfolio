import { motion } from "framer-motion";
import { Music, Palette, Utensils, Code, Zap, Coffee, Atom } from "lucide-react";
import { PixelCard } from "../PixelCard";

const interests = [
  {
    title: "Music",
    description: "Playing guitar to express creativity and focus through rhythm and melody.",
    icon: <Music className="w-6 h-6 text-accent" />,
  },
  {
    title: "Art",
    description: "Translating imagination into visuals that influence design and coding aesthetics.",
    icon: <Palette className="w-6 h-6 text-primary" />,
  },
  {
    title: "Food",
    description: "Exploring new cuisines as a way to appreciate culture and creativity in life.",
    icon: <Utensils className="w-6 h-6 text-secondary" />,
  },
];

const skills = [
  { name: "HTML", icon: <Code className="w-6 h-6 text-accent" />, color: "text-accent" },
  { name: "CSS", icon: <Palette className="w-6 h-6 text-primary" />, color: "text-primary" },
  { name: "JAVASCRIPT", icon: <Zap className="w-6 h-6 text-secondary" />, color: "text-secondary" },
  { name: "JAVA", icon: <Coffee className="w-6 h-6 text-accent" />, color: "text-accent" },
  { name: "REACT", icon: <Atom className="w-6 h-6 text-secondary" />, color: "text-secondary" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 text-white relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-blue-400 mb-2 tracking-wide">
            About
          </h2>
          <div className="h-1 w-16 bg-primary mx-auto rounded-full opacity-80" />
        </motion.div>

        <PixelCard variant="quest" className="mb-12 p-6 bg-neutral-900/60 border border-blue-900/40 rounded-2xl">
          <h3 className="text-xl font-semibold text-blue-300 mb-6 text-center">
            Interests
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {interests.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <PixelCard className="p-6 text-left bg-neutral-900/60 border border-blue-900/40 rounded-2xl hover:scale-105 hover:border-blue-400/70 transition-all duration-300">
                  <div className="flex items-center mb-3 space-x-3">
                    {item.icon}
                    <h4 className="text-xl font-semibold text-blue-300">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-gray-400 text-sm mt-2">
                    {item.description}
                  </p>
                </PixelCard>
              </motion.div>
            ))}
          </div>
        </PixelCard>

        <PixelCard variant="quest" className="p-6 bg-neutral-900/60 border border-blue-900/40 rounded-2xl">
          <h3 className="text-xl font-semibold text-blue-300 mb-6 text-center">
            Technical Skills
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <PixelCard
                  variant="quest"
                  className="p-6 text-center bg-neutral-900/60 border border-blue-900/40 rounded-2xl hover:scale-105 hover:border-blue-400/70 transition-all duration-300"
                >
                  <div className="flex items-center justify-center mb-2 space-x-3">
                    {skill.icon}
                  </div>
                  <div className={`text-sm font-medium ${skill.color}`}>
                    {skill.name}
                  </div>
                </PixelCard>
              </motion.div>
            ))}
          </div>
        </PixelCard>
      </div>
    </section>
  );
};
