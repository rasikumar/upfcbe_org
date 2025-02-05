import { Link } from "react-router";
import { headerSection, icons } from "../data";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Header = () => {
  const headerleft = headerSection[0];
  const headerright = headerSection[1].rightSide;

  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(comp.current, {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        transformOrigin: "right center",
        y: 40,
      });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={comp}
      id="text-entry"
      className="bg-upforangecrayola h-auto py-2 px-4 mx-auto rounded-b-xl flex max-md:flex-col items-center justify-between 2xl:max-w-[100rem] max-w-[75rem] gap-3"
    >
      {/* Left Side */}
      <div className="flex items-center gap-2">
        <headerleft.icon className="w-6 h-6 md:w-8 md:h-8" />
        <p className="text-white font-medium text-xs md:text-sm">
          {headerleft.title}
        </p>
        <Link
          to={headerleft.link}
          className="hover:underline transition-all ease-in-out font-semibold text-xs md:text-sm"
        >
          {headerleft.text}
        </Link>
      </div>

      {/* Right Side */}
      <div className="flex flex-wrap items-center gap-4 md:gap-6 lg:gap-10">
        <div className="flex flex-wrap items-center gap-2 md:gap-4 font-medium">
          {headerright.map((right) => (
            <span
              className="flex gap-2 text-white font-medium text-xs md:text-sm"
              key={right.id}
            >
              <right.icon className="w-4 h-4 md:w-6 md:h-6" />
              {right.content}
            </span>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex gap-2 md:gap-3">
          {icons.map((icon, index) => (
            <a
              href={icon.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <icon.component
                className="w-5 h-5 md:w-7 md:h-7"
                style={{ color: icon.color }}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
