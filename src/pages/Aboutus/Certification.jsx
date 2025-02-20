import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { aboutContent } from "@/data";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import Heading from "@/components/Heading";
import ServiceCard from "@/components/ServiceCard";

const Certification = () => {
  const certificates = aboutContent[4]?.certificates || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRef = useRef(null);
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex =
        prevIndex === 0 ? certificates.length - 1 : prevIndex - 1;
      setActiveIndex(newIndex); // Update activeIndex
      return newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex =
        prevIndex === certificates.length - 1 ? 0 : prevIndex + 1;
      setActiveIndex(newIndex); // Update activeIndex
      return newIndex;
    });
  };

  const handleServiceClick = (index) => {
    setActiveIndex(index);
    setCurrentIndex(index);
  };

  const getVisibleCertificates = () => {
    if (currentIndex + 3 > certificates.length) {
      return [
        ...certificates.slice(currentIndex),
        ...certificates.slice(0, (currentIndex + 3) % certificates.length),
      ];
    }
    return certificates.slice(currentIndex, currentIndex + 3);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div
      ref={containerRef}
      id="certificate"
      className="flex items-center md:justify-end justify-center md:py-16 py-10 px-6 m-auto 2xl:max-w-[120rem] w-full"
    >
      <div className="flex flex-col md:flex-row max-md:gap-3">
        <div className="relative max-w-7xl mx-auto flex flex-col gap-4 px-6">
          <Heading
            undertext="Certifications"
            className="flex items-center justify-end"
          />
          <p className="text-end w-96 text-4xl font-semibold leading-snug">
            Our Achievements & Recognitions
          </p>
          <div>
            <ul className="flex flex-col items-end">
              {certificates.map((cert, index) => (
                <li
                  key={cert.id}
                  className={`relative justify-end inline-flex items-center border-transparent cursor-pointer rounded-full w-full group overflow-hidden py-3 transition-all duration-500 ease-in-out hover:border border hover:border-upforangecrayola ${
                    activeIndex === index ? "border-upforangecrayola" : ""
                  }`}
                  onClick={() => handleServiceClick(index)}
                >
                  <span
                    className={`text-xl text-end font-semibold transition-all duration-500 ease-in-out group-hover:-translate-x-10 mr-6 group-hover:text-upforangecrayola ${
                      activeIndex === index
                        ? "text-upforangecrayola -translate-x-10"
                        : "text-upfgray"
                    }`}
                  >
                    {cert.title}
                  </span>
                  <IoIosArrowBack
                    className={`transition-all absolute duration-500 ease-in-out group-hover:translate-x-10 ${
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 border-l-4 overflow-hidden">
          {getVisibleCertificates().map((cert) => (
            <ServiceCard
              key={cert.id}
              tag={cert.tag}
              title={cert.title}
              description={cert.description}
              icon={cert.icon}
              link={cert.link}
              imageSrc={cert.image.src}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certification;
