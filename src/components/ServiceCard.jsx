import { bgo } from "@/assets";

export default function ServiceCard({
  imageSrc,
  title,
  description,
  link,
  tag,
}) {
  return (
    <div className="rounded-xl overflow-hidden cursor-default transition-all duration-300 shadow-upfshadow">
      <div
        className="m-auto max-w-[22rem] flex flex-col gap-4 group bg-[#C2E6C7ff]/70"
        style={{ backgroundImage: `url(${bgo})` }}
      >
        {imageSrc && (
          <div className="relative w-full h-64">
            <img
              src={imageSrc}
              alt="Service Image"
              className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
            />
            {/* <div className="absolute inset-0 bg-white object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-50"></div> */}
          </div>
        )}
        <div className="flex flex-col gap-2 p-4">
          {tag && (
            <div className="relative w-fit">
              <span className="border-upfteagreent w-fit font-semibold text-upfteagreent transition-all duration-500 ease-in-out">
                # {tag}
              </span>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-upfteagreent group-hover:w-full transition-all duration-300"></div>
            </div>
          )}
          {title && (
            <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-upforangecrayola transition-colors duration-300 leading-snug">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-gray-600 text-lg leading-relaxed line-clamp-4 ">
              {description}
            </p>
          )}
        </div>
        {link && (
          <a
            href={link}
            className="mt-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300"
          >
            {/* Read More → */}
          </a>
        )}
      </div>
    </div>
  );
}
