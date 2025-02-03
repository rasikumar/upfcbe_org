import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

const Error = () => {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-6">
        <h1 className="text-6xl font-bold text-red-600 mb-2">404</h1>
        <p className="text-xl text-gray-600 mb-4">Page Not Found</p>
        <p className="text-lg text-gray-600 mb-4">Redirecting in {seconds} seconds...</p>
        <Link to="/" className="text-lg text-blue-500 hover:underline">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
