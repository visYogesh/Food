// // src/components/Navigation.tsx
// import { motion } from "framer-motion";
// import { useState } from "react";
// import { Menu as MenuIcon, X } from "lucide-react";
// import { NavLink } from "react-router-dom";

// // Import your fire video (ensure fire.mp4 is in src/assets)
// import fireVideo from "/images/fired1.mp4";

// const navItems = [
//   { name: "Home", to: "/" },
//   { name: "Menu", to: "/menu" },
//   { name: "Story", to: "/about" },
//   { name: "Legacy", to: "/legacy" },
//   { name: "Contact", to: "/contact" },
// ];

// const Navigation = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.8 }}
//       className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-amber-600/20"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center py-4">
//           {/* Circle‐clipped video + Text */}
//           <div className="flex items-center">
//             {/* 1. Wrap <video> in a circular container */}
//             <div className="h-12 w-12 mr-2 rounded-full overflow-hidden">
//               <video
//                 onContextMenu={(e) => e.preventDefault()}
//                 src={fireVideo}
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 className="h-16 w-16 object-cover"
//               />
//             </div>

//             {/* 2. Only “Smoked Fusion” text is hover‐animated */}
//             <motion.span
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 300, damping: 20 }}
//               className="mt-4 text-2xl font-bold text-amber-400"
//             >
//               <NavLink to="/">Smoked Fusion</NavLink>
//             </motion.span>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-8">
//             {navItems.map((item, index) => (
//               <NavLink
//                 key={item.name}
//                 to={item.to}
//                 className={({ isActive }) =>
//                   `font-medium transition-colors ${
//                     isActive
//                       ? "text-amber-400"
//                       : "text-white hover:text-amber-400"
//                   }`
//                 }
//               >
//                 <motion.span
//                   initial={{ opacity: 0, y: -20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   whileHover={{ scale: 1.1 }}
//                 >
//                   {item.name}
//                 </motion.span>
//               </NavLink>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-white hover:text-amber-400"
//             >
//               {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden pb-4"
//           >
//             {navItems.map((item) => (
//               <NavLink
//                 key={item.name}
//                 to={item.to}
//                 className={({ isActive }) =>
//                   `block py-2 transition-colors ${
//                     isActive
//                       ? "text-amber-400"
//                       : "text-white hover:text-amber-400"
//                   }`
//                 }
//                 onClick={() => setIsOpen(false)}
//               >
//                 {item.name}
//               </NavLink>
//             ))}
//           </motion.div>
//         )}
//       </div>
//     </motion.nav>
//   );
// };

// export default Navigation;


// src/components/Navigation.tsx
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import { NavLink } from "react-router-dom";

// Import your fire video (ensure fired1.mp4 is in src/assets)
import fireVideo from "/images/fired1.mp4";

const navItems = [
  { name: "Home", to: "/" },
  { name: "Menu", to: "/menu" }, // This will have the hover‐dropdown
  { name: "Catering", to: "/catering" },
  { name: "Legacy", to: "/legacy" },
  { name: "Contact", to: "/contact" },
];

const dropdownItems = [
  { name: "Regular Menu", to: "/menu/regular" },
  { name: "Halal Menu", to: "/menu/special" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-amber-600/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Circle‐clipped video + “Smoked Fusion” */}
          <div className="flex items-center">
            <div className="h-12 w-12 mr-2 rounded-full overflow-hidden">
              <video
                onContextMenu={(e) => e.preventDefault()}
                src={fireVideo}
                autoPlay
                loop
                muted
                playsInline
                className="h-16 w-16 object-cover"
              />
            </div>

            <motion.span
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="mt-4 text-2xl font-bold text-amber-400"
            >
              <NavLink to="/">Smoked Fusion</NavLink>
            </motion.span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => {
              if (item.name === "Menu") {
                return (
                  <div key="Menu" className="relative group">
                    {/* “Menu” parent link */}
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `font-medium transition-colors ${
                          isActive
                            ? "text-amber-400"
                            : "text-white hover:text-amber-400"
                        }`
                      }
                    >
                      <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {item.name}
                      </motion.span>
                    </NavLink>

                    {/* Dropdown (always in DOM, hidden until group-hover) */}
                    <div
                      className="
                        absolute 
                        left-0 
                        top-full 
                        mt-0
                        w-40 
                        bg-black/90 
                        backdrop-blur-sm 
                        border 
                        border-amber-600/20 
                        rounded-md 
                        shadow-lg 
                        opacity-0 
                        invisible 
                        group-hover:opacity-100 
                        group-hover:visible 
                        transition-opacity 
                        duration-200 
                        z-50
                      "
                    >
                      <ul className="flex flex-col py-2">
                        {dropdownItems.map((subItem) => (
                          <li key={subItem.name}>
                            <NavLink
                              to={subItem.to}
                              className={({ isActive }) =>
                                `block px-4 py-2 text-sm font-medium transition-colors ${
                                  isActive
                                    ? "text-amber-400"
                                    : "text-white hover:text-amber-400"
                                }`
                              }
                            >
                              {subItem.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              }

              // All other items remain unchanged
              return (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={({ isActive }) =>
                    `font-medium transition-colors ${
                      isActive
                        ? "text-amber-400"
                        : "text-white hover:text-amber-400"
                    }`
                  }
                >
                  <motion.span
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {item.name}
                  </motion.span>
                </NavLink>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-amber-400"
            >
              {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4"
          >
            {navItems.map((item) => {
              if (item.name === "Menu") {
                return (
                  <div key="Menu" className="space-y-1">
                    {/* “Menu” label (non‐clickable parent) */}
                    <span className="block px-4 py-2 font-medium text-white">
                      Menu
                    </span>
                    {/* Indented “Regular” + “Special” */}
                    <div className="ml-4 flex flex-col space-y-1">
                      {dropdownItems.map((subItem) => (
                        <NavLink
                          key={subItem.name}
                          to={subItem.to}
                          className={({ isActive }) =>
                            `block px-4 py-2 text-white transition-colors ${
                              isActive ? "text-amber-400" : "hover:text-amber-400"
                            }`
                          }
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={({ isActive }) =>
                    `block px-4 py-2 transition-colors ${
                      isActive
                        ? "text-amber-400"
                        : "text-white hover:text-amber-400"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              );
            })}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
