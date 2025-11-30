import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Users, Hammer, ChefHat, BookOpen } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { GameNav } from "@/components/GameNav";
import { PixelCard } from "@/components/PixelCard.tsx";
import motherImg from "@/assets/mother.png"; 
import fatherImg from "@/assets/father.png";
import sisterImg from "@/assets/sister.png";

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

const PixelCard = ({ children, className }) => (
  <div className={`p-1 border-2 border-white/10 shadow-2xl ${className}`}>
    {children}
  </div>
);

const familyMembers = [
  {
    role: "My Mother",
    name: "Jenny R. Abuan",
    age: "52 years old",
    details: "Owner of 4Js Cakes and Delicacies. A passionate baker creating custom cakes and sweets. Thank you for your sacrifices Mama!",
    icon: ChefHat,
    color: "text-pink-500",
    image: motherImg,
  },
  {
    role: "My Father",
    name: "Arnolfo G. Abuan Jr.",
    age: "58 years old",
    details: "Self-employed Freelance Carpenter. Skilled in woodworking, construction, and custom builds. Thanks for guiding me.",
    icon: Hammer,
    color: "text-orange-500",
    image: fatherImg,
  },
  {
    role: "My Sister",
    name: "Junabelle R. Abuan", 
    age: "20 years old",
    details: "3rd Year College at Mallig Plains Colleges. Bachelor of Secondary Education Major in English. Thank you for being my 24/7 kaaway!",
    icon: BookOpen,
    color: "text-blue-400",
    image: sisterImg,
  },
];

export default function FamilyPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <GameNav />
      
      {/* Prev Button */}
      <motion.div
        className="fixed bottom-4 left-4 z-40"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Link
          to="/achievements"
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          PREV
        </Link>
      </motion.div>

      {/* Next Button */}
      <motion.div
        className="fixed bottom-4 right-4 z-40"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Link
          to="/mybatchmates"
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
        >
          NEXT
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>

      <section id="myfamily" className="py-20 pt-20 text-foreground relative overflow-hidden">
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
            <Users className="w-8 h-8 text-purple-500" fill="currentColor" /> 
            My Family
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full mx-auto"
          >
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {familyMembers.map((member, index) => {
                const Icon = member.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="h-full"
                  >
                    <PixelCard className="h-full p-8 bg-card/80 border border-border rounded-2xl backdrop-blur-lg hover:border-primary/50 transition-colors duration-300">
                      <div className="flex flex-col items-center text-center space-y-4">
                        
                        <div className="relative group border-2 border-white/10 rounded-xl p-2">
                          <div className={`absolute inset-0 rounded-xl blur-md opacity-50 bg-current ${member.color}`}></div>
                          <img 
                            src={member.image} 
                            alt={member.role} 
                            className="w-52 h-52 rounded-xl object-cover border-4 border-white/10 relative z-10 shadow-xl group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute bottom-2 right-2 z-20 bg-background p-2 rounded-full border border-border">
                            <Icon className={`w-5 h-5 ${member.color}`} />
                          </div>
                        </div>

                        <div className="pt-4 space-y-2">
                          <h3 className="text-3xl font-bold text-foreground">
                            {member.role}
                          </h3>
                          
                          <p className={`font-medium text-lg ${member.color}`}>
                            {member.name}
                          </p>

                          <p className="text-muted-foreground text-base">
                            {member.age}
                          </p>
                          
                          <div className="w-12 h-1 bg-white/10 mx-auto my-3 rounded-full" />
                          
                          <p className="text-muted-foreground text-base leading-relaxed">
                            {member.details}
                          </p>
                        </div>

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
