import { useEffect, useRef } from "react";

/** Lightweight canvas 'sand' that reacts to scroll velocity */
export default function SandBackground() {
  const canvasRef = useRef(null);
  const grainsRef = useRef([]);
  const lastScrollRef = useRef(0);
  const scrollVelRef = useRef(0);
  let raf;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const count = Math.min(600, Math.floor((canvas.width * canvas.height) / 8000));
      grainsRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.6 + 0.6,
        vy: Math.random() * 0.4 + 0.2,
        vx: (Math.random() - 0.5) * 0.1,
        hue: 25 + Math.random() * 25,              // Sandy hues
        saturation: 60 + Math.random() * 30,        // Rich saturation
        lightness: 20 + Math.random() * 25,         // Dark to medium lightness
        opacity: 0.3 + Math.random() * 0.6,         // Varied opacity
      }));
    };
    resize();
    window.addEventListener("resize", resize);

    const onScroll = () => {
      const y = window.scrollY;
      scrollVelRef.current = (y - lastScrollRef.current) * 0.04;
      lastScrollRef.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const render = () => {
      const { width, height } = canvas;
      ctx.fillStyle = "#fff";                        // White background
      ctx.fillRect(0, 0, width, height);

      for (const g of grainsRef.current) {
        g.y += g.vy + Math.abs(scrollVelRef.current) * 0.12;
        g.x += g.vx + scrollVelRef.current * 0.05;

        if (g.y > height) g.y = -5;
        if (g.x > width) g.x = 0;
        if (g.x < 0) g.x = width;

        ctx.beginPath();
        ctx.arc(g.x, g.y, g.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${g.hue}, ${g.saturation}%, ${g.lightness}%, ${g.opacity})`;
        ctx.fill();
      }

      scrollVelRef.current *= 0.95;
      raf = requestAnimationFrame(render);
    };

    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none bg-white"
      style={{}}
    />
  );
}
