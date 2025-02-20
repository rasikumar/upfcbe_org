import { useEffect, useRef } from "react";
import { Link } from "react-router";
import gsap from "gsap";

const DashBoardMain = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", stagger: 0.2 }
    );
  }, []);

  return (
    <div className="p-6 min-h-screen ">
      {/* Dashboard Header */}
      <div ref={containerRef}>
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Welcome to Your Universal Peace Foundation
        </h1>
        <p className="text-gray-600 mb-6">
          Manage events, create news, and track donations.
        </p>

        {/* Dashboard Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Event Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 duration-300">
            <h2 className="text-xl font-semibold mb-2 text-blue-600">
              Create Event
            </h2>
            <p className="text-gray-500">Plan and schedule events.</p>
            <Link
              to="/dashboard/events"
              className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md"
            >
              Create Event
            </Link>
          </div>

          {/* News Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 duration-300">
            <h2 className="text-xl font-semibold mb-2 text-green-600">
              Create News
            </h2>
            <p className="text-gray-500">Share the latest updates.</p>
            <Link
              to="/dashboard/news"
              className="mt-4 inline-block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 shadow-md"
            >
              Create News
            </Link>
          </div>

          {/* Donation Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 duration-300">
            <h2 className="text-xl font-semibold mb-2 text-purple-600">
              Donation Management
            </h2>
            <p className="text-gray-500">Check received donations.</p>
            <Link
              to="/dashboard/donations"
              className="mt-4 inline-block px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-300 shadow-md"
            >
              View Donations
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardMain;
