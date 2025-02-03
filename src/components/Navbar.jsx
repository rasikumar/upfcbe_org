import { Link } from "react-router";
import { main_logo } from "../assets";
import { navigations } from "../data";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Navbar = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline({ paused: true });
      t1.from(comp.current, {
        yPercent: "-100",
        duration: 1,
        ease: "power4.inOut",
      });
      t1.play();

      return () => t1.reverse(); // Revert the timeline when unmounted
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <nav className="sticky top-0 z-50">
      <div className="mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-20 bg-white">
        <Link to="/" className="text-center md:text-left">
          <img src={main_logo} width={100} height={100} />
        </Link>
        <div className="flex gap-4" ref={comp}>
          {navigations.map((navigation) => (
            <a
              href={navigation.url}
              key={navigation.title}
              className={`2xl:text-lg text-sm font-medium ${
                navigation.active ? "text-upfmelon" : "text-upforangecrayola"
              } hover:text-upfmelon transition duration-300 ease-in-out`}
            >
              {navigation.title}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
