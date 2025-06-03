// import { motion, useScroll, useTransform } from "framer-motion";
// import Navigation from "../components/Navigation";
// import { ChefHat, Flame } from "lucide-react";
// import { Link } from "react-router-dom";

// const backgroundBlobs = Array.from({ length: 6 });

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// const blobVariants = {
//   animate: (i) => ({
//     y: [20, -80, 20],
//     x: [0, 40, 0],
//     scale: [1, 1.3, 1],
//     opacity: [0.4, 0.1, 0.4],
//     transition: {
//       duration: 8 + i * 1.5,
//       repeat: Infinity,
//       ease: "easeInOut",
//     },
//   }),
// };

// const contentVariants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (delay = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 1,
//       delay,
//       ease: "easeOut",
//     },
//   }),
// };

// const buttonVariants = {
//   hover: {
//     scale: 1.05,
//     boxShadow: "0px 10px 25px rgba(245, 158, 11, 0.3)",
//     transition: { duration: 0.3, ease: "easeInOut" },
//   },
//   tap: { scale: 0.95, transition: { duration: 0.1 } },
// };

// const HomePage = () => {
//   const { scrollY } = useScroll();
//   const yRange = useTransform(scrollY, [0, 300], [0, -50]);

//   return (
//     <motion.div
//       initial="hidden"
//       animate="visible"
//       variants={containerVariants}
//       className="
//         relative
//         w-full
//         min-h-screen                    /* Always at least one viewport tall */
//         bg-gradient-to-br
//           from-black
//           via-gray-900
//           to-amber-900
//         overflow-x-hidden
//       "
//     >
//       {/* BACKGROUND BLOBS */}
//       {backgroundBlobs.map((_, i) => (
//         <motion.div
//           key={i}
//           custom={i}
//           variants={blobVariants}
//           animate="animate"
//           className="
//             absolute
//             w-48 h-48
//             bg-white/5
//             rounded-full
//             blur-3xl
//           "
//           style={{
//             left: `${15 + i * 14}%`,
//             top: `${65 - i * 6}%`,
//           }}
//         />
//       ))}

//       {/* HERO SECTION */}
//       <div className="flex flex-col min-h-screen">
//         {/* Top Navigation */}
//         <Navigation />

//         {/* Centered Content */}
//         <div
//           className="
//             flex-grow
//             flex flex-col justify-center items-center
//             px-4 sm:px-6 md:px-8
//             text-center
//           "
//         >
//           {/* Chef Hat Icon (pulled down just enough) */}
//           <motion.div
//             custom={0.2}
//             variants={contentVariants}
//             style={{ y: yRange }}
//             className="mt-8 sm:mt-12"
//           >
//             <ChefHat className="w-16 h-16 sm:w-20 sm:h-20 text-amber-400 animate-bounce" />
//           </motion.div>

//           {/* Main Heading */}
//           <motion.div
//             custom={0.4}
//             variants={contentVariants}
//             className="mt-4 sm:mt-6 max-w-md sm:max-w-lg md:max-w-5xl"
//           >
//             <h1
//               className="
//                 text-4xl sm:text-6xl md:text-7xl lg:text-8xl
//                 font-extrabold
//                 tracking-tight
//                 bg-clip-text text-transparent
//                  py-8 md:py-0
//               "
//               style={{
//                 backgroundImage:
//                   "linear-gradient(110deg, #FFD54F, #FFF, #F59E0B, #FFF, #FFD54F)",
//                 backgroundSize: "200% auto",
//                 animation: "shine 8s linear infinite",
//                 textShadow: "0 0 40px rgba(245, 158, 11, 0.6)",
//               }}
//             >
//               <div>DALLA&apos;S</div>
//               <div className="mt-2">SMOKED FUSION</div>
//             </h1>
//           </motion.div>

//           {/* Subheading */}
//           <motion.p
//             custom={0.6}
//             variants={contentVariants}
//             className="
//               mt-4 sm:mt-6
//               text-base sm:text-lg md:text-xl
//               text-amber-100 font-light
//               max-w-md sm:max-w-lg md:max-w-2xl
//             "
//           >
//             Where tradition meets innovation in every smoke-kissed bite.
//           </motion.p>

