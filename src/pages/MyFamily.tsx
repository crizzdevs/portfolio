import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GameNav } from "@/components/GameNav";
import { PixelCard } from "@/components/PixelCard.tsx";

const GameNav = () => {
  const navItems = [
    { id: "home", label: "Home", to: "/#home" },
    { id: "about", label: "About", to: "/#about" },
    { id: "education", label: "Education", to: "/education", isPage: true },
    { id: "achievements", label: "Achievements", to: "/achievements", isPage: true },
  ];

  
