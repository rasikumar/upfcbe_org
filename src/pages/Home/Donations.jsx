import { medicalservice } from "@/assets";
import { Link } from "react-router";

const Donations = () => {
  return (
    <div className="relative w-full h-full overflow-auto p-6">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-top "
        style={{ backgroundImage: `url(${medicalservice})` }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content Container */}
      <div className="relative bg-opacity-75 rounded-xl max-w-5xl mx-auto flex flex-col md:flex-row items-center  p-6 gap-6">
        {/* Text Section */}
        <div className="w-full flex flex-col items-center text-center text-white p-4">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Your Donations Means A Lot To Them
          </h2>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Donate What You Can
          </h2>

          <Link
            to={"/donation"}
            className="bg-upforangecrayola hover:bg-upforangecrayola/90 transition-all p-2 rounded-md w-fit px-4 mt-4 text-white font-semibold"
          >
            Support Our Cause
          </Link>
        </div>

        {/* Form Section */}
      </div>
    </div>
  );
};

export default Donations;
