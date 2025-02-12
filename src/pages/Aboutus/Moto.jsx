import MotoCards from "@/components/MotoCards";
import { aboutContent } from "@/data";
import { Fa42Group } from "react-icons/fa6";

const Moto = () => {
  const { content } = aboutContent[2];
  return (
    <div className="flex max-md:flex-col">
      {content.map((con) => (
        <MotoCards
          title={con.title}
          description={con.description}
          letter={con.letter}
          icon={con.icon}
        />
      ))}
    </div>
  );
};

export default Moto;
