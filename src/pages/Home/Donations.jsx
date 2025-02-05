import { hero_banner } from "@/assets";
import { Input } from "@/components/ui/input";

const Donations = () => {
  return (
    <div className="relative w-full h-full overflow-auto p-6">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${hero_banner})` }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content Container */}
      <div className="relative bg-opacity-75 rounded-xl max-w-5xl mx-auto flex flex-col md:flex-row items-center border border-upforangecrayola p-6 gap-6">
        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center text-white p-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Make a Donation
          </h2>
          <p className="text-base md:text-lg">
            Be a part of this noble cause. Your contribution can make a
            significant difference.
          </p>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="w-full sm:w-3/4 md:w-2/3 flex flex-col gap-3">
            <Input type="number" placeholder="Donation amount" />
            <Input type="text" placeholder="Your name" />
            <Input type="email" placeholder="Your email" />
            <button className="bg-upforangecrayola hover:bg-upforangecrayola/90 transition-all p-2 rounded-md w-full mt-4 text-white font-semibold">
              Support Our Cause
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donations;