//           {/* Action Buttons */}
//           <motion.div
//             custom={0.8}
//             variants={contentVariants}
//             className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 "
//           >
//             <Link to="/menu">
//               <motion.button
//                 variants={buttonVariants}
//                 whileHover="hover"
//                 whileTap="tap"
//                 className="

//                   bg-gradient-to-r from-amber-600 to-orange-600
//                   text-white
//                   px-6 py-3 sm:px-8 sm:py-4
//                   rounded-xl
//                   font-semibold
//                   text-sm sm:text-lg
//                   shadow-lg
//                   transition-all duration-300
//                 "
//               >
//                 Our Menu
//               </motion.button>
//             </Link>

//             <Link to="/about">
//               <motion.button
//                 variants={buttonVariants}
//                 whileHover="hover"
//                 whileTap="tap"
//                 className="
//                   border-2 border-amber-400
//                   text-amber-400
//                   px-6 py-3 sm:px-8 sm:py-4
//                   rounded-xl
//                   font-semibold
//                   text-sm sm:text-lg
//                   hover:bg-amber-400 hover:text-black
//                   transition-all duration-300
//                 "
//               >
//                 Our Story
//               </motion.button>
//             </Link>
//           </motion.div>
//         </div>

//         {/* Bottom Flame Icon (no extra padding pushing page lower) */}
//         <motion.div
//           custom={1}
//           variants={contentVariants}
//           className="flex justify-center mb-8"
//         >
//           <Flame className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500 animate-pulse" />
//         </motion.div>
//       </div>

//       {/*
//         ====== PLACE ADDITIONAL CONTENT BELOW THIS DIV ======
//         If you add new sections here, they will appear directly after the hero and make the page scrollable.
//         If you leave this area empty, there’s no extra whitespace—just the gradient filling the viewport.
//       */}

//         {/* <div className="bg-current py-16">
//           <div className="mx-auto max-w-4xl px-6">
//             <div className="rounded-lg shadow-lg p-8">
//               <h2 className="text-2xl font-bold text-gray-800 mb-4">Additional Section</h2>
//               <p className="text-gray-700">DALLA's</p>
//             </div>
//           </div>
//         </div> */}

//     </motion.div>
//   );
// };

// export default HomePage;

// import { motion, useScroll, useTransform } from "framer-motion";
// import Navigation from "../components/Navigation";
// import { ChefHat, Flame } from "lucide-react";
// import { Link } from "react-router-dom";

// const backgroundBlobs = Array.from({ length: 6 });

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// const blobVariants = {
//   animate: (i) => ({
//     y: [20, -80, 20],
//     x: [0, 40, 0],
//     scale: [1, 1.3, 1],
//     opacity: [0.4, 0.1, 0.4],
//     transition: {
//       duration: 8 + i * 1.5,
//       repeat: Infinity,
//       ease: "easeInOut",
//     },
//   }),
// };

// const contentVariants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (delay = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 1,
//       delay,
//       ease: "easeOut",
//     },
//   }),
// };

// const buttonVariants = {
//   hover: {
//     scale: 1.05,
//     boxShadow: "0px 10px 25px rgba(245, 158, 11, 0.3)",
//     transition: { duration: 0.3, ease: "easeInOut" },
//   },
//   tap: { scale: 0.95, transition: { duration: 0.1 } },
// };

// const HomePage = () => {
//   // Parallax effect for the heading
//   const { scrollY } = useScroll();
//   const yRange = useTransform(scrollY, [0, 300], [0, -50]);

//   return (
//     <motion.div
//       initial="hidden"
//       animate="visible"
//       variants={containerVariants}
//       className="relative w-full min-h-screen bg-gradient-to-br from-black via-gray-900 to-amber-900 overflow-hidden"
//     >
//       <Navigation />

//       {/* Background Animated Blobs */}
//       {backgroundBlobs.map((_, i) => (
//         <motion.div
//           key={i}
//           custom={i}
//           // variants={blobVariants}
//           animate="animate"
//           className="absolute w-48 h-48 bg-white/5 rounded-full blur-3xl"
//           style={{
//             left: `${15 + i * 14}%`,
//             top: `${65 - i * 6}%`,
//           }}
//         />
//       ))}

