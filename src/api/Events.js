import { EVENT } from "@/utils/api";
import Instance from "./Instance";

export const getAllEvents = async (currentpage, itemPerPage) => {
  try {
    const response = await Instance.get(
      `${EVENT}/AllEvent/?page=${currentpage}&limit=${itemPerPage}`
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error.message) || "Failed To Fetch Events";
    throw new Error("Failed to fetch events");
  }
};

export const createEvent = async (eventData) => {
  // console.log(eventData);
  try {
    const response = await Instance.post(`${EVENT}/createEve`, eventData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error.message) || "Failed To Create Event";
    throw new Error("Failed to create event");
  }
};

export const deleteEvent = async (Eventid) => {
  // console.log(Eventid);
  try {
    const response = await Instance.delete(`${EVENT}/delEve/${Eventid}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error.message) || "Failed To Delete Event";
    throw new Error("Failed to delete event");
  }
};

export const getEventById = async (EventId) => {
  try {
    const response = await Instance.get(`${EVENT}/events/${EventId}`);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error.message) || "Failed To Fetch Event";
    throw new Error("Failed to fetch event");
  }
};

export const updateEvent = async (eventData) => {
  // console.log(eventData);
  try {
    const response = await Instance.put(`${EVENT}/updateEve/`, eventData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error.message) || "Failed To Update Event";
    throw new Error("Failed to update event");
  }
};
