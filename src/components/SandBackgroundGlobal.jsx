import React, { useEffect, useRef } from "react";

export default function SandBackground() {
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

    // Enhanced color palette with more variety - darker and lighter grains
    const colors = [
      // Light grains
      "#fff8e7", "#fef3d9", "#ffe5b0", "#f7d9a3", "#f4e4c1",
      // Medium grains  
      "#e7c88d", "#e8d5ab", "#dcc394", "#d5b36b", "#c7ae7c",
      // Darker grains
      "#c2a05d", "#b89967", "#a8895a", "#9a7b4f", "#8b6d42",
      // Extra dark grains for contrast
      "#7d5f38", "#6f5230", "#614428", "#543721", "#462a1a"
    ];

    // Increased particle count for better coverage and variety
    const grains = Array.from({ length: 1800 }, (_, i) => {
      const colorIndex = Math.floor(Math.random() * colors.length);
      const color = colors[colorIndex];
      
      // Make darker grains slightly larger for better visibility
      const isDarkGrain = colorIndex >= 15; // Last 5 colors are darkest
      const baseRadius = isDarkGrain ? 
        Math.random() * 3.0 + 1.0 : // Darker grains: 1.0-4.0px
        Math.random() * 2.5 + 0.6;  // Lighter grains: 0.6-3.1px
      
      return {
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight - window.innerHeight, // Start above screen
        radius: baseRadius,
        speed: Math.random() * 1.2 + 0.4, // Varied falling speeds
        baseSpeed: Math.random() * 1.2 + 0.4,
        color: color,
        opacity: isDarkGrain ? 
          Math.random() * 0.7 + 0.6 : // Darker grains: more opaque (0.6-1.3)
          Math.random() * 0.5 + 0.3,  // Lighter grains: more transparent (0.3-0.8)
        drift: Math.sin(i) * 0.3, // Horizontal drift for natural movement
        driftSpeed: Math.random() * 0.02 + 0.01,
        phase: Math.random() * Math.PI * 2, // For wave motion
      };
    });

    let scrollY = 0;
    let scrollVelocity = 0;
    let lastScrollY = 0;
    let ticking = false;
    
    // Enhanced scroll handler with velocity tracking
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const newScrollY = window.scrollY;
          scrollVelocity = (newScrollY - lastScrollY) * 0.1; // Track scroll velocity
          lastScrollY = scrollY;
          scrollY = newScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let mouseInfluence = false;
    
    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      mouseInfluence = true;
    };
    
    const onMouseLeave = () => {
      mouseInfluence = false;
    };
    
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    let running = true;
    let lastTime = 0;
    let time = 0;
    
    function animate(currentTime) {
      if (!running) return;
      
      // Limit to 60fps for performance
      if (currentTime - lastTime < 16.67) {
        requestAnimationFrame(animate);
        return;
      }
      lastTime = currentTime;
      time += 0.016; // Time accumulator for wave effects
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Enhanced scroll interaction
      const scrollFactor = Math.max(0, scrollY * 0.002 + scrollVelocity * 0.1);
      const turbulence = Math.abs(scrollVelocity) * 0.05; // Add turbulence based on scroll speed
      
      grains.forEach((grain, index) => {
        // Update position with enhanced physics
        const waveOffset = Math.sin(time * grain.driftSpeed + grain.phase) * grain.drift;
        const mouseDistance = mouseInfluence ? 
          Math.sqrt((grain.x - mouseX) ** 2 + (grain.y - mouseY) ** 2) : Infinity;
        
        // Mouse repulsion effect
        let mouseForceX = 0;
        let mouseForceY = 0;
        if (mouseInfluence && mouseDistance < 100) {
          const force = (100 - mouseDistance) / 100;
          const angle = Math.atan2(grain.y - mouseY, grain.x - mouseX);
          mouseForceX = Math.cos(angle) * force * 2;
          mouseForceY = Math.sin(angle) * force * 2;
        }
        
        // Update position
        grain.x += waveOffset + mouseForceX;
        grain.y += grain.speed + scrollFactor + turbulence + mouseForceY;
        
        // Enhanced boundary wrapping
        if (grain.y > canvas.height + 20) {
          grain.y = -20 - Math.random() * 100; // Stagger respawn
          grain.x = Math.random() * canvas.width;
          // Randomize properties on respawn for variety
          grain.speed = grain.baseSpeed + (Math.random() - 0.5) * 0.3;
          grain.color = colors[Math.floor(Math.random() * colors.length)];
        }
        
        if (grain.x < -10) grain.x = canvas.width + 10;
        if (grain.x > canvas.width + 10) grain.x = -10;
        
        // Enhanced rendering with glow effects
        ctx.save();
        
        // Add subtle glow for particles close to mouse
        if (mouseInfluence && mouseDistance < 80) {
          const glowIntensity = (80 - mouseDistance) / 80;
          ctx.shadowColor = grain.color;
          ctx.shadowBlur = glowIntensity * 8;
        }
        
        // Dynamic opacity based on scroll and position
        const dynamicOpacity = grain.opacity * 
          (0.8 + Math.sin(time * 0.5 + index * 0.1) * 0.2) * // Subtle pulsing
          (1 + scrollVelocity * 0.1); // Brighten during scroll
        
        ctx.globalAlpha = Math.min(1, Math.max(0.1, dynamicOpacity));
        ctx.fillStyle = grain.color;
        ctx.beginPath();
        
        // Vary particle shapes slightly
        if (grain.radius > 2) {
          // Larger particles get slight oval shape
          ctx.ellipse(grain.x, grain.y, grain.radius, grain.radius * 0.8, 
                     grain.phase, 0, Math.PI * 2);
        } else {
          ctx.arc(grain.x, grain.y, grain.radius, 0, Math.PI * 2);
        }
        
        ctx.fill();
        ctx.restore();
      });
      
      // Decay scroll velocity
      scrollVelocity *= 0.95;
      
      requestAnimationFrame(animate);
    }
    animate(0);

    return () => {
      running = false;
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1, display: "block" }}
    />
  );
}