import { useEffect } from "react";
import axios from "axios";
import { useSearchParams, useNavigate } from "react-router";
import { PAY } from "@/utils/api";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const PaymentResponse = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyPayment = async () => {
      const params = Object.fromEntries(searchParams.entries());
      console.log(params);
      try {
        const response = await axios.post(
          `${BASE_URL}${PAY}/payment_response`,
          params
        );
        console.log(response);
        if (response.data.success) {
          alert("Payment Successful!");
          navigate("/success"); // Redirect to a success page
        } else {
          alert("Payment Failed. Try again.");
          navigate("/failure"); // Redirect to a failure page
        }
      } catch (error) {
        console.error("Error verifying payment:", error);
        alert("Something went wrong.");
        navigate("/failure");
      }
    };

    verifyPayment();
  }, [searchParams, navigate]);

  return <h2>Processing Payment...</h2>;
};

export default PaymentResponse;
