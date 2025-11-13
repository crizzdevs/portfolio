import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award, School } from "lucide-react";
import { PixelCard } from "@/components/ui/pixel-card";

export default function EducationSection() {
  const education = [
    {
      year: "2024 - Present",
      title: "Senior High School (STEM Strand)",
      institution: "Mallig National High School",
      description:
        "Currently pursuing STEM track with a focus on science and research-based learning.",
      icon: <School className="w-6 h-6 text-blue-500" />,
    },
    {
      year: "2020 - 2024",
      title: "Junior High School",
      institution: "Mallig National High School",
      description:
        "Graduated with honors and actively participated in academic and extracurricular activities.",
      icon: <BookOpen className="w-6 h-6 text-green-500" />,
    },
    {
      year: "2014 - 2020",
      title: "Elementary",
      institution: "Mallig Central Elementary School",
      description:
        "Built strong academic foundations and developed teamwork and communication skills.",
      icon: <GraduationCap className="w-6 h-6 text-purple-500" />,
    },
    {
      year: "Achievements",
      title: "Awards & Recognition",
      institution: "",
      description:
        "Recipient of multiple academic awards and recognized for leadership and discipline.",
      icon: <Award className="w-6 h-6 text-yellow-500" />,
    },
  ];

  return (
    <section id="education" className="py-20 bg-neutral-950 text-white relative">
      <div className="container mx-auto text-center px-6">
        <motion.h2
          className="text-4xl font-bold mb-12 text-blue-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>

        {/* Compact Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <PixelCard className="p-6 text-left bg-neutral-900/60 border border-blue-900/40 rounded-2xl hover:scale-105 hover:border-blue-400/70 transition-all duration-300">
                <div className="flex items-center mb-3 space-x-3">
                  {item.icon}
                  <h3 className="text-xl font-semibold text-blue-300">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-400">{item.year}</p>
                <p className="text-gray-300 font-medium">
                  {item.institution}
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  {item.description}
                </p>
              </PixelCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
