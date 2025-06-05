// // Services.tsx
// import React, { useState, useRef, useEffect, CSSProperties } from "react";
// import { useNavigate } from "react-router-dom";
// import Navigation from "../components/Navigation";
// import { Link } from "react-router-dom";

// interface ServiceCardData {
//   id: string;
//   title: string;
//   image: string;
//   frontDescription: string;
//   frontFooter: string;
//   backItems: string[];
//   route: string;
//   footerLabel: string;
// }

// // Data for each card
// const CARDS: ServiceCardData[] = [
//   {
//     id: "boxLunch",
//     title: "BOX LUNCH",
//     image: "/images/blap.jpg",
//     frontDescription:
//       "Looking to satisfy a small gathering or fuel up an entire sports squad? Our individually-packaged box lunches are the ideal choice. Choose from four different types of Barbecue Box Lunches.",
//     frontFooter: "Individually Packaged – Minimum Order of 10",
//     backItems: [
//       "• Standard Box Lunch",
//       "• Deluxe Box Lunch",
//       "• Loaded Baker Box Lunch",
//       "• Baker with Meat Box Lunch",
//     ],
//     route: "/catering/order",
//     footerLabel: "Get A Quote",
//   },
//   {
//     id: "classicBuffet",
//     title: "CLASSIC BARBECUE BUFFET",
//     image: "/images/blap.jpg",
//     frontDescription:
//       "We’ll deliver and set up or package perfectly for you to pick up, whatever is most convenient for you and your event. The Classic Buffet is the perfect barbecue meal for corporate events or family gatherings of 10 or more people.",
//     frontFooter: "Delivery or Pick Up. Serves 10",
//     backItems: [
//       "• Choice of Two Meats (Pulled Pork, Brisket, Chicken Breast, Sausage)",
//       "• Choice of Three Family-Size Sides (Barbecue Beans, Mac & Cheese, Potato Salad, etc.)",
//       "• Fresh Breads & Condiments",
//       "• Disposable Plates, Utensils & Napkins",
//     ],
//     route: "/catering/order",
//     footerLabel: "Get A Quote",
//   },
//   {
//     id: "packsPlatters",
//     title: "PACKS, PLATTERS, & MORE",
//     image: "/images/blap.jpg",
//     frontDescription:
//       "Build Your Own Big Yellow Box, indulge in a Pit-Smoked Loaded Baked Potato bar, creamy Mac & Cheese bar, or satisfy a crowd with a Slider Platter.",
//     frontFooter: "Delivery or Pick Up. Serves 10 – 12",
//     backItems: [
//       "• Big Yellow Box (4 lbs Meat + 3 Sides + Breads)",
//       "• Loaded Baked Potato Bar (Potatoes, Meats, Toppings)",
//       "• Mac & Cheese Bar (Mac & Cheese + Choice of Meat)",
//       "• Slider Platter (Assorted Sliders w/ Meat & Cheese)",
//     ],
//     route: "/catering/order",
//     footerLabel: "Get A Quote",
//   },
//   {
//     id: "fullService",
//     title: "FULL-SERVICE BUFFET BARBECUE CATERING",
//     image: "/images/blap3.png",
//     frontDescription:
//       "Full-Service Buffet Barbecue Catering is the ultimate option for events or gatherings of 100 people or more. We take care of everything barbecue related so you can focus on your guests.",
//     frontFooter: "Complimentary Delivery. Serves 100 +",
//     backItems: [
//       "• On-Site Pit Master & Servers",
//       "• Custom Setup & Cleanup",
//       "• Buffet Stations w/ Sliced Meats",
//       "• Disposable Plates, Utensils & Napkins",
//       "• Extra bullet point for demonstration",
//     ],
//     route: "/catering/order",
//     footerLabel: "Get A Quote",
//   },
// ];

// /**
//  * A single flippable service card.
//  * - On the front, shows: image / title / description / frontFooter / "Order Now" button
//  * - On the back, shows: a bullet-list of backItems / footerLabel button
//  *
//  * Clicking the ↻ icon toggles front ↔ back.
//  */
// const ServiceCard: React.FC<{ card: ServiceCardData }> = ({ card }) => {
//   const [flipped, setFlipped] = useState(false);

//   return (
//     <div className="relative bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
//       {/* ↻ icon in top-right */}
//       <button
//         onClick={() => setFlipped((prev) => !prev)}
//         className="
//           absolute top-2 right-2
//           text-gray-500 hover:text-gray-700
//           text-xl
//           z-10
//           focus:outline-none
//         "
//         aria-label="Flip Card"
//       >
//         ↻
//       </button>

