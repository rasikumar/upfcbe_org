import { ArrowUp } from "lucide-react";
import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        padding: "20px",
        fontSize: "16px",
        backgroundColor: "#000",
        color: "#fff",
        border: "none",
        cursor: "pointer",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transform: isVisible ? "translateY(0)" : "translateY(-1000px)", // Enters from top
        opacity: isVisible ? 1 : 0,
        transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
        animation: isVisible ? "pulse 3s infinite" : "none", // Increased duration
      }}
      className="z-50"
    >
      <ArrowUp />
    </button>
  );
};

// Add animation styles
const styles = `
@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.4); }
  50% { box-shadow: 0 0 0 15px rgba(0, 0, 0, 0); } // Added intermediate step
  100% { box-shadow: 0 0 0 0 rgba(0, 0, 0, 0); }
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default ScrollToTopButton;
