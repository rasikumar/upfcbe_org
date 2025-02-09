import { Link } from "react-router";

const VerticalBox = () => {
  return (
    <div className="border-2 border-upforangecrayola 2xl:py-8 py-6 px-12 rounded-3xl flex gap-4">
      <div>
        <span className="2xl:w-16 2xl:h-16 h-12 w-12 bg-red-400 rounded-full flex items-center justify-center 2xl:text-2xl text-lg font-semibold text-white">
          3
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="inline-flex items-center 2xl:text-3xl text-xl font-semibold">
          Mission & Vision
        </h2>
        <p className="text-upfblack 2xl:text-base text-sm font-medium leading-tight">
          We envision a world where every child, regardless of their background,
          has access to quality education
        </p>
        <Link
          to="/s"
          className="text-upforangecrayola underline font-medium cursor-pointer 2xl:text-base text-sm"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default VerticalBox;
