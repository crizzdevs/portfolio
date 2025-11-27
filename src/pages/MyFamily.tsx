import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GameNav } from "@/components/GameNav";
import { PixelCard } from "@/components/PixelCard.tsx";
import { ArrowLeft, ChefHat, Hammer, BookOpen, Users } from "lucide-react";


const GameNav = () => {
  const navItems = [
    { id: "home", label: "Home", to: "/#home" },
    { id: "about", label: "About", to: "/#about" },
    { id: "education", label: "Education", to: "/education", isPage: true },
    { id: "achievements", label: "Achievements", to: "/achievements", isPage: true },
    { id: "myfamily", label: "MyFamily", to: "/myfamily", isPage: true },
  ];

export default function MyFamily() {
  const familyMembers = [
    {
      role: "My Mother",
      name: "Jenny R. Abuan",
      age: "51 years old",
      details: "Owner of 4J's Cakes and Delicacies. A passionate baker creating custom cakes and sweets.",
      icon: <Heart className="w-5 h-5 text-pink-500" />,
      image: motherImg,
    },
    {
      role: "My Father",
      name: "Arnolfo G. Abuan Jr.",
      age: "58 years old",
      details: "Self-employed Freelance Carpenter. Skilled in woodworking, construction, and custom builds.",
      icon: <Briefcase className="w-5 h-5 text-blue-500" />,
      image: fatherImg,
    },
    {
      role: "My Sibling",
      name: "Junabelle R. Abuan",
      age: "20 years old",
      details: "3rd Year College at Mallig Plains Colleges. Bachelor of Secondary Education Major in English.",
      icon: <GraduationCap className="w-5 h-5 text-yellow-500" />,
      image: brotherImg,
    },
  ];

  return (
    <>
      {/* Fixed Back to Home Button in Bottom Right */}
      <motion.div
        className="fixed bottom-4 right-4 z-40"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </motion.div>

      <section id="family" className="py-20 text-white relative min-h-screen flex items-center">
        <div className="container mx-auto text-center px-6">
          <motion.div
             initial={{ opacity: 0, y: -20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="mb-12"
          >
            <div className="flex justify-center mb-4">
                <Users className="w-12 h-12 text-blue-400" />
            </div>
            <h2 className="text-4xl font-bold text-blue-400">
                My Family
            </h2>
          </motion.div>

          {/* Grid Layout: 1 col mobile, 3 cols desktop to fit Mother, Father, Brother */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {familyMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="h-full"
              >
                <PixelCard className="h-full p-8 bg-neutral-900/60 border border-blue-900/40 rounded-2xl hover:scale-105 hover:border-blue-400/70 transition-all duration-300 flex flex-col items-center text-center group">
                  
                  {/* Circular Image Container with Glow */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="relative w-32 h-32 rounded-full object-cover border-4 border-blue-900/50 group-hover:border-blue-400 transition-colors duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-neutral-900 p-2 rounded-full border border-blue-900/50">
                        {member.icon}
                    </div>
                  </div>

                  {/* Text Content */}
                  <h3 className="text-2xl font-bold text-blue-300 mb-1">
                    {member.role}
                  </h3>
                  <p className="text-lg text-white font-medium mb-3">
                    {member.name}
                  </p>
                  
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-900/50 to-transparent my-4"></div>
                  
                  <p className="text-sm text-gray-400 mb-2">
                    {member.age}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {member.details}
                  </p>

                </PixelCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
