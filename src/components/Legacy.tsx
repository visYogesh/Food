
import { motion } from "framer-motion";
import { Flame, Crown, Heart } from "lucide-react";

const Legacy = () => {
  const milestones = [
    {
      year: "1998",
      title: "The Beginning",
      description: "Started as a small family smokehouse with a single vision",
      icon: Flame,
    },
    {
      year: "2005",
      title: "Recognition",
      description: "Awarded 'Best BBQ' by the State Culinary Association",
      icon: Crown,
    },
    {
      year: "2015",
      title: "Expansion",
      description: "Opened our flagship restaurant and introduced fusion cuisine",
      icon: Heart,
    },
    {
      year: "2023",
      title: "Legacy Continues",
      description: "25 years of serving exceptional smoked fusion cuisine",
      icon: Crown,
    },
  ];

  return (
    <section id="legacy" className="py-20 bg-gradient-to-br from-gray-900 via-black to-amber-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-amber-400">Legacy</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A quarter-century journey of passion, innovation, and unwavering commitment 
            to culinary excellence.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-400 to-orange-600 hidden md:block"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:gap-8`}
              >
                {/* Content */}
                <div className="flex-1 md:max-w-md">
                  <motion.div
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: index % 2 === 0 ? 5 : -5,
                      boxShadow: "0 25px 50px rgba(245, 158, 11, 0.2)"
                    }}
                    className="bg-white/10 backdrop-blur-sm border border-amber-400/20 p-6 rounded-xl transform-gpu"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="flex items-center mb-4">
                      <milestone.icon className="w-8 h-8 text-amber-400 mr-3" />
                      <span className="text-2xl font-bold text-amber-400">{milestone.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{milestone.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{milestone.description}</p>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:block">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-4 h-4 bg-amber-400 rounded-full border-4 border-white shadow-lg"
                  ></motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 text-lg italic max-w-2xl mx-auto">
            "Every dish we serve carries the wisdom of generations and the excitement of tomorrow's possibilities."
          </p>
          <p className="text-amber-400 font-semibold mt-4">— Chef Marcus Rodriguez, Founder</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Legacy;
