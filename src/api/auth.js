import { ADMIN } from "@/utils/api";
import Instance from "./Instance";

export const adminLogin = async (loginData) => {
  // console.log(loginData);
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

export const resetPassword = async (emailData) => {
  // console.log("Reset Password", emailData);
  try {
    const response = await Instance.post(`${ADMIN}/reset-password`, emailData);
    return response.data;
  } catch (error) {
    console.error(error.message) || "Failed To Reset Password";
    throw new Error("Failed to reset password");
  }
};

export const updatePassword = async (ResetLinkData) => {
  // console.log("Update Password", ResetLinkData);
  try {
    const response = await Instance.post(
      `${ADMIN}/update-password`,
      ResetLinkData
    );
    return response.data;
  } catch (error) {
    console.error(error?.message) || "Failed To Update Password";
    throw new Error("Failed to update password");
  }
};
