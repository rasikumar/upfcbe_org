import { gurujihero } from "@/assets";
import Button from "@/components/Button";
import SvgClipPath from "@/components/SvgClipPath";
import { heroContent } from "@/data";
import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";

const Hero = () => {
  const comp = useRef(null);
  const svgRefs = useRef([]); // Store refs for each SvgClipPath component

  const { hero, description, buttonText1, buttonText2, btnUrl1, btnUrl2 } =
    heroContent[0];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline();

      // Text animations
      t1.from("#text-reveal", {
        opacity: 0,
        y: "+=50",
        ease: "power4.Out",
      });
      t1.from("#para-reveal", {
        opacity: 0,
        y: "+=50",
        ease: "power4.Out",
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={comp} className="flex flex-col gap-10 my-20 relative px-6 ">
      <div className="w-80 h-32 absolute bg-upfteagreent/50 rounded-full blur-[80px] flex items-center justify-center left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 -z-10" />

      <div className="max-w-7xl m-auto flex flex-col gap-6 text-center">
        {/* Hero Text */}
        <div className="flex flex-col items-center gap-6">
          <h2
            className="text-2xl md:text-4xl 2xl:text-5xl font-bold "
            id="text-reveal"
          >
            {/* {hero.split(",").map} */}
            {hero.split(",").map((desc, index) => (
              <span key={index}>
                {desc.trim()}
                {index !== hero.split(",").length - 1 && <br />}
              </span>
            ))}
          </h2>
          <p
            className="text-sm md:text-lg 2xl:text-xl max-w-xl"
            id="para-reveal"
          >
            {description}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-center">
          <Button className="text-white w-full md:w-auto" to={btnUrl1}>
            {buttonText1}
          </Button>
          <Button variant="secondary" className="w-full md:w-auto" to={btnUrl2}>
            {buttonText2}
          </Button>
        </div>
      </div>

      {/* SVG Section */}
      <div className="flex md:gap-4 gap-1  max-w-[100rem] m-auto">
        <div className="flex  md:flex-row w-full justify-center items-center m-auto md:gap-4 gap-1 ">
          <div className="md:-mt-44 -mt-10">
            <SvgClipPath />
          </div>
          <div>
            <SvgClipPath />
          </div>
        </div>
        <div className="w-[50rem] h-full relative overflow-hidden">
          <img src={gurujihero} className="rounded-3xl" alt="" />
        </div>
        <div className="flex  md:flex-row w-full justify-center items-center m-auto md:gap-4 gap-1 ">
          <div>
            <SvgClipPath />
          </div>
          <div className="md:-mt-44 -mt-10">
            <SvgClipPath />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
