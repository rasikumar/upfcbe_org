import { eventbg ,  bannerbg  } from "@/assets";
import Servicemenu from "@/components/Servicemenu";

const Menu = () => {
  return (
    <>
    <div>
      <div
        className="w-full text-center mb-5 h-80 flex justify-center items-center bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${bannerbg})`,
        }}
      >
        <div className="absolute inset-0 bg-upfteagreent opacity-50"></div>
        <h2 className="text-4xl font-bold text-white relative">
          Services
        </h2>
      </div>
    </div>
      <div style={{ backgroundImage: `url(${eventbg})` }}>
        < Servicemenu/>
      </div>

    </>
  );
};
export default Menu;
