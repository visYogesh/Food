// src/components/GloriaFoodWidget.jsx

import { useEffect } from "react";

const GloriaFoodWidget = () => {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://www.fbgcdn.com/embedder/js/ewm2.js"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://www.fbgcdn.com/embedder/js/ewm2.js";
      script.defer = true;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mt-8">
      {/* <span
        className="glf-button bg-green-600 hover:bg-green-700 text-white font-semibold  py-3 rounded-xl shadow-md transition duration-300"
        data-glf-cuid="6ea89579-20b3-4b7d-93ed-67b5daef5851"
        data-glf-ruid="26ba5882-f1cc-4462-a252-dece4a7aa92c"
      >
        🍽️ Order Now
      </span> */}
      <span
        className="glf-button border-2 border-amber-500"
        data-glf-cuid="6ea89579-20b3-4b7d-93ed-67b5daef5851"
        data-glf-ruid="26ba5882-f1cc-4462-a252-dece4a7aa92c"
        style={{
          backgroundColor: "#1e293b", // Tailwind's green-400
          color: "#000000",
          fontWeight: "600",
          padding: "12px 15px",
          borderRadius: "10px", // rounded-full
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          transition: "background-color 0.3s ease",
          display: "inline-block",
          cursor: "pointer",
          textAlign: "center",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#047857")} // hover green-600
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#1e293b")}
      >
        Order Now 🍽️
      </span>

      {/* <span
        className="glf-button bg-green-400 hover:bg-green-600 !text-black font-semibold px-6 py-3 rounded-full shadow-md transition duration-300"
        data-glf-cuid="6ea89579-20b3-4b7d-93ed-67b5daef5851"
        data-glf-ruid="26ba5882-f1cc-4462-a252-dece4a7aa92c"
      >
        🛍️ Order Now
      </span> */}

      {/* <span
        className="glf-button reservation bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition duration-300"
        data-glf-cuid="6ea89579-20b3-4b7d-93ed-67b5daef5851"
        data-glf-ruid="26ba5882-f1cc-4462-a252-dece4a7aa92c"
        data-glf-reservation="true"
      >
        🪑 Table Reservation
      </span> */}
    </div>
  );
};

export default GloriaFoodWidget;
