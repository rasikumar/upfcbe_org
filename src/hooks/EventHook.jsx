import {
  createEvent,
  deleteEvent,
  getAllEvents,
  getEventById,
  updateEvent,
} from "@/api/Events";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const EventHook = (currentpage, itemPerPage) => {
  const { toast } = useToast();

  const [selectedEvent, setSelectedEvent] = useState(null);

  const queryClient = useQueryClient();
  const {
    data: EventLists,
    isError: isEventListsError,
    isLoading: isEventListsLoading,
    error: EventListsError,
  } = useQuery({
    queryKey: ["events", currentpage, itemPerPage],
    queryFn: () => getAllEvents(currentpage, itemPerPage),
    staleTime: 1000 * 60 * 5,
  });

  const useEventDetails = (id) =>
    useQuery({
      queryKey: ["events", id],
      queryFn: () => getEventById(id),
      enabled: !!id,
      staleTime: 1000 * 60 * 5,
    });

  const CreateEvent = useMutation({
    mutationFn: (eventData) => createEvent(eventData),
    onSuccess: (data) => {
      queryClient.invalidateQueries(["events"]);
      // console.log("Event created successfully", data);
      toast({
        title: "Success!",
        description: data?.message || "Event created successfully 🎉",
        className: "bg-upfteagreent text-white",
      });
    },

    onError: (error) => {
      console.error("Failed to create event", error);
      toast({
        title: "Error",
        description: error?.error || "Failed to create event",
        variant: "destructive",
      });
    },
  });

  const DeleteEvent = useMutation({
    mutationFn: (eventId) => deleteEvent(eventId),
    onSuccess: (data) => {
      queryClient.invalidateQueries(["events"]);
      // console.log("Event deleted successfully", data);
      toast({
        title: "Success!",
        description: data?.message || "Event deleted successfully ��",
        className: "bg-red-500 text-white",
      });
    },
    onError: (error) => {
      console.error("Failed to create event", error);
      toast({
        title: "Error",
        description: error?.message || "Failed to create event",
        variant: "destructive",
      });
    },
  });

  const GetEventById = useMutation({
    mutationFn: (eventId) => getEventById(eventId),
    onSuccess: (data) => {
      const EventResponseId = data;
      setSelectedEvent(EventResponseId);
    },

    onError: (error) => {
      console.error("Failed to get event by ID", error);
      toast({
        title: "Error",
        description: error?.message || "Failed to get event by ID",
        variant: "destructive",
      });
    },
  });

  const UpdateEvent = useMutation({
    mutationFn: (updatedEventData) => updateEvent(updatedEventData),
    onSuccess: (data) => {
      queryClient.invalidateQueries(["events"]);
      // console.log("Event updated successfully", data);
      toast({
        title: "Success!",
        description: data?.message || "Event updated successfully ��",
        className: "bg-upfteagreent text-white",
      });
    },
    onError: (error) => {
      console.error("Failed to update event", error);
      toast({
        title: "Error",
        description: error?.message || "Failed to update event",
        variant: "destructive",
      });
    },
  });

  return {
    EventLists,
    useEventDetails,
    isEventListsError,
    isEventListsLoading,
    EventListsError,
    CreateEvent,
    DeleteEvent,
    GetEventById,
    selectedEvent,
    UpdateEvent,
  };
};

export default EventHook;
