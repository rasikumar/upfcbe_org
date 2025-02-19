import { CONTACT } from "@/utils/api";
import Instance from "./Instance";

export const createContact = async (contactData) => {
  try {
    const response = await Instance.post(
      `${CONTACT}/contacts`,
      contactData
    );
    return response.data;
  } catch (error) {
    console.error(error.message) || "Failed To Create Contact";
    throw new Error("Failed to create contact");
  }
};
