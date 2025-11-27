import { motion } from "framer-motion";
import { ArrowLeft, Users, Hammer, ChefHat, BookOpen } from "lucide-react"; 
import { Link } from "react-router-dom";
import { GameNav } from "@/components/GameNav";
import { PixelCard } from "@/components/PixelCard"; 
import motherImg from "@/assets/mother.png"; 
import fatherImg from "@/assets/father.png";
import brotherImg from "@/assets/sister.png";

const familyMembers = [
   {
      role: "My Mother",
      name: "Jenny R. Abuan",
      age: "52 years old",
      details: "Owner of 4Js Cakes and Delicacies. A passionate baker creating custom cakes and sweets.",
      icon: <ChefHat className="w-5 h-5 text-pink-500" />,
      image: motherImg,
    },
    {
      role: "My Father",
      name: "Arnolfo G. Abuan Jr.",
      age: "58 years old",
      details: "Self-employed Freelance Carpenter. Skilled in woodworking, construction, and custom builds.",
      icon: <Hammer className="w-5 h-5 text-orange-500" />,
      image: fatherImg,
    },
    {
      role: "My Sister",
      name: "Junabelle R. Abuan", 
      age: "20 years old",
      details: "3rd Year College at Mallig Plains Colleges. Bachelor of Secondary Education Major in English.",
      icon: <BookOpen className="w-5 h-5 text-blue-400" />,
      image: sisterImg,
    },
  ];

export default function FamilyPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <GameNav />
      
      {/* Floating Back Button */}
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

      <section id="myfamily" className="py-20 pt-24 text-foreground relative overflow-hidden min-h-screen flex flex-col justify-center">
        
        {/* Background Particles (Kept for the Vibe) */}
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

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          
          {/* Page Title */}
          <motion.h2
            className="text-4xl font-bold mb-16 text-primary flex items-center justify-center gap-3"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Users className="w-8 h-8 text-primary" fill="currentColor" /> 
            My Family
          </motion.h2>

          {/* Grid Layout: 1 col mobile, 3 cols desktop (Matches your image structure) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {familyMembers.map((member, index) => {
              const Icon = member.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered animation
                  viewport={{ once: true }}
                  className="h-full"
                >
                  <PixelCard className="h-full p-8 bg-card/80 border border-border rounded-2xl backdrop-blur-lg hover:border-primary/50 transition-colors duration-300">
                    <div className="flex flex-col items-center text-center space-y-4">
                      
                      {/* Circular Image Container */}
                      <div className="relative group">
                        <div className={`absolute inset-0 rounded-full blur-md opacity-50 bg-current ${member.color}`}></div>
                        <img 
                          src={member.image} 
                          alt={member.role} 
                          className="w-40 h-40 rounded-full object-cover border-4 border-white/10 relative z-10 shadow-xl group-hover:scale-105 transition-transform duration-300"
                        />
                        {/* Small floating icon badge */}
                        <div className="absolute bottom-2 right-2 z-20 bg-background p-2 rounded-full border border-border">
                          <Icon className={`w-5 h-5 ${member.color}`} />
                        </div>
                      </div>

                      {/* Text Content */}
                      <div className="pt-4 space-y-2">
                        <h3 className="text-2xl font-bold text-foreground">
                          {member.role}
                        </h3>
                        
                        <p className={`font-medium ${member.color}`}>
                          {member.name}
                        </p>
                        
                        <div className="w-12 h-1 bg-white/10 mx-auto my-3 rounded-full" />
                        
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {member.description}
                        </p>
                      </div>

                    </div>
                  </PixelCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
