export const MiniCards = ({ title, description, icon: Icon }) => {
  return (
    <div className="w-full sm:w-72 p-6 rounded-lg  transition-transform transform hover:scale-105 ">
      {/* Icon Display */}
      {Icon && (
        <div className="flex justify-center mb-3">
          <Icon className="text-blue-500 text-4xl" />
        </div>
      )}

      {/* Title */}
      <h2 className="text-xl sm:text-2xl font-semibold text-center text-gray-800">
        {title}
      </h2>

      {/* Description */}
      <p className="w-full sm:w-60 text-upfgray text-center mt-2">
        {description}
      </p>
    </div>
  );
};
