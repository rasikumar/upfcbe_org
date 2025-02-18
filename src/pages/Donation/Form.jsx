import Heading from "@/components/Heading";
import { useState } from "react";

const values = [
  {
    id: 0,
    value: 10,
  },
  {
    id: 1,
    value: 20,
  },
  {
    id: 2,
    value: 50,
  },
  {
    id: 3,
    value: 100,
  },
  {
    id: 4,
    value: 500,
  },
  {
    id: 5,
    value: 1000,
  },
];

const Form = () => {
  const [selectedValue, setSelectedValue] = useState("0");
  return (
    <div
      id="donationpage"
      className="flex flex-col max-w-[100rem] m-auto my-10"
    >
      <div className="flex flex-col items-center justify-center my-10">
        <Heading undertext={"Make Your Donation"} className="text-3xl" />
        <h2 className="text-3xl font-semibold">Creating a Brighter Tomorrow</h2>
      </div>
      <div>
        <div className="bg-upfgray p-8 flex flex-col gap-6 w-1/2 rounded-3xl">
          <h3 className="text-xl font-semibold">How Much?</h3>
          <div className="grid grid-cols-2 grid-rows-1 gap-10">
            <ul className="grid grid-rows-2 grid-cols-3 gap-10">
              {values.map((value) => (
                <button
                  onClick={() => setSelectedValue(value.value)}
                  key={value.id}
                  className="items-center px-2 py-6 rounded-xl text-center"
                  // style={{backgroundImage: ({""})}}
                >
                  <label
                    htmlFor={`radio-${value.id}`}
                    className="font-semibold"
                  >
                    Rs.{value.value}
                  </label>
                </button>
              ))}
            </ul>
            <div className="bg-slate-400">
              <div>
                <h4>Like to Donate</h4>
                <p>Enter Your custom amount</p>
              </div>
              <div>
                <div>{selectedValue}</div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Form;
