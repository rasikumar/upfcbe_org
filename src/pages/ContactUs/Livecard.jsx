import Livechat from "@/components/Livechat";
import LeafletMap from "@/components/LeafletMap";

const Livecard = () => {
  return (
    <div className="flex flex-col justify-center gap-6 p-6 rounded-xl w-auto h-auto ">
      <div className="">
        <Livechat />
      </div>
      <div className="-mt-[10%] -z-50 ">
        <LeafletMap />
      </div>
    </div>
  );
};
export default Livecard;
