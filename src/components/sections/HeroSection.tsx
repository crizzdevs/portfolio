import { TypingText } from "../TypingText";
import { PixelButton } from "../PixelButton";

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
              <div className="text-sm sm:text-base text-muted-foreground space-y-2 max-w-lg leading-relaxed">
                <p>
                  Passionate in building intelligent systems that solve
                  real-world problems
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <PixelButton variant="primary" onClick={scrollToProjects}>
                View Projects
              </PixelButton>
              <PixelButton variant="accent">Get in Touch</PixelButton>
            </div>

            {/* Stats */}
            <div className="space-y-4 mt-8 max-w-md">
              <div>
                <div className="flex justify-between text-sm mb-2 font-medium">
                  <span className="text-foreground">Technical Skills</span>
                  <span className="text-accent">69%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full transition-all duration-1000"
                    style={{ width: "69%" }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2 font-medium">
                  <span className="text-foreground">Experience</span>
                  <span className="text-primary">49%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-1000"
                    style={{ width: "49%" }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2 font-medium">
                  <span className="text-foreground">Problem Solving</span>
                  <span className="text-secondary">80%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-secondary rounded-full transition-all duration-1000"
                    style={{ width: "80%" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE (CODE EDITOR) ================= */}
          <div className="flex justify-center md:justify-end">
            <div className="bg-[#1e1e1e] text-gray-200 border border-border rounded-xl shadow-2xl w-[520px] p-5 font-mono relative overflow-hidden">
              {/* Top bar (dots) */}
              <div className="flex gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
              </div>

              {/* Code content */}
              <pre className="text-sm leading-relaxed flex">
                {/* Line Numbers */}
                <code className="select-none text-gray-500 pr-4 border-r border-gray-700">
{`1
2
3
4
5
6`}
                </code>

                {/* Syntax Highlighted Java Code */}
                <code className="pl-4">
                  <span className="text-purple-400">class</span>{" "}
                  <span className="text-blue-400">Student</span> {"{"}
                  {"\n"}
                  {"    "}
                  <span className="text-green-400">String</span>{" "}
                  <span className="text-white">name</span> ={" "}
                  <span className="text-yellow-300">
                    "Cris Julian R. Abuan"
                  </span>
                  ;{"\n"}
                  {"    "}
                  <span className="text-green-400">int</span>{" "}
                  <span className="text-white">age</span> ={" "}
                  <span className="text-blue-300">18</span>;{"\n"}
                  {"    "}
                  <span className="text-green-400">String</span>{" "}
                  <span className="text-white">sex</span> ={" "}
                  <span className="text-yellow-300">"Male"</span>;{"\n"}
                  {"    "}
                  <span className="text-green-400">String</span>{" "}
                  <span className="text-white">dream</span> ={" "}
                  <span className="text-yellow-300">"To get RICH"</span>;{"\n"}
                  {"}"}
                </code>
              </pre>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-accent/10 to-secondary/10 blur-3xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
