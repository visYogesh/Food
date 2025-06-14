import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function HalalToaster() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (show) {
      const hideTimer = setTimeout(() => setShow(false), 8000);
      return () => clearTimeout(hideTimer);
    }
  }, [show]);

  if (!show) return null;

  return (
    <motion.div
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -60, opacity: 0 }}
      className="fixed top-[5vh] left-0 right-0 z-50 w-full max-w-screen-sm mx-auto 
                 bg-white border border-gray-300 shadow rounded-md px-4 py-2"
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 flex-1">
          <div className="text-sm">
            <p className="font-semibold text-lg text-gray-800">
              We also offer a <span className="text-green-600 font-bold">Halal Menu</span> 🍽️
            </p>
            <p className="text-base text-gray-600">Would you like to check it out?</p>
          </div>
        </div>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={() => navigate("/menu/special")}
            className="bg-green-600 hover:bg-green-700 text-white text-xs px-3 py-1 rounded"
          >
            Visit
          </button>
          <button
            onClick={() => setShow(false)}
            className="border border-gray-300 hover:bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded"
          >
           <X className="text-red-500 w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <motion.div
        className="h-0.5 bg-green-500 mt-2 rounded-full"
        initial={{ width: "100%" }}
        animate={{ width: "0%" }}
        transition={{ duration: 8, ease: "linear" }}
      />
    </motion.div>
  );
}
