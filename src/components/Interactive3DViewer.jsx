



































import React, { useState, useRef, useEffect } from "react";

export default function Interactive3DViewer({ 
  isOpen, 
  onClose, 
  productImage, 
  productName, 
  productSpecs 
}) {
  const [rotationY, setRotationY] = useState(0);
  const [rotationX, setRotationX] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [animationPhase, setAnimationPhase] = useState("split-screen");
  const dragStart = useRef({ x: 0, y: 0 });
  const imageRef = useRef(null);
  const containerRef = useRef(null);
  const detailsRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setAnimationPhase("split-screen");
    } else {
      setAnimationPhase("entering");
      setRotationY(0);
      setRotationX(0);
      setZoom(1);
    }
  }, [isOpen]);

  const handleMouseDown = (e) => {
    if (animationPhase === "split-screen") {
      setIsDragging(true);
      dragStart.current = { x: e.clientX, y: e.clientY };
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && animationPhase === "split-screen") {
      const deltaX = e.clientX - dragStart.current.x;
      const deltaY = e.clientY - dragStart.current.y;
      setRotationY((r) => r + deltaX * 0.1);
      setRotationX((r) => Math.max(-30, Math.min(30, r - deltaY * 0.1)));
      dragStart.current = { x: e.clientX, y: e.clientY };
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e) => {
    if (animationPhase === "split-screen") {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -0.1 : 0.1;
      const newZoom = Math.max(0.5, Math.min(3, zoom + delta));
      setZoom(newZoom);
    }
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging]);

  if (!isOpen) return null;

  return (
    <div ref={containerRef} className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <button
        onClick={onClose}
        className="absolute top-8 right-8 z-50 text-white text-4xl w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors"
      >
        ×
      </button>

      <div className="w-full h-full flex items-center justify-center overflow-hidden">
        <div
          ref={imageRef}
          className={`absolute ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
          onMouseDown={handleMouseDown}
          onWheel={handleWheel}
          style={{
            transformStyle: "preserve-3d",
            perspective: "2000px",
            transform: `rotateX(${rotationX}deg) rotateY(${rotationY}deg) scale(${zoom})`
          }}
        >
          <img
            src={productImage}
            alt={productName}
            className="max-w-5xl max-h-[85vh] object-contain select-none"
            style={{
              filter: "drop-shadow(0 30px 80px rgba(0,0,0,0.6))",
              pointerEvents: "none",
            }}
            draggable={false}
          />
        </div>

        <div className="absolute right-0 w-1/2 h-full flex items-center justify-center p-12">
          <div ref={detailsRef} className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-6">{productName}</h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">{productSpecs.description}</p>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Specifications</h3>
              <div className="space-y-3">
                {productSpecs.specs.map((spec, index) => (
                  <div key={index} className="flex justify-between text-gray-300">
                    <span className="font-medium">{spec.label}:</span>
                    <span className="text-white">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Key Features</h3>
              <div className="space-y-3">
                {productSpecs.features.map((feature, index) => (
                  <div key={index} className="flex items-start text-gray-300">
                    <span className="text-green-400 mr-3 text-xl">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <button className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg">Request Quote</button>
              <button className="bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg backdrop-blur-md">Download Brochure</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
