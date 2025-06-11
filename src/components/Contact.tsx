import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    details: ["2160 N Coit Road", "Ste 146, Richardson TX 75080, Texas, Chicago"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+1 945 364 1890", "+1 214 597 4922"],
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Mon - Sun : 11:00 AM - 9:00 PM"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["ksfoodsdbp@gmail.com"],
  },
];

// Spring settings for hover
const hoverSpring = {
  type: "spring" as const,
  damping: 20,
  stiffness: 300,
};

const ContactPage = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-amber-900"
  >
    <Navigation />

    <section className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
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
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Visit Us
          </h2>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
            Ready to experience the magic of smoked fusion cuisine? We’re here
            to serve you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 30px rgba(245,158,11,0.5)",
                  transition: { duration: 0.25, delay: 0 },
                }}
                className="bg-white/10 backdrop-blur-sm border border-amber-400/20 p-6 rounded-xl text-center transform-gpu transition-shadow duration-300"
              >
                <info.icon className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">
                  {info.title}
                </h3>
                {info.details.map((d, j) => (
                  <p key={j} className="text-gray-300 leading-relaxed">
                    {d}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.01,
              boxShadow: "0 0 40px rgba(245, 158, 11, 0.2)",
              transition: { duration: 0.3 },
            }}
          >
            <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[32rem] rounded-xl overflow-hidden border border-amber-400/20">
              <iframe
                title="Mangalagiri Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.8869504394843!2d-96.77008948874966!3d32.98038427346906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c21f479efffff%3A0xd274ca95dbffd9af!2s2160%20N%20Coit%20Rd%20Ste%20146%2C%20Richardson%2C%20TX%2075080%2C%20USA!5e0!3m2!1sen!2sin!4v1749670242767!5m2!1sen!2sin"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-amber-500/25 transition-all duration-300 mr-4"
          >
            Order Food
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
            © 2023 Smoked Fusion. All rights reserved. | Crafted with passion
            and smoke.
          </p>
        </motion.div>
      </div>
    </section>
  </motion.div>
);

export default ContactPage;