//       {/* Main Content */}
//       <div className="relative z-10 flex flex-col items-center justify-start text-center px-6 pt-32 pb-0 mx-auto max-w-5xl">
//         {/* Chef Hat Icon */}
//         <motion.div
//           custom={0.2}
//           variants={contentVariants}
//           className="mb-6"
//           style={{ y: yRange }}
//         >
//           <ChefHat className="w-20 h-20 text-amber-400 mx-auto animate-bounce" />
//         </motion.div>

//         {/* Main Heading */}

//         <motion.div
//           custom={0.4}
//           variants={contentVariants}
//           className="text-center"
//         >
//           <h1
//             className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight bg-clip-text text-transparent"
//             style={{
//               backgroundImage:
//                 "linear-gradient(110deg, #FFD54F, #FFF, #F59E0B, #FFF, #FFD54F)",
//               backgroundSize: "200% auto",
//               animation: "shine 8s linear infinite",
//               textShadow: "0 0 40px rgba(245, 158, 11, 0.6)",
//             }}
//           >
//             <div>DALLA'S</div>
//             <div className="mt-2">SMOKED FUSION</div>
//           </h1>
//         </motion.div>

//         {/* Subheading */}
//         <motion.p
//           custom={0.6}
//           variants={contentVariants}
//           className="mt-4 text-lg sm:text-xl md:text-2xl text-amber-100 font-light max-w-2xl"
//         >
//           Where tradition meets innovation in every smoke-kissed bite.
//         </motion.p>

//         {/* Action Buttons */}
//         <motion.div
//           custom={0.8}
//           variants={contentVariants}
//           className="mt-8 flex flex-col sm:flex-row gap-6"
//         >
//           <Link to="/menu">
//             <motion.button
//               variants={buttonVariants}
//               whileHover="hover"
//               whileTap="tap"
//               className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300"
//             >
//               Our Menu
//             </motion.button>
//           </Link>

//           <Link to="/about">
//             <motion.button
//               variants={buttonVariants}
//               whileHover="hover"
//               whileTap="tap"
//               className="border-2 border-amber-400 text-amber-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-amber-400 hover:text-black transition-all duration-300"
//             >
//               Our Story
//             </motion.button>
//           </Link>
//         </motion.div>

//         {/* Pulsing Flame Icon */}
//         <motion.div custom={1} variants={contentVariants} className="mt-16">
//           <Flame className="w-10 h-10 text-orange-500 animate-pulse" />
//         </motion.div>

//         {/* <div>
//           <h1 className="text-5xl text-center text-green">
//             Hello
//           </h1>
//         </div>

//         */}
//       </div>
//     </motion.div>
//   );
// };

// export default HomePage;

// import { motion, useScroll, useTransform } from "framer-motion";
// import Navigation from "../components/Navigation";
// import { ChefHat, Flame } from "lucide-react";
// import { Link } from "react-router-dom";

// const backgroundBlobs = Array.from({ length: 6 });

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// const blobVariants = {
//   animate: (i) => ({
//     y: [20, -80, 20],
//     x: [0, 40, 0],
//     scale: [1, 1.3, 1],
//     opacity: [0.4, 0.1, 0.4],
//     transition: {
//       duration: 8 + i * 1.5,
//       repeat: Infinity,
//       ease: "easeInOut",
//     },
//   }),
// };

// const contentVariants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (delay = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 1,
//       delay,
//       ease: "easeOut",
//     },
//   }),
// };

// const buttonVariants = {
//   hover: {
//     scale: 1.05,
//     boxShadow: "0px 10px 25px rgba(245, 158, 11, 0.3)",
//     transition: { duration: 0.3, ease: "easeInOut" },
//   },
//   tap: { scale: 0.95, transition: { duration: 0.1 } },
// };

// const HomePage = () => {
//   const { scrollY } = useScroll();
//   const yRange = useTransform(scrollY, [0, 300], [0, -50]);

//   return (
//     <motion.div
//       initial="hidden"
//       animate="visible"
//       variants={containerVariants}
//       className="relative w-full h-screen bg-black overflow-hidden"
//     >
//       <Navigation />

