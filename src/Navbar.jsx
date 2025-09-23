import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
          <div className="flex gap-12">
            {[
              "Home",
              "Services", 
              "About",
              "Work",
              "Contact"
            ].map(item => (
              <a 
                key={item} 
                href={"#" + item.toLowerCase()} 
                className="text-2xl font-medium tracking-wide hover:text-blue-600 transition-colors duration-300 uppercase"
              >
                {item}
              </a>
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
              {["Home", "Services", "About", "Work", "Contact"].map(item => (
                <li key={item}>
                  <a href={"#" + item.toLowerCase()} onClick={() => setOpen(false)} className="block hover:opacity-70">{item}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>


    </>
  );
}
