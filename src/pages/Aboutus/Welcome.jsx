import {
  about_first,
  about_second,
  heart,
  pigeon,
  rotate_text,
} from "@/assets";
import Heading from "@/components/Heading";
import { aboutContent, founder } from "@/data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import CountUp from "react-countup";
import { FaHandHoldingHeart } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const Welcome = () => {
  const { heading, title, content } = aboutContent[0];
  const { name, position, socialMedia, image } = founder[0];
  const { link, icon } = socialMedia[0];
  const sectionRef = useRef(null);
  const iconRefs = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      ".fadeIn",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.3, ease: "power1.inOut" }
    );
    t2.fromTo(
      ".fadePhotoIn",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.3, ease: "power1.inOut" }
    );
  }, []);

  return (
    <div
      className="flex max-md:flex-col max-w-[100rem] m-auto md:py-24 py-10 justify-between md:gap-28 gap-14 md:px-10 px-4"
      ref={sectionRef}
    >
      <div className="md:w-1/2  flex flex-col gap-10">
        <div className="flex flex-col md:gap-8 gap-4">
          <Heading undertext={heading} className="fadeIn" />
          <h2 className="2xl:text-5xl text-4xl font-semibold fadeIn">
            {title}
          </h2>
          <p className="text-upfblack 2xl:text-lg text-base fadeIn">
            {content}
          </p>
        </div>

        {/* founder Section */}
        <div className="flex max-md:flex-col md:gap-8 gap-4 md:items-center">
          <div className="flex gap-4 items-start">
            <div className="flex gap-4">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <img
                  src={image}
                  alt="social_media_icon"
                  width={50}
                  height={50}
                  className="fadeIn"
                />
              </a>
            </div>
            <div className="flex flex-col">
              <p className="font-Caveat text-upfteagreent mb-1 text-xl fadeIn">
                {position}
              </p>
              <h2 className="font-semibold text-xl fadeIn">{name}</h2>
            </div>
          </div>
          <div className="h-full w-[.3px] bg-upfgray" />
          <div className="flex gap-4 items-center">
            {socialMedia.map((icon, index) => (
              <div
                key={index}
                ref={(el) => (iconRefs.current[index] = el)}
                className="fadeIn"
              >
                <a href={icon.link} target="_blank" rel="noopener noreferrer">
                  <icon.icon
                    className="w-10 h-10"
                    style={{ color: icon.color }}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* image section */}
      <div className="md:w-1/2 w-full flex max-md:flex-col gap-8 relative">
        <img
          src={about_first}
          alt="about_first"
          className="z-20 rounded-3xl md:mb-24 2xl:h-full md:h-[21rem] fadePhotoIn "
        />
        <img
          src={heart}
          alt="Heart_image"
          className="absolute -top-5 hidden md:block  z-10 fadePhotoIn"
        />
        <img
          src={about_second}
          alt="about_second"
          className="rounded-3xl md:mt-24 2xl:h-full md:h-[21rem] fadePhotoIn "
        />
        <div className="">
          <img
            src={rotate_text}
            alt="rotate_text"
            className="absolute z-20 2xl:left-[45%] xl:left-[40%] md:w-28 2xl:w-40 md:top-[45%] left-[30%] top-[40%] transform -translate-x-1/2 -translate-y-1/2 animate-spin-custom "
          />
          <img
            src={pigeon}
            alt="pigeon"
            className="2xl:w-20 w-16 absolute z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 2xl:mt-14 2xl:ml-10 md:mt-9 max-md:-mt-9"
          />
        </div>
        <div className="md:absolute bottom-4 left-20 z-30 bg-upfwhite py-4 pl-6 pr-14 rounded-full shadow-upfshadow fadeIn">
          <h2 className="inline-flex items-center justify-center gap-3 text-lg font-bold">
            <span className="text-2xl">
              <FaHandHoldingHeart className="text-upforangecrayola" />
            </span>
            <CountUp start={0} duration={20} end={25} /> Years of Experience
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
