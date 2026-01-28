import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollFadeIn from "./ScrollFadeIn";
import PageContainer, { staggerItem, heroVariant } from "./PageContainer";
import Interactive3DViewer from "./components/Interactive3DViewer";
import Interactive3DModelViewer from "./components/Interactive3DModelViewer";

// Use direct path to product image
const rowerSeederImage = "/src/assets/products/rower-seeder.png";

// Fallback SVG for other products
const seederImageData = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPCEtLSBCYWNrZ3JvdW5kIC0tPgogIDxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjZjlmYWZiIi8+CiAgPCEtLSBTZWVkZXIgYm9keSAtLT4KICA8cmVjdCB4PSIxMDAiIHk9IjIwMCIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIxNjAiIGZpbGw9IiNkYzI2MjYiIHN0cm9rZT0iIzk5MWIxYiIgc3Ryb2tlLXdpZHRoPSI0IiByeD0iMTAiLz4KICA8cmVjdCB4PSIxMjAiIHk9IjIyMCIgd2lkdGg9IjI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iIzFmMjkzNyIgc3Ryb2tlPSIjMTExODI3IiBzdHJva2Utd2lkdGg9IjIiIHJ4PSI1Ii8+CiAgPCEtLSBIYW5kbGUgLS0+CiAgPGxpbmUgeDE9IjQwMCIgeTE9IjI0MCIgeDI9IjUwMCIgeTI9IjE2MCIgc3Ryb2tlPSIjZGMyNjI2IiBzdHJva2Utd2lkdGg9IjE2IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICA8bGluZSB4MT0iNTAwIiB5MT0iMTYwIiB4Mj0iNTYwIiB5Mj0iMTIwIiBzdHJva2U9IiNkYzI2MjYiIHN0cm9rZS13aWR0aD0iMTYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDxsaW5lIHgxPSI1NjAiIHkxPSIxMjAiIHgyPSI2MDAiIHkyPSIxMDAiIHN0cm9rZT0iI2RjMjYyNiIgc3Ryb2tlLXdpZHRoPSIxMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgPCEtLSBXaGVlbCAtLT4KICA8Y2lyY2xlIGN4PSIyNDAiIGN5PSI0MDAiIHI9IjgwIiBmaWxsPSIjZGMyNjI2IiBzdHJva2U9IiM5OTFiMWIiIHN0cm9rZS13aWR0aD0iNiIvPgogIDxjaXJjbGUgY3g9IjI0MCIgY3k9IjQwMCIgcj0iNTAiIGZpbGw9IiMxZjI5MzciLz4KICA8dGV4dCB4PSIyNDAiIHk9IjQxMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZm9udC13ZWlnaHQ9ImJvbGQiPlJPV0VSPC90ZXh0PgogIDwhLS0gU3Bpa2VzIG9uIHdoZWVsIC0tPgogIDxnIHN0cm9rZT0iI2ZiYmYyNCIgc3Ryb2tlLXdpZHRoPSI0IiBmaWxsPSIjZmJiZjI0Ij4KICAgIDxsaW5lIHgxPSIyNDAiIHkxPSIzMjAiIHgyPSIyNDAiIHkyPSIzMDAiLz4KICAgIDxsaW5lIHgxPSIzMDAiIHkxPSIzNzAiIHgyPSIzMjAiIHkyPSIzNjAiLz4KICAgIDxsaW5lIHgxPSIzMDAiIHkxPSI0MzAiIHgyPSIzMjAiIHkyPSI0NDAiLz4KICAgIDxsaW5lIHgxPSIyNDAiIHkxPSI0ODAiIHgyPSIyNDAiIHkyPSI1MDAiLz4KICAgIDxsaW5lIHgxPSIxODAiIHkxPSI0MzAiIHgyPSIxNjAiIHkyPSI0NDAiLz4KICAgIDxsaW5lIHgxPSIxODAiIHkxPSIzNzAiIHgyPSIxNjAiIHkyPSIzNjAiLz4KICA8L2c+CiAgPCEtLSBTZWVkIG1lY2hhbmlzbSAtLT4KICA8cmVjdCB4PSIzNjAiIHk9IjM2MCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjZmJiZjI0IiBzdHJva2U9IiNmNTllMGIiIHN0cm9rZS13aWR0aD0iMiIgcng9IjQiLz4KICA8IS0tIEN1bHRpdmF0b3IgdG9vbCAtLT4KICA8cG9seWdvbiBwb2ludHM9IjU1MCwzODAgNjAwLDM0MCA2MjAsMzgwIDU3MCw0MjAiIGZpbGw9IiNmNTllMGIiIHN0cm9rZT0iI2VhOGMwOSIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgPCEtLSBCcmFuZCB0ZXh0IC0tPgogIDx0ZXh0IHg9IjI1MCIgeT0iMTkwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMWYyOTM3IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjgiIGZvbnQtd2VpZ2h0PSJib2xkIj5ST1dFUiBNQVNTPC90ZXh0Pgo8L3N2Zz4=";

