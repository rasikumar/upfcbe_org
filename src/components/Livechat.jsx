import React from "react";
import { live } from "@/data";
import { FaComments, FaHandshake } from "react-icons/fa6";
import { FaQuestionCircle } from "react-icons/fa";

const Livechat = () => {
  const icons = [FaComments, FaHandshake, FaQuestionCircle];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {live.map((card, index) => {
          const IconComponent = icons[index % icons.length]; // Ensuring cyclic icon selection

          return (
            <div
              key={card.id} // Ensure each key is unique
              className="relative group p-8 bg-transparent rounded-xl shadow-md transition-transform duration-300 hover:scale-105 overflow-hidden bg-white"
            >
              {/* Background Layer */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transform translate-x-[-100%] scale-90 
        group-hover:translate-x-0 group-hover:scale-100 transition-all duration-700 ease-out"
                style={{ backgroundImage: `url(${card.hoverbg})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              </div>

              {/* Icon Box */}
              <div className="relative z-10 flex flex-col items-center">
                <IconComponent className="text-5xl text-[#21B740] group-hover:text-upforangecrayola transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="relative z-10 text-center mt-6">
                <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-upfgray group-hover:text-white transition-colors duration-300 mt-2">
                  {card.description}
                </p>

                {/* Button with Border & Background Animation */}
                <button className="relative inline-block mt-4 px-6 py-2 text-sm font-semibold text-black border-2 border-upforangecrayola rounded-full overflow-hidden transition-colors duration-500 ease-out group hover:bg-upforangecrayola">
                  <a
                    href={card.link}
                    className="relative flex items-center justify-center w-full h-full"
                  >
                    {/* Background Layer (For Left-to-Right Transition) */}
                    <span className="absolute inset-0 w-0 group-hover:w-full transition-all duration-500 ease-out"></span>

                    {/* Button Text (Ensuring It Stays Above) */}
                    <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                      {card.buttonText}
                    </span>
                  </a>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Livechat;
