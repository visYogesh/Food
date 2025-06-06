// Services.tsx
import React, { useState, useRef, useEffect, CSSProperties } from "react";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";
import { Bell, Phone } from "lucide-react";

interface ServiceCardData {
  id: string;
  title: string;
  image: string;
  frontDescription: string;
  frontFooter: string;
  backItems: string[];
  route: string;
  footerLabel: string;
}

// Data for each card
const CARDS: ServiceCardData[] = [
  {
    id: "boxLunch",
    title: "BOX LUNCH",
    image: "/images/card/card1.png",
    frontDescription:
      "Looking to satisfy a small gathering or fuel up an entire sports squad? Our individually-packaged box lunches are the ideal choice. Choose from four different types of Barbecue Box Lunches.",
    frontFooter: "Individually Packaged – Minimum Order of 10",
    backItems: [
      "• Standard Box Lunch",
      "• Deluxe Box Lunch",
      "• Loaded Baker Box Lunch",
      "• Baker with Meat Box Lunch",
    ],
    route: "/catering/order",
    footerLabel: "Get A Quote",
  },
  {
    id: "classicBuffet",
    title: "CLASSIC BARBECUE BUFFET",
    image: "/images/card/card2.png",

    frontDescription:
      "We’ll deliver and set up or package perfectly for you to pick up, whatever is most convenient for you and your event. The Classic Buffet is the perfect barbecue meal for corporate events or family gatherings of 10 or more people.",
    frontFooter: "Delivery or Pick Up. Serves 10",
    backItems: [
      "• Choice of Two Meats (Pulled Pork, Brisket, Chicken Breast, Sausage)",
      "• Choice of Three Family-Size Sides (Barbecue Beans, Mac & Cheese, Potato Salad, etc.)",
      "• Fresh Breads & Condiments",
      "• Disposable Plates, Utensils & Napkins",
    ],
    route: "/catering/order",
    footerLabel: "Get A Quote",
  },
  {
    id: "packsPlatters",
    title: "PACKS, PLATTERS, & MORE",
    image: "/images/card/card3.png",

    frontDescription:
      "Build Your Own Big Yellow Box, indulge in a Pit-Smoked Loaded Baked Potato bar, creamy Mac & Cheese bar, or satisfy a crowd with a Slider Platter.",
    frontFooter: "Delivery or Pick Up. Serves 10 – 12",
    backItems: [
      "• Big Yellow Box (4 lbs Meat + 3 Sides + Breads)",
      "• Loaded Baked Potato Bar (Potatoes, Meats, Toppings)",
      "• Mac & Cheese Bar (Mac & Cheese + Choice of Meat)",
      "• Slider Platter (Assorted Sliders w/ Meat & Cheese)",
    ],
    route: "/catering/order",
    footerLabel: "Get A Quote",
  },
  {
    id: "fullService",
    title: "FULL-SERVICE BUFFET BARBECUE CATERING",
    image: "/images/card/card4.png",

    frontDescription:
      "Full-Service Buffet Barbecue Catering is the ultimate option for events or gatherings of 100 people or more. We take care of everything barbecue related so you can focus on your guests.",
    frontFooter: "Complimentary Delivery. Serves 100 +",
    backItems: [
      "• On-Site Pit Master & Servers",
      "• Custom Setup & Cleanup",
      "• Buffet Stations w/ Sliced Meats",
      "• Disposable Plates, Utensils & Napkins",
      "• Extra bullet point for demonstration",
    ],
    route: "/catering/order",
    footerLabel: "Get A Quote",
  },
];

/**
 * Single flippable card. Receives uniformHeight (in px).
 * Until uniformHeight > 0, it renders naturally (height: auto).
 * Once uniformHeight is set, every face is forced to that exact height.
 * The back face places its image at 70% of uniformHeight.
 */
