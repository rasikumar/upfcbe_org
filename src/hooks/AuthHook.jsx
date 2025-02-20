import { adminLogin, resetPassword, updatePassword } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { useToast } from "./use-toast";

const Auth = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const Login = useMutation({
    mutationFn: (loginData) => adminLogin(loginData),
    onSuccess: (response) => {
      // console.log("Login successful", response.token);
      localStorage.setItem("token", response.token);
      toast({
        title: "Success!",
        description: "Logged in successfully ��",
        variant: "success",
      });
      navigate("/dashboard");
    },
    onError: (error) => {
      console.error("Login failed", error);
    },
  });

  const ResetPassword = useMutation({
    mutationFn: (email) => resetPassword(email),
    onSuccess: (data) => {
      toast({
        title: "Success!",
        description: data?.message || "Password reset email sent successfully!",
        variant: "success",
      });
      navigate("/admin");
    },
    onError: (error) => {
      console.error("Password reset failed", error);
      toast({
        title: "Error!",
        description: error?.message || "Failed to reset password",
      });
    },
  });

  const UpdatePassword = useMutation({
    mutationFn: (data) => updatePassword(data),
    onSuccess: (data) => {
      console.log("Password updated successfully", data);
      toast({
        title: "Success!",
        description: data?.message || "Password updated successfully!",
        variant: "success",
      });
      navigate("/admin");
    },
    onError: (error) => {
      console.error("Password update failed", error);
      toast({
        title: "Error!",
        description: error?.message || "Failed to update password",
      });
    },
  });

  return { Login, ResetPassword, UpdatePassword };
};

export default Auth;
