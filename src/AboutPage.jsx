import React from "react";
import ScrollFadeIn from "./ScrollFadeIn";
import logo from "./assets/IMG_2219.png";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Hero Section */}
      <ScrollFadeIn direction="up" className="mb-16">
        <div className="text-center max-w-4xl mx-auto px-6">
          <div className="flex justify-center mb-6">
            <img 
              src={logo} 
              alt="Rower Logo" 
              className="w-20 h-20 object-contain"
            />
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-6">About Rower</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Pioneering precision agriculture with innovative seeding solutions
          </p>
        </div>
      </ScrollFadeIn>

      {/* Mission Section */}
      <ScrollFadeIn direction="left" className="mb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                At Rower, we're committed to revolutionizing agriculture through precision seeding technology. 
                Our mission is to empower farmers with innovative tools that enhance productivity while 
                promoting sustainable farming practices.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We believe that every seed deserves the perfect start, and every farmer deserves 
                equipment they can trust season after season.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
                <p className="text-gray-600 mb-4">Years of Innovation</p>
                <div className="text-4xl font-bold text-green-600 mb-2">10K+</div>
                <p className="text-gray-600 mb-4">Happy Farmers</p>
                <div className="text-4xl font-bold text-orange-600 mb-2">50+</div>
                <p className="text-gray-600">Countries Served</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollFadeIn>

      {/* Values Section */}
      <ScrollFadeIn direction="right" className="mb-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="text-blue-600 text-5xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Innovation</h3>
              <p className="text-gray-600">
                Continuously pushing boundaries to develop cutting-edge seeding technology 
                that meets tomorrow's agricultural challenges.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="text-green-600 text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Reliability</h3>
              <p className="text-gray-600">
                Building equipment that farmers can depend on, backed by exceptional 
                service and support when they need it most.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="text-amber-600 text-5xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Sustainability</h3>
              <p className="text-gray-600">
                Committed to creating solutions that not only increase yields but also 
                protect our environment for future generations.
              </p>
            </div>
          </div>
        </div>
      </ScrollFadeIn>

      {/* Team Section */}
      <ScrollFadeIn direction="up" className="mb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Meet Our Team</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our passionate team of engineers, agronomists, and industry experts work tirelessly 
            to bring you the most advanced seeding solutions available.
          </p>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-600 italic text-lg">
              "Every day, we're inspired by the farmers who feed the world. 
              Our commitment is to give them the tools they need to succeed."
            </p>
            <p className="text-gray-800 font-semibold mt-4">- The Rower Team</p>
          </div>
        </div>
      </ScrollFadeIn>
    </div>
  );
}