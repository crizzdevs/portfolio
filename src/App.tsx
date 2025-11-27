import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
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

const App = () => {
  const [disableScroll] = useState(true); // Always disabled

  useEffect(() => {
    const preventScroll = (e: Event) => {
      e.preventDefault();
    };

    if (disableScroll) {
      document.body.style.overflow = 'hidden'; // CSS fallback
      document.addEventListener('wheel', preventScroll, { passive: false });
      document.addEventListener('touchmove', preventScroll, { passive: false });
      document.addEventListener('keydown', (e: KeyboardEvent) => {
        if (['ArrowUp', 'ArrowDown', 'Space'].includes(e.code)) {
          e.preventDefault();
        }
      });
    } else {
      document.body.style.overflow = ''; // Restore (won't trigger since always true)
      document.removeEventListener('wheel', preventScroll);
      document.removeEventListener('touchmove', preventScroll);
      document.removeEventListener('keydown', (e: KeyboardEvent) => {
        if (['ArrowUp', 'ArrowDown', 'Space'].includes(e.code)) {
          e.preventDefault();
        }
      });
    }

    return () => {
      // Cleanup on unmount (resets scroll if component unmounts)
      document.body.style.overflow = '';
      document.removeEventListener('wheel', preventScroll);
      document.removeEventListener('touchmove', preventScroll);
      document.removeEventListener('keydown', (e: KeyboardEvent) => {
        if (['ArrowUp', 'ArrowDown', 'Space'].includes(e.code)) {
          e.preventDefault();
        }
      });
    };
  }, [disableScroll]);

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
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
