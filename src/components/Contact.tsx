
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["123 Smoke Street", "Flavor Town, FT 12345"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["(555) 123-SMOKE", "(555) 123-7665"],
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Thu: 5PM - 10PM", "Fri-Sun: 4PM - 11PM"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@smokedfusion.com", "reservations@smokedfusion.com"],
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-black to-amber-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Visit <span className="text-amber-400">Us</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to experience the magic of smoked fusion cuisine? We're here to serve you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 20px 40px rgba(245, 158, 11, 0.2)"
              }}
              className="bg-white/10 backdrop-blur-sm border border-amber-400/20 p-6 rounded-xl text-center transform-gpu"
              style={{ transformStyle: "preserve-3d" }}
            >
              <info.icon className="w-12 h-12 text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">{info.title}</h3>
              {info.details.map((detail, i) => (
                <p key={i} className="text-gray-300 leading-relaxed">
                  {detail}
                </p>
              ))}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 10px 30px rgba(245, 158, 11, 0.3)" 
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-amber-500/25 transition-all duration-300 mr-4"
          >
            Make Reservation
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-amber-400 text-amber-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-400 hover:text-black transition-all duration-300"
          >
            Order Online
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-amber-400/20 text-center"
        >
          <p className="text-gray-400">
            © 2023 Smoked Fusion. All rights reserved. | Crafted with passion and smoke.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
