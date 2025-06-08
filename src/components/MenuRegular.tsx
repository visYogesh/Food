import { motion, AnimatePresence } from "framer-motion";
import Navigation from "../components/Navigation";
import { useState } from "react";

const placeholder = "images/b.png";

const categories = [
  { id: "signatures", name: "Chicken Smokes", icon: "/images/d1.png" },
  { id: "fusion", name: "Fusion Creations", icon: "/images/d1.png" },
  { id: "sides", name: "Sides & Shares", icon: "/images/d1.png" },
  { id: "desserts", name: "Sweet Endings", icon: "/images/d1.png" },
  { id: "desserts", name: "Sweet Endings", icon: "/images/d1.png" },
  { id: "desserts", name: "Sweet Endings", icon: "/images/d1.png" },
  { id: "desserts", name: "Sweet Endings", icon: "/images/d1.png" },
  { id: "desserts", name: "Sweet Endings", icon: "/images/d1.png" },
  { id: "desserts", name: "Sweet Endings", icon: "/images/d1.png" },
];

const menuItems: Record<
  string,
  {
    name: string;
    description: string;
    price: string;
    spicy: boolean;
    image: string;
  }[]
> = {
  signatures: [
    {
      name: "MEAT TORNADO",
      description: "Brisket + Pulled Pork + Sausage, BBQ sauce, slaw, cheddar",
      price: "$10",
      spicy: true,
      image: "/images/d1.png",
    },
    {
      name: "SMOKED DUO MELT",
      description: "Brisket + Turkey, pepper jack, Mix of ranch and buffalo",
      price: "$10",
      spicy: true,
      image: "/images/d1.png",
    },
    {
      name: "CARNIVORE CLUB",
      description: "Brisket, Turkey, Pork, cheddar, chipotle BBQ",
      price: "$10",
      spicy: true,
      image: "/images/d1.png",
    },
    {
      name: "SIZZLIN’ SLAW STACK",
      description: "Pork + Chicken, slaw, hot honey, pickled onions",
      price: "$10",
      spicy: true,
      image: "/images/d1.png",
    },
    {
      name: "BBQ CRUNCH WRAP",
      description: "Brisket + Sausage, Ranch, chedder cheese, crispy onions",
      price: "$10",
      spicy: true,
      image: "/images/d1.png",
    },
    {
      name: "SMOKEHOUSE PHILLY",
      description: "Brisket + Chicken, grilled onions, chedder",
      price: "$10",
      spicy: true,
      image: "/images/d1.png",
    },
    {
      name: "TEXAS BBQ BOMB",
      description: "Brisket + Sausage + Pork, cheddar, pickles, BBQ glaze",
      price: "$10",
      spicy: true,
      image: "/images/d1.png",
    },
  ],
  fusion: [
    {
      name: "Korean BBQ Tacos",
      description:
        "Smoked pork belly with kimchi slaw and gochujang aioli in corn tortillas",
      price: "$16",
      spicy: true,
      image: "/images/c.png",
    },
    {
      name: "Tandoori Smoked Chicken",
      description:
        "Indian-spiced chicken smoked over applewood with mint chutney",
      price: "$22",
      spicy: true,
      image: placeholder,
    },
    {
      name: "Miso Glazed Smoked Tofu",
      description:
        "Hickory-smoked tofu with sweet miso glaze and pickled vegetables",
      price: "$18",
      spicy: false,
      image: placeholder,
    },
  ],
  sides: [
    {
      name: "Smoked Mac & Cheese",
      description: "Three-cheese blend with smoked gouda and crispy bacon bits",
      price: "$12",
      spicy: false,
      image: placeholder,
    },
    {
      name: "Charred Street Corn",
      description:
        "Mexican-style corn with cotija cheese, lime, and chili powder",
      price: "$8",
      spicy: true,
      image: placeholder,
    },
    {
      name: "Smoke House Beans",
      description: "Slow-cooked beans with smoked pork and molasses",
      price: "$10",
      spicy: false,
      image: placeholder,
    },
  ],
  desserts: [
    {
      name: "Smoked Chocolate Tart",
      description:
        "Dark chocolate tart with smoked salt and vanilla bean ice cream",
      price: "$14",
      spicy: false,
      image: "/images/gulabjamun.png",
    },
    {
      name: "Bourbon Peach Cobbler",
      description:
        "Warm peach cobbler with bourbon sauce and cinnamon ice cream",
      price: "$12",
      spicy: false,
      image: placeholder,
    },
    {
      name: "Maple Smoked Cheesecake",
      description:
        "Creamy cheesecake with maple smoke essence and graham crust",
      price: "$13",
      spicy: false,
      image: placeholder,
    },
  ],
};

