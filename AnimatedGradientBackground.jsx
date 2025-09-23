import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const AnimatedGradientBackground = () => {
  const bgRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(bgRef.current, {
      backgroundPosition: "200% 50%",
      filter: "hue-rotate(360deg)",
      duration: 20,
      ease: "none",
    });

    return () => tl.kill();
  }, []);

  return (
    <div
      ref={bgRef}
      className="fixed top-0 left-0 w-full h-full -z-20 pointer-events-none"
      style={{
        background: "linear-gradient(270deg, #0ea5e9, #2563eb, #0ea5e9)", // Change to Rower colors
        backgroundSize: "400% 400%",
      }}
    />
  );
};

export default AnimatedGradientBackground;
