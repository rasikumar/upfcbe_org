import { PHOTOS } from "@/utils/api";
import { FaClock, FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router";

const Eventcard = ({
  id,
  date_time,
  description,
  image,
  name,
  status,
  venue,
}) => {
  return (
    <Link
      to={`./events/${id}`}
      className="w-full max-w-96 h-full max-h-auto p-2"
    >
      {/* Event Date Badge */}
      <div className="relative left-4 top-7 bg-[#FD8343] text-white text-center w-16 h-16 border-4 border-white rounded-full z-10">
        <p className="text-lg font-bold">
          {new Date(date_time).toLocaleDateString("en-GB", {
            day: "2-digit",
          })}
        </p>
        <p className=" font-bold">
          {new Date(date_time).toLocaleDateString("en-GB", {
            month: "short",
          })}
        </p>
      </div>

      <div className="relative shadow-lg rounded-lg overflow-hidden">
        {/* Event Image */}
        <img
          src={`${PHOTOS}${image}`}
          alt={name}
          className="w-full object-cover rounded-md min-w-[370px] max-h-[440px] min-h-[440px]"
        />
        <div className="absolute inset-0 bg-black opacity-50 rounded-md"></div>

        {/* Event Text Container*/}
        <div className=" absolute inset-0 flex flex-col justify-end text-white transition-all duration-500 ease-in-out group">
          <div className="relative p-5 z-10 transition-all duration-500 ease-in-out group-hover:text-black">
            {/* Background Hover Effect on Text Container*/}
            <div className="absolute inset-0 before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-white before:transition-all before:duration-500 before:ease-in-out group-hover:before:h-full before:z-[-1] rounded-md"></div>

            {/* Event Details */}
            <ul className="font-semibold flex space-x-4 text-sm my-2 relative text-[#21B740]">
              <li className="flex items-center font-Caveat text-xl">
                <FaClock className="mr-1" />
                {new Date(date_time).toLocaleTimeString("en-IN", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </li>
              <li className="flex items-center font-Caveat text-2xl">
                <FaLocationDot className="mr-1" />
                {venue}
              </li>
            </ul>

            {/* Event name */}
            <h3 className="text-xl font-semibold transition-all duration-500 group-hover:text-black hover:text-upforangecrayola relative">
              {name}
            </h3>
            <div
              dangerouslySetInnerHTML={{
                __html: description,
              }}
              className="line-clamp-3"
            />

            {/*More details */}
            <div className="text-white group-hover:text-black mt-3 text-sm text-bold font-medium relative">
              <span className="absolute left-0 top-[-4px] w-4 h-0.5 bg-[#FD8343] transition-all duration-500 ease-in-out group-hover:w-full"></span>
              <span className="hover:text-[#FD8343]">MORE DETAILS</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Eventcard;
