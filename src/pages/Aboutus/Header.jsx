const Header = () => {
  return (
    <div className="relative w-full">
      <img
        src="https://dummyimage.com/2080x400/dedede/dedede"
        alt="Header Image"
        className="w-full max-md:h-52"
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="md:text-4xl text-xl  1">Welcome to Our About Us Page</h1>
      </div>
    </div>
  );
};

export default Header;