//       {/* ─── Responsive Background Video ─── */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="
//           absolute top-0 left-0
//           w-auto h-auto object-cover object-top opacity-30 z-0

//           /* On small screens, use object-top so we see the very top of the video */
//           sm:w-full sm:h-full sm:object-cover sm:object-top sm:scale-100

//           /* On md+, shift the “window” downward a bit so you’re looking at roughly the top 50% */
//           md:w-full md:h-full md:object-cover
//         "
//         /* At md and up, we override objectPosition to “50% 25%”—that vertically shifts
//            the video so you’re centered around the top half instead of the dead center. */
//         style={{
//           /*
//            * On md+: objectPosition: "50% 25%"
//            *   → horizontally center, vertically 25% down (so the top half is shown).
//            *
//            * On sm: we’re just using object-top from Tailwind (“objectPosition: top center”).
//            * On default/mobile: object-top as well (so nothing is cut off at the very top).
//            */
//           objectPosition:
//             window.innerWidth >= 768 ? "50% 50%" : "5% 0%",
//         }}
//       >
//         <source src="/images/sum_bur.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* ─── Floating “Blobs” ─── */}
//       {backgroundBlobs.map((_, i) => (
//         <motion.div
//           key={i}
//           custom={i}
//           variants={blobVariants}
//           animate="animate"
//           className="absolute w-48 h-48 bg-white/5 rounded-full blur-3xl"
//           style={{
//             left: `${15 + i * 14}%`,
//             top: `${65 - i * 6}%`,
//           }}
//         />
//       ))}

//       {/* ─── Main Content ─── */}
//       <div className="relative z-10 flex flex-col items-center justify-start text-center px-6 pt-32 mx-auto max-w-5xl">
//         {/* Chef Hat Icon */}
//         <motion.div
//           custom={0.2}
//           variants={contentVariants}
//           className="mb-6"
//           style={{ y: yRange }}
//         >
//           <ChefHat className="w-20 h-20 text-amber-400 mx-auto animate-bounce sm:py-0 py-32" />
//         </motion.div>

//         {/* Main Heading */}
//         <motion.div custom={0.4} variants={contentVariants} className="text-center">
//           <h1
//             className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight bg-clip-text text-transparent"
//             style={{
//               backgroundImage:
//                 "linear-gradient(110deg, #FFD54F, #FFF, #F59E0B, #FFF, #FFD54F)",
//               backgroundSize: "200% auto",
//               animation: "shine 8s linear infinite",
//               textShadow: "0 0 40px rgba(245, 158, 11, 0.6)",
//             }}
//           >
//             <div className="font-mono">DALLA' S</div>
//             <div className="mt-2 font-mono">SMOKED </div>
//             <div className="mt-2 font-mono">FUSION</div>
//           </h1>
//         </motion.div>

//         {/* Subheading */}
//         <motion.p
//           custom={0.6}
//           variants={contentVariants}
//           className="mt-4 text-lg sm:text-xl md:text-2xl text-amber-100 font-light max-w-2xl"
//         >

//         </motion.p>

//         {/* Action Buttons */}
//         <motion.div
//           custom={0.8}
//           variants={contentVariants}
//           className="mt-8 flex flex-row gap-6 sm:py-0 py-44"
//         >
//           <Link to="/menu">
//             <motion.button
//               variants={buttonVariants}
//               whileHover="hover"
//               whileTap="tap"
//               className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300"
//             >
//               Our Menu
//             </motion.button>
//           </Link>
//           <Link to="/about">
//             <motion.button
//               variants={buttonVariants}
//               whileHover="hover"
//               whileTap="tap"
//               className="border-2 border-amber-400 text-amber-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-amber-400 hover:text-black transition-all duration-300"
//             >
//               Our Story
//             </motion.button>
//           </Link>
//         </motion.div>

//         {/* Pulsing Flame Icon */}
//         {/* <motion.div custom={1} variants={contentVariants} className="mt-16">
//           <Flame className="w-10 h-10 text-orange-500 animate-pulse" />
//         </motion.div> */}
//       </div>
//     </motion.div>
//   );
// };

