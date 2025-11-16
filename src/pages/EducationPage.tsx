import EducationSection from "@/components/sections/EducationSection";
import { GameNav } from "@/components/GameNav"; // Adjust the import path based on where GameNav is located

const EducationPage = () => (
  <main className="pt-16"> {/* Add padding-top to account for the fixed nav height */}
    <GameNav />
    <EducationSection />
  </main>
);

export default EducationPage;
