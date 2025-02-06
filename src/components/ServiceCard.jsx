import { bgo } from "@/assets";

export default function ServiceCard({
  imageSrc,
  title,
  description,
  link,
  tag,
}) {
  return (
    <div className="rounded-3xl overflow-hidden duration-300">
      <div
        className="m-auto max-w-sm flex flex-col gap-4 "
        style={{ backgroundImage: `url(${bgo})` }}
      >
        {imageSrc && (
          <img
            src={imageSrc}
            alt="Service Image"
            className="w-full h-64 object-cover"
          />
        )}
        <div className="flex flex-col gap-2 p-4">
          {tag && (
            <span className="border-b-2 border-upfteagreent w-fit font-semibold text-upfteagreent">
              # {tag}
            </span>
          )}
          {title && (
            <h2 className="text-2xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
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
