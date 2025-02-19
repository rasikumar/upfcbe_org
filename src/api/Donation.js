import { PAY } from "@/utils/api";
import Instance from "./Instance";

export const getAllDonation = async (currentpage, itemPerPage) => {
  try {
    const response = await Instance.get(
      `${PAY}/getallpayment/?page=${currentpage}&limit=${itemPerPage}`
    );
    return response.data;
  } catch (error) {
    console.error(error.message) || "Failed To Get All Donation";
    throw new Error("Failed to get all donation");
  }
};
