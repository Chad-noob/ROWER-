import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ active, onSelect, onOverlaySelect }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const menuItems = [
    "Home",
    "Our Story", 
    "Products",
    "Service Booking",
    "Gallery",
    "Articles",
    "Enquiry",
    "Contact us",
    "Resources"
  ];

  // Pages that should use overlay transition (ALL pages)
  const overlayPages = ["Home", "Our Story", "Products", "Service Booking", "Gallery", "Articles", "Enquiry", "Contact us", "Resources"];

  const handleNavClick = (item, event) => {
    if (overlayPages.includes(item) && onOverlaySelect) {
      // Get click position for overlay animation
      const rect = event.currentTarget.getBoundingClientRect();
      const clickPosition = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      };
      onOverlaySelect(item, clickPosition);
    } else {
      onSelect(item);
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Centered large navbar when not scrolled */}
      <div className={"fixed top-6 left-0 w-full z-30 transition-opacity duration-500 " + (!scrolled ? "opacity-100" : "opacity-0 pointer-events-none")}>
        <nav className="flex justify-center">
          <div className="flex gap-8">
            {["Home", "Our Story", "Products", "Gallery", "Resources", "Contact us"].map(item => (
              <button 
                key={item} 
                onClick={(e) => handleNavClick(item, e)}
                className={`text-xl font-medium tracking-wide hover:text-blue-600 transition-all duration-300 uppercase relative group ${
                  active === item ? 'text-blue-600 font-semibold' : ''
                }`}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>
        </nav>
      </div>

      {/* Two-line hamburger icon when scrolled */}
      <button
        aria-label="Menu"
        onClick={() => setOpen(true)}
        className={"fixed top-6 right-6 z-30 flex flex-col gap-2 transition-opacity " + (scrolled ? "opacity-100" : "opacity-0 pointer-events-none")}
      >
        <span className="w-8 h-[3px] bg-black rounded" />
        <span className="w-8 h-[3px] bg-black rounded" />
      </button>

      {/* Side menu for hamburger */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed top-0 right-0 h-full w-64 z-40 bg-white shadow-xl flex flex-col pt-20 px-6"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
          >
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 text-2xl font-bold"
            >
              ×
            </button>
            <ul className="grid gap-6 text-lg mt-8">
              {menuItems.map(item => (
                <li key={item}>
                  <button 
                    onClick={(e) => {
                      handleNavClick(item, e);
                      setOpen(false);
                    }} 
                    className={`block hover:opacity-70 text-left w-full transition-all duration-300 relative group ${
                      active === item ? 'text-blue-600 font-semibold' : ''
                    }`}
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>


    </>
  );
}
