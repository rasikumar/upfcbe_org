import { FaWhatsapp } from "react-icons/fa";

const FloatingIcon = () => {
  return (
    <a
      href="https://wa.me/+919842220285"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 cursor-pointer z-50"
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default FloatingIcon;
