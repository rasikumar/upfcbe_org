import React, { useState, useEffect, useRef } from "react";
import { servicemenulist } from "@/data";
import gsap from "gsap";
import { FaHandPointRight } from "react-icons/fa";
import { medicalservice } from "@/assets";

const Servicemenu = () => {
  const [selectedService, setSelectedService] = useState(servicemenulist[0]);
  const contentRef = useRef(null);
  const benefitsRef = useRef(null); // Reference for the benefits section

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" }
      );
    }

    // Animation for the benefits
    if (benefitsRef.current) {
      gsap.fromTo(
        benefitsRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2, // This will stagger the animation
          ease: "power3.out",
        }
      );
    }
  }, [selectedService]);

  return (
    <div className="w-full flex flex-col py-16 px-6 dark:bg-gray-800 space-y-10">
      <div className="w-full md:w-3/5 mx-auto flex flex-col max-sm:px-10 max-md:px-5 px-0 space-y-8">
        <div className="w-full flex flex-col md:flex-row border border-[#FD8348] rounded-lg bg-transparent">
          {servicemenulist.map((service) => (
            <button
              key={service.id}
              onClick={() => setSelectedService(service)}
              className={`w-full md:flex-1 py-4 px-6 text-lg font-semibold text-center transition-all duration-300 border-b md:border-b-0 md:border-r border-gray-300 
                ${selectedService.id === service.id ? "text-white bg-[#FD8348]" : "bg-transparent text-black"}`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {selectedService && (
          <div className="w-full flex flex-col p-8 mt-8 space-y-10">
            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-10">
              <div ref={contentRef} className="w-full flex flex-col justify-center space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold dark:text-white">
                  {selectedService.title}
                </h2>
                <p className=" text-base md:text-lg w-full">
                  {selectedService.description}
                </p>
              </div>
            </div>

            {selectedService.benefits && selectedService.benefits.length > 0 && (
              <div
                className="w-full flex flex-col space-y-12 mt-8  bg-transparent"
              >
                {selectedService.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className={`flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-10 
                      ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    <div className="md:w-1/2 px-5 flex flex-col space-y-2">
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white flex items-center">
                        <FaHandPointRight className="w-6 h-6 text-[#21B740] mr-2" />
                        {benefit.title}
                      </h3>
                      <p className="text-base w-full">
                        {benefit.description}
                      </p>
                    </div>
                    <div className="md:w-1/2 flex items-center justify-center">
                      <img
                        src={benefit.image}
                        alt={benefit.title}
                        className="w-full h-auto object-cover rounded-lg"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Donation Section */}
      <div className="relative w-full h-full overflow-auto p-6 mt-10 rounded-xl">
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-top"
          style={{ backgroundImage: `url(${medicalservice})` }}
        ></div>
        <div className="absolute inset-0 bg-[#21B740] opacity-50"></div> {/* Green overlay */}
        <div className="relative bg-opacity-75 rounded-xl max-w-full mx-auto flex flex-col md:flex-row items-center justify-between p-10">
          <div className="w-full md:w-1/2 flex flex-col items-start text-left text-white p-4">
            <h2 className="text-2xl md:text-3xl font-semibold">
              {selectedService.donationText}
            </h2>
          </div>

          {/* Button Section */}
          <div className="w-full md:w-1/2 flex justify-start md:justify-end p-4">
            <button className="bg-upforangecrayola hover:bg-upforangecrayola/90 hover:scale-105 transition-all p-4 rounded-md  md:w-w-1/4 text-x font-semibold transform duration-200 ease-in-out text-white">
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicemenu;
