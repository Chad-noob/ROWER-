import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "./assets/IMG_2219.png";

export default function Loader({ onComplete = () => { } }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1800); // show loader for 1.8s
    return () => clearTimeout(t);
  }, []);


  useEffect(() => {
    if (!show) {
      onComplete();
    }
  }, [show, onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 6, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            <div className="relative flex items-center justify-center">
              <img
                src={logo}
                alt="Rower"
                className="w-24 h-24 object-contain z-10"
                onError={e => (e.currentTarget.style.display = "none")}
              />
              {/* Spinner ring overlay */}
              {/* Classic spinner: white and dark border */}
              <div className="absolute w-28 h-28 border-4 border-white border-t-transparent rounded-full animate-spin" />
            </div>
            {/* Removed Loading... text as requested */}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
