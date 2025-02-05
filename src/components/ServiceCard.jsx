export default function ServiceCard({ imageSrc, title, description, link }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="m-auto p-6 max-w-sm flex flex-col gap-4">
        {imageSrc && (
          <img
            src={imageSrc}
            alt="Service Image"
            className="w-full h-48 object-cover rounded-xl"
          />
        )}
        <div className="flex flex-col gap-2">
          {title && (
            <h2 className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">{description}</p>
          )}
        </div>
        {link && (
          <a
            href={link}
            className="mt-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300"
          >
            Read More →
          </a>
        )}
      </div>
    </div>
  );
}