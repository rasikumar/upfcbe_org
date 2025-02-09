// src/App.js
import { Route, Routes } from "react-router";
import { useState, useEffect } from "react";

import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Error from "./components/Error";
import ScrollToTop from "./lib/ScrollToTop";
import Footer from "./components/Footer";
import About from "./pages/Aboutus/About";
import ScrollToTopButton from "./components/ScrollToTopButton";

const App = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className="font-NotoSans">
        <Header />
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
        {showScrollToTop && <ScrollToTopButton />}
      </div>
    </div>
  );
};

export default App;
