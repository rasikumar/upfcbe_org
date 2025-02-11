import { timeline_bg } from "@/assets";
import { aboutContent } from "@/data";
import { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight, FaCalendar } from "react-icons/fa6";
import { gsap } from "gsap";

const TimeLine = () => {
  const { sets } = aboutContent[1];
  const [selectedYear, setSelectedYear] = useState(sets[0].year);
  const imageRef = useRef(null);

  const handlePrevious = () => {
    const currentIndex = sets.findIndex((set) => set.year === selectedYear);
    const previousIndex = (currentIndex - 1 + sets.length) % sets.length;
    setSelectedYear(sets[previousIndex].year);
  };

  const handleNext = () => {
    const currentIndex = sets.findIndex((set) => set.year === selectedYear);
    const nextIndex = (currentIndex + 1) % sets.length;
    setSelectedYear(sets[nextIndex].year);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change state every 3 seconds
    return () => clearInterval(interval);
  }, [selectedYear]);

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current.querySelector("img"),
        { x: -200, opacity: 0, scale: 0.9 },
        { x: 0, opacity: 1, scale: 1, duration: 1 }
      );
    }
  }, [selectedYear]);

  return (
    <div className="flex flex-col m-auto relative gap-4">
      <img
        src={timeline_bg}
        alt="bakcgroundTimelineImage"
        className="absolute w-full 2xl:h-[23.5rem] h-[21.5rem] bottom-0 pl-36 hidden md:flex"
      />

      {sets.map(
        (set) =>
          set.year === selectedYear && (
            <div
              key={selectedYear} // Change key to selectedYear to trigger animation
              className="flex flex-col md:flex-row gap-6 md:gap-36 items-center relative md:pl-36"
            >
              <div className="relative" ref={imageRef}>
                <img
                  src={set.img}
                  alt="#"
                  className="rounded-3xl relative w-full md:w-auto"
                />
              </div>
              <div className="absolute rotate-90 xl:right-[57%] 2xl:right-[70.5%] top-[45%] gap-x-4 hidden md:flex">
                <button
                  onClick={handlePrevious}
                  className="text-sm font-medium p-5 rounded-full bg-black"
                >
                  <FaArrowLeft className="text-xl text-white" />
                </button>
                <button
                  onClick={handleNext}
                  className="text-sm font-medium p-5 bg-black rounded-full"
                >
                  <FaArrowRight className="text-xl text-white" />
                </button>
              </div>
              <div className="flex flex-col gap-5 min-w-full md:min-w-[40rem] max-w-full md:max-w-[40rem] px-4">
                <h2 className="text-2xl font-semibold">{set.title}</h2>
                <p className="text-upfblack text-lg">{set.description}</p>
              </div>
            </div>
          )
      )}
      <div className="flex max-md:flex-col max-md:w-full gap-4 m-auto md:absolute 2xl:right-1/3 xl:right-0 2xl:px-0 max-md:bottom-0 md:px-16 px-4">
        {sets.map((set) => (
          <button
            key={set.year}
            onClick={() => setSelectedYear(set.year)}
            className={`text-xl font-medium inline-flex items-center px-8 py-4 gap-2 rounded-xl shadow-upfshadow hover:bg-upforangecrayola transition-all hover:text-white ease-in-out duration-200 z-20 ${
              selectedYear === set.year
                ? "bg-upforangecrayola text-white"
                : "text-upfblack bg-white"
            }`}
          >
            <FaCalendar />
            {set.year}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimeLine;
