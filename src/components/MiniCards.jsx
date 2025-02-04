// eslint-disable-next-line react/prop-types
export const MiniCards = ({ title, description, icons: Icon, icons }) => {
  return (
    <div className="w-fit p-6 rounded-lg border transition-transform transform hover:scale-105">
      <div className="flex justify-center">
        {icons && <Icon className="text-blue-500 text-3xl" />}
      </div>
      <h2 className="text-2xl font-semibold mb-3 text-center text-gray-800">
        {title}
      </h2>
      {/* Mini card component content */}
      <p className="w-60 text-gray-600 mb-5">{description}</p>
    </div>
  );
};
