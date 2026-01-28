import React, { useState } from "react";
import { motion } from "framer-motion";
import ScrollFadeIn from "./ScrollFadeIn";
import PageContainer, { staggerItem, heroVariant } from "./PageContainer";

export default function ResourcesPage() {
  const [frontTeeth, setFrontTeeth] = useState(17);
  const [rearTeeth, setRearTeeth] = useState(17);
  const [holes, setHoles] = useState(3);
  const [unit, setUnit] = useState("Centimeters");
  const [result, setResult] = useState("");

  // Spacing chart data - exact match to your image
  const spacingData = {
    // Valid combinations and their spacing values for each hole count
    "17-25": { 3: 38, 6: 19, 12: 10, 18: 6, 24: 5 },
    "17-23": { 3: 35, 6: 18, 12: 9, 18: 6, 24: 4 },
    "19-23": { 3: 32, 6: 16, 12: 8, 18: 5, 24: 4 },
    "19-21": { 3: 29, 6: 15, 12: 7, 18: 5, 24: 4 },
    "19-19": { 3: 26, 6: 13, 12: 7, 18: 4, 24: 3 },
    "21-19": { 3: 24, 6: 12, 12: 6, 18: 4, 24: 3 },
    "23-19": { 3: 22, 6: 11, 12: 5, 18: 4, 24: 3 },
    "25-19": { 3: 20, 6: 10, 12: 5, 18: 3, 24: 2 },
    "25-17": { 3: 18, 6: 9, 12: 4, 18: 3, 24: 2 }
  };

  const calculateSpacing = () => {
    // Create combination key
    const combination = `${frontTeeth}-${rearTeeth}`;
    
    // Check if combination exists in chart
    if (!spacingData[combination]) {
      setResult("Sprocket Combination Not Possible");
      return;
    }

    // Get spacing for the hole count
    const spacing = spacingData[combination][holes];
    if (spacing) {
      // Convert to different units if needed
      let convertedSpacing = spacing;
      if (unit === "Inches") {
        convertedSpacing = (spacing / 2.54).toFixed(2);
      } else if (unit === "Millimeters") {
        convertedSpacing = spacing * 10;
      }
      setResult(`${convertedSpacing} ${unit}`);
    } else {
      setResult("Invalid hole count for this combination");
    }
  };

  return (
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
            Resources
          </motion.h1>
          <motion.p 
            variants={staggerItem}
            className="text-xl text-gray-600 leading-relaxed"
          >
            Technical specifications, spacing charts, and calculation tools for RoWeR equipment
          </motion.p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Spacing Chart Section */}
        <ScrollFadeIn direction="up" delay={200}>
          <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Spacing Chart for RoWeR
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border-2 border-gray-800">
                <thead>
                  <tr className="bg-blue-300">
                    <th className="border-2 border-gray-800 p-2 text-center font-bold bg-green-400">
                      Number of<br />Holes in the<br />Roller
                    </th>
                    <th className="border-2 border-gray-800 p-2 text-center font-bold">17</th>
                    <th className="border-2 border-gray-800 p-2 text-center font-bold">17</th>
                    <th className="border-2 border-gray-800 p-2 text-center font-bold">19</th>
                    <th className="border-2 border-gray-800 p-2 text-center font-bold">19</th>
                    <th className="border-2 border-gray-800 p-2 text-center font-bold">19</th>
                    <th className="border-2 border-gray-800 p-2 text-center font-bold">21</th>
                    <th className="border-2 border-gray-800 p-2 text-center font-bold">23</th>
                    <th className="border-2 border-gray-800 p-2 text-center font-bold">25</th>
                    <th className="border-2 border-gray-800 p-2 text-center font-bold">25</th>
                  </tr>
                  <tr className="bg-blue-200">
                    <th className="border-2 border-gray-800 p-2 bg-green-400 font-bold">Front</th>
                    <th className="border-2 border-gray-800 p-2 text-center font-bold">17</th>
                    <th className="border-2 border-gray-800 p-2 text-center font-bold">17</th>
                    <th className="border-2 border-gray-800 p-2 text-center font-bold">19</th>
                    <th className="border-2 border-gray-800 p-2 text-center font-bold">19</th>
                    <th className="border-2 border-gray-800 p-2 text-center font-bold">19</th>
                    <th className="border-2 border-gray-800 p-2 text-center font-bold">21</th>
                    <th className="border-2 border-gray-800 p-2 text-center font-bold">23</th>
                    <th className="border-2 border-gray-800 p-2 text-center font-bold">25</th>
                    <th className="border-2 border-gray-800 p-2 text-center font-bold">25</th>
                  </tr>
                  <tr className="bg-purple-200">
                    <th className="border-2 border-gray-800 p-2 bg-green-400 font-bold">Rear</th>
                    <th className="border-2 border-gray-800 p-2 text-center font-bold">25</th>
                    <th className="border-2 border-gray-800 p-2 text-center font-bold">23</th>
                    <th className="border-2 border-gray-800 p-2 text-center font-bold">23</th>
                    <th className="border-2 border-gray-800 p-2 text-center font-bold">21</th>
                    <th className="border-2 border-gray-800 p-2 text-center font-bold">19</th>
                    <th className="border-2 border-gray-800 p-2 text-center font-bold">19</th>
                    <th className="border-2 border-gray-800 p-2 text-center font-bold">19</th>
                    <th className="border-2 border-gray-800 p-2 text-center font-bold">19</th>
                    <th className="border-2 border-gray-800 p-2 text-center font-bold">17</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-2 border-gray-800 p-2 text-center font-bold bg-red-400">3</td>
                    <td className="border-2 border-gray-800 p-2 text-center">38</td>
                    <td className="border-2 border-gray-800 p-2 text-center">35</td>
                    <td className="border-2 border-gray-800 p-2 text-center">32</td>
                    <td className="border-2 border-gray-800 p-2 text-center">29</td>
                    <td className="border-2 border-gray-800 p-2 text-center">26</td>
                    <td className="border-2 border-gray-800 p-2 text-center">24</td>
                    <td className="border-2 border-gray-800 p-2 text-center">22</td>
                    <td className="border-2 border-gray-800 p-2 text-center">20</td>
                    <td className="border-2 border-gray-800 p-2 text-center">18</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-gray-800 p-2 text-center font-bold bg-red-400">6</td>
                    <td className="border-2 border-gray-800 p-2 text-center">19</td>
                    <td className="border-2 border-gray-800 p-2 text-center">18</td>
                    <td className="border-2 border-gray-800 p-2 text-center">16</td>
                    <td className="border-2 border-gray-800 p-2 text-center">15</td>
                    <td className="border-2 border-gray-800 p-2 text-center">13</td>
                    <td className="border-2 border-gray-800 p-2 text-center">12</td>
                    <td className="border-2 border-gray-800 p-2 text-center">11</td>
                    <td className="border-2 border-gray-800 p-2 text-center">10</td>
                    <td className="border-2 border-gray-800 p-2 text-center">9</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-gray-800 p-2 text-center font-bold bg-red-400">12</td>
                    <td className="border-2 border-gray-800 p-2 text-center">10</td>
                    <td className="border-2 border-gray-800 p-2 text-center">9</td>
                    <td className="border-2 border-gray-800 p-2 text-center">8</td>
                    <td className="border-2 border-gray-800 p-2 text-center">7</td>
                    <td className="border-2 border-gray-800 p-2 text-center">7</td>
                    <td className="border-2 border-gray-800 p-2 text-center">6</td>
                    <td className="border-2 border-gray-800 p-2 text-center">5</td>
                    <td className="border-2 border-gray-800 p-2 text-center">5</td>
                    <td className="border-2 border-gray-800 p-2 text-center">4</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-gray-800 p-2 text-center font-bold bg-red-400">18</td>
                    <td className="border-2 border-gray-800 p-2 text-center">6</td>
                    <td className="border-2 border-gray-800 p-2 text-center">6</td>
                    <td className="border-2 border-gray-800 p-2 text-center">5</td>
                    <td className="border-2 border-gray-800 p-2 text-center">5</td>
                    <td className="border-2 border-gray-800 p-2 text-center">4</td>
                    <td className="border-2 border-gray-800 p-2 text-center">4</td>
                    <td className="border-2 border-gray-800 p-2 text-center">4</td>
                    <td className="border-2 border-gray-800 p-2 text-center">3</td>
                    <td className="border-2 border-gray-800 p-2 text-center">3</td>
                  </tr>
                  <tr>
                    <td className="border-2 border-gray-800 p-2 text-center font-bold bg-red-400">24</td>
                    <td className="border-2 border-gray-800 p-2 text-center">5</td>
                    <td className="border-2 border-gray-800 p-2 text-center">4</td>
                    <td className="border-2 border-gray-800 p-2 text-center">4</td>
                    <td className="border-2 border-gray-800 p-2 text-center">4</td>
                    <td className="border-2 border-gray-800 p-2 text-center">3</td>
                    <td className="border-2 border-gray-800 p-2 text-center">3</td>
                    <td className="border-2 border-gray-800 p-2 text-center">3</td>
                    <td className="border-2 border-gray-800 p-2 text-center">2</td>
                    <td className="border-2 border-gray-800 p-2 text-center">2</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="text-sm text-gray-600 mt-4 text-center">
              *Spacing may change due to soil conditions* *All dimensions in centimeter*
            </p>
          </div>
        </ScrollFadeIn>

        {/* Calculator Section */}
        <ScrollFadeIn direction="up" delay={400}>
          <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl shadow-xl p-8 max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              RoWeR Hop Series Spacing Calculator
            </h2>
            
            <div className="space-y-6">
              {/* Front Sprocket */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Front Sprocket (Teeth):
                </label>
                <select 
                  value={frontTeeth}
                  onChange={(e) => setFrontTeeth(parseInt(e.target.value))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value={17}>17</option>
                  <option value={19}>19</option>
                  <option value={21}>21</option>
                  <option value={23}>23</option>
                  <option value={25}>25</option>
                </select>
              </div>

              {/* Rear Sprocket */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rear Sprocket (Teeth):
                </label>
                <select 
                  value={rearTeeth}
                  onChange={(e) => setRearTeeth(parseInt(e.target.value))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value={17}>17</option>
                  <option value={19}>19</option>
                  <option value={21}>21</option>
                  <option value={23}>23</option>
                  <option value={25}>25</option>
                </select>
              </div>

              {/* Number of Holes */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Holes in the Roller:
                </label>
                <select 
                  value={holes}
                  onChange={(e) => setHoles(parseInt(e.target.value))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value={3}>3</option>
                  <option value={6}>6</option>
                  <option value={12}>12</option>
                  <option value={18}>18</option>
                  <option value={24}>24</option>
                </select>
              </div>

              {/* Unit Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Unit:
                </label>
                <select 
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="Centimeters">Centimeters</option>
                  <option value="Inches">Inches</option>
                  <option value="Millimeters">Millimeters</option>
                </select>
              </div>

              {/* Calculate Button */}
              <motion.button
                onClick={calculateSpacing}
                className="w-full bg-green-600 text-white p-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Calculate
              </motion.button>

              {/* Result */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Result Spacing:
                </label>
                <div className="w-full p-4 bg-white border border-gray-300 rounded-lg min-h-[50px] flex items-center justify-center">
                  <span className={`text-lg font-semibold ${
                    result === "Sprocket Combination Not Possible" 
                      ? "text-red-600" 
                      : "text-gray-800"
                  }`}>
                    {result || "Select values and click Calculate"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ScrollFadeIn>

        {/* Additional Resources */}
        <ScrollFadeIn direction="up" delay={600}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-6 text-center">
              <div className="text-blue-600 text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Technical Manuals</h3>
              <p className="text-gray-600 mb-4">Download comprehensive user manuals and technical specifications</p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Download PDF
              </button>
            </div>

            <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-6 text-center">
              <div className="text-green-600 text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Maintenance Guide</h3>
              <p className="text-gray-600 mb-4">Step-by-step maintenance procedures and troubleshooting</p>
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                View Guide
              </button>
            </div>

            <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-6 text-center">
              <div className="text-purple-600 text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Technical Support</h3>
              <p className="text-gray-600 mb-4">Get expert help with installation and operation questions</p>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Contact Support
              </button>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </PageContainer>
  );
}