import { events } from "../../data/index";
import Eventcard from "../../components/Eventcard";
import { eventbg } from "@/assets";

const Events = () => {
  return (
    <>
      <div style={{ backgroundImage: `url(${eventbg})` }}>
        <div className="w-full text-center mb-8 h-40 flex justify-center items-center">
          <h1 className="text-4xl font-bold">Upcoming Events</h1>
        </div>
        <div className="p-10 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((event) => (
              <Eventcard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Events;
