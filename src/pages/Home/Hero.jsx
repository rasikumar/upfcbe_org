import { Link } from "react-router";
import { HeroCard } from "../../components/HeroCard";

import { heroContent } from "../../data";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline();
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
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <div className="h-screen" ref={comp}>
      <div className="flex items-center justify-center">
        {heroContent.map((content) => (
          <div
            key={content.id}
            className="flex flex-col items-center justify-center h-96 gap-6"
          >
            <h1
              id="text-reveal"
              className="2xl:text-5xl text-3xl font-bold 2xl:max-w-5xl max-w-2xl text-center"
            >
              {content.title}
            </h1>
            <p id="para-reveal" className="2xl:text-xl w-1/2 text-center">
              {content.description}
            </p>
            <div className="flex gap-4">
              <Link to={content.btnUrl} className="btn-primary">
                {content.buttonText1}
              </Link>
              <Link to={content.btnUrl2} className="btn-secondary text-black">
                {content.buttonText2}
              </Link>
            </div>
          </div>
        ))}
        {/* Hero component content */}
      </div>
      <HeroCard />
    </div>
  );
};

export default Hero;
