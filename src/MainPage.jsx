
import React, { useEffect, useRef } from "react";
import logo from "./assets/IMG_2219.png";
import ScrollFadeIn from "./ScrollFadeIn";

function SandBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    const colors = ["#ffe5b0", "#f7d9a3", "#e7c88d", "#d5b36b", "#c2a05d"];

    const grains = Array.from({ length: 800 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: Math.random() * 2 + 1,
      speed: Math.random() * 0.7 + 0.3,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    let scrollY = 0;
    const onScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener("scroll", onScroll);

    let running = true;
    function animate() {
      if (!running) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const scrollFactor = scrollY * 0.002;
      grains.forEach((grain) => {
        grain.y += grain.speed + scrollFactor;
        if (grain.y > canvas.height) {
          grain.y = -10;
          grain.x = Math.random() * canvas.width;
        }
        ctx.save();
        ctx.globalAlpha = 0.85;
        ctx.shadowColor = grain.color;
        ctx.shadowBlur = 2;
        ctx.fillStyle = grain.color;
        ctx.beginPath();
        ctx.arc(grain.x, grain.y, grain.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
      requestAnimationFrame(animate);
    }
    animate();

    return () => {
      running = false;
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0, display: "block" }}
    />
  );
}

function MainPage() {
  
  const contentRef = useRef(null);

  const handleScroll = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-white flex flex-col items-center justify-center overflow-hidden overflow-y-hidden">
      <SandBackground />
      <div className="flex flex-col items-center justify-center h-screen z-10">
        <ScrollFadeIn direction="up" delay={200}>
          <img src={logo} alt="Logo" className="w-24 h-24 mb-6 mx-auto" />
        </ScrollFadeIn>
        <ScrollFadeIn direction="up" delay={400}>
          <h1
            className="text-4xl md:text-6xl font-light uppercase tracking-widest text-center"
            style={{ letterSpacing: "0.1em" }}
          >
            MANUFACTURERS OF PRECISION SEEDERS
          </h1>
        </ScrollFadeIn>
        <ScrollFadeIn direction="up" delay={600}>
          <h2
            className="text-3xl md:text-5xl font-light tracking-widest text-center mt-8 text-gray-700"
            style={{ letterSpacing: "0.1em" }}
          >
            "Your Seeds, Your Choice: Find Your Perfect Seeding Machine Here"
          </h2>
        </ScrollFadeIn>
      </div>
      
      {/* Add more content sections with fade-in effects */}
      <ScrollFadeIn direction="up" className="h-[80vh] flex items-center justify-center text-2xl text-gray-500">
        <div ref={contentRef}>
          <h2 className="text-3xl font-bold mb-4">Welcome to Our Story</h2>
          <p className="max-w-2xl text-center">
            Discover our precision seeders that revolutionize farming with cutting-edge technology and unmatched reliability.
          </p>
        </div>
      </ScrollFadeIn>
      
      <ScrollFadeIn direction="left" delay={200} className="h-[80vh] flex items-center justify-center">
        <div className="max-w-4xl px-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Products</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollFadeIn direction="up" delay={300}>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Precision Seeder Model A</h3>
                <p className="text-gray-600">Advanced technology for optimal seed placement and spacing.</p>
              </div>
            </ScrollFadeIn>
            <ScrollFadeIn direction="up" delay={500}>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Precision Seeder Model B</h3>
                <p className="text-gray-600">Heavy-duty construction for large-scale farming operations.</p>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </ScrollFadeIn>
      
      <ScrollFadeIn direction="right" className="h-[80vh] flex items-center justify-center">
        <div className="max-w-2xl text-center px-8">
          <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
          <ScrollFadeIn direction="up" delay={200}>
            <p className="text-lg text-gray-600 mb-4">
              With over 20 years of experience in precision agriculture, we deliver innovative solutions that increase productivity and reduce waste.
            </p>
          </ScrollFadeIn>
          <ScrollFadeIn direction="up" delay={400}>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </ScrollFadeIn>
        </div>
      </ScrollFadeIn>
    </div>
  );
}

export default MainPage;
