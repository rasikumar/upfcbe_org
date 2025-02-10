import MotoCards from "@/components/MotoCards";
import { aboutContent } from "@/data";

const Moto = () => {
  const { content } = aboutContent[2];
  return (
    <div className="flex max-w">
      <MotoCards />
      <MotoCards />
      <MotoCards />
    </div>
  );
};

export default Moto;
