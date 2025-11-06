import { PixelCard } from "../PixelCard";
import { PixelButton } from "../PixelButton";

const contactMethods = [
  {
    icon: "📧",
    label: "EMAIL",
    value: "abuancrisulian1206@gmail.com",
    link: "abuancrisjulian@gmail.com",
    color: "text-accent",
  },
  {
    icon: "💼",
    label: "LINKEDIN",
    value: "Cris Julian R. Abuan",
    link: "https://www.linkedin.com/in/cris-julian-abuan-a53a98385/",
    color: "text-primary",
  },
  {
    icon: "💻",
    label: "GITHUB",
    value: "/crizzdevs",
    link: "https://github.com/crizzdevs",
    color: "text-secondary",
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
          <p className="text-sm text-muted-foreground mt-4">
            Let's collaborate on something amazing
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <PixelCard variant="game" className="text-center">
            <div className="space-y-4">
              <div className="text-5xl mb-4">👋</div>
              <p className="text-base leading-relaxed max-w-2xl mx-auto text-muted-foreground">
                I'm always open to discussing new projects, creative ideas, or opportunities to contribute to innovative solutions. Feel free to reach out through any of the channels below!
              </p>
            </div>
          </PixelCard>

          <div className="grid sm:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <PixelCard
                  variant="quest"
                  className="text-center hover:scale-105 hover:shadow-lg transition-all cursor-pointer group"
                >
                  <div className="space-y-3">
                    <div className="text-4xl group-hover:scale-110 transition-transform">
                      {method.icon}
                    </div>
                    <div>
                      <div className={`text-sm font-semibold ${method.color} mb-1`}>
                        {method.label}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {method.value}
                      </div>
                    </div>
                  </div>
                </PixelCard>
              </a>
            ))}
          </div>

          <PixelCard variant="default">
            <div className="text-center space-y-6">
              <p className="text-base text-muted-foreground">
                Ready to connect?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <PixelButton variant="primary">
                  Send Message
                </PixelButton>
                <PixelButton variant="secondary">
                  Download CV
                </PixelButton>
              </div>
            </div>
          </PixelCard>
        </div>
      </div>
    </section>
  );
};
