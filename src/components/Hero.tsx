import { motion, useScroll, useTransform } from "framer-motion";
import Navigation from "../components/Navigation";
import { ChefHat, Flame } from "lucide-react";
import { Link } from "react-router-dom";

const backgroundBlobs = Array.from({ length: 6 });

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const blobVariants = {
  animate: (i) => ({
    y: [20, -80, 20],
    x: [0, 40, 0],
    scale: [1, 1.3, 1],
    opacity: [0.4, 0.1, 0.4],
    transition: {
      duration: 8 + i * 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }),
};

const contentVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay,
      ease: "easeOut",
    },
  }),
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0px 10px 25px rgba(245, 158, 11, 0.3)",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  tap: { scale: 0.95, transition: { duration: 0.1 } },
};

const HomePage = () => {
  // Parallax effect for the heading
  const { scrollY } = useScroll();
  const yRange = useTransform(scrollY, [0, 300], [0, -50]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative w-full min-h-screen bg-gradient-to-br from-black via-gray-900 to-amber-900 overflow-hidden"
    >
      <Navigation />

      {/* Background Animated Blobs */}
      {backgroundBlobs.map((_, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={blobVariants}
          animate="animate"
          className="absolute w-48 h-48 bg-white/5 rounded-full blur-3xl"
          style={{
            left: `${15 + i * 14}%`,
            top: `${65 - i * 6}%`,
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-32 mx-auto max-w-5xl">
        {/* Chef Hat Icon */}
        <motion.div
          custom={0.2}
          variants={contentVariants}
          className="mb-6"
          style={{ y: yRange }}
        >
          <ChefHat className="w-20 h-20 text-amber-400 mx-auto animate-bounce" />
        </motion.div>

        {/* Main Heading */}

        <motion.div
          custom={0.4}
          variants={contentVariants}
          className="text-center"
        >
          <h1
            className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(110deg, #FFD54F, #FFF, #F59E0B, #FFF, #FFD54F)",
              backgroundSize: "200% auto",
              animation: "shine 8s linear infinite",
              textShadow: "0 0 40px rgba(245, 158, 11, 0.6)",
            }}
          >
            <div>DALLA'S</div>
            <div className="mt-2">SMOKED FUSION</div>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          custom={0.6}
          variants={contentVariants}
          className="mt-4 text-lg sm:text-xl md:text-2xl text-amber-100 font-light max-w-2xl"
        >
          Where tradition meets innovation in every smoke-kissed bite.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          custom={0.8}
          variants={contentVariants}
          className="mt-8 flex flex-col sm:flex-row gap-6"
        >
          <Link to="/menu">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300"
            >
              Our Menu
            </motion.button>
          </Link>

          <Link to="/about">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="border-2 border-amber-400 text-amber-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-amber-400 hover:text-black transition-all duration-300"
            >
              Our Story
            </motion.button>
          </Link>
        </motion.div>

        {/* Pulsing Flame Icon */}
        <motion.div custom={1} variants={contentVariants} className="mt-16">
          <Flame className="w-10 h-10 text-orange-500 animate-pulse" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HomePage;


