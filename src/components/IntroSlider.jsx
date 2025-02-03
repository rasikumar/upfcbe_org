/* eslint-disable react/prop-types */
// src/components/IntroSlider.js
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { main_logo } from "../assets";

const IntroSlider = ({ onComplete }) => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete(); // Call the onComplete callback
        },
      });

      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      })
        .from("#icon", {
          opacity: 0,
          y: "-=30",
          duration: 0.5,
          delay: 0.5,
        })
        .from(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#icon", {
          opacity: 0,
          y: "+=30",
          duration: 0.5,
          delay: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
        })
        .from("#hero-page", {
          opacity: 0,
          duration: 1,
        })
        .to("#hero-page", {
          opacity: 0,
          duration: 1,
        })
        .to(".bg-gray-950", {
          opacity: 0,
          duration: 1,
        });
    }, comp);

    return () => ctx.revert();
  }, [onComplete]); // Add onComplete to the dependency array

  return (
    <div className="relative" ref={comp}>
      <div
        id="intro-slider"
        className="h-screen py-10 px-36 bg-gray-50 absolute top-0 left-0 font-OpenSans z-10 w-full flex gap-10 tracking-tight justify-between items-center"
      >
        <div>
          <h1 id="title-1" className="text-9xl">
            Universal
          </h1>
          <h1 id="title-2" className="text-9xl">
            Peace
          </h1>
          <h1 id="title-3" className="text-9xl">
            Foundation
          </h1>
        </div>
        <div id="icon">
          <img src={main_logo} alt="main_logo" width={600} height={600} />
        </div>
      </div>
      <div className="h-screen flex bg-gray-950 justify-center place-items-center">
        <div id="hero-page" className="text-white text-5xl">
          Welcome to 
        </div>
      </div>
    </div>
  );
};

export default IntroSlider;
