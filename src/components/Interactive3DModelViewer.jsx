import React, { useRef, useEffect, useState, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, PerspectiveCamera, Center, Environment } from "@react-three/drei";

// 3D Model Component
function Model({ modelPath, innerRef }) {
  const { scene } = useGLTF(modelPath);
  
  // Clone the scene so we can modify it without affecting the cache
  const clonedScene = useMemo(() => {
    const clone = scene.clone();
    
    // Traverse to enable shadows if needed
    clone.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    return clone;
  }, [scene]);

  // Use Center to automatically center the model
  return (
    <group ref={innerRef}>
       <Center>
          <primitive object={clonedScene} />
       </Center>
    </group>
  );
}

// Scene Component
function Scene({ modelPath, modelRef, animationPhase, controlsRef }) {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} castShadow />
      <directionalLight position={[-10, 10, -5]} intensity={1} />
      <Environment preset="city" />
      
      {/* Camera */}
      <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} far={10000} />
      
      {/* 3D Model */}
      <Model 
        modelPath={modelPath} 
        innerRef={modelRef} 
        rotation={[0, 90, 0]}
      />
      
      {/* Controls - enable only when interactive */}
      <OrbitControls 
        ref={controlsRef}
        enabled={animationPhase === "interactive"} 
        enableZoom={true}
        enablePan={false}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 4}
      />
    </>
  );
}

// Main Component
export default function Interactive3DModelViewer({ 
  isOpen, 
  onClose, 
  modelPath = "/models/rower-machine.glb",
  productName, 
  productSpecs 
}) {
  const [visible, setVisible] = useState(false);
  const modelRef = useRef();
  const controlsRef = useRef();
  const detailsRef = useRef();

  useEffect(() => {
    setVisible(!!isOpen);
  }, [isOpen]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <button
        onClick={onClose}
        className="absolute top-8 right-8 z-50 text-white text-4xl w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors cursor-pointer"
      >
        ×
      </button>

      <div className="w-full h-full flex overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Canvas
            shadows
            camera={{ position: [0, 0, -8], fov: 45 }}
            gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true }}
          >
            <ambientLight intensity={1.2} />
            <directionalLight position={[10, 10, 5]} intensity={2} castShadow />
            <directionalLight position={[-10, 10, -5]} intensity={1} />
            <Environment preset="city" />

            <PerspectiveCamera makeDefault position={[0, 0, -2000]} fov={50} far={10000} />

            <group ref={modelRef}>
              <Model modelPath={modelPath} innerRef={modelRef} position={[1000, 0, 0]} rotation={[0, 90, 0]}  />
            </group>

            <OrbitControls 
              ref={controlsRef}
              enabled={true}
              enableZoom={true}
              enablePan={false}
              maxPolarAngle={Math.PI / 1.5}
              minPolarAngle={Math.PI / 4}
            />
          </Canvas>
        </div>

        <div className="absolute right-0 top-0 w-1/2 h-full flex items-center justify-center p-12">
          <div ref={detailsRef} className="max-w-2xl text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{productName}</h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">{productSpecs.description}</p>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Specifications</h3>
              <div className="space-y-3">
                {productSpecs.specs.map((spec, index) => (
                  <div key={index} className="flex justify-between text-gray-300 border-b border-gray-700 pb-2 last:border-0">
                    <span className="font-medium">{spec.label}</span>
                    <span className="text-white">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Key Features</h3>
              <div className="grid grid-cols-1 gap-2">
                {productSpecs.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-2">✓</span>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg">Request Quote</button>
              <button className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg font-semibold backdrop-blur-md transition-colors border border-white/30">Download Brochure</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}