import { Link } from "react-router";

const VerticalBox = () => {
  return (
    <div className="border-2 border-upforangecrayola py-8 px-12 rounded-3xl flex gap-4">
      <div>
        <span className="w-16 h-16 bg-red-400 rounded-full flex items-center justify-center text-2xl font-semibold text-white">
          3
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="inline-flex items-center text-3xl font-semibold">
          Mission & Vision
        </h2>
        <p className="text-upfblack font-medium leading-tight">
          We envision a world where every child, regardless of their background,
          has access to quality education
        </p>
        <Link
          to="/s"
          className="text-upforangecrayola underline font-medium cursor-pointer"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default VerticalBox;
