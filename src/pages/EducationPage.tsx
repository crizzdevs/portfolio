import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, GraduationCap, Award, BookOpen, School } from "lucide-react";
import { Link } from "react-router-dom";
import olangoImg from "@/assets/olango-elementary.jpg";
import malligJHS from "@/assets/mallig-jhs.png";
import malligSHS from "@/assets/mallig-jhs.png";
import ucImg from "@/assets/uc.jpg";

const GameNav = () => {
  const navItems = [
    { id: "aboutme", label: "About Me", to: "/#aboutme" },
    { id: "education", label: "Education", to: "/education", isPage: true },
    { id: "achievements", label: "Achievements", to: "/achievements", isPage: true },
    { id: "myfamily", label: "MyFamily", to: "/myfamily", isPage: true },
    { id: "mybatchmates", label: "MyBatchmates", to: "/mybatchmates", isPage: true },
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
                  item.id === "education"
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

const education = [
  {
    year: "2018",
    title: "Elementary",
    institution: "Olango Elementary School",
    description:
      "Completed foundational education with strong academic performance - With Honors.",
    icon: School,
    image: olangoImg,
  },
  {
    year: "2023",
    title: "Junior High School",
    institution: "Mallig National High School",
    description:
      "Graduated with honors and actively participated in academic and extracurricular activities.",
    icon: BookOpen,
    image: malligJHS,
  },
  {
    year: "2025",
    title: "Senior High School",
    institution: "Mallig National High School",
    description:
      "Developed strong analytical, communication, and leadership skills through research and collaborative projects - With Honors.",
    icon: BookOpen,
    image: malligSHS,
  },
  {
    year: "2025 - In Progress",
    title: "College",
    institution: "University of the Cordilleras",
    description:
      "Bachelor of Science in Computer Science and currently focusing on learning different types of Programming Languages",
    icon: School,
    image: ucImg,
  },
];

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <GameNav />
      
      {/* Navigation Buttons */}
      <motion.div
        className="fixed bottom-4 right-4 z-40 flex gap-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          PREV
        </Link>
        <Link
          to="/achievements"
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
        >
          NEXT
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>

      <section id="education" className="py-20 pt-20 text-foreground relative overflow-hidden">
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
            <GraduationCap className="w-8 h-8 text-purple-500" fill="currentColor" /> 
            Education
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full mx-auto"
          >
            <div className="grid grid-cols-4 gap-4 text-left"> 
              {education.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.15 }}
                    viewport={{ once: true }}
                  >
                    <PixelCard className="p-8 bg-muted/60 border border-border rounded-xl flex flex-col items-center justify-between text-center shadow-lg hover:scale-105 transition-all duration-300 min-h-[300px] h-full"> 
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-32 h-32 rounded-lg object-cover border border-border mb-4"
                      />
                      <div className="flex-1 text-center">
                        <div className="flex items-center justify-center mb-3 space-x-3">
                          <Icon className="w-6 h-6 text-primary" />
                          <h4 className="text-xl font-semibold text-foreground">
                            {item.title}
                          </h4>
                        </div>
                        <p className="text-base text-muted-foreground">{item.year}</p>
                        <p className="text-foreground font-medium">{item.institution}</p>
                        <p className="text-muted-foreground text-base mt-2">
                          {item.description}
                        </p>
                      </div>
                    </PixelCard>
                  </motion.div>
                );
              })}
            </div>

          </motion.div>
        </div>
      </section>
    </div>
  );
}
