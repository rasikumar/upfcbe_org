import EventsCard from "@/components/Dashboard/EventsCard";
import EventHook from "@/hooks/EventHook";
import { CreateEvents } from "./CreateEvent";
import { useState } from "react";
import ViewEvent from "./ViewEvent";
import PaginationComponent from "@/components/PaginationComponent";

const Events = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const Events = EventHook(currentPage, itemsPerPage, setCurrentPage);
  const {
    isEventListsError,
    EventLists,
    EventListsError,
    isEventListsLoading,
    CreateEvent,
    DeleteEvent,
    GetEventById,
    selectedEvent,
    UpdateEvent,
  } = Events;

  const handleCreateEvent = (eventData) => {
    CreateEvent.mutate(eventData);
  };

  const handleViewEvent = (eventName) => {
    // console.log(`Viewing event: ${eventName}`);
    GetEventById.mutate(eventName);
    setIsModalOpen(true);
  };

  const handleDeleteEvent = (eventName) => {
    // console.log(`Deleting event: ${eventName}`);
    DeleteEvent.mutate(eventName);
  };

  const handleUpdateEvent = (eventData) => {
    // console.log(`event: ${eventData}`);
    UpdateEvent.mutate(eventData);
    window.location.reload();
  };

  const listEvents = EventLists?.events;
  const totalpages = Math.ceil((EventLists?.total || 0) / itemsPerPage);
  // console.log(EventLists);

  return (
    <div className="flex flex-col gap-4">
      <CreateEvents
        onCreate={handleCreateEvent}
        success={CreateEvent.isSuccess}
      />

      {isEventListsError ? (
        <>{`eventLists ${EventListsError}`}</>
      ) : isEventListsLoading ? (
        <>Loading</>
      ) : (
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4">
          {listEvents.map((EventList) => (
            <EventsCard
              key={EventList.id}
              {...EventList}
              onView={handleViewEvent}
              onDelete={handleDeleteEvent}
            />
          ))}
        </div>
      )}
      {isModalOpen && (
        <ViewEvent
          event={selectedEvent}
          onUpdate={handleUpdateEvent}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          successs={UpdateEvent.isSuccess}
        />
      )}

      <PaginationComponent
        totalPages={totalpages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Events;
