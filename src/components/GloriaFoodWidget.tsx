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
    <div>
      <span
        className="glf-button"
        data-glf-cuid="6ea89579-20b3-4b7d-93ed-67b5daef5851"
        data-glf-ruid="26ba5882-f1cc-4462-a252-dece4a7aa92c"
      >
        Order
      </span>

      {/* <span
        className="glf-button reservation"
        data-glf-cuid="6ea89579-20b3-4b7d-93ed-67b5daef5851"
        data-glf-ruid="26ba5882-f1cc-4462-a252-dece4a7aa92c"
        data-glf-reservation="true"
        style={{ marginLeft: "20px" }}
      >
        Table Reservation
      </span> */}
    </div>
  );
};

export default GloriaFoodWidget;