//       {/** If not flipped, show the front */}
//       {!flipped ? (
//         <>
//           {/* Top image */}
//           <img
//             src={card.image}
//             alt={card.title}
//             className="w-full h-48 object-cover"
//           />

//           {/* Front text content */}
//           <div className="p-4 flex-grow">
//             <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
//             <p className="text-gray-600 mb-4">{card.frontDescription}</p>
//             <p className="text-gray-500 font-medium">{card.frontFooter}</p>
//           </div>

//           {/* Front "Order Now" button */}
//           <div className="p-4">
//             <Link
//               to={card.route}
//               className="
//                 block bg-blue-600 hover:bg-blue-700
//                 text-white text-center font-semibold
//                 py-2 px-4 rounded
//               "
//             >
//               Order Now
//             </Link>
//           </div>
//         </>
//       ) : (
//         <>
//           {/** Back content */}
//           <div className="p-4 flex-grow overflow-auto">
//                 <img src="/images/blap.jpg" alt="" />

//             {card.backItems.length > 0 ? (

//               <ul className="list-disc list-inside text-gray-700">
//                 <h1 className="my-8">Details</h1>
//                 {card.backItems.map((item, idx) => {
//                   // Strip the leading "• " if present
//                   const text = item.startsWith("• ") ? item.slice(2) : item;
//                   return (
//                     <li key={idx} className="mb-1">
//                       {text}
//                     </li>
//                   );
//                 })}
//               </ul>
//             ) : (
//               <p className="italic text-gray-500">No additional items.</p>
//             )}
//           </div>

//           {/* Back footerLabel button */}
//           <div className="p-4">
//             <Link
//               to={card.route}
//               className="
//                 block bg-green-600 hover:bg-green-700
//                 text-white text-center font-semibold
//                 py-2 px-4 rounded
//               "
//             >
//               {card.footerLabel}
//             </Link>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// const Services: React.FC = () => {
//   return (
//     // main
//     <div className="w-full bg-gradient-to-br from-black via-gray-900 to-amber-900">
//       {/* ─── Hero / Intro Section ─── */}
//       <Navigation />
//       <div
//         className="relative w-full h-[80vh] flex flex-col justify-center items-center text-center text-white"
//         style={{
//           backgroundImage: `url("/images/blap2.jpg")`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-50" />
//         <div className="relative z-10 px-4">
//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase">
//             Barbecue Catering
//           </h1>
//           <p className="mt-4 text-lg sm:text-xl">
//             Any Event. Any Size. Any Time.
//           </p>
//           <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
//             <button
//               onClick={() => (window.location.href = "/catering/order")}
//               className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold uppercase rounded-lg transition"
//             >
//               Order Catering
//             </button>
//             <button
//               onClick={() => (window.location.href = "/catering/quote")}
//               className="px-6 py-3 border-2 border-white hover:border-amber-500 text-white hover:text-amber-500 font-semibold uppercase rounded-lg transition"
//             >
//               Get a Quote
//             </button>
//           </div>
//           <p className="mt-6 text-sm">
//             For questions or to build a custom menu, call{" "}
//             <a href="tel:+18662272328" className="underline text-cyan-500">
//               +1-866-227-2328
//             </a>{" "}
//             to speak with a Barbecue Catering Expert today!
//           </p>
//         </div>
//       </div>

//       {/* ─── cards start (with flip) ─── */}
//       <div className="p-6">
//         <h2 className="text-3xl font-bold mb-6 text-white text-center py-8">Our Catering Services</h2>

//         {/*
//           Responsive grid:
//           - On small screens: one column
//           - On md (≥768px): two columns
//           - On lg (≥1024px): four columns
//         */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {CARDS.map((card) => (
//             <ServiceCard key={card.id} card={card} />
//           ))}
//         </div>
//       </div>

//       {/* I dooooo */}
//       <div className="py-12 w-full">
//         <div className="flex flex-col md:flex-row items-center gap-8 w-full">
//           {/* ===== Image Column ===== */}
//           <div className="order-1 md:order-2 w-full md:w-1/2 flex justify-end">
//             <img
//               src="/images/blap3.png"
//               alt="Barbecue catering"
//               className="w-[850px] max-w-md md:max-w-none rounded-3xl shadow-lg object-cover"
//             />
//           </div>

