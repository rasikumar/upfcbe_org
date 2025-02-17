import React, { useState } from "react";
import { servicemenulist } from "@/data";
import { motion, AnimatePresence } from "framer-motion";
import { FaHandPointRight } from "react-icons/fa";

const Servicemenu = () => {
  const [selectedService, setSelectedService] = useState(servicemenulist[0]);

  return (
    <div className="w-full flex flex-col py-12 dark:bg-gray-800">
      <div className="w-full md:w-3/5 mx-auto flex flex-col max-sm:px-10 max-md:px-5 px-0 ">
        {/* Service Titles */}
        <div className="w-full flex flex-col md:flex-row   border border-[#FD8348] rounded-lg bg-transparent">
          {servicemenulist.map((service) => (
            <motion.button
              key={service.id}
              onClick={() => setSelectedService(service)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                backgroundColor: selectedService.id === service.id ? service.color : "transparent",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={`w-full md:flex-1 py-4 px-6 text-lg font-semibold text-center transition-all duration-300 border-b md:border-b-0 md:border-r border-gray-300 
                ${
                  selectedService.id === service.id
                    ? "text-white"
                    : "bg-transparent text-black"
                }
                hover:bg-gray-200 first:rounded-t-lg md:first:rounded-l-lg last:border-b-0 md:last:border-r-0 md:last:rounded-r-lg last:rounded-b-lg`}
            >
              {service.title}
            </motion.button>
          ))}
        </div>

        {/* Display Selected Service Content */}
        <AnimatePresence mode="wait">
          {selectedService && (
            <motion.div
              key={selectedService.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-full flex flex-col md:flex-row p-6 mt-6 border rounded-lg bg-white dark:bg-gray-900 shadow-lg"
            >
              {/* Left Side: Image - Scales to match text height */}
              <motion.div
                className="w-full md:w-1/2 h-auto flex items-stretch"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </motion.div>

              {/* Right Side: Content - Expands to occupy empty space */}
              <motion.div
                className="flex-1 flex flex-col justify-center mt-6 md:mt-0 md:pl-6"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <motion.h2
                  className="text-2xl font-bold text-gray-800 dark:text-white mb-4"
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {selectedService.title}
                </motion.h2>
                <motion.p
                  className="text-gray-800 dark:text-white text-lg mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                  {selectedService.description}
                </motion.p>

                {/* Benefits Section */}
                {selectedService.benefits && selectedService.benefits.length > 0 && (
                  <motion.div
                    className="flex flex-col space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                  >
                    {selectedService.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        {/* Icon */}
                        <FaHandPointRight className="w-6 h-6 text-[#21B740] mt-1" />

                        {/* Heading and Description */}
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
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Servicemenu;
