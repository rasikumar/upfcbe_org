import { PAY } from "@/utils/api";
import Instance from "./Instance";

export const getAllDonation = async () => {
  try {
    const response = await Instance.get(`${PAY}/getallpayment`);
    return response.data;
  } catch (error) {
    console.error(error.message) || "Failed To Get All Donation";
    throw new Error("Failed to get all donation");
  }
};