//           {/* ===== Content Column ===== */}
//           <div className="order-2 md:order-1 w-full md:w-1/2 flex justify-start">
//             <div className="bg-gray-50 rounded-3xl shadow-lg transform -rotate-6 p-6 max-w-7xl">
//               <h3 className="text-2xl sm:text-4xl font-bold text-amber-500">
//                 SAY “I DO” TO BARBECUE
//               </h3>
//               <h4 className="mt-2 text-xl font-semibold text-black">
//                 We cater Weddings, Showers, & Rehearsals!
//               </h4>
//               <p className="mt-4 text-black text-xl py-4">
//                 We are delighted to bring the warmth and comfort of our
//                 Texas-style barbecue to your wedding celebration. Since 1941, we
//                 have been serving our community with a side of Southern
//                 hospitality, making every occasion memorable and delicious.
//               </p>
//               <p className="mt-2 text-black text-xl py-8">
//                 Let our catering specialists handle every detail, from
//                 customizable menus and attentive service to our famous barbecue
//                 buffets and interactive stations. Trust Dickey’s to create a
//                 remarkable experience for you and your guests on your special
//                 day.
//               </p>
//               <button
//                 onClick={() => (window.location.href = "/catering/quote")}
//                 className="w-full border-2 border-amber-400 mt-6 px-5 py-2 bg-transparent hover:bg-amber-500 text-black font-semibold uppercase rounded-lg transition"
//               >
//                 Get a Quote
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;

// Services.tsx
// import React, { useState, CSSProperties } from "react";
// import Navigation from "../components/Navigation";
// import { Link } from "react-router-dom";

// interface ServiceCardData {
//   id: string;
//   title: string;
//   image: string;
//   frontDescription: string;
//   frontFooter: string;
//   backItems: string[];
//   route: string;
//   footerLabel: string;
// }

// // Data for each card
// const CARDS: ServiceCardData[] = [
//   {
//     id: "boxLunch",
//     title: "BOX LUNCH",
//     image: "/images/blap.jpg",
//     frontDescription:
//       "Looking to satisfy a small gathering or fuel up an entire sports squad? Our individually-packaged box lunches are the ideal choice. Choose from four different types of Barbecue Box Lunches.",
//     frontFooter: "Individually Packaged – Minimum Order of 10",
//     backItems: [
//       "• Standard Box Lunch",
//       "• Deluxe Box Lunch",
//       "• Loaded Baker Box Lunch",
//       "• Baker with Meat Box Lunch",
//     ],
//     route: "/catering/order",
//     footerLabel: "Get A Quote",
//   },
//   {
//     id: "classicBuffet",
//     title: "CLASSIC BARBECUE BUFFET",
//     image: "/images/blap.jpg",
//     frontDescription:
//       "We’ll deliver and set up or package perfectly for you to pick up, whatever is most convenient for you and your event. The Classic Buffet is the perfect barbecue meal for corporate events or family gatherings of 10 or more people.",
//     frontFooter: "Delivery or Pick Up. Serves 10",
//     backItems: [
//       "• Choice of Two Meats (Pulled Pork, Brisket, Chicken Breast, Sausage)",
//       "• Choice of Three Family-Size Sides (Barbecue Beans, Mac & Cheese, Potato Salad, etc.)",
//       "• Fresh Breads & Condiments",
//       "• Disposable Plates, Utensils & Napkins",
//     ],
//     route: "/catering/order",
//     footerLabel: "Get A Quote",
//   },
//   {
//     id: "packsPlatters",
//     title: "PACKS, PLATTERS, & MORE",
//     image: "/images/blap.jpg",
//     frontDescription:
//       "Build Your Own Big Yellow Box, indulge in a Pit-Smoked Loaded Baked Potato bar, creamy Mac & Cheese bar, or satisfy a crowd with a Slider Platter.",
//     frontFooter: "Delivery or Pick Up. Serves 10 – 12",
//     backItems: [
//       "• Big Yellow Box (4 lbs Meat + 3 Sides + Breads)",
//       "• Loaded Baked Potato Bar (Potatoes, Meats, Toppings)",
//       "• Mac & Cheese Bar (Mac & Cheese + Choice of Meat)",
//       "• Slider Platter (Assorted Sliders w/ Meat & Cheese)",
//     ],
//     route: "/catering/order",
//     footerLabel: "Get A Quote",
//   },
//   {
//     id: "fullService",
//     title: "FULL-SERVICE BUFFET BARBECUE CATERING",
//     image: "/images/blap3.png",
//     frontDescription:
//       "Full-Service Buffet Barbecue Catering is the ultimate option for events or gatherings of 100 people or more. We take care of everything barbecue related so you can focus on your guests.",
//     frontFooter: "Complimentary Delivery. Serves 100 +",
//     backItems: [
//       "• On-Site Pit Master & Servers",
//       "• Custom Setup & Cleanup",
//       "• Buffet Stations w/ Sliced Meats",
//       "• Disposable Plates, Utensils & Napkins",
//       "• Extra bullet point for demonstration",
//     ],
//     route: "/catering/order",
//     footerLabel: "Get A Quote",
//   },
// ];

