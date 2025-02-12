import { bannerbg } from "@/assets";

const Header = () => {
  return (
    <div>
      <div
        className="w-full text-center mb-5 h-80 flex justify-center items-center bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${bannerbg})`,
        }}
      >
        <div className="absolute inset-0 bg-upfteagreent opacity-50"></div>
        <h1 className="text-4xl font-bold text-white relative">
          Events & News
        </h1>
      </div>
    </div>
  );
};

export default Header;
