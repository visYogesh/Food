// import { motion } from "framer-motion";
// import Navigation from "../components/Navigation";
// import { MapPin, Phone, Clock, Mail } from "lucide-react";

// const contactInfo = [
//   {
//     icon: MapPin,
//     title: "Location",
//     details: ["123 Smoke Street", "Flavor Town, FT 12345"],
//   },
//   {
//     icon: Phone,
//     title: "Phone",
//     details: ["(555) 123-SMOKE", "(555) 123-7665"],
//   },
//   {
//     icon: Clock,
//     title: "Hours",
//     details: ["Mon-Thu: 5PM – 10PM", "Fri-Sun: 4PM – 11PM"],
//   },
//   {
//     icon: Mail,
//     title: "Email",
//     details: ["info@smokedfusion.com", "reservations@smokedfusion.com"],
//   },
// ];

// const ContactPage = () => (
//   <motion.div
//     initial={{ opacity: 0 }}
//     animate={{ opacity: 1 }}
//     transition={{ duration: 0.8 }}
//     className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-amber-900"
//   >
//     <Navigation />

//     <section className="py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//             Visit <span className="text-amber-400">Us</span>
//           </h2>
//           <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
//             Ready to experience the magic of smoked fusion cuisine? We’re here to serve you.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
//           {/* Left: 4 cards split into 2x2 */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             {contactInfo.map((info, i) => (
//               <motion.div
//                 key={info.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: i * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{
//                   scale: 1.05,
//                   rotateY: 5,
//                   boxShadow: "0 20px 40px rgba(245,158,11,0.2)",
//                 }}
//                 className="bg-white/10 backdrop-blur-sm border border-amber-400/20 p-6 rounded-xl text-center transform-gpu"
//                 style={{ transformStyle: "preserve-3d" }}
//               >
//                 <info.icon className="w-12 h-12 text-amber-400 mx-auto mb-4" />
//                 <h3 className="text-xl font-bold text-white mb-3">{info.title}</h3>
//                 {info.details.map((d, j) => (
//                   <p key={j} className="text-gray-300 leading-relaxed">
//                     {d}
//                   </p>
//                 ))}
//               </motion.div>
//             ))}
//           </div>

//           {/* Right: Responsive Map */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: true }}
//             className=""
//           >
//             <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[32rem] rounded-xl overflow-hidden border border-amber-400/20">
//               <iframe
//                 title="Mangalagiri Location"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.052144816073!2d80.53758681487707!3d16.432132088366354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a35f0c57f8a5%3A0x6a6d4d5df5caf4c2!2sMangalagiri!5e0!3m2!1sen!2sin!4v1717021234567"
//                 className="w-full h-full"
//                 style={{ border: 0 }}
//                 allowFullScreen
//                 loading="lazy"
//               />
//             </div>
//           </motion.div>
//         </div>

//         {/* Action Buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           viewport={{ once: true }}
//           className="text-center mt-16"
//         >
//           <motion.button
//             whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(245,158,11,0.3)" }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-amber-500/25 transition-all duration-300 mr-4"
//           >
//             Make Reservation
//           </motion.button>
//         </motion.div>

//         {/* Footer */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 0.6 }}
//           viewport={{ once: true }}
//           className="mt-16 pt-8 border-t border-amber-400/20 text-center"
//         >
//           <p className="text-gray-400">
//             © 2023 Smoked Fusion. All rights reserved. | Crafted with passion and smoke.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   </motion.div>
// );

// export default ContactPage;

import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

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
    details: ["Mon-Thu: 5PM – 10PM", "Fri-Sun: 4PM – 11PM"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@smokedfusion.com", "reservations@smokedfusion.com"],
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
          className="text-4xl md:text-5xl font-bold text-white mb-6">
            Visit Us
          </h2>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
            Ready to experience the magic of smoked fusion cuisine? We’re here
            to serve you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          {/* Contact cards */}
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
                  boxShadow: "0 10px 30px rgba(245,158,11,0.5)", // soft gold shadow
                  transition: { duration: 0.25, delay: 0 }, // no delay on hover
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

          {/* Responsive Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[32rem] rounded-xl overflow-hidden border border-amber-400/20">
              <iframe
                title="Mangalagiri Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.052144816073!2d80.53758681487707!3d16.432132088366354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a35f0c57f8a5%3A0x6a6d4d5df5caf4c2!2sMangalagiri!5e0!3m2!1sen!2sin!4v1717021234567"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>

        {/* Call to action */}
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

        {/* Footer */}
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
