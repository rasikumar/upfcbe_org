import { HeroCard } from "../../components/HeroCard";
import { heroContent } from "../../data";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { HeroCardOne } from "../../components/HeroCardOne";
import { FaHandsHelping, FaSmile } from "react-icons/fa";
import { hero_banner } from "../../assets";

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
    <div className="h-screen relative max-w-[100rem] m-auto" ref={comp}>
      <div className="w-96 h-40 absolute bg-upfteagreen rounded-full blur-[100px] flex items-center justify-center left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2" />
      <div className="flex items-center justify-center">
        {heroContent.map((content) => (
          <div
            key={content.id}
            className="flex flex-col items-center justify-center h-96 gap-8"
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
            <div className="flex gap-4"></div>
          </div>
        ))}
      </div>
      <div className="flex justify-between -my-56">
        <div className="relative">
          <div>
            <HeroCard
              title="hei"
              description="sdfxcgkmlgfsvghjcdksndlmsd"
              buttonText="Heloc"
              image={hero_banner}
            />
          </div>
          <div className="relative">
            <div className="2xl:w-64 w-52 h-32 bg-zinc-700 absolute top-11 rounded-3xl">
              <div className="flex items-center gap-4 w-full m-auto h-full p-6">
                <FaSmile className="2xl:text-7xl text-5xl" />
                <h1 className="2xl:text-2xl text-sm font-bold text-white text-center">
                  Let Them Be heard
                </h1>
              </div>
            </div>
          </div>
          <div className="absolute top-44 2xl:left-72 left-56">
            <HeroCard />
          </div>
        </div>
        <div className="relative rounded-3xl">
          <div className="2xl:w-[36rem] w-64 2xl:h-52 h-40 bg-red-300 -bottom-44 2xl:-left-72 -left-32 absolute rounded-3xl overflow-hidden">
            <img
              src={hero_banner}
              alt="Guruji_with_childrens"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="relative">
          <div>
            <HeroCardOne />
          </div>
          <div className="relative">
            <div className="2xl:w-64 w-52 h-32 bg-zinc-700 absolute top-11 rounded-3xl">
              <div className="flex items-center gap-4 w-full m-auto h-full 2xl:p-6 p-3">
                <FaHandsHelping className="2xl:text-7xl text-5xl" />
                <h1 className="2xl:text-2xl text-sm font-bold text-white text-center">
                  Your Home For Help
                </h1>
              </div>
            </div>
          </div>
          <div className="absolute top-44 2xl:right-72 right-56">
            <HeroCardOne />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
