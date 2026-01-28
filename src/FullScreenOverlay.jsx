import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function FullScreenOverlay({ 
  isActive, 
  clickPosition, 
  targetPage, 
  onComplete,
  onMidPoint 
}) {
  const overlayRef = useRef(null);
  const textRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    if (!isActive || !clickPosition || !overlayRef.current) return;

    const overlay = overlayRef.current;
    const text = textRef.current;
    const circle = circleRef.current;
    
    // Create GSAP timeline with power4.inOut easing
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(onComplete, 300);
      }
    });

    // Calculate viewport diagonal for full coverage
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const maxDistance = Math.sqrt(
      Math.pow(viewportWidth, 2) + Math.pow(viewportHeight, 2)
    ) * 1.2;

    // Set initial states
    gsap.set(overlay, {
      left: 0,
      top: 0,
      width: "100vw",
      height: "100vh",
      background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)",
      zIndex: 9999
    });

    gsap.set(circle, {
      left: clickPosition.x,
      top: clickPosition.y,
      width: 0,
      height: 0,
      borderRadius: "50%",
      transformOrigin: "center center",
      background: "#000",
      scale: 1
    });

    gsap.set(text, {
      opacity: 0,
      scale: 0.7,
      y: 50,
      rotationX: 15
    });

    // Enhanced animation sequence
    tl
    // Phase 1: Circle expansion with power4.inOut
    .to(circle, {
      width: maxDistance,
      height: maxDistance,
      left: clickPosition.x - maxDistance / 2,
      top: clickPosition.y - maxDistance / 2,
      duration: 1.2,
      ease: "power4.inOut",
    })
    // Phase 2: Typography entrance with elastic effect
    .to(text, {
      opacity: 1,
      scale: 1,
      y: 0,
      rotationX: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
    }, "-=0.4")
    // Phase 3: Hold and pulse effect
    .to(circle, {
      scale: 1.02,
      duration: 0.3,
      ease: "power2.inOut",
      yoyo: true,
      repeat: 1
    }, "-=0.2")
    // Phase 4: Trigger page change
    .call(onMidPoint, null, "-=0.1")
    // Phase 5: Text exit with rotation
    .to(text, {
      opacity: 0,
      scale: 0.8,
      y: -30,
      rotationX: -10,
      duration: 0.4,
      ease: "power2.in"
    })
    // Phase 6: Circle scale down with dramatic easing
    .to(circle, {
      scale: 0,
      rotation: 180,
      duration: 1.0,
      ease: "power4.inOut",
      transformOrigin: "center center"
    }, "-=0.2");

    return () => {
      tl.kill();
    };
  }, [isActive, clickPosition, onComplete, onMidPoint, targetPage]);

  if (!isActive) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 pointer-events-none"
      style={{
        mixBlendMode: 'normal',
        willChange: 'transform'
      }}
    >
      {/* Expanding circle */}
      <div
        ref={circleRef}
        className="absolute"
        style={{
          willChange: 'transform, width, height, left, top'
        }}
      />
      
      {/* Typography overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          ref={textRef}
          className="text-center text-white"
          style={{
            willChange: 'transform, opacity'
          }}
        >
          <div className="text-5xl md:text-7xl font-bold tracking-tight mb-4 font-mono">
            {targetPage}
          </div>
        </div>
      </div>
    </div>
  );
}