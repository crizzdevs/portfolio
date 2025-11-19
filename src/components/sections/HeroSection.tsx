import { TypingText } from "../TypingText";
import { PixelButton } from "../PixelButton";
import pixelCharacter from "@/assets/pixel-character.png.png";
import { NavLink } from "react-router-dom";

export const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Stars Background */}
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
              animation: `blink ${2 + Math.random() * 3}s infinite ${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* ================= LEFT SIDE ================= */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="text-accent text-sm font-medium mb-2">
                HEYYOOO! 👋
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                <TypingText text="Hi, I'm Cris!" speed={80} />
              </h1>

              <h2 className="text-lg sm:text-xl md:text-2xl text-primary font-semibold">
                Aspiring Software Developer
              </h2>

              {/* About */}
              <div className="text-sm sm:text-base text-muted-foreground space-y-4 max-w-lg leading-relaxed">
                <p>
                  I’m an <strong>18-year-old Computer Science student</strong> at the
                  <strong className="text-accent"> University of the Cordilleras</strong>. My passion lies in
                  <strong className="text-accent"> software development</strong>,
                  <strong className="text-accent"> artificial intelligence</strong>,
                  and <strong className="text-accent"> machine learning</strong>.
                </p>

                <p>
                  I love exploring how technology and creativity can merge to build intelligent,
                  human-centered solutions. My long-term goal is to create software that enhances
                  productivity, learning, and accessibility for everyone.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <PixelButton variant="accent">
                Get in Touch
              </PixelButton>

              <NavLink to="/education">
                <PixelButton variant="secondary">
                  View Education
                </PixelButton>
              </NavLink>

              <PixelButton variant="primary">
                Achievements
              </PixelButton>
            </div>
          </div>
          {/* <<<<<< THIS DIV WAS MISSING BEFORE */}

          {/* ================= RIGHT SIDE ================= */}
          <div className="flex flex-col items-center gap-6">
            <div className="relative">
              <div className="absolute inset-0 rounded-full border-4 border-primary blur-md opacity-50 animate-pulse"></div>
              <img
                src={pixelCharacter}
                alt="Profile illustration of Cris Julian"
                className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full object-cover z-10 shadow-lg"
              />
            </div>

            {/* Code Editor Box */}
            <div className="bg-[#1e1e1e] text-gray-200 border border-border rounded-xl shadow-2xl w-[360px] sm:w-[420px] md:w-[480px] p-5 font-mono relative overflow-hidden">
              <div className="flex gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
              </div>

              <pre className="text-sm leading-relaxed flex">
                <code className="select-none text-gray-500 pr-4 border-r border-gray-700">
{`1
2
3
4
5
6`}
                </code>

                <code className="pl-4">
                  <span className="text-purple-400">class</span>{" "}
                  <span className="text-blue-400">Student</span> {"{"}
                  {"\n    "}
                  <span className="text-green-400">String</span>{" "}
                  <span className="text-white">name</span> ={" "}
                  <span className="text-yellow-300">"Cris Julian R. Abuan"</span>;
                  {"\n    "}
                  <span className="text-green-400">int</span>{" "}
                  <span className="text-white">age</span> ={" "}
                  <span className="text-blue-300">18</span>;
                  {"\n    "}
                  <span className="text-green-400">String</span>{" "}
                  <span className="text-white">sex</span> ={" "}
                  <span className="text-yellow-300">"Male"</span>;
                  {"\n    "}
                  <span className="text-green-400">String</span>{" "}
                  <span className="text-white">dream</span> ={" "}
                  <span className="text-yellow-300">"To get RICH"</span>;
                  {"\n}"}
                </code>
              </pre>

              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-accent/10 to-secondary/10 blur-3xl pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
