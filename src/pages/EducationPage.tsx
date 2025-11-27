import { motion } from "framer-motion";
import { ArrowLeft, GraduationCap, Award, BookOpen, School } from "lucide-react";
import { Link } from "react-router-dom";
import olangoImg from "@/assets/olango-elementary.jpg";
import malligJHS from "@/assets/mallig-jhs.png";
import malligSHS from "@/assets/mallig-jhs.png";
import ucImg from "@/assets/uc.jpg";

const GameNav = () => {
  const navItems = [
    { id: "home", label: "Home", to: "/#home" },
    { id: "education", label: "Education", to: "/education", isPage: true },
    { id: "achievements", label: "Achievements", to: "/achievements", isPage: true },
    { id: "myfamily", label: "MyFamily", to: "/myfamily", isPage: true },
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
    title: "Senior High School (HUMSS Strand)",
    institution: "Mallig National High School",
    description:
      "Developed strong analytical, communication, and leadership skills through research and collaborative projects - With Honors.",
    icon: GraduationCap,
    image: malligSHS,
  },
  {
    year: "2025 - In Progress",
    title: "Bachelor of Science in Computer Science",
    institution: "University of the Cordilleras",
    description:
      "Focusing on learning different types of Programming Languages",
    icon: Award,
    image: ucImg,
  },
];

export default function EducationPage() {
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left"> 
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
                    <PixelCard className="p-6 bg-muted/60 border border-border rounded-xl flex flex-col items-start justify-between text-center shadow-lg hover:scale-105 transition-all duration-300 h-full"> 
                      <div className="flex items-start justify-between gap-4 w-full">
                        <div className="flex-1">
                          <div className="flex items-center mb-3 space-x-3">
                            <Icon className="w-6 h-6 text-accent" />
                            <h4 className="text-lg font-semibold text-foreground text-left">
                              {item.title}
                            </h4>
                          </div>
                          <p className="text-sm text-muted-foreground text-left">{item.year}</p>
                          <p className="text-foreground font-medium text-left">{item.institution}</p>
                          <p className="text-muted-foreground text-sm mt-2 text-left">
                            {item.description}
                          </p>
                        </div>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-20 h-20 rounded-lg object-cover border border-border shrink-0"
                        />
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
