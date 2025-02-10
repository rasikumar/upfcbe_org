import { timeline_bg } from "@/assets";
import { aboutContent } from "@/data";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaCalendar } from "react-icons/fa6";

const TimeLine = () => {
  const { sets } = aboutContent[1];
  const [selectedYear, setSelectedYear] = useState(sets[0].year);

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

  return (
    <div className="flex flex-col m-auto relative ">
      <img
        src={timeline_bg}
        alt="bakcgroundTimelineImage"
        className="absolute w-full h-[23.5rem] bottom-0 pl-36"
      />
      <div className="flex gap-4 m-auto absolute right-1/3">
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
      {sets.map(
        (set) =>
          set.year === selectedYear && (
            <div
              key={set.title}
              className="flex gap-36 items-center  relative pl-36"
            >
              <div className="relative">
                <img src={set.img} alt="#" className="rounded-3xl relative" />
                <div className="absolute flex rotate-90 -right-[19%] top-[45%] gap-x-4">
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
              </div>
              <div className="flex flex-col gap-5 min-w-[40rem] max-w-[40rem]">
                {/* <div className="w-full h-52 top-0 left-0 bg-black absolute" /> */}
                <h2 className="text-2xl font-semibold">{set.title}</h2>
                <p className="text-upfblack text-lg">{set.description}</p>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default TimeLine;
