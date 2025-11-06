import { PixelCard } from "../PixelCard";
import pixelCharacter from "@/assets/pixel-character.png.png";

const skills = [
  { name: "HTML", icon: "⚡", color: "text-accent" },
  { name: "CSS", icon: "🎨", color: "text-primary" },
  { name: "JAVASCRIPT", icon: "⭐", color: "text-secondary" },
  { name: "JAVA", icon: "☕", color: "text-accent" },
  { name: "REACT", icon: "⚛️", color: "text-secondary" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        {/* Pixel Character directly under header */}
        <div className="flex justify-center items-center mb-12">
          <div className="relative">
            {/* Glowing border effect */}
            <div className="absolute inset-0 rounded-full border-4 border-primary blur-md opacity-50 animate-pulse"></div>

            {/* Profile image */}
            <img
              src={pixelCharacter}
              alt="Profile illustration of Cris Julian"
              className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full object-cover z-10 shadow-lg"
            />
        </div>
      </div>


        {/* About content */}
        <div className="max-w-4xl mx-auto space-y-8">
          <PixelCard variant="game">
            <div className="text-sm sm:text-base leading-relaxed space-y-4">
              <p className="text-lg font-semibold text-foreground">
                Hi, I'm <span className="text-primary">Cris Julian R. Abuan</span>
              </p>

              <p className="text-muted-foreground">
                I’m an <strong>18-year-old Computer Science student</strong> at the
                <strong className="text-accent"> University of the Cordilleras</strong>. My passion lies in
                <strong className="text-accent"> software development</strong>,
                <strong className="text-accent"> artificial intelligence</strong>,
                and <strong className="text-accent"> machine learning</strong>.
              </p>

              <p className="text-muted-foreground">
                I love exploring how technology and creativity can merge to build intelligent,
                human-centered solutions. My long-term goal is to create software that enhances
                productivity, learning, and accessibility for everyone.
              </p>
            </div>
          </PixelCard>

          {/* Interests */}
          <PixelCard variant="quest">
            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-6 text-center">
              Interests
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div className="hover:scale-105 transition-all">
                <div className="text-3xl mb-3 text-accent">🎸</div>
                <h4 className="text-foreground font-semibold text-lg">Music</h4>
                <p className="text-muted-foreground text-sm">
                  Playing guitar to express creativity and focus through rhythm and melody.
                </p>
              </div>

              <div className="hover:scale-105 transition-all">
                <div className="text-3xl mb-3 text-primary">🎨</div>
                <h4 className="text-foreground font-semibold text-lg">Art</h4>
                <p className="text-muted-foreground text-sm">
                  Translating imagination into visuals that influence design and coding aesthetics.
                </p>
              </div>

              <div className="hover:scale-105 transition-all">
                <div className="text-3xl mb-3 text-secondary">🍱</div>
                <h4 className="text-foreground font-semibold text-lg">Food</h4>
                <p className="text-muted-foreground text-sm">
                  Exploring new cuisines as a way to appreciate culture and creativity in life.
                </p>
              </div>
            </div>
          </PixelCard>

          {/* Skills */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-6 text-center">
              Technical Skills
            </h3>
            {/* Grid changed to horizontal flex */}
            <div className="flex flex-wrap justify-center gap-6">
              {skills.map((skill, index) => (
                <PixelCard
                  key={index}
                  variant="quest"
                  className="w-44 text-center hover:scale-105 transition-all cursor-pointer"
                >
                  <div className="text-3xl mb-2">{skill.icon}</div>
                  <div className={`text-sm font-medium ${skill.color}`}>
                    {skill.name}
                  </div>
                </PixelCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
