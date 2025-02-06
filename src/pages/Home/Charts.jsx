import React from "react";
import { Component } from "@/components/AboutRounds";

const Charts = () => {
  const chartDataO = [{ browser: "Lived", visitors: 500, fill: "#C2E6C7ff" }];
  const chartConfigO = {
    visitors: {
      label: "Visitors",
    },
    Chrome: { label: "Lived", color: "#C2E6C7ff" },
  };
  const chartDataT = [
    { browser: "Branches", visitors: 2.5, fill: "#FEAB91ff" },
  ];
  const chartConfigT = {
    visitors: {
      label: "Visitors",
    },
    Chrome: { label: "Branches", color: "#FEAB91ff" },
  };
  const chartDataR = [{ browser: "Services", visitors: 5, fill: "#4285F4" }];
  const chartConfigR = {
    visitors: {
      label: "Services",
    },
    Chrome: { label: "Services", color: "#4285F4" },
  };
  return (
    <div className="w-full m-auto px-4">
      <div className="flex flex-col sm:flex-row rounded-xl p-6 mx-auto items-center justify-between max-w-[100rem] gap-6 sm:gap-4 my-4">
        <Component
          chartData={chartDataR}
          chartConfig={chartConfigR}
          thounds={"+"}
          Visitors="Services"
          title="Visitor Devices Used"
          description="Distribution of visitor devices (Last 6 months)"
        />
        <Component
          chartData={chartDataT}
          chartConfig={chartConfigT}
          thounds={"K+"}
          Visitors="Branches"
          title="UPF Home Branches"
          description="Visitor distribution by browser (Last 6 months)"
        />
        <Component
          chartData={chartDataO}
          chartConfig={chartConfigO}
          thounds={"+"}
          Visitors="Joined"
          title="Soul Homates Lived In UPF"
          description="Visitor distribution"
        />
      </div>
    </div>
  );
};

export default Charts;
