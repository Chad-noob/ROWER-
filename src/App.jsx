import React, { useState } from "react";
import Loader from "./Loader";
import Navbar from "./Navbar";
import SplashTransition from "./SplashTransition";
import WaterTransition from "./WaterTransition";
import FullScreenOverlay from "./FullScreenOverlay";
import MainPage from "./MainPage";
import AboutPage from "./AboutPage";
import ProductsPage from "./ProductsPage";
import ResourcesPage from "./ResourcesPage";
import PageContainer from "./PageContainer";
import SandBackgroundGlobal from "./components/SandBackgroundGlobal";
import ScrollFadeIn from "./ScrollFadeIn";
import ContactForm from "./components/ContactForm";


export default function App() {
  const [loading, setLoading] = useState(true);
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);
  const [active, setActive] = useState("Home");
  const [pendingPage, setPendingPage] = useState(null);
  const [transitioning, setTransitioning] = useState(false);
  const [waterTransitioning, setWaterTransitioning] = useState(false);
  const [overlayTransitioning, setOverlayTransitioning] = useState(false);
  const [clickPosition, setClickPosition] = useState(null);

  // Navigation function for internal page navigation
  const handleInternalNavigation = (page) => {
    if (page !== active && !transitioning && !waterTransitioning && !overlayTransitioning && hasLoadedOnce) {
      setActive(page);
    }
  };

  // Define pages object inside component to access navigation function
  const pages = {
    Home: <MainPage onNavigate={handleInternalNavigation} />,
    "Our Story": <AboutPage />,
    Products: <ProductsPage />,
  "Service Booking": (
    <PageContainer className="min-h-screen py-20">
      <ScrollFadeIn direction="up" className="h-[80vh] flex items-center justify-center">
        <div className="text-center bg-white/60 backdrop-blur-md rounded-2xl p-12 shadow-xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Service Booking</h1>
          <p className="text-xl text-gray-600">Schedule your equipment maintenance</p>
        </div>
      </ScrollFadeIn>
    </PageContainer>
  ),
  Gallery: (
    <PageContainer className="min-h-screen py-20">
      {/* Hero Section */}
      <ScrollFadeIn direction="up" className="mb-16">
        <div className="text-center bg-white/60 backdrop-blur-md rounded-2xl p-12 shadow-xl max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Gallery</h1>
          <p className="text-xl text-gray-600">View our equipment in action</p>
        </div>
      </ScrollFadeIn>
      
      {/* Featured Video Section */}
      <div className="max-w-6xl mx-auto px-6">
        <ScrollFadeIn direction="up" delay={200}>
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
              Featured: RoWeR Equipment in Action
            </h2>
            
            <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
                src="https://www.youtube.com/embed/xhF4rne1NNs?start=43"
                title="RoWeR Equipment Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600 text-lg">
                Watch our precision seeding equipment in operation, demonstrating the efficiency and accuracy of RoWeR technology.
              </p>
            </div>
          </div>
        </ScrollFadeIn>
        
        {/* Additional Gallery Content */}
        <ScrollFadeIn direction="up" delay={400}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-6 text-center">
              <div className="text-blue-600 text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Precision Seeding</h3>
              <p className="text-gray-600">Accurate seed placement for optimal crop growth and yield maximization.</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-6 text-center">
              <div className="text-green-600 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Efficient Operation</h3>
              <p className="text-gray-600">Streamlined workflow reduces labor time and increases productivity.</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-6 text-center">
              <div className="text-orange-600 text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Field Tested</h3>
              <p className="text-gray-600">Proven performance across various soil conditions and crop types.</p>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </PageContainer>
  ),
  Articles: (
    <PageContainer className="min-h-screen py-20">
      <ScrollFadeIn direction="up" className="h-[80vh] flex items-center justify-center">
        <div className="text-center bg-white/60 backdrop-blur-md rounded-2xl p-12 shadow-xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Articles</h1>
          <p className="text-xl text-gray-600">Read our latest insights and tips</p>
        </div>
      </ScrollFadeIn>
    </PageContainer>
  ),
  Enquiry: (
    <PageContainer className="min-h-screen py-20">
      <ScrollFadeIn direction="up" className="h-[80vh] flex items-center justify-center">
        <div className="text-center bg-white/60 backdrop-blur-md rounded-2xl p-12 shadow-xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Enquiry</h1>
          <p className="text-xl text-gray-600">Get in touch for more information</p>
        </div>
      </ScrollFadeIn>
    </PageContainer>
  ),
  "Contact us": (
    <PageContainer className="min-h-screen py-20">
      {/* Hero Section */}
      <ScrollFadeIn direction="up" className="text-center mb-16">
        <div className="text-center bg-white/60 backdrop-blur-md rounded-2xl p-12 shadow-xl max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Contact Us</h1>
          <p className="text-xl text-gray-600">Get in touch with our team at our offices</p>
        </div>
      </ScrollFadeIn>
      
      {/* Office Information */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Head Office */}
          <ScrollFadeIn direction="left" delay={200}>
            <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="text-center mb-6">
                <div className="text-rose-600 text-5xl mb-4">🏢</div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Head Office</h2>
              </div>
              <div className="space-y-3 text-gray-600">
                <p className="text-lg">4/5, G A Road,</p>
                <p className="text-lg">3rd Lane,</p>
                <p className="text-lg">Old Washermanpet,</p>
                <p className="text-lg font-semibold">Chennai - 600021</p>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-2xl">📧</span>
                    <a 
                      href="mailto:mechcreatio@gmail.com" 
                      className="text-rose-600 hover:text-rose-700 font-medium transition-colors"
                    >
                      mechcreatio@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollFadeIn>
          
          {/* Branch Office */}
          <ScrollFadeIn direction="right" delay={400}>
            <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="text-center mb-6">
                <div className="text-blue-600 text-5xl mb-4">🏛️</div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Branch Office</h2>
              </div>
              <div className="space-y-3 text-gray-600">
                <p className="text-lg">4th Floor, PSG INNOSPHERE,</p>
                <p className="text-lg">PSG STEP, PSG College of Technology,</p>
                <p className="text-lg">Peelamedu,</p>
                <p className="text-lg font-semibold">Coimbatore - 641004</p>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
        
        {/* Enquiry Form */}
        <ScrollFadeIn direction="up" delay={600} className="mt-16">
          <ContactForm />
        </ScrollFadeIn>
        
        {/* Contact CTA */}
        <ScrollFadeIn direction="up" delay={800} className="text-center mt-12">
          <div className="bg-white/60 backdrop-blur-md rounded-xl shadow-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Prefer Other Ways?</h3>
            <p className="text-gray-600 mb-6">
              You can also reach us directly via email or phone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:mechcreatio@gmail.com"
                className="bg-rose-600 text-white px-8 py-3 rounded-lg hover:bg-rose-700 transition-colors font-medium"
              >
                Send Email
              </a>
              <a 
                href="tel:+919876543210"
                className="bg-gray-200 text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-300 transition-colors font-medium"
              >
                Call Us
              </a>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </PageContainer>
  ),
  Resources: <ResourcesPage />,
  };

  // When loader completes, disable loading state and mark as loaded
  const handleLoaderComplete = () => {
    setLoading(false);
    setHasLoadedOnce(true);
  };

  // Handle overlay transition (for ALL pages)
  const handleOverlaySelect = (page, position) => {
    if (page !== active && !transitioning && !waterTransitioning && !overlayTransitioning && hasLoadedOnce) {
      setPendingPage(page);
      setClickPosition(position);
      setOverlayTransitioning(true);
    }
  };

  // Handle regular navigation (fallback - not used anymore)
  const handleNavSelect = (page) => {
    if (page !== active && !transitioning && !waterTransitioning && !overlayTransitioning && hasLoadedOnce) {
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

  // Once water transition completes, switch to page
  const handleWaterTransitionEnd = () => {
    setActive(pendingPage);
    setPendingPage(null);
    setWaterTransitioning(false);
  };

  // Overlay transition handlers
  const handleOverlayMidPoint = () => {
    // Change page content at midpoint of overlay animation
    setActive(pendingPage);
  };

  const handleOverlayComplete = () => {
    // Clean up overlay state
    setPendingPage(null);
    setClickPosition(null);
    setOverlayTransitioning(false);
  };

  if (loading) {
    return <Loader onComplete={handleLoaderComplete} />;
  }

  if (loading) {
    return <Loader onComplete={handleLoaderComplete} />;
  }

  return (
    <div className="min-h-screen bg-transparent text-black relative">
      {/* Global Sand Background for all pages */}
      <SandBackgroundGlobal />
      
      <Navbar 
        active={active} 
        onSelect={handleNavSelect} 
        onOverlaySelect={handleOverlaySelect}
      />
      
      <div className="pt-20 px-4 relative z-10">
        {/* Regular splash transition (legacy - not used) */}
        {transitioning && (
          <SplashTransition label={pendingPage} onEnd={handleSplashEnd} />
        )}
        
        {/* Full-screen overlay transition (for ALL pages) */}
        {overlayTransitioning && (
          <FullScreenOverlay
            isActive={overlayTransitioning}
            clickPosition={clickPosition}
            targetPage={pendingPage}
            onMidPoint={handleOverlayMidPoint}
            onComplete={handleOverlayComplete}
          />
        )}
        
        {/* Page content */}
        {!transitioning && !waterTransitioning && !overlayTransitioning && pages[active]}
      </div>
    </div>
  );
}
