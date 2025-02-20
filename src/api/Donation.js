import { PAY } from "@/utils/api";
import Instance from "./Instance";

export const getAllDonation = async (
  currentpage,
  itemPerPage,
  name,
  status,
  toDate,
  fromDate
) => {
  // console.log(status);
  // console.log(name);
  // console.log(To);
  // console.log(From);
  try {
    const statusQuery = status ? `&status=${status}` : "";
    const nameQuery = name ? `&name=${name}` : "";
    const ToQuery = toDate ? `&toDate=${toDate}` : "";
    const FromQuery = fromDate ? `&fromDate=${fromDate}` : "";

    const response = await Instance.get(
      `${PAY}/getallpayment/?page=${currentpage}&limit=${itemPerPage}${statusQuery}${nameQuery}${ToQuery}${FromQuery}`
    );
    return response.data;
  } catch (error) {
    console.error(error.message) || "Failed To Get All Donation";
    throw new Error("Failed to get all donation");
  }
};
