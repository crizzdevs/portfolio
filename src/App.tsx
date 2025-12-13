import React from "react";
import ReactDOM from "react-dom/client"; // use react-dom/client for React 18+
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EducationPage from "@/pages/EducationPage";
import AchievementPage from "@/pages/AchievementPage";
import MyFamily from "@/pages/MyFamily";
import MyBatchmates from "@/pages/MyBatchmates";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import "./index.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/achievements" element={<AchievementPage />} />
            <Route path="/myfamily" element={<MyFamily />} />
            <Route path="/mybatchmates" element={<MyBatchmates />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

// Mount the App to the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
