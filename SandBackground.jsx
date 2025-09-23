import React, { useEffect, useRef } from "react";

const SandBackground = () => {
  const canvasRef = useRef(null);
  const scrollYRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    // Debug: More, larger, and very dark grains for white background
    const particles = Array.from({ length: 1000 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 2.5 + 1.5, // grain size 1.5 - 4
      speed: Math.random() * 0.8 + 0.1, // slower for natural look
    }));

    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);

    let running = true;
    function animate() {
      if (!running) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const scrollFactor = scrollYRef.current * 0.001;

      for (const p of particles) {
        p.y += p.speed + scrollFactor;
        p.x += Math.sin(p.y * 0.01) * 0.06;

        // Recycle at top if exits bottom
        if (p.y > canvas.height) {
          p.y = -10;
          p.x = Math.random() * canvas.width;
        }

        ctx.save();
        ctx.globalAlpha = 0.9;
        ctx.shadowColor = "#aaa";
        ctx.shadowBlur = 1;
        ctx.fillStyle = "#222";      // very dark gray for max visibility
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      requestAnimationFrame(animate);
    }
    animate();

    return () => {
      running = false;
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{
        zIndex: 0,
        display: "block"
      }}
    />
  );
};
export default SandBackground;
