import React, { useEffect } from "react";
import gsap from "gsap";

const clipPaths = [
  "circle(0% at 50% 50%)",
  "circle(130% at 50% 50%)"
];

// Light blue: adjust #38bdf8 for your taste
const splashColor = "#e0f2fe"; // Tailwind sky-100, adjust if you want

export default function SplashTransition({ label, onEnd }) {
  useEffect(() => {
    const el = document.getElementById("splash-transition");
    gsap.fromTo(
      el,
      { clipPath: clipPaths[0], WebkitClipPath: clipPaths[0] },
      {
        clipPath: clipPaths[1],
        WebkitClipPath: clipPaths[1],
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => setTimeout(onEnd, 500),
      }
    );
  }, [label, onEnd]);

  return (
    <div
      id="splash-transition"
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{
        background: splashColor,
        color: "#0ea5e9", // sky-500 text
        fontSize: "2.3rem",
        fontWeight: "700",
        letterSpacing: "0.06em",
        clipPath: clipPaths[0],
        WebkitClipPath: clipPaths[0],
        pointerEvents: "none",
        transition: "clip-path 0.5s",
        textShadow: "0 2px 20px #a5f3fc70"
      }}
    >
      {label}
    </div>
  );
}
