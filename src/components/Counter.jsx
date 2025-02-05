import { useEffect, useRef } from "react";
import gsap from "gsap";

const Counter = ({ target, duration = 2 }) => {
  const countRef = useRef(null);

  useEffect(() => {
    // GSAP counter animation
    gsap.fromTo(
      countRef.current,
      { innerHTML: 0 },
      {
        innerHTML: target,
        duration: duration,
        ease: "power1.out",
        snap: { innerHTML: 1 },
        onUpdate: () => {
          countRef.current.innerHTML = Math.ceil(countRef.current.innerHTML);
        },
      }
    );
  }, [target, duration]);

  return (
    <span ref={countRef} className="text-3xl font-semibold">
      0
    </span>
  );
};

export default Counter;
