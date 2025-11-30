import { motion } from "framer-motion";
import { ArrowLeft, Users, Camera } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import TiltedCard from "@/components/TiltedCard";
import { PixelCard } from "@/components/PixelCard.tsx"; // Added import for PixelCard
import classPic from "@/assets/class-picture.jpg";

const GameNav = () => {
  const location = useLocation();
  const navItems = [
    { id: "home", label: "Home", to: "/#home" },
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
            {navItems.map((item) => {
              const isActive = item.isPage ? location.pathname === item.to : location.pathname === "/" && item.id === "home";
              return (
                <Link
                  key={item.id}
                  to={item.to}
                  className={`px-3 sm:px-4 py-2 text-sm font-medium rounded-md transition-all ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

// Complete list of 40 names
const batchmates = [
  "ABDULKADER, FAISAL", "ABEN, ZEIUS", "ABUAN, CRIS JULIAN", "AGALED, EDEZIE",
  "ALAY-AY, PAUL RAYVER", "ALCUIZAR, JUSTIN", "ANAYDOS, CHEZEN", "ANTONIO, BLAS SEBASTIAN",
  "ANTONIO, HART HENDRICKS", "ASPILAN, JOCHRISSE", "BAYAWA, SARRICK MAE", "BUGNOSEN, JEMIMAH",
  "CALIMQUIM, MARIANNE ALEXEI", "DONATO, TOM IRIC", "DURANTE, JACOB", "FAJARDO, KATHRYN BEYONCE",
  "FAJARDO, KATHRYZ BEYONCE", "FLORES, MARY ANGELYN", "GAPASIN, KEN CADE", "GONZALES, MHARVINNE LOUISSE",
  "GUALDO, ROJAN JULES", "GUERRERO, DEWEY", "KERYAO, GRACE", "LORILLA, RONALD",
  "LOZANO, KYRO CHRISTOPHER", "MAHILUM, DHELLMAR", "MENDOZA, JUSTINE KHURT", "NAPENAS, LEA",
  "OBONGEN, GIAN CARLO", "PAGNAS, XHIRO CHIYAM", "PATIAG, JARED JANWEL", "POCLING, TRICIA",
  "RAMOS, PRINCESS REIGN", "RODRIGUEZ, HARVEY", "RODRIGUEZ, SEAN VINCENT", "SANTOS, KENT SER FRANCIS",
  "SEVILLA, RONNEL", "SILIN, CLARK JONATHAN", "UGADDAN, SHAQUIL HANZ", "VICENTE, EDISON"
];

export default function BatchmatesPage() {
  // Split the list into two halves for Left and Right sides
  const halfIndex = Math.ceil(batchmates.length / 2);
  const leftSideNames = batchmates.slice(0, halfIndex);
  const rightSideNames = batchmates.slice(halfIndex);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.03 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

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
          to="/myfamily"
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          PREV
        </Link>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </motion.div>

      <section id="batchmates" className="py-20 pt-24 text-foreground relative overflow-hidden flex flex-col items-center justify-center min-h-[80vh]">
        {/* Background Particles */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
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

        <div className="container mx-auto px-4 max-w-[1400px] relative z-10">
          
          <motion.h2
            className="text-4xl font-bold mb-16 text-primary flex items-center justify-center gap-3"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Users className="w-8 h-8 text-purple-500" fill="currentColor" /> 
            My Batchmates
          </motion.h2>

          {/* MAIN LAYOUT: Left Grid - Image - Right Grid */}
          <div className="flex flex-col xl:flex-row items-center justify-center gap-8 xl:gap-16">
            
            {/* --- LEFT SIDE NAMES (First 2 Columns) --- */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-x-10 gap-y-4 text-left order-2 xl:order-1 w-full xl:w-auto"
            >
              {leftSideNames.map((name, index) => (
                <motion.div
                  key={`left-${index}`}
                  variants={itemVariants}
                >
                  <PixelCard className="p-2 bg-muted/60 border border-border rounded-lg flex items-center justify-center text-center shadow-lg hover:scale-105 hover:border-primary/50 transition-all duration-300 w-fit h-fit">
                    <div className="text-foreground text-[12px] font-bold leading-tight uppercase tracking-wide whitespace-nowrap">
                      {name}
                    </div>
                  </PixelCard>
                </motion.div>
              ))}
            </motion.div>

            {/* --- CENTER IMAGE (Tilted Card) --- */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="order-1 xl:order-2 shrink-0 z-20 flex justify-center py-10 xl:py-0"
            >
              <TiltedCard
                imageSrc={classPic}
                altText="Class of 2025"
                captionText="Batch 2025 - University of the Cordilleras"
                containerHeight="400px"
                containerWidth="600px"
                imageHeight="400px"
                imageWidth="600px"
                rotateAmplitude={12}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <>
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-2 pointer-events-none">
                       <Camera className="w-3 h-3 text-accent" />
                      <span className="text-[10px] text-white font-mono">CITCS 1C - A</span>
                    </div>
                  </>
                }
              />
            </motion.div>

            {/* --- RIGHT SIDE NAMES (Next 2 Columns) --- */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-x-10 gap-y-4 text-left order-3 w-full xl:w-auto"
            >
              {rightSideNames.map((name, index) => (
                <motion.div
                  key={`right-${index}`}
                  variants={itemVariants}
                >
                  <PixelCard className="p-2 bg-muted/60 border border-border rounded-lg flex items-center justify-center text-center shadow-lg hover:scale-105 hover:border-primary/50 transition-all duration-300 w-fit h-fit">
                    <div className="text-foreground text-[12px] font-bold leading-tight uppercase tracking-wide whitespace-nowrap">
                      {name}
                    </div>
                  </PixelCard>
                </motion.div>
              ))}
            </motion.div>

          </div>

        </div>
      </section>
    </div>
  );
}
