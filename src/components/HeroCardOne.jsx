/* eslint-disable react/prop-types */
import { BsArrowRight } from "react-icons/bs";

export const HeroCardOne = ({ image, title, description, buttonText }) => {
  return (
    <div className="relative bg-green-900 text-white p-6 rounded-3xl 2xl:h-96 h-[19rem] 2xl:w-64 w-52 flex flex-col justify-between overflow-hidden">
      {/* Top Right Curve Effect */}
      <div className="itemone"></div>
      {/* Image */}
      {image && <img src={image} alt="Hero" className="w-full h-32 object-cover rounded-t-3xl" />}
      {/* Content */}
      <div className="space-y-2 m-auto">
        <h1 className="2xl:text-6xl text-2xl font-bold">{title}</h1>
        <p className="2xl:text-sm text-xs font-medium">
          {description}
        </p>
      </div>
      {/* Donate Button */}
      <button className="bg-green-500 text-black flex items-center justify-between px-4 py-2 rounded-full">
        {buttonText} <BsArrowRight className="ml-2" size={18} />
      </button>
    </div>
  );
};
