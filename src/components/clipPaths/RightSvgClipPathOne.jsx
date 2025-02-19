import EventHook from "@/hooks/EventHook";
import React, { forwardRef, useEffect } from "react";
import { Link } from "react-router";

const LeftSvgClipPathTwo = forwardRef(
  ({ id, imageUrl, title = "Events" }, ref) => {
    const Event = EventHook();
    const {
      isEventError,
      isEventLoading,
      EventError,
      EventLists,
      GetEventById,
    } = Event;

    useEffect(() => {
      if (id) {
        GetEventById(id);
      }
    }, [id, GetEventById]);

    const eventLists = EventLists?.events;
    const eventName = eventLists?.length > 0 ? eventLists[0].name : "";

    if (isEventLoading) return <div className="text-white">Loading...</div>;

    if (isEventError)
      return (
        <div className="text-red-500">
          Error: {EventError?.message || "Failed to fetch events"}
        </div>
      );

    return (
      <Link
        to={`events-home/events/${id}`}
        className="relative w-full h-full block group"
      >
        <svg viewBox="0 0 210 296" className="main__hero__image w-full h-auto">
          <defs>
            <clipPath id="LeftSvgClipPathTwo" clipPathUnits="userSpaceOnUse">
              <path d="M0 30C0 13.4315 13.4315 0 30 0H97.5517C104.666 0 111.271 3.69091 115 9.75V9.75C118.729 15.8091 125.334 19.5 132.448 19.5H180C196.569 19.5 210 32.9315 210 49.5V266C210 282.569 196.569 296 180 296H30C13.4315 296 0 282.569 0 266V30Z" />
            </clipPath>
          </defs>
          {imageUrl && (
            <image
              preserveAspectRatio="xMidYMid slice"
              width="100%"
              height="100%"
              clipPath="url(#LeftSvgClipPathTwo)"
              href={imageUrl}
            />
          )}
          <rect
            width="100%"
            height="100%"
            fill="black"
            opacity="0.5"
            clipPath="url(#LeftSvgClipPathTwo)"
          />
        </svg>

        <div className="absolute top-0 left-0 w-full h-full flex flex-col p-4 justify-between">
          {title && <h2 className="text-xl text-white">{title}</h2>}
          {eventName && (
            <p className="text-xs md:text-base text-white drop-shadow-md line-clamp-3 group-hover:underline">
              {eventName}
            </p>
          )}
        </div>
      </Link>
    );
  }
);

export default LeftSvgClipPathTwo;
