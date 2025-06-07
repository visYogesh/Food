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
import Legacy from "./components/Legacy";
import Contact from "./components/Contact";
import NotFound from "./pages/NotFound";

// New pages
import MenuRegular from "./components/MenuRegular";
import MenuSpecial from "./components/MenuSpecial";
import Catering from "./components/Catering";
import FAQ from "./components/FAQ";
// import InfoPage from "./components/InfoPage";

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
          <Route path="/catering" element={<Catering />} />
          <Route path="/legacy" element={<Legacy />} />
          <Route path="/contact" element={<Contact />} />

          {/* FAQ page */}
          <Route path="/catering/faq" element={<FAQ />} />

          {/* Info page that toggles FAQ inline */}
          {/* <Route path="/info" element={<InfoPage />} /> */}

          {/* Redirect /menu → /menu/regular */}
          <Route
            path="/menu"
            element={<Navigate to="/menu/regular" replace />}
          />

          {/* Explicit submenu routes */}
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
