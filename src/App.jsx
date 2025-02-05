// src/App.js
// import { useState } from "react";
// import IntroSlider from "./components/IntroSlider";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { Route, Routes } from "react-router";
import Error from "./components/Error";
import ScrollToTop from "./lib/ScrollToTop";
import Footer from "./components/Footer";

const App = () => {
  // const [animationComplete, setAnimationComplete] = useState(false);

  // const handleAnimationComplete = () => {
  //   setAnimationComplete(true); // Update state when animation completes
  // };
  return (
    <div>
      {/* {!animationComplete ? (
        <IntroSlider onComplete={handleAnimationComplete} />
      ) : ( */}
      <div>
        <Header />
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="*" element={<Error />} />
        </Routes>
        <Footer/>
      </div>
      {/* )}  */}
    </div>
  );
};

export default App;
