import Heading from "@/components/Heading";
import { aboutContent } from "@/data";

const Guruji = () => {
  const { title, description, image, imageAlt, heading } = aboutContent[3];
  return (
    <div className="max-w-[100rem] items-center justify-center flex flex-col md:flex-row m-auto px-4 2xl:px-0 mb-5 md:gap-24 gap-2 md:py-24">
      <div className="w-full md:w-96 mb-4 md:mb-0">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-auto rounded-3xl transform scale-x-[-1]"
        />
      </div>
      <div className="flex flex-col justify-start md:w-[60rem] md:gap-6 gap-2">
        <Heading undertext={title} />
        <h3 className="2xl:text-5xl text-4xl font-semibold">{heading}</h3>
        <p className="text-upfblack 2xl:text-lg text-base mt-4 md:mt-0">
          {description.split(" ").map((word, index) =>
            word.includes("new") ? (
              <span key={index} className="block my-3"></span> // Adds vertical space
            ) : (
              word + " "
            )
          )}
        </p>
      </div>
    </div>
  );
};

export default Guruji;