// /**
//  * A single flippable service card with a fixed height (400px).
//  * - On the front: image / title / description / frontFooter / "Order Now" button
//  * - On the back: bullet-list of backItems / footerLabel button
//  *
//  * Uses inline styles for a 0.6s 3D rotation. Each card is forced to 400px height
//  * so that it always shows up immediately on the page.
//  */
// const ServiceCard: React.FC<{ card: ServiceCardData }> = ({ card }) => {
//   const [isFlipped, setIsFlipped] = useState(false);

//   // Container style (fix height: 400px, preserve-3d, smooth 0.6s rotation)
//   const flipContainerStyles: CSSProperties = {
//     position: "relative",
//     width: "100%",
//     height: "400px",
//     transformStyle: "preserve-3d",
//     transition: "transform 0.6s ease",
//     transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
//   };

//   // Face style (absolute, full, hidden backside, white background, shadow, flex-col)
//   const faceStyles: CSSProperties = {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//     backfaceVisibility: "hidden",
//     WebkitBackfaceVisibility: "hidden",
//     overflow: "hidden",
//     borderRadius: "0.5rem", // roughly Tailwind's rounded-lg
//     backgroundColor: "white",
//     boxShadow:
//       "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
//     display: "flex",
//     flexDirection: "column",
//   };

//   return (
//     <div style={{ perspective: "1000px" }} className="w-full">
//       <div style={flipContainerStyles}>
//         {/* ── FRONT FACE ── */}
//         <div style={faceStyles}>
//           {/* Flip icon (front) */}
//           <button
//             onClick={() => setIsFlipped(true)}
//             className="
//               absolute top-2 right-2
//               text-gray-500 hover:text-gray-700
//               text-xl z-10
//               focus:outline-none
//             "
//             aria-label="Flip Card"
//           >
//             ↻
//           </button>

//           {/* IMAGE */}
//           <img
//             src={card.image}
//             alt={card.title}
//             className="w-full h-48 object-cover flex-shrink-0"
//           />

//           {/* TEXT CONTENT */}
//           <div className="p-4 flex-grow overflow-y-auto">
//             <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
//             <p className="text-gray-600 mb-4">{card.frontDescription}</p>
//             <p className="text-gray-500 font-medium">{card.frontFooter}</p>
//           </div>

//           {/* FRONT BUTTON */}
//           <div className="p-4">
//             <Link
//               to={card.route}
//               className="
//                 block bg-blue-600 hover:bg-blue-700
//                 text-white text-center font-semibold
//                 py-2 px-4 rounded
//               "
//             >
//               Order Now
//             </Link>
//           </div>
//         </div>

//         {/* ── BACK FACE ── */}
//         <div
//           style={{
//             ...faceStyles,
//             transform: "rotateY(180deg)",
//           }}
//         >
//           {/* Flip icon (back) */}
//           <button
//             onClick={() => setIsFlipped(false)}
//             className="
//               absolute top-2 right-2
//               text-gray-500 hover:text-gray-700
//               text-xl z-10
//               focus:outline-none
//             "
//             aria-label="Flip Card Back"
//           >
//             ↻
//           </button>

//           {/* BACK CONTENT (bullet items) */}
//           <div className="p-4 flex-grow overflow-y-auto">
//             {card.backItems.length > 0 ? (
//               <ul className="list-disc list-inside text-gray-700">
//                 {card.backItems.map((item, idx) => {
//                   const text = item.startsWith("• ") ? item.slice(2) : item;
//                   return (
//                     <li key={idx} className="mb-1">
//                       {text}
//                     </li>
//                   );
//                 })}
//               </ul>
//             ) : (
//               <p className="italic text-gray-500">No additional items.</p>
//             )}
//           </div>

