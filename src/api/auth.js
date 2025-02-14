import { ADMIN } from "@/utils/api";
import Instance from "./Instance";

export const adminLogin = async () => {
  try {
    const response = await Instance.post(`${ADMIN}/login`);
    return response.data;
  } catch (error) {
    console.error(error.message) || "Faliled To Login in";
    throw new Error("Failed to log in");
  }
};
