import React from "react";
import { motion } from "framer-motion";
import ScrollFadeIn from "./ScrollFadeIn";
import PageContainer, { staggerItem, heroVariant, cardVariant } from "./PageContainer";
import logo from "./assets/IMG_2219.png";

export default function AboutPage() {
  return (
    <PageContainer className="min-h-screen py-20">
      {/* Hero Section */}
      <motion.div 
        variants={heroVariant}
        className="mb-16"
      >
        <div className="text-center max-w-4xl mx-auto px-6">
          <motion.div 
            className="flex justify-center mb-6"
            variants={staggerItem}
          >
            <img 
              src={logo} 
              alt="Rower Logo" 
              className="w-20 h-20 object-contain"
            />
          </motion.div>
          <motion.h1 
            variants={staggerItem}
            className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 tracking-tight"
          >
            
          </motion.h1>
          <motion.div 
            variants={staggerItem}
            className="text-center mb-8"
          >
            <p className="text-2xl md:text-3xl text-gray-700 font-medium mb-4 leading-relaxed" style={{ fontFamily: 'serif' }}>
              "உழுதுண்டு வாழ்வாரே வாழ்வார்மற் றெல்லாம்<br />
              தொழுதுண்டு பின்செல் பவர்"
            </p>
            <p className="text-lg text-gray-600 italic">- Thiruvalluvar</p>
            <div className="mt-4 p-4 bg-white/70 backdrop-blur-sm rounded-lg">
              <p className="text-base text-gray-700 leading-relaxed">
                <strong>Meaning:</strong> Whoever lives by farming and provides food for himself and also for others he alone lives to the fullest. Others all have to lead a dependent life.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Company Founding Story */}
      <motion.div 
        variants={staggerItem}
        className="mb-16"
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div variants={staggerItem}>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Beginning</h2>
            <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-8 mb-8">
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Founded in 2019 by three engineering graduates, the company has come a long way from its beginnings. 
                The corporate office is located in PSG Innosphere at PSG College of Technology Coimbatore. It is a 
                Start-up based out of Coimbatore, the Industrial Hub of India. The company is incubated in PSG-STEP, Coimbatore.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                With our core team hailing from farming background, we understand the needs and requirement of the 
                Indian farming community. This passion for delivering technology that is accessible by the majority 
                of the farmers has led to the culmination of RoWeR INDIA.
              </p>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-6">The Journey</h3>
            <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-8 mb-8">
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Since farming has been the background, our team came together to make a harvesting machine for root 
                crops for which it was recognized as the best project in 2016, after which we were funded and supported 
                by PSG-STEP through Department of Science and Technology (DST), Government of INDIA. The harvesting 
                machine was designed, fabricated, assembled and pilot tested. During the course of testing and 
                development we observed and worked on all the practical difficulties.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                One such observation was the difficulty in grabbing carrot by the shoot leaves due to manual seeding. 
                This led to the design and development of a seeding machine to aid in perfect seeding with efficient 
                utilization of land and seeds and reduced manual labour intervention. Thus, RoWeR INDIA was born.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                And with the onset of the Precision Seeder, We RoWeR INDIA, will explore and collaborate with farmers 
                to solve the pressing problems of Indian Agriculture.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Company Stats */}
      <motion.div 
        variants={staggerItem}
        className="mb-16"
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 
            variants={staggerItem}
            className="text-3xl font-bold text-gray-800 text-center mb-12"
          >
            Our Journey in Numbers
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              variants={staggerItem}
              className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-8 text-center hover:shadow-2xl transition-shadow"
            >
              <div className="text-blue-600 text-5xl mb-4">�</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">2016</h3>
              <p className="text-gray-600">
                Best Project Recognition for root crop harvesting machine
              </p>
            </motion.div>
            <motion.div 
              variants={staggerItem}
              className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-8 text-center hover:shadow-2xl transition-shadow"
            >
              <div className="text-green-600 text-5xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">2019</h3>
              <p className="text-gray-600">
                RoWeR INDIA founded by three engineering graduates with farming background
              </p>
            </motion.div>
            <motion.div 
              variants={staggerItem}
              className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-8 text-center hover:shadow-2xl transition-shadow"
            >
              <div className="text-amber-600 text-5xl mb-4">�</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Present</h3>
              <p className="text-gray-600">
                Precision seeding solutions to solve pressing problems of Indian Agriculture
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Mission & Vision Section */}
      <motion.div 
        variants={staggerItem}
        className="mb-16"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2 
            variants={staggerItem}
            className="text-3xl font-bold text-gray-800 mb-8"
          >
            Our Mission & Vision
          </motion.h2>
          <motion.div 
            variants={staggerItem}
            className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-8 mb-8"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Mission</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              To deliver accessible precision agriculture technology that empowers Indian farmers 
              with efficient, cost-effective seeding solutions.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Vision</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              To be the leading innovator in precision agriculture, solving the pressing problems 
              of Indian farming through collaboration and technology.
            </p>
          </motion.div>
          <motion.div 
            variants={staggerItem}
            className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-8"
          >
            <p className="text-gray-600 italic text-lg">
              "From engineering graduates with farming roots to agricultural innovators - 
              our journey continues to serve the farming community that feeds our nation."
            </p>
            <p className="text-gray-800 font-semibold mt-4">- RoWeR INDIA Team</p>
          </motion.div>
        </div>
      </motion.div>
    </PageContainer>
  );
}