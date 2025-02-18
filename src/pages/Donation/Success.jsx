import React, { useEffect, useRef, useState } from "react";
import { Check, CheckCircle } from "lucide-react"; // Icon for success
import { Card } from "@/components/ui/card";
import ReactConfetti from "react-confetti";
import Button from "@/components/Button";

const Success = () => {
  const box = useRef(null);
  const [confettiWidth, setConfettiWidth] = useState(0);
  const [confettiHeight, setConfettiHeight] = useState(0);
  const [name, setName] = useState("Jullie");
  const [amount, setAmount] = useState("1000");

  useEffect(() => {
    if (box && box.current) {
      setConfettiWidth(box.current.offsetWidth);
      setConfettiHeight(box.current.offsetHeight + 130);
    }
  }, [box]);

  return (
    <div
      className="flex flex-col items-center justify-center h-[30rem] z-40"
      ref={box}
    >
      <ReactConfetti
        width={confettiWidth}
        height={confettiHeight}
        recycle={false}
      />
      {/* Success icon with animation */}
      {/* Success message */}
      <h1 className="success-message text-3xl mt-6 inline-flex items-center gap-4 text-upfteagreent">
        <span className="bg-upfteagreent p-4 rounded-full text-white">
          <Check />
        </span>
        Payment Successful !
      </h1>
      <p className="text-2xl font-bold mt-2">
        Thank you! {name} for your Payment Of ${amount}!
      </p>

      {/* Button to go back */}
      <Button className="mt-4">Know more Guruji</Button>
    </div>
  );
};

export default Success;
