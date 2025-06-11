import React, { useCallback, CSSProperties, useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import { useNavigate } from "react-router-dom";
import bg_img from "/images/blap.jpg"

interface HomePageProps {}

// Shared gradient/Text styles
const GRADIENT_STYLE: CSSProperties = {
  backgroundImage: "linear-gradient(110deg, #FFD54F, #FFF, #F59E0B, #FFF, #FFD54F)",
  backgroundSize: "200% auto",
  animation: "shine 8s linear infinite",
  textShadow: "0 0 40px rgba(245, 158, 11, 0.6)",
};

const GRADIENT_STYLE_TABLET: CSSProperties = {
  backgroundImage: "linear-gradient(110deg, #FFD54F, #FFF, #F59E0B, #FFF, #FFD54F)",
  backgroundSize: "200% auto",
  animation: "shine 8s linear infinite",
  textShadow: "0 0 40px rgba(245, 158, 11, 0.6)",
};

// Note: You must still have “@keyframes shine { … }” in your global CSS as before.

const MobileHeader = React.memo(({ onOrder, onStory }: { onOrder: () => void; onStory: () => void }) => (
  <div className="relative w-full h-screen md:hidden overflow-hidden">
    <Navigation />
    <video
      className="absolute inset-0 w-full h-full object-cover object-top"
      src="/images/sum_bur.mp4"
      autoPlay
      loop
      muted
      playsInline
    >
      Your browser does not support the video tag.
    </video>
    <div className="absolute inset-0 bg-black bg-opacity-50" />
    <div className="my-48 relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text"
        style={GRADIENT_STYLE}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        DALLAS
        <br />
        SMOKED FUSION
      </motion.h1>

      <div className="mt-12 flex space-x-6">
        <motion.button
          className="relative px-6 py-3 border border-white text-white font-semibold uppercase rounded-lg overflow-hidden group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          whileHover={{ scale: 1.1, rotate: -1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOrder}
        >
          <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition duration-300 rounded-lg blur-sm" />
          <span
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                       translate-x-[-100%] group-hover:animate-[shimmer_2s_linear_infinite] rounded-lg"
          />
          <span className="relative z-10 text-white group-hover:text-amber-400 tracking-wider">
            Order
          </span>
        </motion.button>

        <motion.button
          className="relative px-6 py-3 border border-white text-white font-semibold uppercase rounded-lg overflow-hidden group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}
          whileHover={{ scale: 1.1, rotate: 1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStory}
        >
          <span className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-10 transition duration-300 blur-md rounded-lg" />
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 animate-pulse blur-sm rounded-lg" />
          <span className="relative z-10 text-white group-hover:text-amber-400 tracking-wider">
            Story
          </span>
        </motion.button>
      </div>
    </div>
  </div>
));

const DesktopHeader = React.memo(({ onOrder, onStory }: { onOrder: () => void; onStory: () => void }) => (
  <div className="hidden md:block relative w-full h-screen overflow-hidden">
    <Navigation />

    {/* Lazy-load the image so it doesn’t block initial paint */}
    <img
      className="absolute inset-0 w-full h-full object-cover"
      src={bg_img}
      alt="Background"
      loading="lazy"
    />

    <div className="absolute inset-0 bg-black bg-opacity-30" />
    <div className="relative z-10 flex items-center justify-start w-full h-full">
      <div className="w-1/2 pl-16">
        <motion.h1
          className="py-20 font-bold uppercase text-7xl leading-tight text-left bg-clip-text text-transparent"
          style={GRADIENT_STYLE_TABLET}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          DALLAS
          <br />
          SMOKED FUSION
        </motion.h1>

        <div className="mt-12 flex space-x-6">
          <motion.button
            className="relative px-8 py-4 border text-white font-semibold uppercase rounded-lg overflow-hidden group transition duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
            whileHover={{ scale: 1.08, rotate: -1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOrder}
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition duration-300 blur-sm rounded-lg" />
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:animate-[slide_1.5s_linear_infinite] rounded-lg" />
            <span className="relative z-10 group-hover:text-amber-400 tracking-wide">
              Order
            </span>
          </motion.button>

          <motion.button
            className="relative px-8 py-4 bg-transparent border text-white font-semibold uppercase rounded-lg overflow-hidden group transition duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1.3 }}
            whileHover={{ scale: 1.08, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onStory}
          >
            <span className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-10 transition duration-300 blur-md rounded-lg" />
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 animate-pulse blur-sm rounded-lg" />
            <span className="relative z-10 group-hover:text-amber-300 tracking-wide">
              Story
            </span>
          </motion.button>
        </div>
      </div>
    </div>
  </div>
));

const HomePage: React.FC<HomePageProps> = () => {

   useEffect(() => {
    // Disable scroll
    document.body.style.overflow = 'hidden';

    // Re-enable scroll on cleanup
    return () => {
      document.body.style.overflow = '';
    };
  }, []);
  const navigate = useNavigate();

  const handleOrderClick = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  const handleStoryClick = useCallback(() => {
    navigate("/legacy");
  }, [navigate]);

  return (
    <>
      <MobileHeader onOrder={handleOrderClick} onStory={handleStoryClick} />
      <DesktopHeader onOrder={handleOrderClick} onStory={handleStoryClick} />
    </>
  );
};

export default React.memo(HomePage);
