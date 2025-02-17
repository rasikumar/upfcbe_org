import { PHOTOS } from "@/utils/api";
import React from "react";
import { FaClock } from "react-icons/fa6";
import { Link } from "react-router";

const formatDate = (created_at) => {
  const dateObj = new Date(created_at);
  const day = dateObj.getDate();
  const month = dateObj.toLocaleString("en-US", { month: "short" });
  const time = dateObj.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return { day, month, time };
};

const Newcard = ({ id, image, title, created_at, description }) => {
  const { day, month, time } = formatDate(created_at);

  return (
    <Link
      to={`./news/${id}`}
      className="flex flex-col sm:flex-row w-full max-w-4xl bg-transparent shadow-lg rounded-lg group transition-transform transform hover:scale-105 overflow-hidden"
    >
      {/* Image Section */}
      <div className="flex relative md:w-[20%] w-[40%]">
        <div className="w-full h-64 md:w-auto md:h-64 sm:h-48">
          <img
            src={`${PHOTOS}${image}`}
            alt={title}
            className="w-full h-full md:h-full object-cover rounded-r-full"
          />
        </div>
        <div className="absolute z-10 md:top-[40%] top-[40%] md:-right-5 -right-6 bg-[#FD8343] text-white text-center w-16 h-16 sm:w-10 sm:h-10 md:w-14 md:h-14 flex flex-col items-center justify-center rounded-full shadow-lg">
          <span className="text-lg sm:text-base font-bold">{day}</span>
          <span className="text-sm sm:text-xs font-bold">{month}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 p-6 flex flex-col justify-between w-[80%]">
        <ul className="font-semibold flex flex-wrap space-x-4 text-sm text-[#21B740]">
          <li className="flex items-center gap-1">
            <FaClock className="mr-1" /> {time}
          </li>
        </ul>

        <h3 className="text-lg font-semibold mt-2 hover:text-[#FD8343] transition-all">
          {title}
        </h3>

        <div
          className="text-sm mt-1"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />

        <div className="mt-3 font-medium relative">
          <span className="absolute left-0 top-[-4px] w-4 h-0.5 bg-[#FD8343] transition-all duration-500 ease-in-out group-hover:w-full"></span>
          <span className="hover:text-orange-500">MORE DETAILS</span>
        </div>
      </div>
    </Link>
  );
};

export default Newcard;
