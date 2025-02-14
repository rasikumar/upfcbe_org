import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { about_bottom_pic } from "@/assets";
import Heading from "@/components/Heading";
import { aboutContent } from "@/data";

gsap.registerPlugin(ScrollTrigger);

const Total = () => {
  const { title, heading, description, boxes } = aboutContent[5];
  const sectionRefA = useRef(null);
  const boxRefsA = useRef([]);

  useEffect(() => {
    const tf = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRefA.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tf.fromTo(
      ".fadeInA",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.3, ease: "power2.out" }
    );
  }, []);

  return (
    <div
      ref={sectionRefA}
      className="relative flex flex-col items-center pt-20 bg-red-400"
      style={{
        backgroundImage: `url(${about_bottom_pic})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        // backgroundPosition: "",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="relative flex flex-col items-center gap-6 text-white px-4 md:px-0">
        <Heading undertext={title} className="fadeInA" />
        <h2 className="text-2xl md:text-4xl font-semibold fadeInA">
          {heading}
        </h2>
        <p className="font-medium fadeInA text-center">{description}</p>
        <div className="flex flex-col md:flex-row gap-10">
          {boxes.map((box, index) => (
            <div
              key={box.id}
              ref={(el) => (boxRefsA.current[index] = el)}
              className={`flex flex-col items-center py-10 gap-2 fadeInA ${
                index !== boxes.length - 1
                  ? "md:border-r border-upfdarkblack/90 md:mr-10 md:pr-20"
                  : ""
              }`}
            >
              <div className="bg-white p-5 rounded-full ">
                <box.icon className="text-4xl text-upfteagreeno" />
              </div>
              <h2 className="text-3xl font-semibold text-upforangecrayola">
                {box.number}
              </h2>
              <h3 className="text-xl font-semibold">{box.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Total;
