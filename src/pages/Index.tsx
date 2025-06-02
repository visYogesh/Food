
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import About from "../components/Catering";
import Menu from "../components/Menu";
import Legacy from "../components/Legacy";
import Contact from "../components/Contact";
import Navigation from "../components/Navigation";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50"
    >
      <Navigation />
      <Hero />
      <About />
      <Legacy />
      <Menu />
      <Contact />
    </motion.div>
  );
};

export default Index;
