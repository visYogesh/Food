
import { motion } from "framer-motion";
import { Award, Users, Clock } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Award, label: "Years of Excellence", value: "25+" },
    { icon: Users, label: "Happy Customers", value: "50K+" },
    { icon: Clock, label: "Hours of Smoking", value: "100K+" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Crafted with love <span className="text-amber-600">Passion</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Smoked Fusion, we believe that great food is born from the perfect marriage of 
            time-honored smoking techniques and bold, innovative flavors that dance on your palate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              The Art of Smoke & Fire
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our journey began with a simple vision: to create extraordinary dining experiences 
              through the ancient art of smoking, enhanced with contemporary culinary innovation. 
              Every dish tells a story of dedication, creativity, and respect for ingredients.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              From our custom-built smokers to our carefully curated spice blends, every element 
              of our kitchen is designed to unlock flavors that transport you to new culinary dimensions.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <button className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors">
                Learn Our Story
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                className="bg-white p-6 rounded-xl shadow-lg text-center transform-gpu"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <stat.icon className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
