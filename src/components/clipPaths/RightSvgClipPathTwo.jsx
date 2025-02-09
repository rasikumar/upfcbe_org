import React, { forwardRef } from "react";
import { gurujiwalk } from "@/assets";

const RightSvgClipPathTwo = forwardRef(
  (
    {
      imageUrl = gurujiwalk,
      title = "25 K",
      description = "Voaksnanslunteers",
    },
    ref
  ) => {
    return (
      <div className="relative w-full h-full">
        <svg viewBox="0 0 210 296" className="main__hero__image w-full h-auto">
          <defs>
            <clipPath id="RightSvgClipPathTwo" clipPathUnits="userSpaceOnUse">
              <path d="M210 30C210 13.4315 196.569 0 180 0H112.448C105.334 0 98.7287 3.69091 95 9.75V9.75C91.2713 15.8091 84.6662 19.5 77.5517 19.5H30C13.4315 19.5 0 32.9315 0 49.5V266C0 282.569 13.4315 296 30 296H180C196.569 296 210 282.569 210 266V30Z" />
            </clipPath>
          </defs>
          {imageUrl && (
            <image
              preserveAspectRatio="xMidYMid slice"
              width="100%"
              height="100%"
              clipPath="url(#RightSvgClipPathTwo)"
              href={imageUrl}
            />
          )}

          {/* Overlay on SVG */}
          <rect
            width="100%"
            height="100%"
            fill="black"
            opacity="0.5"
            clipPath="url(#RightSvgClipPathTwo)"
          />
        </svg>

        <div className="absolute top-0 left-0 w-full h-full flex flex-col px-4 py-20 items-end">
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

export default RightSvgClipPathTwo;
