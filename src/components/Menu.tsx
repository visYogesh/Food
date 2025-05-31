import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import { useState } from "react";

const placeholder = "images/b.png";

const categories = [
  { id: "signatures", name: "Signature Smokes" },
  { id: "fusion", name: "Fusion Creations" },
  { id: "sides", name: "Sides & Shares" },
  { id: "desserts", name: "Sweet Endings" },
];

const menuItems: Record<
  string,
  { name: string; description: string; price: string; spicy: boolean; image: string }[]
> = {
  signatures: [
    {
      name: "MEAT TORNADO",
      description: "Brisket + Pulled Pork + Sausage, BBQ sauce, slaw, cheddar",
      price: "$10",
      spicy: true,
      image: "images/b.png",
    },
    {
      name: "SMOKED DUO MELT",
      description: "Brisket + Turkey, pepper jack, Mix of ranch and buffalo",
      price: "$10",
      spicy: true,
      image: placeholder,
    },
    {
      name: "CARNIVORE CLUB",
      description: "Brisket, Turkey, Pork, cheddar, chipotle BBQ",
      price: "$10",
      spicy: true,
      image: placeholder,
    },
  ],
  fusion: [
    {
      name: "Korean BBQ Tacos",
      description: "Smoked pork belly with kimchi slaw and gochujang aioli in corn tortillas",
      price: "$16",
      spicy: true,
      image: "images/c.png",
    },
    {
      name: "Tandoori Smoked Chicken",
      description: "Indian-spiced chicken smoked over applewood with mint chutney",
      price: "$22",
      spicy: true,
      image: placeholder,
    },
    {
      name: "Miso Glazed Smoked Tofu",
      description: "Hickory-smoked tofu with sweet miso glaze and pickled vegetables",
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
      description: "Mexican-style corn with cotija cheese, lime, and chili powder",
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
      description: "Dark chocolate tart with smoked salt and vanilla bean ice cream",
      price: "$14",
      spicy: false,
      image: "/images/gulabjamun.png",
    },
    {
      name: "Bourbon Peach Cobbler",
      description: "Warm peach cobbler with bourbon sauce and cinnamon ice cream",
      price: "$12",
      spicy: false,
      image: placeholder,
    },
    {
      name: "Maple Smoked Cheesecake",
      description: "Creamy cheesecake with maple smoke essence and graham crust",
      price: "$13",
      spicy: false,
      image: placeholder,
    },
  ],
};

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>("signatures");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-amber-900"
    >
      <Navigation />

      {/* Desktop "Order Now" (absolute, visible only on md+: unchanged position) */}
      <div className="py-12 hidden md:block absolute top-20 right-8 px-20">
        <motion.button
          className="btn"
          animate={{
            scale: [1, 1.03, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
          whileHover={{ transform: "scale(1.1)" }}
          whileTap={{ transform: "scale(0.95)" }}
        >
          <div id="container-stars">
            <div id="stars">
              <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </div>
          </div>
          <strong className="text-xl">ORDER NOW</strong>
        </motion.button>
      </div>

      <section className="pt-28 md:pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header row with “Our Menu” on the left and button on the right */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-amber-300">
                Our Menu
              </h2>
              {/* Mobile/Tablet inline “Order Now” (visible only on small screens) */}
              <div className="block md:hidden">
                <motion.button
                  className="btn"
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  whileHover={{ transform: "scale(1.1)" }}
                  whileTap={{ transform: "scale(0.95)" }}
                >
                  <div id="container-stars">
                    <div id="stars">
                      <div id="glow">
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                      </div>
                    </div>
                  </div>
                  <strong>ORDER NOW</strong>
                </motion.button>
              </div>
            </div>

            {/* Description (unchanged) */}
            <p className="text-base sm:text-lg text-amber-100 leading-relaxed mt-4">
              <span className="block sm:inline">Each dish is a masterpiece,</span>{" "}
              <span className="block sm:inline">crafted to deliver an unforgettable culinary journey.</span>
            </p>
          </motion.div>

          {/* Category Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`px-8 py-3 rounded-full font-bold transition-all duration-300 text-lg ${
                  activeCategory === category.id
                    ? "bg-amber-500 text-white shadow-2xl"
                    : "bg-gray-800 text-gray-300 hover:bg-amber-600"
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 gap-12">
            {menuItems[activeCategory].map((item, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                    boxShadow: "0 25px 50px rgba(245, 158, 11, 0.25)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="border-2 border-gray-500 flex flex-col md:flex-row items-center bg-gray-300 rounded-2xl shadow-xl overflow-hidden"
                >
                  {/* Image first on mobile, then alternate on md */}
                  <div
                    className={`relative w-full md:w-1/2 h-64 md:h-80 order-1 ${
                      isLeft ? "md:order-1" : "md:order-2"
                    }`}
                  >
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    {item.spicy && (
                      <span className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm shadow-lg flex items-center">
                        🌶️ Spicy
                      </span>
                    )}
                    <span className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-lg font-bold shadow-lg">
                      {item.price}
                    </span>
                  </div>

                  <div
                    className={`p-8 md:p-12 flex-1 order-2 ${
                      isLeft ? "md:order-2" : "md:order-1"
                    }`}
                  >
                    <h3 className="text-2xl font-extrabold text-gray-900 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default MenuPage;
