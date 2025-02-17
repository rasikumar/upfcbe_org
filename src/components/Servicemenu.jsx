import React, { useState, useEffect, useRef } from "react";
import { servicemenulist } from "@/data";
import gsap from "gsap";
import { FaHandPointRight } from "react-icons/fa";

const Servicemenu = () => {
  const [selectedService, setSelectedService] = useState(servicemenulist[0]);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (contentRef.current && imageRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" }
      );
      
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" }
      );
    }
  }, [selectedService]);

  return (
    <div className="w-full flex flex-col py-12 dark:bg-gray-800">
      <div className="w-full md:w-3/5 mx-auto flex flex-col max-sm:px-10 max-md:px-5 px-0 ">
        <div className="w-full flex flex-col md:flex-row border border-[#FD8348] rounded-lg bg-transparent">
          {servicemenulist.map((service) => (
            <button
              key={service.id}
              onClick={() => setSelectedService(service)}
              className={`w-full md:flex-1 py-4 px-6 text-lg font-semibold text-center transition-all duration-300 border-b md:border-b-0 md:border-r border-gray-300 
                ${
                  selectedService.id === service.id
                    ? "text-white bg-[" + service.color + "]"
                    : "bg-transparent text-black"
                }
                hover:bg-gray-200 first:rounded-t-lg md:first:rounded-l-lg last:border-b-0 md:last:border-r-0 md:last:rounded-r-lg last:rounded-b-lg`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {selectedService && (
          <div
            className="w-full flex flex-col md:flex-row p-6 mt-6 border rounded-lg bg-white dark:bg-gray-900 shadow-lg"
          >
            <div ref={imageRef} className="w-full md:w-1/2 h-auto flex items-stretch">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            <div ref={contentRef} className="flex-1 flex flex-col justify-center mt-6 md:mt-0 md:pl-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                {selectedService.title}
              </h2>
              <p className="text-gray-800 dark:text-white text-lg mb-4">
                {selectedService.description}
              </p>

              {selectedService.benefits && selectedService.benefits.length > 0 && (
                <div className="flex flex-col space-y-4">
                  {selectedService.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <FaHandPointRight className="w-6 h-6 text-[#21B740] mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Servicemenu;