import { dummy_image, gurujiwalk, heart, rotate_text } from "@/assets";
import Heading from "@/components/Heading";
import { aboutContent, founder } from "@/data";
import { FaHandHoldingHeart } from "react-icons/fa6";

const Welcome = () => {
  const { heading, title, content } = aboutContent[0];
  const { name, position, socialMedia, image } = founder[0];
  const { link, icon } = socialMedia[0];
  //   console.log(socialMedia);
  return (
    <div className="flex max-md:flex-col max-w-[100rem] m-auto md:py-24 py-10 justify-between md:gap-28 gap-14 md:px-10 px-4">
      <div className="md:w-1/2  flex flex-col gap-10">
        <div className="flex flex-col md:gap-8 gap-4">
          <Heading undertext={heading} />
          <h2 className="2xl:text-5xl text-4xl font-semibold">{title}</h2>
          <p className="text-upfblack 2xl:text-lg text-base">{content}</p>
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
                />
              </a>
            </div>
            <div className="flex flex-col">
              <p className="font-Caveat text-upfteagreent mb-1 text-xl">
                {position}
              </p>
              <h2 className="font-semibold text-xl">{name}</h2>
            </div>
          </div>
          <div className="h-full w-[.3px] bg-upfgray" />
          <div className="flex gap-4 items-center">
            {socialMedia.map((icon, index) => (
              <div key={index}>
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
          src={dummy_image}
          alt="dummy_image"
          className="z-10 rounded-3xl md:mb-24 2xl:h-full md:h-[21rem]"
        />
        <img
          src={heart}
          alt="Heart_image"
          className="absolute -top-5 hidden md:block"
        />
        <img
          src={dummy_image}
          alt="dummy_image"
          className="rounded-3xl md:mt-24 2xl:h-full md:h-[21rem]"
        />
        <img
          src={rotate_text}
          alt="rotate_text"
          className="absolute z-20 2xl:left-[45%] xl:left-[40%] md:w-28 2xl:w-40 md:top-[45%] left-[30%] top-[40%] transform -translate-x-1/2 -translate-y-1/2 animate-spin-custom"
        />
        <div className="md:absolute bottom-4 left-20 bg-upfwhite py-4 pl-6 pr-14 rounded-full shadow-upfshadow">
          <h2 className="inline-flex items-center justify-center gap-3 text-lg font-bold">
            <span className="text-2xl">
              <FaHandHoldingHeart className="text-upforangecrayola" />
            </span>
            25+ Years of Experience
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
