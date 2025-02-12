import Newcard from "../../components/Newcard";
import { news } from "../../data/index";
import MotionSection from "../../components/MotionSection";
import { eventbg } from "@/assets";

const News = () => {
  return (
    <>
      <div style={{ backgroundImage: `url(${eventbg})` }}>
        <div className="w-full text-center mb-8 h-40 flex justify-center items-center">
          <h1 className="text-4xl font-bold">Current News</h1>
        </div>
        <MotionSection>
          <div className="flex flex-col justify-center items-center gap-6 p-6">
            {news.map((event) => (
              <Newcard key={event.id} event={event} />
            ))}
          </div>
        </MotionSection>
      </div>
    </>
  );
};
export default News;
