import React, { forwardRef } from "react";
import { gurujihero } from "@/assets";

const LeftSvgClipPathOne = forwardRef(
  (
    { imageUrl = gurujihero, title = "25 K", description = "Volunteers" },
    ref
  ) => {
    return (
      <div className="relative w-full h-full">
        <svg viewBox="0 0 210 296" className="main__hero__image w-full h-auto">
          <defs>
            <clipPath id="LeftSvgClipPathOne" clipPathUnits="userSpaceOnUse">
              <path d="M0 30C0 13.4315 13.4315 0 30 0H97.5517C104.666 0 111.271 3.69091 115 9.75V9.75C118.729 15.8091 125.334 19.5 132.448 19.5H180C196.569 19.5 210 32.9315 210 49.5V266C210 282.569 196.569 296 180 296H30C13.4315 296 0 282.569 0 266V30Z" />
            </clipPath>
          </defs>
          {imageUrl && (
            <image
              preserveAspectRatio="xMidYMid slice"
              width="100%"
              height="100%"
              clipPath="url(#LeftSvgClipPathOne)"
              href={imageUrl}
            />
          )}

          {/* Overlay on SVG */}
          <rect
            width="100%"
            height="100%"
            fill="black"
            opacity="0.5"
            clipPath="url(#LeftSvgClipPathOne)"
          />
        </svg>

        <div className="absolute top-0 left-0 w-full h-full flex flex-col px-4 py-20">
          {title && (
            <h2 className="md:text-4xl text-[8px] font-bold text-white text-start">
              {title}
            </h2>
          )}
          {description && (
            <p className="md:text-sm text-[6px] text-white drop-shadow-md">
              {description}
            </p>
          )}
        </div>
      </div>
    );
  }
);

export default LeftSvgClipPathOne;
