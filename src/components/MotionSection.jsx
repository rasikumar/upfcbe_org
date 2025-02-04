/* eslint-disable react/prop-types */
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MotionSection = ({
  children,
  from = { opacity: 0, x: -100 }, // Default initial state
  to = { opacity: 1, x: 0, duration: 1 }, // Default animation
  className = "", // Default empty string for className
  trigger = true, // New prop to control animation trigger
}) => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (trigger) {
      gsap.fromTo(sectionRef.current, from, {
        ...to,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }
  }, [from, to, trigger]); // Add trigger as a dependency

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
};

export default MotionSection;
