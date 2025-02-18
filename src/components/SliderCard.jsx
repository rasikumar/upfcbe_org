import Heading from "./Heading";

const SliderCard = () => {
  return (
    <div className="bg-upfCardBg py-10 pr-32 pl-16 rounded-3xl flex flex-col gap-2">
      <Heading undertext={"Donate to"} />
      <h1 className="text-white text-2xl w-56">Donate for Food & Education</h1>
      <a href="#donationpage" className="text-upforangecrayola">
        Donate Now
      </a>
    </div>
  );
};

export default SliderCard;