const ServiceCard: React.FC<{
  card: ServiceCardData;
  uniformHeight: number;
  setFrontRef: (el: HTMLDivElement | null) => void;
  setBackRef: (el: HTMLDivElement | null) => void;
}> = ({ card, uniformHeight, setFrontRef, setBackRef }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Container style: if uniformHeight>0, fix it; else 'auto'
  const flipContainerStyles: CSSProperties = {
    position: "relative",
    width: "100%",
    height: uniformHeight > 0 ? `${uniformHeight}px` : "auto",
    transformStyle: "preserve-3d",
    transition: "transform 0.6s ease",
    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
  };

  // Face style: same height as container (or auto until measured)
  const faceStyles: CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: uniformHeight > 0 ? `${uniformHeight}px` : "auto",
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    overflow: "hidden",
    // borderRadius: "2rem",
    backgroundColor: "white",
    boxShadow:
      "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
    display: "flex",
    flexDirection: "column",
  };

  // If uniformHeight is known, backImageHeight = 70% of it
  const backImageHeight = uniformHeight > 0 ? 0.7 * uniformHeight : 0;

  return (
    <div style={{ perspective: "1000px" }} className="w-full">
      <div style={flipContainerStyles}>
        {/* ── FRONT FACE ── */}
        <div ref={setFrontRef} style={faceStyles} className="rounded-[35px]">
          {/* Flip icon (front) */}
          <button
            onClick={() => setIsFlipped(true)}
            className="
              absolute
              -top-0 right-6 
              bg-gray-300 rounded-full
              rotate-90
              text-black hover:text-black
              text-2xl my-2
              focus:outline-none
            "
            aria-label="Flip Card"
          >
            ↻
          </button>

          {/* IMAGE (front) */}
          <img
            src={card.image}
            alt={card.title}
            className="w-full"
            style={{
              height: "200px",
              objectFit: "cover",
              flexShrink: 0,
            }}
          />

          {/* TEXT CONTENT (front) */}
          <div className="p-4 flex-grow">
            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
            <p className="text-gray-600 mb-4 ">{card.frontDescription}</p>
            <p className="text-black font-semibold">{card.frontFooter}</p>
          </div>

          {/* FRONT BUTTON */}
          <div className="p-4">
            <Link
              to={card.route}
              className="
                block border-2 border-amber-500 bg-yellow-400 hover:bg-yellow-500 text-black
                 text-center font-semibold 
                py-2 px-4 rounded-2xl
              "
              // border-2 border-white hover:border-amber-500 text-white
              // hover:text-amber-500 font-semibold uppercase rounded-lg transition
            >
              Order Now
            </Link>
          </div>
        </div>

        {/* ── BACK FACE ── */}
        <div
          ref={setBackRef}
          style={{
            ...faceStyles,
            transform: "rotateY(180deg)",
          }}
          className="rounded-[35px]"
        >
          {/* Flip icon (back) */}
          <button
            onClick={() => setIsFlipped(false)}
            className="
              absolute
              -top-0 right-6 
              bg-gray-300 rounded-full
              rotate-90
              text-black hover:text-black
              text-2xl my-2
              focus:outline-none
            "
            aria-label="Flip Card Back"
          >
            ↻
          </button>

          {/* IMAGE (back) – 70% of uniformHeight */}
          {uniformHeight > 0 && (
            <img
              src={card.image}
              alt={`${card.title} (back)`}
              className="w-full"
              style={{
                height: `150px`,
                objectFit: "cover",
                flexShrink: 0,
              }}
            />
          )}

          {/* BACK CONTENT (bullet items). If uniformHeight>0, it scrolls if too tall */}
          <div
            className={`p-4 flex-grow ${
              uniformHeight > 0 ? "overflow-y-auto" : ""
            }`}
          >
            <p className="font-bold">What We Provide</p>

            {card.backItems.length > 0 ? (
              <ul className="py-8 list-disc list-inside text-gray-700">
                {card.backItems.map((item, idx) => {
                  const text = item.startsWith("• ") ? item.slice(2) : item;
                  return (
                    <li key={idx} className="mb-1">
                      {text}
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="italic text-gray-500">No additional items.</p>
            )}
          </div>

          {/* BACK BUTTON */}
          <div className="p-4">
            <Link
              to={card.route}
              className="
                block border-2 bg-green-600 hover:bg-green-700 border-gren-500
                text-black text-center font-semibold 
                py-2 px-4 rounded-2xl
              "
            >
              {card.footerLabel}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  // Refs arrays to hold front/back face elements for every card
  const frontRefs = useRef<Array<HTMLDivElement | null>>([]);
  const backRefs = useRef<Array<HTMLDivElement | null>>([]);

  // Once measured, this becomes the one true height (in px) for all cards
  const [uniformHeight, setUniformHeight] = useState<number>(0);

  // After mount, measure all card faces and pick the largest height
  useEffect(() => {
    // If refs aren’t all mounted yet, wait
    if (
      frontRefs.current.length !== CARDS.length ||
      backRefs.current.length !== CARDS.length
    ) {
      return;
    }

    const allHeights: number[] = [];
    CARDS.forEach((_, idx) => {
      const f = frontRefs.current[idx];
      const b = backRefs.current[idx];
      if (f) allHeights.push(f.offsetHeight);
      if (b) allHeights.push(b.offsetHeight);
    });

    if (allHeights.length > 0) {
      const max = Math.max(...allHeights);
      setUniformHeight(max);
    }
  }, [frontRefs.current.length, backRefs.current.length]);

  return (
    <div className="py-20 select-non w-full bg-gradient-to-br from-black via-gray-900 to-amber-900 min-h-screen">
      {/* ─── Hero / Intro Section ─── */}
      <Navigation />
      <div
        className="relative w-full h-[80vh] flex flex-col justify-center items-center text-center text-white"
        style={{
          backgroundImage: `url("/images/blap2.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative">
          {/* Background image + overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/path/to/your/background.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-3xl" />

          {/* Content, now wrapped in a gray box */}
          <div className="relative z-10 flex justify-center px-4 py-12">
            <div
              className="
              w-full
              max-w-3xl
              bg-opacity-70
              rounded-lg
              p-8
              text-center
            "
            >
              {/* <h1 className="text-6xl lg:text-7xl md:text-6xl font-extrabold  text-white">
                Barbecue Catering
              </h1> */}
              <h1 className="text-white text-center text-6xl md:text-6xl lg:text-7xl font-extrabold tracking-wide leading-tight bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent drop-shadow-[0_6px_6px_rgba(215,215,0,0.4)]">
                Barbecue Catering
              </h1>

              <p className="mt-4 text-2xl sm:text-4xl text-gray-100">
                Any Event. Any Size. Any Time.
              </p>

              
              <div className="py-2  mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => (window.location.href = "/catering/order")}
                  className="font-bold flex items-center justify-center border border-amber-400 gap-2 px-6 py-3 bg-amber-400 hover:bg-amber-500 text-black  uppercase rounded-lg transition"
                >
                  <Bell className="w-5 h-5" />
                  <span>Order Catering</span>
                </button>

                <button
                  onClick={() => (window.location.href = "/catering/quote")}
                  className="bg-white flex items-center justify-center gap-2 px-6 py-3 border border-amber-400 hover:border-amber-500 hover:bg-amber-400  text-black hover:text-black font-bold uppercase rounded-lg transition"
                >
                  <Phone className="w-5 h-5" />
                  <span>Get a Quote</span>
                </button>
              </div>

              <p className="mt-6 text-lg font-bold text-gray-200">
                For questions or to build a custom menu, call{" "}
                <a
                  href="tel:+12145974922"
                  className="underline decoration-amber-400 decoration-2"
                >
                  +1-214-597-4922
                </a>{" "}
                to speak with a Barbecue Catering Expert today!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ─── cards start ─── */}
      <div className="p-6 mb-12 ">
        <h2 className="text-3xl font-bold mb-6 text-amber-400 text-center py-8">
          Texas-Style Barbecue Catering
        </h2>
        <h2 className="uppercase text-3xl sm:text-6xl font-bold mb-6 text-white text-center py-4">
          Because the Best Memories Are Made Over Barbecue
        </h2>

        <p className="text-white text-center max-w-4xl mx-auto text-lg leading-relaxed">
          We've been catering legendary, Texas-style BBQ for over 60 years, so
          we know a thing or two about making your events unforgettable. Whether
          you're feeding 10 or 10,000, our BBQ Catering Experts have you covered
          with a variety of options that are sure to please any appetite and
          budget.
        </p>

        {/* Parent container (full-width) */}
        {/* Responsive grid: 1 on small, 2 on md, 4 on lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          {CARDS.map((card, idx) => (
            <ServiceCard
              key={card.id}
              card={card}
              uniformHeight={uniformHeight}
              setFrontRef={(el) => (frontRefs.current[idx] = el)}
              setBackRef={(el) => (backRefs.current[idx] = el)}
            />
          ))}
        </div>
      </div>

      {/* I dooooo (pushed down so it does not overlap cards) */}
      <div className="py-12 w-full mt-12">
        <div className="flex flex-col md:flex-row items-center gap-8 w-full">
          {/* ===== Image Column ===== */}
          <div className="order-1 md:order-2 w-full md:w-1/2 flex justify-end">
            <img
              src="/images/blap3.png"
              alt="Barbecue catering"
              className="w-[850px] max-w-md md:max-w-none rounded-3xl shadow-lg object-cover"
            />
          </div>

          {/* ===== Content Column ===== */}
          <div className="order-2 md:order-1 w-full md:w-1/2 flex justify-start">
            <div className="bg-gray-50 rounded-3xl shadow-lg transform sm:-rotate-6 lg-rotate-6 -rotate-0 p-6 max-w-7xl">
              <h3 className="text-2xl sm:text-4xl font-bold text-amber-500">
                SAY “I DO” TO BARBECUE
              </h3>
              <h4 className="mt-2 text-xl font-semibold text-black">
                We cater Weddings, Showers, & Rehearsals!
              </h4>
              <p className="mt-4 text-black text-xl py-4">
                We are delighted to bring the warmth and comfort of our
                Texas-style barbecue to your wedding celebration. Since 1941, we
                have been serving our community with a side of Southern
                hospitality, making every occasion memorable and delicious.
              </p>
              <p className="mt-2 text-black text-xl py-8">
                Let our catering specialists handle every detail, from
                customizable menus and attentive service to our famous barbecue
                buffets and interactive stations. Trust Smoked Fusion to create a
                remarkable experience for you and your guests on your special
                day with better smoke🔥.
              </p>
              <button
                onClick={() => (window.location.href = "/catering/quote")}
                className="w-full border-2 border-amber-400 mt-6 px-5 py-2 bg-transparent hover:bg-amber-500 text-black font-semibold uppercase rounded-lg transition"
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="py-12 w-full mt-12">
        <div className="order-1 md:order-2 w-full md:w-1/2 flex justify-end">
          <img
            src="/images/dick.bin"
            alt="Barbecue catering"
            className="w-[850px] max-w-md md:max-w-none rounded-3xl shadow-lg object-cover"
          />
        </div>
      </div> */}
    </div>
  );
};

export default Services;
