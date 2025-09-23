import React, { useEffect } from "react";
import gsap from "gsap";


const clipPaths = [
  "circle(0% at 50% 50%)",
  "circle(75% at 50% 50%)", 
  "circle(120% at 50% 50%)", 
  "circle(100% at 50% 50%)"
];

const WaterTransition = ({ onComplete }) => {
  useEffect(() => {
    const el = document.getElementById("water-transition");
    gsap.fromTo(
      el,
      { clipPath: clipPaths[0] },
      {
        clipPath: clipPaths[3],
        ease: "power2.inOut",
        duration: 1.3,
        onComplete,
        
        keyframes: [
          { clipPath: clipPaths[1], duration: 0.7 },
          { clipPath: clipPaths[2], duration: 0.3 },
          { clipPath: clipPaths[3], duration: 0.3}
        ]
      }
    );
  }, [onComplete]);

  return (
    <div
      id="water-transition"
      className="fixed top-0 left-0 w-full h-full bg-white z-50"
      style={{
        clipPath: clipPaths[0],
        WebkitClipPath: clipPaths[0],
        pointerEvents: "none",
      }}
    />
  );
};

export default WaterTransition;
