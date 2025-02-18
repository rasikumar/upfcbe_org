import React from "react";
import { contact_image } from "@/assets";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope, FaTextHeight, FaUser } from "react-icons/fa6";
import { MdOutlineSubject } from "react-icons/md";
import Heading from "./Heading";

const Contactcard = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!"); // Replace with actual form handling logic
  };

  return (
    <div className="md:py-12 px-6 font-['Open_Sans',_'Noto_Sans'] text-[#333] max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-end relative">
      {/* Left Contact Info */}
      <div className="flex flex-col justify-end h-full mb-8 sm:mb-0">
        <div className="mb-5 flex flex-col gap-2">
          {/* Heading */}
          <Heading undertext="Connecting Always" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2">
            Hear by our Heart
          </h1>
          <p className="text-sm sm:text-base text-upfgray leading-relaxed">
            Our team is available to help with your enquiries on email & phone,
            or visit our place.
          </p>
        </div>
        {/* Contact Details Card */}
        <div className="bg-white w-full max-w-auto p-4 sm:p-6 md:p-8  rounded-lg border flex">
          <div className="space-y-4 sm:space-y-6 w-full">
            {/* Quick Contact */}
            <div className="flex flex-col space-y-2 border-b pb-4">
              <h3 className="text-base sm:text-lg font-bold text-black">
                Quick Contact
              </h3>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-upforangecrayola shrink-0">
                  <FaPhoneAlt className="text-white text-lg sm:text-xl" />
                </div>
                <div>
                  <p className="text-sm sm:text-base text-gray-700">
                    Main Office <br />
                    <a href="tel:#" className="text-upforangecrayola">
                      (+233) 456-789-01
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* Email Address */}
            <div className="flex flex-col space-y-2 border-b pb-4">
              <h3 className="text-base sm:text-lg font-bold text-black">
                Email Address
              </h3>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-upforangecrayola shrink-0">
                  <FaEnvelope className="text-white text-lg sm:text-xl" />
                </div>
                <div>
                  <p className="text-sm sm:text-base text-gray-700">
                    Mail to <br />
                    <a
                      href="mailto:info@example.com"
                      className="text-upforangecrayola"
                    >
                      info@example.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* Mailing Address */}
            <div className="flex flex-col space-y-2">
              <h3 className="text-base sm:text-lg font-bold text-black">
                Mailing Address
              </h3>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-upforangecrayola shrink-0">
                  <FaMapMarkerAlt className="text-white text-lg sm:text-xl" />
                </div>
                <div>
                  <p className="text-sm sm:text-base text-gray-700">
                    54 Berrick Street, Boston, MA 02115.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Center Image */}
      <div className="w-full h-full relative flex justify-center items-end overflow-visible px-4 sm:px-6 md:px-8 sm:gap-y-0 gap-y-6 mt-20">
        <div className="w-full flex justify-center h-40 sm:h-64 md:h-96 max-w-[200px] sm:max-w-1/3 md:max-w-2xl lg:max-w-3xl border border-gray-300 rounded-lg bg-white  relative overflow-visible">
          {/* Image inside extra div to keep top part visible */}
          <div className="absolute bottom-0 w-full">
            <img
              src={contact_image}
              alt="Volunteer"
              className="w-full h-auto object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>

      {/* Right Contact Form */}
      <div className="flex flex-col justify-end h-full">
        {/* Right Contact Form Content (unchanged) */}
        <div className="pb-5 flex flex-col gap-2">
          <Heading undertext="Drop a line" />
          <h1 className="text-4xl font-bold text-black mb-2">
            Leave us Message
          </h1>
          <p className="text-upfgray leading-relaxed">
            Please feel free to get in touch using the form below. We'd love to
            hear from you.
          </p>
        </div>
        <div className="bg-white p-5  rounded-lg border border-gray-200">
          <form onSubmit={handleSubmit}>
            {[
              { icon: <FaUser />, type: "text", placeholder: "Your Name" },
              {
                icon: <FaEnvelope />,
                type: "email",
                placeholder: "Email Address",
              },
              { icon: <FaPhoneAlt />, type: "text", placeholder: "Phone" },
              {
                icon: <MdOutlineSubject />,
                type: "text",
                placeholder: "Subject",
              },
            ].map(({ icon, type, placeholder }, index) => (
              <div
                key={index}
                className="relative flex items-center p-3 space-x-3 border-b transition-all duration-300 focus-within:border-upforangecrayola"
              >
                <span className="text-upforangecrayola text-2xl">{icon}</span>
                <input
                  type={type}
                  placeholder={placeholder}
                  className="w-full text-gray-700 focus:outline-none"
                  required
                />
                <div className="absolute left-0 bottom-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></div>
              </div>
            ))}
            <div className="relative flex items-start p-3 space-x-3 border-b transition-all duration-300 focus-within:border-upforangecrayola">
              <FaTextHeight className="text-upforangecrayola text-2xl" />
              <textarea
                placeholder="Message"
                className="w-full text-gray-700 focus:outline-none"
              ></textarea>
            </div>
            <div className="p-6">
              <button
                type="submit"
                className="w-40 border-2 border-upforangecrayola text-[#4b5563] py-3 rounded-full text-sm font-semibold relative overflow-hidden group"
              >
                {/* Background Animation */}
                <span className="absolute inset-0 bg-gradient-to-r from-upforangecrayola to-upforangecrayola w-0 group-hover:w-full transition-all duration-500 ease-out"></span>

                {/* Text */}
                <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                  SEND MESSAGE
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactcard;
