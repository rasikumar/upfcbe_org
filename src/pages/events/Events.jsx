import { useState } from "react";
import Eventcard from "../../components/Eventcard";
import { eventbg } from "@/assets";
import PaginationComponent from "@/components/PaginationComponent";
import EventHook from "@/hooks/EventHook";

const Events = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const Events = EventHook(currentPage, itemsPerPage, setCurrentPage);
  const {
    isEventListsError,
    EventLists,
    EventListsError,
    isEventListsLoading,
  } = Events;
  const ListEvents = EventLists?.events;
  // console.log(EventLists);
  const totalpages = Math.ceil((EventLists?.total || 0) / itemsPerPage);
  return (
    <>
      <div style={{ backgroundImage: `url(${eventbg})` }}>
        <div className="w-full text-center flex justify-center mt-8 items-center">
          <h2 className="text-4xl font-bold">Upcoming Events</h2>
        </div>
        <div className="px-10 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {isEventListsError ? (
              <>No Data{EventListsError}</>
            ) : isEventListsLoading ? (
              <>Loading</>
            ) : (
              ListEvents.map((event) => <Eventcard key={event.id} {...event} />)
            )}
          </div>
        </div>
        <PaginationComponent
          totalPages={totalpages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
};
export default Events;
