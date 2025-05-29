
import { motion } from "framer-motion";
import { ChefHat, Flame } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with 3D effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-amber-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      {/* Floating smoke particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-32 h-32 bg-white/5 rounded-full blur-xl"
          animate={{
            y: [-20, -100, -20],
            x: [0, 30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            left: `${20 + i * 15}%`,
            top: `${60 + i * 5}%`,
          }}
        />
      ))}

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <ChefHat className="w-16 h-16 text-amber-400 mx-auto mb-4" />
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight"
          style={{
            textShadow: "0 0 30px rgba(245, 158, 11, 0.5)",
            background: "linear-gradient(45deg, #fff, #f59e0b, #fff)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Smoked Fusion
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xl md:text-2xl text-amber-100 mb-8 font-light"
        >
          Where tradition meets innovation in every smoke-kissed bite
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(245, 158, 11, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
          >
            Explore Our Menu
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-amber-400 text-amber-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-400 hover:text-black transition-all duration-300"
          >
            Our Story
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex justify-center"
        >
          <Flame className="w-8 h-8 text-orange-500 animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