// export default HomePage;

// import { motion } from "framer-motion";
// import { useEffect } from "react";
// import Navigation from "../components/Navigation";

// const HomePage = () => {

//   useEffect(() => {
//     // Disable scroll
//     document.body.style.overflow = "hidden";

//     // Re-enable scroll on cleanup
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, []);
//   return (
//     <motion.div
//       initial="hidden"
//       animate="visible"
//       className="relative bg-black h-screen flex items-center justify-center overflow-hidden"
//     >
//       <Navigation />

//       {/* ─── Responsive Background Video ─── */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="
//           absolute inset-0
//           w-auto h-auto object-cover object-top opacity-30 z-0
//           sm:w-full sm:h-full sm:object-cover sm:object-top sm:scale-100
//           md:w-full md:h-full md:object-cover
//         "
//         style={{
//           objectPosition: window.innerWidth >= 768 ? "50% 50%" : "5% 0%",
//         }}
//       >
//         <source src="/images/sum_bur.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* ─── Centered Content ─── */}
//       <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 mx-auto max-w-5xl">
//         <motion.div custom={0.4} className="w-full">
//           <h1
//             className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight bg-clip-text text-transparent leading-tight"
//             style={{
//               backgroundImage:
//                 "linear-gradient(110deg, #FFD54F, #FFF, #F59E0B, #FFF, #FFD54F)",
//               backgroundSize: "200% auto",
//               animation: "shine 8s linear infinite",
//               textShadow: "0 0 40px rgba(245, 158, 11, 0.6)",
//             }}
//           >
//             <div className="font-mono mt-96 sm:mt-44">DALLAS</div>
//             <div className="font-mono">SMOKED</div>
//             <div className="font-mono">FUSION</div>
//           </h1>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export default HomePage;

// import React from 'react';
// import { motion } from 'framer-motion';
// import Navigation from "../components/Navigation";

// interface HomePageProps {}

// const HomePage: React.FC<HomePageProps> = () => {
//   return (
//     <>
//       {/* Mobile Only: Video Background (screens smaller than md) */}
//       <div className="relative w-full h-screen md:hidden overflow-hidden">
//         <Navigation />
//         <video
//           className="absolute inset-0 w-full h-full object-cover object-top"
//           src="/images/sum_bur.mp4"
//           autoPlay
//           loop
//           muted
//           playsInline
//         >
//           Your browser does not support the video tag.
//         </video>
//         <div className="absolute inset-0 bg-black bg-opacity-30"></div>
//         <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
//           <motion.h1
//             className="text-white font-bold uppercase text-5xl sm:text-6xl leading-tight"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, ease: 'easeOut' }}
//           >
//             DALLAS
//             <br />
//             SMOKED FUSION
//           </motion.h1>
//           <div className="mt-12 flex space-x-6">
//             <motion.button
//               className="px-6 py-3 bg-red-600 text-white font-semibold uppercase rounded-lg hover:bg-red-700"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, ease: 'easeOut', delay: 0.8 }}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Menu
//             </motion.button>
//             <motion.button
//               className="px-6 py-3 bg-transparent border border-white text-white font-semibold uppercase rounded-lg hover:bg-white hover:text-black"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Story
//             </motion.button>
//           </div>
//         </div>
//       </div>

//       {/* Tablets and Larger: Image Background (screens md and up) */}
//       <div className="hidden md:block relative w-full h-screen overflow-hidden">
//         <Navigation />
//         <img
//           className="absolute inset-0 w-full h-full object-cover"
//           src="/images/menu/blap.jpg"
//           alt="Background"
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-30"></div>
//         <div className="relative z-10 flex items-center justify-start w-full h-full">
//           <div className="w-1/2 pl-16">
//             <motion.h1
//               className="text-white font-bold uppercase text-7xl leading-tight text-left"
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}

//             >
//               DALLAS
//               <br />
//               SMOKED FUSION
//             </motion.h1>
//             <div className="mt-12 flex space-x-6">
//               <motion.button
//                 className="px-8 py-4 bg-red-600 text-white font-semibold uppercase rounded-lg hover:bg-red-700"
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Menu
//               </motion.button>
//               <motion.button
//                 className="px-8 py-4 bg-transparent border border-white text-white font-semibold uppercase rounded-lg hover:bg-white hover:text-black"
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 1, ease: 'easeOut', delay: 1.3 }}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Story
//               </motion.button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HomePage;

