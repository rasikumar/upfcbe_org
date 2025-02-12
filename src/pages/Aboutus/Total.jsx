import { about_bottom_pic } from "@/assets";
import Heading from "@/components/Heading";
import { aboutContent } from "@/data";

const Total = () => {
  const { title, heading, description, boxes } = aboutContent[5];
  return (
    <div
      className="flex flex-col items-center py-36 bg-red-400"
      style={{
        backgroundImage: `url(${about_bottom_pic})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center gap-4">
        <Heading undertext={title} />
        <h2 className="text-4xl font-semibold">{heading}</h2>
        <p className="text-upfblack font-medium">{description}</p>
        <div className="flex max-md:flex-col gap-10">
          {boxes.map((box, index) => (
            <div
              key={box.id}
              className={`flex flex-col items-center py-10 ${
                index !== boxes.length - 1
                  ? "border-r border-upfgray mr-10 pr-20"
                  : ""
              }`}
            >
              <box.icon className="text-4xl" />
              <h2>{box.number}</h2>
              <div>{box.title}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center"></div>
    </div>
  );
};

export default Total;
