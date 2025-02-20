import { contact_bg } from "@/assets";

const Header = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${contact_bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full text-center mb-5 h-80 flex justify-center items-center bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h2 className="text-4xl font-bold text-white relative">Contact Us</h2>
      </div>
    </div>
  );
};

export default Header;
