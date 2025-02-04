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
      const t1 = gsap.timeline();
      t1.from(comp.current, {
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
      className="bg-upforangecrayola h-10 m-auto rounded-b-xl flex items-center justify-between px-4 max-w-[100rem]"
    >
      <div className="flex items-center gap-2">
        <headerleft.icon />
        {/* <Icon  {headerleft.icon}/> */}
        <p className="text-white font-medium 2xl:text-sm text-xs">
          {headerleft.title}
        </p>
        <Link
          to={headerleft.link}
          className="hover:underline transition-all ease-in-out font-semibold 2xl:text-sm text-xs"
        >
          {headerleft.text}
        </Link>
      </div>
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-6 font-medium ">
          {headerright.map((right) => (
            <span
              className="flex items-center gap-2 2xl:text-lg text-sm"
              key={right.id}
            >
              <right.icon />
              {right.content}
            </span>
          ))}
        </div>
        <div className="flex">
          {icons.map((Icon, index) => (
            <Icon className="text-white mr-3" key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
