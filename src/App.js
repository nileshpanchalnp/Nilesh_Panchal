import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import Resume from "./Pages/Resume";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Layout from "./components/Layout";
import myLogo from "./imgs/lodingimg.png"; 

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Timer set to 2.5 seconds to allow full animation time
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 2500); 

    return () => clearTimeout(timer); 
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-900">
        {/* CSS FOR ANIMATION */}
        <style>
          {`
            /* This animation does two things at the same time:
               1. Scales from 0 (invisible) to 1 (normal size)
               2. Rotates from -160deg (twisted) to 0deg (straight)
            */
            @keyframes spinAndZoom {
              0% { 
                transform: scale(0) rotate(-160deg); 
                opacity: 0; 
              }
              100% { 
                transform: scale(1) rotate(0deg); 
                opacity: 1; 
              }
            }
          `}
        </style>
        <div 
            className="mb-6 p-2 rounded-full border-2 border-blue-500 shadow-lg shadow-blue-500/50"
            style={{ animation: 'spinAndZoom 2s ease-out forwards' }} 
        >
            <img 
              src={myLogo} 
              alt="My Logo" 
              className="w-44 h-44 rounded-full object-cover" 
            />
        </div>
        <h2 className="text-xl font-bold text-white tracking-wider animate-pulse">
          Loading Portfolio...
        </h2>
      </div>
    );
  }

  return (
    <Router>
      <div className="lg:pl-64">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/Certificate" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;