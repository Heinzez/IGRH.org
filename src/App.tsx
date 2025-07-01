import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageTransition } from "@/components/PageTransition";
import Index from "./pages/Index";
import About from "./pages/About";
import Work from "./pages/Work";
import Research from "./pages/Research";
import Resources from "./pages/Resources";
import News from "./pages/News";
import Mission from "./pages/Mission";
import Team from "./pages/Team";
import History from "./pages/History";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageTransition><Index /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/work" element={<PageTransition><Work /></PageTransition>} />
          <Route path="/research" element={<PageTransition><Research /></PageTransition>} />
          <Route path="/resources" element={<PageTransition><Resources /></PageTransition>} />
          <Route path="/news" element={<PageTransition><News /></PageTransition>} />
          <Route path="/mission" element={<PageTransition><Mission /></PageTransition>} />
          <Route path="/team" element={<PageTransition><Team /></PageTransition>} />
          <Route path="/history" element={<PageTransition><History /></PageTransition>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