//           {/* BACK BUTTON */}
//           <div className="p-4">
//             <Link
//               to={card.route}
//               className="
//                 block bg-green-600 hover:bg-green-700
//                 text-white text-center font-semibold
//                 py-2 px-4 rounded
//               "
//             >
//               {card.footerLabel}
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Services: React.FC = () => {
//   return (
//     <div className="w-full bg-gradient-to-br from-black via-gray-900 to-amber-900 min-h-screen">
//       {/* ─── Hero / Intro Section ─── */}
//       <Navigation />
//       <div
//         className="relative w-full h-[80vh] flex flex-col justify-center items-center text-center text-white"
//         style={{
//           backgroundImage: `url("/images/blap2.jpg")`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-50" />
//         <div className="relative z-10 px-4">
//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase">
//             Barbecue Catering
//           </h1>
//           <p className="mt-4 text-lg sm:text-xl">
//             Any Event. Any Size. Any Time.
//           </p>
//           <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
//             <button
//               onClick={() => (window.location.href = "/catering/order")}
//               className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold uppercase rounded-lg transition"
//             >
//               Order Catering
//             </button>
//             <button
//               onClick={() => (window.location.href = "/catering/quote")}
//               className="px-6 py-3 border-2 border-white hover:border-amber-500 text-white hover:text-amber-500 font-semibold uppercase rounded-lg transition"
//             >
//               Get a Quote
//             </button>
//           </div>
//           <p className="mt-6 text-sm">
//             For questions or to build a custom menu, call{" "}
//             <a href="tel:+18662272328" className="underline text-cyan-500">
//               +1-866-227-2328
//             </a>{" "}
//             to speak with a Barbecue Catering Expert today!
//           </p>
//         </div>
//       </div>

//       {/* ─── cards start (fixed‐height flip) ─── */}
//       <div className="p-6 mb-12">
//         <h2 className="text-3xl font-bold mb-6 text-white">
//           Our Catering Services
//         </h2>

//         {/* Responsive grid: 1 column on small, 2 on md, 4 on lg */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {CARDS.map((card) => (
//             <ServiceCard key={card.id} card={card} />
//           ))}
//         </div>
//       </div>

//       {/* I dooooo (pushed down so it does not overlap cards) */}
//       <div className="py-12 w-full mt-12">
//         <div className="flex flex-col md:flex-row items-center gap-8 w-full">
//           {/* ===== Image Column ===== */}
//           <div className="order-1 md:order-2 w-full md:w-1/2 flex justify-end">
//             <img
//               src="/images/blap3.png"
//               alt="Barbecue catering"
//               className="w-[850px] max-w-md md:max-w-none rounded-3xl shadow-lg object-cover"
//             />
//           </div>

//           {/* ===== Content Column ===== */}
//           <div className="order-2 md:order-1 w-full md:w-1/2 flex justify-start">
//             <div className="bg-gray-50 rounded-3xl shadow-lg transform -rotate-6 p-6 max-w-7xl">
//               <h3 className="text-2xl sm:text-4xl font-bold text-amber-500">
//                 SAY “I DO” TO BARBECUE
//               </h3>
//               <h4 className="mt-2 text-xl font-semibold text-black">
//                 We cater Weddings, Showers, & Rehearsals!
//               </h4>
//               <p className="mt-4 text-black text-xl py-4">
//                 We are delighted to bring the warmth and comfort of our
//                 Texas-style barbecue to your wedding celebration. Since 1941, we
//                 have been serving our community with a side of Southern
//                 hospitality, making every occasion memorable and delicious.
//               </p>
//               <p className="mt-2 text-black text-xl py-8">
//                 Let our catering specialists handle every detail, from
//                 customizable menus and attentive service to our famous barbecue
//                 buffets and interactive stations. Trust Dickey’s to create a
//                 remarkable experience for you and your guests on your special
//                 day.
//               </p>
//               <button
//                 onClick={() => (window.location.href = "/catering/quote")}
//                 className="w-full border-2 border-amber-400 mt-6 px-5 py-2 bg-transparent hover:bg-amber-500 text-black font-semibold uppercase rounded-lg transition"
//               >
//                 Get a Quote
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;

// 3rd
// Services.tsx
// import React, { useState, useRef, useEffect, CSSProperties } from "react";
// import Navigation from "../components/Navigation";
// import { Link } from "react-router-dom";

// interface ServiceCardData {
//   id: string;
//   title: string;
//   image: string;
//   frontDescription: string;
//   frontFooter: string;
//   backItems: string[];
//   route: string;
//   footerLabel: string;
// }

// // Data for each card
// const CARDS: ServiceCardData[] = [
//   {
//     id: "boxLunch",
//     title: "BOX LUNCH",
//     image: "/images/blap.jpg",
//     frontDescription:
//       "Looking to satisfy a small gathering or fuel up an entire sports squad? Our individually-packaged box lunches are the ideal choice. Choose from four different types of Barbecue Box Lunches.",
//     frontFooter: "Individually Packaged – Minimum Order of 10",
//     backItems: [
//       "• Standard Box Lunch",
//       "• Deluxe Box Lunch",
//       "• Loaded Baker Box Lunch",
//       "• Baker with Meat Box Lunch",
//     ],
//     route: "/catering/order",
//     footerLabel: "Get A Quote",
//   },
//   {
//     id: "classicBuffet",
//     title: "CLASSIC BARBECUE BUFFET",
//     image: "/images/blap.jpg",
//     frontDescription:
//       "We’ll deliver and set up or package perfectly for you to pick up, whatever is most convenient for you and your event. The Classic Buffet is the perfect barbecue meal for corporate events or family gatherings of 10 or more people.",
//     frontFooter: "Delivery or Pick Up. Serves 10",
//     backItems: [
//       "• Choice of Two Meats (Pulled Pork, Brisket, Chicken Breast, Sausage)",
//       "• Choice of Three Family-Size Sides (Barbecue Beans, Mac & Cheese, Potato Salad, etc.)",
//       "• Fresh Breads & Condiments",
//       "• Disposable Plates, Utensils & Napkins",
//     ],
//     route: "/catering/order",
//     footerLabel: "Get A Quote",
//   },
//   {
//     id: "packsPlatters",
//     title: "PACKS, PLATTERS, & MORE",
//     image: "/images/blap.jpg",
//     frontDescription:
//       "Build Your Own Big Yellow Box, indulge in a Pit-Smoked Loaded Baked Potato bar, creamy Mac & Cheese bar, or satisfy a crowd with a Slider Platter.",
//     frontFooter: "Delivery or Pick Up. Serves 10 – 12",
//     backItems: [
//       "• Big Yellow Box (4 lbs Meat + 3 Sides + Breads)",
//       "• Loaded Baked Potato Bar (Potatoes, Meats, Toppings)",
//       "• Mac & Cheese Bar (Mac & Cheese + Choice of Meat)",
//       "• Slider Platter (Assorted Sliders w/ Meat & Cheese)",
//     ],
//     route: "/catering/order",
//     footerLabel: "Get A Quote",
//   },
//   {
//     id: "fullService",
//     title: "FULL-SERVICE BUFFET BARBECUE CATERING",
//     image: "/images/blap3.png",
//     frontDescription:
//       "Full-Service Buffet Barbecue Catering is the ultimate option for events or gatherings of 100 people or more. We take care of everything barbecue related so you can focus on your guests.",
//     frontFooter: "Complimentary Delivery. Serves 100 +",
//     backItems: [
//       "• On-Site Pit Master & Servers",
//       "• Custom Setup & Cleanup",
//       "• Buffet Stations w/ Sliced Meats",
//       "• Disposable Plates, Utensils & Napkins",
//       "• Extra bullet point for demonstration",
//     ],
//     route: "/catering/order",
//     footerLabel: "Get A Quote",
//   },
// ];

// /**
//  * A single flippable service card.
//  * - Front: image / title / description / frontFooter / "Order Now" button
//  *   (no scrolling; grows to fit description).
//  * - Back: bullet-list of backItems / footerLabel button (scrolls if necessary).
//  *
//  * Uses conditional height:
//  *  - Until we measure both faces, let the wrapper be "auto" height.
//  *  - Once measured, force a fixed pixel height = max(frontHeight, backHeight),
//  *    ensuring a seamless 3D flip without clipping or sliding.
//  */
// const ServiceCard: React.FC<{ card: ServiceCardData }> = ({ card }) => {
//   const [isFlipped, setIsFlipped] = useState(false);
//   const [maxHeight, setMaxHeight] = useState<number>(0);

//   // Refs to both faces so we can measure their heights
//   const frontRef = useRef<HTMLDivElement>(null);
//   const backRef = useRef<HTMLDivElement>(null);

//   // After mount (and whenever card content changes), measure heights
//   useEffect(() => {
//     const frontHeight = frontRef.current?.offsetHeight || 0;
//     const backHeight = backRef.current?.offsetHeight || 0;
//     const newMax = Math.max(frontHeight, backHeight);
//     setMaxHeight(newMax);
//   }, [card.frontDescription, card.frontFooter, card.backItems]);

//   // flip-container style: if maxHeight > 0, fix to that px height; else 'auto'
//   const flipContainerStyles: CSSProperties = {
//     position: "relative",
//     width: "100%",
//     height: maxHeight > 0 ? `${maxHeight}px` : "auto",
//     transformStyle: "preserve-3d",
//     transition: "transform 0.6s ease",
//     transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
//   };

//   // common style for both faces
//   const faceStyles: CSSProperties = {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: maxHeight > 0 ? `${maxHeight}px` : "auto",
//     backfaceVisibility: "hidden",
//     WebkitBackfaceVisibility: "hidden",
//     overflow: "hidden",
//     borderRadius: "0.5rem", // ≈ tailwind's rounded-lg
//     backgroundColor: "white",
//     boxShadow:
//       "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
//     display: "flex",
//     flexDirection: "column",
//   };

//   return (
//     <div style={{ perspective: "1000px" }} className="w-full">
//       <div style={flipContainerStyles}>
//         {/* ── FRONT FACE ── */}
//         <div ref={frontRef} style={faceStyles}>
//           {/* Flip icon (front) */}
//           <button
//             onClick={() => setIsFlipped(true)}
//             className="
//               absolute top-2 right-2
//               text-gray-500 hover:text-gray-700
//               text-xl z-10
//               focus:outline-none
//             "
//             aria-label="Flip Card"
//           >
//             ↻
//           </button>

//           {/* IMAGE */}
//           <img
//             src={card.image}
//             alt={card.title}
//             className="w-full h-48 object-cover flex-shrink-0"
//           />

//           {/* TEXT CONTENT (no overflow) */}
//           <div className="p-4 flex-grow">
//             <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
//             <p className="text-gray-600 mb-4">{card.frontDescription}</p>
//             <p className="text-gray-500 font-medium">{card.frontFooter}</p>
//           </div>

//           {/* FRONT BUTTON */}
//           <div className="p-4">
//             <Link
//               to={card.route}
//               className="
//                 block bg-blue-600 hover:bg-blue-700
//                 text-white text-center font-semibold
//                 py-2 px-4 rounded
//               "
//             >
//               Order Now
//             </Link>
//           </div>
//         </div>

//         {/* ── BACK FACE ── */}
//         <div
//           ref={backRef}
//           style={{
//             ...faceStyles,
//             transform: "rotateY(180deg)",
//           }}
//         >
//           {/* Flip icon (back) */}
//           <button
//             onClick={() => setIsFlipped(false)}
//             className="
//               absolute top-2 right-2
//               text-gray-500 hover:text-gray-700
//               text-xl z-10
//               focus:outline-none
//             "
//             aria-label="Flip Card Back"
//           >
//             ↻
//           </button>

//           {/* BACK CONTENT (scroll if too long) */}
//           <div className="p-4 flex-grow overflow-y-auto">
//             {card.backItems.length > 0 ? (
//               <ul className="list-disc list-inside text-gray-700">
//                 {card.backItems.map((item, idx) => {
//                   const text = item.startsWith("• ") ? item.slice(2) : item;
//                   return (
//                     <li key={idx} className="mb-1">
//                       {text}
//                     </li>
//                   );
//                 })}
//               </ul>
//             ) : (
//               <p className="italic text-gray-500">No additional items.</p>
//             )}
//           </div>

//           {/* BACK BUTTON */}
//           <div className="p-4">
//             <Link
//               to={card.route}
//               className="
//                 block bg-green-600 hover:bg-green-700
//                 text-white text-center font-semibold
//                 py-2 px-4 rounded
//               "
//             >
//               {card.footerLabel}
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Services: React.FC = () => {
//   return (
//     <div className="w-full bg-gradient-to-br from-black via-gray-900 to-amber-900 min-h-screen">
//       {/* ─── Hero / Intro Section ─── */}
//       <Navigation />
//       <div
//         className="relative w-full h-[80vh] flex flex-col justify-center items-center text-center text-white"
//         style={{
//           backgroundImage: `url("/images/blap2.jpg")`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-50" />
//         <div className="relative z-10 px-4">
//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase">
//             Barbecue Catering
//           </h1>
//           <p className="mt-4 text-lg sm:text-xl">
//             Any Event. Any Size. Any Time.
//           </p>
//           <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
//             <button
//               onClick={() => (window.location.href = "/catering/order")}
//               className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold uppercase rounded-lg transition"
//             >
//               Order Catering
//             </button>
//             <button
//               onClick={() => (window.location.href = "/catering/quote")}
//               className="px-6 py-3 border-2 border-white hover:border-amber-500 text-white hover:text-amber-500 font-semibold uppercase rounded-lg transition"
//             >
//               Get a Quote
//             </button>
//           </div>
//           <p className="mt-6 text-sm">
//             For questions or to build a custom menu, call{" "}
//             <a href="tel:+18662272328" className="underline text-cyan-500">
//               +1-866-227-2328
//             </a>{" "}
//             to speak with a Barbecue Catering Expert today!
//           </p>
//         </div>
//       </div>

//       {/* ─── cards start (no scroll on front) ─── */}
//       <div className="p-6 mb-12">
//         <h2 className="text-3xl font-bold mb-6 text-white">
//           Our Catering Services
//         </h2>

//         {/* Responsive grid: 1 on small, 2 on md, 4 on lg */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {CARDS.map((card) => (
//             <ServiceCard key={card.id} card={card} />
//           ))}
//         </div>
//       </div>

//       {/* I dooooo (pushed down so it does not overlap cards) */}
//       <div className="py-12 w-full mt-12">
//         <div className="flex flex-col md:flex-row items-center gap-8 w-full">
//           {/* ===== Image Column ===== */}
//           <div className="order-1 md:order-2 w-full md:w-1/2 flex justify-end">
//             <img
//               src="/images/blap3.png"
//               alt="Barbecue catering"
//               className="w-[850px] max-w-md md:max-w-none rounded-3xl shadow-lg object-cover"
//             />
//           </div>

//           {/* ===== Content Column ===== */}
//           <div className="order-2 md:order-1 w-full md:w-1/2 flex justify-start">
//             <div className="bg-gray-50 rounded-3xl shadow-lg transform -rotate-6 p-6 max-w-7xl">
//               <h3 className="text-2xl sm:text-4xl font-bold text-amber-500">
//                 SAY “I DO” TO BARBECUE
//               </h3>
//               <h4 className="mt-2 text-xl font-semibold text-black">
//                 We cater Weddings, Showers, & Rehearsals!
//               </h4>
//               <p className="mt-4 text-black text-xl py-4">
//                 We are delighted to bring the warmth and comfort of our
//                 Texas-style barbecue to your wedding celebration. Since 1941, we
//                 have been serving our community with a side of Southern
//                 hospitality, making every occasion memorable and delicious.
//               </p>
//               <p className="mt-2 text-black text-xl py-8">
//                 Let our catering specialists handle every detail, from
//                 customizable menus and attentive service to our famous barbecue
//                 buffets and interactive stations. Trust Dickey’s to create a
//                 remarkable experience for you and your guests on your special
//                 day.
//               </p>
//               <button
//                 onClick={() => (window.location.href = "/catering/quote")}
//                 className="w-full border-2 border-amber-400 mt-6 px-5 py-2 bg-transparent hover:bg-amber-500 text-black font-semibold uppercase rounded-lg transition"
//               >
//                 Get a Quote
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;

// Services.tsx
import React, { useState, useRef, useEffect, CSSProperties } from "react";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";

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
    <div className="w-full bg-gradient-to-br from-black via-gray-900 to-amber-900 min-h-screen">
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
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase">
            Barbecue Catering
          </h1>
          <p className="mt-4 text-lg sm:text-xl">
            Any Event. Any Size. Any Time.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => (window.location.href = "/catering/order")}
              className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold uppercase rounded-lg transition"
            >
              Order Catering
            </button>
            <button
              onClick={() => (window.location.href = "/catering/quote")}
              className="px-6 py-3 border-2 border-white hover:border-amber-500 text-white hover:text-amber-500 font-semibold uppercase rounded-lg transition"
            >
              Get a Quote
            </button>
          </div>
          <p className="mt-6 text-sm">
            For questions or to build a custom menu, call{" "}
            <a href="tel:+18662272328" className="underline text-cyan-500">
              +1-866-227-2328
            </a>{" "}
            to speak with a Barbecue Catering Expert today!
          </p>
        </div>
      </div>

      {/* ─── cards start ─── */}
      <div className="p-6 mb-12 ">
        <h2 className="text-3xl font-bold mb-6 text-amber-600 text-center py-8">
          Texas-Style Barbecue Catering
        </h2>
        <h2 className="text-6xl font-bold mb-6 text-white text-center py-4">
          Because the Best Memories Are Made Over Barbecue
        </h2>

        {/* Responsive grid: 1 on small, 2 on md, 4 on lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
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
                buffets and interactive stations. Trust Dickey’s to create a
                remarkable experience for you and your guests on your special
                day.
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


      <div className="py-12 w-full mt-12">
        <div className="order-1 md:order-2 w-full md:w-1/2 flex justify-end">
            <img
              src="/images/dick.bin"
              alt="Barbecue catering"
              className="w-[850px] max-w-md md:max-w-none rounded-3xl shadow-lg object-cover"
            />
          </div>
      </div>
    </div>
  );
};

export default Services;
