import { styleimage } from "@/assets";

const Heading = ({ undertext, className = "" }) => {
  return (
    <div className={`font-Caveat text-upfteagreent ${className}`}>
      <p className="relative text-2xl w-fit">
        {undertext}{" "}
        <span className="absolute top-8 right-0">
          <img src={styleimage} alt="underlineimage" />
        </span>
      </p>
    </div>
  );
};

export default Heading;
