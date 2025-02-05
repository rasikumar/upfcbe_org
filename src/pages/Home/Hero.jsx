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
        stagger: 0.5,
        ease: "power1.Out",
      });
      t1.from("#para-reveal", {
        opacity: 0,
        y: "+=50",
        stagger: 0.7,
        ease: "power1.Out",
      });

      // Animation for the SVG cards
      t1.from(svgRefs.current, {
        opacity: 0,
        y: "+=50",
        stagger: 0.4, // Add stagger for each SVG card
        ease: "power1.Out",
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={comp} className="flex flex-col gap-10 my-20 relative px-6">
      {/* Blurred Background Effect */}
      <div className="w-80 h-32 absolute bg-upfteagreen rounded-full blur-[80px] flex items-center justify-center left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 -z-10" />

      {/* Content Wrapper */}
      <div className="max-w-7xl m-auto flex flex-col gap-6 text-center">
        {/* Hero Text */}
        <div className="flex flex-col items-center gap-6">
          <h2
            className="text-2xl md:text-4xl 2xl:text-5xl font-bold 2xl:max-w-4xl max-w-2xl"
            id="text-reveal"
          >
            {hero}
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
      <div className="flex max-md:flex-col gap-4 max-w-7xl m-auto">
        <div className="flex flex-col md:flex-row w-full justify-center items-center m-auto gap-4">
          <div className="md:-mt-44">
            <SvgClipPath ref={(el) => (svgRefs.current[0] = el)} />
          </div>
          <div>
            <SvgClipPath ref={(el) => (svgRefs.current[1] = el)} />
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full justify-center items-center m-auto gap-4">
          <div>
            <SvgClipPath ref={(el) => (svgRefs.current[2] = el)} />
          </div>
          <div className="md:-mt-44">
            <SvgClipPath ref={(el) => (svgRefs.current[3] = el)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
