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
      {/* Event Name and Details */}
      <div className="space-y-4">
        <h1 className="text-4xl font-semibold text-gray-900">
          {selectedEvent.name}
        </h1>

        {/* Date, Time, and Venue */}
        <div className="flex items-center gap-5">
          <p className="text-lg text-gray-600">
            <strong>Date:</strong>{" "}
            {new Date(selectedEvent.date_time).toLocaleDateString("en-GB")}
          </p>
          <p className="text-lg text-gray-600">
            <strong>Time:</strong>{" "}
            {new Date(selectedEvent.date_time).toLocaleTimeString("en-IN", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
          <p className="text-lg text-gray-600 font-semibold">
            <strong>Venue:</strong> {selectedEvent.venue}
          </p>
        </div>
      </div>

      {/* Event Image and Description */}
      <div className="space-y-4">
        {/* Event Image */}
        <div className="relative w-full h-80 overflow-hidden rounded-lg shadow-lg">
          <img
            src={`${PHOTOS}${selectedEvent.image}`}
            alt={selectedEvent.name}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Event Description */}
        <div className="prose text-gray-700">
          <div className="text-gray-700">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  selectedEvent.description ||
                  "<em>No description provided.</em>",
              }}
              className="[&>h1]:text-4xl [&>h1]:font-bold [&>h2]:text-3xl [&>h2]:font-semibold"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsDetailPage;