// Product specifications for the interactive viewer
const productSpecs = {
  description: "A precision-engineered multi-row seeder designed for efficient and uniform seed placement, improving crop yield and minimizing labor. Built with modern farming needs in mind.",
  specs: [
    { label: "Row Configuration", value: "Multi-row (customizable)" },
    { label: "Mounting Type", value: "Tractor-mounted" },
    { label: "Seed Capacity", value: "50-100 kg" },
    { label: "Working Width", value: "150-300 cm" },
    { label: "Weight", value: "120-180 kg" }
  ],
  features: [
    "Precision seed metering for uniform spacing",
    "Adjustable row spacing from 15-30 cm",
    "Corrosion-resistant powder-coated steel body",
    "Easy maintenance and operation",
    "Suitable for various seed types and sizes",
    "Depth control mechanism for consistent planting",
    "Quick-attach system for easy mounting"
  ]
};

// HOP 5 specifications
const hop5Specs = {
  description: "RoWeR HOP 5 - Enhanced precision seeding system designed for optimal performance and reliability in modern agricultural operations.",
  specs: [
    { label: "Model", value: "HOP 5" },
    { label: "Type", value: "Precision Seeder" },
    { label: "Capacity", value: "High-performance" },
    { label: "Application", value: "Multi-crop" },
    { label: "Build Quality", value: "Industrial Grade" }
  ],
  features: [
    "Advanced seed metering technology",
    "Durable construction for long-term use",
    "Easy to operate and maintain",
    "Consistent seed placement accuracy",
    "Suitable for various field conditions",
    "Optimized for efficiency and productivity"
  ]
};

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [viewerOpen, setViewerOpen] = useState(false);
  const [viewer3DOpen, setViewer3DOpen] = useState(false);

  const handleViewDetails = (productId) => {
    setSelectedProduct(productId);
    setViewerOpen(true);
  };

  const handleCloseViewer = () => {
    setViewerOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  const handleView3DDetails = (productId) => {
    setSelectedProduct(productId);
    setViewer3DOpen(true);
  };

  const handleClose3DViewer = () => {
    setViewer3DOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  // Products grid view
  return (
    <>
      <Interactive3DViewer
        isOpen={viewerOpen}
        onClose={handleCloseViewer}
        productImage={rowerSeederImage}
        productName="RoWeR MASS Multi Row Tractormount Seeder"
        productSpecs={productSpecs}
      />
      
      <Interactive3DModelViewer
        isOpen={viewer3DOpen}
        onClose={handleClose3DViewer}
        modelPath="/models/RoWeR-Hop5_STEP_File.glb"
        productName="RoWeR HOP 5"
        productSpecs={hop5Specs}
      />
      
      <PageContainer className="min-h-screen py-20">
      {/* Hero Section */}
      <motion.div 
        variants={heroVariant}
        className="mb-16"
      >
        <div className="text-center max-w-4xl mx-auto px-6">
          <motion.h1 
            variants={staggerItem}
            className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 tracking-tight"
          >
            Our Products
          </motion.h1>
          <motion.p 
            variants={staggerItem}
            className="text-xl text-gray-600 leading-relaxed"
          >
            Discover our range of precision seeders designed for modern agriculture
          </motion.p>
        </div>
      </motion.div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Product 1 */}
          <ScrollFadeIn direction="up" delay={200}>
            <motion.div 
              className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-8 text-center cursor-pointer hover:shadow-2xl transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleViewDetails("rower-mass")}
            >
              <motion.div
                className="mb-6"
                whileHover={{ rotateY: 15 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={rowerSeederImage} 
                  alt="RoWeR MASS Multi Row Tractormount Seeder" 
                  className="w-full h-48 object-contain mx-auto"
                />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                RoWeR MASS Multi Row Tractormount Seeder
              </h3>
              <p className="text-gray-600 mb-4">
                Advanced multi-row precision seeding for large-scale operations
              </p>
              <motion.button
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Details
              </motion.button>
            </motion.div>
          </ScrollFadeIn>

          {/* Product 2 */}
          <ScrollFadeIn direction="up" delay={250}>
            <motion.div 
              className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-8 text-center cursor-pointer hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="h-48 flex items-center justify-center mb-6">
                <img src={seederImageData} alt="Mass Single Row Seeder" className="w-full h-48 object-contain mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Mass Single Row Seeder
              </h3>
              <p className="text-gray-600 mb-4">
                Precision single-row seeding technology
              </p>
              <motion.button
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Details
              </motion.button>
            </motion.div>
          </ScrollFadeIn>

          {/* Product 3 */}
          <ScrollFadeIn direction="up" delay={300}>
            <motion.div 
              className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-8 text-center cursor-pointer hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="h-48 flex items-center justify-center mb-6">
                <img src={seederImageData} alt="Mass Single Row Seeder - Tiller Mount" className="w-full h-48 object-contain mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Mass Single Row Seeder - Tiller Mount
              </h3>
              <p className="text-gray-600 mb-4">
                Tiller-mounted precision seeding solution
              </p>
              <motion.button
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Details
              </motion.button>
            </motion.div>
          </ScrollFadeIn>

          {/* Product 4 */}
          <ScrollFadeIn direction="up" delay={350}>
            <motion.div 
              className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-8 text-center cursor-pointer hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="h-48 flex items-center justify-center mb-6">
                <img src={seederImageData} alt="Mass - Multi Row Tractormount Seeder" className="w-full h-48 object-contain mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Mass - Multi Row Tractormount Seeder
              </h3>
              <p className="text-gray-600 mb-4">
                Efficient multi-row tractor-mounted system
              </p>
              <motion.button
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Details
              </motion.button>
            </motion.div>
          </ScrollFadeIn>

          {/* Product 5 */}
          <ScrollFadeIn direction="up" delay={400}>
            <motion.div 
              className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-8 text-center cursor-pointer hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="h-48 flex items-center justify-center mb-6">
                <img src={seederImageData} alt="RoWeR - Bed Maker" className="w-full h-48 object-contain mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                RoWeR - Bed Maker
              </h3>
              <p className="text-gray-600 mb-4">
                Precision bed preparation equipment
              </p>
              <motion.button
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Details
              </motion.button>
            </motion.div>
          </ScrollFadeIn>

          {/* Product 6 */}
          <ScrollFadeIn direction="up" delay={450}>
            <motion.div 
              className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-8 text-center cursor-pointer hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="h-48 flex items-center justify-center mb-6">
                <img src={seederImageData} alt="Micron - Vegetable Seeder" className="w-full h-48 object-contain mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Micron - Vegetable Seeder
              </h3>
              <p className="text-gray-600 mb-4">
                Specialized vegetable seeding technology
              </p>
              <motion.button
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Details
              </motion.button>
            </motion.div>
          </ScrollFadeIn>

          {/* Product 7 */}
          <ScrollFadeIn direction="up" delay={500}>
            <motion.div 
              className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-8 text-center cursor-pointer hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="h-48 flex items-center justify-center mb-6">
                <img src={seederImageData} alt="Hop 3" className="w-full h-48 object-contain mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Hop 3
              </h3>
              <p className="text-gray-600 mb-4">
                Compact precision seeder model
              </p>
              <motion.button
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Details
              </motion.button>
            </motion.div>
          </ScrollFadeIn>

          {/* Product 8 - HOP 5 with 3D Model */}
          <ScrollFadeIn direction="up" delay={550}>
            <motion.div 
              className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-8 text-center cursor-pointer hover:shadow-2xl transition-all duration-300 relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleView3DDetails("hop-5")}
            >
              {/* 3D Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                3D MODEL
              </div>
              <div className="h-48 flex items-center justify-center mb-6">
                <img src={seederImageData} alt="Hop 5" className="w-full h-48 object-contain mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Hop 5
              </h3>
              <p className="text-gray-600 mb-4">
                Enhanced precision seeding system
              </p>
              <motion.button
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View 3D Model
              </motion.button>
            </motion.div>
          </ScrollFadeIn>

          {/* Product 9 */}
          <ScrollFadeIn direction="up" delay={600}>
            <motion.div 
              className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-8 text-center cursor-pointer hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="h-48 flex items-center justify-center mb-6">
                <img src={seederImageData} alt="TMS - 1" className="w-full h-48 object-contain mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                TMS - 1
              </h3>
              <p className="text-gray-600 mb-4">
                Tractor-mounted seeding solution
              </p>
              <motion.button
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Details
              </motion.button>
            </motion.div>
          </ScrollFadeIn>
        </div>
      </div>
      </PageContainer>
    </>
  );
}