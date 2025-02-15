import { adminLogin } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";

const Auth = () => {
  const navigate = useNavigate();

  const Login = useMutation({
    mutationFn: (loginData) => adminLogin(loginData),
    onSuccess: (response) => {
      // console.log("Login successful", response.token);
      localStorage.setItem("token", response.token);
      navigate("/dashboard");
    },
    onError: (error) => {
      console.error("Login failed", error);
    },
  });

  return { Login };
};

export default Auth;
