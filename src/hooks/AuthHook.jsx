import { adminLogin } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";

const Auth = () => {
  const navigate = useNavigate();
  const Login = useMutation({
    mutationFn: adminLogin,
    onSuccess: () => {
      console.log("Login successful");
      navigate("/dashboard");
    },
    onError: (error) => {
      console.error("Login failed", error);
    },
  });
  return { Login };
};

export default Auth;
