import { Link } from "react-router";
import { main_logo } from "../assets";
import { navigations } from "../data";

const Navbar = () => {
  return (
    <nav className="sticky top-0">
      <div className="mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-20 bg-white">
        <Link to="/" className="text-center md:text-left">
          <img src={main_logo} width={100} height={100} />
        </Link>
        <div className="flex gap-4">
          {navigations.map((navigation) => (
            <a
              href={navigation.url}
              key={navigation.title}
              className={`text-lg font-medium ${
                navigation.active ? "text-upfmelon" : "text-upforangecrayola"
              } hover:text-upfmelon transition duration-300 ease-in-out`}
            >
              {navigation.title}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