const MenuPage: React.FC = () => {
  const [openCat, setOpenCat] = useState<string | null>(null);
  const toggleCat = (id: string) =>
    setOpenCat((prev) => (prev === id ? null : id));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-amber-900 text-amber-100"
    >
      <Navigation />
      {/* …your existing “Order Now” code… */}

      <section className="pt-28 md:pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 flex justify-between items-center"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold text-amber-300">
              Our Menu
            </h2>
            <div className="flex flex-wrap gap-4 ml-auto">
              {/* Download PDF */}
              <a
                href="/regular-menu.pdf"
                title="Regular Menu"
                target="_blank"
                // download
                className="flex items-center px-4 py-2 border border-amber-300 rounded-lg text-amber-300 hover:bg-amber-300 hover:text-gray-900 transition"
              >
                Full Menu
              </a>


              {/* Order Now */}
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-amber-600 transition"
              >
                Order Now
              </a>
            </div>

            {/* inline Order Now for sm */}
            {/* … */}
          </motion.div>
          <p className="text-base sm:text-lg leading-relaxed mb-12">
            Each dish is a masterpiece, crafted to deliver an unforgettable
            culinary journey.
          </p>

          {/* Accordion */}
          <div className="space-y-4">
            {categories.map(({ id, name, icon }) => {
              const isOpen = id === openCat;
              return (
                <div
                  key={id}
                  className="border border-gray-600 rounded-xl overflow-hidden"
                >
                  {/* Trigger w/ icon */}
                  <button
                    onClick={() => toggleCat(id)}
                    className="w-full flex items-center justify-between px-6 py-4 "
                    // bg-red-800 hover:bg-gray-700
                  >
                    <div className="flex items-center">
                      <img
                        src={icon}
                        alt=""
                        className="w-20 h-10 mr-3 object-cover"
                      />
                      <span className="text-xl font-bold">{name}</span>
                    </div>
                    <motion.svg
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-6 h-6 text-amber-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </motion.svg>
                  </button>

                  {/* Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-4 py-6 "
                        // bg-green-300
                      >
                        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2  gap-4">
                          {menuItems[id].map((item) => (
                            <motion.div
                              key={item.name}
                              initial={{ opacity: 0, y: 40 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, amount: 0.3 }}
                              whileHover={{
                                y: -1,
                                scale: 1.02,
                                boxShadow: "0 25px 50px rgba(245,158,11,0.25)",
                              }}
                              transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30,
                              }}
                              // bg-white
                              className="border border-gray-400 flex items-center  rounded-lg overflow-hidden"
                            >
                              {/* Fixed-size image */}
                              <div className="flex-shrink-0 w-32 h-20">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-full h-full object-cover"
                                  loading="lazy"
                                />
                              </div>
                              {/* Text */}
                              <div className="p-6 flex-1">
                                <h3 className="text-2xl text-white font-extrabold  mb-1">
                                  {item.name}
                                </h3>
                                <p className="text-sm mb-2 text-white">
                                  {item.description}
                                </p>
                                <div className="flex items-center justify-between">
                                  {item.spicy && (
                                    <span className="bg-red-600 text-white px-2 py-1 rounded-full text-xs">
                                      🌶️ Spicy
                                    </span>
                                  )}
                                  <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                                    {item.price}
                                  </span>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default MenuPage;
