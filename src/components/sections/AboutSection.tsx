import { PixelCard } from "../PixelCard";

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
        {/* Interests */}
        <PixelCard variant="quest" className="mb-12">
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

        {/* Technical Skills */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-6 text-center">
            Technical Skills
          </h3>

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
    </section>
  );
};
