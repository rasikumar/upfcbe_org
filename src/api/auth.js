import { ADMIN } from "@/utils/api";
import Instance from "./Instance";

export const adminLogin = async (loginData) => {
  console.log(loginData);
  try {
    const response = await Instance.post(`${ADMIN}/login`, {
      email: loginData.email,
      password: loginData.password,
    });
    return response.data;
  } catch (error) {
    console.error(error.message) || "Faliled To Login in";
    throw new Error("Failed to log in");
  }
};
