import React from "react";
import { FaClock, FaLocationDot } from "react-icons/fa6";

const Newcard = ({ event }) => {
  return (
    <div className="flex flex-col sm:flex-row w-full max-w-4xl bg-transparent shadow-lg rounded-lg group transition-transform transform hover:scale-105 overflow-hidden">
      {/* Image Section */}
      <div className="flex relative">
        <div className="w-full h-64 md:w-auto md:h-64 sm:h-48 px-6">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-48 md:h-full object-cover rounded-r-full"
          />
        </div>
        <div className="absolute z-10 md:top-[40%] top-[25%] md:-right-5 right-0 bg-[#FD8343] text-white text-center w-16 h-16 sm:w-10 sm:h-10 md:w-14 md:h-14 flex flex-col items-center justify-center rounded-full shadow-lg">
          <span className="text-lg sm:text-base font-bold">{event.date}</span>
          <span className="text-sm sm:text-xs font-bold">{event.month}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        <ul className="font-semibold flex flex-wrap space-x-4 text-sm text-[#21B740]">
          <li className="flex items-center gap-1">
            <FaClock className="mr-1" /> {event.time}
          </li>
          <li className="flex items-center gap-1">
            <FaLocationDot className="mr-1" /> {event.location}
          </li>
        </ul>

        <h3 className="text-lg font-semibold mt-2 hover:text-[#FD8343] transition-all">
          <a href={event.link}>{event.title}</a>
        </h3>

        <p className="text-sm mt-1">{event.description}</p>

        <div className="mt-3 font-medium relative">
          <a
            href={event.detailsLink}
            className="relative inline-block transition-all duration-500 group"
          >
            <span className="absolute left-0 top-[-4px] w-4 h-0.5 bg-[#FD8343] transition-all duration-500 ease-in-out group-hover:w-full"></span>
            <span className="hover:text-orange-500">MORE DETAILS</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newcard;
