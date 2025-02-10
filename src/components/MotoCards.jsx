import { MdWork } from "react-icons/md";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const MotoCards = () => {
  const cardRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const icon = iconRef.current;

    const tl = gsap.timeline({ paused: true });

    tl.to(icon, {
      scale: 1.2, // Slight scale-up effect
      backgroundColor: "#000",
      color: "#fff",
      duration: 0.3,
      ease: "power2.out",
    });

    card.addEventListener("mouseenter", () => tl.play());
    card.addEventListener("mouseleave", () => tl.reverse());

    return () => {
      card.removeEventListener("mouseenter", () => tl.play());
      card.removeEventListener("mouseleave", () => tl.reverse());
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative p-10 border-r border-b border-cyan-800 flex flex-col items-center justify-center h-96 gap-5 overflow-hidden"
    >
      {/* Background Letter */}
      <span className="font-Caveat text-8xl absolute font-extrabold text-upfgray/20">
        M
      </span>

      {/* Animated Icon */}
      <span
        ref={iconRef}
        className="bg-white p-3 rounded-full transition-all duration-300 ease-in-out"
      >
        <MdWork className="text-4xl" />
      </span>

      {/* Heading */}
      <h2 className="text-2xl font-semibold">Our Mission</h2>

      {/* Description (always visible) */}
      <p className="text-center text-lg text-upfblack">
        Beguiled and demoralized by the charms of pleasure of the moment blinded
        that they cannot foresee.
      </p>
    </div>
  );
};

export default MotoCards;
