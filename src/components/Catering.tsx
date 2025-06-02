// src/components/Catering.tsx
import React from "react";
import Navigation from "./Navigation";
import { motion } from "framer-motion";

const Catering: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative h-[60vh] md:h-[70vh] w-full">
        <img
          src="https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=1350&q=80"
          alt="BBQ Catering Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Texas-Style Barbecue Catering
          </h1>
          <p className="max-w-2xl text-lg md:text-xl leading-relaxed">
            We’ve been catering legendary, Texas-style BBQ for over 60
            years—feeding anywhere from 10 to 10,000 guests. Let us make your
            next event unforgettable.
          </p>
        </motion.div>
        {/*  */}
      </section>

      {/* “SAY ‘I DO’ TO BARBECUE” FLIP CARD */}
      <motion.div
        className="max-w-3xl mx-auto my-12 px-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div
          className="group mx-auto perspective"
          style={{ perspective: "1200px" }}
        >
          <div
            className="relative w-full bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden h-[400px] transition-transform duration-700 group-hover:[transform:rotateY(180deg)]"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Front Face */}
            <div
              className="absolute inset-0 flex flex-col justify-start"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(0deg)",
              }}
            >
              {/* Card Image */}
              <img
                src="https://images.unsplash.com/photo-1528731708534-816fe59f90af?auto=format&fit=crop&w=800&q=80"
                alt="Wedding BBQ"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-amber-300 mb-2">
                  SAY “I DO” TO BARBECUE
                </h2>
                <h3 className="text-xl font-semibold mb-3">
                  Weddings • Showers • Rehearsals
                </h3>
                <p className="text-base leading-relaxed mb-2">
                  Bring the warmth of Texas-style barbecue to your big day.
                  Since 1941, we’ve served our community with a side of Southern
                  hospitality—making every occasion delicious and memorable.
                </p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Our Catering Experts handle menus, service, buffets, and
                  interactive stations. Trust Dickey’s to create an experience
                  your guests will talk about for years.
                </p>
              </div>
            </div>

            {/* Back Face */}
            <div
              className="absolute inset-0 bg-amber-500 p-8 flex flex-col justify-center items-center"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <h2 className="text-2xl font-bold text-black mb-3">
                Ready to Plan?
              </h2>
              <p className="text-base text-black mb-6 text-center">
                Click below to request a custom proposal from our Catering
                Experts.
              </p>
              <button className="bg-black hover:bg-gray-800 text-white font-semibold py-2 px-6 rounded-full transition-colors">
                Get a Quote
              </button>
            </div>
          </div>
        </div>
        {/*  */}
      </motion.div>

      {/* BBQ CATERING EXPERTS – 4 FLIP CARDS GRID */}
      <motion.section
        className="max-w-5xl mx-auto px-4 mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-amber-300 text-center mb-10">
          BBQ CATERING EXPERTS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Card 1: Full-Service Catering */}
          <div className="group perspective" style={{ perspective: "1200px" }}>
            <div
              className="relative bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden h-[350px] transition-transform duration-700 group-hover:[transform:rotateY(180deg)]"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front Face */}
              <div
                className="absolute inset-0 flex flex-col justify-start"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(0deg)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80"
                  alt="Full-Service Catering"
                  className="w-full h-40 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-amber-300 mb-2">
                    Full-Service Catering
                  </h3>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    Sit back and relax—our Pit Boss will set up & serve.
                    Includes 2 hand-sliced meats, 3 sides, rolls, relish tray,
                    sauces, paperware. Minimum 100 guests.
                  </p>
                </div>
              </div>
              {/* Back Face */}
              <div
                className="absolute inset-0 bg-amber-600 p-6 flex flex-col justify-center items-center"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <h3 className="text-2xl font-bold mb-4 text-black">
                  Full-Service Catering
                </h3>
                <p className="text-base text-black mb-6 text-center">
                  2 meats • 3 sides • rolls • relish tray • sauces • on-site Pit
                  Boss • Paperware
                </p>
                <button className="bg-black hover:bg-gray-800 text-white font-semibold py-2 px-5 rounded-full transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            {/*  */}
          </div>

          {/* Card 2: Delivery Buffet */}
          <div className="group perspective" style={{ perspective: "1200px" }}>
            <div
              className="relative bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden h-[350px] transition-transform duration-700 group-hover:[transform:rotateY(180deg)]"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front Face */}
              <div
                className="absolute inset-0 flex flex-col justify-start"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(0deg)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1552332386-f8dd00dc2f6e?auto=format&fit=crop&w=800&q=80"
                  alt="Delivery Buffet"
                  className="w-full h-40 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-amber-300 mb-2">
                    Delivery Buffet
                  </h3>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    Self-service convenience—delivered & set up or packaged for
                    pick-up. Includes 2 meats, 3 sides, rolls, relish tray,
                    sauces, paperware. Min. 10.
                  </p>
                </div>
              </div>
              {/* Back Face */}
              <div
                className="absolute inset-0 bg-amber-600 p-6 flex flex-col justify-center items-center"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <h3 className="text-2xl font-bold mb-4 text-black">
                  Delivery Buffet
                </h3>
                <p className="text-base text-black mb-6 text-center">
                  2 meats • 3 sides • rolls • relish tray • sauces • Paperware •
                  Min. 10 people
                </p>
                <button className="bg-black hover:bg-gray-800 text-white font-semibold py-2 px-5 rounded-full transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            {/*  */}
          </div>

          {/* Card 3: Box Lunches & Party Platters */}
          <div className="group perspective" style={{ perspective: "1200px" }}>
            <div
              className="relative bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden h-[350px] transition-transform duration-700 group-hover:[transform:rotateY(180deg)]"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front Face */}
              <div
                className="absolute inset-0 flex flex-col justify-start"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(0deg)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1536336460028-8524c8b9f8fb?auto=format&fit=crop&w=800&q=80"
                  alt="Box Lunches & Platters"
                  className="w-full h-40 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-amber-300 mb-2">
                    Box Lunches &amp; Party Platters
                  </h3>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    Box Lunches from $7.95/pp—sandwich or salad + chips, cookie,
                    pickles, onions, sauce. Party platters feed 10–12 people.
                    Perfect for smaller gatherings.
                  </p>
                </div>
              </div>
              {/* Back Face */}
              <div
                className="absolute inset-0 bg-amber-600 p-6 flex flex-col justify-center items-center"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <h3 className="text-2xl font-bold mb-4 text-black">
                  Box Lunches & Platters
                </h3>
                <p className="text-base text-black mb-6 text-center">
                  Starting at $7.95/pp. Sandwiches, salads, chips, dessert,
                  pickles, onions, sauce. Platters feed up to 12.
                </p>
                <button className="bg-black hover:bg-gray-800 text-white font-semibold py-2 px-5 rounded-full transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            {/*  */}
          </div>

          {/* Card 4: Custom & Tailgate */}
          <div className="group perspective" style={{ perspective: "1200px" }}>
            <div
              className="relative bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden h-[350px] transition-transform duration-700 group-hover:[transform:rotateY(180deg)]"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front Face */}
              <div
                className="absolute inset-0 flex flex-col justify-start"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(0deg)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1522938974443-ddd0210f9b71?auto=format&fit=crop&w=800&q=80"
                  alt="Custom & Tailgate"
                  className="w-full h-40 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-amber-300 mb-2">
                    Custom &amp; Tailgate
                  </h3>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    Build your own menu or let us handle everything. Tailgate
                    options: sliders, butcher tacos, sandwiches, sides, and
                    more—perfect for any budget or craving.
                  </p>
                </div>
              </div>
              {/* Back Face */}
              <div
                className="absolute inset-0 bg-amber-600 p-6 flex flex-col justify-center items-center"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <h3 className="text-2xl font-bold mb-4 text-black">
                  Custom & Tailgate
                </h3>
                <p className="text-base text-black mb-6 text-center">
                  Supply your own proteins + sides or let us do it all. Tailgate
                  menus to satisfy any craving.
                </p>
                <button className="bg-black hover:bg-gray-800 text-white font-semibold py-2 px-5 rounded-full transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </motion.section>

      {/* RECENT CUSTOMER LOVE & FAQ */}
      <motion.section
        className="max-w-4xl mx-auto px-4 mb-20 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <h2 className="text-3xl font-extrabold text-amber-300 mb-4">
          RECENT CUSTOMER LOVE
        </h2>
        <p className="text-base leading-relaxed mb-6">
          Have questions or want more info? Check out our{" "}
          <a
            href="/catering/faq"
            className="underline text-amber-200 hover:text-amber-100 transition-colors"
          >
            FREQUENTLY ASKED QUESTIONS
          </a>
        </p>
        <p className="italic text-gray-300 mb-2">PRO TIP</p>
        <p className="text-base">
          Download the Dickey’s app for the Legit Barbecue Experience!
        </p>
        {/*  */}
      </motion.section>
    </div>
  );
};

export default Catering;
