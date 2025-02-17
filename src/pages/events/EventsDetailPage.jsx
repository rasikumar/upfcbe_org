import { useParams } from "react-router";
import { PHOTOS } from "@/utils/api";
import EventHook from "@/hooks/EventHook";

const EventsDetailPage = () => {
  const { id } = useParams();
  const { useEventDetails } = EventHook();
  const {
    data: selectedEvent,
    isLoading,
    isError,
    error,
  } = useEventDetails(id);

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-500"></div>
      </div>
    );
  if (isError)
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        Error loading event details: {error?.message || "Something went wrong"}
      </div>
    );

  if (!selectedEvent)
    return (
      <div className="flex justify-center items-center h-screen text-gray-500">
        No event found.
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">{selectedEvent.name}</h1>
      <img
        src={`${PHOTOS}${selectedEvent.image}`}
        alt={selectedEvent.name}
        className="w-full h-80 object-cover rounded-lg shadow-lg"
      />
      <div
        className="prose max-w-none text-gray-700"
        dangerouslySetInnerHTML={{
          __html:
            selectedEvent.description || "<em>No description provided.</em>",
        }}
      />
      <p className="text-lg text-gray-600">
        {new Date(selectedEvent.date_time).toLocaleDateString("en-GB")}
      </p>
      <p className="text-lg text-gray-600">
        {new Date(selectedEvent.date_time).toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
      <p className="text-lg text-gray-600 font-semibold">
        {selectedEvent.venue}
      </p>
    </div>
  );
};

export default EventsDetailPage;
