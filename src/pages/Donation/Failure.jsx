import React, { useEffect, useRef, useState } from "react";
import { XCircle } from "lucide-react"; // Icon for failure
import { Card } from "@/components/ui/card";
import ReactConfetti from "react-confetti";
import Button from "@/components/Button";

const Failure = () => {
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
      {/* <ReactConfetti
        width={confettiWidth}
        height={confettiHeight}
        recycle={false}
      /> */}
      {/* Failure icon with animation */}
      <h1 className="failure-message text-3xl mt-6 inline-flex items-center gap-4 text-red-600">
        <span className="bg-red-600 p-4 rounded-full text-white">
          <XCircle />
        </span>
        Payment Failed!
      </h1>
      <p className="text-2xl font-bold mt-2">
        Unfortunately, your payment could not be processed.
      </p>

      {/* Button to retry or go back */}
      <Button to={"/donation"} className="mt-4 bg-red-600 text-white">
        Try Again
      </Button>
    </div>
  );
};

export default Failure;
