import Heading from "@/components/Heading";
import { heroContent } from "../../data";
import CountUp from "react-countup";
import { useEffect, useState } from "react";
import { bg } from "@/assets";
import VerticalBox from "@/components/VerticalBox";

const About = () => {
  const aboutContents = heroContent[1].content;
  const [progress, setProgress] = useState([0, 0, 0]);
  const [startCounting, setStartCounting] = useState(false);

  const endValues = [
    { value: 5, suffix: " +", title: "Services" },
    { value: 500, suffix: " +", title: "Soul Homates" },
    { value: 25, suffix: " +", title: "Home branches" },
  ];

  useEffect(() => {
    setStartCounting(true); // Start counting when component mounts

    const interval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress.map((value) => (value < 100 ? value + 1 : value))
      );
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="flex max-w-[100rem] mx-auto bg-cover bg-center items-start"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-1/2 flex flex-col items-start">
        {aboutContents.map((aboutContent) => (
          <div
            key={aboutContent.id}
            className="m-auto py-5 md:px-4 sm:px-6 lg:px-8 flex flex-col gap-4"
          >
            <Heading undertext={aboutContent.heading} />
            <h2 className="text-4xl font-semibold">{aboutContent.title}</h2>
            <p className="mt-5 text-upfblack">{aboutContent.description}</p>
          </div>
        ))}

        {/* Progress Circles */}
        <div className="flex flex-wrap justify-center gap-8 ml-4">
          {progress.map((value, index) => {
            const radius = 26;
            const circumference = 2 * Math.PI * radius;
            const progressOffset =
              circumference - (value / 100) * circumference;

            return (
              <div
                key={index}
                className="relative flex flex-col items-center justify-center gap-4"
              >
                <h3 className="mb-2 text-lg font-medium text-center">
                  {endValues[index].title}
                </h3>
                <div className="relative w-28 h-28 rounded-full flex items-center justify-center ml-2">
                  <svg
                    className="w-[10rem] h-[10rem] absolute transform rotate-[-90deg]"
                    viewBox="0 0 80 80"
                  >
                    {/* Background Circle */}
                    <circle
                      cx="38"
                      cy="38"
                      r={radius}
                      fill="none"
                      strokeWidth="5"
                    />
                    {/* Animated Progress Circle */}
                    <circle
                      cx="38"
                      cy="38"
                      r={radius}
                      fill="none"
                      strokeWidth="5"
                      stroke="currentColor"
                      className="text-upforangecrayola"
                      strokeDasharray={circumference}
                      strokeDashoffset={progressOffset}
                      strokeLinecap="round"
                      style={{
                        transition: "stroke-dashoffset 0.5s ease-out",
                      }}
                    />
                  </svg>
                  <div className="absolute flex items-center justify-center w-full h-full text-2xl font-bold">
                    {/* Counting Animation */}
                    {startCounting && (
                      <CountUp
                        start={0}
                        end={endValues[index].value}
                        duration={7}
                        suffix={endValues[index].suffix}
                        decimals={endValues[index].value % 1 !== 0 ? 1 : 0}
                      />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-1/2 flex flex-col gap-8">
        <VerticalBox />
        <VerticalBox />
        <VerticalBox />
      </div>
    </div>
  );
};

export default About;
