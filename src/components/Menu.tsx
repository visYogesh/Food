// src/pages/Menu.tsx
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import { useState } from "react";

const categories = [
  { id: "signatures", name: "Signature Smokes" },
  { id: "fusion", name: "Fusion Creations" },
  { id: "sides", name: "Sides & Shares" },
  { id: "desserts", name: "Sweet Endings" },
];

const menuItems = {
  signatures: [
    {
      name: "24-Hour Smoked Brisket",
      description: "Slow-smoked with hickory and cherry wood, served with our signature bourbon glaze",
      price: "$28",
      spicy: false,
    },
    {
      name: "Smoky Salmon Teriyaki",
      description: "Cedar-plank smoked salmon with Asian-inspired teriyaki and sesame seeds",
      price: "$26",
      spicy: false,
    },
    {
      name: "Fire-Kissed Ribs",
      description: "Fall-off-the-bone ribs with our secret dry rub and chipotle honey glaze",
      price: "$24",
      spicy: true,
    },
    {
      name: "Smoked Duck Breast",
      description: "Cherry wood smoked duck with orange reduction and wild rice pilaf",
      price: "$32",
      spicy: false,
    },
  ],
  fusion: [
    {
      name: "Korean BBQ Tacos",
      description: "Smoked pork belly with kimchi slaw and gochujang aioli in corn tortillas",
      price: "$16",
      spicy: true,
    },
    {
      name: "Tandoori Smoked Chicken",
      description: "Indian-spiced chicken smoked over applewood with mint chutney",
      price: "$22",
      spicy: true,
    },
    {
      name: "Miso Glazed Smoked Tofu",
      description: "Hickory-smoked tofu with sweet miso glaze and pickled vegetables",
      price: "$18",
      spicy: false,
    },
    {
      name: "Mediterranean Lamb",
      description: "Herb-crusted lamb shoulder smoked with olive wood and tzatziki",
      price: "$30",
      spicy: false,
    },
  ],
  sides: [
    {
      name: "Smoked Mac & Cheese",
      description: "Three-cheese blend with smoked gouda and crispy bacon bits",
      price: "$12",
      spicy: false,
    },
    {
      name: "Charred Street Corn",
      description: "Mexican-style corn with cotija cheese, lime, and chili powder",
      price: "$8",
      spicy: true,
    },
    {
      name: "Smoke House Beans",
      description: "Slow-cooked beans with smoked pork and molasses",
      price: "$10",
      spicy: false,
    },
    {
      name: "Grilled Vegetable Medley",
      description: "Seasonal vegetables kissed by flames with herb oil",
      price: "$11",
      spicy: false,
    },
  ],
  desserts: [
    {
      name: "Smoked Chocolate Tart",
      description: "Dark chocolate tart with smoked salt and vanilla bean ice cream",
      price: "$14",
      spicy: false,
    },
    {
      name: "Bourbon Peach Cobbler",
      description: "Warm peach cobbler with bourbon sauce and cinnamon ice cream",
      price: "$12",
      spicy: false,
    },
    {
      name: "Maple Smoked Cheesecake",
      description: "Creamy cheesecake with maple smoke essence and graham crust",
      price: "$13",
      spicy: false,
    },
  ],
};

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>("signatures");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-amber-900"
    >
      <Navigation />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 
            style={{
              textShadow: "0 0 30px rgba(245, 158, 11, 0.5)",
              background: "linear-gradient(45deg, #fff, #f59e0b, #fff)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Menu
            </h2>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
              Each dish is a masterpiece, carefully crafted to deliver an unforgettable culinary journey.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-amber-600 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-amber-100 border border-gray-200"
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Menu Items */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {menuItems[activeCategory as keyof typeof menuItems]?.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  rotateX: 2,
                }}
                className="bg-gray-300 p-6 rounded-xl shadow-lg transform-gpu"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900 flex items-center">
                    {item.name}
                    {item.spicy && <span className="ml-2 text-red-500 text-sm">🌶️</span>}
                  </h3>
                  <span className="text-2xl font-bold text-amber-600">{item.price}</span>
                </div>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default MenuPage;
