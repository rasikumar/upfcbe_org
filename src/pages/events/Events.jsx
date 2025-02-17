import Eventcard from "../../components/Eventcard";
import { eventbg } from "@/assets";
import EventHook from "@/hooks/EventHook";

const Events = () => {
  const Events = EventHook();
  const {
    isEventListsError,
    EventLists,
    EventListsError,
    isEventListsLoading,
  } = Events;

  // console.log(EventLists);
  return (
    <>
      <div style={{ backgroundImage: `url(${eventbg})` }}>
        <div className="w-full text-center mb-8 h-40 flex justify-center items-center">
          <h2 className="text-4xl font-bold">Upcoming Events</h2>
        </div>
        <div className="p-10 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {isEventListsError ? (
              <>No Data{EventListsError}</>
            ) : isEventListsLoading ? (
              <>Loading</>
            ) : (
              EventLists.map((event) => <Eventcard key={event.id} {...event} />)
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Events;
