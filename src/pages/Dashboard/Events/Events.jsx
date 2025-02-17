import EventsCard from "@/components/Dashboard/EventsCard";
import EventHook from "@/hooks/EventHook";
import { CreateEvents } from "./CreateEvent";
import { useState } from "react";
import ViewEvent from "./ViewEvent";

const Events = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const Events = EventHook();
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
    console.log(`event: ${eventData}`);
    UpdateEvent.mutate(eventData, {
      onSuccess: () => {
        setIsModalOpen(false);
      },
    });
  };

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
          {EventLists.map((EventList) => (
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
          success={CreateEvent.isSuccess}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
};

export default Events;
