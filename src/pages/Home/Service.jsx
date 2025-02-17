import { heroContent } from "@/data";
import ServiceCard from "../../components/ServiceCard";
import { bg } from "@/assets";
import { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import Heading from "@/components/Heading";

const Service = () => {
  const serviceContents = heroContent[2]?.boxes || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex =
        prevIndex === 0 ? serviceContents.length - 1 : prevIndex - 1;
      setActiveIndex(newIndex); // Update activeIndex
      return newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex =
        prevIndex === serviceContents.length - 1 ? 0 : prevIndex + 1;
      setActiveIndex(newIndex); // Update activeIndex
      return newIndex;
    });
  };

  const handleServiceClick = (index) => {
    setActiveIndex(index);
    setCurrentIndex(index);
  };

  const getVisibleServices = () => {
    if (currentIndex + 3 > serviceContents.length) {
      return [
        ...serviceContents.slice(currentIndex),
        ...serviceContents.slice(
          0,
          (currentIndex + 3) % serviceContents.length
        ),
      ];
    }
    return serviceContents.slice(currentIndex, currentIndex + 3);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div
      className="flex items-center md:justify-end justify-center md:py-16 py-10 px-6 m-auto 2xl:max-w-[120rem] w-full"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Service Cards Grid */}
      <div className="flex flex-col md:flex-row max-md:gap-3">
        <div className="relative max-w-7xl mx-auto flex flex-col gap-4 px-6">
          <Heading
            undertext={heroContent[2]?.title}
            className="flex items-center justify-end"
          />
          <p className="text-end w-80 text-4xl font-semibold leading-snug">
            {heroContent[2]?.description}
          </p>
          <div>
            <ul className="flex flex-col items-end">
              {[
                "Social Service",
                "Educational Service",
                "Natural Service",
                "Spiritual Service",
                "Medical Service",
              ].map((serviceName, index) => (
                <li
                  key={index}
                  className={`relative justify-end inline-flex items-center border-transparent cursor-pointer rounded-full w-full group overflow-hidden py-3 transition-all duration-500 ease-in-out hover:border border hover:border-upforangecrayola ${
                    activeIndex === index ? "border-upforangecrayola" : ""
                  }`}
                  onClick={() => handleServiceClick(index)}
                >
                  <span
                    className={`text-xl text-end  w-full font-semibold transition-all duration-500 ease-in-out group-hover:-translate-x-10 mr-6 group-hover:text-upforangecrayola ${
                      activeIndex === index
                        ? "text-upforangecrayola -translate-x-10"
                        : "text-upfgray"
                    }`}
                  >
                    {serviceName}
                  </span>{" "}
                  <IoIosArrowBack
                    className={`transition-all mt-1 absolute duration-500 ease-in-out group-hover:translate-x-10 ${
                      activeIndex === index ? "-translate-x-10" : ""
                    }`}
                  />
                  <div className="inset-0 border opacity-0 group-hover:opacity-20 transition-all duration-500 ease-in-out"></div>
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-upforangecrayola group-hover:w-full transition-all duration-500 ease-in-out"></div>
                </li>
              ))}
              <div className="flex gap-4 relative">
                <div className="absolute flex right-0 gap-4 mt-4">
                  <button
                    className="text-black p-4 rounded-full border-upfgray border-2 hover:border-upforangecrayola hover:bg-upforangecrayola hover:text-white transition-all duration-500 ease-in-out"
                    onClick={handlePrev}
                  >
                    <FaArrowLeft className="text-xl" />
                  </button>
                  <button
                    className="text-black p-4 rounded-full border-upfgray border-2 hover:border-upforangecrayola hover:bg-upforangecrayola hover:text-white transition-all duration-500 ease-in-out"
                    onClick={handleNext}
                  >
                    <FaArrowRight className="text-xl" />
                  </button>
                </div>
              </div>
            </ul>
          </div>
        </div>

        {/* Service Cards Grid with Defined Height */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 border-l-4 overflow-hidden">
          {getVisibleServices().map((serviceContent, index) => (
            <div key={serviceContent.id}>
              <ServiceCard
                tag={serviceContent.tag}
                title={serviceContent.title}
                description={serviceContent.description}
                icon={serviceContent.icon}
                link={serviceContent.link}
                imageSrc={serviceContent.img}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
