import React, { useState } from "react";
import Loader from "./Loader";
import Navbar from "./Navbar";
import SplashTransition from "./SplashTransition";
import MainPage from "./MainPage";
import ScrollFadeIn from "./ScrollFadeIn";


const pages = {
  Home: <MainPage />,
  Products: (
    <div className="min-h-screen py-20">
      <ScrollFadeIn direction="up" className="h-[80vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">Our Products</h1>
          <p className="text-xl text-gray-600">Discover our range of precision seeders</p>
        </div>
      </ScrollFadeIn>
    </div>
  ),
  "Service Booking": (
    <div className="min-h-screen py-20">
      <ScrollFadeIn direction="up" className="h-[80vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">Service Booking</h1>
          <p className="text-xl text-gray-600">Schedule your equipment maintenance</p>
        </div>
      </ScrollFadeIn>
    </div>
  ),
  Gallery: (
    <div className="min-h-screen py-20">
      <ScrollFadeIn direction="up" className="h-[80vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">Gallery</h1>
          <p className="text-xl text-gray-600">View our equipment in action</p>
        </div>
      </ScrollFadeIn>
    </div>
  ),
  Articles: (
    <div className="min-h-screen py-20">
      <ScrollFadeIn direction="up" className="h-[80vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">Articles</h1>
          <p className="text-xl text-gray-600">Read our latest insights and tips</p>
        </div>
      </ScrollFadeIn>
    </div>
  ),
  "Our Story": (
    <div className="min-h-screen py-20">
      <ScrollFadeIn direction="up" className="h-[80vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">Our Story</h1>
          <p className="text-xl text-gray-600">Learn about our journey and mission</p>
        </div>
      </ScrollFadeIn>
    </div>
  ),
  Enquiry: (
    <div className="min-h-screen py-20">
      <ScrollFadeIn direction="up" className="h-[80vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">Enquiry</h1>
          <p className="text-xl text-gray-600">Get in touch for more information</p>
        </div>
      </ScrollFadeIn>
    </div>
  ),
  "Contact us": (
    <div className="min-h-screen py-20">
      <ScrollFadeIn direction="up" className="h-[80vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600">Reach out to our team</p>
        </div>
      </ScrollFadeIn>
    </div>
  ),
  Resources: (
    <div className="min-h-screen py-20">
      <ScrollFadeIn direction="up" className="h-[80vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">Resources</h1>
          <p className="text-xl text-gray-600">Access manuals and support materials</p>
        </div>
      </ScrollFadeIn>
    </div>
  ),
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState("Home");
  const [pendingPage, setPendingPage] = useState(null);
  const [transitioning, setTransitioning] = useState(false);

  // When loader completes, disable loading state
  const handleLoaderComplete = () => {
    setLoading(false);
  };

  // When nav item is clicked, if different, start transition
  const handleNavSelect = (page) => {
    if (page !== active && !transitioning && !loading) {
      setPendingPage(page);
      setTransitioning(true);
    }
  };

  // Once splash transition completes, switch pages
  const handleSplashEnd = () => {
    setActive(pendingPage);
    setPendingPage(null);
    setTransitioning(false);
  };

  if (loading) {
    return <Loader onComplete={handleLoaderComplete} />;
  }

  return (
    <div className="min-h-screen bg-white text-black relative">
      <Navbar active={active} onSelect={handleNavSelect} />
      <div className="pt-20 px-4">
        {transitioning && pendingPage && (
          <SplashTransition label={pendingPage} onEnd={handleSplashEnd} />
        )}
        {!transitioning && pages[active]}
      </div>
    </div>
  );
}
