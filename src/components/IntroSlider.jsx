/* eslint-disable react/prop-types */
// src/components/IntroSlider.js
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { gurujiHeropic } from "../assets";
// import { main_logo } from "../assets";

const IntroSlider = ({ onComplete }) => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete(); // Call the onComplete callback
          comp.current.style.display = "none"; // Hide the intro slider to prevent flicker
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
          duration: 0.2,
        })
        .to("#hero-page", {
          opacity: 0,
          duration: 0.2,
        })
        .to(".bg-gray-950", {
          opacity: 0,
          duration: 0.2,
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
          <h1 id="title-1" className="2xl:text-9xl text-6xl">
            Universal
          </h1>
          <h1 id="title-2" className="2xl:text-9xl text-6xl">
            Peace
          </h1>
          <h1 id="title-3" className="2xl:text-9xl text-6xl">
            Foundation
          </h1>
        </div>
        <div id="icon">
          <img src={gurujiHeropic} alt="main_logo" className="w-[40rem]" />
        </div>
      </div>
      <div className="h-screen flex bg-gray-950 justify-center place-items-center">
        {/* <div id="hero-page" className="text-white text-5xl">
          Welcome to 
        </div> */}
      </div>
    </div>
  );
};

export default IntroSlider;
