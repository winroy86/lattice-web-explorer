import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TheoryExplorer from "./pages/TheoryExplorer";
import TheoryLattice from "./pages/theory/Lattice";
import TheoryDiscreteTime from "./pages/theory/DiscreteTime";
import TheoryPhoton from "./pages/theory/Photon";
import TheoryElectron from "./pages/theory/Electron";
import TheoryGravity from "./pages/theory/Gravity";
import TheoryTestablePredictions from "./pages/theory/TestablePredictions";
import TheoryCMBPowerSpectrum from "./pages/theory/CMBPowerSpectrum";
import InteractiveLab from "./pages/InteractiveLab";
import Courses from "./pages/Courses";
import Publications from "./pages/Publications";
import Blog from "./pages/Blog";
import Community from "./pages/Community";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/theory" element={<TheoryExplorer />} />
          <Route path="/theory/lattice" element={<TheoryLattice />} />
          <Route path="/theory/discrete-time" element={<TheoryDiscreteTime />} />
          <Route path="/theory/photon" element={<TheoryPhoton />} />
          <Route path="/theory/electron" element={<TheoryElectron />} />
          <Route path="/theory/gravity" element={<TheoryGravity />} />
          <Route path="/theory/testable-predictions" element={<TheoryTestablePredictions />} />
          <Route path="/theory/cmb-power-spectrum" element={<TheoryCMBPowerSpectrum />} />
          <Route path="/lab" element={<InteractiveLab />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/community" element={<Community />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
