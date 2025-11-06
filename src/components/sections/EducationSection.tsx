import { useEffect, useRef, useState } from "react";
import { PixelCard } from "../PixelCard";

const educationLevels = [
  {
    year: "2019",
    title: "Elementary School - Olango Elementary School",
    description: "Completed foundational education with strong academic performance",
    icon: "📖",
  },
  {
    year: "2023",
    title: "Junior High School - Mallig National High School",
    description: "Advanced to secondary education with strong academic performance",
    icon: "🔬",
  },
  {
    year: "2024",
    title: "Senior High School - Mallig National High School",
    description: "Humanities and Social Sciences Strand - Developed strong analytical, communication, and leadership skills through research and collaborative projects.",
    icon: "💻",
  },
  {
    year: "2025 - Present",
    title: "BS Computer Science - University of the Cordilleras",
    description: "University of the Cordilleras - Focusing on learning different types of Programming Languages",
    icon: "🎓",
  },
];

export const EducationSection = () => {
  const [visibleLevels, setVisibleLevels] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setVisibleLevels((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const levels = sectionRef.current?.querySelectorAll(".education-level");
    levels?.forEach((level) => observer.observe(level));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Education
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {educationLevels.map((level, index) => (
              <div
                key={index}
                data-index={index}
                className="education-level relative"
              >
                <div
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
                    <div
                      className={`w-10 h-10 bg-accent rounded-full flex items-center justify-center text-xl shadow-lg transition-all duration-500 ${
                        visibleLevels.includes(index)
                          ? "scale-100 opacity-100"
                          : "scale-0 opacity-0"
                      }`}
                    >
                      {level.icon}
                    </div>
                  </div>

                  {/* Content card */}
                  <div
                    className={`w-full md:w-[calc(50%-2rem)] transition-all duration-700 ${
                      visibleLevels.includes(index)
                        ? "translate-x-0 opacity-100"
                        : index % 2 === 0
                        ? "-translate-x-8 opacity-0"
                        : "translate-x-8 opacity-0"
                    }`}
                  >
                    <PixelCard variant="quest" className="hover:scale-105 transition-all">
                      <div className="flex items-start gap-4 md:hidden mb-4">
                        <div className="text-3xl">{level.icon}</div>
                      </div>
                      <div className="space-y-3">
                        <div className="text-accent text-sm font-semibold">
                          {level.year}
                        </div>
                        <h3 className="text-base sm:text-lg font-semibold text-foreground">
                          {level.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {level.description}
                        </p>
                      </div>
                      <div className="mt-4 flex items-center gap-3 text-xs">
                        <div className="h-2 flex-1 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-accent to-primary rounded-full transition-all duration-1000"
                            style={{
                              width: visibleLevels.includes(index) ? "100%" : "0%",
                            }}
                          />
                        </div>
                        <span className="text-accent font-medium">✓</span>
                      </div>
                    </PixelCard>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
