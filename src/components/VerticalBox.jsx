import { Link } from "react-router";

const VerticalBox = ({ number, title, description, url }) => {
  return (
    <div className="border-2 border-upforangecrayola 2xl:py-8 py-6 md:px-12 px-4 rounded-3xl flex flex-col md:flex-row gap-4">
      <div>
        <span className="2xl:w-16 2xl:h-16 h-12 w-12 bg-red-400 rounded-full flex items-center justify-center 2xl:text-2xl text-lg font-semibold text-white">
          {number}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="inline-flex items-center 2xl:text-3xl text-xl font-semibold">
          {title}
        </h2>
        <p className="text-upfblack 2xl:text-base text-sm font-medium leading-tight">
          {description}
        </p>
        <Link
          to={url}
          className="text-upforangecrayola underline font-medium cursor-pointer 2xl:text-base text-sm"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default VerticalBox;
