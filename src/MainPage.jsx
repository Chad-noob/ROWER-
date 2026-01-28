
import React, { useRef } from "react";
import { motion } from "framer-motion";
import logo from "./assets/IMG_2219.png";
import ScrollFadeIn from "./ScrollFadeIn";
import PageContainer, { heroVariant, staggerItem } from "./PageContainer";

function MainPage({ onNavigate }) {
  
  const contentRef = useRef(null);

  const handleScroll = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLearnMore = () => {
    if (onNavigate) {
      onNavigate("Our Story");
    }
  };

  return (
    <div className="relative min-h-screen bg-transparent flex flex-col items-center justify-center overflow-hidden overflow-y-hidden">
      <div className="flex flex-col items-center justify-center h-screen relative z-10">
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
      
      <ScrollFadeIn direction="left" delay={200} className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-7xl px-8 w-full">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ScrollFadeIn direction="up" delay={300}>
              <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold mb-3 text-gray-800">RoWeR MASS Multi Row Tractormount Seeder</h3>
                <p className="text-gray-600 text-sm mb-4">Advanced multi-row precision seeding for large-scale operations</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                  View Details
                </button>
              </div>
            </ScrollFadeIn>
            <ScrollFadeIn direction="up" delay={350}>
              <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold mb-3 text-gray-800">Mass Single Row Seeder</h3>
                <p className="text-gray-600 text-sm mb-4">Precision single-row seeding technology</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                  View Details
                </button>
              </div>
            </ScrollFadeIn>
            <ScrollFadeIn direction="up" delay={400}>
              <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold mb-3 text-gray-800">Mass Single Row Seeder - Tiller Mount</h3>
                <p className="text-gray-600 text-sm mb-4">Tiller-mounted precision seeding solution</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                  View Details
                </button>
              </div>
            </ScrollFadeIn>
            <ScrollFadeIn direction="up" delay={450}>
              <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold mb-3 text-gray-800">Mass - Multi Row Tractormount Seeder</h3>
                <p className="text-gray-600 text-sm mb-4">Efficient multi-row tractor-mounted system</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                  View Details
                </button>
              </div>
            </ScrollFadeIn>
            <ScrollFadeIn direction="up" delay={500}>
              <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold mb-3 text-gray-800">RoWeR - Bed Maker</h3>
                <p className="text-gray-600 text-sm mb-4">Precision bed preparation equipment</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                  View Details
                </button>
              </div>
            </ScrollFadeIn>
            <ScrollFadeIn direction="up" delay={550}>
              <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold mb-3 text-gray-800">Micron - Vegetable Seeder</h3>
                <p className="text-gray-600 text-sm mb-4">Specialized vegetable seeding technology</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                  View Details
                </button>
              </div>
            </ScrollFadeIn>
            <ScrollFadeIn direction="up" delay={600}>
              <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold mb-3 text-gray-800">Hop 3</h3>
                <p className="text-gray-600 text-sm mb-4">Compact precision seeder model</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                  View Details
                </button>
              </div>
            </ScrollFadeIn>
            <ScrollFadeIn direction="up" delay={650}>
              <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold mb-3 text-gray-800">Hop 5</h3>
                <p className="text-gray-600 text-sm mb-4">Enhanced precision seeding system</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                  View Details
                </button>
              </div>
            </ScrollFadeIn>
            <ScrollFadeIn direction="up" delay={700}>
              <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold mb-3 text-gray-800">TMS - 1</h3>
                <p className="text-gray-600 text-sm mb-4">Tractor-mounted seeding solution</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                  View Details
                </button>
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
            <button 
              onClick={handleLearnMore}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Learn More
            </button>
          </ScrollFadeIn>
        </div>
      </ScrollFadeIn>
    </div>
  );
}

export default MainPage;