// final
import React from "react";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import { useNavigate } from "react-router-dom";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Note: Ensure you have a global CSS file that defines the "shine" keyframes animation: */}
      {/* @keyframes shine { 0% { background-position: 0% 50%; } 100% { background-position: 100% 50%; } } */}


      {/* Mobile Only: Video Background (screens smaller than md) */}
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
        {/* opacity */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="my-48 relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(110deg, #FFD54F, #FFF, #F59E0B, #FFF, #FFD54F)",
              backgroundSize: "200% auto",
              animation: "shine 8s linear infinite",
              textShadow: "0 0 40px rgba(245, 158, 11, 0.6)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            DALLAS
            <br />
            SMOKED FUSION
          </motion.h1>
          <div className="mt-12 flex space-x-6">
            {/* Order Button */}
            <motion.button
              className="relative px-6 py-3 border border-white text-white font-semibold uppercase rounded-lg overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
              whileHover={{ scale: 1.1, rotate: -1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/menu")}
            >
              {/* Glow Layer */}
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition duration-300 rounded-lg blur-sm" />

              {/* Shimmer Effect */}
              <span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                 translate-x-[-100%] group-hover:animate-[shimmer_2s_linear_infinite] rounded-lg"
              ></span>

              {/* Text */}
              <span className="relative z-10 text-white group-hover:text-amber-400 tracking-wider">
                Order
              </span>
            </motion.button>

            {/* Story Button */}
            <motion.button
              className="relative px-6 py-3 border border-white text-white font-semibold uppercase rounded-lg overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 1 }}
              whileHover={{ scale: 1.1, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/legacy")}
            >
              {/* Neon Glow */}
              <span className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-10 transition duration-300 blur-md rounded-lg" />

              {/* Flicker Glow */}
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 animate-pulse blur-sm rounded-lg" />

              {/* Text */}
              <span className="relative z-10 text-white group-hover:text-amber-400 tracking-wider">
                Story
              </span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Tablets and Larger: Image Background (screens md and up) */}
      <div className="hidden md:block relative w-full h-screen overflow-hidden">
        <Navigation />
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="/images/menu/blap.jpg"
          alt="Background"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 flex items-center justify-start w-full h-full">
          <div className="w-1/2 pl-16">
            <motion.h1
              className="py-20 font-bold uppercase text-7xl leading-tight text-left bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(110deg, #FFD54F, #FFF, #F59E0B, #FFF, #FFD54F)",
                backgroundSize: "200% auto",
                animation: "shine 8s linear infinite",
                textShadow: "0 0 40px rgba(245, 158, 11, 0.6)",
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            >
              DALLAS
              <br />
              SMOKED FUSION
            </motion.h1>
            <div className="mt-12 flex space-x-6">
              {/* Order Button */}
              <motion.button
                className="relative px-8 py-4 border text-white font-semibold uppercase rounded-lg overflow-hidden group transition duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 1 }}
                whileHover={{ scale: 1.08, rotate: -1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/menu")}
              >
                {/* Soft Glow */}
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition duration-300 blur-sm rounded-lg" />

                {/* Animated Shine */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:animate-[slide_1.5s_linear_infinite] rounded-lg" />

                {/* Button Text */}
                <span className="relative z-10 group-hover:text-amber-400 tracking-wide">
                  Order
                </span>
              </motion.button>

              {/* Story Button */}
              <motion.button
                className="relative px-8 py-4 bg-transparent border text-white font-semibold uppercase rounded-lg overflow-hidden group transition duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 1.3 }}
                whileHover={{ scale: 1.08, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/legacy")}
              >
                {/* Neon Flicker */}
                <span className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-10 transition duration-300 blur-md rounded-lg" />

                {/* Flicker Glow */}
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 animate-pulse blur-sm rounded-lg" />

                {/* Button Text */}
                <span className="relative z-10 group-hover:text-amber-300 tracking-wide">
                  Story
                </span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
