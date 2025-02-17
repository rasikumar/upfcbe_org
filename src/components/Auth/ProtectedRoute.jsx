/* eslint-disable react/prop-types */
import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router"; // Ensure correct import

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/not-authorized" replace />;
  }

  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    if (decodedToken.exp < currentTime || decodedToken.role !== "admin") {
      localStorage.removeItem("token");
      return <Navigate to="/not-authorized" replace />;
    }
  } catch (error) {
    console.error("Error decoding token:", error);
    localStorage.removeItem("token");
    return <Navigate to="/not-authorized" replace />;
  }

  return children;
};

export default ProtectedRoute;
