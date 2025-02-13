import { about_header } from "@/assets";

const Header = () => {
  return (
    <div className="relative w-full">
      <img
        src={about_header}
        alt="Header Image"
        className="w-full max-md:h-52"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl font-bold text-white relative">
          Welcome to Our About Us Page
        </h1>
      </div>
    </div>
  );
};

export default Header;
