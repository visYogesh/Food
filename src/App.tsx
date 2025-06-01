// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

// pages/components
import Home from "./components/Hero";
import About from "./components/About";
import Legacy from "./components/Legacy";
import Contact from "./components/Contact";
import NotFound from "./pages/NotFound";

// New: split Menu into two subpages
import MenuRegular from "./components/MenuRegular";
import MenuSpecial from "./components/MenuSpecial";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Top‐level pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/legacy" element={<Legacy />} />
          <Route path="/contact" element={<Contact />} />

          {/* Redirect /menu → /menu/regular */}
          <Route
            path="/menu"
            element={<Navigate to="/menu/regular" replace />}
          />

          {/* Now explicitly render the two submenu routes */}
          <Route path="/menu/regular" element={<MenuRegular />} />
          <Route path="/menu/special" element={<MenuSpecial />} />

          {/* Catch‐all 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
