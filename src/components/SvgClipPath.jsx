import React, { forwardRef } from "react";
import { gurujihero } from "@/assets";

const SvgClipPath = forwardRef(
  (
    {
      imageUrl = gurujihero,
      title = "Default Title",
      description = "This is a default description.",
    },
    ref
  ) => {
    return (
      <div ref={ref} className="relative w-full h-full">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 60"
          className="main__hero__image"
        >
          <defs>
            <clipPath id="border" clipPathUnits="userSpaceOnUse">
              <path d="M 5 0 H 80 Q 100 0, 100 20 V 55 Q 100 60, 95 60 H 5 Q 0 60, 0 55 V 5 Q 0 0, 5 0 Z" />
            </clipPath>
          </defs>
          {imageUrl && (
            <image
              preserveAspectRatio="xMidYMid slice"
              width="100%"
              height="100%"
              clipPath="url(#border)"
              href={imageUrl}
            />
          )}

          {/* Overlay on SVG */}
          <rect
            width="100%"
            height="100%"
            fill="black"
            opacity="0.5"
            clipPath="url(#border)"
          />
        </svg>

        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center p-4">
          {title && (
            <h2 className="text-lg font-bold text-white drop-shadow-md">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-sm text-white drop-shadow-md">{description}</p>
          )}
        </div>
      </div>
    );
  }
);

export default SvgClipPath;
